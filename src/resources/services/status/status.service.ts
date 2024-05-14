import { APIClient } from '../../base'
import { IStatus } from './types/status.type'

export class StatusService extends APIClient {
  async getStatuses(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IStatus[]> {
    return await this.list<IStatus>('statuses', query, {}, perPage, page)
  }
}
