import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'
import StatusCodes from 'http-status-codes'
import express, { NextFunction, Request, Response } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import 'express-async-errors'

import BaseRouter from './routes/api'
import logger from 'jet-logger'
import { cookieProps } from '@routes/auth.router'
import { CustomError } from '@shared/errors'

const app = express()

/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser(cookieProps.secret))
app.use(cors())

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

// Security
if (process.env.NODE_ENV === 'production') {
  app.use(helmet())
}

// Add APIs
app.use('/api', BaseRouter)

// Error handling
app.use(
  (err: Error | CustomError, _: Request, res: Response, __: NextFunction) => {
    logger.err(err, true)
    const status =
      err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST
    return res.status(status).json({
      error: err.message,
    })
  }
)

/************************************************************************************
 *                              Mongo DB Config
 ***********************************************************************************/

const url =
  `mongodb+srv://virendra:kWhOmK6SbtQ4cNEp@cluster0.1dojkyf.mongodb.net/${process.env.DB_NAME}`
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: true,
  writeConcern: {
    w: 'majority',
  },
}

mongoose.connect(url, options).then(() => console.log('Connected to Mongo DB'))

/************************************************************************************
 *                              Export Server
 ***********************************************************************************/

export default app
