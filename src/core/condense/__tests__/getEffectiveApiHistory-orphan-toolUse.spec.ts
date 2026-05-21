// npx vitest run core/condense/__tests__/getEffectiveApiHistory-orphan-toolUse.spec.ts

import { describe, expect, it, vi } from "vitest"

import { TelemetryService } from "@roo-code/telemetry"

import { ApiMessage } from "../../task-persistence/apiMessages"
import { MissingToolResultError } from "../../task/validateToolResultIds"
import { SYNTHETIC_TOOL_RESULT_REASONS, getEffectiveApiHistory, injectSyntheticToolResults } from "../index"

vi.mock("@roo-code/telemetry", () => ({
	TelemetryService: {
		hasInstance: vi.fn(() => true),
		instance: {
			captureContextCondensed: vi.fn(),
			captureException: vi.fn(),
		},
	},
}))

// Regression guard for issue #190. The send path in Task.ts runs
//
//   injectSyntheticToolResults(getEffectiveApiHistory(history), "historyShaping")
//
// to ensure that even after truncation/condensation filtering, every assistant tool_use
// has a paired user-side tool_result. This spec exercises that exact composition: it
// fails on the raw output of getEffectiveApiHistory (which by itself can strand a
// tool_use whose result was truncated), and passes once injectSyntheticToolResults runs.
// The fix is intentionally applied at the send path rather than inside
// getEffectiveApiHistory — its other two callers (Task.ts:945 and
// apiConversationHistory.ts:110) peek at lastEffective.role for insert-time validation
// and would be confused by a synthetic trailing user message.
function effectiveApiHistoryForSend(messages: ApiMessage[]): ApiMessage[] {
	return injectSyntheticToolResults(getEffectiveApiHistory(messages), SYNTHETIC_TOOL_RESULT_REASONS.historyShaping)
}

