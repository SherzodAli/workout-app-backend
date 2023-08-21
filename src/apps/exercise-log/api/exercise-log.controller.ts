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

/**
 * @description Get all logs of an exercise
 * @route GET /api/exercises/logs
 * @access Private
 */
async function getAllExerciseLogs(req: Request, res: Response) {
	res.json(await getExerciseLogList())
}

/**
 * @description Get a specific log of an exercise
 * @route GET /api/exercises/logs/:id
 * @access Private
 */
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

/**
 * @description Create an exercise log
 * @route POST /api/exercises/logs
 * @access Private
 */
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

/**
 * @description Update an exercise time
 * @route PUT /api/exercises/logs/time/:id
 * @access Private
 */
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

/**
 * @description Update an exercise time status
 * @route PATCH /api/exercises/logs/:id/status
 * @access Private
 */
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

/**
 * @description Delete an exercise log
 * @route DELETE /api/exercises/logs/:id
 * @access Private
 */
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
