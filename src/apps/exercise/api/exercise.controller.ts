import { Response } from 'express'

import { Request } from '@libraries/router'

import {
	createAndGetExercise,
	deleteAndGetExercise,
	getExerciseList,
	updateAndGetExercise
} from '@apps/exercise/data-access/exercise.db'

// GET /api/exercises [Private]
async function getAllExercises(req: Request, res: Response) {
	res.json(await getExerciseList())
}

// POST /api/exercises [Private]
async function createExercise(req: Request, res: Response) {
	const { name, sets, iconPath } = req.body
	const exercise = await createAndGetExercise({ name, sets, iconPath })
	res.json(exercise)
}

// PUT /api/exercises/:id [Private]
async function updateExercise(req: Request, res: Response) {
	const { name, sets, iconPath } = req.body
	const id = +req.params.id

	const exercise = await updateAndGetExercise({ id, name, sets, iconPath })
	res.json(exercise)
}

// DELETE /api/exercises/:id [Private]
async function deleteExercise(req: Request, res: Response) {
	const exercise = await deleteAndGetExercise(+req.params.id)
	res.json(exercise)
}

export { getAllExercises, createExercise, updateExercise, deleteExercise }
