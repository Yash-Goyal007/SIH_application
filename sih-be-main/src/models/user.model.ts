import { model, Schema, Document } from 'mongoose'

export interface IUser {
  _id: string
  firstName: string
  lastName: string
  email: string
  pwdHash: string
  image?: string
  phone?: string
  dob: string
  institute?: string
  standard: string
  events?: [string]
  profileType: 'Patient' | 'Doctor'
  createdTimeStamp: string
  updatedTimeStamp: string
}

const Users = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pwdHash: {
    type: String,
    required: true,
  },
  image: String,
  phone: String,
  dob: String,
  institute: String,
  standard: String,
  licenseNo: String,
  events: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Event',
    },
  ],
  profileType: {
    type: String,
    required: true,
    enum: ['Patient', 'Doctor'],
  },
  createdTimeStamp: {
    type: String,
    required: true,
  },
  updatedTimeStamp: {
    type: String,
    required: true,
  },
})

const UserModel = model<IUser & Document>('User', Users)

export default UserModel
