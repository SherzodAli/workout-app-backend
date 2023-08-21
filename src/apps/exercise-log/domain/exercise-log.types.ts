import { IExercise } from '@apps/exercise/domain/exercise.types'

interface IExerciseLog {
	id: number
	isCompleted: boolean
	userId: number
	workoutLogId: number
	exerciseId: number

	times: IExerciseTime[]
	exercise: IExercise

	createdAt: Date
	updatedAt: Date
}

interface IExerciseLogSimple {
	id: number
	isCompleted: boolean
	userId: number
	workoutLogId: number
	exerciseId: number

	createdAt: Date
	updatedAt: Date
}

interface ICreateExerciseLogDBProps {
	userId: number
	exerciseId: number
	timesDefault: IExerciseTimeDefault[]
}

interface IExerciseTime {
	id: number
	weight: number
	repeat: number
	isCompleted: boolean
	exerciseLogId: number
	createdAt: Date
	updatedAt: Date
}

interface IUpdateExerciseTimeRequestParams {
	weight: number
	repeat: number
	isCompleted: boolean
}

interface IUpdateExerciseTimeDBParams extends IUpdateExerciseTimeRequestParams {
	id: number
}

interface IExerciseTimeDefault {
	weight: number
	repeat: number
}

export {
	IExerciseLog,
	IExerciseLogSimple,
	ICreateExerciseLogDBProps,
	IExerciseTimeDefault,
	IExerciseTime,
	IUpdateExerciseTimeDBParams,
	IUpdateExerciseTimeRequestParams
}
