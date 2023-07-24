import { IUser } from './user.interface'

export interface IEvent {
  _id: string
  type: string
  guest: IUser
  organiser: IUser
  startTimestamp: string
  duration: string
  createdTimestamp: string
}
