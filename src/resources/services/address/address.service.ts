import { APIClient } from '../../base'
import type { IAddress } from './types/address.type'

export class AddressService extends APIClient {
  async getAddresss(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IAddress[]> {
    return await this.list<IAddress>('addresses', query, {}, perPage, page)
  }

  async findAllAddressBy(filters: Record<string, any>): Promise<IAddress[]> {
    return await this.list<IAddress>('addresses', filters)
  }
}
