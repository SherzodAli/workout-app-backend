import { NextFunction, Response } from 'express'

import { Request } from '@libraries/router'

import { getPayloadOrNull } from '@apps/auth/domain/token'
import { getUserById } from '@apps/user/data-access/user.db'

async function checkToken(req: Request, res: Response, next: NextFunction) {
	const token = getTokenOrNull(req)

	if (!token) {
		return res
			.status(401)
			.json({ message: 'Not authorized, no token provided' })
	}

	const payload = getPayloadOrNull(token)

	if (!payload) {
		return res
			.status(401)
			.json({ message: 'Not authorized, can’t decode the token' })
	}

	const user = await getUserById(payload?.userId)

	if (!user) {
		return res.status(401).json({ message: 'Not authorized, invalid token' })
	}

	req.user = user
	next()
}

function getTokenOrNull(req: Request): string | null {
	const token = req.headers.authorization?.split(' ')?.at(1)
	return token ? token : null
}

export { checkToken }
