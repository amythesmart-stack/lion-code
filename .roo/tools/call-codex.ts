import { parametersSchema as z, defineCustomTool } from "@roo-code/types"
import { spawnSync } from "child_process"

export default defineCustomTool({
    name: "call_codex",
    description:
        "Delegate a coding task to OpenAI Codex CLI. Use this for implementation, boilerplate, tests, and execution tasks.",
    parameters: z.object({
        task: z.string().describe("The task or instruction to send to Codex"),
        cwd: z.string().optional().describe("Working directory. Defaults to current project directory."),
    }),
    async execute(args, context) {
        const result = spawnSync("codex", [args.task], {
            cwd: args.cwd ?? process.cwd(),
            encoding: "utf8",
            timeout: 120_000,
            shell: true,
        })
        if (result.error) return `Failed to invoke Codex: ${result.error.message}`
        const output = [result.stdout, result.stderr].filter(Boolean).join("\n").trim()
        return output || "(Codex returned no output)"
    },
})
