import { APIClient } from './../../base'
import { IProjectRelatedObjects } from './types/project-related-object.type'
import type { IProject } from './types/project.type'

export class ProjectService extends APIClient {
  async getProjects(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IProject[]> {
    return await this.list<IProject>('projects', query, {}, perPage, page)
  }

  async getProject(id: number): Promise<IProject> {
    return await this.view<IProject>('projects', id)
  }

  async createProject(data: Partial<IProject>): Promise<IProject> {
    return await this.create<IProject>('projects', data)
  }

  async updateProject(id: number, data: Partial<IProject>): Promise<IProject> {
    return await this.update<IProject>('projects', id, data)
  }

  async deleteProject(id: number): Promise<void> {
    await this.delete('projects', id)
  }

  async getRelatedObjects(id: number): Promise<IProjectRelatedObjects> {
    return await this.customCallWithouBodyAndId<IProjectRelatedObjects>(
      'projects',
      'getRelatedObjects',
      id
    )
  }
}
