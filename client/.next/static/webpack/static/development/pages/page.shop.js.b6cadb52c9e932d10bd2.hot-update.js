webpackHotUpdate("static\\development\\pages\\page.shop.js",{

/***/ "./pages/components/component.cardproduct.js":
/*!***************************************************!*\
  !*** ./pages/components/component.cardproduct.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/card/style */ "./node_modules/antd/lib/card/style/index.js");
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/card */ "./node_modules/antd/lib/card/index.js");
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);



var _this = undefined,
    _jsxFileName = "D:\\GitHub\\shopandrent-computer\\pages\\components\\component.cardproduct.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
var Meta = antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a.Meta;



var CardProductComponent = function CardProductComponent(props) {
  return __jsx(antd_lib_card__WEBPACK_IMPORTED_MODULE_1___default.a, {
    hoverable: true,
    style: {
      width: 240
    },
    cover: __jsx("img", {
      alt: "example",
      src: props.data.image_product,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }),
    className: "sp-card",
    onClick: function onClick() {
      return next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/page.description");
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, __jsx("h3", {
    style: {
      color: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, props.data.name_product), __jsx("h3", {
    style: {
      color: "black"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, props.data.description_product), __jsx(Meta, {
    description: "ราคา " + props.data.price_product + " บาท ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }));
};

_c = CardProductComponent;
/* harmony default export */ __webpack_exports__["default"] = (CardProductComponent);

var _c;

$RefreshReg$(_c, "CardProductComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL2NvbXBvbmVudC5jYXJkcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZFByb2R1Y3RDb21wb25lbnQiLCJwcm9wcyIsIndpZHRoIiwiZGF0YSIsImltYWdlX3Byb2R1Y3QiLCJyb3V0ZXIiLCJwdXNoIiwiY29sb3IiLCJuYW1lX3Byb2R1Y3QiLCJkZXNjcmlwdGlvbl9wcm9kdWN0IiwicHJpY2VfcHJvZHVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDUUEsSSx3REFBQUEsSTtBQUNSO0FBQ0E7O0FBRUEsSUFBTUMsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxLQUFELEVBQVc7QUFDcEMsU0FDRTtBQUNFLGFBQVMsTUFEWDtBQUVFLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUU7QUFBVCxLQUZUO0FBR0UsU0FBSyxFQUNIO0FBQ0UsU0FBRyxFQUFDLFNBRE47QUFFRSxTQUFHLEVBQUVELEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxhQUZsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSko7QUFTRSxhQUFTLEVBQUMsU0FUWjtBQVVFLFdBQU8sRUFBRTtBQUFBLGFBQUlDLGtEQUFNLENBQUNDLElBQVAsQ0FBWSxtQkFBWixDQUFKO0FBQUEsS0FWWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWUU7QUFBSSxTQUFLLEVBQUU7QUFBRUMsV0FBSyxFQUFFO0FBQVQsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDTixLQUFLLENBQUNFLElBQU4sQ0FBV0ssWUFBM0MsQ0FaRixFQWFFO0FBQUksU0FBSyxFQUFFO0FBQUVELFdBQUssRUFBRTtBQUFULEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQ04sS0FBSyxDQUFDRSxJQUFOLENBQVdNLG1CQUEzQyxDQWJGLEVBY0UsTUFBQyxJQUFEO0FBQU0sZUFBVyxFQUFFLFVBQVFSLEtBQUssQ0FBQ0UsSUFBTixDQUFXTyxhQUFuQixHQUFpQyxPQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FERjtBQWtCRCxDQW5CSDs7S0FBTVYsb0I7QUFxQldBLG1GQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwYWdlLnNob3AuanMuYjZjYWRiNTJjOWU5MzJkMTBiZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmQgfSBmcm9tIFwiYW50ZFwiO1xyXG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmNvbnN0IENhcmRQcm9kdWN0Q29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Q2FyZFxyXG4gICAgICAgIGhvdmVyYWJsZVxyXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNDAgfX1cclxuICAgICAgICBjb3Zlcj17XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGFsdD1cImV4YW1wbGVcIlxyXG4gICAgICAgICAgICBzcmM9e3Byb3BzLmRhdGEuaW1hZ2VfcHJvZHVjdH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInNwLWNhcmRcIlxyXG4gICAgICAgIG9uQ2xpY2s9eygpPT5yb3V0ZXIucHVzaChcIi9wYWdlLmRlc2NyaXB0aW9uXCIpfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+e3Byb3BzLmRhdGEubmFtZV9wcm9kdWN0fTwvaDM+XHJcbiAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+e3Byb3BzLmRhdGEuZGVzY3JpcHRpb25fcHJvZHVjdH08L2gzPlxyXG4gICAgICAgIDxNZXRhIGRlc2NyaXB0aW9uPXtcIuC4o+C4suC4hOC4siBcIitwcm9wcy5kYXRhLnByaWNlX3Byb2R1Y3QrXCIg4Lia4Liy4LiXIFwifSAvPlxyXG4gICAgICA8L0NhcmQ+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IENhcmRQcm9kdWN0Q29tcG9uZW50OyJdLCJzb3VyY2VSb290IjoiIn0=