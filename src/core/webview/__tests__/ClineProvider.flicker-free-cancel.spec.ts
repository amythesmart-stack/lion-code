import { beforeEach, describe, expect, it, vi } from "vitest"
import * as vscode from "vscode"

import { ClineProvider } from "../ClineProvider"
import { Task } from "../../task/Task"
import { ContextProxy } from "../../config/ContextProxy"
import type { ProviderSettings, HistoryItem } from "@roo-code/types"

// Mock dependencies
vi.mock("vscode", () => {
	const mockDisposable = { dispose: vi.fn() }
	return {
		workspace: {
			getConfiguration: vi.fn(() => ({
				get: vi.fn().mockReturnValue([]),
				update: vi.fn().mockResolvedValue(undefined),
			})),
			workspaceFolders: [],
			onDidChangeConfiguration: vi.fn(() => mockDisposable),
		},
		env: {
			uriScheme: "vscode",
			language: "en",
		},
		EventEmitter: vi.fn().mockImplementation(function () {
			return {
				event: vi.fn(),
				fire: vi.fn(),
			}
		}),
		Disposable: {
			from: vi.fn(),
		},
		window: {
			showErrorMessage: vi.fn(),
			createTextEditorDecorationType: vi.fn().mockReturnValue({
				dispose: vi.fn(),
			}),
			onDidChangeActiveTextEditor: vi.fn(() => mockDisposable),
		},
		Uri: {
			file: vi.fn().mockReturnValue({ toString: () => "file://test" }),
		},
	}
})

vi.mock("../../task/Task")
vi.mock("../../config/ContextProxy")
vi.mock("../../../services/mcp/McpServerManager", () => ({
	McpServerManager: {
		getInstance: vi.fn().mockResolvedValue({
			registerClient: vi.fn(),
		}),
		unregisterProvider: vi.fn(),
	},
}))
vi.mock("../../../services/marketplace")
vi.mock("../../../integrations/workspace/WorkspaceTracker")
vi.mock("../../config/ProviderSettingsManager")
vi.mock("../../config/CustomModesManager")
vi.mock("../../../utils/path", () => ({
	getWorkspacePath: vi.fn().mockReturnValue("/test/workspace"),
}))

// Mock TelemetryService
vi.mock("@roo-code/telemetry", () => ({
	TelemetryService: {
		instance: {
			setProvider: vi.fn(),
			captureTaskCreated: vi.fn(),
		},
	},
}))

// Mock CloudService
vi.mock("@roo-code/cloud", () => ({
	CloudService: {
		hasInstance: vi.fn().mockReturnValue(false),
		instance: {
			isAuthenticated: vi.fn().mockReturnValue(false),
		},
	},
	getRooCodeApiUrl: vi.fn().mockReturnValue("https://api.roo-code.com"),
}))

vi.mock("../../../shared/embeddingModels", () => ({
	EMBEDDING_MODEL_PROFILES: [],
}))

