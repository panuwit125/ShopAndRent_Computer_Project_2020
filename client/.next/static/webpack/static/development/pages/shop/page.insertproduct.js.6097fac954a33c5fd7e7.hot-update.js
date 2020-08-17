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
  })), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, "\u0E0A\u0E37\u0E48\u0E2D\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: nameProduct,
    onChange: function onChange(e) {
      return setNameProduct(e.target.value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }), __jsx("h2", {
    style: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 9
    }
  }, "\u0E23\u0E32\u0E22\u0E25\u0E30\u0E40\u0E2D\u0E35\u0E22\u0E14\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: descriptionProduct,
    onChange: function onChange(e) {
      return setDescriptionProduct(e.target.value);
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
      lineNumber: 95,
      columnNumber: 9
    }
  }, "\u0E23\u0E32\u0E04\u0E32\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: priceProduct,
    onChange: function onChange(e) {
      return setPriceProduct(e.target.value);
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
  }, "\u0E41\u0E1A\u0E23\u0E19\u0E4C\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx(antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default.a, {
    value: blandProduct,
    onChange: function onChange(e) {
      return setBlandProduct(e.target.value);
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
      lineNumber: 106,
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
      lineNumber: 111,
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
      lineNumber: 116,
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
      lineNumber: 121,
      columnNumber: 9
    }
  }), __jsx(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {
    onClick: function onClick() {
      return postproduct();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32")));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL3BhZ2UuaW5zZXJ0cHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJGb3JtSXRlbSIsIkl0ZW0iLCJJbnNlcnRQcm9kdWN0IiwidXNlU3RhdGUiLCJuYW1lUHJvZHVjdCIsInNldE5hbWVQcm9kdWN0IiwiZGVzY3JpcHRpb25Qcm9kdWN0Iiwic2V0RGVzY3JpcHRpb25Qcm9kdWN0IiwicHJpY2VQcm9kdWN0Iiwic2V0UHJpY2VQcm9kdWN0IiwiYmxhbmRQcm9kdWN0Iiwic2V0QmxhbmRQcm9kdWN0IiwiaW1hZ2UxUHJvZHVjdCIsInNldElhbWdlMVByb2R1Y3QiLCJ1cmwxIiwic2V0MVVybCIsImltYWdlMlByb2R1Y3QiLCJzZXRJYW1nZTJQcm9kdWN0IiwidXJsMiIsInNldDJVcmwiLCJpbWFnZTNQcm9kdWN0Iiwic2V0SWFtZ2UzUHJvZHVjdCIsInVybDMiLCJzZXQzVXJsIiwiaW1hZ2U0UHJvZHVjdCIsInNldElhbWdlNFByb2R1Y3QiLCJ1cmw0Iiwic2V0NFVybCIsInVzZUVmZmVjdCIsInRva2VuIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibmFtZV9wcm9kdWN0IiwiZGVzY3JpcHRpb25fcHJvZHVjdCIsInByaWNlX3Byb2R1Y3QiLCJibGFuZF9wcm9kdWN0IiwiaW1hZ2VfcHJvZHVjdCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZWZldGNoIiwiaW1hZ2UiLCJzZXR1cmwiLCJGb3JtRGF0YSIsImFwcGVuZCIsInVybCIsInBvc3Rwcm9kdWN0IiwibWFyZ2luIiwiY29sb3IiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJmaWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQSxJQUFNQSxRQUFRLEdBQUcscURB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QyxNQUFGLENBQVNFLEtBQVQsQ0FBZSxDQUFmLENBQUQsQ0FBdkI7QUFBQSxLQUZaO0FBR0UsU0FBSyxFQUFFO0FBQUVKLFdBQUssRUFBRTtBQUFULEtBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXhDRixFQTZDRTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1GLFdBQVcsRUFBakI7QUFBQSxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBFQTdDRixDQURGLENBREY7QUFtREQ7O0dBekhRckQsYTs7S0FBQUEsYTtBQTJITUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNob3BcXHBhZ2UuaW5zZXJ0cHJvZHVjdC5qcy42MDk3ZmFjOTU0YTMzYzVmZDdlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgVXBsb2FkIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgVXBsb2FkT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuY29uc3QgRm9ybUl0ZW0gPSBGb3JtLkl0ZW07XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCByb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY29tcG9uZW50LmhlYWRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5mdW5jdGlvbiBJbnNlcnRQcm9kdWN0KCkge1xyXG4gIGNvbnN0IFtuYW1lUHJvZHVjdCwgc2V0TmFtZVByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uUHJvZHVjdCwgc2V0RGVzY3JpcHRpb25Qcm9kdWN0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwcmljZVByb2R1Y3QsIHNldFByaWNlUHJvZHVjdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbYmxhbmRQcm9kdWN0LCBzZXRCbGFuZFByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlMVByb2R1Y3QsIHNldElhbWdlMVByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VybDEsIHNldDFVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlMlByb2R1Y3QsIHNldElhbWdlMlByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VybDIsIHNldDJVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlM1Byb2R1Y3QsIHNldElhbWdlM1Byb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VybDMsIHNldDNVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2ltYWdlNFByb2R1Y3QsIHNldElhbWdlNFByb2R1Y3RdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3VybDQsIHNldDRVcmxdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgdG9rZW4gPVxyXG4gICAgICBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUpmYVdRaU9pSTFaak01T0RObU16aGhORE00TWpZNVpEQTJabUpoTXpVaUxDSnBZWFFpT2pFMU9UYzJNRFkzTlRaOS5KY2lFTTRNSkUzSDZ2R0RKeVFDb3VlZVdyUTIzd3ZVZXdBaEJlSHNzSUQ0XCI7XHJcbiAgICBpZiAodXJsMSkge1xyXG4gICAgICBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9pbnNlcnRwcm9kdWN0XCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIG5hbWVfcHJvZHVjdDogbmFtZVByb2R1Y3QsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbl9wcm9kdWN0OiBkZXNjcmlwdGlvblByb2R1Y3QsXHJcbiAgICAgICAgICBwcmljZV9wcm9kdWN0OiBwcmljZVByb2R1Y3QsXHJcbiAgICAgICAgICBibGFuZF9wcm9kdWN0OiBibGFuZFByb2R1Y3QsXHJcbiAgICAgICAgICBpbWFnZV9wcm9kdWN0OiB1cmwxLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICB9KVxyXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIGlmIChkYXRhLmVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZSBzdWNjdXNzZnVsbFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuICAgIH1cclxuICB9LCBbdXJsMV0pO1xyXG5cclxuICBjb25zdCBpbWFnZWZldGNoID0gKGltYWdlLHNldHVybCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJmaWxlXCIsIGltYWdlKTtcclxuICAgIGRhdGEuYXBwZW5kKFwidXBsb2FkX3ByZXNldFwiLCBcInNob3BhbmRyZW50XCIpO1xyXG4gICAgZGF0YS5hcHBlbmQoXCJjbG91ZF9uYW1lXCIsIFwicGFudXdpdGRldlwiKTtcclxuICAgIGZldGNoKFwiaHR0cHM6Ly9hcGkuY2xvdWRpbmFyeS5jb20vdjFfMS9wYW51d2l0ZGV2L2ltYWdlL3VwbG9hZFwiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgIGJvZHk6IGRhdGEsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIHNldHVybChkYXRhLnVybCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBwb3N0cHJvZHVjdCA9ICgpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coaW1hZ2UxUHJvZHVjdClcclxuICAgIGlmIChpbWFnZTFQcm9kdWN0KSB7XHJcbiAgICAgICAgaW1hZ2VmZXRjaChpbWFnZTFQcm9kdWN0LHNldDFVcmwpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGb3JtSXRlbSBzdHlsZT17eyBtYXJnaW46IFwiMHB4XCIgfX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJyLWhlYWRlclwiPlxyXG4gICAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PuC4iuC4t+C5iOC4reC4quC4tOC4meC4hOC5ieC4sjwvaDI+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB2YWx1ZT17bmFtZVByb2R1Y3R9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5hbWVQcm9kdWN0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PuC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lOC4quC4tOC4meC4hOC5ieC4sjwvaDI+XHJcbiAgICAgICAgPElucHV0XHJcbiAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb25Qcm9kdWN0fVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREZXNjcmlwdGlvblByb2R1Y3QoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGgyIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+4Lij4Liy4LiE4Liy4Liq4Li04LiZ4LiE4LmJ4LiyPC9oMj5cclxuICAgICAgICA8SW5wdXRcclxuICAgICAgICAgIHZhbHVlPXtwcmljZVByb2R1Y3R9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFByaWNlUHJvZHVjdChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aDIgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fT7guYHguJrguKPguJnguYzguKrguLTguJnguITguYnguLI8L2gyPlxyXG4gICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e2JsYW5kUHJvZHVjdH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QmxhbmRQcm9kdWN0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxoMiBzdHlsZT17eyBjb2xvcjogXCJibGFja1wiIH19PuC4o+C4ueC4m+C4quC4tOC4meC4hOC5ieC4sjwvaDI+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElhbWdlMVByb2R1Y3QoZS50YXJnZXQuZmlsZXNbMF0pfVxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElhbWdlMlByb2R1Y3QoZS50YXJnZXQuZmlsZXNbMF0pfVxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElhbWdlM1Byb2R1Y3QoZS50YXJnZXQuZmlsZXNbMF0pfVxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldElhbWdlNFByb2R1Y3QoZS50YXJnZXQuZmlsZXNbMF0pfVxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiYmxhY2tcIiB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBwb3N0cHJvZHVjdCgpfT7guYDguJ7guLTguYjguKHguKrguLTguJnguITguYnguLI8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0Zvcm1JdGVtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluc2VydFByb2R1Y3Q7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=