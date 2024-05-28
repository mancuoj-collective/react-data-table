import type { ColumnDef } from '@tanstack/react-table'
import type { Task } from '~/utils/schema'
import { Checkbox } from '../ui/checkbox'
import { DataTableColumnHeader } from './data-table-column-header'
import { labels, priorities, statuses } from '~/utils/seed'
import { Badge } from '../ui/badge'

export const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        aria-label="Select all"
        className="translate-y-[2px]"
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        aria-label="Select row"
        className="translate-y-[2px]"
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: ({ column }) => <DataTableColumnHeader title="Task" column={column} />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => <DataTableColumnHeader title="Title" column={column} />,
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className="flex gap-2">
          {label && <Badge variant="outline">{label.label}</Badge>}
          <span className="max-w-[500px] truncate font-medium">{row.getValue('title')}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = statuses.find((status) => status.value === row.getValue('status'))

      if (!status) return null
      return (
        <div className="flex w-[100px] items-center gap-2">
          {status.icon && <status.icon className="size-4 text-muted-foreground" />}
          <span>{status.label}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'priority',
    header: ({ column }) => <DataTableColumnHeader column={column} title="Priority" />,
    cell: ({ row }) => {
      const priority = priorities.find((priority) => priority.value === row.getValue('priority'))

      if (!priority) return null
      return (
        <div className="flex items-center gap-2">
          {priority.icon && <priority.icon className="size-4 text-muted-foreground" />}
          <span>{priority.label}</span>
        </div>
      )
    },
  },
]
