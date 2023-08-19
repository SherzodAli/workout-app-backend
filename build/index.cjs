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

/***/ "./src/apps/auth/api/auth.controller.ts":
/*!**********************************************!*\
  !*** ./src/apps/auth/api/auth.controller.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.registerUser = exports.authUser = void 0;\nvar password_1 = __webpack_require__(/*! @apps/auth/domain/password */ \"./src/apps/auth/domain/password.ts\");\nvar token_1 = __webpack_require__(/*! @apps/auth/domain/token */ \"./src/apps/auth/domain/token.ts\");\nvar user_db_1 = __webpack_require__(/*! @apps/user/data-access/user.db */ \"./src/apps/user/data-access/user.db.ts\");\nvar user_mock_1 = __webpack_require__(/*! @apps/user/data-access/user.mock */ \"./src/apps/user/data-access/user.mock.ts\");\n/**\n * @description Auth user\n * @route POST /api/auth/login\n * @access Public\n */\nfunction authUser(req, res) {\n    return __awaiter(this, void 0, void 0, function () {\n        var _a, email, password, user, isValidPassword;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    _a = req.body, email = _a.email, password = _a.password;\n                    return [4 /*yield*/, (0, user_db_1.getFullUserByEmail)(email)];\n                case 1:\n                    user = _b.sent();\n                    return [4 /*yield*/, (0, password_1.doesPasswordMatch)(user === null || user === void 0 ? void 0 : user.password, password)];\n                case 2:\n                    isValidPassword = _b.sent();\n                    if (!user || !isValidPassword) {\n                        return [2 /*return*/, res.status(400).json({ message: 'Email or password is incorrect' })];\n                    }\n                    res.json({ user: user, token: (0, token_1.generateToken)(user.id) });\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.authUser = authUser;\n/**\n * @description Register user\n * @route POST /api/auth/register\n * @access Public\n */\nfunction registerUser(req, res) {\n    return __awaiter(this, void 0, void 0, function () {\n        var _a, email, password, user, newUser, _b;\n        var _c;\n        return __generator(this, function (_d) {\n            switch (_d.label) {\n                case 0:\n                    _a = req.body, email = _a.email, password = _a.password;\n                    return [4 /*yield*/, (0, user_db_1.getUserByEmail)(email)];\n                case 1:\n                    user = _d.sent();\n                    if (user) {\n                        return [2 /*return*/, res.status(400).json({ message: 'User already exists' })];\n                    }\n                    _b = user_db_1.createAndGetUser;\n                    _c = {\n                        email: email\n                    };\n                    return [4 /*yield*/, (0, password_1.getHashedPassword)(password)];\n                case 2: return [4 /*yield*/, _b.apply(void 0, [(_c.password = _d.sent(),\n                            _c.name = (0, user_mock_1.getFakeFullName)(),\n                            _c)])];\n                case 3:\n                    newUser = _d.sent();\n                    res.json({ user: newUser, token: (0, token_1.generateToken)(newUser.id) });\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.registerUser = registerUser;\n\n\n//# sourceURL=webpack://workout-app/./src/apps/auth/api/auth.controller.ts?");

/***/ }),

/***/ "./src/apps/auth/api/auth.router.ts":
/*!******************************************!*\
  !*** ./src/apps/auth/api/auth.router.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.authRouter = void 0;\nvar router_1 = __webpack_require__(/*! @libraries/router */ \"./src/libraries/router/index.ts\");\nvar auth_controller_1 = __webpack_require__(/*! ./auth.controller */ \"./src/apps/auth/api/auth.controller.ts\");\nvar authRouter = (0, router_1.Router)();\nexports.authRouter = authRouter;\nauthRouter.post('/login', auth_controller_1.authUser);\nauthRouter.post('/register', auth_controller_1.registerUser);\n\n\n//# sourceURL=webpack://workout-app/./src/apps/auth/api/auth.router.ts?");

/***/ }),

/***/ "./src/apps/auth/api/index.ts":
/*!************************************!*\
  !*** ./src/apps/auth/api/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.authRouter = void 0;\nvar auth_router_1 = __webpack_require__(/*! ./auth.router */ \"./src/apps/auth/api/auth.router.ts\");\nObject.defineProperty(exports, \"authRouter\", ({ enumerable: true, get: function () { return auth_router_1.authRouter; } }));\n\n\n//# sourceURL=webpack://workout-app/./src/apps/auth/api/index.ts?");

/***/ }),

/***/ "./src/apps/auth/domain/password.ts":
/*!******************************************!*\
  !*** ./src/apps/auth/domain/password.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.doesPasswordMatch = exports.getHashedPassword = void 0;\nvar argon2_1 = __webpack_require__(/*! argon2 */ \"argon2\");\nfunction getHashedPassword(password) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, (0, argon2_1.hash)(password)];\n                case 1: return [2 /*return*/, _a.sent()];\n            }\n        });\n    });\n}\nexports.getHashedPassword = getHashedPassword;\nfunction doesPasswordMatch(hash, password) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, (0, argon2_1.verify)(hash, password)];\n                case 1: return [2 /*return*/, _a.sent()];\n            }\n        });\n    });\n}\nexports.doesPasswordMatch = doesPasswordMatch;\n\n\n//# sourceURL=webpack://workout-app/./src/apps/auth/domain/password.ts?");

