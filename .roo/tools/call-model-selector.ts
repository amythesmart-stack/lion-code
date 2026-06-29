import { parametersSchema as z, defineCustomTool } from "@roo-code/types"
import { spawnSync } from "child_process"
import path from "path"

export default defineCustomTool({
    name: "call_model_selector",
    description:
        "Before starting any round: analyze the task and repo state, return the optimal model assignment. " +
        "Optimizes for max token throughput + codebase accuracy + logic correctness. " +
        "Also detects drift from the plan. Call this before assigning coders each round.",
    parameters: z.object({
        task: z.string().describe("Description of the task or step to be assigned"),
        round: z.number().optional().describe("Current round number, if known"),
        cwd: z.string().optional().describe("Repo root. Defaults to current directory."),
    }),
    async execute(args, context) {
        const workDir = args.cwd ?? process.cwd()
        const scriptPath = path.join(workDir, "scripts", "delegate-to-model-selector.sh")

        const cmdArgs = [
            args.task,
            ...(args.round !== undefined ? ["--round", String(args.round)] : []),
            "--dir", workDir,
        ]

        const result = spawnSync("bash", [scriptPath, ...cmdArgs], {
            cwd: workDir,
            encoding: "utf8",
            timeout: 30_000,
            shell: false,
        })

        if (result.error) return `Model Selector failed: ${result.error.message}`

        const raw = [result.stdout, result.stderr].filter(Boolean).join("\n").trim()
        if (!raw) return '{"model":"claude","reason":"no output from selector","throughput_rank":3,"drift_detected":false}'

        // Try to parse and pretty-print
        try {
            const parsed = JSON.parse(raw.match(/\{[\s\S]*\}/)?.[0] ?? raw)
            return JSON.stringify(parsed, null, 2)
        } catch {
            return raw
        }
    },
})
