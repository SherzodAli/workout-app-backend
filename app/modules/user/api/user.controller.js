import {
	deleteUserList,
	getUserById,
	getUserList
} from '@modules/user/data-access/user.db.js'

async function getAllUsers(req, res) {
	const users = await getUserList()
	res.json(users)
}

async function getUserProfile(req, res) {
	const user = await getUserById(req.user.id)
	res.json(user)
}

async function deleteUsers(req, res) {
	await deleteUserList()
	res.json({ message: 'Users were deleted successfully! ✅' })
}

export { getAllUsers, getUserProfile, deleteUsers }
