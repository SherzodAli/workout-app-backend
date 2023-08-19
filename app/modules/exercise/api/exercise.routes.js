import { SafeRouter } from 'libraries/router/router.js'

import { checkToken } from 'middleware/auth.middleware.js'

import {
	createExercise,
	deleteExercise,
	getAllExercises,
	updateExercise
} from './exercise.controller.js'

const exerciseRouter = SafeRouter()

exerciseRouter.get('/', checkToken, getAllExercises)
exerciseRouter.post('/', checkToken, createExercise)
exerciseRouter.put('/:id', checkToken, updateExercise)
exerciseRouter.delete('/:id', checkToken, deleteExercise)

export { exerciseRouter }
