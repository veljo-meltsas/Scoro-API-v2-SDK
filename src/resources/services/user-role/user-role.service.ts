import { APIClient } from '../../base'
import { IUserRole } from './types/user-role.type'

export class UserRoleService extends APIClient {
  async getUserRoles(
    query: Record<string, unknown> = {},
    perPage = 50,
    page = 1
  ): Promise<IUserRole[]> {
    return await this.list<IUserRole>('userRoles', query, {}, perPage, page)
  }

  async getUserRoleById(userRoleId: number): Promise<IUserRole> {
    return await this.view<IUserRole>('userRoles', userRoleId)
  }
}
