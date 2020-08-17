webpackHotUpdate("static\\development\\pages\\page.shop.js",{

/***/ "./pages/page.shop.js":
/*!****************************!*\
  !*** ./pages/page.shop.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_component_navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/component.navbar */ "./pages/components/component.navbar.js");
/* harmony import */ var _components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/component.cardproduct */ "./pages/components/component.cardproduct.js");
/* harmony import */ var _components_component_header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/component.header */ "./pages/components/component.header.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../store/actions/postAction */ "./store/actions/postAction.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);





var _jsxFileName = "D:\\GitHub\\shopandrent-computer\\pages\\page.shop.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;
var FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item;
var Meta = antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a.Meta;








function ShopPage() {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.post;
  }),
      TypeBland = _useSelector.TypeBland;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      checkLogin = _useState[0],
      setCheckLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isLoading = _useState2[0],
      setisLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      user = _useState3[0],
      setUser = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      product = _useState4[0],
      setProduct = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var token = localStorage.getItem("token");
    var user = JSON.parse(localStorage.getItem("user"));
    console.log("token", token, user);

    if (token) {
      setUser(user.user_name);
      setCheckLogin(true);
    }

    getProduct();
  }, []);

  var getProduct = function getProduct() {
    var data = {
      bland_product: "ACER"
    };
    axios__WEBPACK_IMPORTED_MODULE_10___default()({
      method: "get",
      url: "http://localhost:5000/showproduct",
      headers: {
        "Content-Type": "application/json"
      },
      data: {
        A: "A"
      }
    }).then(function (res) {
      console.log(res);
    })["catch"](function (err) {
      console.log(err);
    });
    setisLoading(true);
  };

  if (!isLoading) {
    return null;
  } else {
    return __jsx(FormItem, {
      style: {
        margin: "0px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "sp",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "br-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 11
      }
    }, __jsx(_components_component_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
      page: "Shop",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "br-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "sp-body-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    }, __jsx(_components_component_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      page: "shop",
      status: checkLogin,
      user: user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "sp-body-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "sp-body-2-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
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
        lineNumber: 63,
        columnNumber: 17
      }
    }, TypeBland)), __jsx("div", {
      className: "sp-body-2-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    }, __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }), __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }), __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }), __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }), __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }), __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }
    }), __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 17
      }
    }), __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }
    }), __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }
    }), __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }), __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }), __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    }))))));
  }
}

_s(ShopPage, "H3WxoFB4X72/sbjHZGAfC46FCus=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"]];
});

_c = ShopPage;
/* harmony default export */ __webpack_exports__["default"] = (ShopPage);

var _c;

$RefreshReg$(_c, "ShopPage");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlLnNob3AuanMiXSwibmFtZXMiOlsiRm9ybUl0ZW0iLCJJdGVtIiwiTWV0YSIsIlNob3BQYWdlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiVHlwZUJsYW5kIiwidXNlU3RhdGUiLCJjaGVja0xvZ2luIiwic2V0Q2hlY2tMb2dpbiIsImlzTG9hZGluZyIsInNldGlzTG9hZGluZyIsInVzZXIiLCJzZXRVc2VyIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwidXNlcl9uYW1lIiwiZ2V0UHJvZHVjdCIsImRhdGEiLCJibGFuZF9wcm9kdWN0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwiQSIsInRoZW4iLCJyZXMiLCJlcnIiLCJtYXJnaW4iLCJjb2xvciIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLHFEQUFLQyxJQUF0QjtJQUNRQyxJLHdEQUFBQSxJO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURrQixxQkFFSUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FGZjtBQUFBLE1BRVZDLFNBRlUsZ0JBRVZBLFNBRlU7O0FBQUEsa0JBR2tCQyxzREFBUSxDQUFDLEtBQUQsQ0FIMUI7QUFBQSxNQUdYQyxVQUhXO0FBQUEsTUFHQ0MsYUFIRDs7QUFBQSxtQkFJZ0JGLHNEQUFRLENBQUMsS0FBRCxDQUp4QjtBQUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLEVBSUUsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsRUFLRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMRixFQU1FLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5GLEVBT0UsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUEYsRUFRRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSRixFQVNFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRGLEVBVUUsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVkYsRUFXRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFYRixFQVlFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVpGLENBTkYsQ0FKRixDQUpGLENBREYsQ0FERjtBQW1DRDtBQUNGOztHQTNFUU4sUTtVQUNVRSx1RCxFQUNLQyx1RDs7O0tBRmZILFE7QUE2RU1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwYWdlLnNob3AuanMuODE1NmZjZGQxZjllMjU2NjEyYzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgQ2FyZCB9IGZyb20gXCJhbnRkXCI7XHJcbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xyXG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9jb21wb25lbnQubmF2YmFyXCI7XHJcbmltcG9ydCBDYXJkUHJvZHVjdCBmcm9tIFwiLi9jb21wb25lbnRzL2NvbXBvbmVudC5jYXJkcHJvZHVjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvY29tcG9uZW50LmhlYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXBkYXRlVHlwZUJsYW5kIH0gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvcG9zdEFjdGlvblwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBTaG9wUGFnZSgpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBUeXBlQmxhbmQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgW2NoZWNrTG9naW4sIHNldENoZWNrTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldGlzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXIsc2V0VXNlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Byb2R1Y3Qsc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZSgpO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgbGV0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInRva2VuXCIsIHRva2VuLHVzZXIpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHNldFVzZXIodXNlci51c2VyX25hbWUpXHJcbiAgICAgIHNldENoZWNrTG9naW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBnZXRQcm9kdWN0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXRQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgbGV0IGRhdGEgPSB7IGJsYW5kX3Byb2R1Y3Q6XCJBQ0VSXCIgfVxyXG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6XCJnZXRcIixcclxuICAgICAgdXJsOlwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Nob3dwcm9kdWN0XCIsXHJcbiAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6e0E6XCJBXCJ9XHJcbiAgICB9KS50aGVuKHJlcz0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfSlcclxuICAgIHNldGlzTG9hZGluZyh0cnVlKTtcclxuICB9XHJcblxyXG4gIGlmICghaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZvcm1JdGVtIHN0eWxlPXt7IG1hcmdpbjogXCIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyIHBhZ2U9e1wiU2hvcFwifSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1ib2R5LTFcIj5cclxuICAgICAgICAgICAgICA8TmF2YmFyIHBhZ2U9e1wic2hvcFwifSBzdGF0dXM9e2NoZWNrTG9naW59IHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLWJvZHktMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtYm9keS0yLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIsIGZvbnRTaXplOiBcIjQwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge1R5cGVCbGFuZH1cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1ib2R5LTItYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPENhcmRQcm9kdWN0IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFByb2R1Y3QgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkUHJvZHVjdCAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRQcm9kdWN0IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFByb2R1Y3QgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkUHJvZHVjdCAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRQcm9kdWN0IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFByb2R1Y3QgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkUHJvZHVjdCAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRQcm9kdWN0IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFByb2R1Y3QgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkUHJvZHVjdCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm1JdGVtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3BQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9