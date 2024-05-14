import { createFileRoute } from '@tanstack/react-router'
import UserNav from '~/components/user-nav'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex h-dvh flex-col justify-center">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Welcome back !</h2>
          <p className="text-muted-foreground">Here&apos;s a list of your tasks for this month.</p>
        </div>
        <UserNav />
      </div>
    </div>
  )
}
