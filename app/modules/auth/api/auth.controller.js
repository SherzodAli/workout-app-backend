import { faker } from '@faker-js/faker'

import {
	doesPasswordMatch,
	getHashedPassword
} from '@modules/auth/domain/password.js'
import { generateToken } from '@modules/auth/domain/token.js'
import {
	createAndGetUser,
	getFullUserByEmail,
	getUserByEmail
} from '@modules/user/data-access/user.db.js'

/**
 * @description Auth user
 * @route POST /api/auth/login
 * @access Public
 */
async function authUser(req, res) {
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
async function registerUser(req, res) {
	const { email, password } = req.body

	const user = await getUserByEmail(email)

	if (user) {
		return res.status(400).json({ message: 'User already exists' })
	}

	const newUser = await createAndGetUser({
		email,
		password: await getHashedPassword(password),
		name: faker.person.fullName()
	})

	const token = generateToken(newUser.id)

	res.json({ newUser, token })
}

export { authUser, registerUser }
