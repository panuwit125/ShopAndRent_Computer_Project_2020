webpackHotUpdate("static\\development\\pages\\shop\\description.js",{

/***/ "./pages/shop/description.js":
/*!***********************************!*\
  !*** ./pages/shop/description.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_component_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/component.header */ "./pages/components/component.header.js");
/* harmony import */ var _components_component_navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/component.navbar */ "./pages/components/component.navbar.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "D:\\GitHub\\shopandrent-computer\\pages\\shop\\description.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;
var FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item;


 //import router from "next/router";




function DescriptionPage() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      checkLogin = _useState[0],
      setCheckLogin = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isLoading = _useState2[0],
      setisLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      user = _useState3[0],
      setUser = _useState3[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  var _router$query = router.query,
      id = _router$query.id,
      comment = _router$query.comment;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var token = localStorage.getItem("token");
    var user = JSON.parse(localStorage.getItem("user"));
    console.log("token", token, user);

    if (token) {
      setUser(user.user_name);
      setCheckLogin(true);
    }

    getProductByid();
    setisLoading(true);
  }, []);

  var getProductByid = function getProductByid() {
    var data = {
      id: "" + id + ""
    };
    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post('http://localhost:5000/productbyid', data).then(function (res) {
      console.log(res);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var ButtonShow = function ButtonShow() {
    if (checkLogin) {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 9
        }
      }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "dt-btn",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      }, "\u0E0B\u0E37\u0E49\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "dt-btn",
        style: {
          marginTop: "5px"
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }
      }, "\u0E2B\u0E22\u0E34\u0E1A\u0E43\u0E2A\u0E48\u0E15\u0E23\u0E30\u0E01\u0E23\u0E49\u0E32"));
    } else {
      return __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "dt-btn",
        onClick: function onClick() {
          return router.push("/page.login");
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }, "\u0E01\u0E23\u0E38\u0E13\u0E32\u0E40\u0E02\u0E49\u0E32\u0E2A\u0E39\u0E48\u0E23\u0E30\u0E1A\u0E1A");
    }
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
        lineNumber: 60,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "br",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "br-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, __jsx(_components_component_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "br-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "sp-body-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, __jsx(_components_component_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      page: "description",
      status: checkLogin,
      user: user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "sp-body-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "dt-body-2-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 15
      }
    }, __jsx("h1", {
      style: {
        color: "black",
        textAlign: "center"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 17
      }
    }, "Post :", id, "Comment : ", comment, "ACER 205PI CORE7")), __jsx("div", {
      className: "dt-body-2-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 15
      }
    }, __jsx("img", {
      className: "dt-img",
      src: "https://www.techmoblog.com/uploads/content_images/202004/img_1586763485_6180709595af.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }
    }, __jsx("img", {
      className: "dt-img-1",
      src: "https://www.beartai.com/wp-content/uploads/2018/10/MacBook-Pro-2018-Gris-2-1200x675.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 19
      }
    }), __jsx("img", {
      className: "dt-img-1",
      src: "https://www.beartai.com/wp-content/uploads/2018/10/MacBook-Pro-2018-Gris-2-1200x675.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 19
      }
    }), __jsx("img", {
      className: "dt-img-1",
      src: "https://www.beartai.com/wp-content/uploads/2018/10/MacBook-Pro-2018-Gris-2-1200x675.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 19
      }
    }))), __jsx("div", {
      className: "dt-decription",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 15
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, __jsx("h1", {
      style: {
        color: "black"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 19
      }
    }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14")), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }
    }, __jsx("h2", {
      style: {
        color: "black"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 19
      }
    }, "\u0E08\u0E2D\u0E20\u0E32\u0E1E\u0E41\u0E1A\u0E47\u0E04\u0E44\u0E25\u0E17\u0E4C\u0E41\u0E1A\u0E1A LED \u0E02\u0E19\u0E32\u0E14 13.3 \u0E19\u0E34\u0E49\u0E27 (\u0E41\u0E19\u0E27\u0E17\u0E41\u0E22\u0E07) \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35 IPS \u0E04\u0E27\u0E32\u0E21\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E1B\u0E01\u0E15\u0E34 2560 x 1600 \u0E17\u0E35\u0E48 227 \u0E1E\u0E34\u0E01\u0E40\u0E0B\u0E25\u0E15\u0E48\u0E2D\u0E19\u0E34\u0E49\u0E27 \u0E41\u0E25\u0E30\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E2A\u0E35\u0E2A\u0E31\u0E19\u0E19\u0E31\u0E1A\u0E25\u0E49\u0E32\u0E19\u0E2A\u0E35"))), __jsx(ButtonShow, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 15
      }
    })))));
  }
}

