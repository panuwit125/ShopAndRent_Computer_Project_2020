webpackHotUpdate("static\\development\\pages\\shop\\page.homeSeller.js",{

/***/ "./pages/components/component.navbar.js":
/*!**********************************************!*\
  !*** ./pages/components/component.navbar.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/menu/style */ "./node_modules/antd/lib/menu/style/index.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_actions_postAction__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/postAction */ "./store/actions/postAction.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");





var _jsxFileName = "D:\\GitHub\\shopandrent-computer\\pages\\components\\component.navbar.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Header,
    Content = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Content,
    Footer = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Footer,
    Sider = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3___default.a.Sider;

function NavbarComponent(props) {
  _s();

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"])(function (state) {
    return state.post;
  }),
      Navbar = _useSelector.Navbar;

  var ClickMenu = function ClickMenu(link, number, bland) {
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
      onBreakpoint: function onBreakpoint(broken) {
        console.log(broken);
      },
      onCollapse: function onCollapse(collapsed, type) {
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
      onClick: function onClick() {
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
      onClick: function onClick() {
        return ClickMenu("/page.shop", 2, "ACER");
      },
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
      onClick: function onClick() {
        return ClickMenu("/page.shop", 3, "DELL");
      },
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
      onClick: function onClick() {
        return ClickMenu("/page.shop", 4, "LENOVO");
      },
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
      onBreakpoint: function onBreakpoint(broken) {
        console.log(broken);
      },
      onCollapse: function onCollapse(collapsed, type) {
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
      onClick: function onClick() {//
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
      onClick: function onClick() {//
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
      onClick: function onClick() {//
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 13
      }
    }, "\u0E2D\u0E2D\u0E01\u0E08\u0E32\u0E01\u0E23\u0E30\u0E1A\u0E1A"))));
  } else {
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
      onBreakpoint: function onBreakpoint(broken) {
        console.log(broken);
      },
      onCollapse: function onCollapse(collapsed, type) {
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
          columnNumber: 40
        }
      }),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 15
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
      onClick: function onClick() {
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
      onClick: function onClick() {
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
      onClick: function onClick() {
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
      onClick: function onClick() {
        dispatch(Object(_store_actions_postAction__WEBPACK_IMPORTED_MODULE_7__["updateTypeBland"])("LENOVO"));
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 13
      }
    }, "Lenovo"))));
  }
}

_s(NavbarComponent, "n7lBJ7q5LEhuBUBwSaBVwQaSGTE=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"], react_redux__WEBPACK_IMPORTED_MODULE_8__["useSelector"]];
});

_c = NavbarComponent;
/* harmony default export */ __webpack_exports__["default"] = (NavbarComponent);

var _c;

