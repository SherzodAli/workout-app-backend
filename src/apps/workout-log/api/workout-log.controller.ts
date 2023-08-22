import { Response } from 'express'

import { Request } from '@libraries/router'

import {
	createAndGetWorkoutLog,
	deleteAndGetWorkoutLog,
	getWorkoutLogById,
	getWorkoutLogList,
	setWorkoutLogIsCompleted
} from '@apps/workout-log/data-access/workout-log.db'
import { getWorkoutById } from '@apps/workout/data-access/workout.db'
import { getWorkoutTimeLength } from '@apps/workout/data-access/workout.mock'

// GET /api/workouts/logs [Private]
async function getAllWorkoutLogs(req: Request, res: Response) {
	res.json(await getWorkoutLogList())
}

// GET /api/workouts/logs/:id [Private]
async function getWorkoutLog(req: Request, res: Response) {
	const workoutLog = await getWorkoutLogById(+req.params.id)
	const minutes = getWorkoutTimeLength(workoutLog.workout.exercises.length)
	res.json({ ...workoutLog, minutes })
}

// POST /api/workouts/logs [Private]
async function createWorkoutLog(req: Request, res: Response) {
	const { workoutId } = req.body
	const workout = await getWorkoutById(workoutId)

	if (!workout)
		return res.status(404).json({ message: 'Workout was not found!' })

	const workoutLog = await createAndGetWorkoutLog({
		userId: req.user.id,
		workoutId,
		workout
	})

	res.json(workoutLog)
}

// POST /api/workouts/logs/:id/completed
async function updateWorkoutLogIsCompleted(req: Request, res: Response) {
	setWorkoutLogIsCompleted(+req.params.id)
	res.json({ message: 'Updated successfully' })
}

// DELETE /api/workouts/logs/:id [Private]
async function deleteWorkoutLog(req: Request, res: Response) {
	res.json(await deleteAndGetWorkoutLog(+req.params.id))
}

export {
	getAllWorkoutLogs,
	getWorkoutLog,
	createWorkoutLog,
	updateWorkoutLogIsCompleted,
	deleteWorkoutLog
}
