import { Task } from '~/utils/schema'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'label',
    header: 'Label',
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
  },
]
