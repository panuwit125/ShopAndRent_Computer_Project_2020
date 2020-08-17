webpackHotUpdate("static\\development\\pages\\shop\\[comment].js",{

/***/ "./pages/shop/[comment].js":
/*!*********************************!*\
  !*** ./pages/shop/[comment].js ***!
  \*********************************/
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





var _jsxFileName = "D:\\GitHub\\shopandrent-computer\\pages\\shop\\[comment].js",
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

    setisLoading(true);
  }, []);

  var ButtonShow = function ButtonShow() {
    if (checkLogin) {
      return __jsx("div", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }
      }, __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "dt-btn",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
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
          lineNumber: 32,
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
          lineNumber: 37,
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
        lineNumber: 48,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "br",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "br-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }, __jsx(_components_component_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "br-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "sp-body-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, __jsx(_components_component_navbar__WEBPACK_IMPORTED_MODULE_6__["default"], {
      page: "description",
      status: checkLogin,
      user: user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "sp-body-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "dt-body-2-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
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
        lineNumber: 59,
        columnNumber: 17
      }
    }, "Post :", id, "Comment : ", comment, "ACER 205PI CORE7")), __jsx("div", {
      className: "dt-body-2-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 15
      }
    }, __jsx("img", {
      className: "dt-img",
      src: "https://www.techmoblog.com/uploads/content_images/202004/img_1586763485_6180709595af.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, __jsx("img", {
      className: "dt-img-1",
      src: "https://www.beartai.com/wp-content/uploads/2018/10/MacBook-Pro-2018-Gris-2-1200x675.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 19
      }
    }), __jsx("img", {
      className: "dt-img-1",
      src: "https://www.beartai.com/wp-content/uploads/2018/10/MacBook-Pro-2018-Gris-2-1200x675.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 19
      }
    }), __jsx("img", {
      className: "dt-img-1",
      src: "https://www.beartai.com/wp-content/uploads/2018/10/MacBook-Pro-2018-Gris-2-1200x675.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }))), __jsx("div", {
      className: "dt-decription",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 15
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }, __jsx("h1", {
      style: {
        color: "black"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 19
      }
    }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14")), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 17
      }
    }, __jsx("h2", {
      style: {
        color: "black"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 19
      }
    }, "\u0E08\u0E2D\u0E20\u0E32\u0E1E\u0E41\u0E1A\u0E47\u0E04\u0E44\u0E25\u0E17\u0E4C\u0E41\u0E1A\u0E1A LED \u0E02\u0E19\u0E32\u0E14 13.3 \u0E19\u0E34\u0E49\u0E27 (\u0E41\u0E19\u0E27\u0E17\u0E41\u0E22\u0E07) \u0E1E\u0E23\u0E49\u0E2D\u0E21\u0E40\u0E17\u0E04\u0E42\u0E19\u0E42\u0E25\u0E22\u0E35 IPS \u0E04\u0E27\u0E32\u0E21\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E1B\u0E01\u0E15\u0E34 2560 x 1600 \u0E17\u0E35\u0E48 227 \u0E1E\u0E34\u0E01\u0E40\u0E0B\u0E25\u0E15\u0E48\u0E2D\u0E19\u0E34\u0E49\u0E27 \u0E41\u0E25\u0E30\u0E23\u0E2D\u0E07\u0E23\u0E31\u0E1A\u0E2A\u0E35\u0E2A\u0E31\u0E19\u0E19\u0E31\u0E1A\u0E25\u0E49\u0E32\u0E19\u0E2A\u0E35"))), __jsx(ButtonShow, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL1tjb21tZW50XS5qcyJdLCJuYW1lcyI6WyJGb3JtSXRlbSIsIkl0ZW0iLCJEZXNjcmlwdGlvblBhZ2UiLCJ1c2VTdGF0ZSIsImNoZWNrTG9naW4iLCJzZXRDaGVja0xvZ2luIiwiaXNMb2FkaW5nIiwic2V0aXNMb2FkaW5nIiwidXNlciIsInNldFVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsImlkIiwiY29tbWVudCIsInVzZUVmZmVjdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyX25hbWUiLCJCdXR0b25TaG93IiwibWFyZ2luVG9wIiwicHVzaCIsIm1hcmdpbiIsImNvbG9yIiwidGV4dEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLHFEQUFLQyxJQUF0QjtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTs7QUFFQSxTQUFTQyxlQUFULEdBQTJCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ1dDLHNEQUFRLENBQUMsS0FBRCxDQURuQjtBQUFBLE1BQ2xCQyxVQURrQjtBQUFBLE1BQ05DLGFBRE07O0FBQUEsbUJBRVNGLHNEQUFRLENBQUMsS0FBRCxDQUZqQjtBQUFBLE1BRWxCRyxTQUZrQjtBQUFBLE1BRVBDLFlBRk87O0FBQUEsbUJBR0RKLHNEQUFRLENBQUMsRUFBRCxDQUhQO0FBQUEsTUFHbEJLLElBSGtCO0FBQUEsTUFHWkMsT0FIWTs7QUFJekIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUp5QixzQkFLREQsTUFBTSxDQUFDRSxLQUxOO0FBQUEsTUFLakJDLEVBTGlCLGlCQUtqQkEsRUFMaUI7QUFBQSxNQUtiQyxPQUxhLGlCQUtiQSxPQUxhO0FBT3pCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFJQyxLQUFLLEdBQUdDLFlB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxlQUFTLEVBQUMsVUFEWjtBQUVFLFNBQUcsRUFBQyx5RkFGTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFLRTtBQUNFLGVBQVMsRUFBQyxVQURaO0FBRUUsU0FBRyxFQUFDLHlGQUZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFMRixFQVNFO0FBQ0UsZUFBUyxFQUFDLFVBRFo7QUFFRSxTQUFHLEVBQUMseUZBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQVRGLENBTEYsQ0FSRixFQTRCRTtBQUFLLGVBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxXQUFLLEVBQUU7QUFBRWMsYUFBSyxFQUFFO0FBQVQsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNFQURGLENBREYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxXQUFLLEVBQUU7QUFBRUEsYUFBSyxFQUFFO0FBQVQsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1vQkFERixDQUpGLENBNUJGLEVBd0NFLE1BQUMsVUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BeENGLENBSkYsQ0FKRixDQURGLENBREY7QUF3REQ7QUFDRjs7R0EvRlExQixlO1VBSVFTLHFEOzs7S0FKUlQsZTtBQWlHTUEsOEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNob3BcXFtjb21tZW50XS5qcy5mYjMzMjAyYjVhMTU5Y2JmODVmOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuY29uc3QgRm9ybUl0ZW0gPSBGb3JtLkl0ZW07XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tcG9uZW50LmhlYWRlclwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbXBvbmVudC5uYXZiYXJcIjtcclxuLy9pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmZ1bmN0aW9uIERlc2NyaXB0aW9uUGFnZSgpIHtcclxuICBjb25zdCBbY2hlY2tMb2dpbiwgc2V0Q2hlY2tMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0aXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgaWQsIGNvbW1lbnQgfSA9IHJvdXRlci5xdWVyeVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGxldCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0b2tlblwiLCB0b2tlbiwgdXNlcik7XHJcbiAgICBpZiAodG9rZW4pIHtcclxuICAgICAgc2V0VXNlcih1c2VyLnVzZXJfbmFtZSk7XHJcbiAgICAgIHNldENoZWNrTG9naW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBzZXRpc0xvYWRpbmcodHJ1ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBCdXR0b25TaG93ID0gKCkgPT4ge1xyXG4gICAgaWYgKGNoZWNrTG9naW4pIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJkdC1idG5cIj7guIvguLfguYnguK3guKrguLTguJnguITguYnguLI8L0J1dHRvbj5cclxuICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZHQtYnRuXCIgc3R5bGU9e3ttYXJnaW5Ub3A6XCI1cHhcIn19PuC4q+C4ouC4tOC4muC5g+C4quC5iOC4leC4o+C4sOC4geC4o+C5ieC4sjwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImR0LWJ0blwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL3BhZ2UubG9naW5cIil9PlxyXG4gICAgICAgICAg4LiB4Lij4Li44LiT4Liy4LmA4LiC4LmJ4Liy4Liq4Li54LmI4Lij4Liw4Lia4LiaXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgaWYgKCFpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Rm9ybUl0ZW0gc3R5bGU9e3sgbWFyZ2luOiBcIjBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJici1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtYm9keS0xXCI+XHJcbiAgICAgICAgICAgICAgPE5hdmJhciBwYWdlPXtcImRlc2NyaXB0aW9uXCJ9IHN0YXR1cz17Y2hlY2tMb2dpbn0gdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtYm9keS0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkdC1ib2R5LTItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICBQb3N0IDp7aWR9XHJcbiAgICAgICAgICAgICAgICAgIENvbW1lbnQgOiB7Y29tbWVudH1cclxuICAgICAgICAgICAgICAgICAgQUNFUiAyMDVQSSBDT1JFN1xyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0LWJvZHktMi1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImR0LWltZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnRlY2htb2Jsb2cuY29tL3VwbG9hZHMvY29udGVudF9pbWFnZXMvMjAyMDA0L2ltZ18xNTg2NzYzNDg1XzYxODA3MDk1OTVhZi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkdC1pbWctMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuYmVhcnRhaS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMTAvTWFjQm9vay1Qcm8tMjAxOC1HcmlzLTItMTIwMHg2NzUuanBnXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImR0LWltZy0xXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL3d3dy5iZWFydGFpLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxOC8xMC9NYWNCb29rLVByby0yMDE4LUdyaXMtMi0xMjAweDY3NS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHQtaW1nLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LmJlYXJ0YWkuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzEwL01hY0Jvb2stUHJvLTIwMTgtR3Jpcy0yLTEyMDB4Njc1LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImR0LWRlY3JpcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PuC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIOC4iOC4reC4oOC4suC4nuC5geC4muC5h+C4hOC5hOC4peC4l+C5jOC5geC4muC4miBMRUQg4LiC4LiZ4Liy4LiUIDEzLjMg4LiZ4Li04LmJ4LinICjguYHguJnguKfguJfguYHguKLguIcpIOC4nuC4o+C5ieC4reC4oeC5gOC4l+C4hOC5guC4meC5guC4peC4ouC4tVxyXG4gICAgICAgICAgICAgICAgICAgIElQUyDguITguKfguLLguKHguKXguLDguYDguK3guLXguKLguJTguJvguIHguJXguLQgMjU2MCB4IDE2MDAg4LiX4Li14LmIIDIyNyDguJ7guLTguIHguYDguIvguKXguJXguYjguK3guJnguLTguYnguKdcclxuICAgICAgICAgICAgICAgICAgICDguYHguKXguLDguKPguK3guIfguKPguLHguJrguKrguLXguKrguLHguJnguJnguLHguJrguKXguYnguLLguJnguKrguLVcclxuICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25TaG93IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb25QYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9