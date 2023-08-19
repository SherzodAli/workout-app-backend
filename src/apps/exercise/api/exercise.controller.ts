import { Response } from 'express'

import { Request } from '@libraries/router'

import {
	createAndGetExercise,
	deleteAndGetExercise,
	getExerciseList,
	updateAndGetExercise
} from '@apps/exercise/data-access/exercise.db'

/**
 * @description Get all exercises
 * @route GET /api/exercises/
 * @access Private
 */
async function getAllExercises(req: Request, res: Response) {
	res.json(await getExerciseList())
}

/**
 * @description Create new exercise
 * @route POST /api/exercises/
 * @access Private
 */
async function createExercise(req: Request, res: Response) {
	const { name, sets, iconPath } = req.body
	const exercise = await createAndGetExercise({ name, sets, iconPath })
	res.json(exercise)
}

/**
 * @description Update exercise
 * @route PUT /api/exercises/:id
 * @access Private
 */
async function updateExercise(req: Request, res: Response) {
	const { name, sets, iconPath } = req.body

	const exercise = await updateAndGetExercise({
		id: +req.params.id,
		name,
		sets,
		iconPath
	})

	res.json(exercise)
}

/**
 * @description Delete exercise
 * @route DELETE /api/exercises/:id
 * @access Private
 */
async function deleteExercise(req: Request, res: Response) {
	const exercise = await deleteAndGetExercise(+req.params.id)
	res.json(exercise)
}

export { getAllExercises, createExercise, updateExercise, deleteExercise }
