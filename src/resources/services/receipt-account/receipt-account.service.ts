import { APIClient } from '@/resources/base'
import { IReceiptAccount } from './types/receipt-account.type'

export class ReceiptAccountsService extends APIClient {
  async getReceiptAccounts(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IReceiptAccount[]> {
    return await this.list<IReceiptAccount>(
      'receiptAccounts',
      query,
      {},
      perPage,
      page
    )
  }
}
