#!/usr/bin/env bash
# Any agent calls this to get a model recommendation before starting a task.
# Usage: ./scripts/delegate-to-model-selector.sh "<task-description>" [--round N] [--dir <path>]
#
# Returns JSON: { "model": "claude|codex|qwen", "reason": "...", "throughput_rank": 1|2|3 }
set -euo pipefail

TASK=""; ROUND=""; WORK_DIR="$(cd "$(dirname "$0")/.." && pwd)"; QUIET=false

while [[ $# -gt 0 ]]; do
  case "$1" in
    --round) ROUND="$2"; shift 2 ;;
    --dir)   WORK_DIR="$2"; shift 2 ;;
    --quiet) QUIET=true; shift ;;
    *)       TASK="$1"; shift ;;
  esac
done

[[ -z "$TASK" ]] && { echo "[model-selector] ERROR: No task provided." >&2; exit 1; }
[[ "$QUIET" != "true" ]] && printf '\n── Model Selector ──\nDir: %s\nRound: %s\nTask: %s\n\n' "$WORK_DIR" "${ROUND:-unspecified}" "$TASK"

# Gather repo context for the selector to analyze
PLAN_SUMMARY=""
RECENT_LOG=""

[[ -f "$WORK_DIR/planning/final_plan.md" ]] && PLAN_SUMMARY=$(head -60 "$WORK_DIR/planning/final_plan.md")
[[ -f "$WORK_DIR/.claude/memory/agents/coder/shared_log.md" ]] && RECENT_LOG=$(tail -20 "$WORK_DIR/.claude/memory/agents/coder/shared_log.md")

SYSTEM_PROMPT="You are the Model Selector agent for Lion Code. Your only job is to analyze a task and recommend the optimal model assignment.

Selection rules:
- Claude: architecture, complex reasoning, multi-file edits, logic-heavy, detected drift, high blast radius
- Codex: implementation, boilerplate, test writing, execution-focused tasks
- Qwen: fast local tasks, simple transforms, token-cheap, parallel second opinions

Throughput ranking (fastest→slowest): Qwen(1) > Codex(2) > Claude(3)

Optimize for: max throughput THEN codebase accuracy THEN logic correctness.
If task shows signs of drift from plan, always recommend Claude with a drift warning.

You have read the following repo context:
=== PLAN SUMMARY ===
${PLAN_SUMMARY}

=== RECENT CODER LOG ===
${RECENT_LOG}

Respond ONLY with valid JSON in this exact shape:
{\"model\": \"claude|codex|qwen\", \"reason\": \"one sentence\", \"throughput_rank\": 1|2|3, \"drift_detected\": true|false}"

PAYLOAD=$(python3 -c "
import json, sys
sys_prompt = sys.argv[1]
task = sys.argv[2]
msgs = [{'role': 'system', 'content': sys_prompt}, {'role': 'user', 'content': task}]
print(json.dumps({'model': 'qwen2.5-coder', 'messages': msgs, 'temperature': 0.1, 'max_tokens': 256}))
" "$SYSTEM_PROMPT" "$TASK")

LM_BASE="${LM_STUDIO_BASE_URL:-http://localhost:1234/v1}"
RESPONSE=$(curl -sf "${LM_BASE}/chat/completions" -H "Content-Type: application/json" -d "$PAYLOAD") || {
  # LM Studio not running — fall back to Claude's judgment
  echo "[model-selector] LM Studio unavailable, falling back to Claude." >&2
  exec "$(dirname "$0")/delegate-to-claude.sh" "Analyze this task and recommend claude, codex, or qwen. Return JSON only: {\"model\": \"...\", \"reason\": \"...\", \"throughput_rank\": 1|2|3, \"drift_detected\": false}. Task: $TASK" --dir "$WORK_DIR"
}

python3 -c "
import sys, json
data = json.load(sys.stdin)
print(data.get('choices', [{}])[0].get('message', {}).get('content', '{}'))
" <<< "$RESPONSE"
