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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1yXF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("VEUW");

__webpack_require__("dnqb");

/***/ }),

/***/ "3Ey6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MaXC");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cUip");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Uqqx");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nTym");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("foLw");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);






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
    }
  }, __jsx("div", {
    className: "lg"
  }, __jsx("div", {
    className: "lg-card"
  }, __jsx("div", null, __jsx("h2", null, "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01"), __jsx("h3", null, "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "lg-input",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
    value: name,
    onChange: e => setName(e.target.value)
  }), __jsx("h3", null, "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "lg-input",
    type: "password",
    placeholder: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19",
    value: password,
    onChange: e => setPassword(e.target.value)
  }), __jsx("h3", null, "\u0E0A\u0E37\u0E48\u0E2D"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "lg-input",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D",
    value: firstname,
    onChange: e => setFirstname(e.target.value)
  }), __jsx("h3", null, "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "lg-input",
    placeholder: "\u0E19\u0E32\u0E21\u0E2A\u0E01\u0E38\u0E25",
    value: lastname,
    onChange: e => setLastname(e.target.value)
  }), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "lg-btn",
    onClick: () => postData()
  }, "\u0E2A\u0E21\u0E31\u0E04\u0E23\u0E2A\u0E21\u0E32\u0E0A\u0E34\u0E01")), __jsx("div", null, __jsx("h2", null, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A"), __jsx("h3", null, "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "lg-input",
    placeholder: "\u0E0A\u0E37\u0E48\u0E2D\u0E1C\u0E39\u0E49\u0E43\u0E0A\u0E49\u0E07\u0E32\u0E19",
    value: namelogin,
    onChange: e => setNameLogin(e.target.value)
  }), __jsx("h3", null, "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: passwordlogin,
    onChange: e => setPasswordLogin(e.target.value),
    className: "lg-input",
    type: "password",
    placeholder: "\u0E23\u0E2B\u0E31\u0E2A\u0E1C\u0E48\u0E32\u0E19"
  }), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "lg-btn",
    onClick: () => loginData()
  }, "\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A")))));
}

/* harmony default export */ __webpack_exports__["default"] = (loginPage);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("3Ey6");


/***/ }),

/***/ "L/94":
/***/ (function(module, exports) {



/***/ }),

/***/ "MaXC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("VEUW");

__webpack_require__("XJbt");

/***/ }),

/***/ "OBCE":
/***/ (function(module, exports) {



/***/ }),

/***/ "Uqqx":
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),

/***/ "VEUW":
/***/ (function(module, exports) {



/***/ }),

/***/ "XJbt":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cUip":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("VEUW");

__webpack_require__("L/94");

__webpack_require__("MaXC");

/***/ }),

/***/ "dnqb":
/***/ (function(module, exports) {



/***/ }),

/***/ "eGmO":
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),

/***/ "foLw":
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "nTym":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("VEUW");

__webpack_require__("OBCE");

__webpack_require__("1yXF");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });