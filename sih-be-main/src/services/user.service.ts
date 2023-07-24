import UserModel, { IUser } from '@models/user.model'
import { UserNotFoundError } from '@shared/errors'

/**
 * Get all users.
 *
 * @returns
 */
async function getAll(): Promise<IUser[]> {
  return await UserModel.find()
}

/**
 * Update one user.
 *
 * @param user
 * @returns
 */
async function updateOne(user: IUser): Promise<any> {
  const persists = await UserModel.findOne({ _id: user._id })
  if (!persists) {
    throw new UserNotFoundError()
  }
  return await UserModel.updateOne({ _id: user._id }, user, { new: true })
}

/**
 * Delete a user by their id.
 *
 * @param _id
 * @returns
 */
async function deleteOne(_id: string): Promise<void> {
  const persists = await UserModel.findOne({ _id })
  if (!persists) {
    throw new UserNotFoundError()
  }
  await UserModel.deleteOne({ _id })
  return
}

// Export default
export default {
  getAll,
  updateOne,
  delete: deleteOne,
} as const
