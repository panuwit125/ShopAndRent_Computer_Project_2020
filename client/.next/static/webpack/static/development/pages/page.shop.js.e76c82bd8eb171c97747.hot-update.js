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
        "A": "A"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlLnNob3AuanMiXSwibmFtZXMiOlsiRm9ybUl0ZW0iLCJJdGVtIiwiTWV0YSIsIlNob3BQYWdlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiVHlwZUJsYW5kIiwidXNlU3RhdGUiLCJjaGVja0xvZ2luIiwic2V0Q2hlY2tMb2dpbiIsImlzTG9hZGluZyIsInNldGlzTG9hZGluZyIsInVzZXIiLCJzZXRVc2VyIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwidXNlcl9uYW1lIiwiZ2V0UHJvZHVjdCIsImRhdGEiLCJibGFuZF9wcm9kdWN0IiwiYXhpb3MiLCJtZXRob2QiLCJ1cmwiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImVyciIsIm1hcmdpbiIsImNvbG9yIiwiZm9udFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxRQUFRLEdBQUcscURBQUtDLElBQXRCO0lBQ1FDLEksd0RBQUFBLEk7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxRQUFULEdBQW9CO0FBQUE7O0FBQ2xCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRGtCLHFCQUVJQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUZmO0FBQUEsTUFFVkMsU0FGVSxnQkFFVkEsU0FGVTs7QUFBQSxrQkFHa0JDLHNEQUFRLENBQUMsS0FBRCxDQUgxQjtBQUFBLE1BR1hDLFVBSFc7QUFBQSxNQUdDQyxhQUhEOztBQUFBLG1CQUlnQkYsc0RBQVEsQ0FBQyxLQUFELENBSnhCO0FBQUEsTUFJ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O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0UsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsRUFJRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKRixFQUtFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUxGLEVBTUUsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTkYsRUFPRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFQRixFQVFFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVJGLEVBU0UsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BVEYsRUFVRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFWRixFQVdFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVhGLEVBWUUsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BWkYsQ0FORixDQUpGLENBSkYsQ0FERixDQURGO0FBbUNEO0FBQ0Y7O0dBM0VRTixRO1VBQ1VFLHVELEVBQ0tDLHVEOzs7S0FGZkgsUTtBQTZFTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBhZ2Uuc2hvcC5qcy5lNzZjODJiZDhlYjE3MWM5Nzc0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBDYXJkIH0gZnJvbSBcImFudGRcIjtcclxuY29uc3QgRm9ybUl0ZW0gPSBGb3JtLkl0ZW07XHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL2NvbXBvbmVudC5uYXZiYXJcIjtcclxuaW1wb3J0IENhcmRQcm9kdWN0IGZyb20gXCIuL2NvbXBvbmVudHMvY29tcG9uZW50LmNhcmRwcm9kdWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9jb21wb25lbnQuaGVhZGVyXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1cGRhdGVUeXBlQmxhbmQgfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9ucy9wb3N0QWN0aW9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIFNob3BQYWdlKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IFR5cGVCbGFuZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBbY2hlY2tMb2dpbiwgc2V0Q2hlY2tMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0aXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlcixzZXRVc2VyXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcHJvZHVjdCxzZXRQcm9kdWN0XSA9IHVzZVN0YXRlKCk7XHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICBsZXQgdXNlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKTtcclxuICAgIGNvbnNvbGUubG9nKFwidG9rZW5cIiwgdG9rZW4sdXNlcik7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgc2V0VXNlcih1c2VyLnVzZXJfbmFtZSlcclxuICAgICAgc2V0Q2hlY2tMb2dpbih0cnVlKTtcclxuICAgIH1cclxuICAgIGdldFByb2R1Y3QoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IHsgYmxhbmRfcHJvZHVjdDpcIkFDRVJcIiB9XHJcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDpcImdldFwiLFxyXG4gICAgICB1cmw6XCJodHRwOi8vbG9jYWxob3N0OjUwMDAvc2hvd3Byb2R1Y3RcIixcclxuICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuICAgICAgfSxcclxuICAgICAgZGF0YTp7XCJBXCI6XCJBXCJ9XHJcbiAgICB9KS50aGVuKHJlcz0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfSlcclxuICAgIHNldGlzTG9hZGluZyh0cnVlKTtcclxuICB9XHJcblxyXG4gIGlmICghaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZvcm1JdGVtIHN0eWxlPXt7IG1hcmdpbjogXCIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyIHBhZ2U9e1wiU2hvcFwifSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1ib2R5LTFcIj5cclxuICAgICAgICAgICAgICA8TmF2YmFyIHBhZ2U9e1wic2hvcFwifSBzdGF0dXM9e2NoZWNrTG9naW59IHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLWJvZHktMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtYm9keS0yLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIsIGZvbnRTaXplOiBcIjQwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge1R5cGVCbGFuZH1cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1ib2R5LTItYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPENhcmRQcm9kdWN0IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFByb2R1Y3QgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkUHJvZHVjdCAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRQcm9kdWN0IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFByb2R1Y3QgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkUHJvZHVjdCAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRQcm9kdWN0IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFByb2R1Y3QgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkUHJvZHVjdCAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRQcm9kdWN0IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFByb2R1Y3QgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkUHJvZHVjdCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm1JdGVtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNob3BQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9