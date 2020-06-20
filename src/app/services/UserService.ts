import { Response } from 'express'

import User from '@models/User'
import IntegrationException from '@exceptions/IntegrationException'

export default {
  show (userId: number): Response {
    const user = User.list()[userId]

    if (!user) {
      throw new IntegrationException(400, 'No one user are found.')
    }

    return user
  }
}