/***/ }),

/***/ "./src/apps/auth/domain/token.ts":
/*!***************************************!*\
  !*** ./src/apps/auth/domain/token.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getPayloadOrNull = exports.generateToken = void 0;\nvar jsonwebtoken_1 = __importDefault(__webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\"));\nvar constants_1 = __webpack_require__(/*! @config/constants */ \"./src/config/constants.ts\");\nfunction generateToken(userId) {\n    return jsonwebtoken_1.default.sign({ userId: userId }, constants_1.ACCESS_TOKEN, { expiresIn: constants_1.TOKEN_EXPIRES_IN });\n}\nexports.generateToken = generateToken;\nfunction getPayloadOrNull(token) {\n    try {\n        return jsonwebtoken_1.default.verify(token, constants_1.ACCESS_TOKEN);\n    }\n    catch (e) {\n        return null;\n    }\n}\nexports.getPayloadOrNull = getPayloadOrNull;\n\n\n//# sourceURL=webpack://workout-app/./src/apps/auth/domain/token.ts?");

/***/ }),

/***/ "./src/apps/exercise/api/exercise.controller.ts":
/*!******************************************************!*\
  !*** ./src/apps/exercise/api/exercise.controller.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteExercise = exports.updateExercise = exports.createExercise = exports.getAllExercises = void 0;\nvar exercise_db_1 = __webpack_require__(/*! @apps/exercise/data-access/exercise.db */ \"./src/apps/exercise/data-access/exercise.db.ts\");\n/**\n * @description Get all exercises\n * @route GET /api/exercises/\n * @access Private\n */\nfunction getAllExercises(req, res) {\n    return __awaiter(this, void 0, void 0, function () {\n        var _a, _b;\n        return __generator(this, function (_c) {\n            switch (_c.label) {\n                case 0:\n                    _b = (_a = res).json;\n                    return [4 /*yield*/, (0, exercise_db_1.getExerciseList)()];\n                case 1:\n                    _b.apply(_a, [_c.sent()]);\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.getAllExercises = getAllExercises;\n/**\n * @description Create new exercise\n * @route POST /api/exercises/\n * @access Private\n */\nfunction createExercise(req, res) {\n    return __awaiter(this, void 0, void 0, function () {\n        var _a, name, sets, iconPath, exercise;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    _a = req.body, name = _a.name, sets = _a.sets, iconPath = _a.iconPath;\n                    return [4 /*yield*/, (0, exercise_db_1.createAndGetExercise)({ name: name, sets: sets, iconPath: iconPath })];\n                case 1:\n                    exercise = _b.sent();\n                    res.json(exercise);\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.createExercise = createExercise;\n/**\n * @description Update exercise\n * @route PUT /api/exercises/:id\n * @access Private\n */\nfunction updateExercise(req, res) {\n    return __awaiter(this, void 0, void 0, function () {\n        var _a, name, sets, iconPath, exercise;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    _a = req.body, name = _a.name, sets = _a.sets, iconPath = _a.iconPath;\n                    return [4 /*yield*/, (0, exercise_db_1.updateAndGetExercise)({\n                            id: +req.params.id,\n                            name: name,\n                            sets: sets,\n                            iconPath: iconPath\n                        })];\n                case 1:\n                    exercise = _b.sent();\n                    res.json(exercise);\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.updateExercise = updateExercise;\n/**\n * @description Delete exercise\n * @route DELETE /api/exercises/:id\n * @access Private\n */\nfunction deleteExercise(req, res) {\n    return __awaiter(this, void 0, void 0, function () {\n        var exercise;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, (0, exercise_db_1.deleteAndGetExercise)(+req.params.id)];\n                case 1:\n                    exercise = _a.sent();\n                    res.json(exercise);\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.deleteExercise = deleteExercise;\n\n\n//# sourceURL=webpack://workout-app/./src/apps/exercise/api/exercise.controller.ts?");

/***/ }),

/***/ "./src/apps/exercise/api/exercise.router.ts":
/*!**************************************************!*\
  !*** ./src/apps/exercise/api/exercise.router.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.exerciseRouter = void 0;\nvar router_1 = __webpack_require__(/*! @libraries/router */ \"./src/libraries/router/index.ts\");\nvar exercise_controller_1 = __webpack_require__(/*! ./exercise.controller */ \"./src/apps/exercise/api/exercise.controller.ts\");\nvar exerciseRouter = (0, router_1.ProtectedRouter)();\nexports.exerciseRouter = exerciseRouter;\nexerciseRouter.get('/', exercise_controller_1.getAllExercises);\nexerciseRouter.post('/', exercise_controller_1.createExercise);\nexerciseRouter.put('/:id', exercise_controller_1.updateExercise);\nexerciseRouter.delete('/:id', exercise_controller_1.deleteExercise);\n\n\n//# sourceURL=webpack://workout-app/./src/apps/exercise/api/exercise.router.ts?");

