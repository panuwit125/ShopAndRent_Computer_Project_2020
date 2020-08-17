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

  var _this = this;

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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      loadingTypebland = _useState3[0],
      setloadingTypebland = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      user = _useState4[0],
      setUser = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(),
      product = _useState5[0],
      setProduct = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var token = localStorage.getItem("token");
    var user = JSON.parse(localStorage.getItem("user"));
    console.log("token", token, user);

    if (token) {
      setUser(user.user_name);
      setCheckLogin(true);
    }

    getProduct("ACER");
  }, []);

  var getProduct = function getProduct(product) {
    var body = {
      bland_product: product
    };
    axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("http://localhost:5000/showproduct", body).then(function (res) {
      console.log(res);
      setProduct(res.data);
      setisLoading(true);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (loadingTypebland) {
      isLoading(false);
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
        lineNumber: 59,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "sp",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "br-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }
    }, __jsx(_components_component_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
      page: "Shop",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "br-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "sp-body-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, __jsx(_components_component_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      page: "Shop",
      status: checkLogin,
      user: user,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 15
      }
    })), __jsx("div", {
      className: "sp-body-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "sp-body-2-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
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
        lineNumber: 70,
        columnNumber: 17
      }
    }, TypeBland)), __jsx("div", {
      className: "sp-body-2-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 15
      }
    }, product.map(function (data, index) {
      console.log(data, index);
      return __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
        data: data,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 26
        }
      });
    }))))));
  }
}

_s(ShopPage, "3gSX8UIM06qw2x8hxTe5CsfN1ww=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlLnNob3AuanMiXSwibmFtZXMiOlsiRm9ybUl0ZW0iLCJJdGVtIiwiTWV0YSIsIlNob3BQYWdlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiVHlwZUJsYW5kIiwidXNlU3RhdGUiLCJjaGVja0xvZ2luIiwic2V0Q2hlY2tMb2dpbiIsImlzTG9hZGluZyIsInNldGlzTG9hZGluZyIsImxvYWRpbmdUeXBlYmxhbmQiLCJzZXRsb2FkaW5nVHlwZWJsYW5kIiwidXNlciIsInNldFVzZXIiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsInVzZUVmZmVjdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyX25hbWUiLCJnZXRQcm9kdWN0IiwiYm9keSIsImJsYW5kX3Byb2R1Y3QiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwibWFyZ2luIiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLHFEQUFLQyxJQUF0QjtJQUNRQyxJLHdEQUFBQSxJO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURrQixxQkFFSUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FGZjtBQUFBLE1BRVZDLFNBRlUsZ0JBRVZBLFNBRlU7O0FBQUEsa0JBR2tCQyxzREFBUSxDQUFDLEtBQUQsQ0FIMUI7QUFBQSxNQUdYQyxVQUhXO0FBQUEsTUFHQ0MsYUFIRDs7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QTtBQUFBO0FBQUEsTUFERixDQURGLEVBSUU7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksV0FBSyxFQUFFO0FBQUVzQixhQUFLLEVBQUUsT0FBVDtBQUFrQkMsZ0JBQVEsRUFBRTtBQUE1QixPQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRy9CLFNBREgsQ0FERixDQURGLEVBTUU7QUFBSyxlQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNHVSxPQUFPLENBQUNzQixHQUFSLENBQVksVUFBQ0wsSUFBRCxFQUFNTSxLQUFOLEVBQWM7QUFDekJmLGFBQU8sQ0FBQ0MsR0FBUixDQUFZUSxJQUFaLEVBQWlCTSxLQUFqQjtBQUNBLGFBQU8sTUFBQyx5RUFBRDtBQUFhLFlBQUksRUFBRU4sSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQO0FBQ0QsS0FIQSxDQURILENBTkYsQ0FKRixDQUpGLENBREYsQ0FERjtBQTJCRDtBQUNGOztHQTFFUWpDLFE7VUFDVUUsdUQsRUFDS0MsdUQ7OztLQUZmSCxRO0FBNEVNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccGFnZS5zaG9wLmpzLmNiODBhODIxZTM3OTYzMTJiNjlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtLCBCdXR0b24sIENhcmQgfSBmcm9tIFwiYW50ZFwiO1xyXG5jb25zdCBGb3JtSXRlbSA9IEZvcm0uSXRlbTtcclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL2NvbXBvbmVudHMvY29tcG9uZW50Lm5hdmJhclwiO1xyXG5pbXBvcnQgQ2FyZFByb2R1Y3QgZnJvbSBcIi4vY29tcG9uZW50cy9jb21wb25lbnQuY2FyZHByb2R1Y3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL2NvbXBvbmVudC5oZWFkZXJcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVwZGF0ZVR5cGVCbGFuZCB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL3Bvc3RBY3Rpb25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gU2hvcFBhZ2UoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgVHlwZUJsYW5kIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IFtjaGVja0xvZ2luLCBzZXRDaGVja0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRpc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsb2FkaW5nVHlwZWJsYW5kICwgc2V0bG9hZGluZ1R5cGVibGFuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3VzZXIsc2V0VXNlcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3Byb2R1Y3Qsc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZSgpO1xyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xyXG4gICAgbGV0IHVzZXIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XHJcbiAgICBjb25zb2xlLmxvZyhcInRva2VuXCIsIHRva2VuLHVzZXIpO1xyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgIHNldFVzZXIodXNlci51c2VyX25hbWUpXHJcbiAgICAgIHNldENoZWNrTG9naW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBnZXRQcm9kdWN0KFwiQUNFUlwiKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGdldFByb2R1Y3QgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgbGV0IGJvZHkgPSB7IGJsYW5kX3Byb2R1Y3Q6cHJvZHVjdCB9XHJcbiAgICBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Nob3dwcm9kdWN0XCIsYm9keSkudGhlbihyZXM9PntcclxuICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICBzZXRQcm9kdWN0KHJlcy5kYXRhKVxyXG4gICAgICBzZXRpc0xvYWRpbmcodHJ1ZSk7XHJcbiAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgaWYobG9hZGluZ1R5cGVibGFuZCl7XHJcbiAgICAgIGlzTG9hZGluZyhmYWxzZSlcclxuICAgICAgZ2V0UHJvZHVjdChUeXBlQmxhbmQpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRsb2FkaW5nVHlwZWJsYW5kKHRydWUpXHJcbiAgICB9XHJcbiAgfSxbVHlwZUJsYW5kXSlcclxuXHJcblxyXG5cclxuICBpZiAoIWlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Rm9ybUl0ZW0gc3R5bGU9e3sgbWFyZ2luOiBcIjBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgcGFnZT17XCJTaG9wXCJ9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnItYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLWJvZHktMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZiYXIgcGFnZT17XCJTaG9wXCJ9IHN0YXR1cz17Y2hlY2tMb2dpbn0gdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtYm9keS0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1ib2R5LTItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiwgZm9udFNpemU6IFwiNDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7VHlwZUJsYW5kfVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLWJvZHktMi1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5tYXAoKGRhdGEsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEsaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2FyZFByb2R1Y3QgZGF0YT17ZGF0YX0gLz4gICAgXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtSXRlbT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9wUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==