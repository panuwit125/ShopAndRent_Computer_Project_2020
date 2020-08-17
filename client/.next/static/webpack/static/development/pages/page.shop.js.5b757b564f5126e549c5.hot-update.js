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
      setisLoading(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlLnNob3AuanMiXSwibmFtZXMiOlsiRm9ybUl0ZW0iLCJJdGVtIiwiTWV0YSIsIlNob3BQYWdlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiVHlwZUJsYW5kIiwidXNlU3RhdGUiLCJjaGVja0xvZ2luIiwic2V0Q2hlY2tMb2dpbiIsImlzTG9hZGluZyIsInNldGlzTG9hZGluZyIsImxvYWRpbmdUeXBlYmxhbmQiLCJzZXRsb2FkaW5nVHlwZWJsYW5kIiwidXNlciIsInNldFVzZXIiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsInVzZUVmZmVjdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyX25hbWUiLCJnZXRQcm9kdWN0IiwiYm9keSIsImJsYW5kX3Byb2R1Y3QiLCJheGlvcyIsInRoZW4iLCJyZXMiLCJkYXRhIiwiZXJyIiwibWFyZ2luIiwiY29sb3IiLCJmb250U2l6ZSIsIm1hcCIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHLHFEQUFLQyxJQUF0QjtJQUNRQyxJLHdEQUFBQSxJO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUNsQixNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQURrQixxQkFFSUMsK0RBQVcsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsV0FBV0EsS0FBSyxDQUFDQyxJQUFqQjtBQUFBLEdBQUQsQ0FGZjtBQUFBLE1BRVZDLFNBRlUsZ0JBRVZBLFNBRlU7O0FBQUEsa0JBR2tCQyxzREFBUSxDQUFDLEtBQUQsQ0FIMUI7QUFBQSxNQUdYQyxVQUhXO0FBQUEsTUFHQ0MsYUFIRDs7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QUE7QUFBQTtBQUFBLE1BREYsQ0FERixFQUlFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLFdBQUssRUFBRTtBQUFFc0IsYUFBSyxFQUFFLE9BQVQ7QUFBa0JDLGdCQUFRLEVBQUU7QUFBNUIsT0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0cvQixTQURILENBREYsQ0FERixFQU1FO0FBQUssZUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1UsT0FBTyxDQUFDc0IsR0FBUixDQUFZLFVBQUNMLElBQUQsRUFBTU0sS0FBTixFQUFjO0FBQ3pCZixhQUFPLENBQUNDLEdBQVIsQ0FBWVEsSUFBWixFQUFpQk0sS0FBakI7QUFDQSxhQUFPLE1BQUMseUVBQUQ7QUFBYSxZQUFJLEVBQUVOLElBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBUDtBQUNELEtBSEEsQ0FESCxDQU5GLENBSkYsQ0FKRixDQURGLENBREY7QUEyQkQ7QUFDRjs7R0ExRVFqQyxRO1VBQ1VFLHVELEVBQ0tDLHVEOzs7S0FGZkgsUTtBQTRFTUEsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBhZ2Uuc2hvcC5qcy41Yjc1N2I1NjRmNTEyNmU1NDljNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBDYXJkIH0gZnJvbSBcImFudGRcIjtcclxuY29uc3QgRm9ybUl0ZW0gPSBGb3JtLkl0ZW07XHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL2NvbXBvbmVudC5uYXZiYXJcIjtcclxuaW1wb3J0IENhcmRQcm9kdWN0IGZyb20gXCIuL2NvbXBvbmVudHMvY29tcG9uZW50LmNhcmRwcm9kdWN0XCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9jb21wb25lbnQuaGVhZGVyXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyB1cGRhdGVUeXBlQmxhbmQgfSBmcm9tIFwiLi4vc3RvcmUvYWN0aW9ucy9wb3N0QWN0aW9uXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIFNob3BQYWdlKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCB7IFR5cGVCbGFuZCB9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5wb3N0KTtcclxuICBjb25zdCBbY2hlY2tMb2dpbiwgc2V0Q2hlY2tMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0aXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbG9hZGluZ1R5cGVibGFuZCAsIHNldGxvYWRpbmdUeXBlYmxhbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VyLHNldFVzZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwcm9kdWN0LHNldFByb2R1Y3RdID0gdXNlU3RhdGUoKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGxldCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0b2tlblwiLCB0b2tlbix1c2VyKTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBzZXRVc2VyKHVzZXIudXNlcl9uYW1lKVxyXG4gICAgICBzZXRDaGVja0xvZ2luKHRydWUpO1xyXG4gICAgfVxyXG4gICAgZ2V0UHJvZHVjdChcIkFDRVJcIik7XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBnZXRQcm9kdWN0ID0gKHByb2R1Y3QpID0+IHtcclxuICAgIGxldCBib2R5ID0geyBibGFuZF9wcm9kdWN0OnByb2R1Y3QgfVxyXG4gICAgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9zaG93cHJvZHVjdFwiLGJvZHkpLnRoZW4ocmVzPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgc2V0UHJvZHVjdChyZXMuZGF0YSlcclxuICAgICAgc2V0aXNMb2FkaW5nKHRydWUpO1xyXG4gICAgfSkuY2F0Y2goZXJyPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCk9PntcclxuICAgIGlmKGxvYWRpbmdUeXBlYmxhbmQpe1xyXG4gICAgICBzZXRpc0xvYWRpbmcoZmFsc2UpXHJcbiAgICAgIGdldFByb2R1Y3QoVHlwZUJsYW5kKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0bG9hZGluZ1R5cGVibGFuZCh0cnVlKVxyXG4gICAgfVxyXG4gIH0sW1R5cGVCbGFuZF0pXHJcblxyXG5cclxuXHJcbiAgaWYgKCFpc0xvYWRpbmcpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZvcm1JdGVtIHN0eWxlPXt7IG1hcmdpbjogXCIwcHhcIiB9fT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8SGVhZGVyIHBhZ2U9e1wiU2hvcFwifSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyLWJvZHlcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1ib2R5LTFcIj5cclxuICAgICAgICAgICAgICA8TmF2YmFyIHBhZ2U9e1wiU2hvcFwifSBzdGF0dXM9e2NoZWNrTG9naW59IHVzZXI9e3VzZXJ9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLWJvZHktMlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtYm9keS0yLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIsIGZvbnRTaXplOiBcIjQwcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge1R5cGVCbGFuZH1cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1ib2R5LTItYm9keVwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3QubWFwKChkYXRhLGluZGV4KT0+e1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLGluZGV4KVxyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gPENhcmRQcm9kdWN0IGRhdGE9e2RhdGF9IC8+ICAgIFxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRm9ybUl0ZW0+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hvcFBhZ2U7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=