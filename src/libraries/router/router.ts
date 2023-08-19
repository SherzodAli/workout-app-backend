import { NextFunction, Request, Response, Router } from 'express'

const httpMethods = [
	'all',
	'get',
	'post',
	'put',
	'delete',
	'patch',
	'options',
	'head'
]

function tryCatchWrapper(router: Router) {
	return function (req: Request, res: Response, next: NextFunction) {
		return Promise.resolve(router(req, res, next)).catch(next)
	}
}

const wrapHttpMethods = (httpMethod, router: Router) => {
	const originalMethod = router[httpMethod]
	router[httpMethod] = (route, ...controllers) =>
		originalMethod.call(router, route, ...controllers.map(tryCatchWrapper))
}

function SafeRouter(): Router {
	const router = Router()
	httpMethods.forEach(method => wrapHttpMethods(method, router))
	return router
}

export { SafeRouter }
