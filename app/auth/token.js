import jwt from 'jsonwebtoken'

import { ACCESS_TOKEN, TOKEN_EXPIRES_IN } from '../config.js'

function generateToken(userId) {
	return jwt.sign({ userId }, ACCESS_TOKEN, { expiresIn: TOKEN_EXPIRES_IN })
}

export { generateToken }
