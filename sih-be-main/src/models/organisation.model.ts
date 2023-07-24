import { model, Schema, Document } from 'mongoose'

export interface IOrganisation {
  _id: string
  name: string
  email: string
  pwdHash: string
  image: string
  phone: string
  addressLineOne: string
  addressLineTwo: string
  zipCode: string
  licenseNo: string
  createdTimeStamp: string
  updatedTimeStamp: string
}

const Organisations = new Schema({
  name: {
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
  addressLineOne: String,
  addressLineTwo: String,
  zipCode: String,
  license: String,
  createdTimeStamp: {
    type: String,
    required: true,
  },
  updatedTimeStamp: {
    type: String,
    required: true,
  },
})

const OrganisationModel = model<IOrganisation & Document>(
  'Organisation',
  Organisations
)

export default OrganisationModel
