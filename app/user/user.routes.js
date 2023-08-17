import { SafeRouter } from '../router/router.js'

import { deleteUsers, getAllUsers, getUserProfile } from './user.controller.js'

const userRouter = SafeRouter()

userRouter.get('/', getAllUsers)
userRouter.get('/profile', getUserProfile)
userRouter.delete('/', deleteUsers)

export { userRouter }
