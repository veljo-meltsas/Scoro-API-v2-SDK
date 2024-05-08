import { APIClient } from '../../base'
import type { IDepot } from './types/depot.type'

export class DepotService extends APIClient {
  async getDepot(id: number): Promise<IDepot> {
    return await this.view<IDepot>('depot', id)
  }

  async getDepots(
    query: Record<string, unknown> = {},
    perPage = 50,
    page = 1
  ): Promise<IDepot[]> {
    return await this.list<IDepot>('depot', query, {}, perPage, page)
  }
}