/***/ }),

/***/ "./src/apps/exercise/api/index.ts":
/*!****************************************!*\
  !*** ./src/apps/exercise/api/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.exerciseRouter = void 0;\nvar exercise_router_1 = __webpack_require__(/*! ./exercise.router */ \"./src/apps/exercise/api/exercise.router.ts\");\nObject.defineProperty(exports, \"exerciseRouter\", ({ enumerable: true, get: function () { return exercise_router_1.exerciseRouter; } }));\n\n\n//# sourceURL=webpack://workout-app/./src/apps/exercise/api/index.ts?");

/***/ }),

/***/ "./src/apps/exercise/data-access/exercise.db.ts":
/*!******************************************************!*\
  !*** ./src/apps/exercise/data-access/exercise.db.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteAndGetExercise = exports.updateAndGetExercise = exports.createAndGetExercise = exports.getExerciseList = void 0;\nvar prisma_1 = __webpack_require__(/*! @libraries/prisma */ \"./src/libraries/prisma/index.ts\");\nfunction getExerciseList() {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, prisma_1.prisma.exercise.findMany({ orderBy: { id: 'desc' } })];\n                case 1: return [2 /*return*/, _a.sent()];\n            }\n        });\n    });\n}\nexports.getExerciseList = getExerciseList;\nfunction createAndGetExercise(_a) {\n    var name = _a.name, sets = _a.sets, iconPath = _a.iconPath;\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0: return [4 /*yield*/, prisma_1.prisma.exercise.create({ data: { name: name, sets: sets, iconPath: iconPath } })];\n                case 1: return [2 /*return*/, _b.sent()];\n            }\n        });\n    });\n}\nexports.createAndGetExercise = createAndGetExercise;\nfunction updateAndGetExercise(_a) {\n    var id = _a.id, name = _a.name, sets = _a.sets, iconPath = _a.iconPath;\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0: return [4 /*yield*/, prisma_1.prisma.exercise.update({\n                        where: { id: id },\n                        data: { name: name, sets: sets, iconPath: iconPath }\n                    })];\n                case 1: return [2 /*return*/, _b.sent()];\n            }\n        });\n    });\n}\nexports.updateAndGetExercise = updateAndGetExercise;\nfunction deleteAndGetExercise(id) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, prisma_1.prisma.exercise.delete({ where: { id: id } })];\n                case 1: return [2 /*return*/, _a.sent()];\n            }\n        });\n    });\n}\nexports.deleteAndGetExercise = deleteAndGetExercise;\n\n\n//# sourceURL=webpack://workout-app/./src/apps/exercise/data-access/exercise.db.ts?");

/***/ }),

/***/ "./src/apps/user/api/index.ts":
/*!************************************!*\
  !*** ./src/apps/user/api/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.userRouter = void 0;\nvar user_router_1 = __webpack_require__(/*! ./user.router */ \"./src/apps/user/api/user.router.ts\");\nObject.defineProperty(exports, \"userRouter\", ({ enumerable: true, get: function () { return user_router_1.userRouter; } }));\n\n\n//# sourceURL=webpack://workout-app/./src/apps/user/api/index.ts?");

/***/ }),

/***/ "./src/apps/user/api/user.controller.ts":
/*!**********************************************!*\
  !*** ./src/apps/user/api/user.controller.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteUsers = exports.getUserProfile = exports.getAllUsers = void 0;\nvar user_db_1 = __webpack_require__(/*! @apps/user/data-access/user.db */ \"./src/apps/user/data-access/user.db.ts\");\n/**\n * @description Get all users\n * @route GET /api/users\n * @access Public\n */\nfunction getAllUsers(req, res) {\n    return __awaiter(this, void 0, void 0, function () {\n        var users;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, (0, user_db_1.getUserList)()];\n                case 1:\n                    users = _a.sent();\n                    res.json(users);\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.getAllUsers = getAllUsers;\n/**\n * @description Get user's profile\n * @route GET /api/users/profile\n * @access Private\n */\nfunction getUserProfile(req, res) {\n    return __awaiter(this, void 0, void 0, function () {\n        var user;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, (0, user_db_1.getUserById)(req.user.id)];\n                case 1:\n                    user = _a.sent();\n                    res.json(user);\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.getUserProfile = getUserProfile;\n/**\n * @description Delete all users\n * @route DELETE /api/users\n * @access Public\n */\nfunction deleteUsers(req, res) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, (0, user_db_1.deleteUserList)()];\n                case 1:\n                    _a.sent();\n                    res.json({ message: 'Users were deleted successfully! ✅' });\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.deleteUsers = deleteUsers;\n\n\n//# sourceURL=webpack://workout-app/./src/apps/user/api/user.controller.ts?");

