import { ProtectedRouter } from '@libraries/router'

import {
	createWorkout,
	deleteWorkout,
	getAllWorkouts,
	getWorkout,
	updateWorkout
} from './workout.controller'

const workoutRouter = ProtectedRouter()

workoutRouter.get('/', getAllWorkouts)
workoutRouter.post('/', createWorkout)
workoutRouter.get('/:id', getWorkout)
workoutRouter.put('/:id', updateWorkout)
workoutRouter.delete('/:id', deleteWorkout)

export { workoutRouter }
