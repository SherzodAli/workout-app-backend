import jwt from 'jsonwebtoken'

import { ACCESS_TOKEN, TOKEN_EXPIRES_IN } from '@config/constants'

function generateToken(userId: Number): string {
	return jwt.sign({ userId }, ACCESS_TOKEN, { expiresIn: TOKEN_EXPIRES_IN })
}

function getPayloadOrNull(token: string): IPayload | null {
	try {
		return jwt.verify(token, ACCESS_TOKEN)
	} catch (e) {
		return null
	}
}

interface IPayload {
	userId: number
}

export { generateToken, getPayloadOrNull }
