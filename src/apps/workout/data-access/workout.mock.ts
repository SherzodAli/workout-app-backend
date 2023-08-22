const RANDOM_COEFFICIENT = 3.7 // Can be any number

/**
	Returns a random number which we'll use as a
 	workout time length in minutes
 */
function getWorkoutTimeLength(numberOfExercises: number): number {
	return Math.ceil(numberOfExercises * RANDOM_COEFFICIENT) ?? 0
}

export { getWorkoutTimeLength }
