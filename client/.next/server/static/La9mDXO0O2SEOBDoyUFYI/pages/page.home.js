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

/***/ "+gpm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MaXC");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nTym");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("foLw");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_component_header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("u/Vi");




var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;
const FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item;




function home() {
  const nexthandle = type => {
    localStorage.setItem('type', type);
    next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/page.shop");
    return null;
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    localStorage.clear();
  }, []);
  return __jsx(FormItem, {
    style: {
      margin: "0px"
    }
  }, __jsx("div", {
    className: "br"
  }, __jsx("div", {
    className: "br-header"
  }, __jsx(_components_component_header__WEBPACK_IMPORTED_MODULE_6__["default"], null)), __jsx("div", {
    className: "br-body"
  }, __jsx("div", {
    className: "br-body-1"
  }, __jsx("div", {
    className: "br-circle"
  }), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "br-btn",
    onClick: () => nexthandle('Rent')
  }, "RENT"), __jsx("h2", {
    style: {
      color: "black"
    }
  }, "\u0E40\u0E0A\u0E48\u0E32\u0E42\u0E19\u0E4A\u0E15\u0E1A\u0E38\u0E04\u0E23\u0E32\u0E04\u0E32\u0E40\u0E23\u0E34\u0E48\u0E21\u0E15\u0E49\u0E19 200 \u0E1A\u0E32\u0E17/\u0E27\u0E31\u0E19")), __jsx("div", {
    className: "br-body-1 br-body-2"
  }, __jsx("div", {
    className: "br-circle"
  }), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "br-btn",
    onClick: () => nexthandle("Shop")
  }, "SHOP"), __jsx("h2", {
    style: {
      color: "black"
    }
  }, "\u0E0B\u0E37\u0E49\u0E2D\u0E04\u0E2D\u0E21\u0E1E\u0E34\u0E27\u0E40\u0E15\u0E2D\u0E23\u0E4C\u0E23\u0E32\u0E04\u0E32\u0E16\u0E39\u0E01 \u0E04\u0E38\u0E13\u0E20\u0E32\u0E1E\u0E14\u0E35")))));
}

/* harmony default export */ __webpack_exports__["default"] = (home);

/***/ }),

/***/ "1yXF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("VEUW");

__webpack_require__("dnqb");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("+gpm");


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

/***/ "u/Vi":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const HeaderComponent = props => {
  return __jsx("h1", {
    style: {
      fontSize: "50px"
    }
  }, "SECONDHAND NOTEBOOK (", props.page, ")");
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderComponent);

/***/ })

/******/ });