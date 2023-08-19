import { Router } from '@libraries/router'

import { authUser, registerUser } from './auth.controller'

const authRouter = Router()

authRouter.post('/login', authUser)
authRouter.post('/register', registerUser)

export { authRouter }
