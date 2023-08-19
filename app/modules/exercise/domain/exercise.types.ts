interface IExercise {
	id: number
	createdAt: Date
	updatedAt: Date
	name: string
	sets: number
	iconPath: string
}

interface ICreateExercise {
	name: string
	sets: number
	iconPath: string
}

interface IUpdateExercise extends ICreateExercise {
	id: number
}

export { IExercise, ICreateExercise, IUpdateExercise }
