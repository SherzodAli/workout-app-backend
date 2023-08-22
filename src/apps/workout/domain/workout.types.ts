import {
	IWorkoutLog,
	IWorkoutLogSimple
} from '@apps/workout-log/domain/workout-log.types'

interface IWorkout {
	id: number
	createdAt: Date
	updatedAt: Date
	name: string
	exercises: IExerciseCompact[]
	workoutLogs: IWorkoutLogSimple[]
}

interface IWorkoutCompact {
	id: number
	createdAt: Date
	updatedAt: Date
	name: string
	exercises: IExerciseCompact[]
	workoutLogs: IWorkoutLogSimple[]
}

type IWorkoutSimple = Omit<IWorkout, 'exercises' | 'workoutLogs'>
type IWorkoutWithExercises = Omit<IWorkout, 'workoutLogs'>

interface IExerciseCompact {
	id: number
	createdAt: Date
	updatedAt: Date
	name: string
	sets: number
	iconPath: string
}

interface ICreateWorkoutParams {
	name: string
	exerciseIds: { id: number }[]
}

interface IUpdateWorkoutParams extends ICreateWorkoutParams {
	id: number
}

export {
	IWorkout,
	IWorkoutCompact,
	IWorkoutSimple,
	IWorkoutWithExercises,
	ICreateWorkoutParams,
	IUpdateWorkoutParams
}
