/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _graphql_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/graphql/server */ \"./src/graphql/server.js\");\n\n\n\n\nconst envFile =  false ? 0 : '.env.development';\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config({ path: envFile });\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()()\n\nasync function startServer () {\n  const server = await (0,_graphql_server__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(app);\n\n  app.listen({ port: 4000 }, () => {\n    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)\n  })\n}\n\nstartServer()//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QjtBQUNGO0FBQ3NCOztBQUVqRCxnQkFBZ0IsTUFBcUMsR0FBRyxDQUFpQjtBQUN6RSxvREFBYSxHQUFHLGVBQWU7OztBQUcvQixZQUFZLDhDQUFPOztBQUVuQjtBQUNBLHVCQUF1QiwyREFBa0I7O0FBRXpDLGVBQWUsWUFBWTtBQUMzQiwyREFBMkQsbUJBQW1CO0FBQzlFLEdBQUc7QUFDSDs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbm90ZS1hcGkvLi9zcmMvYXBwLmpzPzExMTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcydcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52J1xuaW1wb3J0IGNyZWF0ZUFwb2xsb1NlcnZlciBmcm9tICdAL2dyYXBocWwvc2VydmVyJ1xuXG5jb25zdCBlbnZGaWxlID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICcuZW52LnByb2R1Y3Rpb24nIDogJy5lbnYuZGV2ZWxvcG1lbnQnO1xuZG90ZW52LmNvbmZpZyh7IHBhdGg6IGVudkZpbGUgfSk7XG5cblxuY29uc3QgYXBwID0gZXhwcmVzcygpXG5cbmFzeW5jIGZ1bmN0aW9uIHN0YXJ0U2VydmVyICgpIHtcbiAgY29uc3Qgc2VydmVyID0gYXdhaXQgY3JlYXRlQXBvbGxvU2VydmVyKGFwcCk7XG5cbiAgYXBwLmxpc3Rlbih7IHBvcnQ6IDQwMDAgfSwgKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGDwn5qAIFNlcnZlciByZWFkeSBhdCBodHRwOi8vbG9jYWxob3N0OjQwMDAke3NlcnZlci5ncmFwaHFsUGF0aH1gKVxuICB9KVxufVxuXG5zdGFydFNlcnZlcigpIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n\n}");

/***/ }),

/***/ "./src/graphql/resolvers/folderResolver.js":
/*!*************************************************!*\
  !*** ./src/graphql/resolvers/folderResolver.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst folderResolvers = {\n  Query: {\n    getFolderById: async (_, { folderId }) => {\n      return {\n        _id: folderId,\n        data: 'Hello world' + folderId\n      };\n    },\n  },\n  Mutation: {\n    createFolder: async (_, { input }) => {\n      return folderController.createFolder(input);\n    },\n  },\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (folderResolvers);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9yZXNvbHZlcnMvZm9sZGVyUmVzb2x2ZXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQSwrQkFBK0IsVUFBVTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSw4QkFBOEIsT0FBTztBQUNyQztBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbm90ZS1hcGkvLi9zcmMvZ3JhcGhxbC9yZXNvbHZlcnMvZm9sZGVyUmVzb2x2ZXIuanM/ZjBjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBmb2xkZXJSZXNvbHZlcnMgPSB7XG4gIFF1ZXJ5OiB7XG4gICAgZ2V0Rm9sZGVyQnlJZDogYXN5bmMgKF8sIHsgZm9sZGVySWQgfSkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgX2lkOiBmb2xkZXJJZCxcbiAgICAgICAgZGF0YTogJ0hlbGxvIHdvcmxkJyArIGZvbGRlcklkXG4gICAgICB9O1xuICAgIH0sXG4gIH0sXG4gIE11dGF0aW9uOiB7XG4gICAgY3JlYXRlRm9sZGVyOiBhc3luYyAoXywgeyBpbnB1dCB9KSA9PiB7XG4gICAgICByZXR1cm4gZm9sZGVyQ29udHJvbGxlci5jcmVhdGVGb2xkZXIoaW5wdXQpO1xuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb2xkZXJSZXNvbHZlcnM7Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/graphql/resolvers/folderResolver.js\n\n}");

/***/ }),

