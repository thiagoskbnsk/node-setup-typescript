import { Router } from 'express'

// controllers
import UserController from '@controllers/UserController'

// validators
import UserValidator from '@validators/UserValidator'

// middlewares
import ExampleMiddleware from '@middlewares/ExampleMiddleware'

const routes = Router()

routes.use('*', ExampleMiddleware)

routes.get('/:userId', UserValidator.show, UserController.show)

export default routes
