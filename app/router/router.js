import { Router } from 'express'

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

const tryCatchWrapper = router => (req, res, next) => {
	return Promise.resolve(router(req, res, next)).catch(next)
}

function wrapHttpMethods(httpMethod, router) {
	const originalMethod = router[httpMethod]
	router[httpMethod] = (route, controller) =>
		originalMethod.call(router, route, tryCatchWrapper(controller))
}

function SafeRouter() {
	const router = Router()
	httpMethods.forEach(method => wrapHttpMethods(method, router))
	return router
}

export { SafeRouter }
