import { parametersSchema as z, defineCustomTool } from "@roo-code/types"
import { spawnSync } from "child_process"

export default defineCustomTool({
    name: "call_lion",
    description:
        "Delegate a coding task to Qwen running INSIDE Lion Code with full tool access (read/write files, bash, git). " +
        "Uses the qwen-coder mode — LM Studio lmstudio provider with qwen3-coder-30b. " +
        "Qwen gets real file system access, not just text completion. Use for coder Step 2 in any round.",
    parameters: z.object({
        task: z.string().describe("The coding task for Qwen to implement using Lion Code tools"),
        cwd: z.string().optional().describe("Working directory (project root or worktree path). Defaults to current directory."),
        mode: z.string().optional().describe("Lion Code mode slug. Defaults to 'qwen-coder'. Override for other modes."),
    }),
    async execute(args, context) {
        const mode = args.mode ?? "qwen-coder"
        const result = spawnSync(
            "lion",
            ["--print", "--mode", mode, args.task],
            {
                cwd: args.cwd ?? process.cwd(),
                encoding: "utf8",
                timeout: 180_000,
                shell: true,
            }
        )
        if (result.error) return `Failed to invoke Lion (${mode}): ${result.error.message}`
        const output = [result.stdout, result.stderr].filter(Boolean).join("\n").trim()
        return output || `(Lion ${mode} returned no output)`
    },
})
