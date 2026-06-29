#!/usr/bin/env node
// ECC-pattern: loads last session state on every new Claude session start
// Gives every agent continuity without reading the full transcript

import { readFileSync, existsSync } from "fs"
import { homedir } from "os"
import { join } from "path"

const STATE_FILE = join(homedir(), ".claude", "lion-sessions", "latest.json")

if (!existsSync(STATE_FILE)) {
  process.exit(0)
}

try {
  const state = JSON.parse(readFileSync(STATE_FILE, "utf8"))
  const age = Math.round((Date.now() - state.savedAt) / 60000)

  console.log([
    "┌─ LION CODE SESSION RESTORED ─────────────────────────────",
    `│  Saved:    ${age}m ago (${new Date(state.savedAt).toLocaleString()})`,
    `│  Round:    ${state.round ?? "unknown"}`,
    `│  Branch:   ${state.branch ?? "unknown"}`,
    `│  Last:     ${state.lastAction ?? "unknown"}`,
    state.notes ? `│  Notes:    ${state.notes}` : null,
    "└───────────────────────────────────────────────────────────",
  ].filter(Boolean).join("\n"))
} catch {
  // Corrupt state — silently skip
}
