import { APIClient } from '../../base'
import { ICustomModule } from './types/custom-module.type'

export class CustomModuleService extends APIClient {
  async getCustomModules(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<ICustomModule[]> {
    return await this.list<ICustomModule>(
      'customModules',
      query,
      {},
      perPage,
      page
    )
  }

  async getCustomModule(id: number): Promise<ICustomModule> {
    return await this.view<ICustomModule>('customModules', id)
  }
}
