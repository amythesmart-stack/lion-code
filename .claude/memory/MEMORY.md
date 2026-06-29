# Memory Index — Lion Code

Every agent reads this file first, then follows the links relevant to their role.

## Core (every agent reads these every session)

- [project_context.md](project_context.md) — What Lion Code is, current phase, live decisions
- [agent_roles.md](agent_roles.md) — Tier system, model assignments, orchestration rules
- [security_rules.md](security_rules.md) — Non-negotiable security invariants
- [coding_conventions.md](coding_conventions.md) — TypeScript, API shapes, DB patterns, git rules

## Initialization (Claude reads this every session)

- [agents/coder/claude/initialization.md](agents/coder/claude/initialization.md) — Claude session startup checklist: read order, git identity, role detection, delegation tools

## Agent Tier Logs

### Model Selector Tier

- [agents/model-selector/shared_log.md](agents/model-selector/shared_log.md) — All model selector sessions
- [agents/model-selector/claude/log.md](agents/model-selector/claude/log.md) — Claude model selector sessions

### Coder Tier

- [agents/coder/shared_log.md](agents/coder/shared_log.md) — All coders, any model
- [agents/coder/claude/log.md](agents/coder/claude/log.md) — Claude coder sessions
- [agents/coder/qwen/log.md](agents/coder/qwen/log.md) — Qwen coder sessions
- [agents/coder/codex/log.md](agents/coder/codex/log.md) — Codex coder sessions

### Planner Tier

- [agents/planner/shared_log.md](agents/planner/shared_log.md) — All planner sessions
- [agents/planner/claude/log.md](agents/planner/claude/log.md) — Claude planner sessions

### Merge Master Tier

- [agents/merge-master/shared_log.md](agents/merge-master/shared_log.md) — All merge sessions
- [agents/merge-master/claude/log.md](agents/merge-master/claude/log.md) — Claude merge sessions

### Debugger Tier

- [agents/debugger/shared_log.md](agents/debugger/shared_log.md) — All debugger sessions
- [agents/debugger/claude/log.md](agents/debugger/claude/log.md) — Claude debugger sessions
- [agents/debugger/qwen/log.md](agents/debugger/qwen/log.md) — Qwen debugger sessions
- [agents/debugger/codex/log.md](agents/debugger/codex/log.md) — Codex debugger sessions
