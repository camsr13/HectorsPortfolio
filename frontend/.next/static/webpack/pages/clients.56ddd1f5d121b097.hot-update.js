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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Clients; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Clients.module.css */ \"./styles/Clients.module.css\");\n/* harmony import */ var _styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ \"./components/Layout.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @sanity/image-url */ \"./node_modules/@sanity/image-url/lib/browser/image-url.umd.js\");\n/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction Clients(props) {\n    var _this = this;\n    var urlFor = function urlFor(source) {\n        return imgBuilder.image(source);\n    };\n    var handleClick = function handleClick(e) {\n        var targetClient = e.target.id;\n        var content = clientList.find(function(content) {\n            return content.title == targetClient;\n        });\n        setClientContent(content);\n        clientItems.forEach(function(client) {\n            return client.classList.remove(\"active-client\");\n        });\n        e.target.classList.add(\"active-client\");\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), clientContent = ref[0], setClientContent = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), hasImage = ref1[0], setHasImage = ref1[1];\n    var clientItems = [];\n    var clientList = props.clients.result[0].sort(function(a, b) {\n        return a.title.localeCompare(b.title);\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (clientContent.mainImage) {\n            setHasImage(true);\n        }\n    }, [\n        clientContent\n    ]);\n    var imgBuilder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_3___default()({\n        projectId: \"36om7i3d\",\n        dataset: \"production\"\n    });\n    console.log(clientList);\n    if (true) {\n        clientItems = document.querySelectorAll(\".Clients_clientItem__D8a_q\");\n        if (clientContent) {\n            document.body.style.backgroundColor = clientContent.backgroundColor;\n        } else {\n            document.body.style.backgroundColor = getComputedStyle(document.body).getPropertyValue(\"--background-color\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            navigation: props.navigationBody,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientWrapper),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mobile-page-title\",\n                            children: \"Clients\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, this),\n                        clientList.map(function(client) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    id: client.title,\n                                    // href={client.link.linkUrl}\n                                    className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientItem),\n                                    onClick: function(e) {\n                                        return handleClick(e);\n                                    },\n                                    children: [\n                                        client.title,\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientOrigin),\n                                            children: [\n                                                \"(\",\n                                                client.origin,\n                                                \")\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 19\n                                        }, _this)\n                                    ]\n                                }, client.title, true, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                                    lineNumber: 59,\n                                    columnNumber: 17\n                                }, _this)\n                            }, void 0, false);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                    lineNumber: 54,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientContent),\n                    children: [\n                        clientContent.mainImage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: urlFor(clientContent.mainImage),\n                            className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientImage)\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().clientDisciplines),\n                            children: clientContent.disciplines\n                        }, void 0, false, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        clientContent.link && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: clientContent.link.linkUrl,\n                            className: \"projectLink\",\n                            target: \"_blank\",\n                            children: [\n                                \"View Client\",\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    class: (_styles_Clients_module_css__WEBPACK_IMPORTED_MODULE_4___default().projectArrow),\n                                    src: \"./projectArrow.svg\",\n                                    width: \"15\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                            lineNumber: 84,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n                    lineNumber: 73,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/pages/clients.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n};\n_s(Clients, \"37Yare1rXtLq/4+g1TbihUCGpqE=\");\n_c = Clients;\nvar _c;\n$RefreshReg$(_c, \"Clients\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjRELEdBQUcsRUFBQyxvQkFBb0I7b0NBQ3hCUyxLQUFLLEVBQUMsSUFBSTs7Ozs7d0NBQ1Y7Ozs7OztnQ0FDQTs7Ozs7O3dCQUVGOzs7Ozs7Z0JBQ0M7cUJBQ1IsQ0FDSjtBQUNILENBQUM7R0EvRnVCaEUsT0FBTztBQUFQQSxLQUFBQSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NsaWVudHMuanM/ZWNhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9DbGllbnRzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0J1xuaW1wb3J0IGltYWdlVXJsQnVpbGRlciBmcm9tICdAc2FuaXR5L2ltYWdlLXVybCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xpZW50cyhwcm9wcykge1xuICBjb25zdCBbY2xpZW50Q29udGVudCwgc2V0Q2xpZW50Q29udGVudF0gPSB1c2VTdGF0ZSh7fSlcbiAgY29uc3QgW2hhc0ltYWdlLCBzZXRIYXNJbWFnZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgbGV0IGNsaWVudEl0ZW1zID0gW11cblxuICBjb25zdCBjbGllbnRMaXN0ID0gcHJvcHMuY2xpZW50cy5yZXN1bHRbMF0uc29ydCgoYSwgYikgPT5cbiAgICBhLnRpdGxlLmxvY2FsZUNvbXBhcmUoYi50aXRsZSlcbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGNsaWVudENvbnRlbnQubWFpbkltYWdlKSB7XG4gICAgICBzZXRIYXNJbWFnZSh0cnVlKVxuICAgIH1cbiAgfSwgW2NsaWVudENvbnRlbnRdKVxuXG4gIGNvbnN0IGltZ0J1aWxkZXIgPSBpbWFnZVVybEJ1aWxkZXIoe1xuICAgIHByb2plY3RJZDogJzM2b203aTNkJyxcbiAgICBkYXRhc2V0OiAncHJvZHVjdGlvbicsXG4gIH0pXG5cbiAgZnVuY3Rpb24gdXJsRm9yKHNvdXJjZSkge1xuICAgIHJldHVybiBpbWdCdWlsZGVyLmltYWdlKHNvdXJjZSlcbiAgfVxuXG4gIGNvbnNvbGUubG9nKGNsaWVudExpc3QpXG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY2xpZW50SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuQ2xpZW50c19jbGllbnRJdGVtX19EOGFfcScpXG4gICAgaWYgKGNsaWVudENvbnRlbnQpIHtcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2xpZW50Q29udGVudC5iYWNrZ3JvdW5kQ29sb3JcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKFxuICAgICAgICBkb2N1bWVudC5ib2R5XG4gICAgICApLmdldFByb3BlcnR5VmFsdWUoJy0tYmFja2dyb3VuZC1jb2xvcicpXG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZSkge1xuICAgIGNvbnN0IHRhcmdldENsaWVudCA9IGUudGFyZ2V0LmlkXG4gICAgY29uc3QgY29udGVudCA9IGNsaWVudExpc3QuZmluZCgoY29udGVudCkgPT4gY29udGVudC50aXRsZSA9PSB0YXJnZXRDbGllbnQpXG4gICAgc2V0Q2xpZW50Q29udGVudChjb250ZW50KVxuICAgIGNsaWVudEl0ZW1zLmZvckVhY2goKGNsaWVudCkgPT4gY2xpZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZS1jbGllbnQnKSlcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtY2xpZW50JylcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMYXlvdXQgbmF2aWdhdGlvbj17cHJvcHMubmF2aWdhdGlvbkJvZHl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudFdyYXBwZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9iaWxlLXBhZ2UtdGl0bGVcIj5DbGllbnRzPC9kaXY+XG4gICAgICAgICAge2NsaWVudExpc3QubWFwKChjbGllbnQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGlkPXtjbGllbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICBrZXk9e2NsaWVudC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIC8vIGhyZWY9e2NsaWVudC5saW5rLmxpbmtVcmx9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRJdGVtfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtjbGllbnQudGl0bGV9XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnRPcmlnaW59Pih7Y2xpZW50Lm9yaWdpbn0pPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsaWVudENvbnRlbnR9PlxuICAgICAgICAgIHtjbGllbnRDb250ZW50Lm1haW5JbWFnZSAmJiAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIHNyYz17dXJsRm9yKGNsaWVudENvbnRlbnQubWFpbkltYWdlKX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xpZW50SW1hZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbGllbnREaXNjaXBsaW5lc30+XG4gICAgICAgICAgICB7Y2xpZW50Q29udGVudC5kaXNjaXBsaW5lc31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7Y2xpZW50Q29udGVudC5saW5rICYmIChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGhyZWY9e2NsaWVudENvbnRlbnQubGluay5saW5rVXJsfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9qZWN0TGlua1wiXG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFZpZXcgQ2xpZW50eycgJ31cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzPXtzdHlsZXMucHJvamVjdEFycm93fVxuICAgICAgICAgICAgICAgIHNyYz1cIi4vcHJvamVjdEFycm93LnN2Z1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCBuYXZpZ2F0aW9uUXVlcnkgPSBlbmNvZGVVUklDb21wb25lbnQoYCpbIF90eXBlID09ICduYXZpZ2F0aW9uJ11gKVxuICBjb25zdCBuYXZpZ2F0aW9uVVJMID0gYGh0dHBzOi8vMzZvbTdpM2QuYXBpLnNhbml0eS5pby92MS9kYXRhL3F1ZXJ5L3Byb2R1Y3Rpb24/cXVlcnk9WyR7bmF2aWdhdGlvblF1ZXJ5fV1gXG4gIGNvbnN0IG5hdmlnYXRpb25Cb2R5ID0gYXdhaXQgZmV0Y2gobmF2aWdhdGlvblVSTCkudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuXG4gIGNvbnN0IGNsaWVudHNRdWVyeSA9IGVuY29kZVVSSUNvbXBvbmVudChgKlsgX3R5cGUgPT0gJ2NsaWVudHMnXWApXG4gIGNvbnN0IHByb2plY3RVUkwgPSBgaHR0cHM6Ly8zNm9tN2kzZC5hcGkuc2FuaXR5LmlvL3YxL2RhdGEvcXVlcnkvcHJvZHVjdGlvbj9xdWVyeT1bJHtjbGllbnRzUXVlcnl9XWBcbiAgY29uc3QgY2xpZW50cyA9IGF3YWl0IGZldGNoKHByb2plY3RVUkwpLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbmF2aWdhdGlvbkJvZHksXG4gICAgICBjbGllbnRzLFxuICAgIH0sXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxheW91dCIsImltYWdlVXJsQnVpbGRlciIsIkNsaWVudHMiLCJwcm9wcyIsInVybEZvciIsInNvdXJjZSIsImltZ0J1aWxkZXIiLCJpbWFnZSIsImhhbmRsZUNsaWNrIiwiZSIsInRhcmdldENsaWVudCIsInRhcmdldCIsImlkIiwiY29udGVudCIsImNsaWVudExpc3QiLCJmaW5kIiwidGl0bGUiLCJzZXRDbGllbnRDb250ZW50IiwiY2xpZW50SXRlbXMiLCJmb3JFYWNoIiwiY2xpZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiY2xpZW50Q29udGVudCIsImhhc0ltYWdlIiwic2V0SGFzSW1hZ2UiLCJjbGllbnRzIiwicmVzdWx0Iiwic29ydCIsImEiLCJiIiwibG9jYWxlQ29tcGFyZSIsIm1haW5JbWFnZSIsInByb2plY3RJZCIsImRhdGFzZXQiLCJjb25zb2xlIiwibG9nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYm9keSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFByb3BlcnR5VmFsdWUiLCJuYXZpZ2F0aW9uIiwibmF2aWdhdGlvbkJvZHkiLCJkaXYiLCJjbGFzc05hbWUiLCJjbGllbnRXcmFwcGVyIiwibWFwIiwiY2xpZW50SXRlbSIsIm9uQ2xpY2siLCJzcGFuIiwiY2xpZW50T3JpZ2luIiwib3JpZ2luIiwiaW1nIiwic3JjIiwiY2xpZW50SW1hZ2UiLCJjbGllbnREaXNjaXBsaW5lcyIsImRpc2NpcGxpbmVzIiwibGluayIsImhyZWYiLCJsaW5rVXJsIiwiY2xhc3MiLCJwcm9qZWN0QXJyb3ciLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/clients.js\n"));

/***/ })

});