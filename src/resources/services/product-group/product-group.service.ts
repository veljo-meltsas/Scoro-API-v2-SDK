import { APIClient } from '@/resources/base'
import type { IProductGroup } from './types/product-group.type'

export class ProductGroupService extends APIClient {
  async getProductGroups(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IProductGroup[]> {
    return await this.list<IProductGroup>(
      'productGroups',
      query,
      {},
      perPage,
      page
    )
  }

  async getProductGroup(id: number): Promise<IProductGroup> {
    return await this.view<IProductGroup>('productGroups', id)
  }

  async createProductGroup(
    data: Partial<IProductGroup>
  ): Promise<IProductGroup> {
    return await this.create<IProductGroup>('productGroups', data)
  }

  async updateProductGroup(
    id: number,
    data: Partial<IProductGroup>
  ): Promise<IProductGroup> {
    return await this.update<IProductGroup>('productGroups', id, data)
  }
}
