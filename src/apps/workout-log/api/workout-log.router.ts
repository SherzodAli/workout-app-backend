import { ProtectedRouter } from '@libraries/router'

import {
	createWorkoutLog,
	deleteWorkoutLog,
	getAllWorkoutLogs,
	getWorkoutLog,
	updateWorkoutLogIsCompleted
} from './workout-log.controller'

const workoutLogRouter = ProtectedRouter()

workoutLogRouter.get('/', getAllWorkoutLogs)
workoutLogRouter.get('/:id', getWorkoutLog)
workoutLogRouter.post('/', createWorkoutLog)
workoutLogRouter.post('/:id/completed', updateWorkoutLogIsCompleted)
workoutLogRouter.delete('/:id', deleteWorkoutLog)

export { workoutLogRouter }
