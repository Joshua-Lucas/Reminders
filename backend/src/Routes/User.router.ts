import { Router } from 'express'
import { UsersController } from '../controllers/UsersController'

const router = Router()

router
  .route('/')
  .get(UsersController.index)
  .post(UsersController.create)
  .put(UsersController.update)
  .delete((req, res) => {
    console.log('you deleted your account')
    res.end()
  })

export default router
