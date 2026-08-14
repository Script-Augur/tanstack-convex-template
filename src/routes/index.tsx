import { createFileRoute } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-lg min-w-0 flex-col gap-4 text-sm leading-relaxed">
        <h1 className="text-lg font-medium">Script-Augur template</h1>

        <p>
          TanStack Start + Convex + Tailwind v4 + Base UI. Add UI with{' '}

          <code className="rounded bg-muted px-1">
            pnpm dlx shadcn add Script-Augur/ui-registry/…
          </code>
          .
        </p>

        <Button>Button</Button>
      </div>
    </div>
  )
}
