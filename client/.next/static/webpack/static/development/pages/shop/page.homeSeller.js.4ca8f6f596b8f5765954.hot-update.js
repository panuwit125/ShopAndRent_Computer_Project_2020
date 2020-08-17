webpackHotUpdate("static\\development\\pages\\shop\\page.homeSeller.js",{

/***/ "./pages/shop/page.homeSeller.js":
/*!***************************************!*\
  !*** ./pages/shop/page.homeSeller.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_component_navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/component.navbar */ "./pages/components/component.navbar.js");
/* harmony import */ var _components_component_cardproduct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/component.cardproduct */ "./pages/components/component.cardproduct.js");





var _jsxFileName = "D:\\GitHub\\shopandrent-computer\\pages\\shop\\page.homeSeller.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

var FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_3___default.a.Item;


var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Header,
    Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Sider,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a.Content;



function homeSeller() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      collapsed = _useState[0],
      setCollapsed = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      checkLogin = _useState2[0],
      setCheckLogin = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      user = _useState3[0],
      setUser = _useState3[1];

  return __jsx(FormItem, {
    style: {
      margin: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "sp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "br-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Home")), __jsx("div", {
    className: "br-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "sp-body-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx(_components_component_navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    page: "shop",
    status: checkLogin,
    user: user,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "sp-body-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "sp-body-2-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 33,
      columnNumber: 17
    }
  }, TypeBland)), __jsx("div", {
    className: "sp-body-2-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 15
    }
  }, __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }), __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }), __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }))))));
}

_s(homeSeller, "Ey8CEJJuMJCzTaTVnJvopm7tPPo=");

/* harmony default export */ __webpack_exports__["default"] = (homeSeller);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL3BhZ2UuaG9tZVNlbGxlci5qcyJdLCJuYW1lcyI6WyJGb3JtSXRlbSIsIkl0ZW0iLCJIZWFkZXIiLCJTaWRlciIsIkNvbnRlbnQiLCJob21lU2VsbGVyIiwidXNlU3RhdGUiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJjaGVja0xvZ2luIiwic2V0Q2hlY2tMb2dpbiIsInVzZXIiLCJzZXRVc2VyIiwibWFyZ2luIiwiY29sb3IiLCJmb250U2l6ZSIsIlR5cGVCbGFuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQU9BLElBQU1BLFFBQVEsR0FBRyxxREFBS0MsSUFBdEI7QUFDQTtBQUNBO0lBQ1FDLE0sMERBQUFBLE07SUFBUUMsSywwREFBQUEsSztJQUFPQyxPLDBEQUFBQSxPO0FBQ3ZCO0FBQ0E7O0FBRUEsU0FBU0MsVUFBVCxHQUFzQjtBQUFBOztBQUFBLGtCQUNhQyxzREFBUSxDQUFDLEtBQUQsQ0FEckI7QUFBQSxNQUNiQyxTQURhO0FBQUEsTUFDSEMsWUFERzs7QUFBQSxtQkFFZ0JGLHNEQUFRLENBQUMsS0FBRCxDQUZ4QjtBQUFBLE1BRWJHLFVBRmE7QUFBQSxNQUVEQyxhQUZDOztBQUFBLG1CQUdHSixzREFBUSxDQUFDLEVBQUQsQ0FIWDtBQUFBLE1BR2JLLElBSGE7QUFBQSxNQUdSQyxPQUhROztBQUtwQixTQUNFLE1BQUMsUUFBRDtBQUFVLFNBQUssRUFBRTtBQUFFQyxZQUFNLEVBQUU7QUFBVixLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLENBREYsRUFJRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9FQUFEO0FBQVEsUUFBSSxFQUFFLE1BQWQ7QUFBc0IsVUFBTSxFQUFFSixVQUE5QjtBQUEwQyxRQUFJLEVBQUVFLElBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksU0FBSyxFQUFFO0FBQUVHLFdBQUssRUFBRSxPQUFUO0FBQWtCQyxjQUFRLEVBQUU7QUFBNUIsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLFNBREgsQ0FERixDQURGLEVBTUU7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLHlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQU5GLENBSkYsQ0FKRixDQURKLENBREY7QUEwQkQ7O0dBL0JRWCxVOztBQWlDTUEseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNob3BcXHBhZ2UuaG9tZVNlbGxlci5qcy40Y2E4ZjZmNTk2YjhmNTc2NTk1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCxMYXlvdXQsIE1lbnUsQ2FyZHMgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQge1xyXG4gIE1lbnVVbmZvbGRPdXRsaW5lZCxcclxuICBNZW51Rm9sZE91dGxpbmVkLFxyXG4gIFVzZXJPdXRsaW5lZCxcclxuICBWaWRlb0NhbWVyYU91dGxpbmVkLFxyXG4gIFVwbG9hZE91dGxpbmVkLFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuY29uc3QgRm9ybUl0ZW0gPSBGb3JtLkl0ZW07XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuY29uc3QgeyBIZWFkZXIsIFNpZGVyLCBDb250ZW50IH0gPSBMYXlvdXQ7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tcG9uZW50Lm5hdmJhclwiO1xyXG5pbXBvcnQgQ2FyZFByb2R1Y3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tcG9uZW50LmNhcmRwcm9kdWN0XCI7XHJcblxyXG5mdW5jdGlvbiBob21lU2VsbGVyKCkge1xyXG4gIGNvbnN0IFtjb2xsYXBzZWQsc2V0Q29sbGFwc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbY2hlY2tMb2dpbiwgc2V0Q2hlY2tMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXIsc2V0VXNlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUl0ZW0gc3R5bGU9e3sgbWFyZ2luOiBcIjBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMT5Ib21lPC9oMT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJici1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtYm9keS0xXCI+XHJcbiAgICAgICAgICAgICAgPE5hdmJhciBwYWdlPXtcInNob3BcIn0gc3RhdHVzPXtjaGVja0xvZ2lufSB1c2VyPXt1c2VyfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1ib2R5LTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLWJvZHktMi1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiLCBmb250U2l6ZTogXCI0MHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHtUeXBlQmxhbmR9XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtYm9keS0yLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgIDxDYXJkUHJvZHVjdCAvPlxyXG4gICAgICAgICAgICAgICAgPENhcmRQcm9kdWN0IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZFByb2R1Y3QgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtSXRlbT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBob21lU2VsbGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9