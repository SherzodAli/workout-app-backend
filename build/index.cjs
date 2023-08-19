/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@faker-js/faker":
/*!**********************************!*\
  !*** external "@faker-js/faker" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@faker-js/faker");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "argon2":
/*!*************************!*\
  !*** external "argon2" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("argon2");

/***/ }),

/***/ "colors":
/*!*************************!*\
  !*** external "colors" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("colors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("morgan");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./app/config/constants.js":
/*!*********************************!*\
  !*** ./app/config/constants.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ACCESS_TOKEN: () => (/* binding */ ACCESS_TOKEN),\n/* harmony export */   NODE_ENV: () => (/* binding */ NODE_ENV),\n/* harmony export */   PORT: () => (/* binding */ PORT),\n/* harmony export */   TOKEN_EXPIRES_IN: () => (/* binding */ TOKEN_EXPIRES_IN),\n/* harmony export */   isDevelopment: () => (/* binding */ isDevelopment),\n/* harmony export */   isProduction: () => (/* binding */ isProduction)\n/* harmony export */ });\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n\r\n\r\ndotenv__WEBPACK_IMPORTED_MODULE_0__.config()\r\n\r\nconst NODE_ENV = \"development\"\r\nconst isProduction = NODE_ENV === 'production'\r\nconst isDevelopment = NODE_ENV === 'development'\r\nconst PORT = process.env.PORT ?? 5000\r\n\r\nconst ACCESS_TOKEN = process.env.ACCESS_TOKEN\r\nconst TOKEN_EXPIRES_IN = '10d' // 10 days\r\n\r\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/config/constants.js?");

/***/ }),

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! colors */ \"colors\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @config/constants.js */ \"./app/config/constants.js\");\n/* harmony import */ var _libraries_prisma__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @libraries/prisma */ \"./app/libraries/prisma/index.js\");\n/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @middleware */ \"./app/middleware/index.js\");\n/* harmony import */ var _modules_auth_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @modules/auth/api */ \"./app/modules/auth/api/index.js\");\n/* harmony import */ var _modules_exercise_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/exercise/api */ \"./app/modules/exercise/api/index.js\");\n/* harmony import */ var _modules_user_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @modules/user/api */ \"./app/modules/user/api/index.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst app = express__WEBPACK_IMPORTED_MODULE_1__()\r\nconst __dirname = path__WEBPACK_IMPORTED_MODULE_3__.resolve()\r\n\r\nasync function main() {\r\n\t_config_constants_js__WEBPACK_IMPORTED_MODULE_4__.isDevelopment && app.use(morgan__WEBPACK_IMPORTED_MODULE_2__('dev'))\r\n\r\n\tapp.use(express__WEBPACK_IMPORTED_MODULE_1__.json())\r\n\tapp.use('/uploads', express__WEBPACK_IMPORTED_MODULE_1__[\"static\"](path__WEBPACK_IMPORTED_MODULE_3__.join(__dirname, 'uploads')))\r\n\r\n\tapp.use('/api/auth', _modules_auth_api__WEBPACK_IMPORTED_MODULE_7__.authRouter)\r\n\tapp.use('/api/users', _modules_user_api__WEBPACK_IMPORTED_MODULE_9__.userRouter)\r\n\tapp.use('/api/exercises', _modules_exercise_api__WEBPACK_IMPORTED_MODULE_8__.exerciseRouter)\r\n\r\n\tapp.use(_middleware__WEBPACK_IMPORTED_MODULE_6__.notFound)\r\n\tapp.use(_middleware__WEBPACK_IMPORTED_MODULE_6__.errorHandler)\r\n\r\n\tapp.listen(_config_constants_js__WEBPACK_IMPORTED_MODULE_4__.PORT, () =>\r\n\t\tconsole.log(`🚀 Server is running on port ${_config_constants_js__WEBPACK_IMPORTED_MODULE_4__.PORT}`.blue.bold)\r\n\t)\r\n}\r\n\r\nmain()\r\n\t.catch(console.error)\r\n\t.finally(async () => await _libraries_prisma__WEBPACK_IMPORTED_MODULE_5__.prisma.$disconnect())\r\n\n\n//# sourceURL=webpack://workout-app/./app/index.js?");

