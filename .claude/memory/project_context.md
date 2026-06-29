# Project Context — Lion Code

## What Lion Code Is

An AI agent orchestration platform. Users describe what they want built. The orchestrator (Lion/Zoo Code) breaks the work into steps and spins up three sub-agents — Claude, Codex, Qwen — to execute each step in parallel across isolated git worktrees. Users interact with the orchestrator only; the sub-agents are managed workers.

The product is the orchestration workflow, not the underlying models.

## Current Phase

**Phase 0 — Planning**
- Repo initialized: 2026-06-29
- Awaiting Planning Agent session to define: product architecture, tech stack specifics, feature set, Round 01 prompts
- No application code exists yet

## Live Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| CLI foundation | Lion Code CLI v0.1.17 | Fork of Cline → Roo → Zoo; Apache 2.0; already installed |
| Orchestrator UI | Zoo Code VS Code extension | Native custom tools; drives all 3 agents headlessly |
| Sub-agent delegation | Bash scripts + Zoo Code tools | Bash for CLI paths; Zoo tools for extension path |
| License | Apache 2.0 | Inherited from upstream; allows commercial SaaS |
| API key model | Users bring own keys | Avoids Anthropic/OpenAI ToS violation on reselling access |

## Key Links

- CLI repo: <https://github.com/amythesmart-stack/lion-code-cli> (private)
- App repo: <https://github.com/amythesmart-stack/lion-code> (private)

## What Agents Must NOT Do

- Start application planning or coding before `planning/final_plan.md` exists
- Change the worktree/merge-round workflow structure without Planning Agent approval
- Commit to main directly — always via feature branch + Merge Master merge
