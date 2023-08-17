import { prisma } from '../prisma.js'
import { userFields } from '../utils/user.utils.js'

/**
 * @description Get all users
 * @route GET /api/users/
 * @access Public
 */
async function getAllUsers(req, res) {
	const users = await prisma.user.findMany()
	res.json(users)
}

/**
 * @description Get user profile
 * @route GET /api/users/profile
 * @access Private
 */
async function getUserProfile(req, res) {
	const user = await prisma.user.findUnique({
		select: userFields
	})
	res.json(user)
}

/**
 * @description Delete all users
 * @route DELETE /api/users/
 * @access Public
 */
async function deleteUsers(req, res) {
	await prisma.user.deleteMany()
	res.json({ message: 'Users were deleted successfully! ✅' })
}

export { getAllUsers, getUserProfile, deleteUsers }
