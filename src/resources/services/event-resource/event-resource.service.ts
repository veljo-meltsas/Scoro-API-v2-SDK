import { APIClient } from '../../base'
import { IEventResource } from './types/events-resorces.types'

export class EventResourceService extends APIClient {
  async getEventResource(id: number): Promise<IEventResource> {
    return await this.view<IEventResource>('eventsResources', id)
  }

  async getEventsResources(
    query: Record<string, unknown> = {},
    perPage = 50,
    page = 1
  ): Promise<IEventResource[]> {
    return await this.list<IEventResource>(
      'eventsResources',
      query,
      {},
      perPage,
      page
    )
  }
}
