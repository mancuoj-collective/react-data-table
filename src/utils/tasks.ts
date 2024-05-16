import fsp from 'node:fs/promises'
import path from 'node:path'
import { z } from 'zod'
import { taskSchema } from './schema'

export async function getTasks() {
  const data = await fsp.readFile(path.join(__dirname, '../tasks.json'))
  const tasks = JSON.parse(data.toString())
  return z.array(taskSchema).parse(tasks)
}
