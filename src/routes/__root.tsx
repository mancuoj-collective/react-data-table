import type { QueryClient } from '@tanstack/react-query'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { Toaster } from '~/components/ui/sonner'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: Root,
})

function Root() {
  return (
    <div className="min-h-dvh font-sans antialiased">
      <Outlet />
      <Toaster />
    </div>
  )
}