/***/ }),

/***/ "./src/apps/user/api/user.router.ts":
/*!******************************************!*\
  !*** ./src/apps/user/api/user.router.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.userRouter = void 0;\nvar router_1 = __webpack_require__(/*! @libraries/router */ \"./src/libraries/router/index.ts\");\nvar user_controller_1 = __webpack_require__(/*! ./user.controller */ \"./src/apps/user/api/user.controller.ts\");\nvar userRouter = (0, router_1.ProtectedRouter)();\nexports.userRouter = userRouter;\nuserRouter.get('/', user_controller_1.getAllUsers);\nuserRouter.delete('/', user_controller_1.deleteUsers);\nuserRouter.get('/profile', user_controller_1.getUserProfile);\n\n\n//# sourceURL=webpack://workout-app/./src/apps/user/api/user.router.ts?");

/***/ }),

/***/ "./src/apps/user/data-access/user.db.ts":
/*!**********************************************!*\
  !*** ./src/apps/user/data-access/user.db.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteUserList = exports.createAndGetUser = exports.getFullUserByEmail = exports.getUserByEmail = exports.getUserById = exports.getUserList = void 0;\nvar prisma_1 = __webpack_require__(/*! @libraries/prisma */ \"./src/libraries/prisma/index.ts\");\nvar user_types_1 = __webpack_require__(/*! @apps/user/domain/user.types */ \"./src/apps/user/domain/user.types.ts\");\nfunction getUserList() {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, prisma_1.prisma.user.findMany()];\n                case 1: return [2 /*return*/, _a.sent()];\n            }\n        });\n    });\n}\nexports.getUserList = getUserList;\nfunction getUserById(id) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, prisma_1.prisma.user.findUnique({\n                        where: { id: id },\n                        select: user_types_1.userFields\n                    })];\n                case 1: return [2 /*return*/, _a.sent()];\n            }\n        });\n    });\n}\nexports.getUserById = getUserById;\nfunction getUserByEmail(email) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, prisma_1.prisma.user.findUnique({\n                        where: { email: email },\n                        select: user_types_1.userFields\n                    })];\n                case 1: return [2 /*return*/, _a.sent()];\n            }\n        });\n    });\n}\nexports.getUserByEmail = getUserByEmail;\nfunction getFullUserByEmail(email) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, prisma_1.prisma.user.findUnique({ where: { email: email } })];\n                case 1: return [2 /*return*/, _a.sent()];\n            }\n        });\n    });\n}\nexports.getFullUserByEmail = getFullUserByEmail;\nfunction deleteUserList() {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, prisma_1.prisma.user.deleteMany()];\n                case 1:\n                    _a.sent();\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.deleteUserList = deleteUserList;\nfunction createAndGetUser(_a) {\n    var email = _a.email, password = _a.password, name = _a.name;\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0: return [4 /*yield*/, prisma_1.prisma.user.create({\n                        data: { email: email, password: password, name: name },\n                        select: user_types_1.userFields\n                    })];\n                case 1: return [2 /*return*/, _b.sent()];\n            }\n        });\n    });\n}\nexports.createAndGetUser = createAndGetUser;\n\n\n//# sourceURL=webpack://workout-app/./src/apps/user/data-access/user.db.ts?");

/***/ }),

/***/ "./src/apps/user/data-access/user.mock.ts":
/*!************************************************!*\
  !*** ./src/apps/user/data-access/user.mock.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getFakeFullName = void 0;\nvar faker_1 = __webpack_require__(/*! @faker-js/faker */ \"@faker-js/faker\");\nfunction getFakeFullName() {\n    return faker_1.faker.person.fullName();\n}\nexports.getFakeFullName = getFakeFullName;\n\n\n//# sourceURL=webpack://workout-app/./src/apps/user/data-access/user.mock.ts?");

/***/ }),

/***/ "./src/apps/user/domain/user.types.ts":
/*!********************************************!*\
  !*** ./src/apps/user/domain/user.types.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.userFields = void 0;\nvar userFields = {\n    id: true,\n    name: true,\n    email: true,\n    images: true,\n    createdAt: true,\n    updatedAt: true\n};\nexports.userFields = userFields;\n\n\n//# sourceURL=webpack://workout-app/./src/apps/user/domain/user.types.ts?");

/***/ }),

/***/ "./src/apps/workout/api/index.ts":
/*!***************************************!*\
  !*** ./src/apps/workout/api/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.workoutRouter = void 0;\nvar workout_router_1 = __webpack_require__(/*! ./workout.router */ \"./src/apps/workout/api/workout.router.ts\");\nObject.defineProperty(exports, \"workoutRouter\", ({ enumerable: true, get: function () { return workout_router_1.workoutRouter; } }));\n\n\n//# sourceURL=webpack://workout-app/./src/apps/workout/api/index.ts?");

