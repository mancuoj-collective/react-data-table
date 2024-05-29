import type { QueryClient } from '@tanstack/react-query'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { ScrollArea } from '~/components/ui/scroll-area'
import { Toaster } from '~/components/ui/sonner'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: Root,
})

function Root() {
  return (
    <ScrollArea className="h-dvh font-sans antialiased">
      <Outlet />
      <Toaster />
    </ScrollArea>
  )
}
