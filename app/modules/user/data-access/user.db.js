import { prisma } from 'libraries/prisma/prisma.js'

import { userFields } from 'modules/user/domain/user.types.js'

async function getUserList() {
	return await prisma.user.findMany()
}

async function getUserById(id) {
	return await prisma.user.findUnique({
		where: { id },
		select: userFields
	})
}

async function getUserByEmail(email) {
	return await prisma.user.findUnique({
		where: { email },
		select: userFields
	})
}

async function getFullUserByEmail(email) {
	return await prisma.user.findUnique({ where: { email } })
}

async function deleteUserList() {
	await prisma.user.deleteMany()
}

async function createAndGetUser({ email, password, name }) {
	return await prisma.user.create({
		data: { email, password, name },
		select: userFields
	})
}

export {
	getUserList,
	getUserById,
	getUserByEmail,
	getFullUserByEmail,
	createAndGetUser,
	deleteUserList
}
