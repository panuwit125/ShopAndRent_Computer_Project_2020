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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1yXF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("VEUW");

__webpack_require__("dnqb");

/***/ }),

/***/ "3Mqf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("VEUW");

__webpack_require__("G3+4");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Kp9n");


/***/ }),

/***/ "A4pX":
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "G3+4":
/***/ (function(module, exports) {



/***/ }),

/***/ "Kp9n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("MaXC");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("eGmO");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ek7I");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("A4pX");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nTym");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("foLw");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);






var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;
const FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item;


const {
  Option
} = antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default.a;


function PaymentPage() {
  return __jsx(FormItem, {
    style: {
      margin: "0px"
    }
  }, __jsx("div", {
    className: "br"
  }, __jsx("div", {
    className: "br-header"
  }, __jsx("h1", null, "Header")), __jsx("div", {
    className: "pm-body"
  }, __jsx("div", {
    className: "pm-back"
  }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_8___default.a.push("/page.home")
  }, "Back"), __jsx("h2", {
    style: {
      color: "black"
    }
  }, "PAYMENT SELL"), __jsx("a", {
    style: {
      color: "black"
    }
  }, "Edit")), __jsx("div", {
    className: "pm-address"
  }, __jsx("div", {
    className: "pm-address-1"
  }, __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["EnvironmentOutlined"], {
    style: {
      color: "black",
      fontSize: "30px"
    }
  }), __jsx("h2", {
    style: {
      color: "black"
    }
  }, "Address")), __jsx("div", {
    className: "pm-address-2"
  }, __jsx("h3", {
    style: {
      color: "black"
    }
  }, "\u0E42\u0E21\u0E08\u0E34 \u0E01\u0E34\u0E49\u0E19\u0E01\u0E34\u0E49\u0E19 096-0000000"), __jsx("h3", {
    style: {
      color: "black"
    }
  }, "\u0E40\u0E2D\u0E19\u0E22\u0E39\u0E2A\u0E41\u0E04\u0E27\u0E4C \u0E0B\u0E2D\u0E22 3 \u0E21.1 \u0E08.\u0E1E\u0E34\u0E29\u0E13\u0E38\u0E42\u0E25\u0E01 65000"))), __jsx("div", {
    className: "pm-product"
  }, __jsx("img", {
    className: "pm-product-img",
    src: "https://img.bfmtv.com/c/1256/708/142/19260742b4b174e572508d9093b60.jpg"
  }), __jsx("div", {
    className: "pm-product-des"
  }, __jsx("h2", {
    style: {
      color: "black"
    }
  }, "Macbook Pro"), __jsx("h3", {
    style: {
      color: "black"
    }
  }, "Version SSD 128 GB CPU Core I7"), __jsx("div", {
    className: "pm-product-des-1"
  }, __jsx("h3", {
    style: {
      color: "red"
    }
  }, "20,000 THB"), __jsx("h3", null, "x 3 days ")))), __jsx("div", {
    className: "pm-option"
  }, __jsx("div", {
    className: "pm-option-1"
  }, __jsx("h3", {
    style: {
      color: "black"
    }
  }, "\u0E15\u0E31\u0E27\u0E40\u0E25\u0E37\u0E2D\u0E01\u0E01\u0E32\u0E23\u0E08\u0E31\u0E14\u0E2A\u0E48\u0E07"), __jsx("h2", {
    style: {
      color: "black"
    }
  }, "THAI POST (EMS)")), __jsx("div", {
    className: "pm-option-2"
  }, "100 THB.")), __jsx("div", {
    className: "pm-payment"
  }, __jsx("div", {
    className: "pm-payment-header"
  }, __jsx("h3", {
    style: {
      color: "black"
    }
  }, "\u0E27\u0E34\u0E18\u0E35\u0E01\u0E32\u0E23\u0E0A\u0E33\u0E23\u0E30\u0E40\u0E07\u0E34\u0E19"), __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default.a, {
    defaultValue: "lucy",
    style: {
      width: "auto"
    } //onChange={handleChange}

  }, __jsx(Option, {
    value: "jack"
  }, "\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23\u0E01\u0E2A\u0E34\u0E01\u0E23"), __jsx(Option, {
    value: "lucy"
  }, "\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23\u0E01\u0E23\u0E38\u0E07\u0E44\u0E17\u0E22"), __jsx(Option, {
    value: "disabled",
    disabled: true
  }, "Disabled"), __jsx(Option, {
    value: "Yiminghe"
  }, "\u0E18\u0E19\u0E32\u0E04\u0E32\u0E23\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E"))), __jsx("div", {
    className: "pm-payment-body"
  }, __jsx("div", {
    className: "pm-payment-body-1"
  }, __jsx("h3", {
    style: {
      color: "black"
    }
  }, "\u0E22\u0E2D\u0E14\u0E01\u0E32\u0E23\u0E40\u0E0A\u0E48\u0E32/\u0E0B\u0E37\u0E49\u0E2D ( x3 days )"), __jsx("h3", {
    style: {
      color: "black"
    }
  }, "600 THB")), __jsx("div", {
    className: "pm-payment-body-1"
  }, __jsx("h3", {
    style: {
      color: "black"
    }
  }, "\u0E04\u0E48\u0E32\u0E08\u0E31\u0E14\u0E2A\u0E48\u0E07"), __jsx("h3", {
    style: {
      color: "black"
    }
  }, "600 THB")), __jsx("div", {
    className: "pm-payment-body-1"
  }, __jsx("h3", {
    style: {
      color: "black"
    }
  }, "\u0E04\u0E48\u0E32\u0E21\u0E31\u0E14\u0E08\u0E33\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32( \u0E44\u0E14\u0E49\u0E04\u0E37\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E01\u0E32\u0E23\u0E2A\u0E48\u0E07\u0E04\u0E37\u0E19\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32 )"), __jsx("h3", {
    style: {
      color: "black"
    }
  }, "600 THB")))), __jsx("div", {
    className: "pm-footer"
  }, __jsx("h2", {
    style: {
      color: "black",
      margin: "10px"
    }
  }, "\u0E22\u0E2D\u0E14\u0E0A\u0E33\u0E23\u0E30\u0E17\u0E31\u0E49\u0E07\u0E2B\u0E21\u0E14"), __jsx("h2", {
    style: {
      color: "red",
      margin: "10px"
    }
  }, "1700 THB."), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "pm-footer-btn"
  }, "BUY")))));
}

/* harmony default export */ __webpack_exports__["default"] = (PaymentPage);

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

/***/ "YCql":
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

/***/ "ek7I":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("VEUW");

__webpack_require__("YCql");

__webpack_require__("3Mqf");

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

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ })

/******/ });