import { Router } from 'express'
import { RemindersController } from '../controllers/RemindersController'

const router = Router()

router
  .route('/')
  .get(RemindersController.index)
  .post(RemindersController.create)
  .delete(RemindersController.destroy)

router
  .route('/:id')
  .get(RemindersController.show)
  .put(RemindersController.update)
  .delete(RemindersController.destroy)

export default router
