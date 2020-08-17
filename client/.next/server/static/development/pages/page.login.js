module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/lib/button/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/button/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/button/style/index.less");

/***/ }),

/***/ "./node_modules/antd/lib/button/style/index.less":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/button/style/index.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/form/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/form/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/form/style/index.less");

__webpack_require__(/*! ../../grid/style */ "./node_modules/antd/lib/grid/style/index.js");

/***/ }),

/***/ "./node_modules/antd/lib/form/style/index.less":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/form/style/index.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/grid/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/grid/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/grid/style/index.less");

/***/ }),

/***/ "./node_modules/antd/lib/grid/style/index.less":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/grid/style/index.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/input/style/index.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/input/style/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/input/style/index.less");

__webpack_require__(/*! ../../button/style */ "./node_modules/antd/lib/button/style/index.js");

/***/ }),

/***/ "./node_modules/antd/lib/input/style/index.less":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/input/style/index.less ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/style/index.less":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/style/index.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/page.login.js":
/*!*****************************!*\
  !*** ./pages/page.login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "antd/lib/button");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "antd/lib/input");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);






var _jsxFileName = "D:\\GitHub\\shopandrent-computer\\pages\\page.login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
const FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item;




function loginPage() {
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])("");
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])("");
  const {
    0: firstname,
    1: setFirstname
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])("");
  const {
    0: lastname,
    1: setLastname
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])("");
  const {
    0: namelogin,
    1: setNameLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('');
  const {
    0: passwordlogin,
    1: setPasswordLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(() => {
    localStorage.clear();
  }, []);

  const loginData = () => {
    if (!namelogin || !passwordlogin) {
      alert('กรุณากรอกข้อมูลให้ครบ');
    } else {
      let data = {
        user_name: namelogin,
        pass_word: passwordlogin
      };
      axios__WEBPACK_IMPORTED_MODULE_8___default()({
        method: "post",
        url: "http://localhost:5000/signin",
        data: data
      }).then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user', JSON.stringify(res.data.savedUser));
        localStorage.setItem('type', "Shop");
        next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/page.shop');
      }).catch(err => {
        console.log(err);
      });
    }
  };

  const postData = () => {
    if (!name || !password || !firstname || !lastname) {
      alert('กรุณากรอกข้อมูลให้ครบ');
    } else {
      let data = {
        user_name: name,
        pass_word: password,
        first_name: firstname,
        last_name: lastname
      };
      axios__WEBPACK_IMPORTED_MODULE_8___default()({
        method: "post",
        url: "http://localhost:5000/signup",
        headers: {
          "Content-Type": "application/json"
        },
        data: data
      }).then(res => {
        console.log(res);
        next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/page.login');
      }).catch(error => {
        console.log("ERROR", error);
      });
    }
  };

  return __jsx(FormItem, {
    style: {
      margin: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "lg-card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "lg-input",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
    value: name,
    onChange: e => setName(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "lg-input",
    type: "password",
    placeholder: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
    value: password,
    onChange: e => setPassword(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 13
    }
  }, "\u0E0A\u0E37\u0E48\u0E2D"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "lg-input",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D",
    value: firstname,
    onChange: e => setFirstname(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "lg-input",
    placeholder: "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25",
    value: lastname,
    onChange: e => setLastname(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "lg-btn",
    onClick: () => postData(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }
  }, "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01")), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "lg-input",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
    value: namelogin,
    onChange: e => setNameLogin(e.target.value),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }), __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: passwordlogin,
    onChange: e => setPasswordLogin(e.target.value),
    className: "lg-input",
    type: "password",
    placeholder: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }
  }), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "lg-btn",
    onClick: () => loginData(),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")))));
}

/* harmony default export */ __webpack_exports__["default"] = (loginPage);

/***/ }),

/***/ 7:
/*!***********************************!*\
  !*** multi ./pages/page.login.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitHub\shopandrent-computer\pages\page.login.js */"./pages/page.login.js");


/***/ }),

