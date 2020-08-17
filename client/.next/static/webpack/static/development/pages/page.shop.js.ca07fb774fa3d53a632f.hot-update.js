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
    var body = {
      bland_product: "ACER"
    };
    axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("http://localhost:5000/showproduct", body).then(function (res) {
      console.log(res);
      setProduct(res.data);
    })["catch"](function (err) {
      console.log(err);
    });
    setisLoading(true);
  };

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
        lineNumber: 48,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "sp",
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
    }, __jsx(_components_component_header__WEBPACK_IMPORTED_MODULE_7__["default"], {
      page: "Shop",
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
    }, __jsx(_components_component_navbar__WEBPACK_IMPORTED_MODULE_5__["default"], {
      page: "shop",
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
      className: "sp-body-2-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
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
        lineNumber: 59,
        columnNumber: 17
      }
    }, TypeBland)), __jsx("div", {
      className: "sp-body-2-body",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 15
      }
    }, product.map(function (data, index) {
      console.log(data, index);
      return __jsx(_components_component_cardproduct__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 26
        }
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wYWdlLnNob3AuanMiXSwibmFtZXMiOlsiRm9ybUl0ZW0iLCJJdGVtIiwiTWV0YSIsIlNob3BQYWdlIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJwb3N0IiwiVHlwZUJsYW5kIiwidXNlU3RhdGUiLCJjaGVja0xvZ2luIiwic2V0Q2hlY2tMb2dpbiIsImlzTG9hZGluZyIsInNldGlzTG9hZGluZyIsInVzZXIiLCJzZXRVc2VyIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwidXNlcl9uYW1lIiwiZ2V0UHJvZHVjdCIsImJvZHkiLCJibGFuZF9wcm9kdWN0IiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImVyciIsIm1hcmdpbiIsImNvbG9yIiwiZm9udFNpemUiLCJtYXAiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQU1BLFFBQVEsR0FBRyxxREFBS0MsSUFBdEI7SUFDUUMsSSx3REFBQUEsSTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNDLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFDbEIsTUFBTUMsUUFBUSxHQUFHQywrREFBVyxFQUE1Qjs7QUFEa0IscUJBRUlDLCtEQUFXLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFdBQVdBLEtBQUssQ0FBQ0MsSUFBakI7QUFBQSxHQUFELENBRmY7QUFBQSxNQUVWQyxTQUZVLGdCQUVWQSxTQUZVOztBQUFBLGtCQUdrQkMsc0RBQVEsQ0FBQyxLQUFELENBSDFCO0FBQUEsTUFHWEMsVUFIVztBQUFBLE1BR0NDLGFBSEQ7O0FBQUEsbUJBSWdCRixzREFBUSxDQUFDLEtBQUQsQ0FKeEI7QUFBQSxN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QUEsT0FDR1EsT0FBTyxDQUFDc0IsR0FBUixDQUFZLFVBQUNMLElBQUQsRUFBTU0sS0FBTixFQUFjO0FBQ3pCZixhQUFPLENBQUNDLEdBQVIsQ0FBWVEsSUFBWixFQUFpQk0sS0FBakI7QUFDQSxhQUFPLE1BQUMseUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFQO0FBQ0QsS0FIQSxDQURILENBTkYsQ0FKRixDQUpGLENBREYsQ0FERjtBQTJCRDtBQUNGOztHQS9EUXJDLFE7VUFDVUUsdUQsRUFDS0MsdUQ7OztLQUZmSCxRO0FBaUVNQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccGFnZS5zaG9wLmpzLmNhMDdmYjc3NGZhM2Q1M2E2MzJmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtLCBCdXR0b24sIENhcmQgfSBmcm9tIFwiYW50ZFwiO1xyXG5jb25zdCBGb3JtSXRlbSA9IEZvcm0uSXRlbTtcclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL2NvbXBvbmVudHMvY29tcG9uZW50Lm5hdmJhclwiO1xyXG5pbXBvcnQgQ2FyZFByb2R1Y3QgZnJvbSBcIi4vY29tcG9uZW50cy9jb21wb25lbnQuY2FyZHByb2R1Y3RcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL2NvbXBvbmVudC5oZWFkZXJcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVwZGF0ZVR5cGVCbGFuZCB9IGZyb20gXCIuLi9zdG9yZS9hY3Rpb25zL3Bvc3RBY3Rpb25cIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuZnVuY3Rpb24gU2hvcFBhZ2UoKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IHsgVHlwZUJsYW5kIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnBvc3QpO1xyXG4gIGNvbnN0IFtjaGVja0xvZ2luLCBzZXRDaGVja0xvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRpc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt1c2VyLHNldFVzZXJdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwcm9kdWN0LHNldFByb2R1Y3RdID0gdXNlU3RhdGUoKTtcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcclxuICAgIGxldCB1c2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgY29uc29sZS5sb2coXCJ0b2tlblwiLCB0b2tlbix1c2VyKTtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBzZXRVc2VyKHVzZXIudXNlcl9uYW1lKVxyXG4gICAgICBzZXRDaGVja0xvZ2luKHRydWUpO1xyXG4gICAgfVxyXG4gICAgZ2V0UHJvZHVjdCgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZ2V0UHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGxldCBib2R5ID0geyBibGFuZF9wcm9kdWN0OlwiQUNFUlwiIH1cclxuICAgIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvc2hvd3Byb2R1Y3RcIixib2R5KS50aGVuKHJlcz0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgIHNldFByb2R1Y3QocmVzLmRhdGEpXHJcbiAgICB9KS5jYXRjaChlcnI9PntcclxuICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgfSlcclxuICAgIHNldGlzTG9hZGluZyh0cnVlKTtcclxuICB9XHJcblxyXG5cclxuICBpZiAoIWlzTG9hZGluZykge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3QpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Rm9ybUl0ZW0gc3R5bGU9e3sgbWFyZ2luOiBcIjBweFwiIH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxIZWFkZXIgcGFnZT17XCJTaG9wXCJ9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnItYm9keVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLWJvZHktMVwiPlxyXG4gICAgICAgICAgICAgIDxOYXZiYXIgcGFnZT17XCJzaG9wXCJ9IHN0YXR1cz17Y2hlY2tMb2dpbn0gdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3AtYm9keS0yXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcC1ib2R5LTItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiwgZm9udFNpemU6IFwiNDBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7VHlwZUJsYW5kfVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwLWJvZHktMi1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5tYXAoKGRhdGEsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEsaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8Q2FyZFByb2R1Y3QgLz4gICAgXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Gb3JtSXRlbT5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaG9wUGFnZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==