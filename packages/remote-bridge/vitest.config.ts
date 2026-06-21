import { defineConfig } from "vitest/config"

export default defineConfig({
	test: {
		globals: true,
		watch: false,
		// Integration tests spin up real Unix sockets; give them a little room.
		testTimeout: 15_000,
		hookTimeout: 15_000,
	},
})
