import { APIClient } from '@/resources/base'
import { IDocPdf } from '@/resources/services/shared/types/doc-pdf.type'
import { IInvoice } from './types/invoice.type'

export class InvoicesService extends APIClient {
  async getInvoice(id: number): Promise<IInvoice> {
    return await this.view<IInvoice>('invoices', id)
  }

  async getInvoices(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IInvoice[]> {
    return await this.list<IInvoice>('invoices', query, {}, perPage, page)
  }

  async updateInvoice(
    id: number,
    data: Record<string, unknown>
  ): Promise<void> {
    await this.update('invoices', id, data)
  }

  async createInvoice(data: Partial<IInvoice>): Promise<IInvoice> {
    return await this.create('invoices', data)
  }

  async deleteInvoice(id: number): Promise<void> {
    await this.delete('invoices', id)
  }

  async getPdf(id: number): Promise<IDocPdf> {
    return await this.customCallWithouBodyAndId<IDocPdf>('invoices', 'pdf', id)
  }
}
