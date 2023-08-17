import { checkToken } from '../middlewares/auth.middleware.js'

import { SafeRouter } from '../router/router.js'

import { deleteUsers, getAllUsers, getUserProfile } from './user.controller.js'

const userRouter = SafeRouter()

userRouter.get('/', getAllUsers)
userRouter.delete('/', deleteUsers)
userRouter.route('/profile').get(checkToken, getUserProfile)

export { userRouter }
