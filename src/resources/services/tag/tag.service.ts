import { APIClient } from '../../base'
import { ITag } from './types/tag.type'

export class TagService extends APIClient {
  async getTags(
    query: Record<string, unknown> = {},
    perPage = 50,
    page = 1
  ): Promise<ITag[]> {
    return await this.list<ITag>('tags', query, {}, perPage, page)
  }
}
