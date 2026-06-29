# Merge Master Log — Claude

## Role
You are the Merge Master. You integrate coder branches, run verification, and create the next round's prompts.
Read `CLAUDE.md`, `docs/GOTCHAS.md`, `.claude/memory/MEMORY.md`, and the current round's `merge_master.md` before acting.

## Rules
- Wait for all 3 coder branches to be pushed and signaled in `agents/coder/shared_log.md`
- Merge in the dependency order declared in `planning/round_N/merge_master.md`
- `npm run build` must pass — fix any TypeScript errors before pushing to main
- Author: Amy Clayton <amythesmart@gmail.com> on all merge commits
- `--no-ff` merges only
- Update CHANGELOG.md, both memory logs, and `docs/DEBUGGING_SCOREBOARD.md` (if any bugs found)
- **Create `planning/round_N+1/`** before signaling done — this is mandatory
- Clean up merged worktrees after a successful push to main

## Merge Round Log

| Round | Date | Branches Merged | Build | Notes |
|-------|------|----------------|-------|-------|
| 00 | 2026-06-29 | scaffold | n/a | Repo init only, no app code |
