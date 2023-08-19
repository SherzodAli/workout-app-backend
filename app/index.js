import 'colors'
import express from 'express'
import morgan from 'morgan'
import path from 'path'

import { PORT, isDevelopment } from 'config/constants.js'

import { prisma } from 'libraries/prisma/prisma.js'

import { errorHandler } from 'middleware/error.middleware.js'
import { notFound } from 'middleware/not-found.middleware.js'

import { authRouter } from 'modules/auth/api/auth.routes.js'
import { exerciseRouter } from 'modules/exercise/api/exercise.routes.js'
import { userRouter } from 'modules/user/api/user.routes.js'

const app = express()
const __dirname = path.resolve()

async function main() {
	isDevelopment && app.use(morgan('dev'))

	app.use(express.json())
	app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

	app.use('/api/auth', authRouter)
	app.use('/api/users', userRouter)
	app.use('/api/exercises', exerciseRouter)

	app.use(notFound)
	app.use(errorHandler)

	app.listen(PORT, () =>
		console.log(`🚀 Server is running on port ${PORT}`.blue.bold)
	)
}

main()
	.catch(console.error)
	.finally(async () => await prisma.$disconnect())
