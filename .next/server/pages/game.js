/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/game";
exports.ids = ["pages/game"];
exports.modules = {

/***/ "./components/Game/Cards/styles.module.scss":
/*!**************************************************!*\
  !*** ./components/Game/Cards/styles.module.scss ***!
  \**************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"cardstack\": \"styles_cardstack__wUryi\",\n\t\"cardstack__card\": \"styles_cardstack__card__ebtq7\",\n\t\"cardstack__question\": \"styles_cardstack__question__UBST5\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvQ2FyZHMvc3R5bGVzLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2kta25ldy1pLWtub3cteW91Ly4vY29tcG9uZW50cy9HYW1lL0NhcmRzL3N0eWxlcy5tb2R1bGUuc2Nzcz84ODc0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhcmRzdGFja1wiOiBcInN0eWxlc19jYXJkc3RhY2tfX3dVcnlpXCIsXG5cdFwiY2FyZHN0YWNrX19jYXJkXCI6IFwic3R5bGVzX2NhcmRzdGFja19fY2FyZF9fZWJ0cTdcIixcblx0XCJjYXJkc3RhY2tfX3F1ZXN0aW9uXCI6IFwic3R5bGVzX2NhcmRzdGFja19fcXVlc3Rpb25fX1VCU1Q1XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Game/Cards/styles.module.scss\n");

/***/ }),

/***/ "./styles/pages/game.module.scss":
/*!***************************************!*\
  !*** ./styles/pages/game.module.scss ***!
  \***************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"game\": \"game_game__JIwrl\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvcGFnZXMvZ2FtZS5tb2R1bGUuc2Nzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2kta25ldy1pLWtub3cteW91Ly4vc3R5bGVzL3BhZ2VzL2dhbWUubW9kdWxlLnNjc3M/N2Q4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJnYW1lXCI6IFwiZ2FtZV9nYW1lX19KSXdybFwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/pages/game.module.scss\n");

/***/ }),

/***/ "./components/Game/Cards/card.tsx":
/*!****************************************!*\
  !*** ./components/Game/Cards/card.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/Game/Cards/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Card = ({ children , background , alignment ='justifyCenter' , isCard =true  })=>{\n    const cardClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().card), {\n        [(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"card--transparent\"])]: background === 'transparent',\n        [(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"card--white\"])]: background === 'white',\n        [(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"card--no-card-style\"])]: !isCard,\n        [(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default()[\"card--justify-center\"])]: alignment === 'justifyCenter'\n    });\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: cardClass,\n        __source: {\n            fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Cards/card.tsx\",\n            lineNumber: 26,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: children\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvQ2FyZHMvY2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF5QjtBQUNVO0FBQ007QUFTbEMsS0FBSyxDQUFDRyxJQUFJLElBQW9DLENBQUMsQ0FDcERDLFFBQVEsR0FDUkMsVUFBVSxHQUNWQyxTQUFTLEVBQUcsQ0FBZSxpQkFDM0JDLE1BQU0sRUFBRyxJQUFJLEVBQ2YsQ0FBQyxHQUFLLENBQUM7SUFDTCxLQUFLLENBQUNDLFNBQVMsR0FBR1AsaURBQVUsQ0FBQ0MsaUVBQVcsRUFBRSxDQUFDO1NBQ3hDQSxpRkFBMEIsR0FBSUcsVUFBVSxLQUFLLENBQWE7U0FDMURILDJFQUFvQixHQUFJRyxVQUFVLEtBQUssQ0FBTztTQUM5Q0gsbUZBQTRCLElBQUtLLE1BQU07U0FDdkNMLG9GQUE2QixHQUFJSSxTQUFTLEtBQUssQ0FBZTtJQUNqRSxDQUFDO0lBRUQsTUFBTSxzRUFDSEksQ0FBRztRQUFDQyxTQUFTLEVBQUdILFNBQVM7Ozs7Ozs7a0JBQ3RCSixRQUFROztBQUdoQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaS1rbmV3LWkta25vdy15b3UvLi9jb21wb25lbnRzL0dhbWUvQ2FyZHMvY2FyZC50c3g/Yzg0YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3N0eWxlcy5tb2R1bGUuc2NzcydcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgYmFja2dyb3VuZD86IHN0cmluZyxcbiAgYWxpZ25tZW50Pzogc3RyaW5nLFxuICBpc0NhcmQ/OiBib29sZWFuLFxuICBjaGlsZHJlbjogYW55LFxufVxuXG5leHBvcnQgY29uc3QgQ2FyZDogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGJhY2tncm91bmQsXG4gIGFsaWdubWVudCA9ICdqdXN0aWZ5Q2VudGVyJyxcbiAgaXNDYXJkID0gdHJ1ZVxufSkgPT4ge1xuICBjb25zdCBjYXJkQ2xhc3MgPSBjbGFzc05hbWVzKHN0eWxlcy5jYXJkLCB7XG4gICAgW3N0eWxlc1snY2FyZC0tdHJhbnNwYXJlbnQnXV06IGJhY2tncm91bmQgPT09ICd0cmFuc3BhcmVudCcsXG4gICAgW3N0eWxlc1snY2FyZC0td2hpdGUnXV06IGJhY2tncm91bmQgPT09ICd3aGl0ZScsXG4gICAgW3N0eWxlc1snY2FyZC0tbm8tY2FyZC1zdHlsZSddXTogIWlzQ2FyZCxcbiAgICBbc3R5bGVzWydjYXJkLS1qdXN0aWZ5LWNlbnRlciddXTogYWxpZ25tZW50ID09PSAnanVzdGlmeUNlbnRlcicsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9eyBjYXJkQ2xhc3MgfT5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJjbGFzc05hbWVzIiwic3R5bGVzIiwiQ2FyZCIsImNoaWxkcmVuIiwiYmFja2dyb3VuZCIsImFsaWdubWVudCIsImlzQ2FyZCIsImNhcmRDbGFzcyIsImNhcmQiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Game/Cards/card.tsx\n");

/***/ }),

