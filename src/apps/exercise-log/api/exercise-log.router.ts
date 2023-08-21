import { ProtectedRouter } from '@libraries/router'

import {
	createExerciseLog,
	deleteExerciseLog,
	getAllExerciseLogs,
	getExerciseLog,
	updateExerciseLogStatus,
	updateExerciseTime
} from './exercise-log.controller'

const exerciseLogRouter = ProtectedRouter()

exerciseLogRouter.get('/', getAllExerciseLogs)
exerciseLogRouter.post('/', createExerciseLog)
exerciseLogRouter.get('/:id', getExerciseLog)
exerciseLogRouter.patch('/:id/status', updateExerciseLogStatus)
exerciseLogRouter.delete('/:id', deleteExerciseLog)

exerciseLogRouter.put('/time/:id', updateExerciseTime)

export { exerciseLogRouter }
