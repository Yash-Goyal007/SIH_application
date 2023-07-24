import EventModel, { IEvent } from '@models/event.model'

/**
 * Get user events.
 *
 * @param uid
 * @returns
 */
async function getUserEvents(
  uid: string,
  profileType: string
): Promise<IEvent[]> {
  return profileType === 'Patient'
    ? await EventModel.find({ organiser: uid }).populate(
        'guest organiser',
        '_id firstName lastName image'
      )
    : await EventModel.find({ guest: uid }).populate(
        'guest organiser',
        '_id firstName lastName image'
      )
}

/**
 * Create a event
 *
 * @param event
 * @returns
 */
async function createEvent(event: IEvent): Promise<IEvent> {
  return await EventModel.create(event)
}

/**
 * Delete one event.
 *
 * @param eid
 * @returns
 */
async function deleteEvent(eid: string): Promise<any> {
  return await EventModel.deleteOne({ _id: eid })
}

// Export default
export default {
  getUserEvents,
  createEvent,
  deleteEvent,
} as const
