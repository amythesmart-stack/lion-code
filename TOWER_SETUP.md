# Lion Code — Tower (Merkava) Setup

Branch: `fix/lmstudio-0416-compat`

## What was fixed

LM Studio 0.4.16 broke three things:

1. **WebSocket SDK dead** — `@lmstudio/sdk` hits "unexpected endpoint" on the new protocol. Removed entirely. Lion Code now uses plain REST (`/v1/models`, `/v1/chat/completions`) via axios.
2. **Doubled `/v1` path** — if the stored base URL already ends in `/v1`, appending `/v1` again gives `/v1/v1/chat/completions`. Fixed with `normalizeBase()` that strips trailing `/v1` before construction.
3. **API key required** — LM Studio now needs a Bearer token. Added API Key field to the LM Studio settings panel in Lion Code.

## Install on tower

```bash
# 1. Pull the branch
git fetch origin
git checkout fix/lmstudio-0416-compat

# 2. Install deps (if not already)
pnpm install

# 3. Force rebuild (don't skip --force or you'll get stale cache)
pnpm build --force

# 4. Package
cd src
npx @vscode/vsce package --no-dependencies

# 5. Install into VS Code
code --install-extension lion-code-3.64.0.vsix --force
# or drag the .vsix into VS Code Extensions panel
```

## Configure Lion Code on tower

In Lion Code settings → LM Studio:

| Field    | Value                                                          |
| -------- | -------------------------------------------------------------- |
| Base URL | `http://localhost:1234`                                        |
| API Key  | your LM Studio API key (check LM Studio → Developer → API Key) |
| Model    | pick Qwen from the dropdown after saving                       |

## Block the foundry skill from coming back

LM Studio pushed a `microsoft-foundry` skill that injected 167 Azure MCP tools into Qwen's context and broke his native tool calling. Lock it out:

```bash
cat > ~/.agents/.skill-lock.json << 'EOF'
{
  "version": 3,
  "skills": {},
  "dismissed": {
    "microsoft-foundry": {
      "source": "microsoft/azure-skills",
      "dismissedAt": "2026-07-01T00:00:00.000Z",
      "reason": "not applicable to this agent"
    }
  }
}
EOF
```

## Auto-approve (so Qwen works autonomously)

In Lion Code settings, enable auto-approve for: read files, write files, execute commands. Without this he asks permission for every action.
