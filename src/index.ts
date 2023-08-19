import 'colors'
import express from 'express'
import morgan from 'morgan'
import path from 'path'

import { PORT, isDevelopment } from '@config/constants'

import { prisma } from '@libraries/prisma'

import { errorHandler, notFound } from '@middleware'

import { authRouter } from '@apps/auth/api'
import { exerciseRouter } from '@apps/exercise/api'
import { userRouter } from '@apps/user/api'
import { workoutRouter } from '@apps/workout/api'

const app = express()
const __dirname = path.resolve()

async function main() {
	isDevelopment && app.use(morgan('dev'))

	app.use(express.json())
	app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

	app.use('/api/auth', authRouter)
	app.use('/api/users', userRouter)
	app.use('/api/exercises', exerciseRouter)
	app.use('/api/workouts', workoutRouter)

	app.use(notFound)
	app.use(errorHandler)

	app.listen(PORT, () =>
		console.log(`🚀 Server is running on port ${PORT}`.blue.bold)
	)
}

main()
	.catch(console.error)
	.finally(async () => await prisma.$disconnect())
