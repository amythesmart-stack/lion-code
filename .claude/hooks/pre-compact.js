#!/usr/bin/env node
// ECC-pattern: saves session state before context compaction
// Enables Condenser agent to hand off to a new orchestrator session seamlessly

import { writeFileSync, mkdirSync, existsSync } from "fs"
import { execSync } from "child_process"
import { homedir } from "os"
import { join } from "path"

const STATE_DIR = join(homedir(), ".claude", "lion-sessions")
const STATE_FILE = join(STATE_DIR, "latest.json")

if (!existsSync(STATE_DIR)) mkdirSync(STATE_DIR, { recursive: true })

function git(cmd) {
  try { return execSync(`git ${cmd}`, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim() }
  catch { return null }
}

const branch = git("rev-parse --abbrev-ref HEAD")
const lastCommit = git("log -1 --format=%s")
const status = git("status --short")

// Read round from planning dir
let round = null
try {
  const dirs = execSync("ls planning/ 2>/dev/null | grep round_ | sort | tail -1", { encoding: "utf8" }).trim()
  round = dirs || null
} catch { /* no planning dir yet */ }

const state = {
  savedAt: Date.now(),
  branch,
  round,
  lastAction: lastCommit,
  uncommittedFiles: status ? status.split("\n").filter(Boolean).length : 0,
  notes: null,
}

writeFileSync(STATE_FILE, JSON.stringify(state, null, 2))
console.log(`[pre-compact] State saved → ${STATE_FILE}`)
