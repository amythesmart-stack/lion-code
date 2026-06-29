# Lion Code — Architecture

> **Status:** Placeholder. Planning Agent fills this in during Round 01.

## High-Level Overview

Lion Code is an orchestration layer that spins up Claude, Codex, and Qwen sub-agents across git worktrees. Users interact with a single Orchestrator; agents collaborate autonomously through a round-based merge workflow.

## Core Agent Stack

```
User
  └── Orchestrator (Zoo Code / Claude Code)
        ├── Coder Step 1 (Claude)  → .worktrees/rNs1-claude
        ├── Coder Step 2 (Codex)   → .worktrees/rNs2-codex
        ├── Coder Step 3 (Qwen)    → .worktrees/rNs3-qwen
        └── Merge Master           → integrates + tags

Autonomous Loop Support:
  ├── Condenser Agent    — summarizes context before limit
  ├── Dashboard API      — stores checkpoint, status, round state
  ├── Approver Agent     — auto-gates safe orchestration commands
  └── Indexing Agent     — RAG over chat logs for personalization
```

## Data Flow (TBD by Planning Agent)

- Dashboard API schema
- Checkpoint format
- RAG index structure
- Condenser trigger conditions

## Tech Stack (TBD by Planning Agent)

- Next.js 15 App Router (TypeScript)
- Database: TBD
- Vector store: TBD
- Auth: TBD
