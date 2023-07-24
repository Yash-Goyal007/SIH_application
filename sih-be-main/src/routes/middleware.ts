import StatusCodes from 'http-status-codes'
import { Request, Response, NextFunction } from 'express'

import { cookieProps } from '@routes/auth.router'
import jwtUtil from '@util/jwt-util'
import { JwtPayload, verify } from 'jsonwebtoken'
import UserModel from '@models/user.model'

// Constants
const { UNAUTHORIZED } = StatusCodes
const jwtNotPresentErr = 'JWT not present in signed cookie.'

/**
 * Middleware to verify if user is an admin.
 *
 * @param req
 * @param res
 * @param next
 * @returns
 */
export async function adminMw(req: Request, res: Response, next: NextFunction) {
  try {
    // Get json-web-token
    const jwt = req.signedCookies[cookieProps.key]
    if (!jwt) {
      throw Error(jwtNotPresentErr)
    }
    // Make sure user role is an admin
    const clientData = await jwtUtil.decode(jwt)
    if (typeof clientData === 'object' && clientData.role === 'Admin') {
      res.locals.sessionUser = clientData
      next()
    } else {
      throw Error(jwtNotPresentErr)
    }
  } catch (err) {
    return res.status(UNAUTHORIZED).json({
      error: err.message,
    })
  }
}

export const verifyMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const Authorization = req.header('Authorization')?.split('Bearer ')[1]

    if (Authorization) {
      const secretKey: string = 'sihkechode'
      const verificationResponse = verify(
        Authorization,
        secretKey
      ) as JwtPayload
      const findUser = await UserModel.findOne({
        userId: verificationResponse.userId,
      })

      if (findUser) {
        return next()
      }
    }
    throw Error(jwtNotPresentErr)
  } catch (error) {
    return res.status(UNAUTHORIZED).json({
      error: error.message,
    })
  }
}
