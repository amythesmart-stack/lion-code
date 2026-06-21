import os from "node:os"
import path from "node:path"
import fs from "node:fs"

import { IpcServer } from "@roo-code/ipc"
import {
	type TaskCommand,
	type TaskEvent,
	IpcMessageType,
	IpcOrigin,
	RooCodeEventName,
	TaskCommandName,
} from "@roo-code/types"

import { Bridge } from "../bridge.js"

/**
 * Phase 1 integration test: prove the forked bridge process can talk to the
 * extension's IPC API surface — it can issue a {@link TaskCommand} and receive
 * the matching {@link TaskEvent} response.
 *
 * We stand up a real {@link IpcServer} (the same class the extension uses) and
 * wire it to a tiny command handler that mimics the extension's API for the
 * query commands. Then a {@link Bridge} connects and runs an API call.
 */

function uniqueSocketPath(): string {
	return path.join(os.tmpdir(), `zoo-code-bridge-test-${Date.now()}-${Math.random().toString(36).slice(2)}.sock`)
}

function cleanupSocket(socketPath: string) {
	try {
		fs.unlinkSync(socketPath)
	} catch {
		// ignore — file may not exist
	}
}

describe("Bridge (Phase 1: IPC API surface)", () => {
	let server: IpcServer
	let socketPath: string

	beforeEach(() => {
		socketPath = uniqueSocketPath()
		cleanupSocket(socketPath)

		server = new IpcServer(socketPath, () => {})
		server.listen()
	})

	afterEach(() => {
		try {
			server.broadcast({ type: IpcMessageType.TaskEvent, origin: IpcOrigin.Server, data: {} as TaskEvent })
		} catch {
			// noop
		}

		// node-ipc doesn't expose a clean stop; rely on process teardown + unlink.
		cleanupSocket(socketPath)
	})

	it("connects, issues GetModes, and receives the ModesResponse event", async () => {
		const expectedModes = [
			{ slug: "code", name: "Code" },
			{ slug: "architect", name: "Architect" },
			{ slug: "ask", name: "Ask" },
		]

		// Mimic the extension's API command handler (see src/extension/api.ts).
		server.on(IpcMessageType.TaskCommand, (clientId, command: TaskCommand) => {
			expect(command.commandName).toBe(TaskCommandName.GetModes)

			server.send(clientId, {
				type: IpcMessageType.TaskEvent,
				origin: IpcOrigin.Server,
				data: {
					eventName: RooCodeEventName.ModesResponse,
					payload: [expectedModes],
				} as TaskEvent,
			})
		})

		const bridge = new Bridge(socketPath)

		try {
			await bridge.connect()
			expect(bridge.isReady).toBe(true)

			const event = await bridge.getModes()

			expect(event.eventName).toBe(RooCodeEventName.ModesResponse)
			expect(event.payload[0]).toEqual(expectedModes)
		} finally {
			bridge.disconnect()
		}
	})

	it("forwards arbitrary TaskEvents to onEvent subscribers", async () => {
		const bridge = new Bridge(socketPath)

		const received: TaskEvent[] = []
		const off = bridge.onEvent(RooCodeEventName.TaskStarted, (event) => received.push(event))

		try {
			await bridge.connect()

			// Simulate the extension broadcasting a TaskStarted event.
			server.broadcast({
				type: IpcMessageType.TaskEvent,
				origin: IpcOrigin.Server,
				data: {
					eventName: RooCodeEventName.TaskStarted,
					payload: ["task-abc-123"],
				} as TaskEvent,
			})

			// Give the socket a tick to deliver.
			await new Promise((resolve) => setTimeout(resolve, 100))

			expect(received).toHaveLength(1)
			expect(received[0]!.eventName).toBe(RooCodeEventName.TaskStarted)
			expect(received[0]!.payload[0]).toBe("task-abc-123")

			off()

			// After unsubscribing, a second broadcast should not be delivered.
			server.broadcast({
				type: IpcMessageType.TaskEvent,
				origin: IpcOrigin.Server,
				data: {
					eventName: RooCodeEventName.TaskStarted,
					payload: ["task-xyz-789"],
				} as TaskEvent,
			})

			await new Promise((resolve) => setTimeout(resolve, 100))
			expect(received).toHaveLength(1)
		} finally {
			bridge.disconnect()
		}
	})

	it("rejects request() when the response event never arrives", async () => {
		// Server that swallows GetCommands without responding.
		server.on(IpcMessageType.TaskCommand, () => {
			// intentionally no response
		})

		const bridge = new Bridge(socketPath)

		try {
			await bridge.connect()

			await expect(
				bridge.request({ commandName: TaskCommandName.GetCommands }, RooCodeEventName.CommandsResponse, 500),
			).rejects.toThrow(/timed out/)
		} finally {
			bridge.disconnect()
		}
	})
})
