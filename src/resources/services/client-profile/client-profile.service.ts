import { APIClient } from '@/resources/base'
import { IClientProfile } from './types/client-profile.type'

export class ClientProfileService extends APIClient {
  async getClientProfiles(): Promise<IClientProfile[]> {
    return await this.list<IClientProfile>('clientProfiles')
  }

  async findAllClientProfilesBy(
    filters: Record<string, any>,
    perPage = 50,
    page = 1
  ): Promise<IClientProfile[]> {
    return await this.list<IClientProfile>(
      'clientProfiles',
      filters,
      {},
      perPage,
      page
    )
  }

  async getClientProfile(id: number): Promise<IClientProfile> {
    return await this.view<IClientProfile>('clientProfiles', id)
  }

  async createClientProfile(data: IClientProfile): Promise<IClientProfile> {
    return await this.create<IClientProfile>('clientProfiles', data)
  }

  async updateClientProfile(
    id: number,
    data: IClientProfile
  ): Promise<IClientProfile> {
    return await this.update<IClientProfile>('clientProfiles', id, data)
  }

  async deleteClientProfile(id: number): Promise<void> {
    await this.delete('clientProfiles', id)
  }
}
