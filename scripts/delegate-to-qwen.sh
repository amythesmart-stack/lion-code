#!/usr/bin/env bash
# Any agent calls this to delegate a task to Qwen via LM Studio.
# Usage: ./scripts/delegate-to-qwen.sh "<task>" [--dir <path>] [--system "<prompt>"]
set -euo pipefail
TASK=""; WORK_DIR="$(cd "$(dirname "$0")/.." && pwd)"; QUIET=false; SYSTEM=""
LM_BASE="${LM_STUDIO_BASE_URL:-http://localhost:1234/v1}"
while [[ $# -gt 0 ]]; do
  case "$1" in --dir) WORK_DIR="$2"; shift 2 ;; --quiet) QUIET=true; shift ;; --system) SYSTEM="$2"; shift 2 ;; *) TASK="$1"; shift ;; esac
done
[[ -z "$TASK" ]] && { echo "[delegate-to-qwen] ERROR: No task provided." >&2; exit 1; }
[[ "$QUIET" != "true" ]] && printf '\n── Qwen delegation ──\nEndpoint: %s\nDir: %s\nTask: %s\n\n' "$LM_BASE" "$WORK_DIR" "$TASK"

DEFAULT_SYSTEM="You are the Qwen coder agent for the Lion Code project at $WORK_DIR. Implement the task surgically and completely. Read CLAUDE.md and docs/GOTCHAS.md first. Commit as Amy Clayton <amythesmart@gmail.com>. Run npm run build before committing."
PAYLOAD=$(python3 -c "
import json, sys
sys_prompt = sys.argv[1] if sys.argv[1] else sys.argv[2]
task = sys.argv[3]
msgs = [{'role': 'system', 'content': sys_prompt}, {'role': 'user', 'content': task}]
print(json.dumps({'model': 'qwen2.5-coder', 'messages': msgs, 'temperature': 0.2, 'max_tokens': 4096}))
" "$SYSTEM" "$DEFAULT_SYSTEM" "$TASK")

RESPONSE=$(curl -sf "${LM_BASE}/chat/completions" -H "Content-Type: application/json" -d "$PAYLOAD") || {
  echo "[delegate-to-qwen] ERROR: LM Studio request failed. Is it running at $LM_BASE?" >&2; exit 1
}
python3 -c "
import sys, json
data = json.load(sys.stdin)
print(data.get('choices', [{}])[0].get('message', {}).get('content', '(no output)'))
" <<< "$RESPONSE"