/***/ }),

/***/ "./app/libraries/prisma/index.js":
/*!***************************************!*\
  !*** ./app/libraries/prisma/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* reexport safe */ _prisma_js__WEBPACK_IMPORTED_MODULE_0__.prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prisma.js */ \"./app/libraries/prisma/prisma.js\");\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/libraries/prisma/index.js?");

/***/ }),

/***/ "./app/libraries/prisma/prisma.js":
/*!****************************************!*\
  !*** ./app/libraries/prisma/prisma.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   prisma: () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n\r\n\r\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient()\r\n\n\n//# sourceURL=webpack://workout-app/./app/libraries/prisma/prisma.js?");

/***/ }),

/***/ "./app/libraries/router/index.js":
/*!***************************************!*\
  !*** ./app/libraries/router/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SafeRouter: () => (/* reexport safe */ _router_js__WEBPACK_IMPORTED_MODULE_0__.SafeRouter)\n/* harmony export */ });\n/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.js */ \"./app/libraries/router/router.js\");\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/libraries/router/index.js?");

/***/ }),

/***/ "./app/libraries/router/router.js":
/*!****************************************!*\
  !*** ./app/libraries/router/router.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SafeRouter: () => (/* binding */ SafeRouter)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n\r\n\r\nconst httpMethods = [\r\n\t'all',\r\n\t'get',\r\n\t'post',\r\n\t'put',\r\n\t'delete',\r\n\t'patch',\r\n\t'options',\r\n\t'head'\r\n]\r\n\r\nconst tryCatchWrapper = router => (req, res, next) => {\r\n\treturn Promise.resolve(router(req, res, next)).catch(next)\r\n}\r\n\r\nconst wrapHttpMethods = (httpMethod, router) => {\r\n\tconst originalMethod = router[httpMethod]\r\n\trouter[httpMethod] = (route, ...controllers) =>\r\n\t\toriginalMethod.call(router, route, ...controllers.map(tryCatchWrapper))\r\n}\r\n\r\nfunction SafeRouter() {\r\n\tconst router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)()\r\n\thttpMethods.forEach(method => wrapHttpMethods(method, router))\r\n\treturn router\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/libraries/router/router.js?");

/***/ }),

/***/ "./app/middleware/auth.middleware.js":
/*!*******************************************!*\
  !*** ./app/middleware/auth.middleware.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkToken: () => (/* binding */ checkToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/constants.js */ \"./app/config/constants.js\");\n/* harmony import */ var _libraries_prisma__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @libraries/prisma */ \"./app/libraries/prisma/index.js\");\n/* harmony import */ var _modules_user_domain_user_types_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/user/domain/user.types.js */ \"./app/modules/user/domain/user.types.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nasync function checkToken(req, res, next) {\r\n\tconst token = getTokenOrNull(req)\r\n\r\n\tif (!token) {\r\n\t\treturn res\r\n\t\t\t.status(401)\r\n\t\t\t.json({ message: 'Not authorized, no token provided' })\r\n\t}\r\n\r\n\tconst payload = getPayloadOrNull(token)\r\n\r\n\tif (!payload) {\r\n\t\treturn res\r\n\t\t\t.status(401)\r\n\t\t\t.json({ message: 'Not authorized, can’t decode the token' })\r\n\t}\r\n\r\n\tconst user = await _libraries_prisma__WEBPACK_IMPORTED_MODULE_2__.prisma.user.findUnique({\r\n\t\twhere: { id: payload?.userId },\r\n\t\tselect: _modules_user_domain_user_types_js__WEBPACK_IMPORTED_MODULE_3__.userFields\r\n\t})\r\n\r\n\tif (!user) {\r\n\t\treturn res.status(401).json({ message: 'Not authorized, invalid token' })\r\n\t}\r\n\r\n\treq.user = user\r\n\tnext()\r\n}\r\n\r\nfunction getTokenOrNull(req) {\r\n\tconst token = req.headers.authorization?.split(' ')?.at(1)\r\n\treturn token ? token : null\r\n}\r\n\r\nfunction getPayloadOrNull(token) {\r\n\ttry {\r\n\t\treturn jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.verify(token, _config_constants_js__WEBPACK_IMPORTED_MODULE_1__.ACCESS_TOKEN)\r\n\t} catch (e) {\r\n\t\treturn null\r\n\t}\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/middleware/auth.middleware.js?");

