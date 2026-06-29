---
name: worktree-round-workflow
description: The canonical 3-coder parallel round workflow — from Planner output to Merge Master tag
metadata:
  origin: Lion Code
---

# Worktree Round Workflow

The standard execution pattern for every round.

## Prerequisites

- `planning/round_N/` exists with all 4 prompt files
- `planning/final_plan.md` is complete
- Previous round tag exists: `git tag round-(N-1)-complete`

## Step 1 — Model Selection

Orchestrator calls Model Selector for each step:
```bash
./scripts/delegate-to-model-selector.sh "<step description>" --round N
```

Override the default assignment if drift or complexity demands it.

## Step 2 — Spin Up Coders

```bash
# Claude (Step 1)
git worktree add .worktrees/rNs1-claude -b feature/rNs1-claude
./scripts/delegate-to-claude.sh "$(cat planning/round_N/step_1_coder.md)" \
  --dir .worktrees/rNs1-claude

# Qwen (Step 2) — can start in parallel with Step 1 if files don't overlap  
git worktree add .worktrees/rNs2-qwen -b feature/rNs2-qwen
./scripts/delegate-to-qwen.sh "$(cat planning/round_N/step_2_coder.md)" \
  --dir .worktrees/rNs2-qwen

# Codex (Step 3) — can start in parallel if files don't overlap
git worktree add .worktrees/rNs3-codex -b feature/rNs3-codex
./scripts/delegate-to-codex.sh "$(cat planning/round_N/step_3_coder.md)" \
  --dir .worktrees/rNs3-codex
```

## Step 3 — Wait for Signals

Poll `agents/coder/shared_log.md` for 3 "done" entries with round N.

## Step 4 — Merge Master

```bash
./scripts/delegate-to-claude.sh "$(cat planning/round_N/merge_master.md)"
```

## Step 5 — Cleanup + Next Round

Merge Master handles: worktree deletion, branch cleanup, CHANGELOG, next round planning, tag.

## Failure Handling

- One coder fails → Debugger spins up in `.worktrees/debug-rN` on that branch
- Build fails post-merge → Merge Master reverts to pre-merge, escalates to Debugger
- All coders fail → Planner re-scopes the round into smaller steps
