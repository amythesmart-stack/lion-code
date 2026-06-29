# Lion Code

## What This Is

**Lion Code** is an AI agent orchestration platform. Users bring a project and describe what they want built. The platform's orchestrator breaks the work into steps, then spins up sub-agents — Claude, Codex, and Qwen — to execute each step in parallel across isolated worktrees. The user interacts only with the orchestrator; the three sub-agents are invisible workers under the hood.

**The product is the orchestrator + the workflow**, not the individual models.

**Owner:** Amy Clayton (amythesmart@gmail.com)  
**GitHub (this repo):** https://github.com/amythesmart-stack/lion-code (private fork)  
**Upstream source:** https://github.com/Zoo-Code-Org/Zoo-Code  
**Upstream docs:** https://docs.zoocode.dev  
**Config archive:** https://github.com/amythesmart-stack/lion-code-config (agent memory, scaffold)  
**License:** Apache 2.0 (upstream: Cline → Roo Code → Zoo Code → Lion Code)

## This Is a Full Source Fork

This repo IS the Zoo Code VS Code extension source, renamed to Lion Code. You can change anything — extension behavior, UI, agent types, delegation logic — at the source level.

**Key source locations:**
- `src/` — VS Code extension entry points, commands, core logic
- `webview-ui/` — React sidebar UI
- `packages/` — shared packages (types, core, ipc, telemetry)
- `apps/cli` — headless CLI
- `.roo/` — agent skills, commands, custom tools (our additions here)
- `agents/` — agent markdown specs (Lion Code addition)
- `scripts/delegate-to-*.sh` — 3-way delegation (Lion Code addition)

---

## Core Product Flow

```
User describes task / round goal
        ↓
Orchestrator (Lion / Zoo Code)
        ├── spins up Claude sub-agent   → executes Step 1 in worktree
        ├── spins up Codex sub-agent    → executes Step 2 in worktree
        └── spins up Qwen sub-agent     → executes Step 3 in worktree
                ↓ (all complete)
Orchestrator merges results → reports back to user
```

Each sub-agent:
- Works in its own git worktree (isolated branch)
- Receives a focused ~15% context-window task prompt
- Runs fully headless with no permission prompts
- Returns output + a commit to its feature branch

The orchestrator then merges all branches, validates the build, and presents the result.

---

## 3-Way Delegation — Any Can Call Any

| Caller \ Callee | Claude | Codex | Lion/Qwen |
|----------------|--------|-------|-----------|
| **Claude** | — | `scripts/delegate-to-codex.sh` | `scripts/delegate-to-qwen.sh` / `scripts/delegate-to-lion.sh` |
| **Codex** | `scripts/delegate-to-claude.sh` | — | `scripts/delegate-to-qwen.sh` / `scripts/delegate-to-lion.sh` |
| **Lion (Zoo Code)** | `call_claude` tool | `call_codex` tool | `call_lion` / `call_qwen` tool |
| **Qwen** | `scripts/delegate-to-claude.sh` | `scripts/delegate-to-codex.sh` | — |

Zoo Code custom tools live in `~/.roo/tools/`. Bash scripts live in `scripts/`. Both paths are pre-approved in `.claude/settings.json`.

---

## Stack

| Layer | Choice |
|-------|--------|
| Framework | TBD — Planning Agent decides |
| Styling | Tailwind CSS + shadcn/ui |
| ORM | Prisma |
| Database | PostgreSQL |
| Hosting | Vercel |
| Auth | TBD |
| Orchestrator | Lion CLI + Zoo Code VS Code extension |
| Sub-agents | Claude (`claude -p`), Codex (`codex`), Qwen (LM Studio `localhost:1234/v1`) |

---

## Core Business Rules (never change without owner sign-off)

- The orchestrator never implements code itself — it only plans, delegates, and merges
- Sub-agents always work in isolated worktrees — never on main directly
- Every sub-agent step ships fully working code — no stubs, no TODOs
- Users bring their own API keys — Lion Code never proxies API calls on their behalf
- Apache 2.0 upstream attribution must be preserved in all distributions

---

## Security Invariants

- API keys are never committed — always in `.env.local` or Vercel env vars
- Never log user API keys, credentials, or PII
- All admin routes require authenticated session
- Multi-tenant: every DB query scoped by tenant/user ID
- Users authenticate with their own provider keys — Lion Code is a workflow layer, not an API proxy

---

## Key Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | This file — project rules and product definition |
| `CHANGELOG.md` | Round-by-round change log |
| `docs/GOTCHAS.md` | Critical traps — every agent reads before every session |
| `docs/DEBUGGING_SCOREBOARD.md` | Bug leaderboard across all rounds |
| `docs/LION_CODE_SETUP.md` | CLI install + full 3-way orchestration setup |
| `docs/ARCHITECTURE.md` | System diagrams (Planning Agent fills in) |
| `docs/WORKSPACE_SETUP.md` | Coder onboarding (Planning Agent fills in) |
| `planning/final_plan.md` | Architecture reference — stable |
| `.claude/memory/MEMORY.md` | Memory index — all agents read this |
| `scripts/delegate-to-*.sh` | Agent delegation scripts |
| `~/.roo/tools/call-*.ts` | Zoo Code custom tools for orchestration |

---

## Env Vars Required

```
ANTHROPIC_API_KEY=          # Claude sub-agent
OPENAI_API_KEY=             # Codex sub-agent
LM_STUDIO_BASE_URL=http://localhost:1234/v1   # Qwen via LM Studio
DATABASE_URL=               # PostgreSQL
NEXTAUTH_SECRET=            # Auth
# (others TBD by Planning Agent)
```

---

## Verification Rules (fable-mode)

These apply to every agent, every session:

- **Verification must be failable.** "Looks right" is not a check. Run `npx tsc --noEmit`, check file exists, run tests — use checks that can actually fail.
- **GateGuard:** Read a file fully before editing it. Never edit blind.
- **3-warning rule:** Don't interrupt the orchestrator for minor concerns. At 3 accumulated, surface all together.
- **Multi-session work logs:** Append to `planning/condenser-log.md` after each completed stage so the next session can resume exactly.
- **Word-boundary edits:** When doing find-and-replace across a file, use `\bword\b` anchoring to avoid corrupting nearby text.

See `skills/fable-mode.md` for full staged-execution discipline.

---

## Coding Rules

See `~/Projects/README.md` Section 10 for the full list. Summary:

- TypeScript everywhere — no `any`; use `unknown` + type guard
- API responses: `{ data }` success or `{ error: string }` failure
- Every DB query includes tenant scope; multi-table writes use `$transaction`
- shadcn/ui for all components; Tailwind for all styling
- No comments unless the WHY is genuinely non-obvious
- No stubs — every step ships fully working, testable code
- **Git author on every commit: Amy Clayton <amythesmart@gmail.com>**
- No `--force` push to main; `--no-ff` merges only
- Never commit `.env.local`, API keys, or secrets

---

## Planning & Memory

- Plan: `planning/final_plan.md`
- Diagrams: `docs/ARCHITECTURE.md`
- Gotchas: `docs/GOTCHAS.md`
- Memory index: `.claude/memory/MEMORY.md`
