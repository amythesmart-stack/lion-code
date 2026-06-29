# Debugging Scoreboard

Tracks bugs found and fixed across all rounds. Debugger agents update this after every fix.

---

## Leaderboard

| Agent | Model | Bugs Found | Bugs Fixed | False Positives | Score* |
|-------|-------|-----------|-----------|----------------|--------|
| Debugger | Claude | 0 | 0 | 0 | 0 |
| Debugger | Qwen | 0 | 0 | 0 | 0 |
| Debugger | Codex | 0 | 0 | 0 | 0 |
| Coder | Claude | 0 | 0 | — | 0 |
| Coder | Qwen | 0 | 0 | — | 0 |
| Coder | Codex | 0 | 0 | — | 0 |

*Score = (Bugs Fixed × 2) + Bugs Found − (False Positives × 1)

---

## Bug Log

| Round | Step | Agent | Model | Bug Description | Root Cause | Fix File(s) | Status |
|-------|------|-------|-------|----------------|-----------|------------|--------|
| — | — | — | — | — | — | — | — |

<!-- Debugger: add rows above this line. One row per bug. -->

---

## Rules

- **Found**: agent identified and documented a real bug (in shared debugger log)
- **Fixed**: agent wrote and verified the fix (confirmed by Merge Master at merge)
- **False Positive**: agent flagged something as a bug that was intentional or not reproducible
- Merge Master verifies "Fixed" status at merge time — if the fix broke something else, it doesn't count
- A bug found by one agent and fixed by another: both get credit (Found + Fixed respectively)

---

## All-Time Records

| Record | Value | Agent | Round |
|--------|-------|-------|-------|
| Most bugs in one round | — | — | — |
| Fastest fix (same step) | — | — | — |
| Hardest bug (most rounds open) | — | — | — |
