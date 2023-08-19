import { Request as ExpressRequest } from 'express'

import { IUser } from '@apps/user/domain/user.types'

interface Request extends ExpressRequest {
	user: IUser
}

export { Request }
