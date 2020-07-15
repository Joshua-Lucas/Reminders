import { Router } from 'express'
import { UsersController } from '../controllers/UsersController'

const router = Router()

router
  .route('/')
  .get(UsersController.index)
  .post(UsersController.create)
  .put((req, res) => {
    console.log('you updated your information')
    res.end()
  })
  .delete((req, res) => {
    console.log('you deleted your account')
    res.end()
  })

export default router
