import { Router } from 'express'

const router = Router()

router
  .route('/')
  .get((req, res) => {
    res.send('you can see your account')
  })
  .post((req, res) => {
    console.log('you created a new user')
    res.end()
  })
  .put((req, res) => {
    console.log('you updated your information')
    res.end()
  })
  .delete((req, res) => {
    console.log('you deleted your account')
    res.end()
  })

export default router
