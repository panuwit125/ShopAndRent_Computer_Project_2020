module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Joxa");


/***/ }),

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

/***/ "A4pX":
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),

/***/ "G3+4":
/***/ (function(module, exports) {



/***/ }),

/***/ "Joxa":
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
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ek7I");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("A4pX");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("nTym");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("foLw");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_component_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("u/Vi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var file_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("jP/1");
/* harmony import */ var file_loader__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(file_loader__WEBPACK_IMPORTED_MODULE_13__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

const FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a.Item;
const {
  Option
} = antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a;






function InsertProduct() {
  const {
    0: nameProduct,
    1: setNameProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])("");
  const {
    0: descriptionProduct,
    1: setDescriptionProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])("");
  const {
    0: priceProduct,
    1: setPriceProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])("");
  const {
    0: blandProduct,
    1: setBlandProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])("");
  const {
    0: image1Product,
    1: setIamge1Product
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])("");
  const {
    0: url1,
    1: set1Url
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])("");
  const {
    0: image2Product,
    1: setIamge2Product
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])("");
  const {
    0: url2,
    1: set2Url
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])("");
  const {
    0: image3Product,
    1: setIamge3Product
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])("");
  const {
    0: url3,
    1: set3Url
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])("");
  const {
    0: image4Product,
    1: setIamge4Product
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])("");
  const {
    0: url4,
    1: set4Url
  } = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])("");
  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(() => {
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjM5ODNmMzhhNDM4MjY5ZDA2ZmJhMzUiLCJpYXQiOjE1OTc2Mzg2MTd9.JEeHZBwagb1jltAu1_--YKfjQDWOqnQNMIiDypfbG-Y";

    if (url1) {
      fetch("http://localhost:5000/insertproduct", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        },
        body: JSON.stringify({
          name_product: nameProduct,
          description_product: descriptionProduct,
          price_product: priceProduct,
          bland_product: blandProduct,
          image_product: url1
        })
      }).then(res => res.json()).then(data => {
        if (data.err) {
          console.log(data.err);
        } else {
          console.log("create succussfull");
        }
      }).catch(err => console.log(err));
    }
  }, [url1]);

  const imagefetch = (image, seturl) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "shopandrent");
    data.append("cloud_name", "panuwitdev");
    fetch("https://api.cloudinary.com/v1_1/panuwitdev/image/upload", {
      method: "post",
      body: data
    }).then(res => res.json()).then(data => {
      console.log(data);
      seturl(data.url);
    }).catch(err => {
      console.log(err);
    });
  };

  const postproduct = () => {
    console.log(image1Product);

    if (!nameProduct || !descriptionProduct || !priceProduct || !blandProduct || !image1Product) {
      alert("กรุณาใส่ข้อมูลหรือเลือกรูปภาพ");
    } else {
      imagefetch(image1Product, set1Url);
    }
  };

  return __jsx(FormItem, {
    style: {
      margin: "0px"
    }
  }, __jsx("div", {
    className: "br"
  }, __jsx("div", {
    className: "br-header"
  }, __jsx("h1", null, "Insert Product")), __jsx("div", {
    style: {
      padding: "50px 100px"
    }
  }, __jsx("h2", {
    style: {
      color: "black"
    }
  }, "\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "ip-iuput",
    value: nameProduct,
    onChange: e => setNameProduct(e.target.value)
  }), __jsx("h2", {
    style: {
      color: "black"
    }
  }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.TextArea, {
    rows: "5",
    className: "ip-iuput",
    value: descriptionProduct,
    onChange: e => setDescriptionProduct(e.target.value)
  }), __jsx("h2", {
    style: {
      color: "black"
    }
  }, "\u0E23\u0E32\u0E04\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "ip-iuput",
    value: priceProduct,
    onChange: e => setPriceProduct(e.target.value)
  }), __jsx("h2", {
    style: {
      color: "black"
    }
  }, "\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "ip-iuput",
    value: blandProduct,
    onChange: e => setBlandProduct(e.target.value)
  }), __jsx("h2", {
    style: {
      color: "black"
    }
  }, "\u0E23\u0E39\u0E1B\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx("div", null, __jsx("input", {
    type: "file",
    onChange: e => setIamge1Product(e.target.files[0]),
    style: {
      color: "black"
    }
  }), __jsx("input", {
    type: "file",
    onChange: e => setIamge2Product(e.target.files[0]),
    style: {
      color: "black"
    }
  }), __jsx("input", {
    type: "file",
    onChange: e => setIamge3Product(e.target.files[0]),
    style: {
      color: "black"
    }
  }), __jsx("input", {
    type: "file",
    onChange: e => setIamge4Product(e.target.files[0]),
    style: {
      color: "black"
    }
  })), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: () => postproduct(),
    type: "primary",
    style: {
      marginTop: "20px"
    }
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"))));
}

/* harmony default export */ __webpack_exports__["default"] = (InsertProduct);

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

/***/ "YCql":
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

/***/ "jP/1":
/***/ (function(module, exports) {

module.exports = require("file-loader");

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

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });