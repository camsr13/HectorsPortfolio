(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6386:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "AnnouncementBar_wrapper__Ej_0k",
	"surround": "AnnouncementBar_surround__2nF3x",
	"inner": "AnnouncementBar_inner__V5SQk",
	"announcement-bar": "AnnouncementBar_announcement-bar__a8DDz"
};


/***/ }),

/***/ 2011:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "CurrentTime_wrapper__QbSeS",
	"time": "CurrentTime_time__zK54X"
};


/***/ }),

/***/ 1003:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Footer_wrapper__Lvr15",
	"footerEmail": "Footer_footerEmail__GS7dh",
	"themePicker": "Footer_themePicker__Tlovi",
	"themeToggle": "Footer_themeToggle__tBx_S",
	"creamMode": "Footer_creamMode__IllIL"
};


/***/ }),

/***/ 4666:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Header_wrapper__jiYD5",
	"title": "Header_title__UlymB"
};


/***/ }),

/***/ 9200:
/***/ ((module) => {

// Exports
module.exports = {
	"menuButton": "MobileNavigation_menuButton__Hs4Hr",
	"wrapper": "MobileNavigation_wrapper__rm238",
	"mainNavItemList": "MobileNavigation_mainNavItemList__h_ya2",
	"socialNavItemList": "MobileNavigation_socialNavItemList__nhce8"
};


/***/ }),

/***/ 9302:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Navigation_wrapper__J4_uA",
	"socialNavItemList": "Navigation_socialNavItemList__RKhto",
	"mainNavItemList": "Navigation_mainNavItemList__z07nE",
	"mainNavItem": "Navigation_mainNavItem___Q8VD",
	"socialNavItem": "Navigation_socialNavItem__1ya8c",
	"submenu": "Navigation_submenu__qJ5Mw"
};


/***/ }),

/***/ 765:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1003);
/* harmony import */ var _styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function Footer() {
    const [isDarkMode, setIsDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function handleClick() {
        setIsDarkMode(!isDarkMode);
        const root = document.documentElement;
        if (isDarkMode) {
            root.style.setProperty("--background-color", "var(--light-background)");
            root.style.setProperty("--color", "#000000");
        } else {
            root.style.setProperty("--background-color", "var(--dark-background)");
            root.style.setProperty("--color", "#FFFFFF");
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().themePicker),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().themeToggle),
                    onClick: ()=>handleClick()
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Footer_module_css__WEBPACK_IMPORTED_MODULE_2___default().footerEmail),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "mailto:hello@fergushaywood.com",
                    children: "hello@fergushaywood.com"
                })
            })
        ]
    });
}


/***/ }),

/***/ 1376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/Header.module.css
var Header_module = __webpack_require__(4666);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./styles/AnnouncementBar.module.css
var AnnouncementBar_module = __webpack_require__(6386);
var AnnouncementBar_module_default = /*#__PURE__*/__webpack_require__.n(AnnouncementBar_module);
;// CONCATENATED MODULE: ./components/AnnouncementBar.js



function announcementBar() {
    const [announcementBar, setAnnouncementBar] = (0,external_react_.useState)("Lets work together \uD83E\uDD1D");
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (AnnouncementBar_module_default()).wrapper,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (AnnouncementBar_module_default()).surround,
            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                className: (AnnouncementBar_module_default()).inner,
                children: announcementBar
            })
        })
    });
}

;// CONCATENATED MODULE: external "react-moment"
const external_react_moment_namespaceObject = require("react-moment");
var external_react_moment_default = /*#__PURE__*/__webpack_require__.n(external_react_moment_namespaceObject);
;// CONCATENATED MODULE: external "moment-timezone"
const external_moment_timezone_namespaceObject = require("moment-timezone");
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./components/NoSsr.js



const NoSsr = (props)=>/*#__PURE__*/ jsx_runtime_.jsx((external_react_default()).Fragment, {
        children: props.children
    });
/* harmony default export */ const components_NoSsr = (dynamic_default()(()=>Promise.resolve(NoSsr), {
    ssr: false
}));

// EXTERNAL MODULE: ./styles/CurrentTime.module.css
var CurrentTime_module = __webpack_require__(2011);
var CurrentTime_module_default = /*#__PURE__*/__webpack_require__.n(CurrentTime_module);
;// CONCATENATED MODULE: ./components/CurrentTime.js





