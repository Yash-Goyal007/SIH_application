import StatusCodes from 'http-status-codes'
import { Request, Response, Router } from 'express'

import blogService from '@services/blog.service'
import { ParamMissingError } from '@shared/errors'

// Constants
const router = Router()
const { CREATED, OK } = StatusCodes

// Paths
export const p = {
  get: '/all',
  get_user: '/:uid',
  post: '/post',
  reply: '/reply',
  edit_post: '/post/edit',
  edit_reply: '/reply/edit',
  delete_post: '/post/delete/:id',
  delete_reply: '/reply/delete/:id',
} as const

/**
 * Get all blogs.
 */
router.get(p.get, async (_: Request, res: Response) => {
  const blogs = await blogService.getAll()
  return res.status(OK).json(blogs)
})

/**
 * Get user blogs.
 */
router.get(p.get_user, async (req: Request, res: Response) => {
  const blogs = await blogService.getUserBlogs(req.params.uid)
  return res.status(OK).json(blogs)
})

/**
 * Create a Post
 */
router.post(p.post, async (req: Request, res: Response) => {
  const blogData = req.body
  const dateNow = new Date()
  blogData.createdTimestamp = dateNow.toISOString()
  console.log(blogData)
  const blog = await blogService.createPost(blogData)
  return res.status(CREATED).json(blog)
})

/**
 * Create a Reply
 */
router.put(p.reply, async (req: Request, res: Response) => {
  const blog = await blogService.createReply(req.query.bid as string, req.body)
  return res.status(OK).json(blog)
})

/**
 * Update one blog.
 */
router.put(p.edit_post, async (req: Request, res: Response) => {
  await blogService.updatePost(req.query.bid as string, req.body)
  return res.status(OK).end()
})

/**
 * Update one reply.
 */
router.put(p.edit_reply, async (req: Request, res: Response) => {
  await blogService.updateReply(
    req.query.bid as string,
    req.query.rid as string,
    req.body
  )
  return res.status(OK).end()
})

/**
 * Delete one blog.
 */
router.delete(p.delete_post, async (req: Request, res: Response) => {
  await blogService.deletePost(req.query.bid as string)
  return res.status(OK).end()
})

/**
 * Delete one reply.
 */
router.delete(p.delete_reply, async (req: Request, res: Response) => {
  await blogService.deleteReply(
    req.query.bid as string,
    req.query.rid as string
  )
  return res.status(OK).end()
})

// Export default
export default router