describe("ClineProvider flicker-free cancel", () => {
	let provider: ClineProvider
	let mockContext: any
	let mockOutputChannel: any
	let mockTask1: any
	let mockTask2: any

	const mockApiConfig: ProviderSettings = {
		apiProvider: "anthropic",
		apiKey: "test-key",
	} as ProviderSettings

	beforeEach(() => {
		vi.clearAllMocks()

		// Setup mock extension context
		mockContext = {
			globalState: {
				get: vi.fn().mockReturnValue(undefined),
				update: vi.fn().mockResolvedValue(undefined),
				keys: vi.fn().mockReturnValue([]),
			},
			globalStorageUri: { fsPath: "/test/storage" },
			secrets: {
				get: vi.fn().mockResolvedValue(undefined),
				store: vi.fn().mockResolvedValue(undefined),
				delete: vi.fn().mockResolvedValue(undefined),
			},
			workspaceState: {
				get: vi.fn().mockReturnValue(undefined),
				update: vi.fn().mockResolvedValue(undefined),
				keys: vi.fn().mockReturnValue([]),
			},
			extensionUri: { fsPath: "/test/extension" },
		}

		// Setup mock output channel
		mockOutputChannel = {
			appendLine: vi.fn(),
			dispose: vi.fn(),
		}

		// Setup mock context proxy
		const mockContextProxy = {
			getValues: vi.fn().mockReturnValue({}),
			getValue: vi.fn().mockReturnValue(undefined),
			setValue: vi.fn().mockResolvedValue(undefined),
			getProviderSettings: vi.fn().mockReturnValue(mockApiConfig),
			extensionUri: mockContext.extensionUri,
			globalStorageUri: mockContext.globalStorageUri,
		}

		// Create provider instance
		provider = new ClineProvider(mockContext, mockOutputChannel, "sidebar", mockContextProxy as any)

		// Mock provider methods
		provider.getState = vi.fn().mockResolvedValue({
			apiConfiguration: mockApiConfig,
			mode: "code",
		})

		provider.postStateToWebview = vi.fn().mockResolvedValue(undefined)
		provider.postStateToWebviewWithoutTaskHistory = vi.fn().mockResolvedValue(undefined)
		// Mock private method using any cast
		;(provider as any).updateGlobalState = vi.fn().mockResolvedValue(undefined)
		provider.activateProviderProfile = vi.fn().mockResolvedValue(undefined)
		provider.performPreparationTasks = vi.fn().mockResolvedValue(undefined)
		provider.getTaskWithId = vi.fn().mockImplementation((id) =>
			Promise.resolve({
				historyItem: {
					id,
					number: 1,
					ts: Date.now(),
					task: "test task",
					tokensIn: 100,
					tokensOut: 200,
					totalCost: 0.001,
					workspace: "/test/workspace",
				},
			}),
		)

		// Setup mock tasks
		mockTask1 = {
			taskId: "task-1",
			instanceId: "instance-1",
			emit: vi.fn(),
			abortTask: vi.fn().mockResolvedValue(undefined),
			abandoned: false,
			dispose: vi.fn(),
			on: vi.fn(),
			off: vi.fn(),
		}

		mockTask2 = {
			taskId: "task-1", // Same ID for rehydration scenario
			instanceId: "instance-2", // Different instance
			emit: vi.fn(),
			on: vi.fn(),
			off: vi.fn(),
		}

		// Mock Task constructor
		vi.mocked(Task).mockImplementation(function () {
			return mockTask2 as any
		})
	})

	it("should not remove current task from stack when rehydrating same taskId", async () => {
		// Setup: Add a task to the stack first
		;(provider as any).clineStack = [mockTask1]

		// Mock event listeners for cleanup
		;(provider as any).taskEventListeners = new WeakMap()
		const mockCleanupFunctions = [vi.fn(), vi.fn()]
		;(provider as any).taskEventListeners.set(mockTask1, mockCleanupFunctions)

		// Spy on removeClineFromStack to verify it's NOT called
		const removeClineFromStackSpy = vi.spyOn(provider, "removeClineFromStack")

		// Create history item with same taskId as current task
		const historyItem: HistoryItem = {
			id: "task-1", // Same as mockTask1.taskId
			number: 1,
			task: "test task",
			ts: Date.now(),
			tokensIn: 100,
			tokensOut: 200,
			totalCost: 0.001,
			workspace: "/test/workspace",
		}

		// Act: Create task with history item (should rehydrate in-place)
		await provider.createTaskWithHistoryItem(historyItem)

		// Assert: removeClineFromStack should NOT be called
		expect(removeClineFromStackSpy).not.toHaveBeenCalled()

		// Verify the task was replaced in-place
		expect((provider as any).clineStack).toHaveLength(1)
		expect((provider as any).clineStack[0]).toBe(mockTask2)

		// Verify old event listeners were cleaned up
		expect(mockCleanupFunctions[0]).toHaveBeenCalled()
		expect(mockCleanupFunctions[1]).toHaveBeenCalled()

		// Verify new task received focus event
		expect(mockTask2.emit).toHaveBeenCalledWith("taskFocused")
	})

	it("should remove task from stack when creating different task", async () => {
		// Setup: Add a task to the stack first
		;(provider as any).clineStack = [mockTask1]

		// Spy on removeClineFromStack to verify it IS called
		const removeClineFromStackSpy = vi.spyOn(provider, "removeClineFromStack").mockResolvedValue(undefined)

		// Create history item with different taskId
		const historyItem: HistoryItem = {
			id: "task-2", // Different from mockTask1.taskId
			number: 2,
			task: "different task",
			ts: Date.now(),
			tokensIn: 150,
			tokensOut: 250,
			totalCost: 0.002,
			workspace: "/test/workspace",
		}

		// Act: Create task with different history item
		await provider.createTaskWithHistoryItem(historyItem)

		// Assert: removeClineFromStack should be called
		expect(removeClineFromStackSpy).toHaveBeenCalled()
	})

	it("should handle empty stack gracefully during rehydration attempt", async () => {
		// Setup: Empty stack
		;(provider as any).clineStack = []

		// Spy on removeClineFromStack
		const removeClineFromStackSpy = vi.spyOn(provider, "removeClineFromStack").mockResolvedValue(undefined)

		// Create history item
		const historyItem: HistoryItem = {
			id: "task-1",
			number: 1,
			task: "test task",
			ts: Date.now(),
			tokensIn: 100,
			tokensOut: 200,
			totalCost: 0.001,
			workspace: "/test/workspace",
		}

		// Act: Should not error and should call removeClineFromStack
		await provider.createTaskWithHistoryItem(historyItem)

		// Assert: removeClineFromStack should be called (no current task to rehydrate)
		expect(removeClineFromStackSpy).toHaveBeenCalled()
	})

	it("should maintain task stack integrity during flicker-free replacement", async () => {
		// Setup: Stack with multiple tasks
		const mockParentTask = {
			taskId: "parent-task",
			instanceId: "parent-instance",
			emit: vi.fn(),
		}

		;(provider as any).clineStack = [mockParentTask, mockTask1]
		;(provider as any).taskEventListeners = new WeakMap()
		;(provider as any).taskEventListeners.set(mockTask1, [vi.fn()])

		// Act: Rehydrate the current (top) task
		const historyItem: HistoryItem = {
			id: "task-1",
			number: 1,
			task: "test task",
			ts: Date.now(),
			tokensIn: 100,
			tokensOut: 200,
			totalCost: 0.001,
			workspace: "/test/workspace",
		}

		await provider.createTaskWithHistoryItem(historyItem)

		// Assert: Stack should maintain parent task and replace current task
		expect((provider as any).clineStack).toHaveLength(2)
		expect((provider as any).clineStack[0]).toBe(mockParentTask)
		expect((provider as any).clineStack[1]).toBe(mockTask2)
	})

	it("self-heals orphaned delegated parent when awaited child no longer exists", async () => {
		// Setup: delegated parent whose awaitingChildId points to a deleted child
		const orphanedHistory: HistoryItem = {
			id: "parent-1",
			number: 1,
			task: "parent task",
			ts: Date.now(),
			tokensIn: 10,
			tokensOut: 20,
			totalCost: 0.001,
			workspace: "/test/workspace",
			status: "delegated",
			awaitingChildId: "deleted-child",
		}

		;(provider as any).clineStack = []
		provider.getTaskWithId = vi.fn().mockImplementation((id) => {
			if (id === "deleted-child") {
				return Promise.reject(new Error("Task not found"))
			}
			return Promise.resolve({ historyItem: orphanedHistory })
		}) as any
		const updateTaskHistorySpy = vi.spyOn(provider, "updateTaskHistory").mockResolvedValue([])
		vi.spyOn(provider, "removeClineFromStack").mockResolvedValue(undefined)

		await provider.createTaskWithHistoryItem(orphanedHistory)

		// Should have persisted the self-healed state
		expect(updateTaskHistorySpy).toHaveBeenCalledWith(
			expect.objectContaining({
				id: "parent-1",
				status: "active",
				awaitingChildId: undefined,
			}),
		)
	})

	it("self-heals delegated parent when awaited child exists but parentTaskId was severed", async () => {
		// Scenario: fail-closed cancel stripped parentTaskId from child; parent is stuck "delegated"
		const orphanedHistory: HistoryItem = {
			id: "parent-1",
			number: 1,
			task: "parent task",
			ts: Date.now(),
			tokensIn: 10,
			tokensOut: 20,
			totalCost: 0.001,
			workspace: "/test/workspace",
			status: "delegated",
			awaitingChildId: "child-1",
		}
		const severedChildHistory: HistoryItem = {
			id: "child-1",
			number: 2,
			task: "child task",
			ts: Date.now(),
			tokensIn: 10,
			tokensOut: 20,
			totalCost: 0.001,
			workspace: "/test/workspace",
			status: "interrupted",
			parentTaskId: undefined, // severed by fail-closed cancel
		}

		;(provider as any).clineStack = []
		provider.getTaskWithId = vi.fn().mockImplementation((id) => {
			if (id === "child-1") {
				return Promise.resolve({ historyItem: severedChildHistory })
			}
			if (id === "parent-1") {
				return Promise.resolve({ historyItem: orphanedHistory })
			}
			throw new Error(`unexpected task lookup: ${id}`)
		}) as any
		const updateTaskHistorySpy = vi.spyOn(provider, "updateTaskHistory").mockResolvedValue([])
		vi.spyOn(provider, "removeClineFromStack").mockResolvedValue(undefined)

		await provider.createTaskWithHistoryItem(orphanedHistory)

		// Should self-heal because child's parentTaskId doesn't match parent's id
		expect(updateTaskHistorySpy).toHaveBeenCalledWith(
			expect.objectContaining({
				id: "parent-1",
				status: "active",
				awaitingChildId: undefined,
			}),
		)
	})

	it("does not self-heal delegated parent on transient I/O error from getTaskWithId", async () => {
		const delegatedHistory: HistoryItem = {
			id: "parent-1",
			number: 1,
			task: "parent task",
			ts: Date.now(),
			tokensIn: 10,
			tokensOut: 20,
			totalCost: 0.001,
			workspace: "/test/workspace",
			status: "delegated",
			awaitingChildId: "child-1",
		}

		;(provider as any).clineStack = []
		provider.getTaskWithId = vi.fn().mockImplementation((id) => {
			if (id === "child-1") {
				return Promise.reject(new Error("EMFILE: too many open files"))
			}
			if (id === "parent-1") {
				return Promise.resolve({ historyItem: delegatedHistory })
			}
			throw new Error(`unexpected task lookup: ${id}`)
		}) as any
		const updateTaskHistorySpy = vi.spyOn(provider, "updateTaskHistory").mockResolvedValue([])
		vi.spyOn(provider, "removeClineFromStack").mockResolvedValue(undefined)

		await provider.createTaskWithHistoryItem(delegatedHistory)

		// Should NOT self-heal — the error is transient, not "Task not found"
		expect(updateTaskHistorySpy).not.toHaveBeenCalledWith(
			expect.objectContaining({
				status: "active",
				awaitingChildId: undefined,
			}),
		)
	})

	it("does not self-heal delegated parent when awaited child still exists", async () => {
		const delegatedHistory: HistoryItem = {
			id: "parent-1",
			number: 1,
			task: "parent task",
			ts: Date.now(),
			tokensIn: 10,
			tokensOut: 20,
			totalCost: 0.001,
			workspace: "/test/workspace",
			status: "delegated",
			awaitingChildId: "child-1",
		}
		const childHistory: HistoryItem = {
			id: "child-1",
			number: 2,
			task: "child task",
			ts: Date.now(),
			tokensIn: 10,
			tokensOut: 20,
			totalCost: 0.001,
			workspace: "/test/workspace",
			status: "interrupted",
			parentTaskId: "parent-1",
		}

		;(provider as any).clineStack = []
		provider.getTaskWithId = vi.fn().mockImplementation((id) => {
			if (id === "child-1") {
				return Promise.resolve({ historyItem: childHistory })
			}
			if (id === "parent-1") {
				return Promise.resolve({ historyItem: delegatedHistory })
			}
			throw new Error(`unexpected task lookup: ${id}`)
		}) as any
		const updateTaskHistorySpy = vi.spyOn(provider, "updateTaskHistory").mockResolvedValue([])
		vi.spyOn(provider, "removeClineFromStack").mockResolvedValue(undefined)

		await provider.createTaskWithHistoryItem(delegatedHistory)

		// Should NOT have called updateTaskHistory for self-healing (child exists with matching parentTaskId)
		expect(updateTaskHistorySpy).not.toHaveBeenCalledWith(
			expect.objectContaining({
				status: "active",
				awaitingChildId: undefined,
			}),
		)
	})

	it("marks cancelled delegated child as interrupted while preserving parent-child link", async () => {
		const mockRootTask = { taskId: "root-1" }
		const mockParentTask = { taskId: "parent-1" }
		const childHistory: HistoryItem = {
			id: "child-1",
			number: 2,
			task: "child task",
			ts: Date.now(),
			tokensIn: 10,
			tokensOut: 20,
			totalCost: 0.001,
			workspace: "/test/workspace",
			parentTaskId: "parent-1",
			rootTaskId: "root-1",
		}
		const parentHistory: HistoryItem = {
			id: "parent-1",
			number: 1,
			task: "parent task",
			ts: Date.now(),
			tokensIn: 10,
			tokensOut: 20,
			totalCost: 0.001,
			workspace: "/test/workspace",
			status: "delegated",
			awaitingChildId: "child-1",
			delegatedToId: "child-1",
		}

		Object.assign(mockTask1, {
			taskId: "child-1",
			instanceId: "instance-child",
			rootTask: mockRootTask,
			parentTask: mockParentTask,
			parentTaskId: "parent-1",
			cancelCurrentRequest: vi.fn(),
			abortTask: vi.fn(),
			abandoned: false,
			isStreaming: false,
			didFinishAbortingStream: true,
			isWaitingForFirstChunk: false,
		})
		;(provider as any).clineStack = [mockTask1]
		provider.getTaskWithId = vi.fn().mockImplementation((id) => {
			if (id === "child-1") {
				return Promise.resolve({ historyItem: childHistory })
			}
			if (id === "parent-1") {
				return Promise.resolve({ historyItem: parentHistory })
			}
			throw new Error(`unexpected task lookup: ${id}`)
		}) as any

		const updateTaskHistorySpy = vi.spyOn(provider, "updateTaskHistory").mockResolvedValue([])
		const createTaskWithHistoryItemSpy = vi
			.spyOn(provider, "createTaskWithHistoryItem")
			.mockResolvedValue(undefined as any)

		await provider.cancelTask()

		// Child should be marked as interrupted (not detached from parent)
		expect(updateTaskHistorySpy).toHaveBeenCalledWith(
			expect.objectContaining({
				id: "child-1",
				status: "interrupted",
				parentTaskId: "parent-1",
				rootTaskId: "root-1",
			}),
		)
		// Parent links should be preserved for rehydration
		expect(createTaskWithHistoryItemSpy).toHaveBeenCalledWith(
			expect.objectContaining({
				id: "child-1",
				status: "interrupted",
				parentTaskId: "parent-1",
				rootTaskId: "root-1",
			}),
		)
	})

	it("detaches runtime parent links when marking child as interrupted fails", async () => {
		const mockRootTask = { taskId: "root-1" }
		const mockParentTask = { taskId: "parent-1" }
		const childHistory: HistoryItem = {
			id: "child-1",
			number: 2,
			task: "child task",
			ts: Date.now(),
			tokensIn: 10,
			tokensOut: 20,
			totalCost: 0.001,
			workspace: "/test/workspace",
			parentTaskId: "parent-1",
			rootTaskId: "root-1",
		}

		Object.assign(mockTask1, {
			taskId: "child-1",
			instanceId: "instance-child",
			rootTask: mockRootTask,
			parentTask: mockParentTask,
			parentTaskId: "parent-1",
			cancelCurrentRequest: vi.fn(),
			abortTask: vi.fn(),
			abandoned: false,
			isStreaming: false,
			didFinishAbortingStream: true,
			isWaitingForFirstChunk: false,
		})
		;(provider as any).clineStack = [mockTask1]
		provider.getTaskWithId = vi.fn().mockImplementation((id) => {
			if (id === "child-1") {
				return Promise.resolve({ historyItem: childHistory })
			}
			if (id === "parent-1") {
				return Promise.reject(new Error("parent lookup failed"))
			}
			throw new Error(`unexpected task lookup: ${id}`)
		}) as any

		const updateTaskHistorySpy = vi.spyOn(provider, "updateTaskHistory").mockResolvedValue([])
		const createTaskWithHistoryItemSpy = vi
			.spyOn(provider, "createTaskWithHistoryItem")
			.mockResolvedValue(undefined as any)

		await provider.cancelTask()

		expect(mockOutputChannel.appendLine).toHaveBeenCalledWith(
			expect.stringContaining(
				"[cancelTask] Failed to mark child as interrupted for child-1: parent lookup failed",
			),
		)
		expect(updateTaskHistorySpy).toHaveBeenCalledWith(
			expect.objectContaining({
				id: "child-1",
				parentTaskId: undefined,
				rootTaskId: undefined,
			}),
		)
		expect(createTaskWithHistoryItemSpy).toHaveBeenCalledWith(
			expect.objectContaining({
				id: "child-1",
				parentTaskId: undefined,
				rootTaskId: undefined,
				parentTask: undefined,
				rootTask: undefined,
			}),
		)
		expect((provider as any).cancelledDelegationChildIds.has("child-1")).toBe(true)
	})

	it("does not rehydrate a cancelled child when standalone persistence also fails", async () => {
		const childHistory: HistoryItem = {
			id: "child-1",
			number: 2,
			task: "child task",
			ts: Date.now(),
			tokensIn: 10,
			tokensOut: 20,
			totalCost: 0.001,
			workspace: "/test/workspace",
			parentTaskId: "parent-1",
			rootTaskId: "root-1",
		}

		Object.assign(mockTask1, {
			taskId: "child-1",
			instanceId: "instance-child",
			parentTaskId: "parent-1",
			cancelCurrentRequest: vi.fn(),
			abortTask: vi.fn(),
			abandoned: false,
			isStreaming: false,
			didFinishAbortingStream: true,
			isWaitingForFirstChunk: false,
		})
		;(provider as any).clineStack = [mockTask1]
		provider.getTaskWithId = vi.fn().mockImplementation((id) => {
			if (id === "child-1") {
				return Promise.resolve({ historyItem: childHistory })
			}
			if (id === "parent-1") {
				return Promise.reject(new Error("parent lookup failed"))
			}
			throw new Error(`unexpected task lookup: ${id}`)
		}) as any

		vi.spyOn(provider, "updateTaskHistory").mockRejectedValue(new Error("standalone persist failed"))
		const createTaskWithHistoryItemSpy = vi
			.spyOn(provider, "createTaskWithHistoryItem")
			.mockResolvedValue(undefined as any)

		await expect(provider.cancelTask()).rejects.toThrow("standalone persist failed")
		expect(createTaskWithHistoryItemSpy).not.toHaveBeenCalled()
		expect((provider as any).cancelledDelegationChildIds.has("child-1")).toBe(true)
	})

	it("repairs orphaned parent when deleting an awaited delegation child", async () => {
		const childHistory: HistoryItem = {
			id: "child-1",
			number: 2,
			task: "child task",
			ts: Date.now(),
			tokensIn: 10,
			tokensOut: 20,
			totalCost: 0.001,
			workspace: "/test/workspace",
			parentTaskId: "parent-1",
			rootTaskId: "root-1",
		}
		const parentHistory: HistoryItem = {
			id: "parent-1",
			number: 1,
			task: "parent task",
			ts: Date.now(),
			tokensIn: 10,
			tokensOut: 20,
			totalCost: 0.001,
			workspace: "/test/workspace",
			status: "delegated",
			awaitingChildId: "child-1",
			childIds: ["child-1", "child-other"],
		}

		;(provider as any).clineStack = []
		provider.getTaskWithId = vi.fn().mockImplementation((id) => {
			if (id === "child-1") {
				return Promise.resolve({ historyItem: childHistory, taskDirPath: "/test/storage/child-1" })
			}
			if (id === "parent-1") {
				return Promise.resolve({ historyItem: parentHistory })
			}
			throw new Error(`unexpected task lookup: ${id}`)
		}) as any

		const updateTaskHistorySpy = vi.spyOn(provider, "updateTaskHistory").mockResolvedValue([])
		;(provider as any).taskHistoryStore = {
			deleteMany: vi.fn().mockResolvedValue(undefined),
		}

		await provider.deleteTaskWithId("child-1")

		// Parent should be repaired: reset to active with awaitingChildId cleared and childIds cleaned
		expect(updateTaskHistorySpy).toHaveBeenCalledWith(
			expect.objectContaining({
				id: "parent-1",
				status: "active",
				awaitingChildId: undefined,
				childIds: ["child-other"],
			}),
		)
	})

	it("does not repair parent when deleted child is not the awaited one", async () => {
		const childHistory: HistoryItem = {
			id: "child-2",
			number: 3,
			task: "other child",
			ts: Date.now(),
			tokensIn: 10,
			tokensOut: 20,
			totalCost: 0.001,
			workspace: "/test/workspace",
			parentTaskId: "parent-1",
		}
		const parentHistory: HistoryItem = {
			id: "parent-1",
			number: 1,
			task: "parent task",
			ts: Date.now(),
			tokensIn: 10,
			tokensOut: 20,
			totalCost: 0.001,
			workspace: "/test/workspace",
			status: "delegated",
			awaitingChildId: "child-1", // awaiting a different child
		}

		;(provider as any).clineStack = []
		provider.getTaskWithId = vi.fn().mockImplementation((id) => {
			if (id === "child-2") {
				return Promise.resolve({ historyItem: childHistory, taskDirPath: "/test/storage/child-2" })
			}
			if (id === "parent-1") {
				return Promise.resolve({ historyItem: parentHistory })
			}
			throw new Error(`unexpected task lookup: ${id}`)
		}) as any

		const updateTaskHistorySpy = vi.spyOn(provider, "updateTaskHistory").mockResolvedValue([])
		;(provider as any).taskHistoryStore = {
			deleteMany: vi.fn().mockResolvedValue(undefined),
		}

		await provider.deleteTaskWithId("child-2")

		// Parent should NOT be repaired — it awaits a different child
		expect(updateTaskHistorySpy).not.toHaveBeenCalledWith(
			expect.objectContaining({
				id: "parent-1",
				status: "active",
			}),
		)
	})
})
