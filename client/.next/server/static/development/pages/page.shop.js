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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/lib/card/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/card/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/card/style/index.less");

__webpack_require__(/*! ../../tabs/style */ "./node_modules/antd/lib/tabs/style/index.js");

__webpack_require__(/*! ../../row/style */ "./node_modules/antd/lib/row/style/index.js");

__webpack_require__(/*! ../../col/style */ "./node_modules/antd/lib/col/style/index.js");

/***/ }),

/***/ "./node_modules/antd/lib/card/style/index.less":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/card/style/index.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/col/style/index.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/col/style/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ../../grid/style */ "./node_modules/antd/lib/grid/style/index.js");

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

/***/ "./node_modules/antd/lib/layout/style/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/layout/style/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/layout/style/index.less");

/***/ }),

/***/ "./node_modules/antd/lib/layout/style/index.less":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/layout/style/index.less ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/menu/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/menu/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/menu/style/index.less");

__webpack_require__(/*! ../../tooltip/style */ "./node_modules/antd/lib/tooltip/style/index.js");

/***/ }),

/***/ "./node_modules/antd/lib/menu/style/index.less":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/menu/style/index.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/row/style/index.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/row/style/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ../../grid/style */ "./node_modules/antd/lib/grid/style/index.js");

/***/ }),

/***/ "./node_modules/antd/lib/style/index.less":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/style/index.less ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/tabs/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/tabs/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/tabs/style/index.less");

/***/ }),

/***/ "./node_modules/antd/lib/tabs/style/index.less":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/tabs/style/index.less ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/tooltip/style/index.js":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/style/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/tooltip/style/index.less");

/***/ }),

/***/ "./node_modules/antd/lib/tooltip/style/index.less":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/style/index.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/components/component.cardproduct.js":
/*!***************************************************!*\
  !*** ./pages/components/component.cardproduct.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\GitHub\\shopandrent-computer\\pages\\components\\component.cardproduct.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
const {
  Meta
} = antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a;



const CardProductComponent = props => {
  return __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    hoverable: true,
    style: {
      width: 240
    },
    cover: __jsx("img", {
      alt: "example",
      src: props.data.image_product,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }),
    className: "sp-card",
    onClick: () => next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/shop/description?id=" + props.data._id),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("h3", {
    style: {
      color: "black"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, props.data.name_product), __jsx("h3", {
    style: {
      color: "black"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, props.data.description_product), __jsx(Meta, {
    description: "ราคา " + props.data.price_product + " บาท ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CardProductComponent);

/***/ }),

/***/ "./pages/components/component.header.js":
/*!**********************************************!*\
  !*** ./pages/components/component.header.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\GitHub\\shopandrent-computer\\pages\\components\\component.header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const HeaderComponent = props => {
  return __jsx("h1", {
    style: {
      fontSize: "50px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, "SECONDHAND NOTEBOOK (", props.page, ")");
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderComponent);

/***/ }),

/***/ "./pages/components/component.navbar.js":
/*!**********************************************!*\
  !*** ./pages/components/component.navbar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style */ "./node_modules/antd/lib/menu/style/index.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "antd/lib/layout");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/postAction */ "./store/actions/postAction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);




var _jsxFileName = "D:\\GitHub\\shopandrent-computer\\pages\\components\\component.navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





const {
  Header,
  Content,
  Footer,
  Sider
} = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a;