/***/ }),

/***/ "./src/apps/workout/api/workout.controller.ts":
/*!****************************************************!*\
  !*** ./src/apps/workout/api/workout.controller.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteWorkout = exports.updateWorkout = exports.createWorkout = exports.getWorkout = exports.getAllWorkouts = void 0;\nvar workout_db_1 = __webpack_require__(/*! @apps/workout/data-access/workout.db */ \"./src/apps/workout/data-access/workout.db.ts\");\nvar workout_mock_1 = __webpack_require__(/*! @apps/workout/data-access/workout.mock */ \"./src/apps/workout/data-access/workout.mock.ts\");\n/**\n * @description Get all workouts\n * @route GET /api/workouts\n * @access Private\n */\nfunction getAllWorkouts(req, res) {\n    return __awaiter(this, void 0, void 0, function () {\n        var _a, _b;\n        return __generator(this, function (_c) {\n            switch (_c.label) {\n                case 0:\n                    _b = (_a = res).json;\n                    return [4 /*yield*/, (0, workout_db_1.getWorkoutList)()];\n                case 1:\n                    _b.apply(_a, [_c.sent()]);\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.getAllWorkouts = getAllWorkouts;\n/**\n * @description Get workout\n * @route GET /api/workouts/:id\n * @access Private\n */\nfunction getWorkout(req, res) {\n    var _a;\n    return __awaiter(this, void 0, void 0, function () {\n        var workout, minutes;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0: return [4 /*yield*/, (0, workout_db_1.getWorkoutById)(+req.params.id)];\n                case 1:\n                    workout = _b.sent();\n                    minutes = (0, workout_mock_1.getWorkoutTimeLength)((_a = workout === null || workout === void 0 ? void 0 : workout.exercises) === null || _a === void 0 ? void 0 : _a.length);\n                    if (!workout) {\n                        return [2 /*return*/, res.json({ message: 'No workout found' })];\n                    }\n                    res.json(__assign(__assign({}, workout), { minutes: minutes }));\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.getWorkout = getWorkout;\n/**\n * @description Create workout\n * @route POST /api/workouts\n * @access Private\n */\nfunction createWorkout(req, res) {\n    return __awaiter(this, void 0, void 0, function () {\n        var _a, name, exerciseIds, workout;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    _a = req.body, name = _a.name, exerciseIds = _a.exerciseIds;\n                    return [4 /*yield*/, (0, workout_db_1.createAndGetWorkout)({ name: name, exerciseIds: exerciseIds })];\n                case 1:\n                    workout = _b.sent();\n                    res.json(workout);\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.createWorkout = createWorkout;\n/**\n * @description Update workout\n * @route PUT /api/workouts/:id\n * @access Private\n */\nfunction updateWorkout(req, res) {\n    return __awaiter(this, void 0, void 0, function () {\n        var _a, name, exerciseIds, workout;\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0:\n                    _a = req.body, name = _a.name, exerciseIds = _a.exerciseIds;\n                    return [4 /*yield*/, (0, workout_db_1.updateAndGetWorkout)({\n                            id: +req.params.id,\n                            name: name,\n                            exerciseIds: exerciseIds\n                        })];\n                case 1:\n                    workout = _b.sent();\n                    res.json(workout);\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.updateWorkout = updateWorkout;\n/**\n * @description Delete workout\n * @route DELETE /api/workouts/:id\n * @access Private\n */\nfunction deleteWorkout(req, res) {\n    return __awaiter(this, void 0, void 0, function () {\n        var workout;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, (0, workout_db_1.deleteAndGetWorkout)(+req.params.id)];\n                case 1:\n                    workout = _a.sent();\n                    res.json(workout);\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.deleteWorkout = deleteWorkout;\n\n\n//# sourceURL=webpack://workout-app/./src/apps/workout/api/workout.controller.ts?");

/***/ }),

/***/ "./src/apps/workout/api/workout.router.ts":
/*!************************************************!*\
  !*** ./src/apps/workout/api/workout.router.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.workoutRouter = void 0;\nvar router_1 = __webpack_require__(/*! @libraries/router */ \"./src/libraries/router/index.ts\");\nvar workout_controller_1 = __webpack_require__(/*! ./workout.controller */ \"./src/apps/workout/api/workout.controller.ts\");\nvar workoutRouter = (0, router_1.ProtectedRouter)();\nexports.workoutRouter = workoutRouter;\nworkoutRouter.get('/', workout_controller_1.getAllWorkouts);\nworkoutRouter.post('/', workout_controller_1.createWorkout);\nworkoutRouter.get('/:id', workout_controller_1.getWorkout);\nworkoutRouter.put('/:id', workout_controller_1.updateWorkout);\nworkoutRouter.delete('/:id', workout_controller_1.deleteWorkout);\n\n\n//# sourceURL=webpack://workout-app/./src/apps/workout/api/workout.router.ts?");

