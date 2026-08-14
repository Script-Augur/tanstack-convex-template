# Agent guidelines

See [`docs/script-augur/AGENTS.md`](docs/script-augur/AGENTS.md) and `.cursor/rules/`.

## Stack

- TanStack Start + React
- Convex (`convex/`) — run `pnpm exec convex dev` before backend work
- shadcn Base UI — prefer `pnpm dlx shadcn add Script-Augur/ui-registry/...`
- Shared tooling via `@script-augur/eslint-config`, `prettier-config`, `tsconfig`

Do not commit without an explicit user request.
