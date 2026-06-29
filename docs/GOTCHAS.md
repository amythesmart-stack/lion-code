# Gotchas

Every agent reads this before starting any session. No exceptions.

---

## [CRITICAL — ALL AGENTS] Writing code is NOT the same as completing a task

Done = feature works end-to-end in a real browser with real inputs producing correct output.

NOT done: file exists on disk / TypeScript compiles / linter passes / you described what the code does.

If you can't run verification (missing env vars, no DB, no running server): **stop**. Document the blocker in the debugger shared log. Do not mark done.

---

## [CRITICAL — ALL AGENTS] Logic correctness is not the same as "it ran"

No errors ≠ correct. Check actual output against expected values. Spot-check calculations manually.
If a number is wrong, it is a bug. Fix it before marking the step done.

---

## [CRITICAL — ALL AGENTS] Git author is Amy Clayton only

Every commit must be authored by `Amy Clayton <amythesmart@gmail.com>`.  
Check before every commit: `git config user.name && git config user.email`  
Never add Co-Authored-By lines. Never commit as a model name.

---

## [CRITICAL — ALL AGENTS] Never commit secrets

`.env.local`, `.admin-overrides.json`, API keys, tokens — never in git, ever.  
Check `git diff --staged` before every commit.

---

## [ORCHESTRATION] CLI install order matters

Install in this order — earlier packages are deps of later ones:
```bash
npm install -g @anthropic-ai/claude-code          # claude CLI
npm install -g @openai/codex                       # codex CLI
gh release download v0.1.17 --repo amythesmart-stack/lion-code-cli --dir /tmp/lion-install
npm install -g /tmp/lion-install/lion-code-cli-0.1.17.tgz --legacy-peer-deps  # lion CLI
```
The `--legacy-peer-deps` flag is required for Lion CLI due to a React types peer conflict in the upstream package. This is a known issue, fixed in the release.

---

## [ORCHESTRATION] LM Studio must be running for Qwen delegation

`delegate-to-qwen.sh` posts to `http://localhost:1234/v1`. If LM Studio isn't running, the call fails silently or with a connection error. Always start LM Studio and load a Qwen model before running any multi-agent round that delegates to Qwen.

Check: `curl -sf http://localhost:1234/v1/models | python3 -m json.tool`

---

## [ORCHESTRATION] Zoo Code custom tools require manual enable

Zoo Code does not auto-load `~/.roo/tools/` unless **Experimental → Enable custom tools** is toggled in Zoo Code settings. After enabling, click Refresh or restart VS Code. Verify with: open Zoo Code chat → ask "what tools do you have available?"

---

## [MERGE MASTER] Worktrees stay on their branch

Never run `git checkout` inside a worktree — it detaches the worktree from its branch.  
If a worktree is on the wrong branch: `git -C .worktrees/rNsX-name switch feature/rNsX-name`

---

## [MERGE MASTER] Merge in dependency order

If Step 2 depends on code from Step 1, merge Step 1 first. Check the round's `merge_master.md` for the declared merge order before touching anything.

---

## [MERGE MASTER] Always create round_N+1 before signaling done

Merge Master's last required act before signaling completion is creating `planning/round_N+1/` with the three coder prompts and `merge_master.md`. The next round cannot start without these files.

---

## [APACHE 2.0] Upstream attribution required on distribution

When distributing Lion Code (CLI or SaaS), copyright notices from Cline/Roo Code/Zoo Code must be preserved. License text must be included. You do not need to open-source your modifications.

Do NOT resell Anthropic or OpenAI API access — customers must bring their own keys, or you need an operator/enterprise agreement with each provider.
