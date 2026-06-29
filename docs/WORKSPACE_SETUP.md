# Lion Code — Workspace Setup

> **Status:** Placeholder. Merge Master expands this when worktree patterns are established in Round 01.

## Worktree Naming Convention

```
.worktrees/r{N}s{step}-{model}
```

Examples:
- `.worktrees/r1s1-claude`   — Round 1, Step 1, Claude
- `.worktrees/r1s2-codex`    — Round 1, Step 2, Codex
- `.worktrees/r1s3-qwen`     — Round 1, Step 3, Qwen

## Creating a Worktree

```bash
git worktree add .worktrees/r1s1-claude -b feature/r1s1-claude
```

## Removing After Merge

```bash
git worktree remove .worktrees/r1s1-claude
git branch -d feature/r1s1-claude
```

## Parallel Dev Rules

- Each worktree is one coder, one step, one branch
- Never let two coders touch the same file in the same round
- Merge Master resolves all conflicts — coders never merge each other
- After merge, Merge Master deletes the worktrees and creates the next round's planning files

## See Also

- [LION_CODE_SETUP.md](LION_CODE_SETUP.md) — full machine setup guide
- [../CLAUDE.md](../CLAUDE.md) — branch strategy and project rules
