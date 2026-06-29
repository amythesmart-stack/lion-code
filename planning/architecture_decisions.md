# Architecture Decisions

Running log of architectural choices and their rationale. Planning Agent and Merge Master update this.

---

## 2026-06-29 — Autonomous Loop Architecture

**Decision:** The orchestrator is designed to run indefinitely via a condenser + checkpoint system rather than requiring human restarts.

**Why:** Amy has ADHD and cannot be the bottleneck. The system should run without her having to manage agents, approve commands, or restart sessions when context fills up.

**Components:**
- Condenser Agent: summarizes orchestrator progress when context approaches limit
- Dashboard API: stores summaries and current round status
- New Orchestrator: loads condensed context from dashboard and continues
- Approver Agent: auto-approves safe commands so nothing ever blocks on human input

---

## 2026-06-29 — Indexing Agent for Personalization

**Decision:** Add an Indexing Agent that RAGs over chat logs to surface personal context.

**Why:** When Amy or a user says "personalize this" or references a past conversation, the orchestrator needs to retrieve that context. Raw chat logs are the source of truth. RAG over indexed logs makes this possible without bloating every prompt with full history.

**Approach:** TBD by Planning Agent (likely pgvector in PostgreSQL or a lightweight local vector store).

---

## 2026-06-29 — Apache 2.0 / API Key Model

**Decision:** Users bring their own API keys. Lion Code is a workflow layer, not an API proxy.

**Why:** Anthropic and OpenAI ToS prohibit reselling API access. This model keeps Lion Code compliant while still monetizing the orchestration layer itself.

---

## 2026-06-29 — 3-Way Delegation (Any Agent Calls Any Agent)

**Decision:** All agents can delegate to all other agents via bash scripts + Zoo Code custom tools.

**Why:** Prevents single points of failure in the orchestration graph. Any agent can hand off work to any other without human involvement.

**Implementation:** `scripts/delegate-to-*.sh` (bash path) + `~/.roo/tools/call-*.ts` (Zoo Code path).
