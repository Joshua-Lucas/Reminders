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
  .get((req, res) => {
    res.send('you can see one reminder')
  })
  .put((req, res) => {
    console.log('you updated this reminder')
    res.end()
  })
  .delete(RemindersController.destroy)

export default router
