import { prisma } from '@libraries/prisma'

import {
	ICreateWorkoutParams,
	IUpdateWorkoutParams,
	IWorkoutCompact,
	IWorkoutSimple
} from '@apps/workout/domain/workout.types'

async function getWorkoutList(): Promise<IWorkoutCompact[]> {
	return await prisma.workout.findMany({
		orderBy: { id: 'desc' },
		include: { exercises: true, workoutLogs: true }
	})
}

async function getWorkoutById(id: number): Promise<IWorkoutCompact> {
	return await prisma.workout.findUnique({
		where: { id },
		include: { exercises: true, workoutLogs: true }
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