/***/ "./src/graphql/resolvers/index.js":
/*!****************************************!*\
  !*** ./src/graphql/resolvers/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _folderResolver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folderResolver */ \"./src/graphql/resolvers/folderResolver.js\");\n\n\nconst resolvers = {\n  ..._folderResolver__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolvers);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9yZXNvbHZlcnMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBOEM7O0FBRTlDO0FBQ0EsS0FBSyx1REFBZTtBQUNwQjs7QUFFQSxpRUFBZSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ub3RlLWFwaS8uL3NyYy9ncmFwaHFsL3Jlc29sdmVycy9pbmRleC5qcz83YjA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmb2xkZXJSZXNvbHZlcnMgZnJvbSAnLi9mb2xkZXJSZXNvbHZlcidcblxuY29uc3QgcmVzb2x2ZXJzID0ge1xuICAuLi5mb2xkZXJSZXNvbHZlcnMsXG59O1xuXG5leHBvcnQgZGVmYXVsdCByZXNvbHZlcnM7Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/graphql/resolvers/index.js\n\n}");

/***/ }),

/***/ "./src/graphql/server.js":
/*!*******************************!*\
  !*** ./src/graphql/server.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\n/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _typeDefs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeDefs */ \"./src/graphql/typeDefs/index.js\");\n/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resolvers */ \"./src/graphql/resolvers/index.js\");\n\n\n\n// Create Apollo Server instance\nconst createApolloServer = async (app) => {\n  const server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n    typeDefs: _typeDefs__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    context: ({ req }) => {\n      // TODOS: Add context (e.g., authenticated user, request info)\n      // Example: const user = await authenticateUser(req.headers.authorization);\n      return { req }; // Pass request to resolvers (for auth, etc.)\n    },\n    introspection: \"development\" !== 'production', // Enable GraphQL Playground in dev\n  });\n\n  await server.start();\n  server.applyMiddleware({ app });\n\n  console.log(`Apollo Server running at ${server.graphqlPath}`);\n  return server;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createApolloServer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC9zZXJ2ZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0Q7QUFDcEI7QUFDRztBQUNuQztBQUNBO0FBQ0EscUJBQXFCLCtEQUFZO0FBQ2pDLFlBQVk7QUFDWixhQUFhO0FBQ2IsZ0JBQWdCLEtBQUs7QUFDckI7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixLQUFLO0FBQ0wsbUJBQW1CLGFBQW9CO0FBQ3ZDLEdBQUc7O0FBRUg7QUFDQSwyQkFBMkIsS0FBSzs7QUFFaEMsMENBQTBDLG1CQUFtQjtBQUM3RDtBQUNBOztBQUVBLGlFQUFlLGtCQUFrQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbm90ZS1hcGkvLi9zcmMvZ3JhcGhxbC9zZXJ2ZXIuanM/MGM2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9TZXJ2ZXIgfSBmcm9tICdhcG9sbG8tc2VydmVyLWV4cHJlc3MnXG5pbXBvcnQgdHlwZURlZnMgZnJvbScuL3R5cGVEZWZzJ1xuaW1wb3J0IHJlc29sdmVycyBmcm9tICcuL3Jlc29sdmVycydcbi8vIENyZWF0ZSBBcG9sbG8gU2VydmVyIGluc3RhbmNlXG5jb25zdCBjcmVhdGVBcG9sbG9TZXJ2ZXIgPSBhc3luYyAoYXBwKSA9PiB7XG4gIGNvbnN0IHNlcnZlciA9IG5ldyBBcG9sbG9TZXJ2ZXIoe1xuICAgIHR5cGVEZWZzLFxuICAgIHJlc29sdmVycyxcbiAgICBjb250ZXh0OiAoeyByZXEgfSkgPT4ge1xuICAgICAgLy8gVE9ET1M6IEFkZCBjb250ZXh0IChlLmcuLCBhdXRoZW50aWNhdGVkIHVzZXIsIHJlcXVlc3QgaW5mbylcbiAgICAgIC8vIEV4YW1wbGU6IGNvbnN0IHVzZXIgPSBhd2FpdCBhdXRoZW50aWNhdGVVc2VyKHJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24pO1xuICAgICAgcmV0dXJuIHsgcmVxIH07IC8vIFBhc3MgcmVxdWVzdCB0byByZXNvbHZlcnMgKGZvciBhdXRoLCBldGMuKVxuICAgIH0sXG4gICAgaW50cm9zcGVjdGlvbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgLy8gRW5hYmxlIEdyYXBoUUwgUGxheWdyb3VuZCBpbiBkZXZcbiAgfSk7XG5cbiAgYXdhaXQgc2VydmVyLnN0YXJ0KCk7XG4gIHNlcnZlci5hcHBseU1pZGRsZXdhcmUoeyBhcHAgfSk7XG5cbiAgY29uc29sZS5sb2coYEFwb2xsbyBTZXJ2ZXIgcnVubmluZyBhdCAke3NlcnZlci5ncmFwaHFsUGF0aH1gKTtcbiAgcmV0dXJuIHNlcnZlcjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFwb2xsb1NlcnZlcjsiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/graphql/server.js\n\n}");

