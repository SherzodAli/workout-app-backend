import { prisma } from '@libraries/prisma'

import {
	ICreateWorkoutParams,
	IUpdateWorkoutParams,
	IWorkout,
	IWorkoutSimple
} from '@apps/workout/domain/workout.types'

async function getWorkoutList(): Promise<IWorkout[]> {
	return await prisma.workout.findMany({
		orderBy: { id: 'desc' },
		include: { exercises: true }
	})
}

async function getWorkoutById(id: number): Promise<IWorkout> {
	return await prisma.workout.findUnique({
		where: { id },
		include: { exercises: true }
	})
}

async function createAndGetWorkout({
	name,
	exerciseIds
}: ICreateWorkoutParams): Promise<IWorkoutSimple> {
	return await prisma.workout.create({
		data: { name, exercises: { connect: exerciseIds } }
	})
}

async function updateAndGetWorkout({
	id,
	name,
	exerciseIds
}: IUpdateWorkoutParams): Promise<IWorkoutSimple> {
	return await prisma.workout.update({
		where: { id },
		data: { name, exercises: { set: exerciseIds } }
	})
}

async function deleteAndGetWorkout(id: number): Promise<IWorkoutSimple> {
	return await prisma.workout.delete({ where: { id } })
}

export {
	getWorkoutList,
	getWorkoutById,
	createAndGetWorkout,
	updateAndGetWorkout,
	deleteAndGetWorkout
}
