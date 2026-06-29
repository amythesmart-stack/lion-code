import { parametersSchema as z, defineCustomTool } from "@roo-code/types"
import { spawnSync } from "child_process"

export default defineCustomTool({
    name: "call_claude",
    description:
        "Delegate a coding task to Claude Code CLI. Use this for planning, architecture, complex reasoning, and multi-file edits.",
    parameters: z.object({
        task: z.string().describe("The task or instruction to send to Claude Code"),
        cwd: z.string().optional().describe("Working directory. Defaults to current project directory."),
    }),
    async execute(args, context) {
        const result = spawnSync("claude", ["-p", args.task, "--dangerously-skip-permissions"], {
            cwd: args.cwd ?? process.cwd(),
            encoding: "utf8",
            timeout: 120_000,
            shell: true,
        })
        if (result.error) return `Failed to invoke Claude Code: ${result.error.message}`
        const output = [result.stdout, result.stderr].filter(Boolean).join("\n").trim()
        return output || "(Claude returned no output)"
    },
})
