import 'colors'
import express from 'express'
import morgan from 'morgan'

import { errorHandler } from './app/middlewares/error.middleware.js'
import { notFound } from './app/middlewares/not-found.middleware.js'

import { authRouter } from './app/auth/auth.routes.js'
import { PORT, isDevelopment } from './app/config.js'
import { prisma } from './app/prisma.js'
import { userRouter } from './app/user/user.routes.js'

const app = express()

async function main() {
	isDevelopment && app.use(morgan('dev'))

	app.use(express.json())
	app.use('/api/auth', authRouter)
	app.use('/api/users', userRouter)
	app.use(notFound)
	app.use(errorHandler)

	app.listen(PORT, () =>
		console.log(`🚀 Server is running on port ${PORT}`.blue.bold)
	)
}

main()
	.catch(console.error)
	.finally(async () => await prisma.$disconnect())
