interface IWorkout {
	id: number
	createdAt: Date
	updatedAt: Date
	name: string
	exercises: IExerciseCompact[]
}

type IWorkoutSimple = Omit<IWorkout, 'exercises'>

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

export { IWorkout, IWorkoutSimple, ICreateWorkoutParams, IUpdateWorkoutParams }
