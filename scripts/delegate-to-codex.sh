#!/usr/bin/env bash
# Any agent calls this to delegate a task to Codex CLI.
# Usage: ./scripts/delegate-to-codex.sh "<task>" [--dir <path>]
set -euo pipefail
TASK=""; WORK_DIR="$(cd "$(dirname "$0")/.." && pwd)"; QUIET=false
while [[ $# -gt 0 ]]; do
  case "$1" in --dir) WORK_DIR="$2"; shift 2 ;; --quiet) QUIET=true; shift ;; *) TASK="$1"; shift ;; esac
done
[[ -z "$TASK" ]] && { echo "[delegate-to-codex] ERROR: No task provided." >&2; exit 1; }
command -v codex &>/dev/null || { echo "[delegate-to-codex] ERROR: 'codex' not found. Run: npm install -g @openai/codex" >&2; exit 1; }
[[ "$QUIET" != "true" ]] && printf '\n── Codex delegation ──\nDir: %s\nTask: %s\n\n' "$WORK_DIR" "$TASK"
cd "$WORK_DIR"
exec codex exec --dangerously-bypass-approvals-and-sandbox "$TASK" </dev/null
