(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./resources/js/Pages/Frontpage.jsx":
/*!******************************************!*\
  !*** ./resources/js/Pages/Frontpage.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./resources/js/Pages/Layout.jsx");
/* harmony import */ var _components_HeroPosts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/HeroPosts */ "./resources/js/components/HeroPosts.jsx");




var Frontpage = function Frontpage(_ref) {
  var posts = _ref.posts;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Blog App - Home Page"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HeroPosts__WEBPACK_IMPORTED_MODULE_2__["default"], {
    posts: posts
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Frontpage);

/***/ }),

/***/ "./resources/js/Pages/Layout.jsx":
/*!***************************************!*\
  !*** ./resources/js/Pages/Layout.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./resources/js/components/Header.jsx");
/* harmony import */ var _helpers_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/alert */ "./resources/js/helpers/alert.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__);





var Layout = function Layout(_ref) {
  var title = _ref.title,
      children = _ref.children;

  var _usePage = Object(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_3__["usePage"])(),
      flash = _usePage.flash;

  if (title) {
    document.title = title;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], null), flash.message && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container container--center"
  }, Object(_helpers_alert__WEBPACK_IMPORTED_MODULE_2__["showAlert"])(flash, "success")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./resources/js/components/Alert.jsx":
/*!*******************************************!*\
  !*** ./resources/js/components/Alert.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_alert_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/alert-status */ "./resources/js/constants/alert-status.js");



var Alert = function Alert(_ref) {
  var type = _ref.type,
      content = _ref.content;

  var getType = function getType(type) {
    switch (type) {
      case _constants_alert_status__WEBPACK_IMPORTED_MODULE_1__["SUCCESS"]:
        return "alert--success";

      case _constants_alert_status__WEBPACK_IMPORTED_MODULE_1__["ERROR"]:
        return "alert--error";

      default:
        return "alert";
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert ".concat(getType(type))
  }, content.map(function (single) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: single,
      className: "alert__single"
    }, single);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Alert);

/***/ }),

/***/ "./resources/js/components/Header.jsx":
/*!********************************************!*\
  !*** ./resources/js/components/Header.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");
/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__);



var Header = function Header() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container header__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header__logo"
  }, "BlogApp"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "header__navigation"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    className: "header__link",
    href: "/"
  }, "Home"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    className: "header__link",
    href: "/blog"
  }, "Blog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__["InertiaLink"], {
    className: "header__link header__link--btn",
    href: "/login"
  }, "Login"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./resources/js/components/HeroPosts.jsx":
/*!***********************************************!*\
  !*** ./resources/js/components/HeroPosts.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var HeroPosts = function HeroPosts(_ref) {
  var posts = _ref.posts;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "container hero"
  }, "posts");
};

/* harmony default export */ __webpack_exports__["default"] = (HeroPosts);

/***/ }),

/***/ "./resources/js/constants/alert-status.js":
/*!************************************************!*\
  !*** ./resources/js/constants/alert-status.js ***!
  \************************************************/
/*! exports provided: SUCCESS, ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUCCESS", function() { return SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR", function() { return ERROR; });
var SUCCESS = "success";
var ERROR = "error";

/***/ }),

/***/ "./resources/js/helpers/alert.js":
/*!***************************************!*\
  !*** ./resources/js/helpers/alert.js ***!
  \***************************************/
/*! exports provided: showAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showAlert", function() { return showAlert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Alert */ "./resources/js/components/Alert.jsx");


var showAlert = function showAlert(errors, alertType) {
  return Object.keys(errors).length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Alert__WEBPACK_IMPORTED_MODULE_1__["default"], {
    type: alertType,
    content: Object.values(errors)
  }) : null;
};

/***/ })

}]);