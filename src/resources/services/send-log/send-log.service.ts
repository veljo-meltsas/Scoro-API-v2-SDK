import { APIClient } from '@/resources/base'
import { ISendLog } from './types/send-log.type'

export class SendLogService extends APIClient {
  async getSendLogs(
    query: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<ISendLog[]> {
    return await this.list<ISendLog>('sendLog', query, {}, perPage, page)
  }
}
