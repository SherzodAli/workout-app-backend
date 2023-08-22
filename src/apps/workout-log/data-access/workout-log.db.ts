import { prisma } from '@libraries/prisma'

import { createDefaultRepeatList } from '@apps/exercise-log/domain/reps.domain'
import {
	IWorkoutLog,
	IWorkoutLogInclude,
	IWorkoutLogSimple
} from '@apps/workout-log/domain/workout-log.types'
import { IWorkoutCompact } from '@apps/workout/domain/workout.types'

const WORKOUT_LOG_INFO: IWorkoutLogInclude = {
	user: true,
	workout: { include: { exercises: true } },
	exerciseLogs: {
		include: { times: true, exercise: true },
		orderBy: { id: 'asc' }
	}
}

async function getWorkoutLogList(): Promise<IWorkoutLog[]> {
	return await prisma.workoutLog.findMany({
		orderBy: { id: 'desc' },
		include: WORKOUT_LOG_INFO
	})
}

async function getWorkoutLogById(id: number): Promise<IWorkoutLog> {
	return await prisma.workoutLog.findUnique({
		where: { id },
		include: WORKOUT_LOG_INFO
	})
}

async function getWorkoutLogCount(userId: number): Promise<number> {
	return await prisma.workoutLog.count({ where: { userId, isCompleted: true } })
}

async function createAndGetWorkoutLog({
	userId,
	workoutId,
	workout
}: {
	userId: number
	workoutId: number
	workout: IWorkoutCompact
}): Promise<IWorkoutLog> {
	const exerciseLogs = workout.exercises.map(exercise => ({
		userId,
		exerciseId: exercise.id,
		times: { create: createDefaultRepeatList(exercise.sets) }
	}))

	return await prisma.workoutLog.create({
		data: {
			userId,
			workoutId,
			exerciseLogs: { create: exerciseLogs }
		},
		include: WORKOUT_LOG_INFO
	})
}

async function setWorkoutLogIsCompleted(id: number): Promise<void> {
	await prisma.workoutLog.update({
		where: { id },
		data: { isCompleted: true },
		include: WORKOUT_LOG_INFO
	})
}

async function deleteAndGetWorkoutLog(id: number): Promise<IWorkoutLogSimple> {
	return await prisma.workoutLog.delete({ where: { id } })
}

export {
	getWorkoutLogList,
	getWorkoutLogById,
	getWorkoutLogCount,
	createAndGetWorkoutLog,
	setWorkoutLogIsCompleted,
	deleteAndGetWorkoutLog
}
