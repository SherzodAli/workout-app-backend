import { SafeRouter } from '@libraries/router'

import { checkToken } from '@middleware'

import {
	createExercise,
	deleteExercise,
	getAllExercises,
	updateExercise
} from './exercise.controller'

const exerciseRouter = SafeRouter()

exerciseRouter.get('/', checkToken, getAllExercises)
exerciseRouter.post('/', checkToken, createExercise)
exerciseRouter.put('/:id', checkToken, updateExercise)
exerciseRouter.delete('/:id', checkToken, deleteExercise)

export { exerciseRouter }
