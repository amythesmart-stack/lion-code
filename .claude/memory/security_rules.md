# Security Rules — Lion Code

These are non-negotiable. Every agent enforces them. No exceptions.

## Secrets

- API keys, tokens, passwords — never in code, never in git, never in console.log
- `.env.local`, `.admin-overrides.json` — always in .gitignore, never committed
- Check `git diff --staged` before every commit — if you see a key, abort

## API Key Model

- Users authenticate with their own Anthropic, OpenAI, etc. keys
- Lion Code never stores or proxies user API keys through its own credentials
- Violating this risks Anthropic/OpenAI ToS termination

## Auth

- All `/api/admin/*` and `/api/user/*` routes require valid authenticated session
- Middleware handles this globally — do not re-implement per-route
- Session tokens: httpOnly cookies, secure, sameSite=lax — never in URLs or localStorage

## Multi-Tenancy

- Every database query must be scoped by `userId` or `tenantId`
- Cross-tenant data leaks are critical severity bugs — fix before any other work

## Git

- No force push to main — ever
- Author on every commit: Amy Clayton <amythesmart@gmail.com>
- No Co-Authored-By lines

## Input Handling

- Sanitize all user input: trim, strip HTML, cap length before any DB write or API call
- Public endpoints must have rate limiting (define limits in Planning Agent session)

## Upstream Attribution (Apache 2.0)

- Cline/Roo Code/Zoo Code copyright notices must be preserved in distributed code
- Apache 2.0 license text must ship with any distribution of the Lion CLI
