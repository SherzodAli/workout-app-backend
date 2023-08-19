import { SafeRouter } from '@libraries/router'

import { authUser, registerUser } from './auth.controller.js'

const authRouter = SafeRouter()

authRouter.post('/login', authUser)
authRouter.post('/register', registerUser)

export { authRouter }
