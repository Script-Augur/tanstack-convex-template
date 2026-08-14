# Convex

1. Copy `.env.local.example` → `.env.local`
2. Run `pnpm exec convex dev` to create a deployment and generate `convex/_generated/`
3. Optional later: add `@convex-dev/auth`, `@djpanda/convex-tenants`, `@djpanda/convex-authz` — already npm packages; not part of this template.

Starter schema: `schema.ts` with a `tasks` table. Add functions under `convex/` after codegen.
