import { APIClient } from '../../base'
import { IVatCode } from './types/vat-code.type'

export class VatCodeService extends APIClient {
  async getVatCodes(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IVatCode[]> {
    return await this.list<IVatCode>('vatCodes', query, {}, perPage, page)
  }

  async getVatCode(id: number): Promise<IVatCode> {
    return await this.view<IVatCode>('vatCodes', id)
  }

  async createVatCode(data: IVatCode): Promise<IVatCode> {
    return await this.create<IVatCode>('vatCodes', data)
  }

  async updateVatCode(id: number, data: IVatCode): Promise<IVatCode> {
    return await this.update<IVatCode>('vatCodes', id, data)
  }

  async deleteVatCode(id: number): Promise<void> {
    await this.delete('vatCodes', id)
  }
}
