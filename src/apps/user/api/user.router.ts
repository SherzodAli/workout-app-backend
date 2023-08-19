import { ProtectedRouter } from '@libraries/router'

import { deleteUsers, getAllUsers, getUserProfile } from './user.controller'

const userRouter = ProtectedRouter()

userRouter.get('/', getAllUsers)
userRouter.delete('/', deleteUsers)
userRouter.get('/profile', getUserProfile)

export { userRouter }
