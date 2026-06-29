---
name: fable-mode
description: Staged execution discipline — plan first, delegate in parallel, verify with failable checks, self-critique. Use for multi-file or multi-session tasks.
metadata:
  origin: fable-mode (mrtooher/fable-mode), adapted for Lion Code
---

# Fable Mode

Enforce this discipline for any task spanning multiple files, sources, or sessions. Skip for trivial single-file changes.

## The Four Steps (always in this order)

### 1. Stage Map

Before touching any file, write out every stage with its expected output:

```
Stage 1: [description] → [expected output / file]
Stage 2: [description] → [expected output / file]
Stage 3: [description] → [expected output / file]
```

Catching wrong assumptions here costs nothing. Catching them after editing costs a revert.

### 2. Delegate

Run independent stages in parallel via subagents when the runtime supports it:
- Brief each sub-agent: task, deliverable, context it needs
- One level deep — no recursive nested staging
- In Lion Code: use `call_claude`, `call_codex`, `call_lion`, or bash delegation scripts

### 3. Verify with Failing Checks

Each stage needs a check that can **actually fail**, not a subjective review:

| Bad (subjective) | Good (failable) |
|-----------------|----------------|
| "Looks right" | `npx tsc --noEmit` exits 0 |
| "Code seems complete" | File exists at expected path |
| "Logic appears correct" | Test suite passes |
| "No obvious errors" | `git status` shows clean tree |

If no failable check exists for a stage: mark it `[UNVERIFIED]` explicitly — never silently skip.

### 4. Self-Critique

Review output skeptically before handing off:
- Hunt real weaknesses — don't manufacture problems
- Confirm issues exist before reporting them
- Fix what you find, then report what you fixed

## Warning Accumulation Rule

Minor concerns on their own don't warrant interrupting the orchestrator. At **3 accumulated warnings**, surface all of them together.

Examples of minor concerns:
- A TODO comment left in code
- A type assertion that's technically correct but fragile
- A file that grew larger than expected

## Multi-Session Work Logs

For tasks spanning multiple sessions, maintain a log at `planning/condenser-log.md`:
```
[timestamp] Stage N complete: [what was done]
[timestamp] Blocked on: [reason]
[timestamp] Resumed: [current stage]
```

## Word-Boundary Safety for File Edits

When doing find-and-replace, anchor with word boundaries to avoid corrupting nearby text:
- Use `\bword\b` patterns when possible
- Never do broad string replacement across a file without reading the full context first

## When NOT to Use Fable Mode

- Single-file changes with obvious scope
- Trivial edits (typos, config values)
- Anything the quality-gate hook already covers
