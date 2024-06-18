import { APIClient } from '@/resources/base'
import { IContactRelatedObjects } from './types/contact-related-object.type'
import { IContact } from './types/contact.type'

export class ContactService extends APIClient {
  async getContacts(
    filters: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IContact[]> {
    return await this.list<IContact>('contacts', filters, {}, perPage, page)
  }

  async viewContact(id: number): Promise<IContact> {
    return await this.view<IContact>('contacts', id)
  }

  async createContact(contact: IContact): Promise<IContact> {
    return await this.create<IContact>('contacts', contact)
  }

  async updateContact(id: number, contact: IContact): Promise<IContact> {
    return await this.update<IContact>('contacts', id, contact)
  }

  async deleteContact(id: number): Promise<void> {
    return await this.delete('contacts', id)
  }

  async getRelatedObjects(id: number): Promise<IContactRelatedObjects> {
    return await this.customCallWithouBodyAndId<IContactRelatedObjects>(
      'contacts',
      'getRelatedObjects',
      id
    )
  }

  async findAllContactsBy(filters: Record<string, any>): Promise<IContact[]> {
    return await this.list<IContact>('contacts', filters)
  }
}
