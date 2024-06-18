import { APIClient } from '@/resources/base'
import { IRolePrice } from './types/role-price.type'

export class RolePriceService extends APIClient {
  async getRolePrices(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IRolePrice[]> {
    return await this.list<IRolePrice>('rolesPrices', query, {}, perPage, page)
  }
}