function NavbarComponent(props) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  const {
    Navbar
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.post);

  const ClickMenu = (link, number, bland) => {
    dispatch(Object(_store_actions_postAction__WEBPACK_IMPORTED_MODULE_7__["updateNavbar"])(number));
    dispatch(Object(_store_actions_postAction__WEBPACK_IMPORTED_MODULE_7__["updateTypeBland"])(bland));
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(link);
    return null;
  };

  if (props.page === "description") {
    return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7
      }
    }, __jsx(Sider, {
      breakpoint: "lg",
      collapsedWidth: "0",
      onBreakpoint: broken => {
        console.log(broken);
      },
      onCollapse: (collapsed, type) => {
        console.log(collapsed, type);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 11
      }
    }), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
      theme: "dark",
      mode: "inline",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, props.status ? __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "1",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 40
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }
    }, "ID : ", props.user) : __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "1",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 23
        }
      }),
      onClick: () => {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/page.login");
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 15
      }
    }, "SignIn"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "2",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["VideoCameraOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }
      }),
      onClick: () => ClickMenu("/page.shop", 2, "ACER"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, "Acer"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "3",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UploadOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 21
        }
      }),
      onClick: () => ClickMenu("/page.shop", 3, "DELL"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }, "Dell"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "4",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }
      }),
      onClick: () => ClickMenu("/page.shop", 4, "LENOVO"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, "Lenovo"))));
  } else if (props.page === "Manage") {
    return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }
    }, __jsx(Sider, {
      breakpoint: "lg",
      collapsedWidth: "0",
      onBreakpoint: broken => {
        console.log(broken);
      },
      onCollapse: (collapsed, type) => {
        console.log(collapsed, type);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }
    }), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
      theme: "dark",
      mode: "inline",
      defaultSelectedKeys: ["" + Navbar + ""],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "1",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 38
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }, "ID :"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "2",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["VideoCameraOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }
      }),
      onClick: () => {//
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "3",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UploadOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }
      }),
      onClick: () => {//
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 13
      }
    }, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "4",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 21
        }
      }),
      onClick: () => {//
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }
    }, "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A"))));
  } else if (props.page === "Shop") {
    console.log(props.status);
    return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 7
      }
    }, __jsx(Sider, {
      breakpoint: "lg",
      collapsedWidth: "0",
      onBreakpoint: broken => {
        console.log(broken);
      },
      onCollapse: (collapsed, type) => {
        console.log(collapsed, type);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 11
      }
    }), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
      theme: "dark",
      mode: "inline",
      defaultSelectedKeys: ["" + Navbar + ""],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 11
      }
    }, props.status ? __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "1",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 42
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }, "ID : ", props.user) : __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "1",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 23
        }
      }),
      onClick: () => {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/page.login");
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 15
      }
    }, "SignIn"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "2",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["VideoCameraOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 21
        }
      }),
      onClick: () => {
        dispatch(Object(_store_actions_postAction__WEBPACK_IMPORTED_MODULE_7__["updateTypeBland"])("ACER"));
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 13
      }
    }, "Acer"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "3",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UploadOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 21
        }
      }),
      onClick: () => {
        dispatch(Object(_store_actions_postAction__WEBPACK_IMPORTED_MODULE_7__["updateTypeBland"])("DELL"));
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 13
      }
    }, "Dell"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "4",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 21
        }
      }),
      onClick: () => {
        dispatch(Object(_store_actions_postAction__WEBPACK_IMPORTED_MODULE_7__["updateTypeBland"])("LENOVO"));
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 13
      }
    }, "Lenovo"), props.status ? __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "5",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 42
        }
      }),
      onClick: () => {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/page.home');
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 17
      }
    }, "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A") : null)));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (NavbarComponent);

/***/ }),

/***/ "./pages/page.shop.js":
/*!****************************!*\
  !*** ./pages/page.shop.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "antd/lib/card");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "antd/lib/form");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_component_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/component.navbar */ "./pages/components/component.navbar.js");
/* harmony import */ var _components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/component.cardproduct */ "./pages/components/component.cardproduct.js");
/* harmony import */ var _components_component_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/component.header */ "./pages/components/component.header.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/actions/postAction */ "./store/actions/postAction.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "D:\\GitHub\\shopandrent-computer\\pages\\page.shop.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;
const FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item;
const {
  Meta
} = antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a;








