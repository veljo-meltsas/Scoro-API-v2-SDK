import { APIClient } from '../../base'
import { IPDFTemplate } from './types/pdf-template.type'

export class PDFTemplateService extends APIClient {
  async getPDFTemplates(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IPDFTemplate[]> {
    return await this.list<IPDFTemplate>(
      'pdfTemplates',
      query,
      {},
      perPage,
      page
    )
  }
}
