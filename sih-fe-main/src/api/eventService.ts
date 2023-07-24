import { IEvent } from '../interfaces/event.interface'
import axios from './Instance'

const getUserEvents: (
  uid: string,
  profileType: string
) => Promise<IEvent[]> = async (uid, profileType) => {
  return (await axios.get(`/events/${uid}?profileType=${profileType}`)).data
}

const createEvent = async (
  guest: string,
  organiser: string,
  startTimestamp: string,
  duration: string
) => {
  return await axios.post('/events/post', {
    guest,
    organiser,
    startTimestamp,
    duration,
  })
}

const eventService = {
  getUserEvents,
  createEvent,
}

export default eventService