_s(DescriptionPage, "lPHM/v2LGTcMDgPz59/yX0ZYyPY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"]];
});

_c = DescriptionPage;
/* harmony default export */ __webpack_exports__["default"] = (DescriptionPage);

var _c;

$RefreshReg$(_c, "DescriptionPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL2Rlc2NyaXB0aW9uLmpzIl0sIm5hbWVzIjpbIkZvcm1JdGVtIiwiSXRlbSIsIkRlc2NyaXB0aW9uUGFnZSIsInVzZVN0YXRlIiwiY2hlY2tMb2dpbiIsInNldENoZWNrTG9naW4iLCJpc0xvYWRpbmciLCJzZXRpc0xvYWRpbmciLCJ1c2VyIiwic2V0VXNlciIsInJvdXRlciIsInVzZVJvdXRlciIsInF1ZXJ5IiwiaWQiLCJjb21tZW50IiwidXNlRWZmZWN0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsInVzZXJfbmFtZSIsImdldFByb2R1Y3RCeWlkIiwiZGF0YSIsIkF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJlcnIiLCJCdXR0b25TaG93IiwibWFyZ2luVG9wIiwicHVzaCIsIm1hcmdpbiIsImNvbG9yIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxRQUFRLEdBQUcscURBQUtDLElBQXRCO0FBQ0E7QUFDQTtDQUVBOztBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsZUFBVCxHQUEyQjtBQUFBOztBQUFBOztBQUFBLGtCQUNXQyxzREFBUSxDQUFDLEtBQUQsQ0FEbkI7QUFBQSxNQUNsQkMsVUFEa0I7QUFBQSxNQUNOQyxhQURNOztBQUFBLG1CQUVTRixzREFBUSxDQUFDLEtBQUQsQ0FGakI7QUFBQSxNQUVsQkcsU0FGa0I7QUFBQSxNQUVQQyxZQUZPOztBQUFBLG1CQUdESixzREFBUSxDQUFDLEVBQUQsQ0FIUDtBQUFBLE1BR2xCSyxJQUhrQjtBQUFBLE1BR1pDLE9BSFk7O0FBSXpCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFKeUIsc0JBS0RELE1BQU0sQ0FBQ0UsS0FMTjtBQUFBLE1BS2pCQyxFQUxpQixpQkFLakJBLEVBTGlCO0FBQUEsTUFL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O0FBQUEsT0FDRTtBQUFJLFdBQUssRUFBRTtBQUFFQSxhQUFLLEVBQUU7QUFBVCxPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbW9CQURGLENBSkYsQ0E1QkYsRUF3Q0UsTUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF4Q0YsQ0FKRixDQUpGLENBREYsQ0FERjtBQXdERDtBQUNGOztHQTFHUWpDLGU7VUFJUVMscUQ7OztLQUpSVCxlO0FBNEdNQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2hvcFxcZGVzY3JpcHRpb24uanMuNWZlZmQ1NWU1YzdmNTdmNzU2NjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbXBvbmVudC5oZWFkZXJcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21wb25lbnQubmF2YmFyXCI7XHJcbi8vaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBBeGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIERlc2NyaXB0aW9uUGFnZSgpIHtcclxuICBjb25zdCBbY2hlY2tMb2dpbiwgc2V0Q2hlY2tMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0aXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgaWQsIGNvbW1lbnQgfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGxldCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0b2tlblwiLCB0b2tlbiwgdXNlcik7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgc2V0VXNlcih1c2VyLnVzZXJfbmFtZSk7XHJcbiAgICAgIHNldENoZWNrTG9naW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBnZXRQcm9kdWN0QnlpZCgpO1xyXG4gICAgc2V0aXNMb2FkaW5nKHRydWUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0UHJvZHVjdEJ5aWQgPSAoKSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IHsgaWQ6IFwiXCIraWQrXCJcIiB9XHJcbiAgICBBeGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvcHJvZHVjdGJ5aWQnLGRhdGEpXHJcbiAgICAudGhlbigocmVzKT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICB9KS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgQnV0dG9uU2hvdyA9ICgpID0+IHtcclxuICAgIGlmIChjaGVja0xvZ2luKSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZHQtYnRuXCI+4LiL4Li34LmJ4Lit4Liq4Li04LiZ4LiE4LmJ4LiyPC9CdXR0b24+XHJcbiAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImR0LWJ0blwiIHN0eWxlPXt7bWFyZ2luVG9wOlwiNXB4XCJ9fT7guKvguKLguLTguJrguYPguKrguYjguJXguKPguLDguIHguKPguYnguLI8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJkdC1idG5cIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9wYWdlLmxvZ2luXCIpfT5cclxuICAgICAgICAgIOC4geC4o+C4uOC4k+C4suC5gOC4guC5ieC4suC4quC4ueC5iOC4o+C4sOC4muC4mlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGlmICghaXNMb2FkaW5nKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZvcm1JdGVtIHN0eWxlPXt7IG1hcmdpbjogXCIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnItYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLWJvZHktMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZiYXIgcGFnZT17XCJkZXNjcmlwdGlvblwifSBzdGF0dXM9e2NoZWNrTG9naW59IHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLWJvZHktMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHQtYm9keS0yLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgUG9zdCA6e2lkfVxyXG4gICAgICAgICAgICAgICAgICBDb21tZW50IDoge2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgIEFDRVIgMjA1UEkgQ09SRTdcclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdC1ib2R5LTItYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkdC1pbWdcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy50ZWNobW9ibG9nLmNvbS91cGxvYWRzL2NvbnRlbnRfaW1hZ2VzLzIwMjAwNC9pbWdfMTU4Njc2MzQ4NV82MTgwNzA5NTk1YWYuanBnXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHQtaW1nLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LmJlYXJ0YWkuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL01hY0Jvb2stUHJvLTIwMTgtR3Jpcy0yLTEyMDB4Njc1LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkdC1pbWctMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuYmVhcnRhaS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvTWFjQm9vay1Qcm8tMjAxOC1HcmlzLTItMTIwMHg2NzUuanBnXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImR0LWltZy0xXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5iZWFydGFpLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9NYWNCb29rLVByby0yMDE4LUdyaXMtMi0xMjAweDY3NS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdC1kZWNyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT7guKPguLLguKLguKXguLDguYDguK3guLXguKLguJQ8L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICDguIjguK3guKDguLLguJ7guYHguJrguYfguITguYTguKXguJfguYzguYHguJrguJogTEVEIOC4guC4meC4suC4lCAxMy4zIOC4meC4tOC5ieC4pyAo4LmB4LiZ4Lin4LiX4LmB4Lii4LiHKSDguJ7guKPguYnguK3guKHguYDguJfguITguYLguJnguYLguKXguKLguLVcclxuICAgICAgICAgICAgICAgICAgICBJUFMg4LiE4Lin4Liy4Lih4Lil4Liw4LmA4Lit4Li14Lii4LiU4Lib4LiB4LiV4Li0IDI1NjAgeCAxNjAwIOC4l+C4teC5iCAyMjcg4Lie4Li04LiB4LmA4LiL4Lil4LiV4LmI4Lit4LiZ4Li04LmJ4LinXHJcbiAgICAgICAgICAgICAgICAgICAg4LmB4Lil4Liw4Lij4Lit4LiH4Lij4Lix4Lia4Liq4Li14Liq4Lix4LiZ4LiZ4Lix4Lia4Lil4LmJ4Liy4LiZ4Liq4Li1XHJcbiAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8QnV0dG9uU2hvdyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0Zvcm1JdGVtPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlc2NyaXB0aW9uUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==