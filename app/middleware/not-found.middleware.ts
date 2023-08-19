import { NextFunction, Response } from 'express'

import { Request } from '@libraries/router'

function notFound(req: Request, res: Response, next: NextFunction) {
	const error = new Error(`Not found — ${req.originalUrl}`)
	res.status(404)
	next(error)
}

export { notFound }
