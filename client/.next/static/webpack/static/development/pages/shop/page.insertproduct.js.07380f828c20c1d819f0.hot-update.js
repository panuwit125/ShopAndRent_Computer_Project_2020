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
    var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjM5ODNmMzhhNDM4MjY5ZDA2ZmJhMzUiLCJpYXQiOjE1OTc2Mzg2MTd9.JEeHZBwagb1jltAu1_--YKfjQDWOqnQNMIiDypfbG-Y";

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
  }), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "\u0E23\u0E39\u0E1B\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
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
      lineNumber: 123,
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
      lineNumber: 128,
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
      lineNumber: 133,
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
      lineNumber: 138,
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
      lineNumber: 144,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL3BhZ2UuaW5zZXJ0cHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJGb3JtSXRlbSIsIkl0ZW0iLCJPcHRpb24iLCJJbnNlcnRQcm9kdWN0IiwidXNlU3RhdGUiLCJuYW1lUHJvZHVjdCIsInNldE5hbWVQcm9kdWN0IiwiZGVzY3JpcHRpb25Qcm9kdWN0Iiwic2V0RGVzY3JpcHRpb25Qcm9kdWN0IiwicHJpY2VQcm9kdWN0Iiwic2V0UHJpY2VQcm9kdWN0IiwiYmxhbmRQcm9kdWN0Iiwic2V0QmxhbmRQcm9kdWN0IiwiaW1hZ2UxUHJvZHVjdCIsInNldElhbWdlMVByb2R1Y3QiLCJ1cmwxIiwic2V0MVVybCIsImltYWdlMlByb2R1Y3QiLCJzZXRJYW1nZTJQcm9kdWN0IiwidXJsMiIsInNldDJVcmwiLCJpbWFnZTNQcm9kdWN0Iiwic2V0SWFtZ2UzUHJvZHVjdCIsInVybDMiLCJzZXQzVXJsIiwiaW1hZ2U0UHJvZHVjdCIsInNldElhbWdlNFByb2R1Y3QiLCJ1cmw0Iiwic2V0NFVybCIsInVzZUVmZmVjdCIsInRva2VuIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZV9wcm9kdWN0IiwiZGVzY3JpcHRpb25fcHJvZHVjdCIsInByaWNlX3Byb2R1Y3QiLCJibGFuZF9wcm9kdWN0IiwiaW1hZ2VfcHJvZHVjdCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZWZldGNoIiwiaW1hZ2UiLCJzZXR1cmwiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVybCIsInBvc3Rwcm9kdWN0IiwiYWxlcnQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiY29sb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmaWxlcyIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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dkI7QUFBQSxLQUZaO0FBR0UsU0FBSyxFQUFFO0FBQUVKLFdBQUssRUFBRTtBQUFULEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLEVBV0U7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFlBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLGFBQU92QyxnQkFBZ0IsQ0FBQ3VDLENBQUMsQ0FBQ0MsTUFBRixDQUFTRSxLQUFULENBQWUsQ0FBZixDQUFELENBQXZCO0FBQUEsS0FGWjtBQUdFLFNBQUssRUFBRTtBQUFFSixXQUFLLEVBQUU7QUFBVCxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixFQWdCRTtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsWUFBUSxFQUFFLGtCQUFDQyxDQUFEO0FBQUEsYUFBT25DLGdCQUFnQixDQUFDbUMsQ0FBQyxDQUFDQyxNQUFGLENBQVNFLEtBQVQsQ0FBZSxDQUFmLENBQUQsQ0FBdkI7QUFBQSxLQUZaO0FBR0UsU0FBSyxFQUFFO0FBQUVKLFdBQUssRUFBRTtBQUFULEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhCRixDQTNCRixFQWlERTtBQUNFLFdBQU8sRUFBRTtBQUFBLGFBQU1KLFdBQVcsRUFBakI7QUFBQSxLQURYO0FBRUUsUUFBSSxFQUFDLFNBRlA7QUFHRSxTQUFLLEVBQUU7QUFBRVMsZUFBUyxFQUFFO0FBQWIsS0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBFQWpERixDQUpGLENBREYsQ0FERjtBQWtFRDs7R0FoSlE5RCxhOztLQUFBQSxhO0FBa0pNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc2hvcFxccGFnZS5pbnNlcnRwcm9kdWN0LmpzLjA3MzgwZjgyOGMyMGMxZDgxOWYwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LCBVcGxvYWQsIFNlbGVjdCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IFVwbG9hZE91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmNvbnN0IEZvcm1JdGVtID0gRm9ybS5JdGVtO1xyXG5jb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2NvbXBvbmVudC5oZWFkZXJcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBuYW1lIH0gZnJvbSBcImZpbGUtbG9hZGVyXCI7XHJcblxyXG5mdW5jdGlvbiBJbnNlcnRQcm9kdWN0KCkge1xyXG4gIGNvbnN0IFtuYW1lUHJvZHVjdCwgc2V0TmFtZVByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uUHJvZHVjdCwgc2V0RGVzY3JpcHRpb25Qcm9kdWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZVByb2R1Y3QsIHNldFByaWNlUHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYmxhbmRQcm9kdWN0LCBzZXRCbGFuZFByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlMVByb2R1Y3QsIHNldElhbWdlMVByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VybDEsIHNldDFVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlMlByb2R1Y3QsIHNldElhbWdlMlByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VybDIsIHNldDJVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlM1Byb2R1Y3QsIHNldElhbWdlM1Byb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VybDMsIHNldDNVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlNFByb2R1Y3QsIHNldElhbWdlNFByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VybDQsIHNldDRVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdG9rZW4gPVxyXG4gICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpmYVdRaU9pSTFaak01T0RObU16aGhORE00TWpZNVpEQTJabUpoTXpVaUxDSnBZWFFpT2pFMU9UYzJNemcyTVRkOS5KRWVIWkJ3YWdiMWpsdEF1MV8tLVlLZmpRRFdPcW5RTk1JaUR5cGZiRy1ZXCI7XHJcbiAgICBpZiAodXJsMSkge1xyXG4gICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9pbnNlcnRwcm9kdWN0XCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIG5hbWVfcHJvZHVjdDogbmFtZVByb2R1Y3QsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbl9wcm9kdWN0OiBkZXNjcmlwdGlvblByb2R1Y3QsXHJcbiAgICAgICAgICBwcmljZV9wcm9kdWN0OiBwcmljZVByb2R1Y3QsXHJcbiAgICAgICAgICBibGFuZF9wcm9kdWN0OiBibGFuZFByb2R1Y3QsXHJcbiAgICAgICAgICBpbWFnZV9wcm9kdWN0OiB1cmwxLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhLmVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBzdWNjdXNzZnVsbFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH1cclxuICB9LCBbdXJsMV0pO1xyXG5cclxuICBjb25zdCBpbWFnZWZldGNoID0gKGltYWdlLCBzZXR1cmwpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKTtcclxuICAgIGRhdGEuYXBwZW5kKFwiZmlsZVwiLCBpbWFnZSk7XHJcbiAgICBkYXRhLmFwcGVuZChcInVwbG9hZF9wcmVzZXRcIiwgXCJzaG9wYW5kcmVudFwiKTtcclxuICAgIGRhdGEuYXBwZW5kKFwiY2xvdWRfbmFtZVwiLCBcInBhbnV3aXRkZXZcIik7XHJcbiAgICBmZXRjaChcImh0dHBzOi8vYXBpLmNsb3VkaW5hcnkuY29tL3YxXzEvcGFudXdpdGRldi9pbWFnZS91cGxvYWRcIiwge1xyXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICBib2R5OiBkYXRhLFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBzZXR1cmwoZGF0YS51cmwpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHBvc3Rwcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coaW1hZ2UxUHJvZHVjdCk7XHJcbiAgICBpZiAoXHJcbiAgICAgICFuYW1lUHJvZHVjdCB8fFxyXG4gICAgICAhZGVzY3JpcHRpb25Qcm9kdWN0IHx8XHJcbiAgICAgICFwcmljZVByb2R1Y3QgfHxcclxuICAgICAgIWJsYW5kUHJvZHVjdCB8fFxyXG4gICAgICAhaW1hZ2UxUHJvZHVjdFxyXG4gICAgKSB7XHJcbiAgICAgIGFsZXJ0KFwi4LiB4Lij4Li44LiT4Liy4LmD4Liq4LmI4LiC4LmJ4Lit4Lih4Li54Lil4Lir4Lij4Li34Lit4LmA4Lil4Li34Lit4LiB4Lij4Li54Lib4Lig4Liy4LieXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW1hZ2VmZXRjaChpbWFnZTFQcm9kdWN0LCBzZXQxVXJsKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZvcm1JdGVtIHN0eWxlPXt7IG1hcmdpbjogXCIwcHhcIiB9fT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJiclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnItaGVhZGVyXCI+XHJcbiAgICAgICAgICA8aDE+SW5zZXJ0IFByb2R1Y3Q8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCI1MHB4IDEwMHB4XCIgfX0+XHJcbiAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT7guIrguLfguYjguK3guKrguLTguJnguITguYnguLI8L2gyPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlwLWl1cHV0XCJcclxuICAgICAgICAgICAgdmFsdWU9e25hbWVQcm9kdWN0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWVQcm9kdWN0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT7guKPguLLguKLguKXguLDguYDguK3guLXguKLguJTguKrguLTguJnguITguYnguLI8L2gyPlxyXG4gICAgICAgICAgPElucHV0LlRleHRBcmVhXHJcbiAgICAgICAgICAgIHJvd3M9XCI1XCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXAtaXVwdXRcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb25Qcm9kdWN0fVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uUHJvZHVjdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+4Lij4Liy4LiE4Liy4Liq4Li04LiZ4LiE4LmJ4LiyPC9oMj5cclxuICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJpcC1pdXB1dFwiXHJcbiAgICAgICAgICAgIHZhbHVlPXtwcmljZVByb2R1Y3R9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0UHJpY2VQcm9kdWN0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT7guYHguJrguKPguJnguYzguKrguLTguJnguITguYnguLI8L2gyPlxyXG4gICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImlwLWl1cHV0XCJcclxuICAgICAgICAgICAgdmFsdWU9e2JsYW5kUHJvZHVjdH1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRCbGFuZFByb2R1Y3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PuC4o+C4ueC4m+C4quC4tOC4meC4hOC5ieC4sjwvaDI+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJYW1nZTFQcm9kdWN0KGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElhbWdlMlByb2R1Y3QoZS50YXJnZXQuZmlsZXNbMF0pfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SWFtZ2UzUHJvZHVjdChlLnRhcmdldC5maWxlc1swXSl9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJYW1nZTRQcm9kdWN0KGUudGFyZ2V0LmZpbGVzWzBdKX1cclxuICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcG9zdHByb2R1Y3QoKX1cclxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMjBweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIOC5gOC4nuC4tOC5iOC4oeC4quC4tOC4meC4hOC5ieC4slxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Gb3JtSXRlbT5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnNlcnRQcm9kdWN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9