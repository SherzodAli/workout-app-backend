import { ProtectedRouter } from '@libraries/router'

import {
	createExercise,
	deleteExercise,
	getAllExercises,
	updateExercise
} from './exercise.controller'

const exerciseRouter = ProtectedRouter()

exerciseRouter.get('/', getAllExercises)
exerciseRouter.post('/', createExercise)
exerciseRouter.put('/:id', updateExercise)
exerciseRouter.delete('/:id', deleteExercise)

export { exerciseRouter }
