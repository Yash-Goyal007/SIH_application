import { model, Schema, Document } from 'mongoose'

export interface IBlog {
  _id: string
  title: string
  description: string
  createdTimestamp: string
  createdBy: string
  replies: Array<IReply>
  showName: boolean
  image: string
}

export interface IReply {
  _id: string
  description: string
  repliedBy: string
  repliedTimeStamp: string
}

const Replies = new Schema({
  description: { type: String, required: true },
  repliedBy: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  repliedTimeStamp: { type: String, required: true },
})

const Blogs = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdTimestamp: { type: String, required: true },
  createdBy: {
    required: true,
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  replies: [Replies],
  showName: Boolean,
  image: String,
})

const BlogModel = model<IBlog & Document>('Blog', Blogs)

export default BlogModel
