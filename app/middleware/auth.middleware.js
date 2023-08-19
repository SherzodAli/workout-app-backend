import jwt from 'jsonwebtoken'

import { ACCESS_TOKEN } from '@config/constants.js'

import { prisma } from '@libraries/prisma'

import { userFields } from '@modules/user/domain/user.types.js'

async function checkToken(req, res, next) {
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

	const user = await prisma.user.findUnique({
		where: { id: payload?.userId },
		select: userFields
	})

	if (!user) {
		return res.status(401).json({ message: 'Not authorized, invalid token' })
	}

	req.user = user
	next()
}

function getTokenOrNull(req) {
	const token = req.headers.authorization?.split(' ')?.at(1)
	return token ? token : null
}

function getPayloadOrNull(token) {
	try {
		return jwt.verify(token, ACCESS_TOKEN)
	} catch (e) {
		return null
	}
}

export { checkToken }
