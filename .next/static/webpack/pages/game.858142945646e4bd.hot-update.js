"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/game",{

/***/ "./components/Game/Player/players-manager.tsx":
/*!****************************************************!*\
  !*** ./components/Game/Player/players-manager.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlayersManager\": function() { return /* binding */ PlayersManager; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/Game/Player/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _this = undefined;\nvar PlayersManager = function(param) {\n    var players = param.players;\n    var _this1 = _this;\n    var managerClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"players-manager\"]), {\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: managerClass,\n        __source: {\n            fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Player/players-manager.tsx\",\n            lineNumber: 20,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"players-manager__head\"]),\n                __source: {\n                    fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Player/players-manager.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h3\", {\n                        __source: {\n                            fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Player/players-manager.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: \"Players\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"players-manager__head__count\"]),\n                        __source: {\n                            fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Player/players-manager.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 9\n                        },\n                        __self: _this,\n                        children: players ? players.length : 0\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"players-manager__body\"]),\n                __source: {\n                    fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Player/players-manager.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: players ? players.map(function(player) {\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"players-manager__person\"]),\n                        __source: {\n                            fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Player/players-manager.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        },\n                        __self: _this1,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"players-manager__person__title\"]),\n                            __source: {\n                                fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Player/players-manager.tsx\",\n                                lineNumber: 32,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: player.name\n                        })\n                    });\n                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"p\", {\n                    __source: {\n                        fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Player/players-manager.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    },\n                    __self: _this,\n                    children: \"No Players\"\n                })\n            })\n        ]\n    }));\n};\n_c = PlayersManager;\nvar _c;\n$RefreshReg$(_c, \"PlayersManager\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvUGxheWVyL3BsYXllcnMtbWFuYWdlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDVTtBQUNPOztBQVVuQyxHQUFLLENBQUNHLGNBQWMsR0FBbUMsUUFDekQsUUFDQyxDQUFDO1FBRExDLE9BQU8sU0FBUEEsT0FBTzs7SUFFUCxHQUFLLENBQUNDLFlBQVksR0FBR0osaURBQVUsQ0FBQ0MsK0VBQXlCLEVBQUcsQ0FBQztJQUM3RCxDQUFDO0lBRUQsTUFBTSx1RUFDSEksQ0FBRztRQUFDQyxTQUFTLEVBQUdGLFlBQVk7Ozs7Ozs7O2tGQUMxQkMsQ0FBRztnQkFBQ0MsU0FBUyxFQUFHTCxxRkFBK0I7Ozs7Ozs7O3lGQUM3Q00sQ0FBRTs7Ozs7OztrQ0FBQyxDQUVKOzt5RkFDQ0MsQ0FBQzt3QkFBQ0YsU0FBUyxFQUFHTCw0RkFBc0M7Ozs7Ozs7a0NBQ2pERSxPQUFPLEdBQUdBLE9BQU8sQ0FBQ00sTUFBTSxHQUFHLENBQUM7Ozs7aUZBR2pDSixDQUFHO2dCQUFDQyxTQUFTLEVBQUdMLHFGQUErQjs7Ozs7OzswQkFDNUNFLE9BQU8sR0FBR0EsT0FBTyxDQUFDTyxHQUFHLENBQUNDLFFBQVEsQ0FBUkEsTUFBTSxFQUFJLENBQUM7eUZBQ2hDTixDQUFHO3dCQUFDQyxTQUFTLEVBQUdMLHVGQUFpQzs7Ozs7Ozt1R0FDL0NPLENBQUM7NEJBQUNGLFNBQVMsRUFBR0wsOEZBQXdDOzs7Ozs7O3NDQUNuRFUsTUFBTSxDQUFDQyxJQUFJOzs7Z0JBR2xCLENBQUMseUVBQ0NKLENBQUM7Ozs7Ozs7OEJBQUMsQ0FBVTs7Ozs7QUFLdkIsQ0FBQztLQTdCWU4sY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0dhbWUvUGxheWVyL3BsYXllcnMtbWFuYWdlci50c3g/ZWU0YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IG1hbmFnZXIgZnJvbSAnLi9zdHlsZXMubW9kdWxlLnNjc3MnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHBsYXllcnM6IEFycmF5PFBsYXllcj5cbn1cblxuaW50ZXJmYWNlIFBsYXllciB7XG4gIG5hbWU6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgUGxheWVyc01hbmFnZXI6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7XG4gIHBsYXllcnNcbn0pID0+IHtcbiAgY29uc3QgbWFuYWdlckNsYXNzID0gY2xhc3NOYW1lcyhtYW5hZ2VyWydwbGF5ZXJzLW1hbmFnZXInXSwge1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgbWFuYWdlckNsYXNzIH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IG1hbmFnZXJbJ3BsYXllcnMtbWFuYWdlcl9faGVhZCddIH0+XG4gICAgICAgIDxoMz5cbiAgICAgICAgICBQbGF5ZXJzXG4gICAgICAgIDwvaDM+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17IG1hbmFnZXJbJ3BsYXllcnMtbWFuYWdlcl9faGVhZF9fY291bnQnXSB9PlxuICAgICAgICAgIHsgcGxheWVycyA/IHBsYXllcnMubGVuZ3RoIDogMCB9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBtYW5hZ2VyWydwbGF5ZXJzLW1hbmFnZXJfX2JvZHknXSB9PlxuICAgICAgICB7IHBsYXllcnMgPyBwbGF5ZXJzLm1hcChwbGF5ZXIgPT4geyhcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IG1hbmFnZXJbJ3BsYXllcnMtbWFuYWdlcl9fcGVyc29uJ10gfT5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17IG1hbmFnZXJbJ3BsYXllcnMtbWFuYWdlcl9fcGVyc29uX190aXRsZSddIH0+XG4gICAgICAgICAgICAgIHsgcGxheWVyLm5hbWUgfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfSkgOiAoXG4gICAgICAgICAgPHA+Tm8gUGxheWVyczwvcD5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjbGFzc05hbWVzIiwibWFuYWdlciIsIlBsYXllcnNNYW5hZ2VyIiwicGxheWVycyIsIm1hbmFnZXJDbGFzcyIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwicCIsImxlbmd0aCIsIm1hcCIsInBsYXllciIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Game/Player/players-manager.tsx\n");

/***/ })

});