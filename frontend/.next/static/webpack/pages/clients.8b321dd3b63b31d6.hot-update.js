"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/clients",{

/***/ "./pages/clients.js":
/*!**************************!*\
  !*** ./pages/clients.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Clients; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Clients.module.css */ \"./styles/Clients.module.css\");\n/* harmony import */ var _styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction Clients(props) {\n    var _this = this;\n    var urlFor = function urlFor(source) {\n        return imgBuilder.image(source);\n    };\n    var handleClick = function handleClick(e) {\n        var targetClient = e.target.id;\n        var content = clientList.find(function(content) {\n            return content.title == targetClient;\n        });\n        setClientContent(content);\n        clientItems.forEach(function(client) {\n            return client.classList.remove(\"active-client\");\n        });\n        e.target.classList.add(\"active-client\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), clientContent = ref[0], setClientContent = ref[1];\n    var clientList = props.clients.result[0].sort(function(a, b) {\n        return a.title.localeCompare(b.title);\n    });\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()({\n        projectId: \"36om7i3d\",\n        dataset: \"production\"\n    });\n    if (true) {\n        var clientItems1 = document.querySelectorAll(\".Clients_clientItem__D8a_q\");\n        if (clientContent) {\n            document.body.style.backgroundColor = clientContent.backgroundColor;\n        } else {\n            document.body.style.backgroundColor = getComputedStyle(document.body).getPropertyValue(\"--background-color\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            navigation: props.navigationBody,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientWrapper),\n                    children: clientList.map(function(client) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                id: client.title,\n                                // href={client.link.linkUrl}\n                                className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientItem),\n                                onClick: function(e) {\n                                    return handleClick(e);\n                                },\n                                children: [\n                                    client.title,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientOrigin),\n                                        children: [\n                                            \"(\",\n                                            client.origin,\n                                            \")\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 19\n                                    }, _this)\n                                ]\n                            }, client.title, true, {\n                                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, _this)\n                        }, void 0, false);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientContent),\n                    children: [\n                        clientContent.mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: urlFor(clientContent.mainImage),\n                            className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientImage)\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientDisciplines),\n                            children: clientContent.disciplines\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this),\n                        clientContent.link && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: clientContent.link.linkUrl,\n                            className: \"projectLink\",\n                            target: \"_blank\",\n                            children: [\n                                \"View Client\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    class: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().projectArrow),\n                                    src: \"./projectArrow.svg\",\n                                    width: \"15\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n            lineNumber: 42,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Clients, \"BKBLI19f89LXrwX8b3KtH3R8uGQ=\");\n_c = Clients;\nvar _c;\n$RefreshReg$(_c, \"Clients\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLOzs7O3FDQU9mO3lDQUNILENBQ0o7b0JBQ0gsQ0FBQyxDQUFDOzs7Ozt3QkFDRTs4QkFDTiw4REFBQzBCLEtBQUc7b0JBQUNDLFNBQVMsRUFBRTlDLGlGQUFvQjs7d0JBQ2pDMkIsYUFBYSxDQUFDMkIsU0FBUyxrQkFDdEIsOERBQUNDLEtBQUc7NEJBQ0ZDLEdBQUcsRUFBRWpELE1BQU0sQ0FBQ29CLGFBQWEsQ0FBQzJCLFNBQVMsQ0FBQzs0QkFDcENSLFNBQVMsRUFBRTlDLCtFQUFrQjs7Ozs7Z0NBQzdCO3NDQUVKLDhEQUFDNkMsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFOUMscUZBQXdCO3NDQUNyQzJCLGFBQWEsQ0FBQ2dDLFdBQVc7Ozs7O2dDQUN0Qjt3QkFDTGhDLGFBQWEsQ0FBQ2lDLElBQUksa0JBQ2pCLDhEQUFDN0IsR0FBQzs0QkFDQThCLElBQUksRUFBRWxDLGFBQWEsQ0FBQ2lDLElBQUksQ0FBQ0UsT0FBTzs0QkFDaENoQixTQUFTLEVBQUMsYUFBYTs0QkFDdkJoQyxNQUFNLEVBQUMsUUFBUTs7Z0NBQ2hCLGFBQ1k7Z0NBQUMsR0FBRzs4Q0FDZiw4REFBQ3lDLEtBQUc7b0NBQ0ZRLEtBQUssRUFBRS9ELGdGQUFtQjtvQ0FDMUJ3RCxHQUFHLEVBQUMsb0JBQW9CO29DQUN4QlMsS0FBSyxFQUFDLElBQUk7Ozs7O3dDQUNWOzs7Ozs7Z0NBQ0E7Ozs7Ozt3QkFFRjs7Ozs7O2dCQUNDO3FCQUNSLENBQ0o7QUFDSCxDQUFDO0dBbkZ1QjVELE9BQU87QUFBUEEsS0FBQUEsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jbGllbnRzLmpzP2VjYWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQ2xpZW50cy5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBpbWFnZVVybEJ1aWxkZXIgZnJvbSAnQHNhbml0eS9pbWFnZS11cmwnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsaWVudHMocHJvcHMpIHtcbiAgY29uc3QgW2NsaWVudENvbnRlbnQsIHNldENsaWVudENvbnRlbnRdID0gdXNlU3RhdGUoe30pXG5cbiAgY29uc3QgY2xpZW50TGlzdCA9IHByb3BzLmNsaWVudHMucmVzdWx0WzBdLnNvcnQoKGEsIGIpID0+XG4gICAgYS50aXRsZS5sb2NhbGVDb21wYXJlKGIudGl0bGUpXG4gIClcblxuICBjb25zdCBpbWdCdWlsZGVyID0gaW1hZ2VVcmxCdWlsZGVyKHtcbiAgICBwcm9qZWN0SWQ6ICczNm9tN2kzZCcsXG4gICAgZGF0YXNldDogJ3Byb2R1Y3Rpb24nLFxuICB9KVxuXG4gIGZ1bmN0aW9uIHVybEZvcihzb3VyY2UpIHtcbiAgICByZXR1cm4gaW1nQnVpbGRlci5pbWFnZShzb3VyY2UpXG4gIH1cblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjb25zdCBjbGllbnRJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5DbGllbnRzX2NsaWVudEl0ZW1fX0Q4YV9xJylcbiAgICBpZiAoY2xpZW50Q29udGVudCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjbGllbnRDb250ZW50LmJhY2tncm91bmRDb2xvclxuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdldENvbXB1dGVkU3R5bGUoXG4gICAgICAgIGRvY3VtZW50LmJvZHlcbiAgICAgICkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1iYWNrZ3JvdW5kLWNvbG9yJylcbiAgICB9XG4gIH1cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIGNvbnN0IHRhcmdldENsaWVudCA9IGUudGFyZ2V0LmlkXG4gICAgY29uc3QgY29udGVudCA9IGNsaWVudExpc3QuZmluZCgoY29udGVudCkgPT4gY29udGVudC50aXRsZSA9PSB0YXJnZXRDbGllbnQpXG4gICAgc2V0Q2xpZW50Q29udGVudChjb250ZW50KVxuICAgIGNsaWVudEl0ZW1zLmZvckVhY2goKGNsaWVudCkgPT4gY2xpZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1jbGllbnQnKSlcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtY2xpZW50JylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQgbmF2aWdhdGlvbj17cHJvcHMubmF2aWdhdGlvbkJvZHl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudFdyYXBwZXJ9PlxuICAgICAgICAgIHtjbGllbnRMaXN0Lm1hcCgoY2xpZW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBpZD17Y2xpZW50LnRpdGxlfVxuICAgICAgICAgICAgICAgICAga2V5PXtjbGllbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICAvLyBocmVmPXtjbGllbnQubGluay5saW5rVXJsfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50SXRlbX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Y2xpZW50LnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50T3JpZ2lufT4oe2NsaWVudC5vcmlnaW59KTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRDb250ZW50fT5cbiAgICAgICAgICB7Y2xpZW50Q29udGVudC5tYWluSW1hZ2UgJiYgKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9e3VybEZvcihjbGllbnRDb250ZW50Lm1haW5JbWFnZSl9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudEltYWdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50RGlzY2lwbGluZXN9PlxuICAgICAgICAgICAge2NsaWVudENvbnRlbnQuZGlzY2lwbGluZXN9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge2NsaWVudENvbnRlbnQubGluayAmJiAoXG4gICAgICAgICAgICA8YVxuICAgICAgICAgICAgICBocmVmPXtjbGllbnRDb250ZW50LmxpbmsubGlua1VybH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJvamVjdExpbmtcIlxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBWaWV3IENsaWVudHsnICd9XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBjbGFzcz17c3R5bGVzLnByb2plY3RBcnJvd31cbiAgICAgICAgICAgICAgICBzcmM9XCIuL3Byb2plY3RBcnJvdy5zdmdcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgbmF2aWdhdGlvblF1ZXJ5ID0gZW5jb2RlVVJJQ29tcG9uZW50KGAqWyBfdHlwZSA9PSAnbmF2aWdhdGlvbiddYClcbiAgY29uc3QgbmF2aWdhdGlvblVSTCA9IGBodHRwczovLzM2b203aTNkLmFwaS5zYW5pdHkuaW8vdjEvZGF0YS9xdWVyeS9wcm9kdWN0aW9uP3F1ZXJ5PVske25hdmlnYXRpb25RdWVyeX1dYFxuICBjb25zdCBuYXZpZ2F0aW9uQm9keSA9IGF3YWl0IGZldGNoKG5hdmlnYXRpb25VUkwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcblxuICBjb25zdCBjbGllbnRzUXVlcnkgPSBlbmNvZGVVUklDb21wb25lbnQoYCpbIF90eXBlID09ICdjbGllbnRzJ11gKVxuICBjb25zdCBwcm9qZWN0VVJMID0gYGh0dHBzOi8vMzZvbTdpM2QuYXBpLnNhbml0eS5pby92MS9kYXRhL3F1ZXJ5L3Byb2R1Y3Rpb24/cXVlcnk9WyR7Y2xpZW50c1F1ZXJ5fV1gXG4gIGNvbnN0IGNsaWVudHMgPSBhd2FpdCBmZXRjaChwcm9qZWN0VVJMKS50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG5hdmlnYXRpb25Cb2R5LFxuICAgICAgY2xpZW50cyxcbiAgICB9LFxuICB9XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJMYXlvdXQiLCJpbWFnZVVybEJ1aWxkZXIiLCJDbGllbnRzIiwicHJvcHMiLCJ1cmxGb3IiLCJzb3VyY2UiLCJpbWdCdWlsZGVyIiwiaW1hZ2UiLCJoYW5kbGVDbGljayIsImUiLCJ0YXJnZXRDbGllbnQiLCJ0YXJnZXQiLCJpZCIsImNvbnRlbnQiLCJjbGllbnRMaXN0IiwiZmluZCIsInRpdGxlIiwic2V0Q2xpZW50Q29udGVudCIsImNsaWVudEl0ZW1zIiwiZm9yRWFjaCIsImNsaWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImNsaWVudENvbnRlbnQiLCJjbGllbnRzIiwicmVzdWx0Iiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsInByb2plY3RJZCIsImRhdGFzZXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJib2R5Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsIm5hdmlnYXRpb24iLCJuYXZpZ2F0aW9uQm9keSIsImRpdiIsImNsYXNzTmFtZSIsImNsaWVudFdyYXBwZXIiLCJtYXAiLCJjbGllbnRJdGVtIiwib25DbGljayIsInNwYW4iLCJjbGllbnRPcmlnaW4iLCJvcmlnaW4iLCJtYWluSW1hZ2UiLCJpbWciLCJzcmMiLCJjbGllbnRJbWFnZSIsImNsaWVudERpc2NpcGxpbmVzIiwiZGlzY2lwbGluZXMiLCJsaW5rIiwiaHJlZiIsImxpbmtVcmwiLCJjbGFzcyIsInByb2plY3RBcnJvdyIsIndpZHRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/clients.js\n"));

/***/ })

});