import { IBlog } from '../interfaces/blog.interface'
import axios from './Instance'

const getAll: () => Promise<IBlog[]> = async () => {
  return (await axios.get('/blogs/all')).data
}

const getUserBlogs: (uid: string) => Promise<IBlog[]> = async (uid) => {
  return (await axios.get(`/blogs/${uid}`)).data
}

const createPost = async (
  title: string,
  description: string,
  uid: string,
  showName: boolean
) => {
  return await axios.post('/blogs/post', {
    title,
    description,
    createdBy: uid,
    replies: [],
    showName,
  })
}

const createReply = async (reply: string, bid: string, uid: string) => {
  return await axios.put(`/blogs/reply?bid=${bid}`, {
    description: reply,
    repliedBy: uid,
  })
}

const blogService = {
  getAll,
  getUserBlogs,
  createPost,
  createReply,
}

export default blogService
