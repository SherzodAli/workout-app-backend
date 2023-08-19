import {
	Router as ExpressRouter,
	NextFunction,
	Request,
	Response
} from 'express'

import { protectRoute } from '@middleware'

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

type HTTPMethod =
	| 'all'
	| 'get'
	| 'post'
	| 'put'
	| 'delete'
	| 'patch'
	| 'options'
	| 'head'

function tryCatchWrapper(router: ExpressRouter) {
	return function (req: Request, res: Response, next: NextFunction) {
		return Promise.resolve(router(req, res, next)).catch(next)
	}
}

function wrapHttpMethods({
	httpMethod,
	router,
	isProtected
}: {
	httpMethod: HTTPMethod
	router: ExpressRouter
	isProtected: boolean
}) {
	const originalMethod = router[httpMethod]
	router[httpMethod] = (path, ...controllers) =>
		originalMethod.call(
			router,
			path,
			...getExtraCallbacks({ isProtected }),
			...controllers.map(tryCatchWrapper)
		)
}

function getExtraCallbacks({ isProtected }) {
	const callbacks = []
	isProtected && callbacks.push(protectRoute)
	return callbacks
}

function Router(): ExpressRouter {
	const router = ExpressRouter()
	httpMethods.forEach((httpMethod: HTTPMethod) =>
		wrapHttpMethods({ httpMethod, router, isProtected: false })
	)
	return router
}

function ProtectedRouter(): ExpressRouter {
	const router = ExpressRouter()
	httpMethods.forEach((httpMethod: HTTPMethod) =>
		wrapHttpMethods({ httpMethod, router, isProtected: true })
	)
	return router
}

export { Router, ProtectedRouter }
