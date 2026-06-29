# Coding Conventions — Lion Code

## TypeScript

- No `any` — use `unknown` + type guard or a proper interface
- All API request/response shapes defined as named interfaces in `src/types/`
- Prisma-generated types are canonical for DB shapes — do not redeclare

## API Shape

Every route returns exactly one of:
```ts
{ data: T }          // success
{ error: string }    // failure (never expose internals)
```

HTTP status: 200 success, 400 bad input, 401 unauth, 403 forbidden, 500 server error.

## Database

- Every read query includes `where: { userId }` or `where: { tenantId }` — no exceptions
- Multi-table writes use `prisma.$transaction([...])`
- No raw SQL unless Prisma ORM cannot express it — document why in a comment

## Components

- shadcn/ui for all interactive components — no raw `<button>`, `<input>`, `<table>`
- Tailwind for all styling — no inline styles, no CSS modules
- Dark theme: `bg-[#020817]` background, `text-slate-300` body, blue accents

## Git

- Commit format: `type: description` (e.g. `feat: add delegation dashboard`, `fix: qwen timeout`)
- Types: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`
- No Co-Authored-By lines
- Author: Amy Clayton <amythesmart@gmail.com> on every commit
- `--no-ff` merges to main only; feature branches rebased before merge if needed

## Comments

- Write zero comments by default
- Only add a comment when the WHY is genuinely non-obvious (hidden constraint, security workaround, upstream bug)
- Never explain what the code does — the code does that

## File Organization

```
src/
  app/           — Next.js App Router pages and API routes
  components/    — Shared UI components
  lib/           — Business logic, utilities, API clients
  types/         — Shared TypeScript interfaces
```

## Environment Variables

- Server-only vars: plain `UPPER_CASE`
- Client-exposed vars: `NEXT_PUBLIC_UPPER_CASE`
- Never access `process.env` directly in components — always through a typed config module in `src/lib/config.ts`
