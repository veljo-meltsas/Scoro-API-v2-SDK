import { APIClient } from '../../base'
import type { IProduct } from './types/product.type'

export class ProductService extends APIClient {
  async getProducts(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IProduct[]> {
    return await this.list<IProduct>('products', query, {}, perPage, page)
  }

  async getProduct(id: number): Promise<IProduct> {
    return await this.view<IProduct>('products', id)
  }

  async createProduct(data: Partial<IProduct>): Promise<IProduct> {
    return await this.create<IProduct>('products', data)
  }

  async updateProduct(id: number, data: Partial<IProduct>): Promise<IProduct> {
    return await this.update<IProduct>('products', id, data)
  }

  async deleteProduct(id: number): Promise<void> {
    await this.delete('products', id)
  }
}
