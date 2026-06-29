# Lion Code — Final Plan

> **Status: AWAITING PLANNING AGENT**
> This file is populated by the Planning Agent at the start of Phase 1.
> No application code should be written until this file exists and has been reviewed by Amy.

---

## Product Vision

Lion Code is an AI agent orchestration platform. Users describe what they want built. The orchestrator spins up three sub-agents (Claude, Codex, Qwen) to execute development steps in parallel across isolated git worktrees — same round-based workflow used internally, exposed as a product.

## Full Agent Roster (to be spec'd by Planning Agent)

| Agent | Role | Trigger |
|-------|------|---------|
| Orchestrator | Drives all sub-agents; manages rounds | User starts a session |
| Coder × 3 | Claude, Codex, Qwen — parallel step execution | Orchestrator delegates |
| Merge Master | Integrates branches, creates next round | All coders signal done |
| Condenser | Summarizes orchestrator progress at context limit | Orchestrator context ~80% full |
| Approver | Auto-approves safe orchestration commands | Any agent requests approval |
| Indexing | RAG over chat logs; surfaces personal context | Orchestrator requests personalization |
| Debugger | Diagnoses and fixes failures | Build fails or bug filed |
| Dashboard | API for status checking; stores condensed summaries | Continuous |

## Architecture (Mermaid — Planning Agent fills in)

```
[placeholder — see docs/ARCHITECTURE.md when Planning Agent runs]
```

## Autonomous Loop (core design principle)

```
Orchestrator session starts
  → delegates steps to sub-agents
  → sub-agents commit to worktrees
  → Merge Master integrates
  → Condenser summarizes when context limit approached
  → Dashboard stores summary + status
  → New Orchestrator loads summary → continues from checkpoint
  → Approver handles any command approvals automatically
  → Indexing Agent provides personal context from past logs on demand
  → loop continues indefinitely
```

## Tech Stack (Planning Agent decides — placeholders below)

- Framework: TBD
- Auth: TBD
- DB schema: TBD
- Dashboard: TBD
- RAG/Indexing: TBD (likely pgvector or a local vector store)

## Feature List (Planning Agent fills in)

- [ ] TBD

## Build Sequence (Planning Agent fills in)

- Round 01: TBD
- Round 02: TBD

## Verification Gates

- [ ] TBD — Planning Agent defines per round
