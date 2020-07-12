import dotenv from 'dotenv'
import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import createError from 'http-errors'
import reminderRouter from './routes/Reminder.router'
import userRouter from './routes/User.router'

dotenv.config()
const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// routes
app.use('/api/reminders', reminderRouter)
app.use('/api/user', userRouter)

export const startServer = () => {
  try {
    app.listen(process.env.SERVER_PORT, () => {
      console.log(
        `Now listening on http://localhost:${process.env.SERVER_PORT}/`
      )
    })
  } catch (e) {
    console.error(e)
  }
}