/***/ "./components/Game/Cards/cardstack.tsx":
/*!*********************************************!*\
  !*** ./components/Game/Cards/cardstack.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CardStack\": () => (/* binding */ CardStack)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"./components/Game/Cards/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst CardStack = ({ question  })=>{\n    const cardClass = classnames__WEBPACK_IMPORTED_MODULE_2___default()((_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardstack));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        className: cardClass,\n        __source: {\n            fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Cards/cardstack.tsx\",\n            lineNumber: 14,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardstack__question),\n                __source: {\n                    fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Cards/cardstack.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 7\n                },\n                __self: undefined,\n                children: question\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardstack__card),\n                __source: {\n                    fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Cards/cardstack.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardstack__card),\n                __source: {\n                    fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Cards/cardstack.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardstack__card),\n                __source: {\n                    fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Cards/cardstack.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardstack__card),\n                __source: {\n                    fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Cards/cardstack.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 7\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardstack__card),\n                __source: {\n                    fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Cards/cardstack.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 7\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardstack__card),\n                __source: {\n                    fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Cards/cardstack.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 7\n                },\n                __self: undefined\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().cardstack__card),\n                __source: {\n                    fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/components/Game/Cards/cardstack.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                },\n                __self: undefined\n            })\n        ]\n    }));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvQ2FyZHMvY2FyZHN0YWNrLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ1U7QUFDTTtBQU1sQyxLQUFLLENBQUNHLFNBQVMsSUFBb0MsQ0FBQyxDQUN6REMsUUFBUSxFQUNWLENBQUMsR0FBSyxDQUFDO0lBQ0wsS0FBSyxDQUFDQyxTQUFTLEdBQUdKLGlEQUFVLENBQUNDLHNFQUFnQjtJQUM3QyxNQUFNLHVFQUNISyxDQUFHO1FBQUNDLFNBQVMsRUFBR0gsU0FBUzs7Ozs7Ozs7aUZBQ3ZCRSxDQUFHO2dCQUFDQyxTQUFTLEVBQUdOLGdGQUE0Qjs7Ozs7OzswQkFDekNFLFFBQVE7O2lGQUVYRyxDQUFHO2dCQUFDQyxTQUFTLEVBQUdOLDRFQUF3Qjs7Ozs7Ozs7aUZBQ3hDSyxDQUFHO2dCQUFDQyxTQUFTLEVBQUdOLDRFQUF3Qjs7Ozs7Ozs7aUZBQ3hDSyxDQUFHO2dCQUFDQyxTQUFTLEVBQUdOLDRFQUF3Qjs7Ozs7Ozs7aUZBQ3hDSyxDQUFHO2dCQUFDQyxTQUFTLEVBQUdOLDRFQUF3Qjs7Ozs7Ozs7aUZBQ3hDSyxDQUFHO2dCQUFDQyxTQUFTLEVBQUdOLDRFQUF3Qjs7Ozs7Ozs7aUZBQ3hDSyxDQUFHO2dCQUFDQyxTQUFTLEVBQUdOLDRFQUF3Qjs7Ozs7Ozs7aUZBQ3hDSyxDQUFHO2dCQUFDQyxTQUFTLEVBQUdOLDRFQUF3Qjs7Ozs7Ozs7OztBQUcvQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaS1rbmV3LWkta25vdy15b3UvLi9jb21wb25lbnRzL0dhbWUvQ2FyZHMvY2FyZHN0YWNrLnRzeD9hYWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc3R5bGVzLm1vZHVsZS5zY3NzJ1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICBxdWVzdGlvbj86IHN0cmluZyxcbn1cblxuZXhwb3J0IGNvbnN0IENhcmRTdGFjazogUmVhY3QuRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHtcbiAgcXVlc3Rpb25cbn0pID0+IHtcbiAgY29uc3QgY2FyZENsYXNzID0gY2xhc3NOYW1lcyhzdHlsZXMuY2FyZHN0YWNrKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17IGNhcmRDbGFzcyB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXNbJ2NhcmRzdGFja19fcXVlc3Rpb24nXSB9PlxuICAgICAgICB7IHF1ZXN0aW9uIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXNbJ2NhcmRzdGFja19fY2FyZCddIH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzWydjYXJkc3RhY2tfX2NhcmQnXSB9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlc1snY2FyZHN0YWNrX19jYXJkJ10gfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXNbJ2NhcmRzdGFja19fY2FyZCddIH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzWydjYXJkc3RhY2tfX2NhcmQnXSB9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17IHN0eWxlc1snY2FyZHN0YWNrX19jYXJkJ10gfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9eyBzdHlsZXNbJ2NhcmRzdGFja19fY2FyZCddIH0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiY2xhc3NOYW1lcyIsInN0eWxlcyIsIkNhcmRTdGFjayIsInF1ZXN0aW9uIiwiY2FyZENsYXNzIiwiY2FyZHN0YWNrIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Game/Cards/cardstack.tsx\n");

