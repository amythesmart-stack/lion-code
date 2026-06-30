#!/usr/bin/env bash
# Any agent calls this to delegate a task to Qwen via LM Studio.
# Usage: ./scripts/delegate-to-qwen.sh "<task>" [--dir <path>] [--system "<prompt>"]
set -euo pipefail
TASK=""; WORK_DIR="$(cd "$(dirname "$0")/.." && pwd)"; QUIET=false; SYSTEM=""
LM_BASE="${LM_STUDIO_BASE_URL:-http://localhost:1234}"
API_KEY="${LM_STUDIO_API_KEY:-lm-studio}"
PREFERRED_MODEL="qwen3.6-27b-heretic-uncensored-finetune-neo-code-di-imatrix-max@q5_k_s"

while [[ $# -gt 0 ]]; do
  case "$1" in --dir) WORK_DIR="$2"; shift 2 ;; --quiet) QUIET=true; shift ;; --system) SYSTEM="$2"; shift 2 ;; *) TASK="$1"; shift ;; esac
done
[[ -z "$TASK" ]] && { echo "[delegate-to-qwen] ERROR: No task provided." >&2; exit 1; }

AUTH_HEADER="Authorization: Bearer $API_KEY"

# ── Model detection: native v1 API, loaded instances only ───────────────────
pick_model() {
  curl -sf -H "$AUTH_HEADER" "${LM_BASE}/api/v1/models" | python3 -c "
import json, sys
d = json.load(sys.stdin)
models = d.get('data') or d.get('models') or []
loaded = [m.get('id') or m.get('key','') for m in models if m.get('loaded_instances')]
for pref in ['qwen3.6-27b-heretic','qwen3-coder-30b','salesforcecoder-qwen','qwen3-coder','qwen2.5-coder','qwen']:
    hit = next((m for m in loaded if pref in m.lower() and 'flux' not in m.lower() and 'b2b' not in m.lower()), None)
    if hit:
        print(hit)
        sys.exit(0)
print('')
" 2>/dev/null || echo ""
}

MODEL=$(pick_model)

# ── JIT load if nothing found ────────────────────────────────────────────────
if [[ -z "$MODEL" ]]; then
  [[ "$QUIET" != "true" ]] && echo "[delegate-to-qwen] No coder model loaded — JIT loading $PREFERRED_MODEL ..."
  curl -sf -X POST "${LM_BASE}/api/v1/models/load" \
    -H "Content-Type: application/json" \
    -H "$AUTH_HEADER" \
    -d "{\"model\": \"$PREFERRED_MODEL\"}" > /dev/null 2>&1 || true

  for i in $(seq 1 12); do
    sleep 5
    MODEL=$(pick_model)
    [[ -n "$MODEL" ]] && break
    [[ "$QUIET" != "true" ]] && echo "[delegate-to-qwen] Waiting... ($((i*5))s)"
  done

  [[ -z "$MODEL" ]] && { echo "[delegate-to-qwen] ERROR: Could not load Qwen. Load $PREFERRED_MODEL in LM Studio manually." >&2; exit 1; }
fi

[[ "$QUIET" != "true" ]] && printf '\n── Qwen delegation ──\nModel: %s\nDir: %s\nTask: %s\n\n' "$MODEL" "$WORK_DIR" "$TASK"

DEFAULT_SYSTEM="You are the Qwen coder agent for the Lion Code project at $WORK_DIR. Implement the task surgically and completely. Read CLAUDE.md first. Commit as Amy Clayton <amythesmart@gmail.com>. Run npm run build before committing."
FINAL_SYSTEM="${SYSTEM:-$DEFAULT_SYSTEM}"

PAYLOAD=$(python3 -c "
import json, sys
print(json.dumps({
  'model': sys.argv[1],
  'messages': [{'role':'system','content':sys.argv[2]},{'role':'user','content':sys.argv[3]}],
  'temperature': 0.2,
  'max_tokens': 4096
}))
" "$MODEL" "$FINAL_SYSTEM" "$TASK")

RESPONSE=$(curl -sf "${LM_BASE}/v1/chat/completions" \
  -H "Content-Type: application/json" \
  -H "$AUTH_HEADER" \
  -d "$PAYLOAD") || {
  echo "[delegate-to-qwen] ERROR: LM Studio request failed at $LM_BASE" >&2; exit 1
}

python3 -c "
import sys, json
data = json.load(sys.stdin)
print(data.get('choices', [{}])[0].get('message', {}).get('content', '(no output)'))
" <<< "$RESPONSE"