/***/ }),

/***/ "./app/middleware/error.middleware.js":
/*!********************************************!*\
  !*** ./app/middleware/error.middleware.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   errorHandler: () => (/* binding */ errorHandler)\n/* harmony export */ });\n/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @config/constants.js */ \"./app/config/constants.js\");\n\r\n\r\nfunction errorHandler(err, req, res, next) {\r\n\tconst statusCode = res.statusCode ?? 500\r\n\tres.status(statusCode).json({\r\n\t\tmessage: err?.message ?? 'Error',\r\n\t\tstack: _config_constants_js__WEBPACK_IMPORTED_MODULE_0__.isProduction ? null : err?.stack\r\n\t})\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/middleware/error.middleware.js?");

/***/ }),

/***/ "./app/middleware/index.js":
/*!*********************************!*\
  !*** ./app/middleware/index.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   checkToken: () => (/* reexport safe */ _auth_middleware_js__WEBPACK_IMPORTED_MODULE_0__.checkToken),\n/* harmony export */   errorHandler: () => (/* reexport safe */ _error_middleware_js__WEBPACK_IMPORTED_MODULE_2__.errorHandler),\n/* harmony export */   notFound: () => (/* reexport safe */ _not_found_middleware_js__WEBPACK_IMPORTED_MODULE_1__.notFound)\n/* harmony export */ });\n/* harmony import */ var _auth_middleware_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.middleware.js */ \"./app/middleware/auth.middleware.js\");\n/* harmony import */ var _not_found_middleware_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.middleware.js */ \"./app/middleware/not-found.middleware.js\");\n/* harmony import */ var _error_middleware_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.middleware.js */ \"./app/middleware/error.middleware.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/middleware/index.js?");

/***/ }),

/***/ "./app/middleware/not-found.middleware.js":
/*!************************************************!*\
  !*** ./app/middleware/not-found.middleware.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   notFound: () => (/* binding */ notFound)\n/* harmony export */ });\nfunction notFound(req, res, next) {\r\n\tconst error = new Error(`Not found — ${req.originalUrl}`)\r\n\tres.status(404)\r\n\tnext(error)\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/middleware/not-found.middleware.js?");

/***/ }),

/***/ "./app/modules/auth/api/auth.controller.js":
/*!*************************************************!*\
  !*** ./app/modules/auth/api/auth.controller.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authUser: () => (/* binding */ authUser),\n/* harmony export */   registerUser: () => (/* binding */ registerUser)\n/* harmony export */ });\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @faker-js/faker */ \"@faker-js/faker\");\n/* harmony import */ var _modules_auth_domain_password_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/auth/domain/password.js */ \"./app/modules/auth/domain/password.js\");\n/* harmony import */ var _modules_auth_domain_token_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/auth/domain/token.js */ \"./app/modules/auth/domain/token.js\");\n/* harmony import */ var _modules_user_data_access_user_db_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/user/data-access/user.db.js */ \"./app/modules/user/data-access/user.db.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n/**\r\n * @description Auth user\r\n * @route POST /api/auth/login\r\n * @access Public\r\n */\r\nasync function authUser(req, res) {\r\n\tconst { email, password } = req.body\r\n\r\n\tconst user = await (0,_modules_user_data_access_user_db_js__WEBPACK_IMPORTED_MODULE_3__.getFullUserByEmail)(email)\r\n\tconst isValidPassword = await (0,_modules_auth_domain_password_js__WEBPACK_IMPORTED_MODULE_1__.doesPasswordMatch)(user?.password, password)\r\n\r\n\tif (!user || !isValidPassword) {\r\n\t\treturn res.status(400).json({ message: 'Email or password is incorrect' })\r\n\t}\r\n\r\n\tres.json({ user, token: (0,_modules_auth_domain_token_js__WEBPACK_IMPORTED_MODULE_2__.generateToken)(user.id) })\r\n}\r\n\r\n/**\r\n * @description Register user\r\n * @route POST /api/auth/register\r\n * @access Public\r\n */\r\nasync function registerUser(req, res) {\r\n\tconst { email, password } = req.body\r\n\r\n\tconst user = await (0,_modules_user_data_access_user_db_js__WEBPACK_IMPORTED_MODULE_3__.getUserByEmail)(email)\r\n\r\n\tif (user) {\r\n\t\treturn res.status(400).json({ message: 'User already exists' })\r\n\t}\r\n\r\n\tconst newUser = await (0,_modules_user_data_access_user_db_js__WEBPACK_IMPORTED_MODULE_3__.createAndGetUser)({\r\n\t\temail,\r\n\t\tpassword: await (0,_modules_auth_domain_password_js__WEBPACK_IMPORTED_MODULE_1__.getHashedPassword)(password),\r\n\t\tname: _faker_js_faker__WEBPACK_IMPORTED_MODULE_0__.faker.person.fullName()\r\n\t})\r\n\r\n\tconst token = (0,_modules_auth_domain_token_js__WEBPACK_IMPORTED_MODULE_2__.generateToken)(newUser.id)\r\n\r\n\tres.json({ newUser, token })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/modules/auth/api/auth.controller.js?");

