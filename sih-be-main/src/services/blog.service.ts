import BlogModel, { IBlog, IReply } from '@models/blog.model'

/**
 * Get all blogs.
 *
 * @returns
 */
async function getAll(): Promise<IBlog[]> {
  return await BlogModel.find()
    .populate('createdBy replies.repliedBy', '_id firstName lastName image')
    .sort({ createdTimestamp: -1 })
}

/**
 * Get user blogs.
 *
 * @param uid
 * @returns
 */
async function getUserBlogs(uid: string): Promise<IBlog[]> {
  return await BlogModel.find({ createdBy: uid })
    .populate('createdBy replies.repliedBy', '_id firstName lastName image')
    .sort({ createdTimestamp: -1 })
}

/**
 * Create a Post.
 *
 * @param blog
 * @returns
 */
async function createPost(blog: IBlog): Promise<IBlog> {
  return await BlogModel.create(blog)
}

/**
 * Create a Reply.
 *
 * @param bid
 * @param reply
 * @returns
 */
async function createReply(bid: string, reply: IReply): Promise<void> {
  const blog = await BlogModel.findOne({ _id: bid })
  if (!blog) throw Error('Blog Not Found')

  reply.repliedTimeStamp = new Date().toISOString()
  blog?.replies?.push(reply)

  await BlogModel.updateOne({ _id: bid }, blog, { new: true })
}

/**
 * Update one post.
 *
 * @param bid
 * @param blog
 * @returns
 */
async function updatePost(bid: string, blog: IBlog): Promise<any> {
  return await BlogModel.updateOne({ _id: bid }, blog, { new: true })
}

/**
 * Update one reply.
 *
 * @param bid
 * @param rid
 * @param newReply
 * @returns
 */
async function updateReply(
  bid: string,
  rid: string,
  newReply: IReply
): Promise<any> {
  const blog = await BlogModel.findOne({ _id: bid })
  if (!blog) return
  blog.replies = blog.replies?.map((r) => (r._id === rid ? newReply : r))
  return await BlogModel.updateOne({ _id: bid }, blog, { new: true })
}

/**
 * Delete one post.
 *
 * @param bid
 * @returns
 */
async function deletePost(bid: string): Promise<any> {
  return await BlogModel.deleteOne({ _id: bid })
}

/**
 * Delete one reply.
 *
 * @param bid
 * @param rid
 * @returns
 */
async function deleteReply(bid: string, rid: string): Promise<any> {
  const blog = await BlogModel.findOne({ _id: bid })
  if (!blog) return
  blog.replies = blog.replies?.filter((r) => r._id !== rid)
  return await BlogModel.updateOne({ _id: bid }, blog, { new: true })
}

// Export default
export default {
  getAll,
  getUserBlogs,
  createPost,
  createReply,
  updatePost,
  updateReply,
  deletePost,
  deleteReply,
} as const
