import { Response } from 'express'

import User from '@models/User'
import IntegrationException from '@exceptions/IntegrationException'

import { IMock } from '@interfaces/UserMock'

class UserService {
  show (userId: number): IMock {
    const user = User.list()[userId]

    if (!user) {
      throw new IntegrationException(400, 'No one user are found.')
    }

    return user
  }
}

export default new UserService()
