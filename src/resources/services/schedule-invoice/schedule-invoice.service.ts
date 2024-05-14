import { APIClient } from '../../base'
import { IScheduledInvoice } from './types/schedule-invoice.type'

export class ScheduledInvoiceService extends APIClient {
  async getScheduledInvoice(id: number): Promise<IScheduledInvoice> {
    return await this.view<IScheduledInvoice>('scheduledInvoices', id)
  }

  async getScheduledInvoices(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IScheduledInvoice[]> {
    return await this.list<IScheduledInvoice>(
      'scheduledInvoices',
      query,
      {},
      perPage,
      page
    )
  }

  async updateScheduledInvoice(
    id: number,
    data: Record<string, unknown>
  ): Promise<void> {
    await this.update('scheduledInvoices', id, data)
  }

  async createScheduledInvoice(
    data: Partial<IScheduledInvoice>
  ): Promise<IScheduledInvoice> {
    return await this.create('scheduledInvoices', data)
  }

  async deleteScheduledInvoice(id: number): Promise<void> {
    await this.delete('scheduledInvoices', id)
  }
}
