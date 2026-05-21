import path from "path"
import { fileExistsAtPath } from "../../utils/fs"
import fs from "fs/promises"
import fsSync from "fs"
import ignore, { Ignore } from "ignore"
import * as vscode from "vscode"

import { getWorkspaceRelativePath, getWorkspaceRootForPath } from "../../utils/pathUtils"

export const LOCK_TEXT_SYMBOL = "\u{1F512}"

/**
 * Controls LLM access to files by enforcing ignore patterns.
 * Designed to be instantiated once in Cline.ts and passed to file manipulation services.
 * Uses the 'ignore' library to support standard .gitignore syntax in .rooignore files.
 */
export class RooIgnoreController {
	private cwd: string
	private ignoreInstance: Ignore
	private ignoreInstances = new Map<string, Ignore>()
	private rooIgnoreContents = new Map<string, string | undefined>()
	private disposables: vscode.Disposable[] = []
	rooIgnoreContent: string | undefined

	constructor(cwd: string) {
		this.cwd = cwd
		this.ignoreInstance = ignore()
		this.rooIgnoreContent = undefined
		// Set up file watcher for .rooignore
		this.setupFileWatcher()
	}

	/**
	 * Initialize the controller by loading custom patterns
	 * Must be called after construction and before using the controller
	 */
	async initialize(): Promise<void> {
		await this.loadRooIgnore()
	}

	/**
	 * Set up the file watcher for .rooignore changes
	 */
	private setupFileWatcher(): void {
		this.setupFileWatcherForRoot(this.cwd)
	}

	private setupFileWatcherForRoot(rootPath: string): void {
		const rooignorePattern = new vscode.RelativePattern(rootPath, ".rooignore")
		const fileWatcher = vscode.workspace.createFileSystemWatcher(rooignorePattern)

		// Watch for changes and updates
		this.disposables.push(
			fileWatcher.onDidChange(() => {
				this.loadRooIgnoreForRoot(rootPath)
			}),
			fileWatcher.onDidCreate(() => {
				this.loadRooIgnoreForRoot(rootPath)
			}),
			fileWatcher.onDidDelete(() => {
				this.loadRooIgnoreForRoot(rootPath)
			}),
		)

		// Add fileWatcher itself to disposables
		this.disposables.push(fileWatcher)
	}

	/**
	 * Load custom patterns from .rooignore if it exists
	 */
	private async loadRooIgnore(): Promise<void> {
		await this.loadRooIgnoreForRoot(this.cwd)
	}

	private async loadRooIgnoreForRoot(rootPath: string): Promise<void> {
		try {
			// Reset ignore instance to prevent duplicate patterns
			const ignoreInstance = ignore()
			const ignorePath = path.join(rootPath, ".rooignore")
			if (await fileExistsAtPath(ignorePath)) {
				const content = await fs.readFile(ignorePath, "utf8")
				ignoreInstance.add(content)
				ignoreInstance.add(".rooignore")
				this.ignoreInstances.set(rootPath, ignoreInstance)
				this.rooIgnoreContents.set(rootPath, content)
			} else {
				this.ignoreInstances.set(rootPath, ignoreInstance)
				this.rooIgnoreContents.set(rootPath, undefined)
			}

			if (rootPath === this.cwd) {
				this.ignoreInstance = ignoreInstance
				this.rooIgnoreContent = this.rooIgnoreContents.get(rootPath)
			}
		} catch (error) {
			// Should never happen: reading file failed even though it exists
			console.error("Unexpected error loading .rooignore:", error)
		}
	}

	private getIgnoreStateForRoot(rootPath: string): { ignoreInstance: Ignore; content: string | undefined } {
		const cached = this.ignoreInstances.get(rootPath)
		if (cached) {
			return { ignoreInstance: cached, content: this.rooIgnoreContents.get(rootPath) }
		}

		const ignoreInstance = ignore()
		try {
			const ignorePath = path.join(rootPath, ".rooignore")
			if (fsSync.existsSync(ignorePath)) {
				const content = fsSync.readFileSync(ignorePath, "utf8")
				ignoreInstance.add(content)
				ignoreInstance.add(".rooignore")
				this.ignoreInstances.set(rootPath, ignoreInstance)
				this.rooIgnoreContents.set(rootPath, content)
				this.setupFileWatcherForRoot(rootPath)
				return { ignoreInstance, content }
			}
		} catch (error) {
			console.error("Unexpected error loading .rooignore:", error)
		}

		this.ignoreInstances.set(rootPath, ignoreInstance)
		this.rooIgnoreContents.set(rootPath, undefined)
		this.setupFileWatcherForRoot(rootPath)
		return { ignoreInstance, content: undefined }
	}

	private getKnownWorkspaceRoots(): string[] {
		const roots = new Set<string>([this.cwd])
		for (const folder of vscode.workspace.workspaceFolders ?? []) {
			roots.add(folder.uri.fsPath)
		}
		return [...roots]
	}

