import { APIClient } from '../../base'
import { IReceiptGroup } from './types/receipt-group.type'

export class ReceiptGroupsService extends APIClient {
  async getReceiptGroups(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IReceiptGroup[]> {
    return await this.list<IReceiptGroup>('receipts', query, {}, perPage, page)
  }

  async updateReceiptGroup(
    id: number,
    data: Record<string, unknown>
  ): Promise<void> {
    await this.update('receipts', id, data)
  }

  async deleteReceiptGroup(id: number): Promise<void> {
    await this.delete('receipts', id)
  }
}
