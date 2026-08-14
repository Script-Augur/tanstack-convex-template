# Script-Augur conventions

Thin org index for apps in the Script-Augur coding system. Merge useful bits into your root `AGENTS.md` if you already have one — this file is installed at `docs/script-augur/AGENTS.md` to avoid clobbering a fat project AGENTS file.

## Three pillars

1. **App template** — `Script-Augur/tanstack-convex-template` (copy-once)
2. **Immutable packages** — `@script-augur/*` on GitHub Packages (versioned, downhill updates)
3. **Mutable UI / conventions** — this registry (`Script-Augur/ui-registry`) via `pnpm dlx shadcn add …`

## Private npm auth

- **Local (once per machine):** PAT with `read:packages` in `~/.npmrc` or `NPM_TOKEN` env. Not per-repo.
- **CI:** use `Script-Augur/packages/.github/actions/setup-script-augur`

See [packages README](https://github.com/Script-Augur/packages#local-auth-once-per-machine).

## Commands

```bash
pnpm dlx shadcn@latest add Script-Augur/ui-registry/button
pnpm dlx shadcn@latest add Script-Augur/ui-registry/project-conventions
```

Use `--dry-run` / `--diff` before overwriting local files.
