import { APIClient } from '../../base'
import type { ISearch } from './types/search.type'

export class SearchService extends APIClient {
  async findAllBy(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<ISearch[]> {
    return await this.list<ISearch>('search', query, {}, perPage, page)
  }
}
