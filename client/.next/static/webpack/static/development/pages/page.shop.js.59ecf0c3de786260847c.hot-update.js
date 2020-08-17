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
    axios__WEBPACK_IMPORTED_MODULE_10___default()({
      method: "get",
      url: "http://localhost:5000/showproduct",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        "bland_product": "ACER"
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
        lineNumber: 53,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "sp",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "br-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }, __jsx(_components_component_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
      page: "Shop",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "br-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "sp-body-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, __jsx(_components_component_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      page: "shop",
      status: checkLogin,
      user: user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "sp-body-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "sp-body-2-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
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
        lineNumber: 64,
        columnNumber: 17
      }
    }, TypeBland)), __jsx("div", {
      className: "sp-body-2-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    }, __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
    }), __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlLnNob3AuanMiXSwibmFtZXMiOlsiRm9ybUl0ZW0iLCJJdGVtIiwiTWV0YSIsIlNob3BQYWdlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiVHlwZUJsYW5kIiwidXNlU3RhdGUiLCJjaGVja0xvZ2luIiwic2V0Q2hlY2tMb2dpbiIsImlzTG9hZGluZyIsInNldGlzTG9hZGluZyIsInVzZXIiLCJzZXRVc2VyIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwidXNlcl9uYW1lIiwiZ2V0UHJvZHVjdCIsIkF4aW9zIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsImJvZHkiLCJ0aGVuIiwicmVzIiwiZXJyIiwibWFyZ2luIiwiY29sb3IiLCJmb250U2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLFFBQVEsR0FBRyxxREFBS0MsSUFBdEI7SUFDUUMsSSx3REFBQUEsSTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEa0IscUJBRUlDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRmY7QUFBQSxNQUVWQyxTQUZVLGdCQUVWQSxTQUZVOztBQUFBLGtCQUdrQkMsc0RBQVEsQ0FBQyxLQUFELENBSDFCO0FBQUEsTUFHWEMsVUFIVztBQUFBLE1BR0NDLGFBSEQ7O0FBQUEsbUJBSWdCRixzREFBUSxDQUFDLEtBQUQsQ0FKeEI7QUFBQSxNQUlYRyxTQUpXO0FBQUEsTUFJ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QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixFQUdFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLEVBSUUsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkYsRUFLRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMRixFQU1FLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQU5GLEVBT0UsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BUEYsRUFRRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSRixFQVNFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRGLEVBVUUsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVkYsRUFXRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFYRixFQVlFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVpGLENBTkYsQ0FKRixDQUpGLENBREYsQ0FERjtBQW1DRDtBQUNGOztHQTVFUU4sUTtVQUNVRSx1RCxFQUNLQyx1RDs7O0tBRmZILFE7QUE4RU1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwYWdlLnNob3AuanMuNTllY2YwYzNkZTc4NjI2MDg0N2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgQ2FyZCB9IGZyb20gXCJhbnRkXCI7XHJcbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xyXG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9jb21wb25lbnQubmF2YmFyXCI7XHJcbmltcG9ydCBDYXJkUHJvZHVjdCBmcm9tIFwiLi9jb21wb25lbnRzL2NvbXBvbmVudC5jYXJkcHJvZHVjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvY29tcG9uZW50LmhlYWRlclwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXBkYXRlVHlwZUJsYW5kIH0gZnJvbSBcIi4uL3N0b3JlL2FjdGlvbnMvcG9zdEFjdGlvblwiO1xyXG5pbXBvcnQgQXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBTaG9wUGFnZSgpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgeyBUeXBlQmxhbmQgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucG9zdCk7XHJcbiAgY29uc3QgW2NoZWNrTG9naW4sIHNldENoZWNrTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldGlzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXIsc2V0VXNlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Byb2R1Y3Qsc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZSgpO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgbGV0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInRva2VuXCIsIHRva2VuLHVzZXIpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHNldFVzZXIodXNlci51c2VyX25hbWUpXHJcbiAgICAgIHNldENoZWNrTG9naW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBnZXRQcm9kdWN0KCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXRQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgQXhpb3Moe1xyXG4gICAgICBtZXRob2Q6XCJnZXRcIixcclxuICAgICAgdXJsOlwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Nob3dwcm9kdWN0XCIsXHJcbiAgICAgIGhlYWRlcnM6e1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6e1xyXG4gICAgICAgIFwiYmxhbmRfcHJvZHVjdFwiOlwiQUNFUlwiXHJcbiAgICAgIH1cclxuICAgIH0pLnRoZW4ocmVzPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgIH0pLmNhdGNoKGVycj0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9KVxyXG4gICAgc2V0aXNMb2FkaW5nKHRydWUpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Rm9ybUl0ZW0gc3R5bGU9e3sgbWFyZ2luOiBcIjBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgcGFnZT17XCJTaG9wXCJ9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnItYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLWJvZHktMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZiYXIgcGFnZT17XCJzaG9wXCJ9IHN0YXR1cz17Y2hlY2tMb2dpbn0gdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtYm9keS0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1ib2R5LTItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiwgZm9udFNpemU6IFwiNDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7VHlwZUJsYW5kfVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLWJvZHktMi1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFByb2R1Y3QgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkUHJvZHVjdCAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRQcm9kdWN0IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFByb2R1Y3QgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkUHJvZHVjdCAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRQcm9kdWN0IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFByb2R1Y3QgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkUHJvZHVjdCAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRQcm9kdWN0IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFByb2R1Y3QgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkUHJvZHVjdCAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRQcm9kdWN0IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=