/***/ "antd/lib/button":
/*!**********************************!*\
  !*** external "antd/lib/button" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "antd/lib/form":
/*!********************************!*\
  !*** external "antd/lib/form" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "antd/lib/input":
/*!*********************************!*\
  !*** external "antd/lib/input" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2J1dHRvbi9zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZm9ybS9zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZ3JpZC9zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvaW5wdXQvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcGFnZS5sb2dpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9mb3JtXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvaW5wdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJGb3JtSXRlbSIsIkl0ZW0iLCJsb2dpblBhZ2UiLCJuYW1lIiwic2V0TmFtZSIsInVzZVN0YXRlIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImZpcnN0bmFtZSIsInNldEZpcnN0bmFtZSIsImxhc3RuYW1lIiwic2V0TGFzdG5hbWUiLCJuYW1lbG9naW4iLCJzZXROYW1lTG9naW4iLCJwYXNzd29yZGxvZ2luIiwic2V0UGFzc3dvcmRMb2dpbiIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImNsZWFyIiwibG9naW5EYXRhIiwiYWxlcnQiLCJkYXRhIiwidXNlcl9uYW1lIiwicGFzc193b3JkIiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsInNldEl0ZW0iLCJ0b2tlbiIsIkpTT04iLCJzdHJpbmdpZnkiLCJzYXZlZFVzZXIiLCJyb3V0ZXIiLCJwdXNoIiwiY2F0Y2giLCJlcnIiLCJwb3N0RGF0YSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJoZWFkZXJzIiwiZXJyb3IiLCJtYXJnaW4iLCJlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RmE7O0FBRWIsbUJBQU8sQ0FBQyx3RUFBd0I7O0FBRWhDLG1CQUFPLENBQUMscUVBQWMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKVDs7QUFFYixtQkFBTyxDQUFDLHdFQUF3Qjs7QUFFaEMsbUJBQU8sQ0FBQyxtRUFBYzs7QUFFdEIsbUJBQU8sQ0FBQyxxRUFBa0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOYjs7QUFFYixtQkFBTyxDQUFDLHdFQUF3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QUU1QixTQUEvRDtBQUNFLFlBQVEsRUFBR2tDLENBQUQsSUFBT2pDLFlBQVksQ0FBQ2lDLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBRC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0RBTEYsRUFNRTtBQUNBLFNBQUssRUFBRWxDLGFBRFA7QUFFQSxZQUFRLEVBQUdnQyxDQUFELElBQU8vQixnQkFBZ0IsQ0FBQytCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBRmpDO0FBR0UsYUFBUyxFQUFDLFVBSFo7QUFJRSxRQUFJLEVBQUMsVUFKUDtBQUtFLGVBQVcsRUFBQyxrREFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkYsRUFhRTtBQUNFLGFBQVMsRUFBQyxRQURaO0FBRUUsV0FBTyxFQUFFLE1BQU03QixTQUFTLEVBRjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEVBYkYsQ0F2Q0YsQ0FERixDQURGLENBREY7QUFrRUQ7O0FBRWNqQix3RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFJQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccGFnZS5sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXgubGVzc1wiKTtcblxucmVxdWlyZShcIi4vaW5kZXgubGVzc1wiKTsiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4Lmxlc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4Lmxlc3NcIik7XG5cbnJlcXVpcmUoXCIuLi8uLi9ncmlkL3N0eWxlXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXgubGVzc1wiKTtcblxucmVxdWlyZShcIi4vaW5kZXgubGVzc1wiKTsiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4Lmxlc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4Lmxlc3NcIik7XG5cbnJlcXVpcmUoXCIuLi8uLi9idXR0b24vc3R5bGVcIik7IiwiaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCB9IGZyb20gXCJhbnRkXCI7XHJcbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBsb2dpblBhZ2UoKSB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZmlyc3RuYW1lLCBzZXRGaXJzdG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xhc3RuYW1lLCBzZXRMYXN0bmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgW25hbWVsb2dpbiAsc2V0TmFtZUxvZ2luXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGFzc3dvcmRsb2dpbiAsIHNldFBhc3N3b3JkTG9naW5dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xyXG4gICAgfSxbXSlcclxuXHJcbiAgY29uc3QgbG9naW5EYXRhID0gKCkgPT4ge1xyXG4gICAgICBpZighbmFtZWxvZ2luIHx8ICFwYXNzd29yZGxvZ2luKSB7XHJcbiAgICAgICAgICBhbGVydCgn4LiB4Lij4Li44LiT4Liy4LiB4Lij4Lit4LiB4LiC4LmJ4Lit4Lih4Li54Lil4LmD4Lir4LmJ4LiE4Lij4LiaJylcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICAgIHVzZXJfbmFtZTpuYW1lbG9naW4sXHJcbiAgICAgICAgICAgICAgcGFzc193b3JkOnBhc3N3b3JkbG9naW4sXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgICAgbWV0aG9kOlwicG9zdFwiLFxyXG4gICAgICAgICAgICAgIHVybDpcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9zaWduaW5cIixcclxuICAgICAgICAgICAgICBkYXRhOmRhdGFcclxuICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJyxyZXMuZGF0YS50b2tlbilcclxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcicsSlNPTi5zdHJpbmdpZnkocmVzLmRhdGEuc2F2ZWRVc2VyKSlcclxuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndHlwZScsXCJTaG9wXCIpXHJcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goJy9wYWdlLnNob3AnKVxyXG4gICAgICAgICAgfSkuY2F0Y2goZXJyPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHBvc3REYXRhID0gKCkgPT4ge1xyXG4gICAgaWYgKCFuYW1lIHx8ICFwYXNzd29yZCB8fCAhZmlyc3RuYW1lIHx8ICFsYXN0bmFtZSkge1xyXG4gICAgICAgIGFsZXJ0KCfguIHguKPguLjguJPguLLguIHguKPguK3guIHguILguYnguK3guKHguLnguKXguYPguKvguYnguITguKPguJonKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgdXNlcl9uYW1lOiBuYW1lLFxyXG4gICAgICAgIHBhc3Nfd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgZmlyc3RfbmFtZTogZmlyc3RuYW1lLFxyXG4gICAgICAgIGxhc3RfbmFtZTogbGFzdG5hbWUsXHJcbiAgICAgIH07XHJcbiAgICAgIGF4aW9zKHtcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvc2lnbnVwXCIsXHJcbiAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6ZGF0YVxyXG4gICAgICB9KS50aGVuKHJlcz0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9wYWdlLmxvZ2luJylcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yPT57XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVSUk9SXCIsZXJyb3IpO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUl0ZW0gc3R5bGU9e3sgbWFyZ2luOiBcIjBweFwiIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZy1jYXJkXCI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+4Liq4Lih4Lix4LiE4Lij4Liq4Lih4Liy4LiK4Li04LiBPC9oMj5cclxuICAgICAgICAgICAgPGgzPuC4iuC4t+C5iOC4reC4nOC4ueC5ieC5g+C4iuC5ieC4h+C4suC4mTwvaDM+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnLWlucHV0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4iuC4t+C5iOC4reC4nOC4ueC5ieC5g+C4iuC5ieC4h+C4suC4mVwiXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGgzPuC4o+C4q+C4seC4quC4nOC5iOC4suC4mTwvaDM+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnLWlucHV0XCJcclxuICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4Lij4Lir4Lix4Liq4Lic4LmI4Liy4LiZXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoMz7guIrguLfguYjguK08L2gzPlxyXG4gICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZy1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK1cIlxyXG4gICAgICAgICAgICAgIHZhbHVlPXtmaXJzdG5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRGaXJzdG5hbWUoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDM+4LiZ4Liy4Lih4Liq4LiB4Li44LilPC9oMz5cclxuICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGctaW5wdXRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi4LiZ4Liy4Lih4Liq4LiB4Li44LilXCJcclxuICAgICAgICAgICAgICB2YWx1ZT17bGFzdG5hbWV9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRMYXN0bmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZy1idG5cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHBvc3REYXRhKCl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDguKrguKHguLHguITguKPguKrguKHguLLguIrguLTguIFcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj7guYDguILguYnguLLguKrguLnguYjguKPguLDguJrguJo8L2gyPlxyXG4gICAgICAgICAgICA8aDM+4LiK4Li34LmI4Lit4Lic4Li54LmJ4LmD4LiK4LmJ4LiH4Liy4LiZPC9oMz5cclxuICAgICAgICAgICAgPElucHV0IGNsYXNzTmFtZT1cImxnLWlucHV0XCIgcGxhY2Vob2xkZXI9XCLguIrguLfguYjguK3guJzguLnguYnguYPguIrguYnguIfguLLguJlcIiB2YWx1ZT17bmFtZWxvZ2lufVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZUxvZ2luKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICAgICAgPGgzPuC4o+C4q+C4seC4quC4nOC5iOC4suC4mTwvaDM+XHJcbiAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRsb2dpbn1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZExvZ2luKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZy1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuC4o+C4q+C4seC4quC4nOC5iOC4suC4mVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZy1idG5cIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGxvZ2luRGF0YSgpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAg4LmA4LiC4LmJ4Liy4Liq4Li54LmI4Lij4Liw4Lia4LiaXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Gb3JtSXRlbT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2dpblBhZ2U7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9mb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2lucHV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=