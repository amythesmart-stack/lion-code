#!/usr/bin/env node
// ECC-pattern: runs type-check after every file write/edit
// Catches build errors before they reach git. Outputs warnings only — doesn't block.

import { execSync } from "child_process"
import { existsSync } from "fs"

// Only run if this is a TS/JS project
if (!existsSync("package.json")) process.exit(0)

// Skip during merge-master rebase / CI passes (avoid loops)
if (process.env.LION_SKIP_QUALITY_GATE === "1") process.exit(0)

try {
  // Prefer tsc --noEmit over full build for speed
  const hasTsc = existsSync("tsconfig.json")
  if (hasTsc) {
    execSync("npx tsc --noEmit 2>&1", { encoding: "utf8", timeout: 30000 })
    // Silent success
  }
} catch (err) {
  const output = err.stdout ?? err.message ?? ""
  const errorLines = output.split("\n").filter(l => l.includes("error TS")).slice(0, 10)
  if (errorLines.length > 0) {
    console.error("\n⚠️  QUALITY GATE — TypeScript errors detected:\n" + errorLines.join("\n") + "\n")
    // Exit 0 — warn only, don't block the edit
  }
}
