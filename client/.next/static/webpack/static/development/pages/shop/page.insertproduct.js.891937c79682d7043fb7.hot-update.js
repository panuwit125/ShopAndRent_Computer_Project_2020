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
/* harmony import */ var file_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! file-loader */ "./node_modules/file-loader/dist/cjs.js");
/* harmony import */ var file_loader__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(file_loader__WEBPACK_IMPORTED_MODULE_11__);







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

    if (!nameProduct || !descriptionProduct || !priceProduct || !blandProduct || !image1Product) {
      alert('กรุณาใส่ข้อมูลหรือเลือกรูปภาพ');
    } else {
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
      lineNumber: 83,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "br",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "br-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 11
    }
  }, "Insert Product")), __jsx("div", {
    style: {
      padding: "50px 100px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
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
      lineNumber: 90,
      columnNumber: 9
    }
  }), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a.TextArea, {
    rows: "5",
    className: "ip-iuput",
    value: descriptionProduct,
    onChange: function onChange(e) {
      return setDescriptionProduct(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
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
      lineNumber: 101,
      columnNumber: 9
    }
  }), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
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
      lineNumber: 106,
      columnNumber: 9
    }
  }), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
    name: "select",
    label: "Select",
    hasFeedback: true,
    rules: [{
      required: true,
      message: 'Please select your country!'
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 9
    }
  }, __jsx(Select, {
    placeholder: "Please select a country",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx(Option, {
    value: "china",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, "China"), __jsx(Option, {
    value: "usa",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, "U.S.A"))), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }
  }, "\u0E23\u0E39\u0E1B\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, __jsx("input", {
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
      lineNumber: 123,
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
      lineNumber: 128,
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
      lineNumber: 133,
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
      lineNumber: 138,
      columnNumber: 9
    }
  })), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: function onClick() {
      return postproduct();
    },
    type: "primary",
    style: {
      marginTop: "20px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL3BhZ2UuaW5zZXJ0cHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJGb3JtSXRlbSIsIkl0ZW0iLCJJbnNlcnRQcm9kdWN0IiwidXNlU3RhdGUiLCJuYW1lUHJvZHVjdCIsInNldE5hbWVQcm9kdWN0IiwiZGVzY3JpcHRpb25Qcm9kdWN0Iiwic2V0RGVzY3JpcHRpb25Qcm9kdWN0IiwicHJpY2VQcm9kdWN0Iiwic2V0UHJpY2VQcm9kdWN0IiwiYmxhbmRQcm9kdWN0Iiwic2V0QmxhbmRQcm9kdWN0IiwiaW1hZ2UxUHJvZHVjdCIsInNldElhbWdlMVByb2R1Y3QiLCJ1cmwxIiwic2V0MVVybCIsImltYWdlMlByb2R1Y3QiLCJzZXRJYW1nZTJQcm9kdWN0IiwidXJsMiIsInNldDJVcmwiLCJpbWFnZTNQcm9kdWN0Iiwic2V0SWFtZ2UzUHJvZHVjdCIsInVybDMiLCJzZXQzVXJsIiwiaW1hZ2U0UHJvZHVjdCIsInNldElhbWdlNFByb2R1Y3QiLCJ1cmw0Iiwic2V0NFVybCIsInVzZUVmZmVjdCIsInRva2VuIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZV9wcm9kdWN0IiwiZGVzY3JpcHRpb25fcHJvZHVjdCIsInByaWNlX3Byb2R1Y3QiLCJibGFuZF9wcm9kdWN0IiwiaW1hZ2VfcHJvZHVjdCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZWZldGNoIiwiaW1hZ2UiLCJzZXR1cmwiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVybCIsInBvc3Rwcm9kdWN0IiwiYWxlcnQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY29sb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJmaWxlcyIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCQSxDQWxDQSxFQXdEQTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1KLFdBQVcsRUFBakI7QUFBQSxLQUFqQjtBQUFzQyxRQUFJLEVBQUMsU0FBM0M7QUFBcUQsU0FBSyxFQUFFO0FBQUNXLGVBQVMsRUFBQztBQUFYLEtBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEVBeERBLENBSkYsQ0FERixDQURGO0FBbUVEOztHQTNJUWhFLGE7O0tBQUFBLGE7QUE2SU1BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzaG9wXFxwYWdlLmluc2VydHByb2R1Y3QuanMuODkxOTM3Yzc5NjgyZDcwNDNmYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQsIFVwbG9hZCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IFVwbG9hZE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbXBvbmVudC5oZWFkZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBuYW1lIH0gZnJvbSBcImZpbGUtbG9hZGVyXCI7XHJcblxyXG5mdW5jdGlvbiBJbnNlcnRQcm9kdWN0KCkge1xyXG4gIGNvbnN0IFtuYW1lUHJvZHVjdCwgc2V0TmFtZVByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uUHJvZHVjdCwgc2V0RGVzY3JpcHRpb25Qcm9kdWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZVByb2R1Y3QsIHNldFByaWNlUHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYmxhbmRQcm9kdWN0LCBzZXRCbGFuZFByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlMVByb2R1Y3QsIHNldElhbWdlMVByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VybDEsIHNldDFVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlMlByb2R1Y3QsIHNldElhbWdlMlByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VybDIsIHNldDJVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlM1Byb2R1Y3QsIHNldElhbWdlM1Byb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VybDMsIHNldDNVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlNFByb2R1Y3QsIHNldElhbWdlNFByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VybDQsIHNldDRVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdG9rZW4gPVxyXG4gICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpmYVdRaU9pSTFaak01T0RObU16aGhORE00TWpZNVpEQTJabUpoTXpVaUxDSnBZWFFpT2pFMU9UYzJNRFkzTlRaOS5KY2lFTTRNSkUzSDZ2R0RKeVFDb3VlZVdyUTIzd3ZVZXdBaEJlSHNzSUQ0XCI7XHJcbiAgICBpZiAodXJsMSkge1xyXG4gICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9pbnNlcnRwcm9kdWN0XCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIG5hbWVfcHJvZHVjdDogbmFtZVByb2R1Y3QsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbl9wcm9kdWN0OiBkZXNjcmlwdGlvblByb2R1Y3QsXHJcbiAgICAgICAgICBwcmljZV9wcm9kdWN0OiBwcmljZVByb2R1Y3QsXHJcbiAgICAgICAgICBibGFuZF9wcm9kdWN0OiBibGFuZFByb2R1Y3QsXHJcbiAgICAgICAgICBpbWFnZV9wcm9kdWN0OiB1cmwxLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhLmVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBzdWNjdXNzZnVsbFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH1cclxuICB9LCBbdXJsMV0pO1xyXG5cclxuICBjb25zdCBpbWFnZWZldGNoID0gKGltYWdlLHNldHVybCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGltYWdlKTtcclxuICAgIGRhdGEuYXBwZW5kKFwidXBsb2FkX3ByZXNldFwiLCBcInNob3BhbmRyZW50XCIpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJjbG91ZF9uYW1lXCIsIFwicGFudXdpdGRldlwiKTtcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9hcGkuY2xvdWRpbmFyeS5jb20vdjFfMS9wYW51d2l0ZGV2L2ltYWdlL3VwbG9hZFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIGJvZHk6IGRhdGEsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHNldHVybChkYXRhLnVybCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwb3N0cHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGltYWdlMVByb2R1Y3QpXHJcbiAgICBpZiAoICFuYW1lUHJvZHVjdCB8fCAhZGVzY3JpcHRpb25Qcm9kdWN0IHx8ICFwcmljZVByb2R1Y3QgfHwgIWJsYW5kUHJvZHVjdCB8fCAhaW1hZ2UxUHJvZHVjdCkge1xyXG4gICAgICBhbGVydCgn4LiB4Lij4Li44LiT4Liy4LmD4Liq4LmI4LiC4LmJ4Lit4Lih4Li54Lil4Lir4Lij4Li34Lit4LmA4Lil4Li34Lit4LiB4Lij4Li54Lib4Lig4Liy4LieJylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGltYWdlZmV0Y2goaW1hZ2UxUHJvZHVjdCxzZXQxVXJsKVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUl0ZW0gc3R5bGU9e3sgbWFyZ2luOiBcIjBweFwiIH19PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJici1oZWFkZXJcIj5cclxuICAgICAgICAgIDxoMT5JbnNlcnQgUHJvZHVjdDwvaDE+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT17e3BhZGRpbmc6XCI1MHB4IDEwMHB4XCJ9fT5cclxuICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT7guIrguLfguYjguK3guKrguLTguJnguITguYnguLI8L2gyPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgIGNsYXNzTmFtZT1cImlwLWl1cHV0XCJcclxuICAgICAgICAgIHZhbHVlPXtuYW1lUHJvZHVjdH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZVByb2R1Y3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiU4Liq4Li04LiZ4LiE4LmJ4LiyPC9oMj5cclxuICAgICAgICA8SW5wdXQuVGV4dEFyZWEgcm93cz1cIjVcIiAgY2xhc3NOYW1lPVwiaXAtaXVwdXRcIlxyXG4gICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9uUHJvZHVjdH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RGVzY3JpcHRpb25Qcm9kdWN0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PuC4o+C4suC4hOC4suC4quC4tOC4meC4hOC5ieC4sjwvaDI+XHJcbiAgICAgICAgPElucHV0IGNsYXNzTmFtZT1cImlwLWl1cHV0XCJcclxuICAgICAgICAgIHZhbHVlPXtwcmljZVByb2R1Y3R9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlUHJvZHVjdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT7guYHguJrguKPguJnguYzguKrguLTguJnguITguYnguLI8L2gyPlxyXG4gICAgICAgIDxJbnB1dCBjbGFzc05hbWU9XCJpcC1pdXB1dFwiXHJcbiAgICAgICAgICB2YWx1ZT17YmxhbmRQcm9kdWN0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCbGFuZFByb2R1Y3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvcm0uSXRlbVxyXG4gICAgICAgIG5hbWU9XCJzZWxlY3RcIlxyXG4gICAgICAgIGxhYmVsPVwiU2VsZWN0XCJcclxuICAgICAgICBoYXNGZWVkYmFja1xyXG4gICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBzZWxlY3QgeW91ciBjb3VudHJ5IScgfV19XHJcbiAgICAgID5cclxuICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiUGxlYXNlIHNlbGVjdCBhIGNvdW50cnlcIj5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJjaGluYVwiPkNoaW5hPC9PcHRpb24+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwidXNhXCI+VS5TLkE8L09wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+4Lij4Li54Lib4Liq4Li04LiZ4LiE4LmJ4LiyPC9oMj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SWFtZ2UxUHJvZHVjdChlLnRhcmdldC5maWxlc1swXSl9XHJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SWFtZ2UyUHJvZHVjdChlLnRhcmdldC5maWxlc1swXSl9XHJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SWFtZ2UzUHJvZHVjdChlLnRhcmdldC5maWxlc1swXSl9XHJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SWFtZ2U0UHJvZHVjdChlLnRhcmdldC5maWxlc1swXSl9XHJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHBvc3Rwcm9kdWN0KCkgfXR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3ttYXJnaW5Ub3A6XCIyMHB4XCJ9fT7guYDguJ7guLTguYjguKHguKrguLTguJnguITguYnguLI8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Gb3JtSXRlbT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnNlcnRQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9