/***/ }),

/***/ "./src/apps/workout/data-access/workout.db.ts":
/*!****************************************************!*\
  !*** ./src/apps/workout/data-access/workout.db.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.deleteAndGetWorkout = exports.updateAndGetWorkout = exports.createAndGetWorkout = exports.getWorkoutById = exports.getWorkoutList = void 0;\nvar prisma_1 = __webpack_require__(/*! @libraries/prisma */ \"./src/libraries/prisma/index.ts\");\nfunction getWorkoutList() {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, prisma_1.prisma.workout.findMany({\n                        orderBy: { id: 'desc' },\n                        include: { exercises: true }\n                    })];\n                case 1: return [2 /*return*/, _a.sent()];\n            }\n        });\n    });\n}\nexports.getWorkoutList = getWorkoutList;\nfunction getWorkoutById(id) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, prisma_1.prisma.workout.findUnique({\n                        where: { id: id },\n                        include: { exercises: true }\n                    })];\n                case 1: return [2 /*return*/, _a.sent()];\n            }\n        });\n    });\n}\nexports.getWorkoutById = getWorkoutById;\nfunction createAndGetWorkout(_a) {\n    var name = _a.name, exerciseIds = _a.exerciseIds;\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0: return [4 /*yield*/, prisma_1.prisma.workout.create({\n                        data: { name: name, exercises: { connect: exerciseIds } }\n                    })];\n                case 1: return [2 /*return*/, _b.sent()];\n            }\n        });\n    });\n}\nexports.createAndGetWorkout = createAndGetWorkout;\nfunction updateAndGetWorkout(_a) {\n    var id = _a.id, name = _a.name, exerciseIds = _a.exerciseIds;\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_b) {\n            switch (_b.label) {\n                case 0: return [4 /*yield*/, prisma_1.prisma.workout.update({\n                        where: { id: id },\n                        data: { name: name, exercises: { set: exerciseIds } }\n                    })];\n                case 1: return [2 /*return*/, _b.sent()];\n            }\n        });\n    });\n}\nexports.updateAndGetWorkout = updateAndGetWorkout;\nfunction deleteAndGetWorkout(id) {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0: return [4 /*yield*/, prisma_1.prisma.workout.delete({ where: { id: id } })];\n                case 1: return [2 /*return*/, _a.sent()];\n            }\n        });\n    });\n}\nexports.deleteAndGetWorkout = deleteAndGetWorkout;\n\n\n//# sourceURL=webpack://workout-app/./src/apps/workout/data-access/workout.db.ts?");

/***/ }),

/***/ "./src/apps/workout/data-access/workout.mock.ts":
/*!******************************************************!*\
  !*** ./src/apps/workout/data-access/workout.mock.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getWorkoutTimeLength = void 0;\nvar RANDOM_COEFFICIENT = 3.7; // Can be any number\n// Returns a random number which we'll use as a\n// workout time length in minutes\nfunction getWorkoutTimeLength(numberOfExercises) {\n    return Math.ceil(numberOfExercises * RANDOM_COEFFICIENT);\n}\nexports.getWorkoutTimeLength = getWorkoutTimeLength;\n\n\n//# sourceURL=webpack://workout-app/./src/apps/workout/data-access/workout.mock.ts?");

/***/ }),

