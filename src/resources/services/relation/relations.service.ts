import { APIClient } from '@/resources/base'
import { IDeleteRelations, IRelation } from './types/relations.type'

export class RelationService extends APIClient {
  public async getRelations(
    request: Partial<IRelation> = {}
  ): Promise<IRelation> {
    return await this.callRelations('relations', request)
  }

  public async modifyRelation(request: Partial<IRelation>): Promise<void> {
    await this.customCallWithBody<IRelation>('relations', 'modify', request)
  }

  public async deleteRelation(
    request: Partial<IDeleteRelations>
  ): Promise<void> {
    await this.customCallWithBody<IDeleteRelations>(
      'relations',
      'delete',
      request
    )
  }
}
