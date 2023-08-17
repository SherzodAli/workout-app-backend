import dotenv from 'dotenv'

dotenv.config()

const NODE_ENV = process.env.NODE_ENV
const isProduction = NODE_ENV === 'production'
const isDevelopment = NODE_ENV === 'development'
const PORT = process.env.PORT ?? 5000

const ACCESS_TOKEN = process.env.ACCESS_TOKEN
const TOKEN_EXPIRES_IN = '10d' // 10 days

export {
	PORT,
	NODE_ENV,
	isProduction,
	isDevelopment,
	ACCESS_TOKEN,
	TOKEN_EXPIRES_IN
}
