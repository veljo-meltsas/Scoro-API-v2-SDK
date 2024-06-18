import { APIClient } from '@/resources/base'
import { IRelationType } from './types/relation-type.type'

export class RelationTypeService extends APIClient {
  async getRelationTypes(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IRelationType[]> {
    return await this.list<IRelationType>(
      'relationTypes',
      query,
      {},
      perPage,
      page
    )
  }
}
