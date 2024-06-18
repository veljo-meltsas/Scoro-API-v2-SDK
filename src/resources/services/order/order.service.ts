import { APIClient } from '@/resources/base'
import { IDocPdf } from '@/resources/services/shared/types/doc-pdf.type'
import { IOrder } from './types/order.type'

export class OrdersService extends APIClient {
  async getOrder(id: number): Promise<IOrder> {
    return await this.view<IOrder>('orders', id)
  }

  async getOrders(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IOrder[]> {
    return await this.list<IOrder>('orders', query, {}, perPage, page)
  }

  async updateOrder(id: number, data: Record<string, unknown>): Promise<void> {
    await this.update('orders', id, data)
  }

  async createOrder(data: Partial<IOrder>): Promise<IOrder> {
    return await this.create('orders', data)
  }

  async deleteOrder(id: number): Promise<void> {
    await this.delete('orders', id)
  }

  async getPdf(id: number): Promise<IDocPdf> {
    return await this.customCallWithouBodyAndId<IDocPdf>('orders', 'pdf', id)
  }
}