function ShopPage() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  const {
    TypeBland
  } = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(state => state.post);
  const {
    0: checkLogin,
    1: setCheckLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    0: isLoading,
    1: setisLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    0: loadingTypebland,
    1: setloadingTypebland
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])('');
  const {
    0: product,
    1: setProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    let token = localStorage.getItem("token");
    let user = JSON.parse(localStorage.getItem("user"));
    console.log("token", token, user);

    if (token) {
      setUser(user.user_name);
      setCheckLogin(true);
    }

    getProduct(TypeBland);
  }, []);

  const getProduct = product => {
    let body = {
      bland_product: product
    };
    axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("http://localhost:5000/showproduct", body).then(res => {
      console.log(res);
      setProduct(res.data);
      setisLoading(true);
    }).catch(err => {
      console.log(err);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (loadingTypebland) {
      getProduct(TypeBland);
    } else {
      setloadingTypebland(true);
    }
  }, [TypeBland]);

  if (!isLoading) {
    return null;
  } else {
    console.log(product);
    return __jsx(FormItem, {
      style: {
        margin: "0px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "sp",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "br-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }
    }, __jsx(_components_component_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
      page: "Shop",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "br-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "sp-body-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 13
      }
    }, __jsx(_components_component_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      page: "Shop",
      status: checkLogin,
      user: user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "sp-body-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "sp-body-2-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    }, __jsx("h1", {
      style: {
        color: "black",
        fontSize: "40px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }, TypeBland)), __jsx("div", {
      className: "sp-body-2-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 15
      }
    }, product.map((data, index) => {
      console.log(data, index);
      return __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
        data: data,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 26
        }
      });
    }))))));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (ShopPage);

/***/ }),

/***/ "./store/actions/postAction.js":
/*!*************************************!*\
  !*** ./store/actions/postAction.js ***!
  \*************************************/
/*! exports provided: updateTypeBland, updateNavbar, updateSsid, updateBird, updatePost, updateTime, updateToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTypeBland", function() { return updateTypeBland; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateNavbar", function() { return updateNavbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSsid", function() { return updateSsid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateBird", function() { return updateBird; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePost", function() { return updatePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTime", function() { return updateTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateToken", function() { return updateToken; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types */ "./store/types.js");

const updateTypeBland = payload => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_TYPEBLAND"],
    payload: payload
  });
};
const updateNavbar = payload => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_NAVBAR"],
    payload: payload
  });
};
const updateSsid = payload => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SSID"],
    payload: payload
  });
};
const updateBird = payload => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_BIRD"],
    payload: payload
  });
};
const updatePost = payload => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_POST"],
    payload: payload
  });
};
const updateTime = payload => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_TIME"],
    payload: payload
  });
};
const updateToken = payload => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_TOKEN"],
    payload: payload
  });
};

/***/ }),

/***/ "./store/types.js":
/*!************************!*\
  !*** ./store/types.js ***!
  \************************/
/*! exports provided: UPDATE_TYPEBLAND, UPDATE_NAVBAR, UPDATE_SSID, UPDATE_POST, UPDATE_BIRD, UPDATE_TIME, UPDATE_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TYPEBLAND", function() { return UPDATE_TYPEBLAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_NAVBAR", function() { return UPDATE_NAVBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SSID", function() { return UPDATE_SSID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST", function() { return UPDATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_BIRD", function() { return UPDATE_BIRD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TIME", function() { return UPDATE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TOKEN", function() { return UPDATE_TOKEN; });
const UPDATE_TYPEBLAND = 'UPDATE_TYPEBLAND';
const UPDATE_NAVBAR = 'UPDATE_NAVBAR';
const UPDATE_SSID = 'UPDATE_SSID';
const UPDATE_POST = 'UPDATE_POST';
const UPDATE_BIRD = 'UPDATE_BIRD';
const UPDATE_TIME = 'UPDATE_TIME';
const UPDATE_TOKEN = 'UPDATE_TOKEN';

/***/ }),

/***/ 6:
/*!**********************************!*\
  !*** multi ./pages/page.shop.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitHub\shopandrent-computer\pages\page.shop.js */"./pages/page.shop.js");


