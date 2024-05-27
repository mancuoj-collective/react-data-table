import { createFileRoute } from '@tanstack/react-router'
import { columns } from '~/components/data-table/columns'
import { DataTable } from '~/components/data-table/data-table'
import { UserNav } from '~/components/user-nav'
import { tasks } from '~/tasks'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <div className="flex flex-col justify-center gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Welcome back !</h2>
          <p className="text-muted-foreground">Here&apos;s a list of your tasks for this month.</p>
        </div>
        <UserNav />
      </div>
      <DataTable columns={columns} data={tasks} />
    </div>
  )
}
