# Agent Roles — Lion Code

## The Four Tiers

### 1. Planning Agent (Claude)
- Defines architecture, tech decisions, feature scope
- Produces `planning/final_plan.md` and per-round `planning/round_N/` prompt files
- Never writes application code
- Runs once per major phase or when direction changes significantly

### 2. Coding Agents (Claude · Codex · Qwen)
- Each gets one step per round, ~15% context window
- Works in its own git worktree (isolated branch)
- Receives focused task prompt from `planning/round_N/step_X_coder.md`
- Ships fully working, testable code — no stubs, no TODOs
- Commits to its feature branch, updates coder memory logs

### 3. Merge Master (Claude)
- Waits for all 3 coder steps to be pushed
- Merges in dependency order with `--no-ff`
- Runs verification gates from `planning/round_N/merge_master.md`
- Updates CHANGELOG.md and merge master memory logs
- **Creates `planning/round_N+1/`** before signaling done — mandatory

### 4. Model Selector (Claude)

- Runs **before every round** — burns context analyzing the repo for drift, alignment, and logic
- Reads `planning/final_plan.md`, round prompts, recent coder logs, and `docs/ARCHITECTURE.md`
- Returns a JSON recommendation: which model for which step, why, and estimated token throughput
- Optimizes for **max throughput + codebase accuracy + logic correctness**
- All other agents call it via `call_model_selector` tool or `delegate-to-model-selector.sh`

**Selection heuristics:**

| Signal | Recommended Model |
|--------|-----------------|
| Architecture, reasoning, multi-file, logic-heavy | Claude |
| Implementation, boilerplate, test writing, execution | Codex |
| Fast local, simple transforms, parallel opinion, token-cheap | Qwen |
| Detected drift from plan | Claude (debugger mode first) |
| Large blast radius, many files touched | Claude |

**Throughput ranking (fastest → slowest):** Qwen (local) > Codex > Claude

### 5. Debugger (Claude · Qwen · Codex)
- Diagnoses failures, writes reproduction steps, fixes root causes
- Updates `docs/DEBUGGING_SCOREBOARD.md` after every bug found/fixed
- Works in a dedicated debug worktree (never on main)

---

## Model Assignments

| Task | Primary | Fallback |
|------|---------|---------|
| Planning | Claude | — |
| Merge Master | Claude | — |
| Coder Step 1 | Claude | Codex |
| Coder Step 2 | Qwen | Claude |
| Coder Step 3 | Codex | Qwen |
| Debugger | Claude | Qwen |

---

## Orchestration — 3-Way Delegation

Any agent can call any other. All paths are pre-approved (no permission prompts).

**Bash scripts (all agents, any context):**
```
scripts/delegate-to-claude.sh "<task>" --dir <worktree-path>
scripts/delegate-to-codex.sh  "<task>" --dir <worktree-path>
scripts/delegate-to-lion.sh   "<task>" --dir <worktree-path>
scripts/delegate-to-qwen.sh   "<task>" --dir <worktree-path>
```

**Zoo Code tools (when running inside Zoo Code extension):**
```
call_claude  — delegates to Claude Code CLI
call_codex   — delegates to Codex CLI
call_lion    — delegates to Lion CLI headlessly
call_qwen    — delegates to Qwen via LM Studio API
```

Zoo Code tools live in `~/.roo/tools/`. Orchestrator prompt template: `~/.roo/orchestrator-prompt.md`.

---

## Worktree Naming Convention

```
.worktrees/r{N}s{X}-{agent}
```

Examples:
- `.worktrees/r01s1-claude`
- `.worktrees/r01s2-qwen`
- `.worktrees/r01s3-codex`
- `.worktrees/r01debug-claude`

---

## Round Signaling

Each coder signals done by:
1. Pushing their feature branch
2. Adding an entry to `agents/coder/shared_log.md`: `[Round N Step X] — done — <branch-name>`

Merge Master polls `agents/coder/shared_log.md` to know when all 3 are ready.
