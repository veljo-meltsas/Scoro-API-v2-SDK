import { APIClient } from './../../base'
import type { ITask } from './types/task.type'

export class TaskService extends APIClient {
  async getTask(id: number): Promise<ITask> {
    return await this.view<ITask>('tasks', id)
  }

  async getTasks(
    query: Record<string, unknown> = {},
    perPage = 50,
    page = 1
  ): Promise<ITask[]> {
    return await this.list<ITask>('tasks', query, {}, perPage, page)
  }

  async createTask(task: Partial<ITask>): Promise<ITask> {
    return await this.create<ITask>('tasks', task)
  }

  async updateTask(id: number, task: Partial<ITask>): Promise<ITask> {
    return await this.update<ITask>('tasks', id, task)
  }

  async deleteTask(id: number): Promise<void> {
    await this.delete('tasks', id)
  }
}
