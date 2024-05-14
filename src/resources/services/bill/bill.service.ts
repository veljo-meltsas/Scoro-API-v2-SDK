import { APIClient } from '../../base'
import { IBill } from './types/bill.type'

export class BillsService extends APIClient {
  async getBill(id: number): Promise<IBill> {
    return await this.view<IBill>('bills', id)
  }

  async getBills(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IBill[]> {
    return await this.list<IBill>('bills', query, {}, perPage, page)
  }

  async updateBill(id: number, data: Record<string, unknown>): Promise<void> {
    await this.update('bills', id, data)
  }

  async createBill(data: Partial<IBill>): Promise<IBill> {
    return await this.create('bills', data)
  }

  async deleteBill(id: number): Promise<void> {
    await this.delete('bills', id)
  }
}
