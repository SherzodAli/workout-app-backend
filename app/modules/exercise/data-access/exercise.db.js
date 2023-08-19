import { prisma } from '@libraries/prisma'

async function getExerciseList() {
	return await prisma.exercise.findMany({ orderBy: { id: 'desc' } })
}

async function createAndGetExercise({ name, sets, iconPath }) {
	return await prisma.exercise.create({
		data: { name, sets, iconPath }
	})
}

async function updateAndGetExercise({ id, name, sets, iconPath }) {
	return await prisma.exercise.update({
		where: { id },
		data: { name, sets, iconPath }
	})
}

async function deleteAndGetExercise(id) {
	return await prisma.exercise.delete({ where: { id } })
}

export {
	getExerciseList,
	createAndGetExercise,
	updateAndGetExercise,
	deleteAndGetExercise
}