/***/ }),

/***/ "./src/graphql/typeDefs/folderTypeDef.js":
/*!***********************************************!*\
  !*** ./src/graphql/typeDefs/folderTypeDef.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst folderTypeDefs = `#graphql\n  type Folder {\n    _id: ID!\n  }\n\n  input CreateFolderInput {\n    name: String!\n    parentId: ID\n    createdBy: ID!\n  }\n\n  input UpdateFolderInput {\n    name: String\n    parentId: ID\n  }\n\n  type FolderDeleteResponse {\n    message: String!\n  }\n\n  type Query {\n    getFolderById(folderId: ID!): Folder\n    getFolders(createdBy: ID!, parentId: ID): [Folder]\n  }\n\n  type Mutation {\n    createFolder(input: CreateFolderInput!): Folder\n    updateFolder(folderId: ID!, input: UpdateFolderInput!): Folder\n    deleteFolder(folderId: ID!): FolderDeleteResponse\n  }\n`;\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (folderTypeDefs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC90eXBlRGVmcy9mb2xkZXJUeXBlRGVmLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbm90ZS1hcGkvLi9zcmMvZ3JhcGhxbC90eXBlRGVmcy9mb2xkZXJUeXBlRGVmLmpzPzI5NWYiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9sZGVyVHlwZURlZnMgPSBgI2dyYXBocWxcbiAgdHlwZSBGb2xkZXIge1xuICAgIF9pZDogSUQhXG4gIH1cblxuICBpbnB1dCBDcmVhdGVGb2xkZXJJbnB1dCB7XG4gICAgbmFtZTogU3RyaW5nIVxuICAgIHBhcmVudElkOiBJRFxuICAgIGNyZWF0ZWRCeTogSUQhXG4gIH1cblxuICBpbnB1dCBVcGRhdGVGb2xkZXJJbnB1dCB7XG4gICAgbmFtZTogU3RyaW5nXG4gICAgcGFyZW50SWQ6IElEXG4gIH1cblxuICB0eXBlIEZvbGRlckRlbGV0ZVJlc3BvbnNlIHtcbiAgICBtZXNzYWdlOiBTdHJpbmchXG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICBnZXRGb2xkZXJCeUlkKGZvbGRlcklkOiBJRCEpOiBGb2xkZXJcbiAgICBnZXRGb2xkZXJzKGNyZWF0ZWRCeTogSUQhLCBwYXJlbnRJZDogSUQpOiBbRm9sZGVyXVxuICB9XG5cbiAgdHlwZSBNdXRhdGlvbiB7XG4gICAgY3JlYXRlRm9sZGVyKGlucHV0OiBDcmVhdGVGb2xkZXJJbnB1dCEpOiBGb2xkZXJcbiAgICB1cGRhdGVGb2xkZXIoZm9sZGVySWQ6IElEISwgaW5wdXQ6IFVwZGF0ZUZvbGRlcklucHV0ISk6IEZvbGRlclxuICAgIGRlbGV0ZUZvbGRlcihmb2xkZXJJZDogSUQhKTogRm9sZGVyRGVsZXRlUmVzcG9uc2VcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZm9sZGVyVHlwZURlZnM7Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/graphql/typeDefs/folderTypeDef.js\n\n}");

/***/ }),

/***/ "./src/graphql/typeDefs/index.js":
/*!***************************************!*\
  !*** ./src/graphql/typeDefs/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _folderTypeDef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./folderTypeDef */ \"./src/graphql/typeDefs/folderTypeDef.js\");\n\n\nconst typeDefs = [_folderTypeDef__WEBPACK_IMPORTED_MODULE_0__[\"default\"]];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typeDefs);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZ3JhcGhxbC90eXBlRGVmcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUEyQzs7QUFFM0Msa0JBQWtCLHNEQUFhOztBQUUvQixpRUFBZSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1ub3RlLWFwaS8uL3NyYy9ncmFwaHFsL3R5cGVEZWZzL2luZGV4LmpzPzMzOTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZvbGRlclR5cGVEZWYgZnJvbSAnLi9mb2xkZXJUeXBlRGVmJ1xuXG5jb25zdCB0eXBlRGVmcyA9IFtmb2xkZXJUeXBlRGVmXTtcblxuZXhwb3J0IGRlZmF1bHQgdHlwZURlZnM7Il0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/graphql/typeDefs/index.js\n\n}");

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("apollo-server-express");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;