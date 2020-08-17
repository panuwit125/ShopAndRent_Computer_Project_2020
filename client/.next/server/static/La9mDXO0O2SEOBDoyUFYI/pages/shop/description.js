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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("457F");


/***/ }),

/***/ "1yXF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("VEUW");

__webpack_require__("dnqb");

/***/ }),

/***/ "457F":
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
/* harmony import */ var _components_component_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("u/Vi");
/* harmony import */ var _components_component_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("p8e5");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("zr5I");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);




var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;
const FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item;


 //import router from "next/router";




function DescriptionPage() {
  const {
    0: checkLogin,
    1: setCheckLogin
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false);
  const {
    0: isLoading,
    1: setisLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false); //const [Id,setID] = useState('')

  const {
    0: user,
    1: setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])("");
  const {
    0: product,
    1: setProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const {
    id,
    comment
  } = router.query;
  const Id = id;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(() => {
    if (Id) {
      console.log("id", Id);
      let token = localStorage.getItem("token");
      let user = JSON.parse(localStorage.getItem("user"));
      console.log("token", token, user);

      if (token) {
        setUser(user.user_name);
        setCheckLogin(true);
      }

      getProductByid();
    }
  }, [Id]);

  const getProductByid = () => {
    let data = {
      id: "" + id + ""
    };
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("http://localhost:5000/productbyid", data).then(res => {
      console.log(res);
      setProduct(res.data);
      setisLoading(true);
    }).catch(err => {
      console.log(err);
    });
  };

  const ButtonShow = () => {
    if (checkLogin) {
      return __jsx("div", null, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "dt-btn"
      }, "\u0E0B\u0E37\u0E49\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "dt-btn",
        style: {
          marginTop: "5px"
        }
      }, "\u0E2B\u0E22\u0E34\u0E1A\u0E43\u0E2A\u0E48\u0E15\u0E23\u0E30\u0E01\u0E23\u0E49\u0E32"));
    } else {
      return __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "dt-btn",
        onClick: () => router.push("/page.login")
      }, "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A");
    }
  };

  if (!isLoading) {
    return null;
  } else {
    return __jsx(FormItem, {
      style: {
        margin: "0px"
      }
    }, __jsx("div", {
      className: "br"
    }, __jsx("div", {
      className: "br-header"
    }, __jsx(_components_component_header__WEBPACK_IMPORTED_MODULE_5__["default"], null)), __jsx("div", {
      className: "br-body"
    }, __jsx("div", {
      className: "sp-body-1"
    }, __jsx(_components_component_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      page: "description",
      status: checkLogin,
      user: user
    })), __jsx("div", {
      className: "sp-body-2"
    }, __jsx("div", {
      className: "dt-body-2-header"
    }, __jsx("h1", {
      style: {
        color: "black",
        textAlign: "center"
      }
    }, product.name_product)), __jsx("div", {
      className: "dt-body-2-body"
    }, __jsx("img", {
      className: "dt-img",
      src: product.image_product
    }), __jsx("div", null, __jsx("img", {
      className: "dt-img-1",
      src: "https://www.beartai.com/wp-content/uploads/2018/10/MacBook-Pro-2018-Gris-2-1200x675.jpg"
    }), __jsx("img", {
      className: "dt-img-1",
      src: "https://www.beartai.com/wp-content/uploads/2018/10/MacBook-Pro-2018-Gris-2-1200x675.jpg"
    }), __jsx("img", {
      className: "dt-img-1",
      src: "https://www.beartai.com/wp-content/uploads/2018/10/MacBook-Pro-2018-Gris-2-1200x675.jpg"
    }))), __jsx("div", {
      className: "dt-decription"
    }, __jsx("div", null, __jsx("h1", {
      style: {
        color: "black"
      }
    }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14")), __jsx("div", null, __jsx("h2", {
      style: {
        color: "black"
      }
    }, product.description_product))), __jsx(ButtonShow, null)))));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (DescriptionPage);

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "93XW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("VEUW");

__webpack_require__("hEgN");

/***/ }),

/***/ "DH+K":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return UPDATE_TYPEBLAND; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UPDATE_NAVBAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UPDATE_SSID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UPDATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UPDATE_BIRD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UPDATE_TIME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return UPDATE_TOKEN; });
const UPDATE_TYPEBLAND = 'UPDATE_TYPEBLAND';
const UPDATE_NAVBAR = 'UPDATE_NAVBAR';
const UPDATE_SSID = 'UPDATE_SSID';
const UPDATE_POST = 'UPDATE_POST';
const UPDATE_BIRD = 'UPDATE_BIRD';
const UPDATE_TIME = 'UPDATE_TIME';
const UPDATE_TOKEN = 'UPDATE_TOKEN';

/***/ }),

/***/ "FoS+":
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

/***/ "PFYH":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("VEUW");

__webpack_require__("Svq7");

__webpack_require__("93XW");

/***/ }),

/***/ "S+Er":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return updateTypeBland; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return updateNavbar; });
/* unused harmony export updateSsid */
/* unused harmony export updateBird */
/* unused harmony export updatePost */
/* unused harmony export updateTime */
/* unused harmony export updateToken */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("DH+K");

