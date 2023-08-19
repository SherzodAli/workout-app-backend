import { prisma } from '@libraries/prisma'

import {
	ICreateExercise,
	IExercise,
	IUpdateExercise
} from '@apps/exercise/domain/exercise.types'

async function getExerciseList(): Promise<IExercise[]> {
	return await prisma.exercise.findMany({ orderBy: { id: 'desc' } })
}

async function createAndGetExercise({
	name,
	sets,
	iconPath
}: ICreateExercise): Promise<IExercise> {
	return await prisma.exercise.create({ data: { name, sets, iconPath } })
}

async function updateAndGetExercise({
	id,
	name,
	sets,
	iconPath
}: IUpdateExercise): Promise<IExercise> {
	return await prisma.exercise.update({
		where: { id },
		data: { name, sets, iconPath }
	})
}

async function deleteAndGetExercise(id: number): Promise<IExercise> {
	return await prisma.exercise.delete({ where: { id } })
}

export {
	getExerciseList,
	createAndGetExercise,
	updateAndGetExercise,
	deleteAndGetExercise
}
