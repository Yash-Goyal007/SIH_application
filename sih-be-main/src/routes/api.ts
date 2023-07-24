import { Router } from 'express'
import { verifyMiddleware } from './middleware'
import authRouter from './auth.router'
import userRouter from './user.router'
import blogRouter from './blog.router'
import eventRouter from './event.router'

// Init
const apiRouter = Router()

// Add api routes
apiRouter.use('/auth', authRouter)
apiRouter.use('/users', verifyMiddleware, userRouter)
apiRouter.use('/blogs', blogRouter)
apiRouter.use('/events', eventRouter)

// Export default
export default apiRouter