/***/ }),

/***/ "./app/modules/auth/api/auth.routes.js":
/*!*********************************************!*\
  !*** ./app/modules/auth/api/auth.routes.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authRouter: () => (/* binding */ authRouter)\n/* harmony export */ });\n/* harmony import */ var _libraries_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libraries/router */ \"./app/libraries/router/index.js\");\n/* harmony import */ var _auth_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.controller.js */ \"./app/modules/auth/api/auth.controller.js\");\n\r\n\r\n\r\n\r\nconst authRouter = (0,_libraries_router__WEBPACK_IMPORTED_MODULE_0__.SafeRouter)()\r\n\r\nauthRouter.post('/login', _auth_controller_js__WEBPACK_IMPORTED_MODULE_1__.authUser)\r\nauthRouter.post('/register', _auth_controller_js__WEBPACK_IMPORTED_MODULE_1__.registerUser)\r\n\r\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/modules/auth/api/auth.routes.js?");

/***/ }),

/***/ "./app/modules/auth/api/index.js":
/*!***************************************!*\
  !*** ./app/modules/auth/api/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authRouter: () => (/* reexport safe */ _auth_routes_js__WEBPACK_IMPORTED_MODULE_0__.authRouter)\n/* harmony export */ });\n/* harmony import */ var _auth_routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.routes.js */ \"./app/modules/auth/api/auth.routes.js\");\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/modules/auth/api/index.js?");

/***/ }),

/***/ "./app/modules/auth/domain/password.js":
/*!*********************************************!*\
  !*** ./app/modules/auth/domain/password.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   doesPasswordMatch: () => (/* binding */ doesPasswordMatch),\n/* harmony export */   getHashedPassword: () => (/* binding */ getHashedPassword)\n/* harmony export */ });\n/* harmony import */ var argon2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! argon2 */ \"argon2\");\n\r\n\r\nasync function getHashedPassword(password) {\r\n\treturn await (0,argon2__WEBPACK_IMPORTED_MODULE_0__.hash)(password)\r\n}\r\n\r\nasync function doesPasswordMatch(hash, password) {\r\n\treturn await (0,argon2__WEBPACK_IMPORTED_MODULE_0__.verify)(hash, password)\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/modules/auth/domain/password.js?");

/***/ }),

/***/ "./app/modules/auth/domain/token.js":
/*!******************************************!*\
  !*** ./app/modules/auth/domain/token.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateToken: () => (/* binding */ generateToken)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var _config_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @config/constants.js */ \"./app/config/constants.js\");\n\r\n\r\n\r\n\r\nfunction generateToken(userId) {\r\n\treturn jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__.sign({ userId }, _config_constants_js__WEBPACK_IMPORTED_MODULE_1__.ACCESS_TOKEN, { expiresIn: _config_constants_js__WEBPACK_IMPORTED_MODULE_1__.TOKEN_EXPIRES_IN })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/modules/auth/domain/token.js?");