/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd/lib/card":
/*!********************************!*\
  !*** external "antd/lib/card" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),

/***/ "antd/lib/form":
/*!********************************!*\
  !*** external "antd/lib/form" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),

/***/ "antd/lib/layout":
/*!**********************************!*\
  !*** external "antd/lib/layout" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

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

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NhcmQvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2NvbC9zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZm9ybS9zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvZ3JpZC9zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbGF5b3V0L3N0eWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9tZW51L3N0eWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9yb3cvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3RhYnMvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3Rvb2x0aXAvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9jb21wb25lbnQuY2FyZHByb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy9jb21wb25lbnQuaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvY29tcG9uZW50Lm5hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlLnNob3AuanMiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUvYWN0aW9ucy9wb3N0QWN0aW9uLmpzIiwid2VicGFjazovLy8uL3N0b3JlL3R5cGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvY2FyZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL2Zvcm1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9sYXlvdXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9tZW51XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZFByb2R1Y3RDb21wb25lbnQiLCJwcm9wcyIsIndpZHRoIiwiZGF0YSIsImltYWdlX3Byb2R1Y3QiLCJyb3V0ZXIiLCJwdXNoIiwiX2lkIiwiY29sb3IiLCJuYW1lX3Byb2R1Y3QiLCJkZXNjcmlwdGlvbl9wcm9kdWN0IiwicHJpY2VfcHJvZHVjdCIsIkhlYWRlckNvbXBvbmVudCIsImZvbnRTaXplIiwicGFnZSIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJTaWRlciIsIk5hdmJhckNvbXBvbmVudCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJOYXZiYXIiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwicG9zdCIsIkNsaWNrTWVudSIsImxpbmsiLCJudW1iZXIiLCJibGFuZCIsInVwZGF0ZU5hdmJhciIsInVwZGF0ZVR5cGVCbGFuZCIsImJyb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJjb2xsYXBzZWQiLCJ0eXBlIiwic3RhdHVzIiwidXNlciIsIkZvcm1JdGVtIiwiSXRlbSIsIlNob3BQYWdlIiwiVHlwZUJsYW5kIiwiY2hlY2tMb2dpbiIsInNldENoZWNrTG9naW4iLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsInNldGlzTG9hZGluZyIsImxvYWRpbmdUeXBlYmxhbmQiLCJzZXRsb2FkaW5nVHlwZWJsYW5kIiwic2V0VXNlciIsInByb2R1Y3QiLCJzZXRQcm9kdWN0IiwidXNlRWZmZWN0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwidXNlcl9uYW1lIiwiZ2V0UHJvZHVjdCIsImJvZHkiLCJibGFuZF9wcm9kdWN0IiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJlcnIiLCJtYXJnaW4iLCJtYXAiLCJpbmRleCIsInBheWxvYWQiLCJ0eXBlcyIsInVwZGF0ZVNzaWQiLCJ1cGRhdGVCaXJkIiwidXBkYXRlUG9zdCIsInVwZGF0ZVRpbWUiLCJ1cGRhdGVUb2tlbiIsIlVQREFURV9UWVBFQkxBTkQiLCJVUERBVEVfTkFWQkFSIiwiVVBEQVRFX1NTSUQiLCJVUERBVEVfUE9TVCIsIlVQREFURV9CSVJEIiwiVVBEQVRFX1RJTUUiLCJVUERBVEVfVE9LRU4iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7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Ozs7Ozs7Ozs7QUMzQ1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1PLGdCQUFnQixHQUFHLGtCQUF6QjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUNBLE1BQU1DLFlBQVksR0FBRyxjQUFyQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05QLDhDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLDRDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwYWdlLnNob3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4Lmxlc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4Lmxlc3NcIik7XG5cbnJlcXVpcmUoXCIuLi8uLi90YWJzL3N0eWxlXCIpO1xuXG5yZXF1aXJlKFwiLi4vLi4vcm93L3N0eWxlXCIpO1xuXG5yZXF1aXJlKFwiLi4vLi4vY29sL3N0eWxlXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXgubGVzc1wiKTtcblxucmVxdWlyZShcIi4uLy4uL2dyaWQvc3R5bGVcIik7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5sZXNzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5sZXNzXCIpO1xuXG5yZXF1aXJlKFwiLi4vLi4vZ3JpZC9zdHlsZVwiKTsiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4Lmxlc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4Lmxlc3NcIik7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5sZXNzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5sZXNzXCIpOyIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXgubGVzc1wiKTtcblxucmVxdWlyZShcIi4vaW5kZXgubGVzc1wiKTtcblxucmVxdWlyZShcIi4uLy4uL3Rvb2x0aXAvc3R5bGVcIik7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5sZXNzXCIpO1xuXG5yZXF1aXJlKFwiLi4vLi4vZ3JpZC9zdHlsZVwiKTsiLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcIi4uLy4uL3N0eWxlL2luZGV4Lmxlc3NcIik7XG5cbnJlcXVpcmUoXCIuL2luZGV4Lmxlc3NcIik7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5sZXNzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5sZXNzXCIpOyIsImltcG9ydCB7IENhcmQgfSBmcm9tIFwiYW50ZFwiO1xyXG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IENhcmRQcm9kdWN0Q29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGhvdmVyYWJsZVxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNDAgfX1cclxuICAgICAgICBjb3Zlcj17XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGFsdD1cImV4YW1wbGVcIlxyXG4gICAgICAgICAgICBzcmM9e3Byb3BzLmRhdGEuaW1hZ2VfcHJvZHVjdH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInNwLWNhcmRcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaChcIi9zaG9wL2Rlc2NyaXB0aW9uP2lkPVwiK3Byb3BzLmRhdGEuX2lkKX1cclxuICAgICAgPlxyXG4gICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19Pntwcm9wcy5kYXRhLm5hbWVfcHJvZHVjdH08L2gzPlxyXG4gICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19Pntwcm9wcy5kYXRhLmRlc2NyaXB0aW9uX3Byb2R1Y3R9PC9oMz5cclxuICAgICAgICA8TWV0YSBkZXNjcmlwdGlvbj17XCLguKPguLLguITguLIgXCIrcHJvcHMuZGF0YS5wcmljZV9wcm9kdWN0K1wiIOC4muC4suC4lyBcIn0gLz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBDYXJkUHJvZHVjdENvbXBvbmVudDsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5jb25zdCBIZWFkZXJDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICA8aDEgc3R5bGU9e3tmb250U2l6ZTpcIjUwcHhcIn19PlNFQ09OREhBTkQgTk9URUJPT0sgKHtwcm9wcy5wYWdlfSk8L2gxPiAgICAgIFxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCBIZWFkZXJDb21wb25lbnQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMYXlvdXQsIE1lbnUgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIFVwbG9hZE91dGxpbmVkLFxyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBWaWRlb0NhbWVyYU91dGxpbmVkLFxyXG59IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1cGRhdGVOYXZiYXIsIHVwZGF0ZVR5cGVCbGFuZCB9IGZyb20gXCIuLi8uLi9zdG9yZS9hY3Rpb25zL3Bvc3RBY3Rpb25cIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmNvbnN0IHsgSGVhZGVyLCBDb250ZW50LCBGb290ZXIsIFNpZGVyIH0gPSBMYXlvdXQ7XHJcblxyXG5mdW5jdGlvbiBOYXZiYXJDb21wb25lbnQocHJvcHMpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBOYXZiYXIgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcblxyXG4gIGNvbnN0IENsaWNrTWVudSA9IChsaW5rLCBudW1iZXIsIGJsYW5kKSA9PiB7XHJcbiAgICBkaXNwYXRjaCh1cGRhdGVOYXZiYXIobnVtYmVyKSk7XHJcbiAgICBkaXNwYXRjaCh1cGRhdGVUeXBlQmxhbmQoYmxhbmQpKTtcclxuICAgIHJvdXRlci5wdXNoKGxpbmspO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHByb3BzLnBhZ2UgPT09IFwiZGVzY3JpcHRpb25cIikge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8U2lkZXJcclxuICAgICAgICAgIGJyZWFrcG9pbnQ9XCJsZ1wiXHJcbiAgICAgICAgICBjb2xsYXBzZWRXaWR0aD1cIjBcIlxyXG4gICAgICAgICAgb25CcmVha3BvaW50PXsoYnJva2VuKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGJyb2tlbik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25Db2xsYXBzZT17KGNvbGxhcHNlZCwgdHlwZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjb2xsYXBzZWQsIHR5cGUpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIiAvPlxyXG4gICAgICAgICAgPE1lbnUgdGhlbWU9XCJkYXJrXCIgbW9kZT1cImlubGluZVwiPlxyXG4gICAgICAgICAgICB7cHJvcHMuc3RhdHVzID8gKFxyXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMVwiIGljb249ezxVc2VyT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgICAgSUQgOiB7cHJvcHMudXNlcn1cclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9XCIxXCJcclxuICAgICAgICAgICAgICAgIGljb249ezxVc2VyT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3BhZ2UubG9naW5cIik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNpZ25JblxyXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAga2V5PVwiMlwiXHJcbiAgICAgICAgICAgICAgaWNvbj17PFZpZGVvQ2FtZXJhT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gQ2xpY2tNZW51KFwiL3BhZ2Uuc2hvcFwiLCAyLCBcIkFDRVJcIil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBY2VyXHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAga2V5PVwiM1wiXHJcbiAgICAgICAgICAgICAgaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IENsaWNrTWVudShcIi9wYWdlLnNob3BcIiwgMywgXCJERUxMXCIpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgRGVsbFxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgIGtleT1cIjRcIlxyXG4gICAgICAgICAgICAgIGljb249ezxVc2VyT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gQ2xpY2tNZW51KFwiL3BhZ2Uuc2hvcFwiLCA0LCBcIkxFTk9WT1wiKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExlbm92b1xyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICA8L1NpZGVyPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChwcm9wcy5wYWdlID09PSBcIk1hbmFnZVwiKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxTaWRlclxyXG4gICAgICAgICAgYnJlYWtwb2ludD1cImxnXCJcclxuICAgICAgICAgIGNvbGxhcHNlZFdpZHRoPVwiMFwiXHJcbiAgICAgICAgICBvbkJyZWFrcG9pbnQ9eyhicm9rZW4pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYnJva2VuKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNvbGxhcHNlPXsoY29sbGFwc2VkLCB0eXBlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbGxhcHNlZCwgdHlwZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICB0aGVtZT1cImRhcmtcIlxyXG4gICAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcclxuICAgICAgICAgICAgZGVmYXVsdFNlbGVjdGVkS2V5cz17W1wiXCIgKyBOYXZiYXIgKyBcIlwiXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxXCIgaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgSUQgOlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgIGtleT1cIjJcIlxyXG4gICAgICAgICAgICAgIGljb249ezxWaWRlb0NhbWVyYU91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOC5gOC4nuC4tOC5iOC4oeC4quC4tOC4meC4hOC5ieC4slxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgIGtleT1cIjNcIlxyXG4gICAgICAgICAgICAgIGljb249ezxVcGxvYWRPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDguYHguIHguYnguYTguILguKrguLTguJnguITguYnguLJcclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICBrZXk9XCI0XCJcclxuICAgICAgICAgICAgICBpY29uPXs8VXNlck91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOC4reC4reC4geC4iOC4suC4geC4o+C4sOC4muC4mlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICA8L1NpZGVyPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChwcm9wcy5wYWdlID09PSBcIlNob3BcIikge1xyXG4gICAgY29uc29sZS5sb2cocHJvcHMuc3RhdHVzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPFNpZGVyXHJcbiAgICAgICAgICBicmVha3BvaW50PVwibGdcIlxyXG4gICAgICAgICAgY29sbGFwc2VkV2lkdGg9XCIwXCJcclxuICAgICAgICAgIG9uQnJlYWtwb2ludD17KGJyb2tlbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhicm9rZW4pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ29sbGFwc2U9eyhjb2xsYXBzZWQsIHR5cGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY29sbGFwc2VkLCB0eXBlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cclxuICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgIHRoZW1lPVwiZGFya1wiXHJcbiAgICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbXCJcIiArIE5hdmJhciArIFwiXCJdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7cHJvcHMuc3RhdHVzID8gKFxyXG4gICAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxXCIgaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICAgIElEIDoge3Byb3BzLnVzZXJ9XHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAgICBrZXk9XCIxXCJcclxuICAgICAgICAgICAgICAgIGljb249ezxVc2VyT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFwiL3BhZ2UubG9naW5cIik7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIFNpZ25JblxyXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAga2V5PVwiMlwiXHJcbiAgICAgICAgICAgICAgaWNvbj17PFZpZGVvQ2FtZXJhT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godXBkYXRlVHlwZUJsYW5kKFwiQUNFUlwiKSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFjZXJcclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICBrZXk9XCIzXCJcclxuICAgICAgICAgICAgICBpY29uPXs8VXBsb2FkT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2godXBkYXRlVHlwZUJsYW5kKFwiREVMTFwiKSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIERlbGxcclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICBrZXk9XCI0XCJcclxuICAgICAgICAgICAgICBpY29uPXs8VXNlck91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZVR5cGVCbGFuZChcIkxFTk9WT1wiKSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIExlbm92b1xyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAge3Byb3BzLnN0YXR1cyA/IChcclxuICAgICAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNVwiIGljb249ezxVc2VyT3V0bGluZWQgLz59IG9uQ2xpY2s9eygpPT57cm91dGVyLnB1c2goJy9wYWdlLmhvbWUnKX19ID5cclxuICAgICAgICAgICAgICAgICAg4Lit4Lit4LiB4LiI4Liy4LiB4Lij4Liw4Lia4LiaXHJcbiAgICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgPC9TaWRlcj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgeyBGb3JtLCBCdXR0b24sIENhcmQgfSBmcm9tIFwiYW50ZFwiO1xyXG5jb25zdCBGb3JtSXRlbSA9IEZvcm0uSXRlbTtcclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL2NvbXBvbmVudHMvY29tcG9uZW50Lm5hdmJhclwiO1xyXG5pbXBvcnQgQ2FyZFByb2R1Y3QgZnJvbSBcIi4vY29tcG9uZW50cy9jb21wb25lbnQuY2FyZHByb2R1Y3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL2NvbXBvbmVudC5oZWFkZXJcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVwZGF0ZVR5cGVCbGFuZCB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL3Bvc3RBY3Rpb25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gU2hvcFBhZ2UoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgVHlwZUJsYW5kIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IFtjaGVja0xvZ2luLCBzZXRDaGVja0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRpc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nVHlwZWJsYW5kICwgc2V0bG9hZGluZ1R5cGVibGFuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXIsc2V0VXNlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Byb2R1Y3Qsc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZSgpO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgbGV0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInRva2VuXCIsIHRva2VuLHVzZXIpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHNldFVzZXIodXNlci51c2VyX25hbWUpXHJcbiAgICAgIHNldENoZWNrTG9naW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBnZXRQcm9kdWN0KFR5cGVCbGFuZCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXRQcm9kdWN0ID0gKHByb2R1Y3QpID0+IHtcclxuICAgIGxldCBib2R5ID0geyBibGFuZF9wcm9kdWN0OnByb2R1Y3QgfVxyXG4gICAgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9zaG93cHJvZHVjdFwiLGJvZHkpLnRoZW4ocmVzPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgc2V0UHJvZHVjdChyZXMuZGF0YSlcclxuICAgICAgc2V0aXNMb2FkaW5nKHRydWUpO1xyXG4gICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGlmKGxvYWRpbmdUeXBlYmxhbmQpe1xyXG4gICAgICBnZXRQcm9kdWN0KFR5cGVCbGFuZClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldGxvYWRpbmdUeXBlYmxhbmQodHJ1ZSlcclxuICAgIH1cclxuICB9LFtUeXBlQmxhbmRdKVxyXG5cclxuXHJcblxyXG4gIGlmICghaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2cocHJvZHVjdClcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGb3JtSXRlbSBzdHlsZT17eyBtYXJnaW46IFwiMHB4XCIgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJici1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPEhlYWRlciBwYWdlPXtcIlNob3BcIn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJici1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtYm9keS0xXCI+XHJcbiAgICAgICAgICAgICAgPE5hdmJhciBwYWdlPXtcIlNob3BcIn0gc3RhdHVzPXtjaGVja0xvZ2lufSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1ib2R5LTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLWJvZHktMi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiLCBmb250U2l6ZTogXCI0MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtUeXBlQmxhbmR9XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtYm9keS0yLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm1hcCgoZGF0YSxpbmRleCk9PntcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSxpbmRleClcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxDYXJkUHJvZHVjdCBkYXRhPXtkYXRhfSAvPiAgICBcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm1JdGVtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3BQYWdlO1xyXG4iLCJpbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuLi90eXBlcydcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVUeXBlQmxhbmQgPSAocGF5bG9hZCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9UWVBFQkxBTkQsXHJcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZFxyXG4gICAgfSlcclxufVxyXG5leHBvcnQgY29uc3QgdXBkYXRlTmF2YmFyID0gKHBheWxvYWQpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfTkFWQkFSLFxyXG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWRcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTc2lkID0gKHBheWxvYWQpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfU1NJRCxcclxuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlQmlyZCA9IChwYXlsb2FkKSA9PiBhc3luYyBkaXNwYXRjaCA9PiB7XHJcbiAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogdHlwZXMuVVBEQVRFX0JJUkQsXHJcbiAgICAgICAgcGF5bG9hZDogcGF5bG9hZFxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVBvc3QgPSAocGF5bG9hZCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9QT1NULFxyXG4gICAgICAgIHBheWxvYWQ6IHBheWxvYWRcclxuICAgIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVUaW1lID0gKHBheWxvYWQpID0+IGFzeW5jIGRpc3BhdGNoID0+IHtcclxuICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiB0eXBlcy5VUERBVEVfVElNRSxcclxuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlVG9rZW4gPSAocGF5bG9hZCkgPT4gYXN5bmMgZGlzcGF0Y2ggPT4ge1xyXG4gICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IHR5cGVzLlVQREFURV9UT0tFTixcclxuICAgICAgICBwYXlsb2FkOiBwYXlsb2FkXHJcbiAgICB9KVxyXG59IiwiZXhwb3J0IGNvbnN0IFVQREFURV9UWVBFQkxBTkQgPSAnVVBEQVRFX1RZUEVCTEFORCc7XHJcbmV4cG9ydCBjb25zdCBVUERBVEVfTkFWQkFSID0gJ1VQREFURV9OQVZCQVInO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1NTSUQgPSAnVVBEQVRFX1NTSUQnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1BPU1QgPSAnVVBEQVRFX1BPU1QnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX0JJUkQgPSAnVVBEQVRFX0JJUkQnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1RJTUUgPSAnVVBEQVRFX1RJTUUnO1xyXG5leHBvcnQgY29uc3QgVVBEQVRFX1RPS0VOID0gJ1VQREFURV9UT0tFTic7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvY2FyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9mb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2xheW91dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9tZW51XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=