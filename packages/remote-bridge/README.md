# Remote Bridge

A forked Node.js process that connects to the Zoo Code extension's IPC **API surface** over a Unix socket. This is **Phase 1** of the Remote Control & Approval feature ([issue #650](https://github.com/Zoo-Code-Org/Zoo-Code/issues/650)).

## What Phase 1 does

- Spawns as a standalone Node process (forked from the extension in later phases).
- Connects to the extension's [`IpcServer`](../ipc/src/ipc-server.ts) using the same [`IpcClient`](../ipc/src/ipc-client.ts) the CLI uses.
- Can issue any [`TaskCommand`](../../packages/types/src/ipc.ts) (e.g. `GetModes`, `GetCommands`, `SendMessage`) and receive the resulting [`TaskEvent`](../../packages/types/src/events.ts) responses.
- Proves the round-trip works via an integration test that stands up a real `IpcServer` and runs an API call through the `Bridge`.

What it does **not** do yet (later phases): WebRTC data channel, signaling, remote UI, push notifications.

## Architecture

```
┌──────────────────────┐   Unix socket    ┌──────────────────────┐
│  Zoo Code Extension  │ ◄──────────────► │  Bridge Process      │
│  (IpcServer)         │   /tmp/...sock    │  (IpcClient + Bridge)│
│  - Task engine       │                   │  - send commands     │
│  - Approval flow     │                   │  - receive events    │
└──────────────────────┘                   └──────────────────────┘
```

The socket path is the same one the extension already reads: the `ROO_CODE_IPC_SOCKET_PATH` environment variable. The extension only starts its IPC server when that variable is set, so the bridge is opt-in.

## Usage

### As a library

```typescript
import { Bridge } from "@roo-code/remote-bridge"

const bridge = new Bridge("/tmp/zoo-code.sock")
await bridge.connect()

// Issue an API call and await the response event.
const modes = await bridge.getModes()
console.log(modes.payload[0])

// Subscribe to live task events.
bridge.onEvent("taskStarted", (event) => console.log("started", event.payload[0]))

// Send a message to the active task.
bridge.sendMessage("hello from the bridge")

bridge.disconnect()
```

### As a CLI (demo / smoke test)

```bash
# 1. Start the extension with the IPC server enabled.
ROO_CODE_IPC_SOCKET_PATH=/tmp/zoo-code.sock code .

# 2. From the repo, run the bridge against that socket.
pnpm --filter @roo-code/remote-bridge start -- --socket /tmp/zoo-code.sock --command get-modes
```

The response event is pretty-printed to stdout; diagnostic logs go to stderr.

## Scripts

| Script             | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| `pnpm test`        | Run the vitest integration tests (stands up a real `IpcServer`). |
| `pnpm check-types` | `tsc --noEmit`.                                                  |
| `pnpm lint`        | ESLint.                                                          |
| `pnpm start`       | Run the CLI entry point via `tsx`.                               |

## Tests

The integration test in [`src/__tests__/bridge.test.ts`](src/__tests__/bridge.test.ts) creates a real `IpcServer` on a temporary socket, wires a command handler that mimics the extension's API (see [`src/extension/api.ts`](../../src/extension/api.ts)), and verifies that a `Bridge` can:

1. Connect and receive its `Ack`.
2. Issue `GetModes` and receive the `ModesResponse` event.
3. Forward broadcast `TaskEvent`s to `onEvent` subscribers (and unsubscribe correctly).
4. Reject `request()` on timeout when no response arrives.

This is the proof that the forked process can talk to the API surface.
