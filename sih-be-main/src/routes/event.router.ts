import StatusCodes from 'http-status-codes'
import { Request, Response, Router } from 'express'

import { ParamMissingError } from '@shared/errors'
import eventService from '@services/event.service'

// Constants
const router = Router()
const { CREATED, OK } = StatusCodes

// Paths
export const p = {
  get_user: '/:uid',
  post: '/post',
  delete: '/delete/:id',
} as const

/**
 * Get user events.
 */
router.get(p.get_user, async (req: Request, res: Response) => {
  const profileType = req.query.profileType
  if (profileType !== 'Patient' && profileType !== 'Doctor')
    throw new ParamMissingError()

  const events = await eventService.getUserEvents(
    req.params.uid,
    profileType as string
  )
  return res.status(OK).json(events)
})

/**
 * Create a Event
 */
router.post(p.post, async (req: Request, res: Response) => {
  const eventData = req.body
  const dateNow = new Date()
  eventData.createdTimestamp = dateNow.toISOString()
  const event = await eventService.createEvent(eventData)
  return res.status(CREATED).json(event)
})

/**
 * Delete one event.
 */
router.delete(p.delete, async (req: Request, res: Response) => {
  await eventService.deleteEvent(req.query.eid as string)
  return res.status(OK).end()
})

// Export default
export default router
