# Lion Code Multi-Agent Setup

Complete setup for a fresh machine. Follow every step in order.

---

## Prerequisites

- **Node.js** v20+ — <https://nodejs.org>
- **Git** — <https://git-scm.com>
- **VS Code** — <https://code.visualstudio.com>
- **Zoo Code** VS Code extension — <https://zoocode.dev>
- **LM Studio** with a Qwen 2.5 Coder model loaded — <https://lmstudio.ai>
- Active **Claude Code subscription** — <https://claude.ai>
- Active **OpenAI account** with Codex CLI access — <https://openai.com>

---

## 1. Fix macOS SSL / Node Issues (if needed)

```bash
# Ensure nvm Node is active
nvm use 20
node --version   # v20.x.x
```

---

## 2. Install the CLIs

```bash
npm install -g @anthropic-ai/claude-code
npm install -g @openai/codex
```

Verify:

```bash
claude --version
codex --version
```

---

## 3. Install Lion Code CLI

Lion Code CLI is hosted at: <https://github.com/amythesmart-stack/lion-code-cli> (private repo)

```bash
gh release download v0.1.17 \
  --repo amythesmart-stack/lion-code-cli \
  --dir /tmp/lion-install

npm install -g /tmp/lion-install/lion-code-cli-0.1.17.tgz --legacy-peer-deps
```

> **Why `--legacy-peer-deps`?** The upstream package has a React types peer conflict inherited from the Roo Code monorepo. The flag bypasses it — all runtime deps install correctly and the CLI works fine.

Verify:

```bash
lion --version   # 0.1.17
```

> **To update:** re-download the latest release tarball from the same repo and reinstall.

---

## 4. Clone and Set Up This Repo

```bash
cd ~/Projects
gh repo clone amythesmart-stack/lion-code "Lion Code"
cd "Lion Code"
cp .env.example .env.local
# Fill in .env.local with your real values
```

---

## 5. Zoo Code Custom Tools

These let Zoo Code orchestrate Claude, Codex, Lion, and Qwen as sub-agents.

Tools are installed globally — they work across all projects:

```bash
mkdir -p ~/.roo/tools
```

Copy the four tool files from `~/.roo/tools/` (they were set up in a prior session).
If starting fresh, the content is in each file below.

### `~/.roo/tools/call-claude.ts`

```typescript
import { parametersSchema as z, defineCustomTool } from "@roo-code/types"
import { spawnSync } from "child_process"

export default defineCustomTool({
    name: "call_claude",
    description: "Delegate a coding task to Claude Code CLI. Use for planning, architecture, complex reasoning, and multi-file edits.",
    parameters: z.object({
        task: z.string().describe("The task or instruction to send to Claude Code"),
        cwd: z.string().optional().describe("Working directory. Defaults to current project directory."),
    }),
    async execute(args, context) {
        const result = spawnSync("claude", ["-p", args.task, "--dangerously-skip-permissions"], {
            cwd: args.cwd ?? process.cwd(), encoding: "utf8", timeout: 120_000, shell: true,
        })
        if (result.error) return `Failed to invoke Claude Code: ${result.error.message}`
        return [result.stdout, result.stderr].filter(Boolean).join("\n").trim() || "(Claude returned no output)"
    },
})
```

### `~/.roo/tools/call-codex.ts`

```typescript
import { parametersSchema as z, defineCustomTool } from "@roo-code/types"
import { spawnSync } from "child_process"

export default defineCustomTool({
    name: "call_codex",
    description: "Delegate a coding task to OpenAI Codex CLI. Use for implementation, boilerplate, tests, and execution tasks.",
    parameters: z.object({
        task: z.string().describe("The task or instruction to send to Codex"),
        cwd: z.string().optional().describe("Working directory. Defaults to current project directory."),
    }),
    async execute(args, context) {
        const result = spawnSync("codex", [args.task], {
            cwd: args.cwd ?? process.cwd(), encoding: "utf8", timeout: 120_000, shell: true,
        })
        if (result.error) return `Failed to invoke Codex: ${result.error.message}`
        return [result.stdout, result.stderr].filter(Boolean).join("\n").trim() || "(Codex returned no output)"
    },
})
```

### `~/.roo/tools/call-lion.ts`