/***/ }),

/***/ "./components/Game/Cards/index.tsx":
/*!*****************************************!*\
  !*** ./components/Game/Cards/index.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* reexport safe */ _card__WEBPACK_IMPORTED_MODULE_0__.Card),\n/* harmony export */   \"CardStack\": () => (/* reexport safe */ _cardstack__WEBPACK_IMPORTED_MODULE_1__.CardStack)\n/* harmony export */ });\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./components/Game/Cards/card.tsx\");\n/* harmony import */ var _cardstack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardstack */ \"./components/Game/Cards/cardstack.tsx\");\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0dhbWUvQ2FyZHMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBNkI7QUFDVTtBQUk1QiIsInNvdXJjZXMiOlsid2VicGFjazovL2kta25ldy1pLWtub3cteW91Ly4vY29tcG9uZW50cy9HYW1lL0NhcmRzL2luZGV4LnRzeD82ZTQ2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQgfSBmcm9tICcuL2NhcmQnXG5pbXBvcnQgeyBDYXJkU3RhY2sgfSBmcm9tICcuL2NhcmRzdGFjaydcblxuZXhwb3J0IHtcbiAgQ2FyZCxcbiAgQ2FyZFN0YWNrXG59OyJdLCJuYW1lcyI6WyJDYXJkIiwiQ2FyZFN0YWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Game/Cards/index.tsx\n");

/***/ }),

/***/ "./content/dummylist.js":
/*!******************************!*\
  !*** ./content/dummylist.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DATA\": () => (/* binding */ DATA)\n/* harmony export */ });\nconst DATA = {\n    \"questions\": {\n        \"category\": [\n            {\n                \"general\": [\n                    \"Who is your hero?\",\n                    \"If you could live anywhere, where would it be?\",\n                    \"What is your biggest fear?\",\n                    \"What is your favorite family vacation?\",\n                    \"What would you change about yourself if you could?\",\n                    \"What really makes you angry?\"\n                ]\n            }\n        ]\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZW50L2R1bW15bGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sS0FBSyxDQUFDQSxJQUFJLEdBQUcsQ0FBQztJQUNuQixDQUFXLFlBQUUsQ0FBQztRQUNaLENBQVUsV0FBRSxDQUFDO1lBQ1gsQ0FBQztnQkFDQyxDQUFTLFVBQUUsQ0FBQztvQkFDVixDQUFtQjtvQkFDbkIsQ0FBZ0Q7b0JBQ2hELENBQTRCO29CQUM1QixDQUF3QztvQkFDeEMsQ0FBb0Q7b0JBQ3BELENBQThCO2dCQUNoQyxDQUFDO1lBQ0gsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2kta25ldy1pLWtub3cteW91Ly4vY29udGVudC9kdW1teWxpc3QuanM/MDg2YyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgREFUQSA9IHtcbiAgXCJxdWVzdGlvbnNcIjoge1xuICAgIFwiY2F0ZWdvcnlcIjogW1xuICAgICAge1xuICAgICAgICBcImdlbmVyYWxcIjogW1xuICAgICAgICAgIFwiV2hvIGlzIHlvdXIgaGVybz9cIixcbiAgICAgICAgICBcIklmIHlvdSBjb3VsZCBsaXZlIGFueXdoZXJlLCB3aGVyZSB3b3VsZCBpdCBiZT9cIixcbiAgICAgICAgICBcIldoYXQgaXMgeW91ciBiaWdnZXN0IGZlYXI/XCIsXG4gICAgICAgICAgXCJXaGF0IGlzIHlvdXIgZmF2b3JpdGUgZmFtaWx5IHZhY2F0aW9uP1wiLFxuICAgICAgICAgIFwiV2hhdCB3b3VsZCB5b3UgY2hhbmdlIGFib3V0IHlvdXJzZWxmIGlmIHlvdSBjb3VsZD9cIixcbiAgICAgICAgICBcIldoYXQgcmVhbGx5IG1ha2VzIHlvdSBhbmdyeT9cIlxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG59Il0sIm5hbWVzIjpbIkRBVEEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./content/dummylist.js\n");

