import bcrypt from 'bcrypt'
import { SuperTest, Test } from 'supertest'

import UserModel from '@models/user.model'

export const pwdSaltRounds = 12

const creds = {
  email: 'jsmith@gmail.com',
  password: 'Password@1',
} as const

/**
 * Login a user.
 *
 * @param beforeAgent
 * @param done
 */
function login(beforeAgent: SuperTest<Test>, done: (arg: string) => void) {
  // Setup dummy data
  const role = 'Admin'
  const pwdHash = bcrypt.hashSync(creds.password, pwdSaltRounds)
  const loginUser = UserModel.create({
    name: 'john smith',
    email: creds.email,
    role,
    pwdHash,
  })
  Promise.resolve(loginUser)
  // Call Login API
  beforeAgent
    .post('/api/auth/login')
    .type('form')
    .send(creds)
    .end((err: Error, res: any) => {
      if (err) {
        throw err
      }
      done(res.headers['set-cookie'])
    })
}

// Export default
export default {
  login,
} as const
