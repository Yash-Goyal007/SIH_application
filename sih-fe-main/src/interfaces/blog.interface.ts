import { IUser } from "./user.interface"

export interface IBlog {
  _id: string
  title: string
  description: string
  createdTimestamp: string
  createdBy: IUser
  replies: Array<IReply>
  showName: boolean
  image: string
}

export interface IReply {
  _id: string
  description: string
  repliedBy: IUser
  repliedTimeStamp: string
}
