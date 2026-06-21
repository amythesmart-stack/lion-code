#!/usr/bin/env node
/**
 * Remote Bridge — Phase 1 entry point.
 *
 * This is the forked Node process. It connects to the Zoo Code extension's IPC
 * server (the "API surface") over a Unix socket and demonstrates that it can
 * issue API calls and receive events. Later phases will forward this traffic
 * over a WebRTC data channel to a remote browser/mobile client.
 *
 * Usage:
 *   tsx packages/remote-bridge/src/main.ts [--socket /tmp/zoo-code.sock] [--command get-modes|get-commands|get-models]
 *
 * The socket path defaults to the `ROO_CODE_IPC_SOCKET_PATH` env var, matching
 * the variable the extension reads to start its IPC server.
 */
import os from "node:os"
import path from "node:path"

import { type TaskEvent } from "@roo-code/types"

import { Bridge } from "./bridge.js"

interface CliArgs {
	socketPath: string
	command: "get-modes" | "get-commands" | "get-models"
}

function defaultSocketPath(): string {
	// Mirror the extension's convention. The extension only starts its IPC
	// server when ROO_CODE_IPC_SOCKET_PATH is set, so we fall back to a
	// sensible per-user default for local dev/demo purposes.
	return process.env.ROO_CODE_IPC_SOCKET_PATH ?? path.join(os.tmpdir(), `zoo-code-${os.userInfo().uid}.sock`)
}

function parseArgs(argv: string[]): CliArgs {
	const args: CliArgs = {
		socketPath: defaultSocketPath(),
		command: "get-modes",
	}

	for (let i = 0; i < argv.length; i++) {
		const arg = argv[i]

		if (arg === "--socket" || arg === "-s") {
			args.socketPath = argv[++i] ?? args.socketPath
		} else if (arg === "--command" || arg === "-c") {
			const value = argv[++i] as CliArgs["command"] | undefined
			if (!value) continue

			if (value && ["get-modes", "get-commands", "get-models"].includes(value)) {
				args.command = value
			}
		} else if (arg === "--help" || arg === "-h") {
			process.stdout.write(
				[
					"Usage: remote-bridge [--socket <path>] [--command get-modes|get-commands|get-models]",
					"",
					"Connects to the Zoo Code IPC API surface and runs a single API call.",
					"",
					"Options:",
					"  --socket, -s   Unix socket path (default: $ROO_CODE_IPC_SOCKET_PATH or /tmp/zoo-code-<uid>.sock)",
					"  --command, -c  API call to run (default: get-modes)",
					"  --help, -h     Show this help",
				].join("\n") + "\n",
			)
			process.exit(0)
		}
	}

	return args
}

async function runCommand(bridge: Bridge, command: CliArgs["command"]): Promise<TaskEvent> {
	switch (command) {
		case "get-modes":
			return bridge.getModes()
		case "get-commands":
			return bridge.getCommands()
		case "get-models":
			return bridge.getModels()
	}
}

async function main() {
	const args = parseArgs(process.argv.slice(2))

	const log = (...data: unknown[]) => process.stderr.write(`[remote-bridge] ${data.join(" ")}\n`)

	log(`connecting to IPC socket: ${args.socketPath}`)

	const bridge = new Bridge(args.socketPath, log)

	// Clean up on Ctrl-C / termination so we don't leak the socket client.
	const shutdown = (signal: string) => {
		log(`received ${signal}, disconnecting`)
		bridge.disconnect()
		process.exit(0)
	}

	process.on("SIGINT", () => shutdown("SIGINT"))
	process.on("SIGTERM", () => shutdown("SIGTERM"))

	try {
		await bridge.connect()
	} catch (error) {
		log(`failed to connect: ${error instanceof Error ? error.message : String(error)}`)
		log("hint: ensure the extension is running with ROO_CODE_IPC_SOCKET_PATH set to the same path")
		process.exit(1)
	}

	log(`connected (clientId ready=${bridge.isReady}); running command: ${args.command}`)

	try {
		const event = await runCommand(bridge, args.command)

		// Pretty-print the API response to stdout so it's easy to pipe/inspect.
		process.stdout.write(JSON.stringify(event, null, 2) + "\n")

		log(`received ${event.eventName} response`)
	} catch (error) {
		log(`command failed: ${error instanceof Error ? error.message : String(error)}`)
		process.exitCode = 1
	} finally {
		bridge.disconnect()
		// node-ipc keeps the event loop alive; the CLI is a one-shot, so exit
		// explicitly once the API call has completed.
		process.exit(process.exitCode ?? 0)
	}
}

void main()
