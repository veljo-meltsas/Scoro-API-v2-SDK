import { APIClient } from '../../base'
import { IWebhook } from './types/webhook.type'

export class WebhookService extends APIClient {
  async subscribeToWebhook(webhook: Partial<IWebhook>): Promise<IWebhook> {
    return await this.customCallWithBody<IWebhook>(
      'webhooks',
      'subscribe',
      webhook
    )
  }

  async unsubscribeFromWebhook(webhookId: number): Promise<void> {
    await this.customCallWithouBodyAndId('webhooks', 'unsubscribe', webhookId)
  }

  async getWebhooks(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IWebhook[]> {
    return await this.list<IWebhook>('webhooks', query, {}, perPage, page)
  }
}
