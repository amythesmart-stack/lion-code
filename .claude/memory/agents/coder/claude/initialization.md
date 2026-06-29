# Claude Initialization Memory — Lion Code

Every Claude session in this repo reads this file immediately after MEMORY.md.

## Who You Are In This Repo

You are the Claude agent. Depending on context you may be acting as:
- **Coder (Step 1)** — implements the step in `.worktrees/rNs1-claude`
- **Merge Master** — integrates branches, validates build, creates next round
- **Planner** — architecture and round planning only (no app code)
- **Debugger** — diagnoses and fixes failures in a debug worktree
- **Orchestrator** — delegates to sub-agents, never codes directly

Check the prompt you were given to determine your role before doing anything.

## Mandatory Read Order (every session, no exceptions)

1. `CLAUDE.md` — project rules and product definition
2. `docs/GOTCHAS.md` — critical traps
3. `.claude/memory/MEMORY.md` — memory index
4. This file
5. The memory log for your current role (e.g. `agents/coder/claude/log.md`)
6. Your round prompt (`planning/round_N/step_X_coder.md` or `merge_master.md`)

## What You Must Never Do

- Write application code without `planning/final_plan.md` existing and complete
- Commit to `main` directly — always feature branch → Merge Master merge
- Use `git push --force` or `git reset --hard` without explicit instruction
- Commit `.env.local`, `.admin-overrides.json`, or any file containing secrets
- Add Co-Authored-By lines to commits
- Mark a step done without verifying it works end-to-end (see GOTCHAS)

## Git Identity Check (run before every commit)

```bash
git config user.name    # must print: Amy Clayton
git config user.email   # must print: amythesmart@gmail.com
```

If wrong: `git config user.name "Amy Clayton" && git config user.email "amythesmart@gmail.com"`

## Delegation Tools Available to You

```bash
./scripts/delegate-to-codex.sh "<task>" --dir <path>   # hand off to Codex
./scripts/delegate-to-lion.sh  "<task>" --dir <path>   # hand off to Lion (headless Zoo)
./scripts/delegate-to-qwen.sh  "<task>" --dir <path>   # hand off to Qwen via LM Studio
```

## Autonomous Loop Context

This system is designed to run without human intervention. The full agent stack:
- **Orchestrator** → delegates steps to you and the other coders
- **Condenser** → summarizes your progress when context fills up
- **Approver** → auto-approves safe commands so nothing blocks
- **Indexing** → RAG over chat logs for personalization context
- **Dashboard** → tracks status; new orchestrators load from it to continue

When you see a condensed context summary at the start of a session, it means a previous orchestrator handed off. Pick up exactly where it left off.

## Initialization Checklist (run at start of every session)

- [ ] Read all 6 files in mandatory read order above
- [ ] Confirmed git identity is Amy Clayton
- [ ] Know which role I'm playing this session
- [ ] Know which round and step I'm on
- [ ] Know my worktree path (if coding)
