import { APIClient } from '@/resources/base'
import { IAccountingObject } from './types/finance-object.type'

export class FinanceObjectService extends APIClient {
  async getFinanceObjects(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IAccountingObject[]> {
    return await this.list<IAccountingObject>(
      'financeObjects',
      query,
      {},
      perPage,
      page
    )
  }

  async getFinanceObject(id: number): Promise<IAccountingObject> {
    return await this.view<IAccountingObject>('financeObjects', id)
  }
}
