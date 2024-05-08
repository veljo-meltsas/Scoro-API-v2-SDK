import { APIClient } from '../../base'
import type { INotification } from './types/notification.type'

export class NotificationService extends APIClient {
  async getNotifications(
    query: Record<string, unknown> = {},
    perPage = 50,
    page = 1
  ): Promise<INotification[]> {
    return await this.list<INotification>(
      'notifications',
      query,
      {},
      perPage,
      page
    )
  }

  async createNotification(
    data: Partial<INotification>
  ): Promise<INotification> {
    return await this.create<INotification>('notifications', data)
  }

  async updateNotification(
    id: number,
    data: Partial<INotification>
  ): Promise<INotification> {
    return await this.update<INotification>('notifications', id, data)
  }

  async deleteNotification(id: number): Promise<void> {
    await this.delete('notifications', id)
  }
}
