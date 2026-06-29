#!/usr/bin/env bash
# Any agent calls this to delegate a task to Lion CLI (headless Zoo Code).
# Usage: ./scripts/delegate-to-lion.sh "<task>" [--dir <path>]
set -euo pipefail
TASK=""; WORK_DIR="$(cd "$(dirname "$0")/.." && pwd)"; QUIET=false
while [[ $# -gt 0 ]]; do
  case "$1" in --dir) WORK_DIR="$2"; shift 2 ;; --quiet) QUIET=true; shift ;; *) TASK="$1"; shift ;; esac
done
[[ -z "$TASK" ]] && { echo "[delegate-to-lion] ERROR: No task provided." >&2; exit 1; }
command -v lion &>/dev/null || {
  echo "[delegate-to-lion] ERROR: 'lion' not found. Install:" >&2
  echo "  gh release download v0.1.17 --repo amythesmart-stack/lion-code-cli --dir /tmp/lion-install" >&2
  echo "  npm install -g /tmp/lion-install/lion-code-cli-0.1.17.tgz --legacy-peer-deps" >&2
  exit 1
}
[[ "$QUIET" != "true" ]] && printf '\n── Lion delegation ──\nDir: %s\nTask: %s\n\n' "$WORK_DIR" "$TASK"
cd "$WORK_DIR"
exec lion --print "$TASK"
