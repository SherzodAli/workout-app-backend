import { Response } from 'express'

import { Request } from '@libraries/router'

import {
	doesPasswordMatch,
	getHashedPassword
} from '@modules/auth/domain/password'
import { generateToken } from '@modules/auth/domain/token'
import {
	createAndGetUser,
	getFullUserByEmail,
	getUserByEmail
} from '@modules/user/data-access/user.db'
import { getFakeFullName } from '@modules/user/data-access/user.mock'

/**
 * @description Auth user
 * @route POST /api/auth/login
 * @access Public
 */
async function authUser(req: Request, res: Response) {
	const { email, password } = req.body
	const user = await getFullUserByEmail(email)
	const isValidPassword = await doesPasswordMatch(user?.password, password)

	if (!user || !isValidPassword) {
		return res.status(400).json({ message: 'Email or password is incorrect' })
	}

	res.json({ user, token: generateToken(user.id) })
}

/**
 * @description Register user
 * @route POST /api/auth/register
 * @access Public
 */
async function registerUser(req: Request, res: Response) {
	const { email, password } = req.body
	const user = await getUserByEmail(email)

	if (user) {
		return res.status(400).json({ message: 'User already exists' })
	}

	const newUser = await createAndGetUser({
		email,
		password: await getHashedPassword(password),
		name: getFakeFullName()
	})

	const token = generateToken(newUser.id)

	res.json({ newUser, token })
}

export { authUser, registerUser }