describe("getEffectiveApiHistory tool_use / tool_result pairing across truncation", () => {
	it("does not leave an assistant tool_use unpaired when the user tool_result message is truncated", () => {
		const truncationId = "trunc-pairing-1"
		const toolUseId = "toolu_repro_190_pair_1"

		const messages: ApiMessage[] = [
			{
				role: "user",
				content: [{ type: "text", text: "Please read the file." }],
			},
			{
				role: "assistant",
				content: [
					{
						type: "tool_use",
						id: toolUseId,
						name: "read_file",
						input: { path: "foo.txt" },
					},
				],
			},
			// User message carrying only the tool_result, tagged for truncation.
			{
				role: "user",
				content: [
					{
						type: "tool_result",
						tool_use_id: toolUseId,
						content: "file contents",
					},
				],
				truncationParent: truncationId,
			},
			// Truncation marker that activates the truncationParent filter above.
			{
				role: "user",
				content: [{ type: "text", text: "[history truncated]" }],
				isTruncationMarker: true,
				truncationId,
			},
			{
				role: "assistant",
				content: [{ type: "text", text: "Here is the next step." }],
			},
		]

		const result = effectiveApiHistoryForSend(messages)

		// Collect surviving tool_use IDs (assistant side) and tool_result IDs (user side).
		const survivingToolUseIds: string[] = []
		const survivingToolResultIds: string[] = []
		for (const msg of result) {
			if (!Array.isArray(msg.content)) continue
			for (const block of msg.content) {
				if (msg.role === "assistant" && block.type === "tool_use") {
					survivingToolUseIds.push(block.id)
				}
				if (msg.role === "user" && block.type === "tool_result") {
					survivingToolResultIds.push(block.tool_use_id)
				}
			}
		}

		// Either both survive (the tool_use is still answerable) or both are dropped
		// (the orphan tool_use is removed alongside its filtered result). Anything else is
		// the bug we're guarding against.
		const stranded = survivingToolUseIds.filter((id) => !survivingToolResultIds.includes(id))
		expect(stranded).toEqual([])
	})

	it("does not leave an assistant tool_use unpaired when the truncated user message also carried text content", () => {
		// Same shape, but the user message has a text block alongside the tool_result.
		// This proves we're not only protected by full-message removal: block-level filtering
		// must not silently drop a tool_result while keeping the rest of the message.
		const truncationId = "trunc-pairing-2"
		const toolUseId = "toolu_repro_190_pair_2"

		const messages: ApiMessage[] = [
			{
				role: "user",
				content: [{ type: "text", text: "Please read the file." }],
			},
			{
				role: "assistant",
				content: [
					{
						type: "tool_use",
						id: toolUseId,
						name: "read_file",
						input: { path: "foo.txt" },
					},
				],
			},
			{
				role: "user",
				content: [
					{
						type: "tool_result",
						tool_use_id: toolUseId,
						content: "file contents",
					},
					{ type: "text", text: "Continue with the next step." },
				],
				truncationParent: truncationId,
			},
			{
				role: "user",
				content: [{ type: "text", text: "[history truncated]" }],
				isTruncationMarker: true,
				truncationId,
			},
			{
				role: "assistant",
				content: [{ type: "text", text: "Here is the next step." }],
			},
		]

		const result = effectiveApiHistoryForSend(messages)

		const survivingToolUseIds: string[] = []
		const survivingToolResultIds: string[] = []
		for (const msg of result) {
			if (!Array.isArray(msg.content)) continue
			for (const block of msg.content) {
				if (msg.role === "assistant" && block.type === "tool_use") {
					survivingToolUseIds.push(block.id)
				}
				if (msg.role === "user" && block.type === "tool_result") {
					survivingToolResultIds.push(block.tool_use_id)
				}
			}
		}

		const stranded = survivingToolUseIds.filter((id) => !survivingToolResultIds.includes(id))
		expect(stranded).toEqual([])
	})

	it("does not leave an assistant tool_use unpaired in the summary (fresh-start) branch", () => {
		// Summary-branch path of getEffectiveApiHistory: only messages from the most recent
		// summary onwards are kept, and orphan tool_result blocks referencing pre-summary
		// tool_use IDs are filtered. This case constructs the inverse: an assistant tool_use
		// lands inside the summary range, but its tool_result was on a pre-summary user
		// message (condensed away). Without pairing, the surviving tool_use is stranded.
		const condenseId = "cond-pairing-1"
		const toolUseId = "toolu_repro_190_summary_1"

		const messages: ApiMessage[] = [
			// Pre-summary: user message that carried the tool_result. Tagged so the summary
			// branch filters it out via the "messages.slice(summaryIndex)" cut.
			{
				role: "user",
				content: [
					{
						type: "tool_result",
						tool_use_id: toolUseId,
						content: "file contents",
					},
				],
				condenseParent: condenseId,
			},
			// Summary marker.
			{
				role: "user",
				content: [{ type: "text", text: "Summary of prior work." }],
				isSummary: true,
				condenseId,
			},
			// Post-summary assistant message with a tool_use whose matching tool_result is now
			// gone. This is an artificial but representative shape — any history-shaping path
			// that leaves a tool_use without a paired result downstream produces this.
			{
				role: "assistant",
				content: [
					{
						type: "tool_use",
						id: toolUseId,
						name: "read_file",
						input: { path: "foo.txt" },
					},
				],
			},
		]

		const result = effectiveApiHistoryForSend(messages)

		const survivingToolUseIds: string[] = []
		const survivingToolResultIds: string[] = []
		for (const msg of result) {
			if (!Array.isArray(msg.content)) continue
			for (const block of msg.content) {
				if (msg.role === "assistant" && block.type === "tool_use") {
					survivingToolUseIds.push(block.id)
				}
				if (msg.role === "user" && block.type === "tool_result") {
					survivingToolResultIds.push(block.tool_use_id)
				}
			}
		}

		const stranded = survivingToolUseIds.filter((id) => !survivingToolResultIds.includes(id))
		expect(stranded).toEqual([])
	})

	it("appends a synthetic tool_result whose tool_use_id exactly matches each orphan, and reports telemetry", () => {
		// Tightening assertion: the previous cases just check that *some* tool_result with the
		// orphan id exists in the surviving history. That would pass even if the synthetic block
		// targeted the wrong id (e.g. off-by-one). Here we pin the appended message to be a fresh
		// user message containing exactly the expected synthetic results, and we verify the
		// MissingToolResultError telemetry the send-path uses to confirm this guard fired.
		const captureException = TelemetryService.instance.captureException as ReturnType<typeof vi.fn>
		captureException.mockClear()

		const truncationId = "trunc-pairing-exact"
		const orphanedToolUseId = "toolu_repro_190_exact_1"

		const messages: ApiMessage[] = [
			{ role: "user", content: [{ type: "text", text: "Please read the file." }] },
			{
				role: "assistant",
				content: [
					{
						type: "tool_use",
						id: orphanedToolUseId,
						name: "read_file",
						input: { path: "foo.txt" },
					},
				],
			},
			{
				role: "user",
				content: [{ type: "tool_result", tool_use_id: orphanedToolUseId, content: "file contents" }],
				truncationParent: truncationId,
			},
			{
				role: "user",
				content: [{ type: "text", text: "[history truncated]" }],
				isTruncationMarker: true,
				truncationId,
			},
		]

		const result = effectiveApiHistoryForSend(messages)

		const appended = result[result.length - 1]
		expect(appended.role).toBe("user")
		expect(Array.isArray(appended.content)).toBe(true)

		const appendedBlocks = appended.content as Array<{
			type: string
			tool_use_id?: string
			content?: unknown
		}>
		expect(appendedBlocks).toHaveLength(1)
		expect(appendedBlocks[0].type).toBe("tool_result")
		expect(appendedBlocks[0].tool_use_id).toBe(orphanedToolUseId)
		expect(appendedBlocks[0].content).toBe(SYNTHETIC_TOOL_RESULT_REASONS.historyShaping)

		// Telemetry: one capture, with the orphan id and reason in the payload so dashboards
		// can correlate this guard's activation across sources.
		expect(captureException).toHaveBeenCalledTimes(1)
		const [errorArg, metaArg] = captureException.mock.calls[0]
		expect(errorArg).toBeInstanceOf(MissingToolResultError)
		expect((errorArg as MissingToolResultError).missingToolUseIds).toEqual([orphanedToolUseId])
		expect(metaArg).toMatchObject({
			reason: SYNTHETIC_TOOL_RESULT_REASONS.historyShaping,
			missingToolUseIds: [orphanedToolUseId],
			source: "injectSyntheticToolResults",
		})
	})
})
