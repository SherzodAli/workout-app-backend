import { Response } from 'express'

import { Request } from '@libraries/router'

import {
	deleteUserList,
	getUserById,
	getUserList
} from '@modules/user/data-access/user.db'

async function getAllUsers(req: Request, res: Response) {
	const users = await getUserList()
	res.json(users)
}

async function getUserProfile(req: Request, res: Response) {
	const user = await getUserById(req.user.id)
	res.json(user)
}

async function deleteUsers(req: Request, res: Response) {
	await deleteUserList()
	res.json({ message: 'Users were deleted successfully! ✅' })
}

export { getAllUsers, getUserProfile, deleteUsers }
