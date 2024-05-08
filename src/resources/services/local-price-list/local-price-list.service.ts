import { APIClient } from '../../base'
import type { ILocalPriceList } from './types/local-price-list.type'

export class LocalPriceListService extends APIClient {
  async getLocalPriceLists(
    query: Record<string, unknown> = {},
    perPage = 50,
    page = 1
  ): Promise<ILocalPriceList[]> {
    return await this.list<ILocalPriceList>(
      'localPriceLists',
      query,
      {},
      perPage,
      page
    )
  }

  async getLocalPriceList(id: number): Promise<ILocalPriceList> {
    return await this.view<ILocalPriceList>('localPriceLists', id)
  }

  async createLocalPriceList(
    data: Partial<ILocalPriceList>
  ): Promise<ILocalPriceList> {
    return await this.create<ILocalPriceList>('localPriceLists', data)
  }

  async updateLocalPriceList(
    id: number,
    data: Partial<ILocalPriceList>
  ): Promise<ILocalPriceList> {
    return await this.update<ILocalPriceList>('localPriceLists', id, data)
  }
}
