import { SafeRouter } from '@libraries/router'

import { checkToken } from '@middleware'

import { deleteUsers, getAllUsers, getUserProfile } from './user.controller'

const userRouter = SafeRouter()

userRouter.get('/', getAllUsers)
userRouter.delete('/', deleteUsers)
userRouter.get('/profile', checkToken, getUserProfile)

export { userRouter }
