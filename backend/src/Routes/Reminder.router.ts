import { Router } from 'express'

const router = Router()

router
  .route('/')
  .get((req, res) => {
    res.send('you can see all reminders')
  })
  .post((req, res) => {
    console.log('you posted to reminders table')
    res.end()
  })
  .delete((req, res) => {
    console.log('you deleted your a reminder')
    res.end()
  })

router
  .route('/:id')
  .get((req, res) => {
    res.send('you can see one reminder')
  })
  .put((req, res) => {
    console.log('you updated this reminder')
    res.end()
  })
  .delete((req, res) => {
    console.log('you deleted your a reminder')
    res.end()
  })

export default router
