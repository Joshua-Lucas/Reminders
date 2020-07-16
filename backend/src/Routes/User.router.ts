import { Router } from 'express'
import { UsersController } from '../controllers/UsersController'

const router = Router()

router
  .route('/')
  .get(UsersController.index)
  .post(UsersController.create)
  .put(UsersController.update)
  .delete(UsersController.destroy)

export default router
