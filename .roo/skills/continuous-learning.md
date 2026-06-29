---
name: continuous-learning
description: After every round, extract non-obvious patterns and save them as learned rules
metadata:
  origin: ECC-adapted
---

# Continuous Learning

After every merge, the Merge Master runs this skill to extract patterns worth keeping.

## When to Activate

- After every successful merge
- After a debugging session resolves a recurring pattern
- When the Planner makes an architecture decision

## Process

1. Review the round's commits: `git log round-(N-1)-complete..HEAD --oneline`
2. Ask: "What did we learn that wasn't in `docs/GOTCHAS.md`?"
3. If the answer is non-trivial, add an entry to `docs/GOTCHAS.md`
4. Ask: "Did any agent make a mistake that a rule could prevent?"
5. If yes, add the rule to the relevant agent's markdown file in `agents/`
6. Commit the updated files as part of the merge commit

## What Counts as a Pattern Worth Saving

- Something that caused a merge conflict we couldn't have predicted
- A bug that came from misunderstanding a framework's behavior
- A model choice that turned out to be wrong for a task type
- An API shape that keeps confusing agents

## What Doesn't Count

- "We wrote the code" — not a pattern
- "Codex did a good job" — not actionable
- Anything already in GOTCHAS.md or CLAUDE.md

## Output Format (GOTCHAS.md entry)

```markdown
## N. [Short title]

**Discovered:** Round N, [date]
**Pattern:** What happened
**Rule:** What to do differently next time
```
