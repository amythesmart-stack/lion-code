#!/usr/bin/env bash
# Any agent calls this to delegate a task to Claude Code CLI.
# Usage: ./scripts/delegate-to-claude.sh "<task>" [--dir <path>]
set -euo pipefail
TASK=""; WORK_DIR="$(cd "$(dirname "$0")/.." && pwd)"; QUIET=false
while [[ $# -gt 0 ]]; do
  case "$1" in --dir) WORK_DIR="$2"; shift 2 ;; --quiet) QUIET=true; shift ;; *) TASK="$1"; shift ;; esac
done
[[ -z "$TASK" ]] && { echo "[delegate-to-claude] ERROR: No task provided." >&2; exit 1; }
command -v claude &>/dev/null || { echo "[delegate-to-claude] ERROR: 'claude' not found. Run: npm install -g @anthropic-ai/claude-code" >&2; exit 1; }
[[ "$QUIET" != "true" ]] && printf '\n── Claude delegation ──\nDir: %s\nTask: %s\n\n' "$WORK_DIR" "$TASK"
cd "$WORK_DIR"
exec claude --dangerously-skip-permissions -p "$TASK"
