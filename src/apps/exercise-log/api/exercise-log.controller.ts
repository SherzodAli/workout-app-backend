import { Response } from 'express'

import { Request } from '@libraries/router'

import {
	createAndGetExerciseLog,
	deleteExerciseLogById,
	getExerciseLogById,
	getExerciseLogList,
	getLastCompletedExerciseLog,
	updateAndGetExerciseLogStatus,
	updateAndGetExerciseLogTime
} from '@apps/exercise-log/data-access/exercise-log.db'
import {
	addPreviousRepeatInfo,
	createDefaultRepeatList
} from '@apps/exercise-log/domain/reps.domain'
import { getExerciseById } from '@apps/exercise/data-access/exercise.db'

import { IUpdateExerciseTimeRequestParams } from '../domain/exercise-log.types'

// GET /api/exercises/logs [Private]
async function getAllExerciseLogs(req: Request, res: Response) {
	res.json(await getExerciseLogList())
}

// GET /api/exercises/logs/:id [Private]
async function getExerciseLog(req: Request, res: Response) {
	const exerciseLog = await getExerciseLogById(+req.params.id)

	if (!exerciseLog)
		return res.status(404).json({ message: 'Exercise log not found!' })

	const lastExerciseLog = await getLastCompletedExerciseLog(
		exerciseLog.exerciseId
	)
	const times = addPreviousRepeatInfo({ exerciseLog, lastExerciseLog })

	res.json({ ...exerciseLog, times })
}

// POST /api/exercises/logs [Private]
async function createExerciseLog(req: Request, res: Response) {
	const { exerciseId }: { exerciseId: number } = req.body

	if (!exerciseId)
		return res.status(400).json({ message: 'No exercise id provided!' })

	const exercise = await getExerciseById(exerciseId)

	if (!exercise)
		return res.status(400).json({ message: 'Exercise doesn’t exist!' })

	const timesDefault = createDefaultRepeatList(exercise.sets)

	const exerciseLog = await createAndGetExerciseLog({
		userId: +req.user.id,
		exerciseId,
		timesDefault
	})

	res.json(exerciseLog)
}

// GET /api/exercises/logs/time/:id [Private]
async function updateExerciseTime(req: Request, res: Response) {
	const { weight, repeat, isCompleted }: IUpdateExerciseTimeRequestParams =
		req.body

	const exerciseLogTime = await updateAndGetExerciseLogTime({
		id: +req.params.id,
		weight,
		repeat,
		isCompleted
	})

	res.json(exerciseLogTime)
}

// PATCH /api/exercises/logs/:id/status [Private]
async function updateExerciseLogStatus(req: Request, res: Response) {
	const { isCompleted }: { isCompleted: boolean } = req.body
	const exerciseLog = await getExerciseLogById(+req.params.id)

	if (!exerciseLog)
		return res.status(400).json({ message: 'Exercise log doesn’t exist!' })

	const exerciseLogTime = await updateAndGetExerciseLogStatus({
		id: exerciseLog.id,
		isCompleted
	})

	res.json(exerciseLogTime)
}

// DELETE /api/exercises/logs/:id [Private]
async function deleteExerciseLog(req: Request, res: Response) {
	const exerciseLog = await deleteExerciseLogById(+req.params.id)
	res.json(exerciseLog)
}

export {
	getAllExerciseLogs,
	getExerciseLog,
	createExerciseLog,
	updateExerciseTime,
	updateExerciseLogStatus,
	deleteExerciseLog
}
