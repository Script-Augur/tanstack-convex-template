# Script-Augur TanStack + Convex template

Copy-once starter: **TanStack Start**, **Convex**, **Tailwind v4**, **shadcn (Base UI)**, wired to `@script-augur/*` packages and `Script-Augur/ui-registry`.

## Prerequisites

1. **Node.js** `>=20.19` or `>=22.12` (see `.nvmrc`)
2. **pnpm** (Corepack: `corepack enable && corepack prepare pnpm@9.9.0 --activate`)
3. **GitHub Packages auth (once per machine)** — PAT with `read:packages`:

```ini
# ~/.npmrc
@script-augur:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=ghp_YOUR_TOKEN
```

Or `export NPM_TOKEN=ghp_YOUR_TOKEN` (this repo’s `.npmrc` reads `${NPM_TOKEN}`).

## Create a project

Use GitHub **Use this template**, or:

```bash
gh repo create my-app --template Script-Augur/tanstack-convex-template --clone
cd my-app
pnpm install
pnpm exec convex dev   # generates convex/_generated
pnpm dev
```

## UI registry

```bash
pnpm dlx shadcn@latest add Script-Augur/ui-registry/button
pnpm dlx shadcn@latest add Script-Augur/ui-registry/project-conventions
```

`project-conventions` is already vendored under `docs/script-augur/` and `.cursor/rules/`. Re-run to refresh.

## CI

Example workflow vendors `setup-script-augur` and resolves `@script-augur/*` from a checkout of [`Script-Augur/packages`](https://github.com/Script-Augur/packages) so CI works without a packages-scoped PAT.

For real apps with `NPM_TOKEN` (`read:packages`), install from GitHub Packages directly and prefer:

`uses: Script-Augur/packages/.github/actions/setup-script-augur@main`

## Auth / tenants

Not bundled. Add `@convex-dev/auth`, `@djpanda/convex-tenants`, `@djpanda/convex-authz` when needed.

## Related

- [packages](https://github.com/Script-Augur/packages)
- [ui-registry](https://github.com/Script-Augur/ui-registry)
