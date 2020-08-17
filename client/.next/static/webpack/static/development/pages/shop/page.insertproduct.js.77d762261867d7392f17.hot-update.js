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
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/select/style */ "./node_modules/antd/lib/select/style/index.js");
/* harmony import */ var antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/select */ "./node_modules/antd/lib/select/index.js");
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_component_header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/component.header */ "./pages/components/component.header.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var file_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! file-loader */ "./node_modules/file-loader/dist/cjs.js");
/* harmony import */ var file_loader__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(file_loader__WEBPACK_IMPORTED_MODULE_13__);









var _jsxFileName = "D:\\GitHub\\shopandrent-computer\\pages\\shop\\page.insertproduct.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement;

var FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a.Item;
var Option = antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a.Option;






function InsertProduct() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      nameProduct = _useState[0],
      setNameProduct = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      descriptionProduct = _useState2[0],
      setDescriptionProduct = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      priceProduct = _useState3[0],
      setPriceProduct = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      blandProduct = _useState4[0],
      setBlandProduct = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      image1Product = _useState5[0],
      setIamge1Product = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      url1 = _useState6[0],
      set1Url = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      image2Product = _useState7[0],
      setIamge2Product = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      url2 = _useState8[0],
      set2Url = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      image3Product = _useState9[0],
      setIamge3Product = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      url3 = _useState10[0],
      set3Url = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      image4Product = _useState11[0],
      setIamge4Product = _useState11[1];

  var _useState12 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      url4 = _useState12[0],
      set4Url = _useState12[1];

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
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
      lineNumber: 84,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "br",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "br-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 11
    }
  }, "Insert Product")), __jsx("div", {
    style: {
      padding: "50px 100px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
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
      lineNumber: 91,
      columnNumber: 9
    }
  }), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
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
      lineNumber: 97,
      columnNumber: 9
    }
  }), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
      lineNumber: 102,
      columnNumber: 9
    }
  }), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
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
      lineNumber: 107,
      columnNumber: 9
    }
  }), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
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
      lineNumber: 111,
      columnNumber: 9
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    placeholder: "Please select a country",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }
  }, __jsx(Option, {
    value: "china",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 11
    }
  }, "China"), __jsx(Option, {
    value: "usa",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, "U.S.A"))), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }
  }, "\u0E23\u0E39\u0E1B\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
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
      lineNumber: 124,
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
      lineNumber: 129,
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
      lineNumber: 134,
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
      lineNumber: 139,
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
      lineNumber: 145,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL3BhZ2UuaW5zZXJ0cHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJGb3JtSXRlbSIsIkl0ZW0iLCJPcHRpb24iLCJJbnNlcnRQcm9kdWN0IiwidXNlU3RhdGUiLCJuYW1lUHJvZHVjdCIsInNldE5hbWVQcm9kdWN0IiwiZGVzY3JpcHRpb25Qcm9kdWN0Iiwic2V0RGVzY3JpcHRpb25Qcm9kdWN0IiwicHJpY2VQcm9kdWN0Iiwic2V0UHJpY2VQcm9kdWN0IiwiYmxhbmRQcm9kdWN0Iiwic2V0QmxhbmRQcm9kdWN0IiwiaW1hZ2UxUHJvZHVjdCIsInNldElhbWdlMVByb2R1Y3QiLCJ1cmwxIiwic2V0MVVybCIsImltYWdlMlByb2R1Y3QiLCJzZXRJYW1nZTJQcm9kdWN0IiwidXJsMiIsInNldDJVcmwiLCJpbWFnZTNQcm9kdWN0Iiwic2V0SWFtZ2UzUHJvZHVjdCIsInVybDMiLCJzZXQzVXJsIiwiaW1hZ2U0UHJvZHVjdCIsInNldElhbWdlNFByb2R1Y3QiLCJ1cmw0Iiwic2V0NFVybCIsInVzZUVmZmVjdCIsInRva2VuIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZV9wcm9kdWN0IiwiZGVzY3JpcHRpb25fcHJvZHVjdCIsInByaWNlX3Byb2R1Y3QiLCJibGFuZF9wcm9kdWN0IiwiaW1hZ2VfcHJvZHVjdCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZWZldGNoIiwiaW1hZ2UiLCJzZXR1cmwiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVybCIsInBvc3Rwcm9kdWN0IiwiYWxlcnQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY29sb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJmaWxlcyIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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RTtBQUFFTixXQUFLLEVBQUU7QUFBVCxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkEsQ0FsQ0EsRUF3REE7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNSixXQUFXLEVBQWpCO0FBQUEsS0FBakI7QUFBc0MsUUFBSSxFQUFDLFNBQTNDO0FBQXFELFNBQUssRUFBRTtBQUFDVyxlQUFTLEVBQUM7QUFBWCxLQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBFQXhEQSxDQUpGLENBREYsQ0FERjtBQW1FRDs7R0EzSVFoRSxhOztLQUFBQSxhO0FBNklNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2hvcFxccGFnZS5pbnNlcnRwcm9kdWN0LmpzLjc3ZDc2MjI2MTg2N2Q3MzkyZjE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBVcGxvYWQsU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuY29uc3QgRm9ybUl0ZW0gPSBGb3JtLkl0ZW07XHJcbmNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tcG9uZW50LmhlYWRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IG5hbWUgfSBmcm9tIFwiZmlsZS1sb2FkZXJcIjtcclxuXHJcbmZ1bmN0aW9uIEluc2VydFByb2R1Y3QoKSB7XHJcbiAgY29uc3QgW25hbWVQcm9kdWN0LCBzZXROYW1lUHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZGVzY3JpcHRpb25Qcm9kdWN0LCBzZXREZXNjcmlwdGlvblByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3ByaWNlUHJvZHVjdCwgc2V0UHJpY2VQcm9kdWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtibGFuZFByb2R1Y3QsIHNldEJsYW5kUHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2UxUHJvZHVjdCwgc2V0SWFtZ2UxUHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXJsMSwgc2V0MVVybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2UyUHJvZHVjdCwgc2V0SWFtZ2UyUHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXJsMiwgc2V0MlVybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2UzUHJvZHVjdCwgc2V0SWFtZ2UzUHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXJsMywgc2V0M1VybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbaW1hZ2U0UHJvZHVjdCwgc2V0SWFtZ2U0UHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbdXJsNCwgc2V0NFVybF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCB0b2tlbiA9XHJcbiAgICAgIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SmZhV1FpT2lJMVpqTTVPRE5tTXpoaE5ETTRNalk1WkRBMlptSmhNelVpTENKcFlYUWlPakUxT1RjMk1EWTNOVFo5LkpjaUVNNE1KRTNINnZHREp5UUNvdWVlV3JRMjN3dlVld0FoQmVIc3NJRDRcIjtcclxuICAgIGlmICh1cmwxKSB7XHJcbiAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2luc2VydHByb2R1Y3RcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgbmFtZV9wcm9kdWN0OiBuYW1lUHJvZHVjdCxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uX3Byb2R1Y3Q6IGRlc2NyaXB0aW9uUHJvZHVjdCxcclxuICAgICAgICAgIHByaWNlX3Byb2R1Y3Q6IHByaWNlUHJvZHVjdCxcclxuICAgICAgICAgIGJsYW5kX3Byb2R1Y3Q6IGJsYW5kUHJvZHVjdCxcclxuICAgICAgICAgIGltYWdlX3Byb2R1Y3Q6IHVybDEsXHJcbiAgICAgICAgfSksXHJcbiAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGRhdGEuZXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlIHN1Y2N1c3NmdWxsXCIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgfVxyXG4gIH0sIFt1cmwxXSk7XHJcblxyXG4gIGNvbnN0IGltYWdlZmV0Y2ggPSAoaW1hZ2Usc2V0dXJsKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBkYXRhLmFwcGVuZChcImZpbGVcIiwgaW1hZ2UpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJ1cGxvYWRfcHJlc2V0XCIsIFwic2hvcGFuZHJlbnRcIik7XHJcbiAgICBkYXRhLmFwcGVuZChcImNsb3VkX25hbWVcIiwgXCJwYW51d2l0ZGV2XCIpO1xyXG4gICAgZmV0Y2goXCJodHRwczovL2FwaS5jbG91ZGluYXJ5LmNvbS92MV8xL3BhbnV3aXRkZXYvaW1hZ2UvdXBsb2FkXCIsIHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgYm9keTogZGF0YSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgc2V0dXJsKGRhdGEudXJsKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHBvc3Rwcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaW1hZ2UxUHJvZHVjdClcclxuICAgIGlmICggIW5hbWVQcm9kdWN0IHx8ICFkZXNjcmlwdGlvblByb2R1Y3QgfHwgIXByaWNlUHJvZHVjdCB8fCAhYmxhbmRQcm9kdWN0IHx8ICFpbWFnZTFQcm9kdWN0KSB7XHJcbiAgICAgIGFsZXJ0KCfguIHguKPguLjguJPguLLguYPguKrguYjguILguYnguK3guKHguLnguKXguKvguKPguLfguK3guYDguKXguLfguK3guIHguKPguLnguJvguKDguLLguJ4nKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW1hZ2VmZXRjaChpbWFnZTFQcm9kdWN0LHNldDFVcmwpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtSXRlbSBzdHlsZT17eyBtYXJnaW46IFwiMHB4XCIgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGgxPkluc2VydCBQcm9kdWN0PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7cGFkZGluZzpcIjUwcHggMTAwcHhcIn19PlxyXG4gICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PuC4iuC4t+C5iOC4reC4quC4tOC4meC4hOC5ieC4sjwvaDI+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaXAtaXVwdXRcIlxyXG4gICAgICAgICAgdmFsdWU9e25hbWVQcm9kdWN0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lUHJvZHVjdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT7guKPguLLguKLguKXguLDguYDguK3guLXguKLguJTguKrguLTguJnguITguYnguLI8L2gyPlxyXG4gICAgICAgIDxJbnB1dC5UZXh0QXJlYSByb3dzPVwiNVwiICBjbGFzc05hbWU9XCJpcC1pdXB1dFwiXHJcbiAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb25Qcm9kdWN0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvblByb2R1Y3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+4Lij4Liy4LiE4Liy4Liq4Li04LiZ4LiE4LmJ4LiyPC9oMj5cclxuICAgICAgICA8SW5wdXQgY2xhc3NOYW1lPVwiaXAtaXVwdXRcIlxyXG4gICAgICAgICAgdmFsdWU9e3ByaWNlUHJvZHVjdH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJpY2VQcm9kdWN0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PuC5geC4muC4o+C4meC5jOC4quC4tOC4meC4hOC5ieC4sjwvaDI+XHJcbiAgICAgICAgPElucHV0IGNsYXNzTmFtZT1cImlwLWl1cHV0XCJcclxuICAgICAgICAgIHZhbHVlPXtibGFuZFByb2R1Y3R9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEJsYW5kUHJvZHVjdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgbmFtZT1cInNlbGVjdFwiXHJcbiAgICAgICAgbGFiZWw9XCJTZWxlY3RcIlxyXG4gICAgICAgIGhhc0ZlZWRiYWNrXHJcbiAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiAnUGxlYXNlIHNlbGVjdCB5b3VyIGNvdW50cnkhJyB9XX1cclxuICAgICAgPlxyXG4gICAgICAgIDxTZWxlY3QgcGxhY2Vob2xkZXI9XCJQbGVhc2Ugc2VsZWN0IGEgY291bnRyeVwiPlxyXG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImNoaW5hXCI+Q2hpbmE8L09wdGlvbj5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ1c2FcIj5VLlMuQTwvT3B0aW9uPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT7guKPguLnguJvguKrguLTguJnguITguYnguLI8L2gyPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJYW1nZTFQcm9kdWN0KGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJYW1nZTJQcm9kdWN0KGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJYW1nZTNQcm9kdWN0KGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJYW1nZTRQcm9kdWN0KGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gcG9zdHByb2R1Y3QoKSB9dHlwZT1cInByaW1hcnlcIiBzdHlsZT17e21hcmdpblRvcDpcIjIwcHhcIn19PuC5gOC4nuC4tOC5iOC4oeC4quC4tOC4meC4hOC5ieC4sjwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0Zvcm1JdGVtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluc2VydFByb2R1Y3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=