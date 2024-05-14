import { APIClient } from '../../base'
import { ICustomField } from './types/custom-field.type'

export class CustomFieldService extends APIClient {
  async getCustomFields(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<ICustomField[]> {
    return await this.list<ICustomField>(
      'customFields',
      query,
      {},
      perPage,
      page
    )
  }
}
