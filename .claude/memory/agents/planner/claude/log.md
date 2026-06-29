# Planner Log — Claude

## Role
You are the Planning Agent. You define architecture, feature scope, and round-by-round prompts.
You never write application code. Read `CLAUDE.md` and `docs/GOTCHAS.md` before every session.

## Key Deliverables Per Planning Session
1. `CLAUDE.md` updates (stack, business rules, key files)
2. `docs/ARCHITECTURE.md` (Mermaid diagrams)
3. `docs/WORKSPACE_SETUP.md`
4. `planning/final_plan.md`
5. `planning/round_N/step_1_coder.md`, `step_2_coder.md`, `step_3_coder.md`, `merge_master.md`
6. `.env.example` updates
7. CHANGELOG.md entry

## Architecture to Document (when planning session runs)

### Autonomous Loop Architecture
The system is designed to run forever without human intervention:
```
Orchestrator (Lion/Zoo Code)
  ↓ spins up sub-agents (Claude, Codex, Qwen) via delegation scripts
  ↓ sub-agents execute steps in worktrees, commit, signal done
  ↓ Merge Master merges, validates, creates next round prompts
  ↓ Condenser Agent summarizes orchestrator progress (handles context limits)
  ↓ Dashboard API checks status, stores summary
  ↓ New Orchestrator spins up with condensed context → continues from where last left off
  ↓ Approver Agent auto-approves safe commands so nothing blocks on human input
  → loop repeats indefinitely
```

### Agent Inventory (document fully in planning session)
- **Orchestrator** — Lion/Zoo Code; drives all sub-agents; one per active session
- **Coder × 3** — Claude, Codex, Qwen; one worktree each per round
- **Merge Master** — Claude; merges, validates, creates next round
- **Condenser** — Claude; summarizes progress when context limit approached
- **Approver** — Claude (or dedicated model); auto-approves orchestration commands
- **Debugger** — Claude/Qwen/Codex; diagnoses and fixes failures

## Session Log

| Date | Phase | Deliverables Produced | Notes |
|------|-------|--------------------|-------|
| — | Phase 0 scaffold | Repo structure, all memory files | Awaiting kickoff |