/***/ }),

/***/ "./app/modules/exercise/api/exercise.controller.js":
/*!*********************************************************!*\
  !*** ./app/modules/exercise/api/exercise.controller.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createExercise: () => (/* binding */ createExercise),\n/* harmony export */   deleteExercise: () => (/* binding */ deleteExercise),\n/* harmony export */   getAllExercises: () => (/* binding */ getAllExercises),\n/* harmony export */   updateExercise: () => (/* binding */ updateExercise)\n/* harmony export */ });\n/* harmony import */ var _modules_exercise_data_access_exercise_db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/exercise/data-access/exercise.db.js */ \"./app/modules/exercise/data-access/exercise.db.js\");\n\r\n\r\n/**\r\n * @description Get all exercises\r\n * @route GET /api/exercises/\r\n * @access Private\r\n */\r\nasync function getAllExercises(req, res) {\r\n\tres.json(await (0,_modules_exercise_data_access_exercise_db_js__WEBPACK_IMPORTED_MODULE_0__.getExerciseList)())\r\n}\r\n\r\n/**\r\n * @description Create new exercise\r\n * @route POST /api/exercises/\r\n * @access Private\r\n */\r\nasync function createExercise(req, res) {\r\n\tconst { name, sets, iconPath } = req.body\r\n\tconst exercise = await (0,_modules_exercise_data_access_exercise_db_js__WEBPACK_IMPORTED_MODULE_0__.createAndGetExercise)({ name, sets, iconPath })\r\n\tres.json(exercise)\r\n}\r\n\r\n/**\r\n * @description Update exercise\r\n * @route PUT /api/exercises/:id\r\n * @access Private\r\n */\r\nasync function updateExercise(req, res) {\r\n\tconst { name, sets, iconPath } = req.body\r\n\r\n\tconst exercise = await (0,_modules_exercise_data_access_exercise_db_js__WEBPACK_IMPORTED_MODULE_0__.updateAndGetExercise)({\r\n\t\tid: +req.params.id,\r\n\t\tname,\r\n\t\tsets,\r\n\t\ticonPath\r\n\t})\r\n\r\n\tres.json(exercise)\r\n}\r\n\r\n/**\r\n * @description Delete exercise\r\n * @route DELETE /api/exercises/:id\r\n * @access Private\r\n */\r\nasync function deleteExercise(req, res) {\r\n\tconst exercise = await (0,_modules_exercise_data_access_exercise_db_js__WEBPACK_IMPORTED_MODULE_0__.deleteAndGetExercise)(+req.params.id)\r\n\tres.json(exercise)\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/modules/exercise/api/exercise.controller.js?");

/***/ }),

/***/ "./app/modules/exercise/api/exercise.routes.js":
/*!*****************************************************!*\
  !*** ./app/modules/exercise/api/exercise.routes.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   exerciseRouter: () => (/* binding */ exerciseRouter)\n/* harmony export */ });\n/* harmony import */ var _libraries_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libraries/router */ \"./app/libraries/router/index.js\");\n/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middleware */ \"./app/middleware/index.js\");\n/* harmony import */ var _exercise_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exercise.controller.js */ \"./app/modules/exercise/api/exercise.controller.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst exerciseRouter = (0,_libraries_router__WEBPACK_IMPORTED_MODULE_0__.SafeRouter)()\r\n\r\nexerciseRouter.get('/', _middleware__WEBPACK_IMPORTED_MODULE_1__.checkToken, _exercise_controller_js__WEBPACK_IMPORTED_MODULE_2__.getAllExercises)\r\nexerciseRouter.post('/', _middleware__WEBPACK_IMPORTED_MODULE_1__.checkToken, _exercise_controller_js__WEBPACK_IMPORTED_MODULE_2__.createExercise)\r\nexerciseRouter.put('/:id', _middleware__WEBPACK_IMPORTED_MODULE_1__.checkToken, _exercise_controller_js__WEBPACK_IMPORTED_MODULE_2__.updateExercise)\r\nexerciseRouter.delete('/:id', _middleware__WEBPACK_IMPORTED_MODULE_1__.checkToken, _exercise_controller_js__WEBPACK_IMPORTED_MODULE_2__.deleteExercise)\r\n\r\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/modules/exercise/api/exercise.routes.js?");

