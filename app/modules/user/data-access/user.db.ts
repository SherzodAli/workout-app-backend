import { prisma } from '@libraries/prisma'

import { ICreateUser, IUser, userFields } from '@modules/user/domain/user.types'

async function getUserList(): Promise<IUser[]> {
	return await prisma.user.findMany()
}

async function getUserById(id: number): Promise<IUser> {
	return await prisma.user.findUnique({
		where: { id },
		select: userFields
	})
}

async function getUserByEmail(email: string): Promise<IUser> {
	return await prisma.user.findUnique({
		where: { email },
		select: userFields
	})
}

async function getFullUserByEmail(email: string): Promise<IUser> {
	return await prisma.user.findUnique({ where: { email } })
}

async function deleteUserList(): Promise<void> {
	await prisma.user.deleteMany()
}

async function createAndGetUser({
	email,
	password,
	name
}: ICreateUser): Promise<IUser> {
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
