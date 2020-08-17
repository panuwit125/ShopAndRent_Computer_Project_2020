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
      alert("กรุณาใส่ข้อมูลหรือเลือกรูปภาพ");
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
      lineNumber: 90,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "br",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "br-header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 11
    }
  }, "Insert Product")), __jsx("div", {
    style: {
      padding: "50px 100px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }, __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 11
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
      lineNumber: 97,
      columnNumber: 11
    }
  }), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 11
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
      lineNumber: 103,
      columnNumber: 11
    }
  }), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
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
      lineNumber: 110,
      columnNumber: 11
    }
  }), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
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
      lineNumber: 116,
      columnNumber: 11
    }
  }), __jsx(antd_lib_form__WEBPACK_IMPORTED_MODULE_7___default.a.Item, {
    name: "select",
    label: "Select",
    hasFeedback: true,
    className: "ip-input",
    rules: [{
      required: true,
      message: "Please select your country!"
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx(antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default.a, {
    placeholder: "Please select a country",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx(Option, {
    value: "china",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, "China"), __jsx(Option, {
    value: "usa",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, "U.S.A"))), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 11
    }
  }, "\u0E23\u0E39\u0E1B\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
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
      lineNumber: 135,
      columnNumber: 13
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
      lineNumber: 140,
      columnNumber: 13
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
      lineNumber: 145,
      columnNumber: 13
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
      lineNumber: 150,
      columnNumber: 13
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
      lineNumber: 156,
      columnNumber: 11
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL3BhZ2UuaW5zZXJ0cHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJGb3JtSXRlbSIsIkl0ZW0iLCJPcHRpb24iLCJJbnNlcnRQcm9kdWN0IiwidXNlU3RhdGUiLCJuYW1lUHJvZHVjdCIsInNldE5hbWVQcm9kdWN0IiwiZGVzY3JpcHRpb25Qcm9kdWN0Iiwic2V0RGVzY3JpcHRpb25Qcm9kdWN0IiwicHJpY2VQcm9kdWN0Iiwic2V0UHJpY2VQcm9kdWN0IiwiYmxhbmRQcm9kdWN0Iiwic2V0QmxhbmRQcm9kdWN0IiwiaW1hZ2UxUHJvZHVjdCIsInNldElhbWdlMVByb2R1Y3QiLCJ1cmwxIiwic2V0MVVybCIsImltYWdlMlByb2R1Y3QiLCJzZXRJYW1nZTJQcm9kdWN0IiwidXJsMiIsInNldDJVcmwiLCJpbWFnZTNQcm9kdWN0Iiwic2V0SWFtZ2UzUHJvZHVjdCIsInVybDMiLCJzZXQzVXJsIiwiaW1hZ2U0UHJvZHVjdCIsInNldElhbWdlNFByb2R1Y3QiLCJ1cmw0Iiwic2V0NFVybCIsInVzZUVmZmVjdCIsInRva2VuIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZV9wcm9kdWN0IiwiZGVzY3JpcHRpb25fcHJvZHVjdCIsInByaWNlX3Byb2R1Y3QiLCJibGFuZF9wcm9kdWN0IiwiaW1hZ2VfcHJvZHVjdCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZWZldGNoIiwiaW1hZ2UiLCJzZXR1cmwiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVybCIsInBvc3Rwcm9kdWN0IiwiYWxlcnQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY29sb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJyZXF1aXJlZCIsIm1lc3NhZ2UiLCJmaWxlcyIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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QUssRUFBRTtBQUFFTixXQUFLLEVBQUU7QUFBVCxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkYsQ0F2Q0YsRUE2REU7QUFDRSxXQUFPLEVBQUU7QUFBQSxhQUFNSixXQUFXLEVBQWpCO0FBQUEsS0FEWDtBQUVFLFFBQUksRUFBQyxTQUZQO0FBR0UsU0FBSyxFQUFFO0FBQUVXLGVBQVMsRUFBRTtBQUFiLEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRUE3REYsQ0FKRixDQURGLENBREY7QUE4RUQ7O0dBNUpRaEUsYTs7S0FBQUEsYTtBQThKTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNob3BcXHBhZ2UuaW5zZXJ0cHJvZHVjdC5qcy5mNmY3MWJlYjcwNzE1ZTQ1NGQ0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgVXBsb2FkLCBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5jb25zdCBGb3JtSXRlbSA9IEZvcm0uSXRlbTtcclxuY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21wb25lbnQuaGVhZGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgbmFtZSB9IGZyb20gXCJmaWxlLWxvYWRlclwiO1xyXG5cclxuZnVuY3Rpb24gSW5zZXJ0UHJvZHVjdCgpIHtcclxuICBjb25zdCBbbmFtZVByb2R1Y3QsIHNldE5hbWVQcm9kdWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvblByb2R1Y3QsIHNldERlc2NyaXB0aW9uUHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcHJpY2VQcm9kdWN0LCBzZXRQcmljZVByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2JsYW5kUHJvZHVjdCwgc2V0QmxhbmRQcm9kdWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbWFnZTFQcm9kdWN0LCBzZXRJYW1nZTFQcm9kdWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1cmwxLCBzZXQxVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbWFnZTJQcm9kdWN0LCBzZXRJYW1nZTJQcm9kdWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1cmwyLCBzZXQyVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbWFnZTNQcm9kdWN0LCBzZXRJYW1nZTNQcm9kdWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1cmwzLCBzZXQzVXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtpbWFnZTRQcm9kdWN0LCBzZXRJYW1nZTRQcm9kdWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFt1cmw0LCBzZXQ0VXJsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IHRva2VuID1cclxuICAgICAgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKZmFXUWlPaUkxWmpNNU9ETm1NemhoTkRNNE1qWTVaREEyWm1KaE16VWlMQ0pwWVhRaU9qRTFPVGMyTURZM05UWjkuSmNpRU00TUpFM0g2dkdESnlRQ291ZWVXclEyM3d2VWV3QWhCZUhzc0lENFwiO1xyXG4gICAgaWYgKHVybDEpIHtcclxuICAgICAgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvaW5zZXJ0cHJvZHVjdFwiLCB7XHJcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IFwiQmVhcmVyIFwiICsgdG9rZW4sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICBuYW1lX3Byb2R1Y3Q6IG5hbWVQcm9kdWN0LFxyXG4gICAgICAgICAgZGVzY3JpcHRpb25fcHJvZHVjdDogZGVzY3JpcHRpb25Qcm9kdWN0LFxyXG4gICAgICAgICAgcHJpY2VfcHJvZHVjdDogcHJpY2VQcm9kdWN0LFxyXG4gICAgICAgICAgYmxhbmRfcHJvZHVjdDogYmxhbmRQcm9kdWN0LFxyXG4gICAgICAgICAgaW1hZ2VfcHJvZHVjdDogdXJsMSxcclxuICAgICAgICB9KSxcclxuICAgICAgfSlcclxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICBpZiAoZGF0YS5lcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGUgc3VjY3Vzc2Z1bGxcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAgICB9XHJcbiAgfSwgW3VybDFdKTtcclxuXHJcbiAgY29uc3QgaW1hZ2VmZXRjaCA9IChpbWFnZSwgc2V0dXJsKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICBkYXRhLmFwcGVuZChcImZpbGVcIiwgaW1hZ2UpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJ1cGxvYWRfcHJlc2V0XCIsIFwic2hvcGFuZHJlbnRcIik7XHJcbiAgICBkYXRhLmFwcGVuZChcImNsb3VkX25hbWVcIiwgXCJwYW51d2l0ZGV2XCIpO1xyXG4gICAgZmV0Y2goXCJodHRwczovL2FwaS5jbG91ZGluYXJ5LmNvbS92MV8xL3BhbnV3aXRkZXYvaW1hZ2UvdXBsb2FkXCIsIHtcclxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgICAgYm9keTogZGF0YSxcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgc2V0dXJsKGRhdGEudXJsKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBwb3N0cHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGltYWdlMVByb2R1Y3QpO1xyXG4gICAgaWYgKFxyXG4gICAgICAhbmFtZVByb2R1Y3QgfHxcclxuICAgICAgIWRlc2NyaXB0aW9uUHJvZHVjdCB8fFxyXG4gICAgICAhcHJpY2VQcm9kdWN0IHx8XHJcbiAgICAgICFibGFuZFByb2R1Y3QgfHxcclxuICAgICAgIWltYWdlMVByb2R1Y3RcclxuICAgICkge1xyXG4gICAgICBhbGVydChcIuC4geC4o+C4uOC4k+C4suC5g+C4quC5iOC4guC5ieC4reC4oeC4ueC4peC4q+C4o+C4t+C4reC5gOC4peC4t+C4reC4geC4o+C4ueC4m+C4oOC4suC4nlwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGltYWdlZmV0Y2goaW1hZ2UxUHJvZHVjdCwgc2V0MVVybCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtSXRlbSBzdHlsZT17eyBtYXJnaW46IFwiMHB4XCIgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyLWhlYWRlclwiPlxyXG4gICAgICAgICAgPGgxPkluc2VydCBQcm9kdWN0PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiNTBweCAxMDBweFwiIH19PlxyXG4gICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+4LiK4Li34LmI4Lit4Liq4Li04LiZ4LiE4LmJ4LiyPC9oMj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpcC1pdXB1dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtuYW1lUHJvZHVjdH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lUHJvZHVjdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+4Lij4Liy4Lii4Lil4Liw4LmA4Lit4Li14Lii4LiU4Liq4Li04LiZ4LiE4LmJ4LiyPC9oMj5cclxuICAgICAgICAgIDxJbnB1dC5UZXh0QXJlYVxyXG4gICAgICAgICAgICByb3dzPVwiNVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlwLWl1cHV0XCJcclxuICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9uUHJvZHVjdH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvblByb2R1Y3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PuC4o+C4suC4hOC4suC4quC4tOC4meC4hOC5ieC4sjwvaDI+XHJcbiAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXAtaXVwdXRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17cHJpY2VQcm9kdWN0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlUHJvZHVjdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+4LmB4Lia4Lij4LiZ4LmM4Liq4Li04LiZ4LiE4LmJ4LiyPC9oMj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpcC1pdXB1dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtibGFuZFByb2R1Y3R9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QmxhbmRQcm9kdWN0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICAgIG5hbWU9XCJzZWxlY3RcIlxyXG4gICAgICAgICAgICBsYWJlbD1cIlNlbGVjdFwiXHJcbiAgICAgICAgICAgIGhhc0ZlZWRiYWNrXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlwLWlucHV0XCJcclxuICAgICAgICAgICAgcnVsZXM9e1t7IHJlcXVpcmVkOiB0cnVlLCBtZXNzYWdlOiBcIlBsZWFzZSBzZWxlY3QgeW91ciBjb3VudHJ5IVwiIH1dfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8U2VsZWN0IHBsYWNlaG9sZGVyPVwiUGxlYXNlIHNlbGVjdCBhIGNvdW50cnlcIj5cclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiY2hpbmFcIj5DaGluYTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ1c2FcIj5VLlMuQTwvT3B0aW9uPlxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+4Lij4Li54Lib4Liq4Li04LiZ4LiE4LmJ4LiyPC9oMj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElhbWdlMVByb2R1Y3QoZS50YXJnZXQuZmlsZXNbMF0pfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SWFtZ2UyUHJvZHVjdChlLnRhcmdldC5maWxlc1swXSl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJYW1nZTNQcm9kdWN0KGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElhbWdlNFByb2R1Y3QoZS50YXJnZXQuZmlsZXNbMF0pfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwb3N0cHJvZHVjdCgpfVxyXG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIyMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg4LmA4Lie4Li04LmI4Lih4Liq4Li04LiZ4LiE4LmJ4LiyXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0Zvcm1JdGVtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluc2VydFByb2R1Y3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=