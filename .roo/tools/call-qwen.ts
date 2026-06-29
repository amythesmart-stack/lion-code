import { parametersSchema as z, defineCustomTool } from "@roo-code/types"

export default defineCustomTool({
    name: "call_qwen",
    description:
        "Delegate a task to Qwen running locally via LM Studio. Use for code generation, translation, or a parallel second opinion.",
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
                temperature: 0.3,
                stream: false,
            }),
        })
        if (!response.ok) return `LM Studio error ${response.status}: ${await response.text()}`
        const data = (await response.json()) as { choices: { message: { content: string } }[] }
        return data.choices?.[0]?.message?.content?.trim() ?? "(Qwen returned no output)"
    },
})
