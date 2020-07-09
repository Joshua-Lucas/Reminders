require('dotenv').config()
import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import createError from 'http-errors'

const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

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
