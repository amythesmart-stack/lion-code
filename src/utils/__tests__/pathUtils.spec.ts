import * as path from "path"
import * as os from "os"
import * as fs from "fs/promises"

import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

const mockWorkspace = vi.hoisted(() => ({
	workspaceFolders: [] as Array<{ uri: { fsPath: string }; name: string; index: number }>,
}))

vi.mock("vscode", () => ({
	workspace: mockWorkspace,
}))

import { getWorkspaceReadablePath, resolvePathInWorkspace } from "../pathUtils"

describe("pathUtils", () => {
	let tempDir: string

	beforeEach(async () => {
		tempDir = await fs.mkdtemp(path.join(os.tmpdir(), "roo-path-utils-"))
	})

	afterEach(async () => {
		mockWorkspace.workspaceFolders = []
		await fs.rm(tempDir, { recursive: true, force: true })
	})

	it("resolves a relative path from a secondary workspace root when it does not exist in cwd", async () => {
		const primaryRoot = path.join(tempDir, "primary")
		const secondaryRoot = path.join(tempDir, "secondary")
		await fs.mkdir(primaryRoot, { recursive: true })
		await fs.mkdir(secondaryRoot, { recursive: true })
		await fs.writeFile(path.join(secondaryRoot, "only-secondary.txt"), "secondary", "utf8")

		mockWorkspace.workspaceFolders = [
			{ uri: { fsPath: primaryRoot }, name: "primary", index: 0 },
			{ uri: { fsPath: secondaryRoot }, name: "secondary", index: 1 },
		]

		await expect(resolvePathInWorkspace(primaryRoot, "only-secondary.txt")).resolves.toBe(
			path.join(secondaryRoot, "only-secondary.txt"),
		)
	})

	it("supports workspace-folder-name-prefixed paths before the file exists", async () => {
		const primaryRoot = path.join(tempDir, "primary")
		const secondaryRoot = path.join(tempDir, "secondary")
		await fs.mkdir(primaryRoot, { recursive: true })
		await fs.mkdir(secondaryRoot, { recursive: true })

		mockWorkspace.workspaceFolders = [
			{ uri: { fsPath: primaryRoot }, name: "primary", index: 0 },
			{ uri: { fsPath: secondaryRoot }, name: "secondary", index: 1 },
		]

		await expect(resolvePathInWorkspace(primaryRoot, path.join("secondary", "new-file.txt"))).resolves.toBe(
			path.join(secondaryRoot, "new-file.txt"),
		)
	})

	it("resolves a new file into the only workspace root that already contains the parent directory", async () => {
		const primaryRoot = path.join(tempDir, "primary")
		const secondaryRoot = path.join(tempDir, "secondary")
		await fs.mkdir(path.join(primaryRoot, "src"), { recursive: true })
		await fs.mkdir(path.join(secondaryRoot, "nested", "dir"), { recursive: true })

		mockWorkspace.workspaceFolders = [
			{ uri: { fsPath: primaryRoot }, name: "primary", index: 0 },
			{ uri: { fsPath: secondaryRoot }, name: "secondary", index: 1 },
		]

		await expect(resolvePathInWorkspace(primaryRoot, path.join("nested", "dir", "new-file.txt"))).resolves.toBe(
			path.join(secondaryRoot, "nested", "dir", "new-file.txt"),
		)
	})

	it("does not allow workspace-folder-name prefixes to escape the selected root", async () => {
		const primaryRoot = path.join(tempDir, "primary")
		const secondaryRoot = path.join(tempDir, "secondary")
		await fs.mkdir(primaryRoot, { recursive: true })
		await fs.mkdir(secondaryRoot, { recursive: true })

		mockWorkspace.workspaceFolders = [
			{ uri: { fsPath: primaryRoot }, name: "primary", index: 0 },
			{ uri: { fsPath: secondaryRoot }, name: "secondary", index: 1 },
		]

		await expect(resolvePathInWorkspace(primaryRoot, path.join("secondary", "..", "escaped.txt"))).resolves.toBe(
			path.join(primaryRoot, "escaped.txt"),
		)
	})

	it("returns workspace-folder-qualified display paths in multi-root workspaces", () => {
		const primaryRoot = path.join(tempDir, "primary")
		const secondaryRoot = path.join(tempDir, "secondary")

		mockWorkspace.workspaceFolders = [
			{ uri: { fsPath: primaryRoot }, name: "primary", index: 0 },
			{ uri: { fsPath: secondaryRoot }, name: "secondary", index: 1 },
		]

		expect(getWorkspaceReadablePath(primaryRoot, path.join(secondaryRoot, "nested", "file.txt"), "file.txt")).toBe(
			"secondary/nested/file.txt",
		)
	})
})
