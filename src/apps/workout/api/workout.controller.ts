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

/**
 * @description Get all workouts
 * @route GET /api/workouts
 * @access Private
 */
async function getAllWorkouts(req: Request, res: Response) {
	res.json(await getWorkoutList())
}

/**
 * @description Get workout
 * @route GET /api/workouts/:id
 * @access Private
 */
async function getWorkout(req: Request, res: Response) {
	const workout = await getWorkoutById(+req.params.id)
	const minutes = getWorkoutTimeLength(workout?.exercises?.length)

	if (!workout) {
		return res.json({ message: 'No workout found' })
	}

	res.json({ ...workout, minutes })
}

/**
 * @description Create workout
 * @route POST /api/workouts
 * @access Private
 */
async function createWorkout(req: Request, res: Response) {
	const { name, exerciseIds }: ICreateWorkoutParams = req.body
	const workout = await createAndGetWorkout({ name, exerciseIds })
	res.json(workout)
}

/**
 * @description Update workout
 * @route PUT /api/workouts/:id
 * @access Private
 */
async function updateWorkout(req: Request, res: Response) {
	const { name, exerciseIds }: ICreateWorkoutParams = req.body

	const workout = await updateAndGetWorkout({
		id: +req.params.id,
		name,
		exerciseIds
	})

	res.json(workout)
}

/**
 * @description Delete workout
 * @route DELETE /api/workouts/:id
 * @access Private
 */
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