function CurrentTime() {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_NoSsr, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (CurrentTime_module_default()).wrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    children: "Tāmaki Makaurau (Auckland), Aotearoa"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((external_react_moment_default()), {
                    className: (CurrentTime_module_default()).time,
                    tz: "Pacific/Auckland",
                    interval: "1000",
                    format: "hh:mm:ss a"
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./styles/MobileNavigation.module.css
var MobileNavigation_module = __webpack_require__(9200);
var MobileNavigation_module_default = /*#__PURE__*/__webpack_require__.n(MobileNavigation_module);
;// CONCATENATED MODULE: ./components/MobileNavigation.js




function MobileNavigation({ items , isActive , setActive  }) {
    const mainNav = items.result[0][0].navItems;
    const socialNav = items.result[0][1].navItems;
    const [menuStatus, setMenuStatus] = (0,external_react_.useState)("Menu");
    (0,external_react_.useEffect)(()=>{
        isActive ? setMenuStatus("Close") : setMenuStatus("Menu");
    }, [
        isActive
    ]);
    function handleClick() {
        setActive((current)=>!current);
        !isActive ? setMenuStatus("Close") : setMenuStatus("Menu");
    }
    function handleNavClick() {
        document.body.removeAttribute("style");
        handleClick();
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                onClick: ()=>handleClick(),
                className: (MobileNavigation_module_default()).menuButton,
                children: menuStatus
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: `mobileNavWrapper ${isActive ? "is-active" : ""}`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: (MobileNavigation_module_default()).mainNavItemList,
                        children: mainNav.map((item, i)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                id: item.text,
                                className: "navItem",
                                onClick: ()=>handleNavClick(),
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: `/${item.navItemUrl.linkUrl}`,
                                    children: item.text
                                })
                            }, item.text);
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: (MobileNavigation_module_default()).socialNavItemList,
                        children: socialNav.map((item, i)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "navItem",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    target: "_blank",
                                    href: item.navItemUrl.linkUrl,
                                    children: item.text
                                })
                            }, item.text);
                        })
                    })
                ]
            })
        ]
    });
}

;// CONCATENATED MODULE: ./components/Header.js







function Header({ content  }) {
    const [isActive, setActive] = (0,external_react_.useState)(false);
    function handleClick() {
        document.body.removeAttribute("style");
        if (isActive) {
            setActive(false);
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
            className: (Header_module_default()).wrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: (Header_module_default()).title,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        legacyBehavior: true,
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            onClick: ()=>handleClick(),
                            children: "Fergus Haywood"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(announcementBar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(CurrentTime, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(MobileNavigation, {
                    items: content,
                    isActive: isActive,
                    setActive: setActive
                })
            ]
        })
    });
}


/***/ }),

/***/ 7345:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* unused harmony export fetchData */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1376);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(765);
/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);





const data = await fetchData();
function Layout({ children  }) {
    const siteSettings = data.settingsBody.result[0][0];
    const navContent = data.navigationBody;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: siteSettings.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, height=device-height, initial-scale=1, maximum-scale=10, user-scalable=0"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: siteSettings.description
                    }, "desc")
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navigation__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                content: navContent
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Header__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                content: navContent
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "main-wrapper",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
}
async function fetchData() {
    const navigationQuery = encodeURIComponent(`*[ _type == 'navigation']`);
    const navigationURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${navigationQuery}]`;
    const navigationBody = await fetch(navigationURL).then((res)=>res.json());
    const settingsQuery = encodeURIComponent(`*[ _type == 'siteConfig']`);
    const settingsURL = `https://36om7i3d.api.sanity.io/v1/data/query/production?query=[${settingsQuery}]`;
    const settingsBody = await fetch(settingsURL).then((res)=>res.json());
    return {
        navigationBody,
        settingsBody
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } }, 1);

/***/ }),

/***/ 10:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navigation)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9302);
/* harmony import */ var _styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);



function Navigation({ content  }) {
    function handleClick() {
        document.body.removeAttribute("style");
    }
    const mainNav = content.result[0][0].navItems;
    const socialNav = content.result[0][1].navItems;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().wrapper),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainNavItemList),
                    children: mainNav.map((item, i)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            id: item.text,
                            className: "navItem",
                            onClick: ()=>handleClick(),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: `/${item.navItemUrl.linkUrl}`,
                                children: item.text
                            })
                        }, item.text);
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_styles_Navigation_module_css__WEBPACK_IMPORTED_MODULE_2___default().socialNavItemList),
                    children: socialNav.map((item, i)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "navItem",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                target: "_blank",
                                href: item.navItemUrl.linkUrl,
                                children: item.text
                            })
                        }, item.text);
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 6004:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyApp)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7345);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
([_components_Layout__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {
                strategy: "lazyOnload",
                src: `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_3___default()), {
                strategy: "lazyOnload",
                children: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {
                    mode: "wait",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,664,927], () => (__webpack_exec__(6004)));
module.exports = __webpack_exports__;

})();