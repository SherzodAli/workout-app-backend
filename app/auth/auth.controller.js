import { faker } from '@faker-js/faker'
import { hash, verify } from 'argon2'

import { prisma } from '../prisma.js'
import { userFields } from '../utils/user.utils.js'

import { generateToken } from './token.js'

/**
 * @description Auth user
 * @route POST /api/auth/login
 * @access Public
 */
async function authUser(req, res) {
	const { email, password } = req.body

	const user = await prisma.user.findUnique({ where: { email } })
	const isValidPassword = await verify(user?.password, password)

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

	const user = await prisma.user.findUnique({ where: { email } })

	if (user) {
		return res.status(400).json({ message: 'User already exists' })
	}

	const userData = {
		email,
		password: await hash(password),
		name: faker.person.fullName()
	}

	const newUser = await prisma.user.create({
		data: userData,
		select: userFields
	})
	const token = generateToken(newUser.id)

	res.json({ newUser, token })
}

export { authUser, registerUser }
