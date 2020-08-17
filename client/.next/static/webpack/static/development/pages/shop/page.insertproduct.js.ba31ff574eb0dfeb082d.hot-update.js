webpackHotUpdate("static\\development\\pages\\shop\\page.insertproduct.js",{

/***/ "./pages/shop/page.insertproduct.js":
/*!******************************************!*\
  !*** ./pages/shop/page.insertproduct.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style */ "./node_modules/antd/lib/button/style/index.js");
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/input/style */ "./node_modules/antd/lib/input/style/index.js");
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/input */ "./node_modules/antd/lib/input/index.js");
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_component_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/component.header */ "./pages/components/component.header.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "D:\\GitHub\\shopandrent-computer\\pages\\shop\\page.insertproduct.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

var FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item;





function InsertProduct() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      nameProduct = _useState[0],
      setNameProduct = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      descriptionProduct = _useState2[0],
      setDescriptionProduct = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      priceProduct = _useState3[0],
      setPriceProduct = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      blandProduct = _useState4[0],
      setBlandProduct = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      image1Product = _useState5[0],
      setIamge1Product = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      url1 = _useState6[0],
      set1Url = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      image2Product = _useState7[0],
      setIamge2Product = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      url2 = _useState8[0],
      set2Url = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      image3Product = _useState9[0],
      setIamge3Product = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      url3 = _useState10[0],
      set3Url = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      image4Product = _useState11[0],
      setIamge4Product = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      url4 = _useState12[0],
      set4Url = _useState12[1];

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
    var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjM5ODNmMzhhNDM4MjY5ZDA2ZmJhMzUiLCJpYXQiOjE1OTc2MDY3NTZ9.JciEM4MJE3H6vGDJyQCoueeWrQ23wvUewAhBeHssID4";

    if (url1) {
      fetch("http://localhost:5000/insertproduct", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        },
        body: JSON.stringify({
          name_product: nameProduct,
          description_product: descriptionProduct,
          price_product: priceProduct,
          bland_product: blandProduct,
          image_product: url1
        })
      }).then(function (res) {
        return res.json();
      }).then(function (data) {
        if (data.err) {
          console.log(data.err);
        } else {
          console.log("create succussfull");
        }
      })["catch"](function (err) {
        return console.log(err);
      });
    }
  }, [url1]);

  var imagefetch = function imagefetch(image, seturl) {
    var data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "shopandrent");
    data.append("cloud_name", "panuwitdev");
    fetch("https://api.cloudinary.com/v1_1/panuwitdev/image/upload", {
      method: "post",
      body: data
    }).then(function (res) {
      return res.json();
    }).then(function (data) {
      console.log(data);
      seturl(data.url);
    })["catch"](function (err) {
      console.log(err);
    });
  };

  var postproduct = function postproduct() {
    console.log(image1Product);

    if (image1Product) {
      imagefetch(image1Product, set1Url);
    }
  };

  return __jsx(FormItem, {
    style: {
      margin: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "br",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "br-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx(_components_component_header__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  })), __jsx("div", {
    style: {
      padding: "50px 100px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "ip-iuput",
    value: nameProduct,
    onChange: function onChange(e) {
      return setNameProduct(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.TextArea, {
    className: "ip-iuput",
    value: descriptionProduct,
    onChange: function onChange(e) {
      return setDescriptionProduct(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 9
    }
  }), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 9
    }
  }, "\u0E23\u0E32\u0E04\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "ip-iuput",
    value: priceProduct,
    onChange: function onChange(e) {
      return setPriceProduct(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, "\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: "ip-iuput",
    value: blandProduct,
    onChange: function onChange(e) {
      return setBlandProduct(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, "\u0E23\u0E39\u0E1B\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx("input", {
    type: "file",
    onChange: function onChange(e) {
      return setIamge1Product(e.target.files[0]);
    },
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }), __jsx("input", {
    type: "file",
    onChange: function onChange(e) {
      return setIamge2Product(e.target.files[0]);
    },
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }), __jsx("input", {
    type: "file",
    onChange: function onChange(e) {
      return setIamge3Product(e.target.files[0]);
    },
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }
  }), __jsx("input", {
    type: "file",
    onChange: function onChange(e) {
      return setIamge4Product(e.target.files[0]);
    },
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: function onClick() {
      return postproduct();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"))));
}

_s(InsertProduct, "aI6X3EmTZXyvOwoZJy1xDy5qMJs=");

_c = InsertProduct;
/* harmony default export */ __webpack_exports__["default"] = (InsertProduct);

var _c;

$RefreshReg$(_c, "InsertProduct");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL3BhZ2UuaW5zZXJ0cHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJGb3JtSXRlbSIsIkl0ZW0iLCJJbnNlcnRQcm9kdWN0IiwidXNlU3RhdGUiLCJuYW1lUHJvZHVjdCIsInNldE5hbWVQcm9kdWN0IiwiZGVzY3JpcHRpb25Qcm9kdWN0Iiwic2V0RGVzY3JpcHRpb25Qcm9kdWN0IiwicHJpY2VQcm9kdWN0Iiwic2V0UHJpY2VQcm9kdWN0IiwiYmxhbmRQcm9kdWN0Iiwic2V0QmxhbmRQcm9kdWN0IiwiaW1hZ2UxUHJvZHVjdCIsInNldElhbWdlMVByb2R1Y3QiLCJ1cmwxIiwic2V0MVVybCIsImltYWdlMlByb2R1Y3QiLCJzZXRJYW1nZTJQcm9kdWN0IiwidXJsMiIsInNldDJVcmwiLCJpbWFnZTNQcm9kdWN0Iiwic2V0SWFtZ2UzUHJvZHVjdCIsInVybDMiLCJzZXQzVXJsIiwiaW1hZ2U0UHJvZHVjdCIsInNldElhbWdlNFByb2R1Y3QiLCJ1cmw0Iiwic2V0NFVybCIsInVzZUVmZmVjdCIsInRva2VuIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZV9wcm9kdWN0IiwiZGVzY3JpcHRpb25fcHJvZHVjdCIsInByaWNlX3Byb2R1Y3QiLCJibGFuZF9wcm9kdWN0IiwiaW1hZ2VfcHJvZHVjdCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZWZldGNoIiwiaW1hZ2UiLCJzZXR1cmwiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVybCIsInBvc3Rwcm9kdWN0IiwibWFyZ2luIiwicGFkZGluZyIsImNvbG9yIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZmlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0EsSUFBTUEsUUFB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Q0FBdkI7QUFBQSxLQUZaO0FBR0UsU0FBSyxFQUFFO0FBQUVKLFdBQUssRUFBRTtBQUFULEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpDQSxFQXNDQTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsWUFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsYUFBT2xDLGdCQUFnQixDQUFDa0MsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLEtBQVQsQ0FBZSxDQUFmLENBQUQsQ0FBdkI7QUFBQSxLQUZaO0FBR0UsU0FBSyxFQUFFO0FBQUVKLFdBQUssRUFBRTtBQUFULEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRDQSxFQTJDQTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1ILFdBQVcsRUFBakI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBFQTNDQSxDQUpGLENBREYsQ0FERjtBQXNERDs7R0E1SFFyRCxhOztLQUFBQSxhO0FBOEhNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2hvcFxccGFnZS5pbnNlcnRwcm9kdWN0LmpzLmJhMzFmZjU3NGViMGRmZWIwODJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBVcGxvYWQgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5jb25zdCBGb3JtSXRlbSA9IEZvcm0uSXRlbTtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21wb25lbnQuaGVhZGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmZ1bmN0aW9uIEluc2VydFByb2R1Y3QoKSB7XHJcbiAgY29uc3QgW25hbWVQcm9kdWN0LCBzZXROYW1lUHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb25Qcm9kdWN0LCBzZXREZXNjcmlwdGlvblByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlUHJvZHVjdCwgc2V0UHJpY2VQcm9kdWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtibGFuZFByb2R1Y3QsIHNldEJsYW5kUHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2UxUHJvZHVjdCwgc2V0SWFtZ2UxUHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXJsMSwgc2V0MVVybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2UyUHJvZHVjdCwgc2V0SWFtZ2UyUHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXJsMiwgc2V0MlVybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2UzUHJvZHVjdCwgc2V0SWFtZ2UzUHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXJsMywgc2V0M1VybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2U0UHJvZHVjdCwgc2V0SWFtZ2U0UHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXJsNCwgc2V0NFVybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB0b2tlbiA9XHJcbiAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmZhV1FpT2lJMVpqTTVPRE5tTXpoaE5ETTRNalk1WkRBMlptSmhNelVpTENKcFlYUWlPakUxT1RjMk1EWTNOVFo5LkpjaUVNNE1KRTNINnZHREp5UUNvdWVlV3JRMjN3dlVld0FoQmVIc3NJRDRcIjtcclxuICAgIGlmICh1cmwxKSB7XHJcbiAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2luc2VydHByb2R1Y3RcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgbmFtZV9wcm9kdWN0OiBuYW1lUHJvZHVjdCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uX3Byb2R1Y3Q6IGRlc2NyaXB0aW9uUHJvZHVjdCxcclxuICAgICAgICAgIHByaWNlX3Byb2R1Y3Q6IHByaWNlUHJvZHVjdCxcclxuICAgICAgICAgIGJsYW5kX3Byb2R1Y3Q6IGJsYW5kUHJvZHVjdCxcclxuICAgICAgICAgIGltYWdlX3Byb2R1Y3Q6IHVybDEsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEuZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIHN1Y2N1c3NmdWxsXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgfVxyXG4gIH0sIFt1cmwxXSk7XHJcblxyXG4gIGNvbnN0IGltYWdlZmV0Y2ggPSAoaW1hZ2Usc2V0dXJsKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBkYXRhLmFwcGVuZChcImZpbGVcIiwgaW1hZ2UpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJ1cGxvYWRfcHJlc2V0XCIsIFwic2hvcGFuZHJlbnRcIik7XHJcbiAgICBkYXRhLmFwcGVuZChcImNsb3VkX25hbWVcIiwgXCJwYW51d2l0ZGV2XCIpO1xyXG4gICAgZmV0Y2goXCJodHRwczovL2FwaS5jbG91ZGluYXJ5LmNvbS92MV8xL3BhbnV3aXRkZXYvaW1hZ2UvdXBsb2FkXCIsIHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgYm9keTogZGF0YSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgc2V0dXJsKGRhdGEudXJsKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBvc3Rwcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhpbWFnZTFQcm9kdWN0KVxyXG4gICAgaWYgKGltYWdlMVByb2R1Y3QpIHtcclxuICAgICAgICBpbWFnZWZldGNoKGltYWdlMVByb2R1Y3Qsc2V0MVVybClcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1JdGVtIHN0eWxlPXt7IG1hcmdpbjogXCIwcHhcIiB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnItaGVhZGVyXCI+XHJcbiAgICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6XCI1MHB4IDEwMHB4XCJ9fT5cclxuICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT7guIrguLfguYjguK3guKrguLTguJnguITguYnguLI8L2gyPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImlwLWl1cHV0XCJcclxuICAgICAgICAgIHZhbHVlPXtuYW1lUHJvZHVjdH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZVByb2R1Y3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiU4Liq4Li04LiZ4LiE4LmJ4LiyPC9oMj5cclxuICAgICAgICA8SW5wdXQuVGV4dEFyZWEgIGNsYXNzTmFtZT1cImlwLWl1cHV0XCJcclxuICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvblByb2R1Y3R9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uUHJvZHVjdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT7guKPguLLguITguLLguKrguLTguJnguITguYnguLI8L2gyPlxyXG4gICAgICAgIDxJbnB1dCBjbGFzc05hbWU9XCJpcC1pdXB1dFwiXHJcbiAgICAgICAgICB2YWx1ZT17cHJpY2VQcm9kdWN0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQcmljZVByb2R1Y3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+4LmB4Lia4Lij4LiZ4LmM4Liq4Li04LiZ4LiE4LmJ4LiyPC9oMj5cclxuICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPVwiaXAtaXVwdXRcIlxyXG4gICAgICAgICAgdmFsdWU9e2JsYW5kUHJvZHVjdH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QmxhbmRQcm9kdWN0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PuC4o+C4ueC4m+C4quC4tOC4meC4hOC5ieC4sjwvaDI+XHJcbiAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJYW1nZTFQcm9kdWN0KGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJYW1nZTJQcm9kdWN0KGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJYW1nZTNQcm9kdWN0KGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJYW1nZTRQcm9kdWN0KGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gcG9zdHByb2R1Y3QoKX0+4LmA4Lie4Li04LmI4Lih4Liq4Li04LiZ4LiE4LmJ4LiyPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvRm9ybUl0ZW0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5zZXJ0UHJvZHVjdDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==