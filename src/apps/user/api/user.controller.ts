import { Response } from 'express'

import { Request } from '@libraries/router'

import { getExerciseLogCompletedCount } from '@apps/exercise-log/data-access/exercise-log.db'
import { getExerciseTotalWeight } from '@apps/exercise/data-access/exercise.db'
import {
	deleteUserList,
	getUserById,
	getUserList
} from '@apps/user/data-access/user.db'
import { getWorkoutLogCount } from '@apps/workout-log/data-access/workout-log.db'
import { getWorkoutTimeLength } from '@apps/workout/data-access/workout.mock'

// GET /api/users [Private]
async function getAllUsers(req: Request, res: Response) {
	const users = await getUserList()
	res.json(users)
}

// GET /api/users/profile [Private]
async function getUserProfile(req: Request, res: Response) {
	const user = await getUserById(req.user.id)
	const weightTotal: number = await getExerciseTotalWeight(user.id)
	const minutesTotal: number = getWorkoutTimeLength(
		await getExerciseLogCompletedCount(user.id)
	)
	const workoutCount: number = await getWorkoutLogCount(user.id)

	res.json({ ...user, weightTotal, minutesTotal, workoutCount })
}

// DELETE /api/users [Private]
async function deleteUsers(req: Request, res: Response) {
	await deleteUserList()
	res.json({ message: 'Users were deleted successfully! ✅' })
}

export { getAllUsers, getUserProfile, deleteUsers }