/***/ }),

/***/ "./app/modules/exercise/api/index.js":
/*!*******************************************!*\
  !*** ./app/modules/exercise/api/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   exerciseRouter: () => (/* reexport safe */ _exercise_routes_js__WEBPACK_IMPORTED_MODULE_0__.exerciseRouter)\n/* harmony export */ });\n/* harmony import */ var _exercise_routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exercise.routes.js */ \"./app/modules/exercise/api/exercise.routes.js\");\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/modules/exercise/api/index.js?");

/***/ }),

/***/ "./app/modules/exercise/data-access/exercise.db.js":
/*!*********************************************************!*\
  !*** ./app/modules/exercise/data-access/exercise.db.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAndGetExercise: () => (/* binding */ createAndGetExercise),\n/* harmony export */   deleteAndGetExercise: () => (/* binding */ deleteAndGetExercise),\n/* harmony export */   getExerciseList: () => (/* binding */ getExerciseList),\n/* harmony export */   updateAndGetExercise: () => (/* binding */ updateAndGetExercise)\n/* harmony export */ });\n/* harmony import */ var _libraries_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libraries/prisma */ \"./app/libraries/prisma/index.js\");\n\r\n\r\nasync function getExerciseList() {\r\n\treturn await _libraries_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.exercise.findMany({ orderBy: { id: 'desc' } })\r\n}\r\n\r\nasync function createAndGetExercise({ name, sets, iconPath }) {\r\n\treturn await _libraries_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.exercise.create({\r\n\t\tdata: { name, sets, iconPath }\r\n\t})\r\n}\r\n\r\nasync function updateAndGetExercise({ id, name, sets, iconPath }) {\r\n\treturn await _libraries_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.exercise.update({\r\n\t\twhere: { id },\r\n\t\tdata: { name, sets, iconPath }\r\n\t})\r\n}\r\n\r\nasync function deleteAndGetExercise(id) {\r\n\treturn await _libraries_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.exercise.delete({ where: { id } })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/modules/exercise/data-access/exercise.db.js?");

/***/ }),

/***/ "./app/modules/user/api/index.js":
/*!***************************************!*\
  !*** ./app/modules/user/api/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   userRouter: () => (/* reexport safe */ _user_routes_js__WEBPACK_IMPORTED_MODULE_0__.userRouter)\n/* harmony export */ });\n/* harmony import */ var _user_routes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.routes.js */ \"./app/modules/user/api/user.routes.js\");\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/modules/user/api/index.js?");

/***/ }),

/***/ "./app/modules/user/api/user.controller.js":
/*!*************************************************!*\
  !*** ./app/modules/user/api/user.controller.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   deleteUsers: () => (/* binding */ deleteUsers),\n/* harmony export */   getAllUsers: () => (/* binding */ getAllUsers),\n/* harmony export */   getUserProfile: () => (/* binding */ getUserProfile)\n/* harmony export */ });\n/* harmony import */ var _modules_user_data_access_user_db_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/user/data-access/user.db.js */ \"./app/modules/user/data-access/user.db.js\");\n\r\n\r\nasync function getAllUsers(req, res) {\r\n\tconst users = await (0,_modules_user_data_access_user_db_js__WEBPACK_IMPORTED_MODULE_0__.getUserList)()\r\n\tres.json(users)\r\n}\r\n\r\nasync function getUserProfile(req, res) {\r\n\tconst user = await (0,_modules_user_data_access_user_db_js__WEBPACK_IMPORTED_MODULE_0__.getUserById)(req.user.id)\r\n\tres.json(user)\r\n}\r\n\r\nasync function deleteUsers(req, res) {\r\n\tawait (0,_modules_user_data_access_user_db_js__WEBPACK_IMPORTED_MODULE_0__.deleteUserList)()\r\n\tres.json({ message: 'Users were deleted successfully! ✅' })\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/modules/user/api/user.controller.js?");