/***/ "./src/config/constants.ts":
/*!*********************************!*\
  !*** ./src/config/constants.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nvar _a;\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.TOKEN_EXPIRES_IN = exports.ACCESS_TOKEN = exports.isDevelopment = exports.isProduction = exports.NODE_ENV = exports.PORT = void 0;\nvar dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\ndotenv_1.default.config();\nvar NODE_ENV = \"development\";\nexports.NODE_ENV = NODE_ENV;\nvar isProduction = NODE_ENV === 'production';\nexports.isProduction = isProduction;\nvar isDevelopment = NODE_ENV === 'development';\nexports.isDevelopment = isDevelopment;\nvar PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 5000;\nexports.PORT = PORT;\nvar ACCESS_TOKEN = process.env.ACCESS_TOKEN;\nexports.ACCESS_TOKEN = ACCESS_TOKEN;\nvar TOKEN_EXPIRES_IN = '10d'; // 10 days\nexports.TOKEN_EXPIRES_IN = TOKEN_EXPIRES_IN;\n\n\n//# sourceURL=webpack://workout-app/./src/config/constants.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! colors */ \"colors\");\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar morgan_1 = __importDefault(__webpack_require__(/*! morgan */ \"morgan\"));\nvar path_1 = __importDefault(__webpack_require__(/*! path */ \"path\"));\nvar constants_1 = __webpack_require__(/*! @config/constants */ \"./src/config/constants.ts\");\nvar prisma_1 = __webpack_require__(/*! @libraries/prisma */ \"./src/libraries/prisma/index.ts\");\nvar _middleware_1 = __webpack_require__(/*! @middleware */ \"./src/middleware/index.ts\");\nvar api_1 = __webpack_require__(/*! @apps/auth/api */ \"./src/apps/auth/api/index.ts\");\nvar api_2 = __webpack_require__(/*! @apps/exercise/api */ \"./src/apps/exercise/api/index.ts\");\nvar api_3 = __webpack_require__(/*! @apps/user/api */ \"./src/apps/user/api/index.ts\");\nvar api_4 = __webpack_require__(/*! @apps/workout/api */ \"./src/apps/workout/api/index.ts\");\nvar app = (0, express_1.default)();\nvar __dirname = path_1.default.resolve();\nfunction main() {\n    return __awaiter(this, void 0, void 0, function () {\n        return __generator(this, function (_a) {\n            constants_1.isDevelopment && app.use((0, morgan_1.default)('dev'));\n            app.use(express_1.default.json());\n            app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));\n            app.use('/api/auth', api_1.authRouter);\n            app.use('/api/users', api_3.userRouter);\n            app.use('/api/exercises', api_2.exerciseRouter);\n            app.use('/api/workouts', api_4.workoutRouter);\n            app.use(_middleware_1.notFound);\n            app.use(_middleware_1.errorHandler);\n            app.listen(constants_1.PORT, function () {\n                return console.log(\"\\uD83D\\uDE80 Server is running on port \".concat(constants_1.PORT).blue.bold);\n            });\n            return [2 /*return*/];\n        });\n    });\n}\nmain()\n    .catch(console.error)\n    .finally(function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\n    switch (_a.label) {\n        case 0: return [4 /*yield*/, prisma_1.prisma.$disconnect()];\n        case 1: return [2 /*return*/, _a.sent()];\n    }\n}); }); });\n\n\n//# sourceURL=webpack://workout-app/./src/index.ts?");

/***/ }),

/***/ "./src/libraries/prisma/index.ts":
/*!***************************************!*\
  !*** ./src/libraries/prisma/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.prisma = void 0;\nvar prisma_1 = __webpack_require__(/*! ./prisma */ \"./src/libraries/prisma/prisma.ts\");\nObject.defineProperty(exports, \"prisma\", ({ enumerable: true, get: function () { return prisma_1.prisma; } }));\n\n\n//# sourceURL=webpack://workout-app/./src/libraries/prisma/index.ts?");

/***/ }),

/***/ "./src/libraries/prisma/prisma.ts":
/*!****************************************!*\
  !*** ./src/libraries/prisma/prisma.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.prisma = void 0;\nvar client_1 = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\nexports.prisma = new client_1.PrismaClient();\n\n\n//# sourceURL=webpack://workout-app/./src/libraries/prisma/prisma.ts?");

/***/ }),

/***/ "./src/libraries/router/index.ts":
/*!***************************************!*\
  !*** ./src/libraries/router/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProtectedRouter = exports.Router = void 0;\nvar router_1 = __webpack_require__(/*! ./router */ \"./src/libraries/router/router.ts\");\nObject.defineProperty(exports, \"Router\", ({ enumerable: true, get: function () { return router_1.Router; } }));\nObject.defineProperty(exports, \"ProtectedRouter\", ({ enumerable: true, get: function () { return router_1.ProtectedRouter; } }));\n\n\n//# sourceURL=webpack://workout-app/./src/libraries/router/index.ts?");

/***/ }),

/***/ "./src/libraries/router/router.ts":
/*!****************************************!*\
  !*** ./src/libraries/router/router.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ProtectedRouter = exports.Router = void 0;\nvar express_1 = __webpack_require__(/*! express */ \"express\");\nvar _middleware_1 = __webpack_require__(/*! @middleware */ \"./src/middleware/index.ts\");\nvar httpMethods = [\n    'all',\n    'get',\n    'post',\n    'put',\n    'delete',\n    'patch',\n    'options',\n    'head'\n];\nfunction tryCatchWrapper(router) {\n    return function (req, res, next) {\n        return Promise.resolve(router(req, res, next)).catch(next);\n    };\n}\nfunction wrapHttpMethods(_a) {\n    var httpMethod = _a.httpMethod, router = _a.router, isProtected = _a.isProtected;\n    var originalMethod = router[httpMethod];\n    router[httpMethod] = function (path) {\n        var controllers = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            controllers[_i - 1] = arguments[_i];\n        }\n        return originalMethod.call.apply(originalMethod, __spreadArray(__spreadArray([router,\n            path], getExtraCallbacks({ isProtected: isProtected }), false), controllers.map(tryCatchWrapper), false));\n    };\n}\nfunction getExtraCallbacks(_a) {\n    var isProtected = _a.isProtected;\n    var callbacks = [];\n    isProtected && callbacks.push(_middleware_1.protectRoute);\n    return callbacks;\n}\nfunction Router() {\n    var router = (0, express_1.Router)();\n    httpMethods.forEach(function (httpMethod) {\n        return wrapHttpMethods({ httpMethod: httpMethod, router: router, isProtected: false });\n    });\n    return router;\n}\nexports.Router = Router;\nfunction ProtectedRouter() {\n    var router = (0, express_1.Router)();\n    httpMethods.forEach(function (httpMethod) {\n        return wrapHttpMethods({ httpMethod: httpMethod, router: router, isProtected: true });\n    });\n    return router;\n}\nexports.ProtectedRouter = ProtectedRouter;\n\n\n//# sourceURL=webpack://workout-app/./src/libraries/router/router.ts?");

