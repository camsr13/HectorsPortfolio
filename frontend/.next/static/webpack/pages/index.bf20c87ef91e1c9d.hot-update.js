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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navigation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/MobileNavigation.module.css */ \"./styles/MobileNavigation.module.css\");\n/* harmony import */ var _styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Navigation(props) {\n    var _this = this;\n    var mainNav = props.props.navigation.mainNav;\n    var socialNav = props.props.navigation.socialNav;\n    console.log(props.props.navigation);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                onClick: function() {\n                    return handleClick();\n                },\n                className: (_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default().menuButton),\n                children: \"Menu\"\n            }, void 0, false, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: (_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default().wrapper),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default().mainNavItemList),\n                        children: mainNav.map(function(item, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                id: item.text,\n                                className: \"navItem\",\n                                onClick: function(e) {\n                                    return handleClick(e);\n                                },\n                                children: item.text\n                            }, item.text, false, {\n                                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                                lineNumber: 16,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_styles_MobileNavigation_module_css__WEBPACK_IMPORTED_MODULE_1___default().socialNavItemList),\n                        children: socialNav.map(function(item, i) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"navItem\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    target: \"_blank\",\n                                    href: item.navItemUrl.linkUrl,\n                                    children: item.text\n                                }, void 0, false, {\n                                    fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 17\n                                }, _this)\n                            }, item.text, false, {\n                                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                                lineNumber: 30,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fergushaywood/Desktop/personal-website/frontend/components/MobileNavigation.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_c = Navigation;\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01vYmlsZU5hdmlnYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUEwRDtBQUUzQyxTQUFTQyxVQUFVLENBQUNDLEtBQUssRUFBRTs7SUFDeEMsSUFBTUMsT0FBTyxHQUFHRCxLQUFLLENBQUNBLEtBQUssQ0FBQ0UsVUFBVSxDQUFDRCxPQUFPO0lBQzlDLElBQU1FLFNBQVMsR0FBR0gsS0FBSyxDQUFDQSxLQUFLLENBQUNFLFVBQVUsQ0FBQ0MsU0FBUztJQUNsREMsT0FBTyxDQUFDQyxHQUFHLENBQUNMLEtBQUssQ0FBQ0EsS0FBSyxDQUFDRSxVQUFVLENBQUM7SUFDbkMscUJBQ0U7OzBCQUNFLDhEQUFDSSxHQUFDO2dCQUFDQyxPQUFPLEVBQUU7MkJBQU1DLFdBQVcsRUFBRTtpQkFBQTtnQkFBRUMsU0FBUyxFQUFFWCx1RkFBaUI7MEJBQUUsTUFFL0Q7Ozs7O29CQUFJOzBCQUNKLDhEQUFDYSxLQUFHO2dCQUFDRixTQUFTLEVBQUVYLG9GQUFjOztrQ0FDNUIsOERBQUNlLElBQUU7d0JBQUNKLFNBQVMsRUFBRVgsNEZBQXNCO2tDQUNsQ0csT0FBTyxDQUFDYyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxDQUFDLEVBQUs7NEJBQ3hCLHFCQUNFLDhEQUFDQyxJQUFFO2dDQUNEQyxFQUFFLEVBQUVILElBQUksQ0FBQ0ksSUFBSTtnQ0FFYlgsU0FBUyxFQUFDLFNBQVM7Z0NBQ25CRixPQUFPLEVBQUUsU0FBQ2MsQ0FBQzsyQ0FBS2IsV0FBVyxDQUFDYSxDQUFDLENBQUM7aUNBQUE7MENBRTdCTCxJQUFJLENBQUNJLElBQUk7K0JBSkxKLElBQUksQ0FBQ0ksSUFBSTs7OztxQ0FLWCxDQUNOO3dCQUNILENBQUMsQ0FBQzs7Ozs7NEJBQ0M7a0NBQ0wsOERBQUNQLElBQUU7d0JBQUNKLFNBQVMsRUFBRVgsOEZBQXdCO2tDQUNwQ0ssU0FBUyxDQUFDWSxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxDQUFDLEVBQUs7NEJBQzFCLHFCQUNFLDhEQUFDQyxJQUFFO2dDQUFpQlQsU0FBUyxFQUFDLFNBQVM7MENBQ3JDLDRFQUFDYyxHQUFDO29DQUFDQyxNQUFNLEVBQUMsUUFBUTtvQ0FBQ0MsSUFBSSxFQUFFVCxJQUFJLENBQUNVLFVBQVUsQ0FBQ0MsT0FBTzs4Q0FDN0NYLElBQUksQ0FBQ0ksSUFBSTs7Ozs7eUNBQ1I7K0JBSEdKLElBQUksQ0FBQ0ksSUFBSTs7OztxQ0FJYixDQUNOO3dCQUNILENBQUMsQ0FBQzs7Ozs7NEJBQ0M7Ozs7OztvQkFDRDs7b0JBQ0wsQ0FDSjtBQUNILENBQUM7QUF0Q3VCckIsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01vYmlsZU5hdmlnYXRpb24uanM/NTZlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Nb2JpbGVOYXZpZ2F0aW9uLm1vZHVsZS5jc3MnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb24ocHJvcHMpIHtcbiAgY29uc3QgbWFpbk5hdiA9IHByb3BzLnByb3BzLm5hdmlnYXRpb24ubWFpbk5hdlxuICBjb25zdCBzb2NpYWxOYXYgPSBwcm9wcy5wcm9wcy5uYXZpZ2F0aW9uLnNvY2lhbE5hdlxuICBjb25zb2xlLmxvZyhwcm9wcy5wcm9wcy5uYXZpZ2F0aW9uKVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8cCBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljaygpfSBjbGFzc05hbWU9e3N0eWxlcy5tZW51QnV0dG9ufT5cbiAgICAgICAgTWVudVxuICAgICAgPC9wPlxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm1haW5OYXZJdGVtTGlzdH0+XG4gICAgICAgICAge21haW5OYXYubWFwKChpdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBpZD17aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgIGtleT17aXRlbS50ZXh0fVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdkl0ZW1cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zb2NpYWxOYXZJdGVtTGlzdH0+XG4gICAgICAgICAge3NvY2lhbE5hdi5tYXAoKGl0ZW0sIGkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0udGV4dH0gY2xhc3NOYW1lPVwibmF2SXRlbVwiPlxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9e2l0ZW0ubmF2SXRlbVVybC5saW5rVXJsfT5cbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJOYXZpZ2F0aW9uIiwicHJvcHMiLCJtYWluTmF2IiwibmF2aWdhdGlvbiIsInNvY2lhbE5hdiIsImNvbnNvbGUiLCJsb2ciLCJwIiwib25DbGljayIsImhhbmRsZUNsaWNrIiwiY2xhc3NOYW1lIiwibWVudUJ1dHRvbiIsIm5hdiIsIndyYXBwZXIiLCJ1bCIsIm1haW5OYXZJdGVtTGlzdCIsIm1hcCIsIml0ZW0iLCJpIiwibGkiLCJpZCIsInRleHQiLCJlIiwic29jaWFsTmF2SXRlbUxpc3QiLCJhIiwidGFyZ2V0IiwiaHJlZiIsIm5hdkl0ZW1VcmwiLCJsaW5rVXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/MobileNavigation.js\n"));

/***/ })

});