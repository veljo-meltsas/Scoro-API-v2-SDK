import { APIClient } from '../../base'
import { IRolePrice } from './types/role-price.type'

export class RolePriceService extends APIClient {
  async getRolePrices(
    query: Record<string, unknown> = {},
    perPage = 50,
    page = 1
  ): Promise<IRolePrice[]> {
    return await this.list<IRolePrice>('rolesPrices', query, {}, perPage, page)
  }
}
