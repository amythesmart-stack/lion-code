import axios from "axios"

import { lMStudioDefaultModelInfo } from "@roo-code/types"

import { getLMStudioModels } from "../lmstudio"

vi.mock("axios")
const mockedAxios = axios as any

// Helper: build a minimal REST model response
const restResponse = (models: Array<{ id: string; max_context_length?: number }>) => ({
	data: { data: models },
})

describe("LMStudio Fetcher", () => {
	beforeEach(() => {
		vi.clearAllMocks()
	})

	const baseUrl = "http://localhost:1234"

	it("uses REST API model IDs as canonical keys", async () => {
		mockedAxios.get.mockResolvedValueOnce(
			restResponse([{ id: "DavidAU/Qwen3.6-27B/model.gguf", max_context_length: 8192 }]),
		)

		const result = await getLMStudioModels(baseUrl)

		expect(mockedAxios.get).toHaveBeenCalledWith(`${baseUrl}/v1/models`, expect.anything())
		expect(result["DavidAU/Qwen3.6-27B/model.gguf"]).toBeDefined()
		expect(result["DavidAU/Qwen3.6-27B/model.gguf"].contextWindow).toBe(8192)
	})

	it("strips trailing /v1 from base URL before constructing endpoint", async () => {
		mockedAxios.get.mockResolvedValueOnce(restResponse([{ id: "some-model" }]))

		await getLMStudioModels("http://localhost:1234/v1")

		expect(mockedAxios.get).toHaveBeenCalledWith("http://localhost:1234/v1/models", expect.anything())
	})

	it("returns empty object when LM Studio is unreachable (ECONNREFUSED)", async () => {
		const err = Object.assign(new Error("ECONNREFUSED"), { code: "ECONNREFUSED" })
		mockedAxios.get.mockRejectedValueOnce(err)

		const result = await getLMStudioModels(baseUrl)

		expect(result).toEqual({})
	})

	it("returns empty object when REST call fails generically", async () => {
		const consoleErrorSpy = vi.spyOn(console, "error").mockImplementation(() => {})
		mockedAxios.get.mockRejectedValueOnce(new Error("Network error"))

		const result = await getLMStudioModels(baseUrl)

		expect(result).toEqual({})
		expect(consoleErrorSpy).toHaveBeenCalled()
		consoleErrorSpy.mockRestore()
	})

	it("returns empty object for unparsable base URL", async () => {
		const result = await getLMStudioModels("http://localhost:invalid:port")

		expect(result).toEqual({})
		expect(mockedAxios.get).not.toHaveBeenCalled()
	})

	it("uses default base URL for empty string input", async () => {
		mockedAxios.get.mockResolvedValueOnce(restResponse([]))

		await getLMStudioModels("")

		expect(mockedAxios.get).toHaveBeenCalledWith("http://localhost:1234/v1/models", expect.anything())
	})

	it("sends auth header when API key provided", async () => {
		mockedAxios.get.mockResolvedValueOnce(restResponse([{ id: "some-model" }]))

		await getLMStudioModels(baseUrl, "sk-lm-test")

		expect(mockedAxios.get).toHaveBeenCalledWith(`${baseUrl}/v1/models`, {
			headers: { Authorization: "Bearer sk-lm-test" },
		})
	})

	it("sends no auth header when API key omitted", async () => {
		mockedAxios.get.mockResolvedValueOnce(restResponse([{ id: "some-model" }]))

		await getLMStudioModels(baseUrl)

		expect(mockedAxios.get).toHaveBeenCalledWith(`${baseUrl}/v1/models`, { headers: undefined })
	})

	it("handles multiple models from REST API", async () => {
		mockedAxios.get.mockResolvedValueOnce(
			restResponse([
				{ id: "mistralai/mistral-7b/instruct.gguf", max_context_length: 4096 },
				{ id: "meta/llama-3.1/8b.gguf", max_context_length: 8192 },
			]),
		)

		const result = await getLMStudioModels(baseUrl)

		expect(Object.keys(result)).toHaveLength(2)
		expect(result["mistralai/mistral-7b/instruct.gguf"].contextWindow).toBe(4096)
		expect(result["meta/llama-3.1/8b.gguf"].contextWindow).toBe(8192)
	})
})