	private getAvailableIgnoreContents(): Array<{ rootPath: string; content: string }> {
		return this.getKnownWorkspaceRoots()
			.map((rootPath) => ({ rootPath, content: this.getIgnoreStateForRoot(rootPath).content }))
			.filter((entry): entry is { rootPath: string; content: string } => typeof entry.content === "string")
	}

	/**
	 * Check if a file should be accessible to the LLM
	 * Automatically resolves symlinks
	 * @param filePath - Path to check (relative to cwd)
	 * @returns true if file is accessible, false if ignored
	 */
	validateAccess(filePath: string): boolean {
		const absolutePath = path.isAbsolute(filePath) ? path.resolve(filePath) : path.resolve(this.cwd, filePath)
		const rootPath = getWorkspaceRootForPath(absolutePath, this.cwd)

		// Preserve backward compatibility for files outside the task workspace roots.
		if (!rootPath) {
			return true
		}

		const { ignoreInstance, content } = this.getIgnoreStateForRoot(rootPath)
		// Always allow access if .rooignore does not exist
		if (!content) {
			return true
		}

		try {
			// Follow symlinks to get the real path
			let realPath: string
			try {
				realPath = fsSync.realpathSync(absolutePath)
			} catch {
				// If realpath fails (file doesn't exist, broken symlink, etc.),
				// use the original path
				realPath = absolutePath
			}

			// Convert real path to relative for .rooignore checking
			const relativePath = getWorkspaceRelativePath(rootPath, realPath)

			// Check if the real path is ignored
			return !ignoreInstance.ignores(relativePath)
		} catch (error) {
			// Allow access to files outside cwd or on errors (backward compatibility)
			return true
		}
	}

	/**
	 * Check if a terminal command should be allowed to execute based on file access patterns
	 * @param command - Terminal command to validate
	 * @returns path of file that is being accessed if it is being accessed, undefined if command is allowed
	 */
	validateCommand(command: string): string | undefined {
		// Split command into parts and get the base command
		const parts = command.trim().split(/\s+/)
		const baseCommand = parts[0].toLowerCase()

		// Commands that read file contents
		const fileReadingCommands = [
			// Unix commands
			"cat",
			"less",
			"more",
			"head",
			"tail",
			"grep",
			"awk",
			"sed",
			// PowerShell commands and aliases
			"get-content",
			"gc",
			"type",
			"select-string",
			"sls",
		]

		if (fileReadingCommands.includes(baseCommand)) {
			// Check each argument that could be a file path
			for (let i = 1; i < parts.length; i++) {
				const arg = parts[i]
				const isWindowsAbsolutePath = path.win32.isAbsolute(arg)
				// Skip command flags/options (both Unix and PowerShell style)
				if (arg.startsWith("-") || (arg.startsWith("/") && !path.isAbsolute(arg))) {
					continue
				}
				// Ignore PowerShell parameter names
				if (arg.includes(":") && !isWindowsAbsolutePath) {
					continue
				}
				// Validate file access
				if (!this.validateAccess(arg)) {
					return arg
				}
			}
		}

		return undefined
	}

	/**
	 * Filter an array of paths, removing those that should be ignored
	 * @param paths - Array of paths to filter (relative to cwd)
	 * @returns Array of allowed paths
	 */
	filterPaths(paths: string[]): string[] {
		try {
			return paths
				.map((p) => ({
					path: p,
					allowed: this.validateAccess(p),
				}))
				.filter((x) => x.allowed)
				.map((x) => x.path)
		} catch (error) {
			console.error("Error filtering paths:", error)
			return [] // Fail closed for security
		}
	}

	/**
	 * Clean up resources when the controller is no longer needed
	 */
	dispose(): void {
		this.disposables.forEach((d) => d.dispose())
		this.disposables = []
	}

	/**
	 * Get formatted instructions about the .rooignore file for the LLM
	 * @returns Formatted instructions or undefined if .rooignore doesn't exist
	 */
	getInstructions(): string | undefined {
		const ignoreEntries = this.getAvailableIgnoreContents()
		if (ignoreEntries.length === 0) {
			return undefined
		}

		const sections = ignoreEntries
			.map(({ rootPath, content }) => {
				const workspaceName =
					vscode.workspace.workspaceFolders?.find((folder) => folder.uri.fsPath === rootPath)?.name ??
					path.basename(rootPath) ??
					rootPath
				return `## ${workspaceName}\n\n${content}\n.rooignore`
			})
			.join("\n\n")

		return `# .rooignore\n\n(The following is provided by workspace-root .rooignore files where the user has specified files and directories that should not be accessed. When using list_files, you'll notice a ${LOCK_TEXT_SYMBOL} next to files that are blocked. Attempting to access the file's contents e.g. through read_file will result in an error.)\n\n${sections}`
	}
}
