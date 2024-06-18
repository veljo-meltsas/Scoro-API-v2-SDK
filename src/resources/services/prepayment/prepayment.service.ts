import { APIClient } from '@/resources/base'
import { IDocPdf } from '@/resources/services/shared/types/doc-pdf.type'
import { IPrepayment } from './types/prepayment.type'

export class PrepaymentsService extends APIClient {
  async getPrepayment(id: number): Promise<IPrepayment> {
    return await this.view<IPrepayment>('prepayments', id)
  }

  async getPrepayments(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IPrepayment[]> {
    return await this.list<IPrepayment>('prepayments', query, {}, perPage, page)
  }

  async updatePrepayment(
    id: number,
    data: Record<string, unknown>
  ): Promise<void> {
    await this.update('prepayments', id, data)
  }

  async createPrepayment(data: Partial<IPrepayment>): Promise<IPrepayment> {
    return await this.create('prepayments', data)
  }

  async deletePrepayment(id: number): Promise<void> {
    await this.delete('prepayments', id)
  }

  async getPdf(id: number): Promise<IDocPdf> {
    return await this.customCallWithouBodyAndId<IDocPdf>(
      'prepayments',
      'pdf',
      id
    )
  }
}
