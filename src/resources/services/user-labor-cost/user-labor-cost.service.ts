import { APIClient } from '../../base'
import { IUserLaborCost } from './types/user-labor-cost.service.type'

export class UserLaborCostService extends APIClient {
  async modifyUserLaborCost(
    id: number,
    userLaborCost: Partial<IUserLaborCost>
  ): Promise<IUserLaborCost> {
    return await this.update<IUserLaborCost>(
      'usersLaborCost',
      id,
      userLaborCost
    )
  }

  async getUserLaborCosts(
    query: Record<string, unknown> = {},
    perPage = 50,
    page = 1
  ): Promise<IUserLaborCost[]> {
    return await this.list<IUserLaborCost>(
      'usersLaborCost',
      query,
      {},
      perPage,
      page
    )
  }

  async getUserLaborCostById(userLaborCostId: number): Promise<IUserLaborCost> {
    return await this.view<IUserLaborCost>('usersLaborCost', userLaborCostId)
  }
}