/***/ }),

/***/ "./pages/game.tsx":
/*!************************!*\
  !*** ./pages/game.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Game_Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Game/Cards */ \"./components/Game/Cards/index.tsx\");\n/* harmony import */ var _content_dummylist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../content/dummylist */ \"./content/dummylist.js\");\n/* harmony import */ var _styles_pages_game_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/pages/game.module.scss */ \"./styles/pages/game.module.scss\");\n/* harmony import */ var _styles_pages_game_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_game_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Game = ()=>{\n    const word = _content_dummylist__WEBPACK_IMPORTED_MODULE_2__.DATA.questions.category[0].general[2];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: (_styles_pages_game_module_scss__WEBPACK_IMPORTED_MODULE_3___default().game),\n        __source: {\n            fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/pages/game.tsx\",\n            lineNumber: 18,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Game_Cards__WEBPACK_IMPORTED_MODULE_1__.CardStack, {\n            question: word,\n            __source: {\n                fileName: \"/Users/florianwinkler/Projects/i-knew-i-know-you/pages/game.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            },\n            __self: undefined\n        })\n    }));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9nYW1lLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFvRDtBQUNUO0FBQ1E7QUFFbkQsS0FBSyxDQUFDRyxJQUFJLE9BQW1CLENBQUM7SUFFNUIsS0FBSyxDQUFDQyxJQUFJLEdBQUdILHFGQUFxQztJQUVsRCxNQUFNLHNFQUNITyxDQUFHO1FBQUNDLFNBQVMsRUFBR1AsNEVBQVc7Ozs7Ozs7dUZBQ3pCRiw2REFBUztZQUNSVSxRQUFRLEVBQUdOLElBQUk7Ozs7Ozs7OztBQUl2QixDQUFDO0FBRUQsaUVBQWVELElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pLWtuZXctaS1rbm93LXlvdS8uL3BhZ2VzL2dhbWUudHN4PzEyMzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCB7XG4gIExheW91dCxcbiAgU2VjdGlvbixcbiAgQ29udGFpbmVyXG59IGZyb20gJy4uL2NvbXBvbmVudHMvV2Vic2l0ZS9MYXlvdXQnXG5pbXBvcnQgeyBDYXJkU3RhY2sgfSBmcm9tICcuLi9jb21wb25lbnRzL0dhbWUvQ2FyZHMnXG5pbXBvcnQgeyBEQVRBIH0gZnJvbSAnLi4vY29udGVudC9kdW1teWxpc3QnXG5pbXBvcnQgZ2FtZSBmcm9tICcuLi9zdHlsZXMvcGFnZXMvZ2FtZS5tb2R1bGUuc2NzcydcblxuY29uc3QgR2FtZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cbiAgY29uc3Qgd29yZCA9IERBVEEucXVlc3Rpb25zLmNhdGVnb3J5WzBdLmdlbmVyYWxbMl1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXsgZ2FtZVsnZ2FtZSddIH0+XG4gICAgICA8Q2FyZFN0YWNrXG4gICAgICAgIHF1ZXN0aW9uPXsgd29yZCB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVcbiJdLCJuYW1lcyI6WyJDYXJkU3RhY2siLCJEQVRBIiwiZ2FtZSIsIkdhbWUiLCJ3b3JkIiwicXVlc3Rpb25zIiwiY2F0ZWdvcnkiLCJnZW5lcmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwicXVlc3Rpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/game.tsx\n");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/game.tsx"));
module.exports = __webpack_exports__;

})();