```typescript
import { parametersSchema as z, defineCustomTool } from "@roo-code/types"
import { spawnSync } from "child_process"

export default defineCustomTool({
    name: "call_lion",
    description: "Delegate a task to Lion Code running headlessly via the lion CLI. Use for Qwen steps or any task that benefits from Lion's configured models.",
    parameters: z.object({
        task: z.string().describe("The task or instruction to send to Lion Code"),
        cwd: z.string().optional().describe("Working directory. Defaults to current project directory."),
    }),
    async execute(args, context) {
        const result = spawnSync("lion", ["--print", args.task], {
            cwd: args.cwd ?? process.cwd(), encoding: "utf8", timeout: 120_000, shell: true,
        })
        if (result.error) return `Failed to invoke Lion: ${result.error.message}`
        return [result.stdout, result.stderr].filter(Boolean).join("\n").trim() || "(Lion returned no output)"
    },
})
```

### `~/.roo/tools/call-qwen.ts`

```typescript
import { parametersSchema as z, defineCustomTool } from "@roo-code/types"

export default defineCustomTool({
    name: "call_qwen",
    description: "Delegate a task to Qwen running locally via LM Studio. Use for code generation, translation, or a parallel second opinion.",
    parameters: z.object({
        task: z.string().describe("The task or instruction to send to Qwen"),
        systemPrompt: z.string().optional().describe("Optional system prompt to set Qwen's role for this task"),
    }),
    async execute(args, context) {
        const response = await fetch("http://localhost:1234/v1/chat/completions", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: "qwen2.5-coder",
                messages: [
                    ...(args.systemPrompt ? [{ role: "system", content: args.systemPrompt }] : []),
                    { role: "user", content: args.task },
                ],
                temperature: 0.3, stream: false,
            }),
        })
        if (!response.ok) return `LM Studio error ${response.status}: ${await response.text()}`
        const data = (await response.json()) as { choices: { message: { content: string } }[] }
        return data.choices?.[0]?.message?.content?.trim() ?? "(Qwen returned no output)"
    },
})
```

---

## 6. Enable Zoo Code Custom Tools

1. Open Zoo Code in VS Code (activity bar icon)
2. Click the gear/settings icon
3. Go to **Experimental**
4. Enable **Enable custom tools**
5. Click **Refresh** or restart VS Code

Verify: open Zoo Code chat → ask *"what tools do you have available?"* → you should see `call_claude`, `call_codex`, `call_lion`, `call_qwen`.

---

## 7. Orchestrator Prompt

The orchestrator prompt template lives at `~/.roo/orchestrator-prompt.md`. Load it in Zoo Code and append the round details to start a session.

```bash
cat ~/.roo/orchestrator-prompt.md
```

---

## 8. Three-Way Delegation (Bash Path)

For non-Zoo Code contexts (Claude Code CLI sessions, scripts, etc.), use the bash delegation scripts in `scripts/`:

```bash
./scripts/delegate-to-claude.sh "<task>" --dir <worktree-path>
./scripts/delegate-to-codex.sh  "<task>" --dir <worktree-path>
./scripts/delegate-to-lion.sh   "<task>" --dir <worktree-path>
./scripts/delegate-to-qwen.sh   "<task>" --dir <worktree-path>
```

Any agent can call any other. All paths are pre-approved in `.claude/settings.json`.

**Full delegation matrix:**

| Caller | Can call |
|--------|---------|
| Claude Code | Codex, Lion, Qwen (via bash scripts) |
| Codex | Claude, Lion, Qwen (via bash scripts) |
| Lion (Zoo Code) | Claude, Codex, Qwen (via custom tools) |
| Qwen | Claude, Codex, Lion (via bash scripts) |

---

## 9. Verify Everything

```bash
claude --version
codex --version
lion --version    # 0.1.17
curl -sf http://localhost:1234/v1/models | python3 -m json.tool   # Qwen loaded in LM Studio
```

---

## 10. Start an Orchestrated Round

Open Zoo Code → load `~/.roo/orchestrator-prompt.md` → append the round task.

Or from Claude Code CLI:
```bash
cd "Lion Code"
# Paste the kick-off prompt for the current round from planning/round_N/
```
