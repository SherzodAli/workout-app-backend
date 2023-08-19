import { NextFunction, Response } from 'express'

import { isProduction } from '@config/constants'

import { Request } from '@libraries/router'

function errorHandler(
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction
) {
	res.json({
		message: error.message ?? 'Error',
		stack: isProduction ? null : error?.stack
	})
}

export { errorHandler }
