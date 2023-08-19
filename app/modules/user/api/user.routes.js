import { SafeRouter } from 'libraries/router/router.js'

import { checkToken } from 'middleware/auth.middleware.js'

import { deleteUsers, getAllUsers, getUserProfile } from './user.controller.js'

const userRouter = SafeRouter()

userRouter.get('/', getAllUsers)
userRouter.delete('/', deleteUsers)
userRouter.get('/profile', checkToken, getUserProfile)

export { userRouter }