/***/ }),

/***/ "./src/middleware/auth.middleware.ts":
/*!*******************************************!*\
  !*** ./src/middleware/auth.middleware.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.protectRoute = void 0;\nvar token_1 = __webpack_require__(/*! @apps/auth/domain/token */ \"./src/apps/auth/domain/token.ts\");\nvar user_db_1 = __webpack_require__(/*! @apps/user/data-access/user.db */ \"./src/apps/user/data-access/user.db.ts\");\nfunction protectRoute(req, res, next) {\n    return __awaiter(this, void 0, void 0, function () {\n        var token, payload, user;\n        return __generator(this, function (_a) {\n            switch (_a.label) {\n                case 0:\n                    token = getTokenOrNull(req);\n                    if (!token) {\n                        return [2 /*return*/, res\n                                .status(401)\n                                .json({ message: 'Not authorized, no token provided' })];\n                    }\n                    payload = (0, token_1.getPayloadOrNull)(token);\n                    if (!payload) {\n                        return [2 /*return*/, res\n                                .status(401)\n                                .json({ message: 'Not authorized, can’t decode the token' })];\n                    }\n                    return [4 /*yield*/, (0, user_db_1.getUserById)(payload === null || payload === void 0 ? void 0 : payload.userId)];\n                case 1:\n                    user = _a.sent();\n                    if (!user) {\n                        return [2 /*return*/, res.status(401).json({ message: 'Not authorized, invalid token' })];\n                    }\n                    req.user = user;\n                    next();\n                    return [2 /*return*/];\n            }\n        });\n    });\n}\nexports.protectRoute = protectRoute;\nfunction getTokenOrNull(req) {\n    var _a, _b;\n    var token = (_b = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')) === null || _b === void 0 ? void 0 : _b.at(1);\n    return token ? token : null;\n}\n\n\n//# sourceURL=webpack://workout-app/./src/middleware/auth.middleware.ts?");

/***/ }),

/***/ "./src/middleware/error.middleware.ts":
/*!********************************************!*\
  !*** ./src/middleware/error.middleware.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.errorHandler = void 0;\nvar constants_1 = __webpack_require__(/*! @config/constants */ \"./src/config/constants.ts\");\nfunction errorHandler(error, req, res, next) {\n    var _a;\n    res.json({\n        message: (_a = error.message) !== null && _a !== void 0 ? _a : 'Error',\n        stack: constants_1.isProduction ? null : error === null || error === void 0 ? void 0 : error.stack\n    });\n}\nexports.errorHandler = errorHandler;\n\n\n//# sourceURL=webpack://workout-app/./src/middleware/error.middleware.ts?");

/***/ }),

/***/ "./src/middleware/index.ts":
/*!*********************************!*\
  !*** ./src/middleware/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.errorHandler = exports.notFound = exports.protectRoute = void 0;\nvar auth_middleware_1 = __webpack_require__(/*! ./auth.middleware */ \"./src/middleware/auth.middleware.ts\");\nObject.defineProperty(exports, \"protectRoute\", ({ enumerable: true, get: function () { return auth_middleware_1.protectRoute; } }));\nvar not_found_middleware_1 = __webpack_require__(/*! ./not-found.middleware */ \"./src/middleware/not-found.middleware.ts\");\nObject.defineProperty(exports, \"notFound\", ({ enumerable: true, get: function () { return not_found_middleware_1.notFound; } }));\nvar error_middleware_1 = __webpack_require__(/*! ./error.middleware */ \"./src/middleware/error.middleware.ts\");\nObject.defineProperty(exports, \"errorHandler\", ({ enumerable: true, get: function () { return error_middleware_1.errorHandler; } }));\n\n\n//# sourceURL=webpack://workout-app/./src/middleware/index.ts?");

/***/ }),

/***/ "./src/middleware/not-found.middleware.ts":
/*!************************************************!*\
  !*** ./src/middleware/not-found.middleware.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.notFound = void 0;\nfunction notFound(req, res, next) {\n    var error = new Error(\"Not found \\u2014 \".concat(req.originalUrl));\n    res.status(404);\n    next(error);\n}\nexports.notFound = notFound;\n\n\n//# sourceURL=webpack://workout-app/./src/middleware/not-found.middleware.ts?");

/***/ }),

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;