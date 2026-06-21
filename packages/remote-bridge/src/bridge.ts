import { IpcClient } from "@roo-code/ipc"
import { type TaskCommand, type TaskEvent, IpcMessageType, RooCodeEventName, TaskCommandName } from "@roo-code/types"

/**
 * Bridge is the forked Node process's handle on the Zoo Code API surface.
 *
 * It owns an {@link IpcClient} that connects to the extension's IPC server over
 * a Unix socket (the same socket the CLI uses). In Phase 1 the bridge simply
 * proves it can talk to the API surface: it can send {@link TaskCommand}s and
 * receive {@link TaskEvent}s. Later phases will forward these over a WebRTC
 * data channel to a remote browser/mobile client.
 *
 * The bridge is intentionally transport-agnostic about the "remote" side —
 * everything here is about the local IPC contract with the extension.
 */
export class Bridge {
	private readonly _client: IpcClient
	private readonly _log: (...args: unknown[]) => void
	private readonly _eventHandlers: Map<RooCodeEventName, Set<(event: TaskEvent) => void>>

	constructor(socketPath: string, log: (...args: unknown[]) => void = () => {}) {
		this._log = log
		this._eventHandlers = new Map()

		this._client = new IpcClient(socketPath, this._log)

		this._client.on(IpcMessageType.Connect, () => this._log("[bridge] ipc connected"))
		this._client.on(IpcMessageType.Disconnect, () => this._log("[bridge] ipc disconnected"))

		this._client.on(IpcMessageType.Ack, (ack) => {
			this._log(`[bridge] ipc ack clientId=${ack.clientId} pid=${ack.pid}`)
		})

		this._client.on(IpcMessageType.TaskEvent, (event) => this.dispatchTaskEvent(event))
	}

	/**
	 * Resolves once the IPC client has connected AND received its Ack (i.e. it
	 * has a clientId and can send commands). Rejects on timeout.
	 */
	public connect(timeoutMs = 10_000): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			if (this._client.isReady) {
				resolve()
				return
			}

			const onAck = () => {
				clearTimeout(timer)
				this._client.off(IpcMessageType.Ack, onAck)
				this._client.off(IpcMessageType.Disconnect, onDisconnect)
				resolve()
			}

			const onDisconnect = () => {
				clearTimeout(timer)
				this._client.off(IpcMessageType.Ack, onAck)
				this._client.off(IpcMessageType.Disconnect, onDisconnect)
				reject(new Error("[bridge] ipc disconnected before ack"))
			}

			const timer = setTimeout(() => {
				this._client.off(IpcMessageType.Ack, onAck)
				this._client.off(IpcMessageType.Disconnect, onDisconnect)
				reject(new Error(`[bridge] ipc connect timed out after ${timeoutMs}ms`))
			}, timeoutMs)

			this._client.on(IpcMessageType.Ack, onAck)
			this._client.on(IpcMessageType.Disconnect, onDisconnect)
		})
	}

	/**
	 * Send a raw {@link TaskCommand} to the extension's API surface.
	 */
	public sendCommand(command: TaskCommand): void {
		this._client.sendCommand(command)
	}

	/**
	 * Subscribe to a {@link TaskEvent} by name. Returns an unsubscribe fn.
	 */
	public onEvent(eventName: RooCodeEventName, handler: (event: TaskEvent) => void): () => void {
		let set = this._eventHandlers.get(eventName)

		if (!set) {
			set = new Set()
			this._eventHandlers.set(eventName, set)
		}

		set.add(handler)

		return () => {
			set?.delete(handler)
		}
	}

	/**
	 * Send a query command and await the matching response event. This is the
	 * core "API call" primitive the bridge uses to talk to the extension.
	 */
	public request<T extends TaskEvent>(
		command: TaskCommand,
		responseEventName: T["eventName"],
		timeoutMs = 10_000,
	): Promise<T> {
		return new Promise<T>((resolve, reject) => {
			const timer = setTimeout(() => {
				off()
				reject(new Error(`[bridge] request timed out waiting for ${responseEventName}`))
			}, timeoutMs)

			const off = this.onEvent(responseEventName, (event) => {
				clearTimeout(timer)
				off()
				resolve(event as T)
			})

			this.sendCommand(command)
		})
	}

	/** Convenience: ask the extension for its configured modes. */
	public getModes(): Promise<TaskEvent> {
		return this.request({ commandName: TaskCommandName.GetModes }, RooCodeEventName.ModesResponse)
	}

	/** Convenience: ask the extension for its available slash commands. */
	public getCommands(): Promise<TaskEvent> {
		return this.request({ commandName: TaskCommandName.GetCommands }, RooCodeEventName.CommandsResponse)
	}

	/** Convenience: ask the extension for its available models. */
	public getModels(): Promise<TaskEvent> {
		return this.request({ commandName: TaskCommandName.GetModels }, RooCodeEventName.ModelsResponse)
	}

	/** Send a free-text message to the active task. */
	public sendMessage(text?: string, images?: string[]): void {
		this._client.sendTaskMessage(text, images)
	}

	public disconnect(): void {
		this._client.disconnect()
	}

	public get isReady(): boolean {
		return this._client.isReady
	}

	public get socketPath(): string {
		return this._client.socketPath
	}

	private dispatchTaskEvent(event: TaskEvent): void {
		this._log(`[bridge] event ${event.eventName}`)

		const handlers = this._eventHandlers.get(event.eventName)

		if (handlers) {
			for (const handler of handlers) {
				try {
					handler(event)
				} catch (error) {
					this._log(`[bridge] event handler for ${event.eventName} threw: ${String(error)}`)
				}
			}
		}
	}
}
