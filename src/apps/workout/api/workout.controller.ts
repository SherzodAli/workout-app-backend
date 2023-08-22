import { Response } from 'express'

import { Request } from '@libraries/router'

import {
	createAndGetWorkout,
	deleteAndGetWorkout,
	getWorkoutById,
	getWorkoutList,
	updateAndGetWorkout
} from '@apps/workout/data-access/workout.db'
import { getWorkoutTimeLength } from '@apps/workout/data-access/workout.mock'
import { ICreateWorkoutParams } from '@apps/workout/domain/workout.types'

// GET /api/workouts [Private]
async function getAllWorkouts(req: Request, res: Response) {
	res.json(await getWorkoutList())
}

// GET /api/workouts/:id [Private]
async function getWorkout(req: Request, res: Response) {
	const workout = await getWorkoutById(+req.params.id)
	const minutes = getWorkoutTimeLength(workout?.exercises?.length)

	if (!workout) {
		return res.json({ message: 'No workout found' })
	}

	res.json({ ...workout, minutes })
}

// POST /api/workouts [Private]
async function createWorkout(req: Request, res: Response) {
	const { name, exerciseIds }: ICreateWorkoutParams = req.body
	const workout = await createAndGetWorkout({ name, exerciseIds })
	res.json(workout)
}

// PUT /api/workouts/:id [Private]
async function updateWorkout(req: Request, res: Response) {
	const { name, exerciseIds }: ICreateWorkoutParams = req.body

	const workout = await updateAndGetWorkout({
		id: +req.params.id,
		name,
		exerciseIds
	})

	res.json(workout)
}

// DELETE /api/workouts/:id [Private]
async function deleteWorkout(req: Request, res: Response) {
	const workout = await deleteAndGetWorkout(+req.params.id)
	res.json(workout)
}

export {
	getAllWorkouts,
	getWorkout,
	createWorkout,
	updateWorkout,
	deleteWorkout
}
