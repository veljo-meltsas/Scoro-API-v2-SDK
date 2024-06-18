import { APIClient } from '@/resources/base'
import { IComment } from './types/comment.type'

export class CommentService extends APIClient {
  async getComments(
    request: Partial<IComment> = {},
    filters: Record<string, any> = {},
    perPage = 50,
    page = 1
  ): Promise<IComment[]> {
    return await this.list<IComment>(
      'comments',
      filters,
      request,
      perPage,
      page
    )
  }

  async modifyComment(
    id: number,
    request: Partial<IComment>
  ): Promise<IComment> {
    return await this.update<IComment>('comments', id, request)
  }

  async deleteComment(id: number): Promise<void> {
    return await this.delete('comments', id)
  }
}
