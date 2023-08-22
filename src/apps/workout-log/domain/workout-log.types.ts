import { Prisma } from '@prisma/client'

import { IExerciseLog } from '@apps/exercise-log/domain/exercise-log.types'
import { IUser } from '@apps/user/domain/user.types'
import {
	IWorkout,
	IWorkoutSimple,
	IWorkoutWithExercises
} from '@apps/workout/domain/workout.types'

interface IWorkoutLog {
	id: number
	isCompleted: boolean
	workoutId: number
	userId: number

	exerciseLogs: IExerciseLog[]
	user: IUser
	workout: IWorkoutWithExercises

	createdAt: Date
	updatedAt: Date
}

interface IWorkoutLogSimple {
	id: number
	isCompleted: boolean
	workoutId: number
	userId: number

	createdAt: Date
	updatedAt: Date
}

interface IWorkoutLogInclude extends Prisma.WorkoutLogInclude {
	workout: {
		include: Prisma.WorkoutLogInclude
	} & Prisma.WorkoutLog$workoutArgs
	exerciseLogs: {
		include: Prisma.ExerciseLogInclude
	} & Prisma.WorkoutLog$exerciseLogsArgs
}

export { IWorkoutLog, IWorkoutLogSimple, IWorkoutLogInclude }
