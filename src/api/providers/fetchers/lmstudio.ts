import axios from "axios"

import { type ModelInfo, lMStudioDefaultModelInfo } from "@roo-code/types"

import { flushModels } from "./modelCache"

const modelsWithLoadedDetails = new Set<string>()

export const hasLoadedFullDetails = (modelId: string): boolean => modelsWithLoadedDetails.has(modelId)

function normalizeBase(url: string): string {
	return url.replace(/\/v1\/?$/, "").replace(/\/+$/, "")
}

export const forceFullModelDetailsLoad = async (baseUrl: string, modelId: string, apiKey?: string): Promise<void> => {
	try {
		const base = normalizeBase(baseUrl)
		const headers = apiKey ? { Authorization: `Bearer ${apiKey}` } : undefined
		await axios.get(`${base}/v1/models`, { headers })
		await flushModels({ provider: "lmstudio", baseUrl }, true)
		modelsWithLoadedDetails.add(modelId)
	} catch (error) {
		if (error.code === "ECONNREFUSED") {
			console.warn(`Error connecting to LMStudio at ${baseUrl}`)
		} else {
			console.error(
				`Error refreshing LMStudio model details: ${JSON.stringify(error, Object.getOwnPropertyNames(error), 2)}`,
			)
		}
	}
}

interface LMStudioRestModel {
	id: string
	object?: string
	type?: string
	state?: string
	max_context_length?: number
}

export async function getLMStudioModels(
	baseUrl = "http://localhost:1234",
	apiKey?: string,
): Promise<Record<string, ModelInfo>> {
	modelsWithLoadedDetails.clear()
	const rawBase = baseUrl === "" ? "http://localhost:1234" : baseUrl
	const base = normalizeBase(rawBase)

	const models: Record<string, ModelInfo> = {}

	if (!URL.canParse(base)) {
		return models
	}

	const authHeaders = apiKey ? { Authorization: `Bearer ${apiKey}` } : undefined

	let restModels: LMStudioRestModel[] = []
	try {
		const response = await axios.get(`${base}/v1/models`, { headers: authHeaders })
		restModels = response.data?.data ?? []
	} catch (error) {
		if (error.code === "ECONNREFUSED") {
			console.warn(`Error connecting to LMStudio at ${base}`)
		} else {
			console.error(
				`Error fetching LMStudio models: ${JSON.stringify(error, Object.getOwnPropertyNames(error), 2)}`,
			)
		}
		return models
	}

	for (const m of restModels) {
		if (!m.id) continue
		const ctxLen = m.max_context_length ?? lMStudioDefaultModelInfo.contextWindow
		models[m.id] = {
			...lMStudioDefaultModelInfo,
			description: m.id,
			contextWindow: ctxLen,
			maxTokens: ctxLen,
			supportsPromptCache: true,
		}
		modelsWithLoadedDetails.add(m.id)
	}

	return models
}

export const parseLMStudioModel = (rawModel: { id: string; max_context_length?: number }): ModelInfo => {
	const contextLength = rawModel.max_context_length ?? lMStudioDefaultModelInfo.contextWindow
	return {
		...lMStudioDefaultModelInfo,
		description: rawModel.id,
		contextWindow: contextLength,
		supportsPromptCache: true,
		maxTokens: contextLength,
	}
}
