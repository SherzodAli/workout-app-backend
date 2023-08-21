import {
	Router as ExpressRouter,
	NextFunction,
	Request,
	Response
} from 'express'

import { protectRoute } from '@middleware'

const HTTPMethods = [
	'all',
	'get',
	'post',
	'put',
	'delete',
	'patch',
	'options',
	'head'
]

type HTTPMethodType =
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

function wrapExpressController({
	router,
	HTTPMethod,
	isProtected
}: {
	router: ExpressRouter
	HTTPMethod: HTTPMethodType
	isProtected: boolean
}) {
	const originalMethod = router[HTTPMethod]
	router[HTTPMethod] = (path, ...controllers) =>
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
	HTTPMethods.forEach((HTTPMethod: HTTPMethodType) =>
		wrapExpressController({ router, HTTPMethod, isProtected: false })
	)
	return router
}

function ProtectedRouter(): ExpressRouter {
	const router = ExpressRouter()
	HTTPMethods.forEach((HTTPMethod: HTTPMethodType) =>
		wrapExpressController({ router, HTTPMethod, isProtected: true })
	)
	return router
}

export { Router, ProtectedRouter }
