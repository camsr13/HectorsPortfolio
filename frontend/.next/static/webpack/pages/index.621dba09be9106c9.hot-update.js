/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[2]!./styles/AnnouncementBar.module.css":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[2]!./styles/AnnouncementBar.module.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".AnnouncementBar_wrapper__Ej_0k {\\n  display: flex;\\n  width: 350px;\\n  height: 32px;\\n  grid-column: 2 / span 2;\\n}\\n.AnnouncementBar_surround__2nF3x {\\n  border: 1px solid var(--color);\\n  border-radius: 40px;\\n  width: 100%;\\n  overflow: hidden;\\n  position: relative;\\n  align-items: center;\\n  white-space: nowrap;\\n}\\n/* Marquee */\\n\\n.AnnouncementBar_inner__V5SQk {\\n\\n  margin: 0;\\n\\n/* Starting position */    \\ntransform:translateX(150%);\\n/* Apply animation to this element */\\n-webkit-animation: AnnouncementBar_announcement-bar__a8DDz 5s linear infinite;\\nanimation: AnnouncementBar_announcement-bar__a8DDz 5s linear infinite;\\n}\\n/* Move it (define the animation) */\\n@-webkit-keyframes AnnouncementBar_announcement-bar__a8DDz {\\n0%   { -webkit-transform: translateX(100%); }\\n100% { -webkit-transform: translateX(-150%); }\\n}\\n@keyframes AnnouncementBar_announcement-bar__a8DDz {\\n0%   { /* Firefox bug fix */ /* Firefox bug fix */\\ntransform: translateX(100%);       \\n}\\n100%    { /* Firefox bug fix */ /* Firefox bug fix */\\ntransform: translateX(-150%); \\n}\\n}\\n\\n\\n@media all and (max-width: 750px ) { \\n  .AnnouncementBar_wrapper__Ej_0k { \\n    max-width: 220px;\\n    width: 100%;\\n    grid-column: 3 / span 3;\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/AnnouncementBar.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAa;EACb,YAAY;EACZ,YAAY;EACZ,uBAAuB;AACzB;AACA;EACE,8BAA8B;EAC9B,mBAAmB;EACnB,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;AACrB;AACA,YAAY;;AAEZ;;EAEE,SAAS;;AAEX,sBAAsB;AAGtB,0BAA0B;AAC1B,oCAAoC;AAEpC,6EAAsD;AACtD,qEAA8C;AAC9C;AACA,mCAAmC;AAKnC;AACA,OAAO,mCAAmC,EAAE;AAC5C,OAAO,oCAAoC,EAAE;AAC7C;AACA;AACA,OACkC,oBAAoB,EACjB,oBAAoB;AACzD,2BAA2B;AAC3B;AACA,UACmC,oBAAoB,EACjB,oBAAoB;AAC1D,4BAA4B;AAC5B;AACA;;;AAGA;EACE;IACE,gBAAgB;IAChB,WAAW;IACX,uBAAuB;EACzB;AACF\",\"sourcesContent\":[\".wrapper {\\n  display: flex;\\n  width: 350px;\\n  height: 32px;\\n  grid-column: 2 / span 2;\\n}\\n.surround {\\n  border: 1px solid var(--color);\\n  border-radius: 40px;\\n  width: 100%;\\n  overflow: hidden;\\n  position: relative;\\n  align-items: center;\\n  white-space: nowrap;\\n}\\n/* Marquee */\\n\\n.inner {\\n\\n  margin: 0;\\n\\n/* Starting position */\\n-moz-transform:translateX(150%);\\n-webkit-transform:translateX(150%);    \\ntransform:translateX(150%);\\n/* Apply animation to this element */  \\n-moz-animation: announcement-bar 5s linear infinite;\\n-webkit-animation: announcement-bar 5s linear infinite;\\nanimation: announcement-bar 5s linear infinite;\\n}\\n/* Move it (define the animation) */\\n@-moz-keyframes announcement-bar {\\n0%   { -moz-transform: translateX(100%); }\\n100% { -moz-transform: translateX(-150%); }\\n}\\n@-webkit-keyframes announcement-bar {\\n0%   { -webkit-transform: translateX(100%); }\\n100% { -webkit-transform: translateX(-150%); }\\n}\\n@keyframes announcement-bar {\\n0%   { \\n-moz-transform: translateX(100%); /* Firefox bug fix */\\n-webkit-transform: translateX(100%); /* Firefox bug fix */\\ntransform: translateX(100%);       \\n}\\n100%    { \\n-moz-transform: translateX(-150%); /* Firefox bug fix */\\n-webkit-transform: translateX(-150%); /* Firefox bug fix */\\ntransform: translateX(-150%); \\n}\\n}\\n\\n\\n@media all and (max-width: 750px ) { \\n  .wrapper { \\n    max-width: 220px;\\n    width: 100%;\\n    grid-column: 3 / span 3;\\n  }\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"wrapper\": \"AnnouncementBar_wrapper__Ej_0k\",\n\t\"surround\": \"AnnouncementBar_surround__2nF3x\",\n\t\"inner\": \"AnnouncementBar_inner__V5SQk\",\n\t\"announcement-bar\": \"AnnouncementBar_announcement-bar__a8DDz\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls0XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNF0udXNlWzJdIS4vc3R5bGVzL0Fubm91bmNlbWVudEJhci5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsbUtBQStFO0FBQ3pIO0FBQ0E7QUFDQSwyRUFBMkUsa0JBQWtCLGlCQUFpQixpQkFBaUIsNEJBQTRCLEdBQUcsb0NBQW9DLG1DQUFtQyx3QkFBd0IsZ0JBQWdCLHFCQUFxQix1QkFBdUIsd0JBQXdCLHdCQUF3QixHQUFHLGtEQUFrRCxnQkFBZ0IsNERBQTRELHVIQUF1SCx3RUFBd0UsR0FBRyxvR0FBb0csU0FBUyxzQ0FBc0MsU0FBUyx1Q0FBdUMsR0FBRyxzREFBc0QsU0FBUyxnRkFBZ0YsR0FBRyxZQUFZLDJFQUEyRSxHQUFHLEdBQUcsMkNBQTJDLHNDQUFzQyx1QkFBdUIsa0JBQWtCLDhCQUE4QixLQUFLLEdBQUcsT0FBTyxrR0FBa0csVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLFdBQVcsTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLFlBQVksTUFBTSxzQkFBc0IsdUJBQXVCLE1BQU0sS0FBSywrQkFBK0IsYUFBYSxNQUFNLCtCQUErQixhQUFhLE1BQU0sT0FBTyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksTUFBTSxtQ0FBbUMsa0JBQWtCLGlCQUFpQixpQkFBaUIsNEJBQTRCLEdBQUcsYUFBYSxtQ0FBbUMsd0JBQXdCLGdCQUFnQixxQkFBcUIsdUJBQXVCLHdCQUF3Qix3QkFBd0IsR0FBRywyQkFBMkIsZ0JBQWdCLDZEQUE2RCx5Q0FBeUMsNkJBQTZCLCtGQUErRix5REFBeUQsaURBQWlELEdBQUcsMEVBQTBFLFNBQVMsbUNBQW1DLFNBQVMsb0NBQW9DLEdBQUcsdUNBQXVDLFNBQVMsc0NBQXNDLFNBQVMsdUNBQXVDLEdBQUcsK0JBQStCLFNBQVMsb0NBQW9DLDREQUE0RCwwREFBMEQsR0FBRyxZQUFZLHFDQUFxQyw2REFBNkQscURBQXFELEdBQUcsR0FBRywyQ0FBMkMsZUFBZSx1QkFBdUIsa0JBQWtCLDhCQUE4QixLQUFLLEdBQUcsbUJBQW1CO0FBQ3R5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9Bbm5vdW5jZW1lbnRCYXIubW9kdWxlLmNzcz82OWFiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQW5ub3VuY2VtZW50QmFyX3dyYXBwZXJfX0VqXzBrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMzUwcHg7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBncmlkLWNvbHVtbjogMiAvIHNwYW4gMjtcXG59XFxuLkFubm91bmNlbWVudEJhcl9zdXJyb3VuZF9fMm5GM3gge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4vKiBNYXJxdWVlICovXFxuXFxuLkFubm91bmNlbWVudEJhcl9pbm5lcl9fVjVTUWsge1xcblxcbiAgbWFyZ2luOiAwO1xcblxcbi8qIFN0YXJ0aW5nIHBvc2l0aW9uICovICAgIFxcbnRyYW5zZm9ybTp0cmFuc2xhdGVYKDE1MCUpO1xcbi8qIEFwcGx5IGFuaW1hdGlvbiB0byB0aGlzIGVsZW1lbnQgKi9cXG4td2Via2l0LWFuaW1hdGlvbjogQW5ub3VuY2VtZW50QmFyX2Fubm91bmNlbWVudC1iYXJfX2E4RER6IDVzIGxpbmVhciBpbmZpbml0ZTtcXG5hbmltYXRpb246IEFubm91bmNlbWVudEJhcl9hbm5vdW5jZW1lbnQtYmFyX19hOEREeiA1cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi8qIE1vdmUgaXQgKGRlZmluZSB0aGUgYW5pbWF0aW9uKSAqL1xcbkAtd2Via2l0LWtleWZyYW1lcyBBbm5vdW5jZW1lbnRCYXJfYW5ub3VuY2VtZW50LWJhcl9fYThERHoge1xcbjAlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgfVxcbjEwMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTUwJSk7IH1cXG59XFxuQGtleWZyYW1lcyBBbm5vdW5jZW1lbnRCYXJfYW5ub3VuY2VtZW50LWJhcl9fYThERHoge1xcbjAlICAgeyAvKiBGaXJlZm94IGJ1ZyBmaXggKi8gLyogRmlyZWZveCBidWcgZml4ICovXFxudHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyAgICAgICBcXG59XFxuMTAwJSAgICB7IC8qIEZpcmVmb3ggYnVnIGZpeCAqLyAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUpOyBcXG59XFxufVxcblxcblxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc1MHB4ICkgeyBcXG4gIC5Bbm5vdW5jZW1lbnRCYXJfd3JhcHBlcl9fRWpfMGsgeyBcXG4gICAgbWF4LXdpZHRoOiAyMjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGdyaWQtY29sdW1uOiAzIC8gc3BhbiAzO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL0Fubm91bmNlbWVudEJhci5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7QUFDQSxZQUFZOztBQUVaOztFQUVFLFNBQVM7O0FBRVgsc0JBQXNCO0FBR3RCLDBCQUEwQjtBQUMxQixvQ0FBb0M7QUFFcEMsNkVBQXNEO0FBQ3RELHFFQUE4QztBQUM5QztBQUNBLG1DQUFtQztBQUtuQztBQUNBLE9BQU8sbUNBQW1DLEVBQUU7QUFDNUMsT0FBTyxvQ0FBb0MsRUFBRTtBQUM3QztBQUNBO0FBQ0EsT0FDa0Msb0JBQW9CLEVBQ2pCLG9CQUFvQjtBQUN6RCwyQkFBMkI7QUFDM0I7QUFDQSxVQUNtQyxvQkFBb0IsRUFDakIsb0JBQW9CO0FBQzFELDRCQUE0QjtBQUM1QjtBQUNBOzs7QUFHQTtFQUNFO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCx1QkFBdUI7RUFDekI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIud3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgZ3JpZC1jb2x1bW46IDIgLyBzcGFuIDI7XFxufVxcbi5zdXJyb3VuZCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvcik7XFxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi8qIE1hcnF1ZWUgKi9cXG5cXG4uaW5uZXIge1xcblxcbiAgbWFyZ2luOiAwO1xcblxcbi8qIFN0YXJ0aW5nIHBvc2l0aW9uICovXFxuLW1vei10cmFuc2Zvcm06dHJhbnNsYXRlWCgxNTAlKTtcXG4td2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKDE1MCUpOyAgICBcXG50cmFuc2Zvcm06dHJhbnNsYXRlWCgxNTAlKTtcXG4vKiBBcHBseSBhbmltYXRpb24gdG8gdGhpcyBlbGVtZW50ICovICBcXG4tbW96LWFuaW1hdGlvbjogYW5ub3VuY2VtZW50LWJhciA1cyBsaW5lYXIgaW5maW5pdGU7XFxuLXdlYmtpdC1hbmltYXRpb246IGFubm91bmNlbWVudC1iYXIgNXMgbGluZWFyIGluZmluaXRlO1xcbmFuaW1hdGlvbjogYW5ub3VuY2VtZW50LWJhciA1cyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi8qIE1vdmUgaXQgKGRlZmluZSB0aGUgYW5pbWF0aW9uKSAqL1xcbkAtbW96LWtleWZyYW1lcyBhbm5vdW5jZW1lbnQtYmFyIHtcXG4wJSAgIHsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cXG4xMDAlIHsgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUpOyB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBhbm5vdW5jZW1lbnQtYmFyIHtcXG4wJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7IH1cXG4xMDAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUpOyB9XFxufVxcbkBrZXlmcmFtZXMgYW5ub3VuY2VtZW50LWJhciB7XFxuMCUgICB7IFxcbi1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cXG4td2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgLyogRmlyZWZveCBidWcgZml4ICovXFxudHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpOyAgICAgICBcXG59XFxuMTAwJSAgICB7IFxcbi1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xNTAlKTsgLyogRmlyZWZveCBidWcgZml4ICovXFxuLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUpOyAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cXG50cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTE1MCUpOyBcXG59XFxufVxcblxcblxcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc1MHB4ICkgeyBcXG4gIC53cmFwcGVyIHsgXFxuICAgIG1heC13aWR0aDogMjIwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLWNvbHVtbjogMyAvIHNwYW4gMztcXG4gIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwid3JhcHBlclwiOiBcIkFubm91bmNlbWVudEJhcl93cmFwcGVyX19Fal8wa1wiLFxuXHRcInN1cnJvdW5kXCI6IFwiQW5ub3VuY2VtZW50QmFyX3N1cnJvdW5kX18ybkYzeFwiLFxuXHRcImlubmVyXCI6IFwiQW5ub3VuY2VtZW50QmFyX2lubmVyX19WNVNRa1wiLFxuXHRcImFubm91bmNlbWVudC1iYXJcIjogXCJBbm5vdW5jZW1lbnRCYXJfYW5ub3VuY2VtZW50LWJhcl9fYThERHpcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[4].use[2]!./styles/AnnouncementBar.module.css\n"));

/***/ })

});