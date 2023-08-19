import { Request as ExpressRequest } from 'express'

import { IUser } from '@modules/user/domain/user.types'

interface Request extends ExpressRequest {
	user: IUser
}

export { Request }
