import { Response } from 'express'

import { Request } from '@libraries/router'

import {
	deleteUserList,
	getUserById,
	getUserList
} from '@apps/user/data-access/user.db'

/**
 * @description Get all users
 * @route GET /api/users
 * @access Public
 */
async function getAllUsers(req: Request, res: Response) {
	const users = await getUserList()
	res.json(users)
}

/**
 * @description Get user's profile
 * @route GET /api/users/profile
 * @access Private
 */
async function getUserProfile(req: Request, res: Response) {
	const user = await getUserById(req.user.id)
	res.json(user)
}

/**
 * @description Delete all users
 * @route DELETE /api/users
 * @access Public
 */
async function deleteUsers(req: Request, res: Response) {
	await deleteUserList()
	res.json({ message: 'Users were deleted successfully! ✅' })
}

export { getAllUsers, getUserProfile, deleteUsers }
