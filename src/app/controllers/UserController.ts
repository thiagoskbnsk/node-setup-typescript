import { Request, Response } from 'express'

import UserService from '@services/UserService'

class UserController {
  show (req: Request, res: Response): Response {
    const { userId } = req.params

    const users = UserService.show(Number(userId))

    return res.json(users)
  }
}

export default new UserController()