/***/ }),

/***/ "./app/modules/user/api/user.routes.js":
/*!*********************************************!*\
  !*** ./app/modules/user/api/user.routes.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   userRouter: () => (/* binding */ userRouter)\n/* harmony export */ });\n/* harmony import */ var _libraries_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libraries/router */ \"./app/libraries/router/index.js\");\n/* harmony import */ var _middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @middleware */ \"./app/middleware/index.js\");\n/* harmony import */ var _user_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.controller.js */ \"./app/modules/user/api/user.controller.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst userRouter = (0,_libraries_router__WEBPACK_IMPORTED_MODULE_0__.SafeRouter)()\r\n\r\nuserRouter.get('/', _user_controller_js__WEBPACK_IMPORTED_MODULE_2__.getAllUsers)\r\nuserRouter.delete('/', _user_controller_js__WEBPACK_IMPORTED_MODULE_2__.deleteUsers)\r\nuserRouter.get('/profile', _middleware__WEBPACK_IMPORTED_MODULE_1__.checkToken, _user_controller_js__WEBPACK_IMPORTED_MODULE_2__.getUserProfile)\r\n\r\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/modules/user/api/user.routes.js?");

/***/ }),

/***/ "./app/modules/user/data-access/user.db.js":
/*!*************************************************!*\
  !*** ./app/modules/user/data-access/user.db.js ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAndGetUser: () => (/* binding */ createAndGetUser),\n/* harmony export */   deleteUserList: () => (/* binding */ deleteUserList),\n/* harmony export */   getFullUserByEmail: () => (/* binding */ getFullUserByEmail),\n/* harmony export */   getUserByEmail: () => (/* binding */ getUserByEmail),\n/* harmony export */   getUserById: () => (/* binding */ getUserById),\n/* harmony export */   getUserList: () => (/* binding */ getUserList)\n/* harmony export */ });\n/* harmony import */ var _libraries_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @libraries/prisma */ \"./app/libraries/prisma/index.js\");\n/* harmony import */ var _modules_user_domain_user_types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/user/domain/user.types.js */ \"./app/modules/user/domain/user.types.js\");\n\r\n\r\n\r\n\r\nasync function getUserList() {\r\n\treturn await _libraries_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findMany()\r\n}\r\n\r\nasync function getUserById(id) {\r\n\treturn await _libraries_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\r\n\t\twhere: { id },\r\n\t\tselect: _modules_user_domain_user_types_js__WEBPACK_IMPORTED_MODULE_1__.userFields\r\n\t})\r\n}\r\n\r\nasync function getUserByEmail(email) {\r\n\treturn await _libraries_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\r\n\t\twhere: { email },\r\n\t\tselect: _modules_user_domain_user_types_js__WEBPACK_IMPORTED_MODULE_1__.userFields\r\n\t})\r\n}\r\n\r\nasync function getFullUserByEmail(email) {\r\n\treturn await _libraries_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({ where: { email } })\r\n}\r\n\r\nasync function deleteUserList() {\r\n\tawait _libraries_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.deleteMany()\r\n}\r\n\r\nasync function createAndGetUser({ email, password, name }) {\r\n\treturn await _libraries_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.user.create({\r\n\t\tdata: { email, password, name },\r\n\t\tselect: _modules_user_domain_user_types_js__WEBPACK_IMPORTED_MODULE_1__.userFields\r\n\t})\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/modules/user/data-access/user.db.js?");

/***/ }),

/***/ "./app/modules/user/domain/user.types.js":
/*!***********************************************!*\
  !*** ./app/modules/user/domain/user.types.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   userFields: () => (/* binding */ userFields)\n/* harmony export */ });\nconst userFields = {\r\n\tid: true,\r\n\tname: true,\r\n\temail: true,\r\n\timages: true,\r\n\tcreatedAt: true,\r\n\tupdatedAt: true\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://workout-app/./app/modules/user/domain/user.types.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app/index.js");
/******/ 	
/******/ })()
;