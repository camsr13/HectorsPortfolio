"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/MobileNavigation.js":
/*!****************************************!*\
  !*** ./components/MobileNavigation.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/MobileNavigation.module.css */ \"./styles/MobileNavigation.module.css\");\n/* harmony import */ var _styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Navigation(props) {\n    var _this = this;\n    var handleClick = function handleClick() {\n        menuStatus === \"Menu\" ? setMenuStatus(\"Close\") : setMenuStatus(\"Menu\");\n        setActive(function(current) {\n            return !current;\n        });\n        console.log(isActive);\n    };\n    _s();\n    var mainNav = props.props.navigation.mainNav;\n    var socialNav = props.props.navigation.socialNav;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"Menu\"), menuStatus = ref[0], setMenuStatus = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isActive = ref1[0], setActive = ref1[1];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: function() {\n                    return handleClick();\n                },\n                className: (_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().menuButton),\n                children: menuStatus\n            }, void 0, false, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className:  true && isActive ? \"bg-salmon\" : \"\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainNavItemList),\n                        children: mainNav.map(function(item, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                id: item.text,\n                                className: \"navItem\",\n                                onClick: function(e) {\n                                    return handleClick(e);\n                                },\n                                children: item.text\n                            }, item.text, false, {\n                                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                                lineNumber: 25,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().socialNavItemList),\n                        children: socialNav.map(function(item, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"navItem\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: item.navItemUrl.linkUrl,\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 17\n                                }, _this)\n                            }, item.text, false, {\n                                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                                lineNumber: 39,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Navigation, \"J19bTdcxUtk5fXEPaa23kADH+fU=\");\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vYmlsZU5hdmlnYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUEwRDtBQUMxQjtBQUVqQixTQUFTRSxVQUFVLENBQUNDLEtBQUssRUFBRTs7UUFPL0JDLFdBQVcsR0FBcEIsU0FBU0EsV0FBVyxHQUFHO1FBQ3JCQyxVQUFVLEtBQUssTUFBTSxHQUFHQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUdBLGFBQWEsQ0FBQyxNQUFNLENBQUM7UUFDdEVDLFNBQVMsQ0FBQyxTQUFDQyxPQUFPO21CQUFLLENBQUNBLE9BQU87U0FBQSxDQUFDO1FBQ2hDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7O0lBVkQsSUFBTUMsT0FBTyxHQUFHVCxLQUFLLENBQUNBLEtBQUssQ0FBQ1UsVUFBVSxDQUFDRCxPQUFPO0lBQzlDLElBQU1FLFNBQVMsR0FBR1gsS0FBSyxDQUFDQSxLQUFLLENBQUNVLFVBQVUsQ0FBQ0MsU0FBUztJQUVsRCxJQUFvQ2IsR0FBZ0IsR0FBaEJBLCtDQUFRLENBQUMsTUFBTSxDQUFDLEVBQTdDSSxVQUFVLEdBQW1CSixHQUFnQixHQUFuQyxFQUFFSyxhQUFhLEdBQUlMLEdBQWdCLEdBQXBCO0lBQ2hDLElBQThCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXRDVSxRQUFRLEdBQWVWLElBQWUsR0FBOUIsRUFBRU0sU0FBUyxHQUFJTixJQUFlLEdBQW5CO0lBTzFCLHFCQUNFOzswQkFDRSw4REFBQ2MsR0FBQztnQkFBQ0MsT0FBTyxFQUFFOzJCQUFNWixXQUFXLEVBQUU7aUJBQUE7Z0JBQUVhLFNBQVMsRUFBRWpCLHVGQUFpQjswQkFDMURLLFVBQVU7Ozs7O29CQUNUOzBCQUNKLDhEQUFDYyxLQUFHO2dCQUFDRixTQUFTLEVBQUUsS0FBa0IsSUFBSU4sUUFBUSxHQUFHLFdBQVcsR0FBRyxFQUFFOztrQ0FDL0QsOERBQUNTLElBQUU7d0JBQUNILFNBQVMsRUFBRWpCLDRGQUFzQjtrQ0FDbENZLE9BQU8sQ0FBQ1UsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsQ0FBQyxFQUFLOzRCQUN4QixxQkFDRSw4REFBQ0MsSUFBRTtnQ0FDREMsRUFBRSxFQUFFSCxJQUFJLENBQUNJLElBQUk7Z0NBRWJWLFNBQVMsRUFBQyxTQUFTO2dDQUNuQkQsT0FBTyxFQUFFLFNBQUNZLENBQUM7MkNBQUt4QixXQUFXLENBQUN3QixDQUFDLENBQUM7aUNBQUE7MENBRTdCTCxJQUFJLENBQUNJLElBQUk7K0JBSkxKLElBQUksQ0FBQ0ksSUFBSTs7OztxQ0FLWCxDQUNOO3dCQUNILENBQUMsQ0FBQzs7Ozs7NEJBQ0M7a0NBQ0wsOERBQUNQLElBQUU7d0JBQUNILFNBQVMsRUFBRWpCLDhGQUF3QjtrQ0FDcENjLFNBQVMsQ0FBQ1EsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsQ0FBQyxFQUFLOzRCQUMxQixxQkFDRSw4REFBQ0MsSUFBRTtnQ0FBaUJSLFNBQVMsRUFBQyxTQUFTOzBDQUNyQyw0RUFBQ2EsR0FBQztvQ0FBQ0MsTUFBTSxFQUFDLFFBQVE7b0NBQUNDLElBQUksRUFBRVQsSUFBSSxDQUFDVSxVQUFVLENBQUNDLE9BQU87OENBQzdDWCxJQUFJLENBQUNJLElBQUk7Ozs7O3lDQUNSOytCQUhHSixJQUFJLENBQUNJLElBQUk7Ozs7cUNBSWIsQ0FDTjt3QkFDSCxDQUFDLENBQUM7Ozs7OzRCQUNDOzs7Ozs7b0JBQ0Q7O29CQUNMLENBQ0o7QUFDSCxDQUFDO0dBOUN1QnpCLFVBQVU7QUFBVkEsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vYmlsZU5hdmlnYXRpb24uanM/NTZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Nb2JpbGVOYXZpZ2F0aW9uLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uKHByb3BzKSB7XG4gIGNvbnN0IG1haW5OYXYgPSBwcm9wcy5wcm9wcy5uYXZpZ2F0aW9uLm1haW5OYXZcbiAgY29uc3Qgc29jaWFsTmF2ID0gcHJvcHMucHJvcHMubmF2aWdhdGlvbi5zb2NpYWxOYXZcblxuICBjb25zdCBbbWVudVN0YXR1cywgc2V0TWVudVN0YXR1c10gPSB1c2VTdGF0ZSgnTWVudScpXG4gIGNvbnN0IFtpc0FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKCkge1xuICAgIG1lbnVTdGF0dXMgPT09ICdNZW51JyA/IHNldE1lbnVTdGF0dXMoJ0Nsb3NlJykgOiBzZXRNZW51U3RhdHVzKCdNZW51JylcbiAgICBzZXRBY3RpdmUoKGN1cnJlbnQpID0+ICFjdXJyZW50KVxuICAgIGNvbnNvbGUubG9nKGlzQWN0aXZlKVxuICB9XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxwIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKCl9IGNsYXNzTmFtZT17c3R5bGVzLm1lbnVCdXR0b259PlxuICAgICAgICB7bWVudVN0YXR1c31cbiAgICAgIDwvcD5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXsnbW9iaWxlTmF2V3JhcHBlcicgJiYgaXNBY3RpdmUgPyAnYmctc2FsbW9uJyA6ICcnfT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm1haW5OYXZJdGVtTGlzdH0+XG4gICAgICAgICAge21haW5OYXYubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBpZD17aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdkl0ZW1cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWxOYXZJdGVtTGlzdH0+XG4gICAgICAgICAge3NvY2lhbE5hdi5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0udGV4dH0gY2xhc3NOYW1lPVwibmF2SXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2l0ZW0ubmF2SXRlbVVybC5saW5rVXJsfT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsIk5hdmlnYXRpb24iLCJwcm9wcyIsImhhbmRsZUNsaWNrIiwibWVudVN0YXR1cyIsInNldE1lbnVTdGF0dXMiLCJzZXRBY3RpdmUiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsImlzQWN0aXZlIiwibWFpbk5hdiIsIm5hdmlnYXRpb24iLCJzb2NpYWxOYXYiLCJwIiwib25DbGljayIsImNsYXNzTmFtZSIsIm1lbnVCdXR0b24iLCJuYXYiLCJ1bCIsIm1haW5OYXZJdGVtTGlzdCIsIm1hcCIsIml0ZW0iLCJpIiwibGkiLCJpZCIsInRleHQiLCJlIiwic29jaWFsTmF2SXRlbUxpc3QiLCJhIiwidGFyZ2V0IiwiaHJlZiIsIm5hdkl0ZW1VcmwiLCJsaW5rVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MobileNavigation.js\n"));

/***/ })

});