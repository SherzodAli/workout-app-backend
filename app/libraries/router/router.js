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

const wrapHttpMethods = (httpMethod, router) => {
	const originalMethod = router[httpMethod]
	router[httpMethod] = (route, ...controllers) =>
		originalMethod.call(router, route, ...controllers.map(tryCatchWrapper))
}

function SafeRouter() {
	const router = Router()
	httpMethods.forEach(method => wrapHttpMethods(method, router))
	return router
}

export { SafeRouter }
