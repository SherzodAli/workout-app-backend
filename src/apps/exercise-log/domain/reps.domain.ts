import { IExerciseLog, IExerciseTimeDefault } from './exercise-log.types'

function createDefaultRepeatList(
	numberOfRepeats: number
): IExerciseTimeDefault[] {
	return Array(numberOfRepeats)
		.fill(null)
		.map(_ => ({ weight: 0, repeat: 0 }))
}

function addPreviousRepeatInfo({
	exerciseLog,
	lastExerciseLog
}: {
	exerciseLog: IExerciseLog
	lastExerciseLog: IExerciseLog
}) {
	return exerciseLog.times.map((rep, i) => ({
		...rep,
		prevWeight: lastExerciseLog?.times?.at(i)?.weight ?? 0,
		prevRepeat: lastExerciseLog?.times?.at(i)?.repeat ?? 0
	}))
}

export { createDefaultRepeatList, addPreviousRepeatInfo }
