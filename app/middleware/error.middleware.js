import { isProduction } from '@config/constants.js'

function errorHandler(err, req, res, next) {
	const statusCode = res.statusCode ?? 500
	res.status(statusCode).json({
		message: err?.message ?? 'Error',
		stack: isProduction ? null : err?.stack
	})
}

export { errorHandler }
