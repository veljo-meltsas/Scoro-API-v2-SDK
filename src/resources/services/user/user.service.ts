import { APIClient } from './../../base'
import { IUserSettings } from './types/settings.type'
import type { IUser } from './types/user.type'

export class UserService extends APIClient {
  async getUser(id: number): Promise<IUser> {
    return await this.view<IUser>('users', id)
  }

  async getUsers(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IUser[]> {
    return await this.list<IUser>('users', query, {}, perPage, page)
  }

  async getUserSettings(id: number): Promise<IUserSettings> {
    return await this.customCallWithouBodyAndId<IUserSettings>(
      'users',
      'settings',
      id
    )
  }
}