$RefreshReg$(_c, "NavbarComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2NvbXBvbmVudC5uYXZiYXIuanMiXSwibmFtZXMiOlsiSGVhZGVyIiwiQ29udGVudCIsIkZvb3RlciIsIlNpZGVyIiwiTmF2YmFyQ29tcG9uZW50IiwicHJvcHMiLCJkaXNwYXRjaCIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJzdGF0ZSIsInBvc3QiLCJOYXZiYXIiLCJDbGlja01lbnUiLCJsaW5rIiwibnVtYmVyIiwiYmxhbmQiLCJ1cGRhdGVOYXZiYXIiLCJ1cGRhdGVUeXBlQmxhbmQiLCJyb3V0ZXIiLCJwdXNoIiwicGFnZSIsImJyb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJjb2xsYXBzZWQiLCJ0eXBlIiwic3RhdHVzIiwidXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0lBQ1FBLE0sMERBQUFBLE07SUFBUUMsTywwREFBQUEsTztJQUFTQyxNLDBEQUFBQSxNO0lBQVFDLEssMERBQUFBLEs7O0FBRWpDLFNBQVNDLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQUE7O0FBQzlCLE1BQU1DLFFBQVEsR0FBR0MsK0RBQVcsRUFBNUI7O0FBRDhCLHFCQUVYQywrREFBVyxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxXQUFXQSxLQUFLLENBQUNDLElBQWpCO0FBQUEsR0FBRCxDQUZBO0FBQUEsTUFFdEJDLE1BRnNCLGdCQUV0QkEsTUFGc0I7O0FBSTlCLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLElBQUQsRUFBT0MsTUFBUCxFQUFlQyxLQUFmLEVBQXlCO0FBQ3pDVCxZQUFRLENBQUNVLDhFQUFZLENBQUNGLE1BQUQsQ0FBYixDQUFSO0FBQ0FSLFlBQVEsQ0FBQ1csaUZBQWUsQ0FBQ0YsS0FBRCxDQUFoQixDQUFSO0FBQ0FHLHNEQUFNLENBQUNDLElBQVAsQ0FBWU4sSUFBWjtBQUNBLFdBQU8s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QUFBQSxnQkF0Q0YsQ0FYRixDQURGLENBREY7QUFnRUQ7QUFDRjs7R0ExTFFiLGU7VUFDVUcsdUQsRUFDRUMsdUQ7OztLQUZaSixlO0FBNExNQSw4RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2hvcFxccGFnZS5ob21lU2VsbGVyLmpzLmM4ZDc4MmQ4Mzg0NjdmNTMwODliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IExheW91dCwgTWVudSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7XHJcbiAgVXBsb2FkT3V0bGluZWQsXHJcbiAgVXNlck91dGxpbmVkLFxyXG4gIFZpZGVvQ2FtZXJhT3V0bGluZWQsXHJcbn0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVwZGF0ZU5hdmJhciwgdXBkYXRlVHlwZUJsYW5kIH0gZnJvbSBcIi4uLy4uL3N0b3JlL2FjdGlvbnMvcG9zdEFjdGlvblwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciwgU2lkZXIgfSA9IExheW91dDtcclxuXHJcbmZ1bmN0aW9uIE5hdmJhckNvbXBvbmVudChwcm9wcykge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IE5hdmJhciB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuXHJcbiAgY29uc3QgQ2xpY2tNZW51ID0gKGxpbmssIG51bWJlciwgYmxhbmQpID0+IHtcclxuICAgIGRpc3BhdGNoKHVwZGF0ZU5hdmJhcihudW1iZXIpKTtcclxuICAgIGRpc3BhdGNoKHVwZGF0ZVR5cGVCbGFuZChibGFuZCkpO1xyXG4gICAgcm91dGVyLnB1c2gobGluayk7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9O1xyXG5cclxuICBpZiAocHJvcHMucGFnZSA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxTaWRlclxyXG4gICAgICAgICAgYnJlYWtwb2ludD1cImxnXCJcclxuICAgICAgICAgIGNvbGxhcHNlZFdpZHRoPVwiMFwiXHJcbiAgICAgICAgICBvbkJyZWFrcG9pbnQ9eyhicm9rZW4pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYnJva2VuKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNvbGxhcHNlPXsoY29sbGFwc2VkLCB0eXBlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbGxhcHNlZCwgdHlwZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgICAgICA8TWVudSB0aGVtZT1cImRhcmtcIiBtb2RlPVwiaW5saW5lXCI+XHJcbiAgICAgICAgICAgIHtwcm9wcy5zdGF0dXMgPyAoXHJcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxXCIgaWNvbj17PFVzZXJPdXRsaW5lZCAvPn0+XHJcbiAgICAgICAgICAgICAgICBJRCA6IHtwcm9wcy51c2VyfVxyXG4gICAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICAgIGtleT1cIjFcIlxyXG4gICAgICAgICAgICAgICAgaWNvbj17PFVzZXJPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvcGFnZS5sb2dpblwiKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgU2lnbkluXHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICBrZXk9XCIyXCJcclxuICAgICAgICAgICAgICBpY29uPXs8VmlkZW9DYW1lcmFPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBDbGlja01lbnUoXCIvcGFnZS5zaG9wXCIsIDIsIFwiQUNFUlwiKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEFjZXJcclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICBrZXk9XCIzXCJcclxuICAgICAgICAgICAgICBpY29uPXs8VXBsb2FkT3V0bGluZWQgLz59XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gQ2xpY2tNZW51KFwiL3BhZ2Uuc2hvcFwiLCAzLCBcIkRFTExcIil9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEZWxsXHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAga2V5PVwiNFwiXHJcbiAgICAgICAgICAgICAgaWNvbj17PFVzZXJPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBDbGlja01lbnUoXCIvcGFnZS5zaG9wXCIsIDQsIFwiTEVOT1ZPXCIpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgTGVub3ZvXHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgIDwvU2lkZXI+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKHByb3BzLnBhZ2UgPT09IFwiTWFuYWdlXCIpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPFNpZGVyXHJcbiAgICAgICAgICBicmVha3BvaW50PVwibGdcIlxyXG4gICAgICAgICAgY29sbGFwc2VkV2lkdGg9XCIwXCJcclxuICAgICAgICAgIG9uQnJlYWtwb2ludD17KGJyb2tlbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhicm9rZW4pO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIG9uQ29sbGFwc2U9eyhjb2xsYXBzZWQsIHR5cGUpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coY29sbGFwc2VkLCB0eXBlKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cclxuICAgICAgICAgIDxNZW51XHJcbiAgICAgICAgICAgIHRoZW1lPVwiZGFya1wiXHJcbiAgICAgICAgICAgIG1vZGU9XCJpbmxpbmVcIlxyXG4gICAgICAgICAgICBkZWZhdWx0U2VsZWN0ZWRLZXlzPXtbXCJcIiArIE5hdmJhciArIFwiXCJdfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIiBpY29uPXs8VXNlck91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICBJRCA6IFxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgIGtleT1cIjJcIlxyXG4gICAgICAgICAgICAgIGljb249ezxWaWRlb0NhbWVyYU91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOC5gOC4nuC4tOC5iOC4oeC4quC4tOC4meC4hOC5ieC4slxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgIGtleT1cIjNcIlxyXG4gICAgICAgICAgICAgIGljb249ezxVcGxvYWRPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICDguYHguIHguYnguYTguILguKrguLTguJnguITguYnguLJcclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW1cclxuICAgICAgICAgICAgICBrZXk9XCI0XCJcclxuICAgICAgICAgICAgICBpY29uPXs8VXNlck91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIOC4reC4reC4geC4iOC4suC4geC4o+C4sOC4muC4mlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDwvTWVudT5cclxuICAgICAgICA8L1NpZGVyPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKHByb3BzLnN0YXR1cyk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxTaWRlclxyXG4gICAgICAgICAgYnJlYWtwb2ludD1cImxnXCJcclxuICAgICAgICAgIGNvbGxhcHNlZFdpZHRoPVwiMFwiXHJcbiAgICAgICAgICBvbkJyZWFrcG9pbnQ9eyhicm9rZW4pID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYnJva2VuKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNvbGxhcHNlPXsoY29sbGFwc2VkLCB0eXBlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbGxhcHNlZCwgdHlwZSk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgICAgICA8TWVudVxyXG4gICAgICAgICAgICB0aGVtZT1cImRhcmtcIlxyXG4gICAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcclxuICAgICAgICAgICAgZGVmYXVsdFNlbGVjdGVkS2V5cz17W1wiXCIgKyBOYXZiYXIgKyBcIlwiXX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge3Byb3BzLnN0YXR1cyA/IChcclxuICAgICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIiBpY29uPXs8VXNlck91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICAgIElEIDoge3Byb3BzLnVzZXJ9XHJcbiAgICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgICAga2V5PVwiMVwiXHJcbiAgICAgICAgICAgICAgICBpY29uPXs8VXNlck91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9wYWdlLmxvZ2luXCIpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBTaWduSW5cclxuICAgICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPE1lbnUuSXRlbVxyXG4gICAgICAgICAgICAgIGtleT1cIjJcIlxyXG4gICAgICAgICAgICAgIGljb249ezxWaWRlb0NhbWVyYU91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZVR5cGVCbGFuZChcIkFDRVJcIikpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBBY2VyXHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAga2V5PVwiM1wiXHJcbiAgICAgICAgICAgICAgaWNvbj17PFVwbG9hZE91dGxpbmVkIC8+fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZVR5cGVCbGFuZChcIkRFTExcIikpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBEZWxsXHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtXHJcbiAgICAgICAgICAgICAga2V5PVwiNFwiXHJcbiAgICAgICAgICAgICAgaWNvbj17PFVzZXJPdXRsaW5lZCAvPn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaCh1cGRhdGVUeXBlQmxhbmQoXCJMRU5PVk9cIikpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBMZW5vdm9cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8L01lbnU+XHJcbiAgICAgICAgPC9TaWRlcj5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyQ29tcG9uZW50O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9