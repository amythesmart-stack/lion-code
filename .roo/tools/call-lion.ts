import { parametersSchema as z, defineCustomTool } from "@roo-code/types"
import { spawnSync } from "child_process"

export default defineCustomTool({
    name: "call_lion",
    description:
        "Delegate a task to Lion Code running headlessly via the lion CLI. Use this for Qwen steps or any task that benefits from Lion's configured models and tools.",
    parameters: z.object({
        task: z.string().describe("The task or instruction to send to Lion Code"),
        cwd: z.string().optional().describe("Working directory. Defaults to current project directory."),
    }),
    async execute(args, context) {
        const result = spawnSync("lion", ["--print", args.task], {
            cwd: args.cwd ?? process.cwd(),
            encoding: "utf8",
            timeout: 120_000,
            shell: true,
        })
        if (result.error) return `Failed to invoke Lion: ${result.error.message}`
        const output = [result.stdout, result.stderr].filter(Boolean).join("\n").trim()
        return output || "(Lion returned no output)"
    },
})
