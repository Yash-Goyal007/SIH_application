import { model, Schema, Document } from 'mongoose'

export interface IEvent {
  _id: string
  type: string
  guest: string
  organiser: string
  startTimestamp: string
  duration: string
  createdTimestamp: string
}

const Events = new Schema({
  type: {
    type: String,
    required: true,
    enum: ['Open Webinar', 'Closed Seminar', 'Counselling'],
    default: 'Counselling',
  },
  guest: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  organiser: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  startTimestamp: { type: String, required: true },
  duration: { type: String, required: true },
  createdTimestamp: { type: String, required: true },
})

const EventModel = model<IEvent & Document>('Event', Events)

export default EventModel
