import * as vscode from "vscode"
import * as path from "path"
import * as fs from "fs/promises"

import { getReadablePath } from "./path"

/**
 * Checks if a file path is outside all workspace folders
 * @param filePath The file path to check
 * @returns true if the path is outside all workspace folders, false otherwise
 */
export function isPathOutsideWorkspace(filePath: string): boolean {
	// If there are no workspace folders, consider everything outside workspace for safety
	if (!vscode.workspace.workspaceFolders || vscode.workspace.workspaceFolders.length === 0) {
		return true
	}

	// Normalize and resolve the path to handle .. and . components correctly
	const absolutePath = path.resolve(filePath)

	// Check if the path is within any workspace folder
	return !vscode.workspace.workspaceFolders.some((folder) => {
		return isPathInside(absolutePath, folder.uri.fsPath)
	})
}

function isPathInside(filePath: string, rootPath: string): boolean {
	const normalizedPath = normalizePathForComparison(filePath)
	const normalizedRoot = normalizePathForComparison(rootPath)
	const relativePath = path.relative(normalizedRoot, normalizedPath)
	return relativePath === "" || (!!relativePath && !relativePath.startsWith("..") && !path.isAbsolute(relativePath))
}

function normalizePathForComparison(filePath: string): string {
	const resolvedPath = path.resolve(filePath)
	return process.platform === "win32" ? resolvedPath.toLowerCase() : resolvedPath
}

async function pathExists(filePath: string): Promise<boolean> {
	try {
		await fs.stat(filePath)
		return true
	} catch {
		return false
	}
}

async function pathHasExistingAncestorBelowRoot(filePath: string, rootPath: string): Promise<boolean> {
	let currentPath = path.dirname(path.resolve(filePath))
	const resolvedRoot = path.resolve(rootPath)

	while (isPathInside(currentPath, resolvedRoot)) {
		if (currentPath === resolvedRoot) {
			return false
		}

		if (await pathExists(currentPath)) {
			return true
		}

		const parentPath = path.dirname(currentPath)
		if (parentPath === currentPath) {
			return false
		}
		currentPath = parentPath
	}

	return false
}

function pathSegments(filePath: string): string[] {
	return filePath.split(/[\\/]+/).filter(Boolean)
}

function namesEqual(a: string, b: string): boolean {
	return process.platform === "win32" ? a.toLowerCase() === b.toLowerCase() : a === b
}

/**
 * Resolves a tool path against the current cwd and all VS Code workspace roots.
 *
 * In multi-root workspaces, task.cwd is only one root. If a relative path does
 * not exist there, try the other workspace folders before surfacing ENOENT.
 */
export async function resolvePathInWorkspace(cwd: string, filePath: string): Promise<string> {
	if (path.isAbsolute(filePath)) {
		return path.resolve(filePath)
	}

	const primaryPath = path.resolve(cwd, filePath)
	if (await pathExists(primaryPath)) {
		return primaryPath
	}

	const workspaceFolders = vscode.workspace.workspaceFolders ?? []
	const segments = pathSegments(filePath)
	const firstSegment = segments[0]

	if (firstSegment) {
		for (const folder of workspaceFolders) {
			const folderPath = folder.uri.fsPath
			const folderNames = [folder.name, path.basename(folderPath)]
			if (folderNames.some((name) => namesEqual(name, firstSegment))) {
				const candidate = path.resolve(folderPath, ...segments.slice(1))
				if (isPathInside(candidate, folderPath)) {
					return candidate
				}
			}
		}
	}

	for (const folder of workspaceFolders) {
		const candidate = path.resolve(folder.uri.fsPath, filePath)
		if (await pathExists(candidate)) {
			return candidate
		}
	}

	const parentMatches: Array<{ candidate: string; rootPath: string }> = []

	for (const folder of workspaceFolders) {
		const rootPath = folder.uri.fsPath
		const candidate = path.resolve(rootPath, filePath)
		if (await pathHasExistingAncestorBelowRoot(candidate, rootPath)) {
			parentMatches.push({ candidate, rootPath })
		}
	}

	if (parentMatches.length === 1) {
		return parentMatches[0].candidate
	}

	if (parentMatches.length > 1) {
		const cwdMatches = parentMatches.filter(({ rootPath }) => isPathInside(cwd, rootPath))
		if (cwdMatches.length === 1) {
			return cwdMatches[0].candidate
		}
	}

	return primaryPath
}

export function getWorkspaceRootForPath(filePath: string, fallbackCwd?: string): string | undefined {
	const resolvedPath = path.resolve(filePath)
	const workspaceRoot = vscode.workspace.workspaceFolders?.find((folder) =>
		isPathInside(resolvedPath, folder.uri.fsPath),
	)?.uri.fsPath

	if (workspaceRoot) {
		return workspaceRoot
	}

	if (fallbackCwd && isPathInside(resolvedPath, fallbackCwd)) {
		return fallbackCwd
	}

	return undefined
}

export function getWorkspaceRelativePath(cwd: string, filePath: string): string {
	const absolutePath = path.isAbsolute(filePath) ? path.resolve(filePath) : path.resolve(cwd, filePath)
	const rootPath = getWorkspaceRootForPath(absolutePath, cwd) ?? cwd
	return path.relative(rootPath, absolutePath).toPosix()
}

export function getWorkspaceReadablePath(cwd: string, absolutePath: string, fallbackPath?: string): string {
	const workspaceFolders = vscode.workspace.workspaceFolders ?? []
	const resolvedPath = path.resolve(absolutePath)

	for (const folder of workspaceFolders) {
		const folderPath = folder.uri.fsPath
		if (!isPathInside(resolvedPath, folderPath)) {
			continue
		}

		const relativePath = path.relative(folderPath, resolvedPath).toPosix()
		if (workspaceFolders.length > 1) {
			return relativePath ? `${folder.name}/${relativePath}`.toPosix() : folder.name.toPosix()
		}

		return relativePath || path.basename(folderPath).toPosix()
	}

	return getReadablePath(cwd, fallbackPath ?? resolvedPath)
}
