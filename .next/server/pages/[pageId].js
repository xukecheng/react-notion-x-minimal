"use strict";
(() => {
var exports = {};
exports.id = 899;
exports.ids = [899];
exports.modules = {

/***/ 541:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Page),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_NotionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(718);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82);
/* harmony import */ var _lib_notion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_NotionPage__WEBPACK_IMPORTED_MODULE_2__, _lib_notion__WEBPACK_IMPORTED_MODULE_3__]);
([_components_NotionPage__WEBPACK_IMPORTED_MODULE_2__, _lib_notion__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const getStaticProps = async (context)=>{
    const pageId = context.params.pageId || _lib_config__WEBPACK_IMPORTED_MODULE_4__/* .rootNotionPageId */ .A;
    const recordMap = await _lib_notion__WEBPACK_IMPORTED_MODULE_3__/* ["default"].getPage */ .Z.getPage(pageId);
    return {
        props: {
            recordMap
        },
        revalidate: 10
    };
};
async function getStaticPaths() {
    return {
        paths: [],
        fallback: true
    };
}
function Page({ recordMap  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_NotionPage__WEBPACK_IMPORTED_MODULE_2__/* .NotionPage */ .m, {
        recordMap: recordMap,
        rootPageId: _lib_config__WEBPACK_IMPORTED_MODULE_4__/* .rootNotionPageId */ .A
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 93:
/***/ ((module) => {

module.exports = import("notion-client");;

/***/ }),

/***/ 751:
/***/ ((module) => {

module.exports = import("notion-utils");;

/***/ }),

/***/ 574:
/***/ ((module) => {

module.exports = import("react-notion-x");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [35], () => (__webpack_exec__(541)));
module.exports = __webpack_exports__;

})();