const updateTypeBland = payload => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_TYPEBLAND */ "g"],
    payload: payload
  });
};
const updateNavbar = payload => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_NAVBAR */ "b"],
    payload: payload
  });
};
const updateSsid = payload => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_SSID */ "d"],
    payload: payload
  });
};
const updateBird = payload => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_BIRD */ "a"],
    payload: payload
  });
};
const updatePost = payload => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_POST */ "c"],
    payload: payload
  });
};
const updateTime = payload => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_TIME */ "e"],
    payload: payload
  });
};
const updateToken = payload => async dispatch => {
  dispatch({
    type: _types__WEBPACK_IMPORTED_MODULE_0__[/* UPDATE_TOKEN */ "f"],
    payload: payload
  });
};

/***/ }),

/***/ "Svq7":
/***/ (function(module, exports) {



/***/ }),

/***/ "VEUW":
/***/ (function(module, exports) {



/***/ }),

/***/ "VzA1":
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),

/***/ "XJbt":
/***/ (function(module, exports) {



/***/ }),

/***/ "a5Fm":
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

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

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hEgN":
/***/ (function(module, exports) {



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

/***/ "p8e5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("PFYH");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("a5Fm");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ppZR");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("VzA1");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nZwT");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("S+Er");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);




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
    dispatch(Object(_store_actions_postAction__WEBPACK_IMPORTED_MODULE_7__[/* updateNavbar */ "a"])(number));
    dispatch(Object(_store_actions_postAction__WEBPACK_IMPORTED_MODULE_7__[/* updateTypeBland */ "b"])(bland));
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push(link);
    return null;
  };

  if (props.page === "description") {
    return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(Sider, {
      breakpoint: "lg",
      collapsedWidth: "0",
      onBreakpoint: broken => {
        console.log(broken);
      },
      onCollapse: (collapsed, type) => {
        console.log(collapsed, type);
      }
    }, __jsx("div", {
      className: "logo"
    }), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
      theme: "dark",
      mode: "inline"
    }, props.status ? __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "1",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], null)
    }, "ID : ", props.user) : __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "1",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], null),
      onClick: () => {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/page.login");
      }
    }, "SignIn"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "2",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["VideoCameraOutlined"], null),
      onClick: () => ClickMenu("/page.shop", 2, "ACER")
    }, "Acer"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "3",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UploadOutlined"], null),
      onClick: () => ClickMenu("/page.shop", 3, "DELL")
    }, "Dell"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "4",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], null),
      onClick: () => ClickMenu("/page.shop", 4, "LENOVO")
    }, "Lenovo"))));
  } else if (props.page === "Manage") {
    return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(Sider, {
      breakpoint: "lg",
      collapsedWidth: "0",
      onBreakpoint: broken => {
        console.log(broken);
      },
      onCollapse: (collapsed, type) => {
        console.log(collapsed, type);
      }
    }, __jsx("div", {
      className: "logo"
    }), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
      theme: "dark",
      mode: "inline",
      defaultSelectedKeys: ["" + Navbar + ""]
    }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "1",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], null)
    }, "ID :"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "2",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["VideoCameraOutlined"], null),
      onClick: () => {//
      }
    }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "3",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UploadOutlined"], null),
      onClick: () => {//
      }
    }, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "4",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], null),
      onClick: () => {//
      }
    }, "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A"))));
  } else if (props.page === "Shop") {
    console.log(props.status);
    return __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a, null, __jsx(Sider, {
      breakpoint: "lg",
      collapsedWidth: "0",
      onBreakpoint: broken => {
        console.log(broken);
      },
      onCollapse: (collapsed, type) => {
        console.log(collapsed, type);
      }
    }, __jsx("div", {
      className: "logo"
    }), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a, {
      theme: "dark",
      mode: "inline",
      defaultSelectedKeys: ["" + Navbar + ""]
    }, props.status ? __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "1",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], null)
    }, "ID : ", props.user) : __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "1",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], null),
      onClick: () => {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/page.login");
      }
    }, "SignIn"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "2",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["VideoCameraOutlined"], null),
      onClick: () => {
        dispatch(Object(_store_actions_postAction__WEBPACK_IMPORTED_MODULE_7__[/* updateTypeBland */ "b"])("ACER"));
      }
    }, "Acer"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "3",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UploadOutlined"], null),
      onClick: () => {
        dispatch(Object(_store_actions_postAction__WEBPACK_IMPORTED_MODULE_7__[/* updateTypeBland */ "b"])("DELL"));
      }
    }, "Dell"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "4",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], null),
      onClick: () => {
        dispatch(Object(_store_actions_postAction__WEBPACK_IMPORTED_MODULE_7__[/* updateTypeBland */ "b"])("LENOVO"));
      }
    }, "Lenovo"), props.status ? __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default.a.Item, {
      key: "5",
      icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["UserOutlined"], null),
      onClick: () => {
        next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/page.home');
      }
    }, "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A") : null)));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (NavbarComponent);

/***/ }),

/***/ "ppZR":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__("VEUW");

__webpack_require__("FoS+");

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