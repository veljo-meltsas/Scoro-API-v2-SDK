import { APIClient } from '../../base'
import { IUserGroup } from './types/user-group.type'

export class UserGroupService extends APIClient {
  async getUserGroups(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IUserGroup[]> {
    return await this.list<IUserGroup>('userGroups', query, {}, perPage, page)
  }

  async getUserGroupById(userGroupId: number): Promise<IUserGroup> {
    return await this.view<IUserGroup>('userGroups', userGroupId)
  }
}
