import UserService from '@services/UserService'

export default {
  show (req, res) {
    const { userId } = req.params

    const users = UserService.show(userId)

    return res.json(users)
  }
}
