import { QueryClient } from '@tanstack/react-query'
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { Toaster } from '~/components/ui/sonner'

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient
}>()({
  component: Root,
})

function Root() {
  return (
    <div className="relative grid min-h-dvh grid-cols-[1fr_min(80ch,calc(100%_-_64px))_1fr] gap-x-8 overflow-hidden font-sans antialiased">
      <main className="col-[2]">
        <Outlet />
      </main>
      <Toaster />
    </div>
  )
}
