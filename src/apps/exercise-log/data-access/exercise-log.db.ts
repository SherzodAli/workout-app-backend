import { prisma } from '@libraries/prisma'

import {
	ICreateExerciseLogDBProps,
	IExerciseLog,
	IExerciseLogSimple,
	IExerciseTime,
	IUpdateExerciseTimeDBParams
} from '@apps/exercise-log/domain/exercise-log.types'

async function getExerciseLogList(): Promise<IExerciseLog[]> {
	return await prisma.exerciseLog.findMany({
		include: { exercise: true, times: true }
	})
}

async function getExerciseLogById(id: number): Promise<IExerciseLog> {
	return await prisma.exerciseLog.findUnique({
		where: { id },
		include: { exercise: true, times: { orderBy: { id: 'asc' } } }
	})
}

async function getLastCompletedExerciseLog(
	exerciseId: number
): Promise<IExerciseLog> {
	return await prisma.exerciseLog.findFirst({
		where: { exerciseId, isCompleted: true },
		orderBy: { createdAt: 'desc' },
		include: { exercise: true, times: true }
	})
}

async function createAndGetExerciseLog({
	userId,
	exerciseId,
	timesDefault
}: ICreateExerciseLogDBProps): Promise<IExerciseLog> {
	return await prisma.exerciseLog.create({
		data: {
			user: { connect: { id: userId } },
			exercise: { connect: { id: exerciseId } },
			times: { createMany: { data: timesDefault } }
		},
		include: { exercise: true, times: true }
	})
}

async function updateAndGetExerciseLogTime({
	id,
	weight,
	repeat,
	isCompleted
}: IUpdateExerciseTimeDBParams): Promise<IExerciseTime> {
	return await prisma.exerciseTime.update({
		where: { id },
		data: { weight, repeat, isCompleted }
	})
}

async function updateAndGetExerciseLogStatus({
	id,
	isCompleted
}: {
	id: number
	isCompleted: boolean
}): Promise<IExerciseLog> {
	return await prisma.exerciseLog.update({
		where: { id },
		data: { isCompleted },
		include: { exercise: true, times: true }
	})
}

async function deleteExerciseLogById(id: number): Promise<IExerciseLogSimple> {
	return await prisma.exerciseLog.delete({ where: { id } })
}

export {
	getExerciseLogList,
	getExerciseLogById,
	getLastCompletedExerciseLog,
	createAndGetExerciseLog,
	updateAndGetExerciseLogTime,
	updateAndGetExerciseLogStatus,
	deleteExerciseLogById
}
