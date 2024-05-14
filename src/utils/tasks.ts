import { promises as fs } from 'node:fs'
import path from 'node:path'
import { z } from 'zod'
import { taskSchema } from './schema'

export async function getTasks() {
  const data = await fs.readFile(path.join(__dirname, '../tasks.json'))
  const tasks = JSON.parse(data.toString())
  return z.array(taskSchema).parse(tasks)
}
