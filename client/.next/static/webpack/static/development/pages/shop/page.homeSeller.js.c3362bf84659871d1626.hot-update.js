webpackHotUpdate("static\\development\\pages\\shop\\page.homeSeller.js",{

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/EllipsisOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons-svg/lib/asn/PlusOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/EllipsisOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/PlusOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/EllipsisOutlined.js":
false,

/***/ "./node_modules/@ant-design/icons/lib/icons/PlusOutlined.js":
false,

/***/ "./node_modules/antd/lib/_util/colors.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/_util/colors.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PresetColorTypes = exports.PresetStatusColorTypes = void 0;

var _type = __webpack_require__(/*! ./type */ "./node_modules/antd/lib/_util/type.js");

var PresetStatusColorTypes = (0, _type.tuple)('success', 'processing', 'error', 'default', 'warning'); // eslint-disable-next-line import/prefer-default-export

exports.PresetStatusColorTypes = PresetStatusColorTypes;
var PresetColorTypes = (0, _type.tuple)('pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime');
exports.PresetColorTypes = PresetColorTypes;

/***/ }),

/***/ "./node_modules/antd/lib/_util/motion.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/_util/motion.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// ================== Collapse Motion ==================
var getCollapsedHeight = function getCollapsedHeight() {
  return {
    height: 0,
    opacity: 0
  };
};

var getRealHeight = function getRealHeight(node) {
  return {
    height: node.scrollHeight,
    opacity: 1
  };
};

var getCurrentHeight = function getCurrentHeight(node) {
  return {
    height: node.offsetHeight
  };
};

var skipOpacityTransition = function skipOpacityTransition(_, event) {
  return event.propertyName === 'height';
};

var collapseMotion = {
  motionName: 'ant-motion-collapse',
  onAppearStart: getCollapsedHeight,
  onEnterStart: getCollapsedHeight,
  onAppearActive: getRealHeight,
  onEnterActive: getRealHeight,
  onLeaveStart: getCurrentHeight,
  onLeaveActive: getCollapsedHeight,
  onAppearEnd: skipOpacityTransition,
  onEnterEnd: skipOpacityTransition,
  onLeaveEnd: skipOpacityTransition,
  motionDeadline: 500
};
var _default = collapseMotion;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/card/Grid.js":
false,

/***/ "./node_modules/antd/lib/card/Meta.js":
false,

/***/ "./node_modules/antd/lib/card/index.js":
false,

/***/ "./node_modules/antd/lib/card/style/index.js":
false,

/***/ "./node_modules/antd/lib/col/index.js":
false,

/***/ "./node_modules/antd/lib/col/style/index.js":
false,

/***/ "./node_modules/antd/lib/grid/hooks/useBreakpoint.js":
false,

/***/ "./node_modules/antd/lib/grid/index.js":
false,

/***/ "./node_modules/antd/lib/menu/MenuContext.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/menu/MenuContext.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var MenuContext = /*#__PURE__*/(0, _react.createContext)({
  inlineCollapsed: false
});
var _default = MenuContext;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/menu/MenuItem.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/menu/MenuItem.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcMenu = __webpack_require__(/*! rc-menu */ "./node_modules/rc-menu/es/index.js");

var _toArray = _interopRequireDefault(__webpack_require__(/*! rc-util/lib/Children/toArray */ "./node_modules/rc-util/lib/Children/toArray.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _MenuContext = _interopRequireDefault(__webpack_require__(/*! ./MenuContext */ "./node_modules/antd/lib/menu/MenuContext.js"));

var _tooltip = _interopRequireDefault(__webpack_require__(/*! ../tooltip */ "./node_modules/antd/lib/tooltip/index.js"));

var _Sider = __webpack_require__(/*! ../layout/Sider */ "./node_modules/antd/lib/layout/Sider.js");

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var MenuItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(MenuItem, _React$Component);

  var _super = (0, _createSuper2["default"])(MenuItem);

  function MenuItem() {
    var _this;

    (0, _classCallCheck2["default"])(this, MenuItem);
    _this = _super.apply(this, arguments);

    _this.onKeyDown = function (e) {
      _this.menuItem.onKeyDown(e);
    };

    _this.saveMenuItem = function (menuItem) {
      _this.menuItem = menuItem;
    };

    _this.renderItem = function (_ref) {
      var siderCollapsed = _ref.siderCollapsed;
      var _this$props = _this.props,
          level = _this$props.level,
          className = _this$props.className,
          children = _this$props.children,
          rootPrefixCls = _this$props.rootPrefixCls;

      var _a = _this.props,
          title = _a.title,
          icon = _a.icon,
          danger = _a.danger,
          rest = __rest(_a, ["title", "icon", "danger"]);

      return /*#__PURE__*/React.createElement(_MenuContext["default"].Consumer, null, function (_ref2) {
        var _classNames;

        var inlineCollapsed = _ref2.inlineCollapsed,
            direction = _ref2.direction;
        var tooltipTitle = title;

        if (typeof title === 'undefined') {
          tooltipTitle = level === 1 ? children : '';
        } else if (title === false) {
          tooltipTitle = '';
        }

        var tooltipProps = {
          title: tooltipTitle
        };

        if (!siderCollapsed && !inlineCollapsed) {
          tooltipProps.title = null; // Reset `visible` to fix control mode tooltip display not correct
          // ref: https://github.com/ant-design/ant-design/issues/16742

          tooltipProps.visible = false;
        }

        var childrenLength = (0, _toArray["default"])(children).length;
        return /*#__PURE__*/React.createElement(_tooltip["default"], (0, _extends2["default"])({}, tooltipProps, {
          placement: direction === 'rtl' ? 'left' : 'right',
          overlayClassName: "".concat(rootPrefixCls, "-inline-collapsed-tooltip")
        }), /*#__PURE__*/React.createElement(_rcMenu.Item, (0, _extends2["default"])({}, rest, {
          className: (0, _classnames["default"])(className, (_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(rootPrefixCls, "-item-danger"), danger), (0, _defineProperty2["default"])(_classNames, "".concat(rootPrefixCls, "-item-only-child"), (icon ? childrenLength + 1 : childrenLength) === 1), _classNames)),
          title: title,
          ref: _this.saveMenuItem
        }), icon, _this.renderItemChildren(inlineCollapsed)));
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(MenuItem, [{
    key: "renderItemChildren",
    value: function renderItemChildren(inlineCollapsed) {
      var _this$props2 = this.props,
          icon = _this$props2.icon,
          children = _this$props2.children,
          level = _this$props2.level,
          rootPrefixCls = _this$props2.rootPrefixCls; // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
      // ref: https://github.com/ant-design/ant-design/pull/23456

      if (!icon || (0, _reactNode.isValidElement)(children) && children.type === 'span') {
        if (children && inlineCollapsed && level === 1 && typeof children === 'string') {
          return /*#__PURE__*/React.createElement("div", {
            className: "".concat(rootPrefixCls, "-inline-collapsed-noicon")
          }, children.charAt(0));
        }

        return children;
      }

      return /*#__PURE__*/React.createElement("span", null, children);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_Sider.SiderContext.Consumer, null, this.renderItem);
    }
  }]);
  return MenuItem;
}(React.Component);

exports["default"] = MenuItem;
MenuItem.isMenuItem = true;

/***/ }),

/***/ "./node_modules/antd/lib/menu/SubMenu.js":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/menu/SubMenu.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcMenu = __webpack_require__(/*! rc-menu */ "./node_modules/rc-menu/es/index.js");

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _omit = _interopRequireDefault(__webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js"));

var _MenuContext = _interopRequireDefault(__webpack_require__(/*! ./MenuContext */ "./node_modules/antd/lib/menu/MenuContext.js"));

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

var SubMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(SubMenu, _React$Component);

  var _super = (0, _createSuper2["default"])(SubMenu);

  function SubMenu() {
    var _this;

    (0, _classCallCheck2["default"])(this, SubMenu);
    _this = _super.apply(this, arguments);

    _this.onKeyDown = function (e) {
      _this.subMenu.onKeyDown(e);
    };

    _this.saveSubMenu = function (subMenu) {
      _this.subMenu = subMenu;
    };

    return _this;
  }

  (0, _createClass2["default"])(SubMenu, [{
    key: "renderTitle",
    value: function renderTitle(inlineCollapsed) {
      var _this$props = this.props,
          icon = _this$props.icon,
          title = _this$props.title,
          level = _this$props.level,
          rootPrefixCls = _this$props.rootPrefixCls;

      if (!icon) {
        return inlineCollapsed && level === 1 && title && typeof title === 'string' ? /*#__PURE__*/React.createElement("div", {
          className: "".concat(rootPrefixCls, "-inline-collapsed-noicon")
        }, title.charAt(0)) : title;
      } // inline-collapsed.md demo 依赖 span 来隐藏文字,有 icon 属性，则内部包裹一个 span
      // ref: https://github.com/ant-design/ant-design/pull/23456


      var titleIsSpan = (0, _reactNode.isValidElement)(title) && title.type === 'span';
      return /*#__PURE__*/React.createElement(React.Fragment, null, icon, titleIsSpan ? title : /*#__PURE__*/React.createElement("span", null, title));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          rootPrefixCls = _this$props2.rootPrefixCls,
          popupClassName = _this$props2.popupClassName;
      return /*#__PURE__*/React.createElement(_MenuContext["default"].Consumer, null, function (_ref) {
        var inlineCollapsed = _ref.inlineCollapsed,
            antdMenuTheme = _ref.antdMenuTheme;
        return /*#__PURE__*/React.createElement(_rcMenu.SubMenu, (0, _extends2["default"])({}, (0, _omit["default"])(_this2.props, ['icon']), {
          title: _this2.renderTitle(inlineCollapsed),
          ref: _this2.saveSubMenu,
          popupClassName: (0, _classnames["default"])(rootPrefixCls, "".concat(rootPrefixCls, "-").concat(antdMenuTheme), popupClassName)
        }));
      });
    }
  }]);
  return SubMenu;
}(React.Component);

SubMenu.contextType = _MenuContext["default"]; // fix issue:https://github.com/ant-design/ant-design/issues/8666

SubMenu.isSubMenu = 1;
var _default = SubMenu;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/menu/index.js":
/*!*********************************************!*\
  !*** ./node_modules/antd/lib/menu/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _createSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createSuper */ "./node_modules/@babel/runtime/helpers/createSuper.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcMenu = _interopRequireWildcard(__webpack_require__(/*! rc-menu */ "./node_modules/rc-menu/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _SubMenu = _interopRequireDefault(__webpack_require__(/*! ./SubMenu */ "./node_modules/antd/lib/menu/SubMenu.js"));

var _MenuItem = _interopRequireDefault(__webpack_require__(/*! ./MenuItem */ "./node_modules/antd/lib/menu/MenuItem.js"));

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _devWarning = _interopRequireDefault(__webpack_require__(/*! ../_util/devWarning */ "./node_modules/antd/lib/_util/devWarning.js"));

var _Sider = __webpack_require__(/*! ../layout/Sider */ "./node_modules/antd/lib/layout/Sider.js");

var _motion = _interopRequireDefault(__webpack_require__(/*! ../_util/motion */ "./node_modules/antd/lib/_util/motion.js"));

var _MenuContext = _interopRequireDefault(__webpack_require__(/*! ./MenuContext */ "./node_modules/antd/lib/menu/MenuContext.js"));

var InternalMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(InternalMenu, _React$Component);

  var _super = (0, _createSuper2["default"])(InternalMenu);

  function InternalMenu(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, InternalMenu);
    _this = _super.call(this, props);

    _this.renderMenu = function (_ref) {
      var getPopupContainer = _ref.getPopupContainer,
          getPrefixCls = _ref.getPrefixCls,
          direction = _ref.direction;
      var _this$props = _this.props,
          customizePrefixCls = _this$props.prefixCls,
          className = _this$props.className,
          theme = _this$props.theme;
      var defaultMotions = {
        horizontal: {
          motionName: 'slide-up'
        },
        inline: _motion["default"],
        other: {
          motionName: 'zoom-big'
        }
      };
      var prefixCls = getPrefixCls('menu', customizePrefixCls);
      var menuClassName = (0, _classnames["default"])(className, "".concat(prefixCls, "-").concat(theme), (0, _defineProperty2["default"])({}, "".concat(prefixCls, "-inline-collapsed"), _this.getInlineCollapsed()));
      return /*#__PURE__*/React.createElement(_MenuContext["default"].Provider, {
        value: {
          inlineCollapsed: _this.getInlineCollapsed() || false,
          antdMenuTheme: theme,
          direction: direction
        }
      }, /*#__PURE__*/React.createElement(_rcMenu["default"], (0, _extends2["default"])({
        getPopupContainer: getPopupContainer
      }, _this.props, {
        className: menuClassName,
        prefixCls: prefixCls,
        direction: direction,
        defaultMotions: defaultMotions
      })));
    };

    (0, _devWarning["default"])(!('inlineCollapsed' in props && props.mode !== 'inline'), 'Menu', '`inlineCollapsed` should only be used when `mode` is inline.');
    (0, _devWarning["default"])(!(props.siderCollapsed !== undefined && 'inlineCollapsed' in props), 'Menu', '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.');
    return _this;
  }

  (0, _createClass2["default"])(InternalMenu, [{
    key: "getInlineCollapsed",
    value: function getInlineCollapsed() {
      var _this$props2 = this.props,
          inlineCollapsed = _this$props2.inlineCollapsed,
          siderCollapsed = _this$props2.siderCollapsed;

      if (siderCollapsed !== undefined) {
        return siderCollapsed;
      }

      return inlineCollapsed;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(_configProvider.ConfigConsumer, null, this.renderMenu);
    }
  }]);
  return InternalMenu;
}(React.Component);

InternalMenu.defaultProps = {
  className: '',
  theme: 'light',
  focusable: false
}; // We should keep this as ref-able

var Menu = /*#__PURE__*/function (_React$Component2) {
  (0, _inherits2["default"])(Menu, _React$Component2);

  var _super2 = (0, _createSuper2["default"])(Menu);

  function Menu() {
    (0, _classCallCheck2["default"])(this, Menu);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2["default"])(Menu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(_Sider.SiderContext.Consumer, null, function (context) {
        return /*#__PURE__*/React.createElement(InternalMenu, (0, _extends2["default"])({}, _this2.props, context));
      });
    }
  }]);
  return Menu;
}(React.Component);

exports["default"] = Menu;
Menu.Divider = _rcMenu.Divider;
Menu.Item = _MenuItem["default"];
Menu.SubMenu = _SubMenu["default"];
Menu.ItemGroup = _rcMenu.ItemGroup;

/***/ }),

/***/ "./node_modules/antd/lib/menu/style/index.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/menu/style/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/menu/style/index.less");

__webpack_require__(/*! ../../tooltip/style */ "./node_modules/antd/lib/tooltip/style/index.js");

/***/ }),

/***/ "./node_modules/antd/lib/row/index.js":
false,

/***/ "./node_modules/antd/lib/row/style/index.js":
false,

/***/ "./node_modules/antd/lib/tabs/index.js":
false,

/***/ "./node_modules/antd/lib/tabs/style/index.js":
false,

/***/ "./node_modules/antd/lib/tooltip/index.js":
/*!************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _rcTooltip = _interopRequireDefault(__webpack_require__(/*! rc-tooltip */ "./node_modules/rc-tooltip/es/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"));

var _placements = _interopRequireDefault(__webpack_require__(/*! ./placements */ "./node_modules/antd/lib/tooltip/placements.js"));

var _reactNode = __webpack_require__(/*! ../_util/reactNode */ "./node_modules/antd/lib/_util/reactNode.js");

var _configProvider = __webpack_require__(/*! ../config-provider */ "./node_modules/antd/lib/config-provider/index.js");

var _colors = __webpack_require__(/*! ../_util/colors */ "./node_modules/antd/lib/_util/colors.js");

var splitObject = function splitObject(obj, keys) {
  var picked = {};
  var omitted = (0, _extends2["default"])({}, obj);
  keys.forEach(function (key) {
    if (obj && key in obj) {
      picked[key] = obj[key];
      delete omitted[key];
    }
  });
  return {
    picked: picked,
    omitted: omitted
  };
};

var PresetColorRegex = new RegExp("^(".concat(_colors.PresetColorTypes.join('|'), ")(-inverse)?$")); // Fix Tooltip won't hide at disabled button
// mouse events don't trigger at disabled button in Chrome
// https://github.com/react-component/tooltip/issues/18

function getDisabledCompatibleChildren(element, prefixCls) {
  var elementType = element.type;

  if ((elementType.__ANT_BUTTON === true || elementType.__ANT_SWITCH === true || elementType.__ANT_CHECKBOX === true || element.type === 'button') && element.props.disabled) {
    // Pick some layout related style properties up to span
    // Prevent layout bugs like https://github.com/ant-design/ant-design/issues/5254
    var _splitObject = splitObject(element.props.style, ['position', 'left', 'right', 'top', 'bottom', 'float', 'display', 'zIndex']),
        picked = _splitObject.picked,
        omitted = _splitObject.omitted;

    var spanStyle = (0, _extends2["default"])((0, _extends2["default"])({
      display: 'inline-block'
    }, picked), {
      cursor: 'not-allowed',
      width: element.props.block ? '100%' : null
    });
    var buttonStyle = (0, _extends2["default"])((0, _extends2["default"])({}, omitted), {
      pointerEvents: 'none'
    });
    var child = (0, _reactNode.cloneElement)(element, {
      style: buttonStyle,
      className: null
    });
    return /*#__PURE__*/React.createElement("span", {
      style: spanStyle,
      className: (0, _classnames["default"])(element.props.className, "".concat(prefixCls, "-disabled-compatible-wrapper"))
    }, child);
  }

  return element;
}

var Tooltip = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _classNames2;

  var _React$useContext = React.useContext(_configProvider.ConfigContext),
      getContextPopupContainer = _React$useContext.getPopupContainer,
      getPrefixCls = _React$useContext.getPrefixCls,
      direction = _React$useContext.direction;

  var _React$useState = React.useState(!!props.visible || !!props.defaultVisible),
      _React$useState2 = (0, _slicedToArray2["default"])(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

  React.useEffect(function () {
    if ('visible' in props) {
      setVisible(props.visible);
    }
  }, [props.visible]);

  var isNoTitle = function isNoTitle() {
    var title = props.title,
        overlay = props.overlay;
    return !title && !overlay && title !== 0; // overlay for old version compatibility
  };

  var onVisibleChange = function onVisibleChange(vis) {
    if (!('visible' in props)) {
      setVisible(isNoTitle() ? false : vis);
    }

    if (props.onVisibleChange && !isNoTitle()) {
      props.onVisibleChange(vis);
    }
  };

  var getTooltipPlacements = function getTooltipPlacements() {
    var builtinPlacements = props.builtinPlacements,
        arrowPointAtCenter = props.arrowPointAtCenter,
        autoAdjustOverflow = props.autoAdjustOverflow;
    return builtinPlacements || (0, _placements["default"])({
      arrowPointAtCenter: arrowPointAtCenter,
      autoAdjustOverflow: autoAdjustOverflow
    });
  }; // 动态设置动画点


  var onPopupAlign = function onPopupAlign(domNode, align) {
    var placements = getTooltipPlacements(); // 当前返回的位置

    var placement = Object.keys(placements).filter(function (key) {
      return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
    })[0];

    if (!placement) {
      return;
    } // 根据当前坐标设置动画点


    var rect = domNode.getBoundingClientRect();
    var transformOrigin = {
      top: '50%',
      left: '50%'
    };

    if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
      transformOrigin.top = "".concat(rect.height - align.offset[1], "px");
    } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
      transformOrigin.top = "".concat(-align.offset[1], "px");
    }

    if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
      transformOrigin.left = "".concat(rect.width - align.offset[0], "px");
    } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
      transformOrigin.left = "".concat(-align.offset[0], "px");
    }

    domNode.style.transformOrigin = "".concat(transformOrigin.left, " ").concat(transformOrigin.top);
  };

  var getOverlay = function getOverlay() {
    var title = props.title,
        overlay = props.overlay;

    if (title === 0) {
      return title;
    }

    return overlay || title || '';
  };

  var customizePrefixCls = props.prefixCls,
      openClassName = props.openClassName,
      getPopupContainer = props.getPopupContainer,
      getTooltipContainer = props.getTooltipContainer,
      overlayClassName = props.overlayClassName,
      color = props.color,
      overlayInnerStyle = props.overlayInnerStyle;
  var children = props.children;
  var prefixCls = getPrefixCls('tooltip', customizePrefixCls);
  var tempVisible = visible; // Hide tooltip when there is no title

  if (!('visible' in props) && isNoTitle()) {
    tempVisible = false;
  }

  var child = getDisabledCompatibleChildren((0, _reactNode.isValidElement)(children) ? children : /*#__PURE__*/React.createElement("span", null, children), prefixCls);
  var childProps = child.props;
  var childCls = (0, _classnames["default"])(childProps.className, (0, _defineProperty2["default"])({}, openClassName || "".concat(prefixCls, "-open"), true));
  var customOverlayClassName = (0, _classnames["default"])(overlayClassName, (_classNames2 = {}, (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-rtl"), direction === 'rtl'), (0, _defineProperty2["default"])(_classNames2, "".concat(prefixCls, "-").concat(color), color && PresetColorRegex.test(color)), _classNames2));
  var formattedOverlayInnerStyle;
  var arrowContentStyle;

  if (color && !PresetColorRegex.test(color)) {
    formattedOverlayInnerStyle = (0, _extends2["default"])((0, _extends2["default"])({}, overlayInnerStyle), {
      background: color
    });
    arrowContentStyle = {
      background: color
    };
  }

  return /*#__PURE__*/React.createElement(_rcTooltip["default"], (0, _extends2["default"])({}, props, {
    prefixCls: prefixCls,
    overlayClassName: customOverlayClassName,
    getTooltipContainer: getPopupContainer || getTooltipContainer || getContextPopupContainer,
    ref: ref,
    builtinPlacements: getTooltipPlacements(),
    overlay: getOverlay(),
    visible: tempVisible,
    onVisibleChange: onVisibleChange,
    onPopupAlign: onPopupAlign,
    overlayInnerStyle: formattedOverlayInnerStyle,
    arrowContent: /*#__PURE__*/React.createElement("span", {
      className: "".concat(prefixCls, "-arrow-content"),
      style: arrowContentStyle
    })
  }), tempVisible ? (0, _reactNode.cloneElement)(child, {
    className: childCls
  }) : child);
});
Tooltip.displayName = 'Tooltip';
Tooltip.defaultProps = {
  placement: 'top',
  transitionName: 'zoom-big-fast',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false,
  autoAdjustOverflow: true
};
var _default = Tooltip;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/antd/lib/tooltip/placements.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/placements.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOverflowOptions = getOverflowOptions;
exports["default"] = getPlacements;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _placements = __webpack_require__(/*! rc-tooltip/lib/placements */ "./node_modules/rc-tooltip/lib/placements.js");

var autoAdjustOverflowEnabled = {
  adjustX: 1,
  adjustY: 1
};
var autoAdjustOverflowDisabled = {
  adjustX: 0,
  adjustY: 0
};
var targetOffset = [0, 0];

function getOverflowOptions(autoAdjustOverflow) {
  if (typeof autoAdjustOverflow === 'boolean') {
    return autoAdjustOverflow ? autoAdjustOverflowEnabled : autoAdjustOverflowDisabled;
  }

  return (0, _extends2["default"])((0, _extends2["default"])({}, autoAdjustOverflowDisabled), autoAdjustOverflow);
}

function getPlacements(config) {
  var _config$arrowWidth = config.arrowWidth,
      arrowWidth = _config$arrowWidth === void 0 ? 5 : _config$arrowWidth,
      _config$horizontalArr = config.horizontalArrowShift,
      horizontalArrowShift = _config$horizontalArr === void 0 ? 16 : _config$horizontalArr,
      _config$verticalArrow = config.verticalArrowShift,
      verticalArrowShift = _config$verticalArrow === void 0 ? 8 : _config$verticalArrow,
      autoAdjustOverflow = config.autoAdjustOverflow;
  var placementMap = {
    left: {
      points: ['cr', 'cl'],
      offset: [-4, 0]
    },
    right: {
      points: ['cl', 'cr'],
      offset: [4, 0]
    },
    top: {
      points: ['bc', 'tc'],
      offset: [0, -4]
    },
    bottom: {
      points: ['tc', 'bc'],
      offset: [0, 4]
    },
    topLeft: {
      points: ['bl', 'tc'],
      offset: [-(horizontalArrowShift + arrowWidth), -4]
    },
    leftTop: {
      points: ['tr', 'cl'],
      offset: [-4, -(verticalArrowShift + arrowWidth)]
    },
    topRight: {
      points: ['br', 'tc'],
      offset: [horizontalArrowShift + arrowWidth, -4]
    },
    rightTop: {
      points: ['tl', 'cr'],
      offset: [4, -(verticalArrowShift + arrowWidth)]
    },
    bottomRight: {
      points: ['tr', 'bc'],
      offset: [horizontalArrowShift + arrowWidth, 4]
    },
    rightBottom: {
      points: ['bl', 'cr'],
      offset: [4, verticalArrowShift + arrowWidth]
    },
    bottomLeft: {
      points: ['tl', 'bc'],
      offset: [-(horizontalArrowShift + arrowWidth), 4]
    },
    leftBottom: {
      points: ['br', 'cl'],
      offset: [-4, verticalArrowShift + arrowWidth]
    }
  };
  Object.keys(placementMap).forEach(function (key) {
    placementMap[key] = config.arrowPointAtCenter ? (0, _extends2["default"])((0, _extends2["default"])({}, placementMap[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow),
      targetOffset: targetOffset
    }) : (0, _extends2["default"])((0, _extends2["default"])({}, _placements.placements[key]), {
      overflow: getOverflowOptions(autoAdjustOverflow)
    });
    placementMap[key].ignoreShake = true;
  });
  return placementMap;
}

/***/ }),

/***/ "./node_modules/antd/lib/tooltip/style/index.js":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/style/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.less */ "./node_modules/antd/lib/style/index.less");

__webpack_require__(/*! ./index.less */ "./node_modules/antd/lib/tooltip/style/index.less");

/***/ }),

/***/ "./node_modules/rc-dropdown/es/Dropdown.js":
false,

/***/ "./node_modules/rc-dropdown/es/index.js":
false,

/***/ "./node_modules/rc-dropdown/es/placements.js":
false,

/***/ "./node_modules/rc-resize-observer/es/index.js":
false,

/***/ "./node_modules/rc-tabs/es/TabContext.js":
false,

/***/ "./node_modules/rc-tabs/es/TabNavList/AddButton.js":
false,

/***/ "./node_modules/rc-tabs/es/TabNavList/OperationNode.js":
false,

/***/ "./node_modules/rc-tabs/es/TabNavList/TabNode.js":
false,

/***/ "./node_modules/rc-tabs/es/TabNavList/index.js":
false,

/***/ "./node_modules/rc-tabs/es/TabPanelList/TabPane.js":
false,

/***/ "./node_modules/rc-tabs/es/TabPanelList/index.js":
false,

/***/ "./node_modules/rc-tabs/es/Tabs.js":
false,

/***/ "./node_modules/rc-tabs/es/hooks/useOffsets.js":
false,

/***/ "./node_modules/rc-tabs/es/hooks/useRaf.js":
false,

/***/ "./node_modules/rc-tabs/es/hooks/useRefs.js":
false,

/***/ "./node_modules/rc-tabs/es/hooks/useSyncState.js":
false,

/***/ "./node_modules/rc-tabs/es/hooks/useTouchMove.js":
false,

/***/ "./node_modules/rc-tabs/es/hooks/useVisibleRange.js":
false,

/***/ "./node_modules/rc-tabs/es/index.js":
false,

/***/ "./node_modules/rc-tooltip/es/Content.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tooltip/es/Content.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Content = function Content(props) {
  var overlay = props.overlay,
      prefixCls = props.prefixCls,
      id = props.id,
      overlayInnerStyle = props.overlayInnerStyle;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(prefixCls, "-inner"),
    id: id,
    role: "tooltip",
    style: overlayInnerStyle
  }, typeof overlay === 'function' ? overlay() : overlay);
};

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./node_modules/rc-tooltip/es/Tooltip.js":
/*!***********************************************!*\
  !*** ./node_modules/rc-tooltip/es/Tooltip.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rc_trigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rc-trigger */ "./node_modules/rc-trigger/es/index.js");
/* harmony import */ var _placements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./placements */ "./node_modules/rc-tooltip/es/placements.js");
/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Content */ "./node_modules/rc-tooltip/es/Content.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var Tooltip = function Tooltip(props, ref) {
  var overlayClassName = props.overlayClassName,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? ['hover'] : _props$trigger,
      _props$mouseEnterDela = props.mouseEnterDelay,
      mouseEnterDelay = _props$mouseEnterDela === void 0 ? 0 : _props$mouseEnterDela,
      _props$mouseLeaveDela = props.mouseLeaveDelay,
      mouseLeaveDelay = _props$mouseLeaveDela === void 0 ? 0.1 : _props$mouseLeaveDela,
      overlayStyle = props.overlayStyle,
      _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === void 0 ? 'rc-tooltip' : _props$prefixCls,
      children = props.children,
      onVisibleChange = props.onVisibleChange,
      afterVisibleChange = props.afterVisibleChange,
      transitionName = props.transitionName,
      animation = props.animation,
      _props$placement = props.placement,
      placement = _props$placement === void 0 ? 'right' : _props$placement,
      _props$align = props.align,
      align = _props$align === void 0 ? {} : _props$align,
      _props$destroyTooltip = props.destroyTooltipOnHide,
      destroyTooltipOnHide = _props$destroyTooltip === void 0 ? false : _props$destroyTooltip,
      defaultVisible = props.defaultVisible,
      getTooltipContainer = props.getTooltipContainer,
      overlayInnerStyle = props.overlayInnerStyle,
      restProps = _objectWithoutProperties(props, ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle"]);

  var domRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useImperativeHandle"])(ref, function () {
    return domRef.current;
  });

  var extraProps = _objectSpread({}, restProps);

  if ('visible' in props) {
    extraProps.popupVisible = props.visible;
  }

  var getPopupElement = function getPopupElement() {
    var _props$arrowContent = props.arrowContent,
        arrowContent = _props$arrowContent === void 0 ? null : _props$arrowContent,
        overlay = props.overlay,
        id = props.id;
    return [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "".concat(prefixCls, "-arrow"),
      key: "arrow"
    }, arrowContent), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Content__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: "content",
      prefixCls: prefixCls,
      id: id,
      overlay: overlay,
      overlayInnerStyle: overlayInnerStyle
    })];
  };

  var destroyTooltip = false;
  var autoDestroy = false;

  if (typeof destroyTooltipOnHide === 'boolean') {
    destroyTooltip = destroyTooltipOnHide;
  } else if (destroyTooltipOnHide && _typeof(destroyTooltipOnHide) === 'object') {
    var keepParent = destroyTooltipOnHide.keepParent;
    destroyTooltip = keepParent === true;
    autoDestroy = keepParent === false;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_trigger__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({
    popupClassName: overlayClassName,
    prefixCls: prefixCls,
    popup: getPopupElement,
    action: trigger,
    builtinPlacements: _placements__WEBPACK_IMPORTED_MODULE_2__["placements"],
    popupPlacement: placement,
    ref: domRef,
    popupAlign: align,
    getPopupContainer: getTooltipContainer,
    onPopupVisibleChange: onVisibleChange,
    afterPopupVisibleChange: afterVisibleChange,
    popupTransitionName: transitionName,
    popupAnimation: animation,
    defaultPopupVisible: defaultVisible,
    destroyPopupOnHide: destroyTooltip,
    autoDestroy: autoDestroy,
    mouseLeaveDelay: mouseLeaveDelay,
    popupStyle: overlayStyle,
    mouseEnterDelay: mouseEnterDelay
  }, extraProps), children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(Tooltip));

/***/ }),

/***/ "./node_modules/rc-tooltip/es/index.js":
/*!*********************************************!*\
  !*** ./node_modules/rc-tooltip/es/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tooltip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tooltip */ "./node_modules/rc-tooltip/es/Tooltip.js");

/* harmony default export */ __webpack_exports__["default"] = (_Tooltip__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/rc-tooltip/es/placements.js":
/*!**************************************************!*\
  !*** ./node_modules/rc-tooltip/es/placements.js ***!
  \**************************************************/
/*! exports provided: placements, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};
/* harmony default export */ __webpack_exports__["default"] = (placements);

/***/ }),

/***/ "./node_modules/rc-tooltip/lib/placements.js":
/*!***************************************************!*\
  !*** ./node_modules/rc-tooltip/lib/placements.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.placements = void 0;
var autoAdjustOverflow = {
  adjustX: 1,
  adjustY: 1
};
var targetOffset = [0, 0];
var placements = {
  left: {
    points: ['cr', 'cl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  right: {
    points: ['cl', 'cr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  top: {
    points: ['bc', 'tc'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  bottom: {
    points: ['tc', 'bc'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  topLeft: {
    points: ['bl', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  leftTop: {
    points: ['tr', 'tl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  },
  topRight: {
    points: ['br', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [0, -4],
    targetOffset: targetOffset
  },
  rightTop: {
    points: ['tl', 'tr'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomRight: {
    points: ['tr', 'br'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  rightBottom: {
    points: ['bl', 'br'],
    overflow: autoAdjustOverflow,
    offset: [4, 0],
    targetOffset: targetOffset
  },
  bottomLeft: {
    points: ['tl', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [0, 4],
    targetOffset: targetOffset
  },
  leftBottom: {
    points: ['br', 'bl'],
    overflow: autoAdjustOverflow,
    offset: [-4, 0],
    targetOffset: targetOffset
  }
};
exports.placements = placements;
var _default = placements;
exports.default = _default;

/***/ }),

/***/ "./node_modules/rc-util/es/hooks/useMergedState.js":
false,

/***/ "./node_modules/rc-util/lib/Children/toArray.js":
/*!******************************************************!*\
  !*** ./node_modules/rc-util/lib/Children/toArray.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toArray;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toArray(children) {
  var ret = [];

  _react.default.Children.forEach(children, function (child) {
    if (child === undefined || child === null) {
      return;
    }

    if (Array.isArray(child)) {
      ret = ret.concat(toArray(child));
    } else if ((0, _reactIs.isFragment)(child) && child.props) {
      ret = ret.concat(toArray(child.props.children));
    } else {
      ret.push(child);
    }
  });

  return ret;
}

/***/ }),

/***/ "./pages/shop/page.homeSeller.js":
/*!***************************************!*\
  !*** ./pages/shop/page.homeSeller.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/layout/style */ "./node_modules/antd/lib/layout/style/index.js");
/* harmony import */ var antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/menu/style */ "./node_modules/antd/lib/menu/style/index.js");
/* harmony import */ var antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/menu */ "./node_modules/antd/lib/menu/index.js");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/form/style */ "./node_modules/antd/lib/form/style/index.js");
/* harmony import */ var antd_lib_form_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/form */ "./node_modules/antd/lib/form/index.js");
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);








var _jsxFileName = "D:\\GitHub\\shopandrent-computer\\pages\\shop\\page.homeSeller.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

var FormItem = antd_lib_form__WEBPACK_IMPORTED_MODULE_6___default.a.Item;



function home() {
  _s();

  var nexthandle = function nexthandle(type) {
    localStorage.setItem("type", type);
    next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push("/page.shop");
    return null;
  };

  var _useState = useState(false),
      _useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    localStorage.clear();
  }, []);
  return __jsx(FormItem, {
    style: {
      margin: "0px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 5
    }
  }, __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx(Sider, {
    trigger: null,
    collapsible: true,
    collapsed: this.state.collapsed,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a, {
    theme: "dark",
    mode: "inline",
    defaultSelectedKeys: ['1'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "1",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["UserOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 38
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, "nav 1"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "2",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["VideoCameraOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 38
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, "nav 2"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_3___default.a.Item, {
    key: "3",
    icon: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["UploadOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 38
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, "nav 3"))), __jsx(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "site-layout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, __jsx(Header, {
    className: "site-layout-background",
    style: {
      padding: 0
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(this.state.collapsed ? _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["MenuUnfoldOutlined"] : _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["MenuFoldOutlined"], {
    className: 'trigger',
    onClick: this.toggle
  })), __jsx(Content, {
    className: "site-layout-background",
    style: {
      margin: '24px 16px',
      padding: 24,
      minHeight: 280
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, "Content"))), __jsx(Card, {
    style: {
      width: 300,
      border: "1px solid black",
      background: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }
  }, __jsx("a", {
    href: "/shop/page.insertproduct",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, "\u0E40\u0E1E\u0E34\u0E48\u0E21\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 59
    }
  }), __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, "\u0E41\u0E01\u0E49\u0E44\u0E02\u0E2A\u0E34\u0E19\u0E04\u0E49\u0E32"), __jsx("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 27
    }
  })), ",");
}

_s(home, "ndd9wSBSIUuz9QVZqYjV59XEdUA=");

/* harmony default export */ __webpack_exports__["default"] = (home);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvX3V0aWwvY29sb3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9fdXRpbC9tb3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lbnUvTWVudUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lbnUvTWVudUl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL21lbnUvU3ViTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVudS9zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdG9vbHRpcC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvdG9vbHRpcC9wbGFjZW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi90b29sdGlwL3N0eWxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy10b29sdGlwL2VzL0NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JjLXRvb2x0aXAvZXMvVG9vbHRpcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdG9vbHRpcC9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmMtdG9vbHRpcC9lcy9wbGFjZW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy10b29sdGlwL2xpYi9wbGFjZW1lbnRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYy11dGlsL2xpYi9DaGlsZHJlbi90b0FycmF5LmpzIiwid2VicGFjazovLy8uL3BhZ2VzL3Nob3AvcGFnZS5ob21lU2VsbGVyLmpzIl0sIm5hbWVzIjpbIkZvcm1JdGVtIiwiSXRlbSIsImhvbWUiLCJuZXh0aGFuZGxlIiwidHlwZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyb3V0ZXIiLCJwdXNoIiwidXNlU3RhdGUiLCJjb2xsYXBzZWQiLCJzZXRDb2xsYXBzZWQiLCJ1c2VFZmZlY3QiLCJjbGVhciIsIm1hcmdpbiIsInN0YXRlIiwicGFkZGluZyIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIk1lbnVVbmZvbGRPdXRsaW5lZCIsIk1lbnVGb2xkT3V0bGluZWQiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwidG9nZ2xlIiwibWluSGVpZ2h0Iiwid2lkdGgiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWE7O0FBRWI7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQSxZQUFZLG1CQUFPLENBQUMscURBQVE7O0FBRTVCLHNHQUFzRzs7QUFFdEc7QUFDQTtBQUNBLDRDOzs7Ozs7Ozs7Ozs7QUNiYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlDYTs7QUFFYjtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyw0Q0FBTzs7QUFFNUI7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDhCOzs7Ozs7Ozs7Ozs7QUNiYTs7QUFFYiw4QkFBOEIsbUJBQU8sQ0FB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LFlBQU0sRUFBQyxpQkFBcEI7QUFBdUNDLGdCQUFVLEVBQUM7QUFBbEQsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsMEJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRUFERixFQUNvRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRHBELEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwRUFGRixFQUVvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRnBCLENBbkNGLE1BREY7QUEyQ0Q7O0dBdERRekIsSTs7QUF3RE1BLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzaG9wXFxwYWdlLmhvbWVTZWxsZXIuanMuYzMzNjJiZjg0NjU5ODcxZDE2MjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5QcmVzZXRDb2xvclR5cGVzID0gZXhwb3J0cy5QcmVzZXRTdGF0dXNDb2xvclR5cGVzID0gdm9pZCAwO1xuXG52YXIgX3R5cGUgPSByZXF1aXJlKFwiLi90eXBlXCIpO1xuXG52YXIgUHJlc2V0U3RhdHVzQ29sb3JUeXBlcyA9ICgwLCBfdHlwZS50dXBsZSkoJ3N1Y2Nlc3MnLCAncHJvY2Vzc2luZycsICdlcnJvcicsICdkZWZhdWx0JywgJ3dhcm5pbmcnKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcblxuZXhwb3J0cy5QcmVzZXRTdGF0dXNDb2xvclR5cGVzID0gUHJlc2V0U3RhdHVzQ29sb3JUeXBlcztcbnZhciBQcmVzZXRDb2xvclR5cGVzID0gKDAsIF90eXBlLnR1cGxlKSgncGluaycsICdyZWQnLCAneWVsbG93JywgJ29yYW5nZScsICdjeWFuJywgJ2dyZWVuJywgJ2JsdWUnLCAncHVycGxlJywgJ2dlZWtibHVlJywgJ21hZ2VudGEnLCAndm9sY2FubycsICdnb2xkJywgJ2xpbWUnKTtcbmV4cG9ydHMuUHJlc2V0Q29sb3JUeXBlcyA9IFByZXNldENvbG9yVHlwZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxuLy8gPT09PT09PT09PT09PT09PT09IENvbGxhcHNlIE1vdGlvbiA9PT09PT09PT09PT09PT09PT1cbnZhciBnZXRDb2xsYXBzZWRIZWlnaHQgPSBmdW5jdGlvbiBnZXRDb2xsYXBzZWRIZWlnaHQoKSB7XG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIG9wYWNpdHk6IDBcbiAgfTtcbn07XG5cbnZhciBnZXRSZWFsSGVpZ2h0ID0gZnVuY3Rpb24gZ2V0UmVhbEhlaWdodChub2RlKSB7XG4gIHJldHVybiB7XG4gICAgaGVpZ2h0OiBub2RlLnNjcm9sbEhlaWdodCxcbiAgICBvcGFjaXR5OiAxXG4gIH07XG59O1xuXG52YXIgZ2V0Q3VycmVudEhlaWdodCA9IGZ1bmN0aW9uIGdldEN1cnJlbnRIZWlnaHQobm9kZSkge1xuICByZXR1cm4ge1xuICAgIGhlaWdodDogbm9kZS5vZmZzZXRIZWlnaHRcbiAgfTtcbn07XG5cbnZhciBza2lwT3BhY2l0eVRyYW5zaXRpb24gPSBmdW5jdGlvbiBza2lwT3BhY2l0eVRyYW5zaXRpb24oXywgZXZlbnQpIHtcbiAgcmV0dXJuIGV2ZW50LnByb3BlcnR5TmFtZSA9PT0gJ2hlaWdodCc7XG59O1xuXG52YXIgY29sbGFwc2VNb3Rpb24gPSB7XG4gIG1vdGlvbk5hbWU6ICdhbnQtbW90aW9uLWNvbGxhcHNlJyxcbiAgb25BcHBlYXJTdGFydDogZ2V0Q29sbGFwc2VkSGVpZ2h0LFxuICBvbkVudGVyU3RhcnQ6IGdldENvbGxhcHNlZEhlaWdodCxcbiAgb25BcHBlYXJBY3RpdmU6IGdldFJlYWxIZWlnaHQsXG4gIG9uRW50ZXJBY3RpdmU6IGdldFJlYWxIZWlnaHQsXG4gIG9uTGVhdmVTdGFydDogZ2V0Q3VycmVudEhlaWdodCxcbiAgb25MZWF2ZUFjdGl2ZTogZ2V0Q29sbGFwc2VkSGVpZ2h0LFxuICBvbkFwcGVhckVuZDogc2tpcE9wYWNpdHlUcmFuc2l0aW9uLFxuICBvbkVudGVyRW5kOiBza2lwT3BhY2l0eVRyYW5zaXRpb24sXG4gIG9uTGVhdmVFbmQ6IHNraXBPcGFjaXR5VHJhbnNpdGlvbixcbiAgbW90aW9uRGVhZGxpbmU6IDUwMFxufTtcbnZhciBfZGVmYXVsdCA9IGNvbGxhcHNlTW90aW9uO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG52YXIgTWVudUNvbnRleHQgPSAvKiNfX1BVUkVfXyovKDAsIF9yZWFjdC5jcmVhdGVDb250ZXh0KSh7XG4gIGlubGluZUNvbGxhcHNlZDogZmFsc2Vcbn0pO1xudmFyIF9kZWZhdWx0ID0gTWVudUNvbnRleHQ7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpKTtcblxudmFyIF9pbmhlcml0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpKTtcblxudmFyIF9jcmVhdGVTdXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY01lbnUgPSByZXF1aXJlKFwicmMtbWVudVwiKTtcblxudmFyIF90b0FycmF5ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmMtdXRpbC9saWIvQ2hpbGRyZW4vdG9BcnJheVwiKSk7XG5cbnZhciBfY2xhc3NuYW1lcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImNsYXNzbmFtZXNcIikpO1xuXG52YXIgX01lbnVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NZW51Q29udGV4dFwiKSk7XG5cbnZhciBfdG9vbHRpcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3Rvb2x0aXBcIikpO1xuXG52YXIgX1NpZGVyID0gcmVxdWlyZShcIi4uL2xheW91dC9TaWRlclwiKTtcblxudmFyIF9yZWFjdE5vZGUgPSByZXF1aXJlKFwiLi4vX3V0aWwvcmVhY3ROb2RlXCIpO1xuXG52YXIgX19yZXN0ID0gdm9pZCAwICYmICh2b2lkIDApLl9fcmVzdCB8fCBmdW5jdGlvbiAocywgZSkge1xuICB2YXIgdCA9IHt9O1xuXG4gIGZvciAodmFyIHAgaW4gcykge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMCkgdFtwXSA9IHNbcF07XG4gIH1cblxuICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpIHRbcFtpXV0gPSBzW3BbaV1dO1xuICB9XG4gIHJldHVybiB0O1xufTtcblxudmFyIE1lbnVJdGVtID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfUmVhY3QkQ29tcG9uZW50KSB7XG4gICgwLCBfaW5oZXJpdHMyW1wiZGVmYXVsdFwiXSkoTWVudUl0ZW0sIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSAoMCwgX2NyZWF0ZVN1cGVyMltcImRlZmF1bHRcIl0pKE1lbnVJdGVtKTtcblxuICBmdW5jdGlvbiBNZW51SXRlbSgpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICAoMCwgX2NsYXNzQ2FsbENoZWNrMltcImRlZmF1bHRcIl0pKHRoaXMsIE1lbnVJdGVtKTtcbiAgICBfdGhpcyA9IF9zdXBlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gICAgX3RoaXMub25LZXlEb3duID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIF90aGlzLm1lbnVJdGVtLm9uS2V5RG93bihlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2F2ZU1lbnVJdGVtID0gZnVuY3Rpb24gKG1lbnVJdGVtKSB7XG4gICAgICBfdGhpcy5tZW51SXRlbSA9IG1lbnVJdGVtO1xuICAgIH07XG5cbiAgICBfdGhpcy5yZW5kZXJJdGVtID0gZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBzaWRlckNvbGxhcHNlZCA9IF9yZWYuc2lkZXJDb2xsYXBzZWQ7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICBsZXZlbCA9IF90aGlzJHByb3BzLmxldmVsLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICAgIHJvb3RQcmVmaXhDbHMgPSBfdGhpcyRwcm9wcy5yb290UHJlZml4Q2xzO1xuXG4gICAgICB2YXIgX2EgPSBfdGhpcy5wcm9wcyxcbiAgICAgICAgICB0aXRsZSA9IF9hLnRpdGxlLFxuICAgICAgICAgIGljb24gPSBfYS5pY29uLFxuICAgICAgICAgIGRhbmdlciA9IF9hLmRhbmdlcixcbiAgICAgICAgICByZXN0ID0gX19yZXN0KF9hLCBbXCJ0aXRsZVwiLCBcImljb25cIiwgXCJkYW5nZXJcIl0pO1xuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX01lbnVDb250ZXh0W1wiZGVmYXVsdFwiXS5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKF9yZWYyKSB7XG4gICAgICAgIHZhciBfY2xhc3NOYW1lcztcblxuICAgICAgICB2YXIgaW5saW5lQ29sbGFwc2VkID0gX3JlZjIuaW5saW5lQ29sbGFwc2VkLFxuICAgICAgICAgICAgZGlyZWN0aW9uID0gX3JlZjIuZGlyZWN0aW9uO1xuICAgICAgICB2YXIgdG9vbHRpcFRpdGxlID0gdGl0bGU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aXRsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICB0b29sdGlwVGl0bGUgPSBsZXZlbCA9PT0gMSA/IGNoaWxkcmVuIDogJyc7XG4gICAgICAgIH0gZWxzZSBpZiAodGl0bGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdG9vbHRpcFRpdGxlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9vbHRpcFByb3BzID0ge1xuICAgICAgICAgIHRpdGxlOiB0b29sdGlwVGl0bGVcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoIXNpZGVyQ29sbGFwc2VkICYmICFpbmxpbmVDb2xsYXBzZWQpIHtcbiAgICAgICAgICB0b29sdGlwUHJvcHMudGl0bGUgPSBudWxsOyAvLyBSZXNldCBgdmlzaWJsZWAgdG8gZml4IGNvbnRyb2wgbW9kZSB0b29sdGlwIGRpc3BsYXkgbm90IGNvcnJlY3RcbiAgICAgICAgICAvLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzE2NzQyXG5cbiAgICAgICAgICB0b29sdGlwUHJvcHMudmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gKDAsIF90b0FycmF5W1wiZGVmYXVsdFwiXSkoY2hpbGRyZW4pLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF90b29sdGlwW1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCB0b29sdGlwUHJvcHMsIHtcbiAgICAgICAgICBwbGFjZW1lbnQ6IGRpcmVjdGlvbiA9PT0gJ3J0bCcgPyAnbGVmdCcgOiAncmlnaHQnLFxuICAgICAgICAgIG92ZXJsYXlDbGFzc05hbWU6IFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLWlubGluZS1jb2xsYXBzZWQtdG9vbHRpcFwiKVxuICAgICAgICB9KSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjTWVudS5JdGVtLCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIHJlc3QsIHtcbiAgICAgICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGNsYXNzTmFtZSwgKF9jbGFzc05hbWVzID0ge30sICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoX2NsYXNzTmFtZXMsIFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLWl0ZW0tZGFuZ2VyXCIpLCBkYW5nZXIpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzLCBcIlwiLmNvbmNhdChyb290UHJlZml4Q2xzLCBcIi1pdGVtLW9ubHktY2hpbGRcIiksIChpY29uID8gY2hpbGRyZW5MZW5ndGggKyAxIDogY2hpbGRyZW5MZW5ndGgpID09PSAxKSwgX2NsYXNzTmFtZXMpKSxcbiAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgcmVmOiBfdGhpcy5zYXZlTWVudUl0ZW1cbiAgICAgICAgfSksIGljb24sIF90aGlzLnJlbmRlckl0ZW1DaGlsZHJlbihpbmxpbmVDb2xsYXBzZWQpKSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIF90aGlzO1xuICB9XG5cbiAgKDAsIF9jcmVhdGVDbGFzczJbXCJkZWZhdWx0XCJdKShNZW51SXRlbSwgW3tcbiAgICBrZXk6IFwicmVuZGVySXRlbUNoaWxkcmVuXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckl0ZW1DaGlsZHJlbihpbmxpbmVDb2xsYXBzZWQpIHtcbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGljb24gPSBfdGhpcyRwcm9wczIuaWNvbixcbiAgICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzMi5jaGlsZHJlbixcbiAgICAgICAgICBsZXZlbCA9IF90aGlzJHByb3BzMi5sZXZlbCxcbiAgICAgICAgICByb290UHJlZml4Q2xzID0gX3RoaXMkcHJvcHMyLnJvb3RQcmVmaXhDbHM7IC8vIGlubGluZS1jb2xsYXBzZWQubWQgZGVtbyDkvp3otZYgc3BhbiDmnaXpmpDol4/mloflrZcs5pyJIGljb24g5bGe5oCn77yM5YiZ5YaF6YOo5YyF6KO55LiA5LiqIHNwYW5cbiAgICAgIC8vIHJlZjogaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9wdWxsLzIzNDU2XG5cbiAgICAgIGlmICghaWNvbiB8fCAoMCwgX3JlYWN0Tm9kZS5pc1ZhbGlkRWxlbWVudCkoY2hpbGRyZW4pICYmIGNoaWxkcmVuLnR5cGUgPT09ICdzcGFuJykge1xuICAgICAgICBpZiAoY2hpbGRyZW4gJiYgaW5saW5lQ29sbGFwc2VkICYmIGxldmVsID09PSAxICYmIHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBcIlwiLmNvbmNhdChyb290UHJlZml4Q2xzLCBcIi1pbmxpbmUtY29sbGFwc2VkLW5vaWNvblwiKVxuICAgICAgICAgIH0sIGNoaWxkcmVuLmNoYXJBdCgwKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY2hpbGRyZW47XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9TaWRlci5TaWRlckNvbnRleHQuQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVySXRlbSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBNZW51SXRlbTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBNZW51SXRlbTtcbk1lbnVJdGVtLmlzTWVudUl0ZW0gPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkXCIpO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX2V4dGVuZHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpKTtcblxudmFyIF9jbGFzc0NhbGxDaGVjazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpKTtcblxudmFyIF9jcmVhdGVDbGFzczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzXCIpKTtcblxudmFyIF9pbmhlcml0czIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzXCIpKTtcblxudmFyIF9jcmVhdGVTdXBlcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZVN1cGVyXCIpKTtcblxudmFyIFJlYWN0ID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yY01lbnUgPSByZXF1aXJlKFwicmMtbWVudVwiKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfb21pdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIm9taXQuanNcIikpO1xuXG52YXIgX01lbnVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NZW51Q29udGV4dFwiKSk7XG5cbnZhciBfcmVhY3ROb2RlID0gcmVxdWlyZShcIi4uL191dGlsL3JlYWN0Tm9kZVwiKTtcblxudmFyIFN1Yk1lbnUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShTdWJNZW51LCBfUmVhY3QkQ29tcG9uZW50KTtcblxuICB2YXIgX3N1cGVyID0gKDAsIF9jcmVhdGVTdXBlcjJbXCJkZWZhdWx0XCJdKShTdWJNZW51KTtcblxuICBmdW5jdGlvbiBTdWJNZW51KCkge1xuICAgIHZhciBfdGhpcztcblxuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgU3ViTWVudSk7XG4gICAgX3RoaXMgPSBfc3VwZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuICAgIF90aGlzLm9uS2V5RG93biA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBfdGhpcy5zdWJNZW51Lm9uS2V5RG93bihlKTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc2F2ZVN1Yk1lbnUgPSBmdW5jdGlvbiAoc3ViTWVudSkge1xuICAgICAgX3RoaXMuc3ViTWVudSA9IHN1Yk1lbnU7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyW1wiZGVmYXVsdFwiXSkoU3ViTWVudSwgW3tcbiAgICBrZXk6IFwicmVuZGVyVGl0bGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyVGl0bGUoaW5saW5lQ29sbGFwc2VkKSB7XG4gICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIGljb24gPSBfdGhpcyRwcm9wcy5pY29uLFxuICAgICAgICAgIHRpdGxlID0gX3RoaXMkcHJvcHMudGl0bGUsXG4gICAgICAgICAgbGV2ZWwgPSBfdGhpcyRwcm9wcy5sZXZlbCxcbiAgICAgICAgICByb290UHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucm9vdFByZWZpeENscztcblxuICAgICAgaWYgKCFpY29uKSB7XG4gICAgICAgIHJldHVybiBpbmxpbmVDb2xsYXBzZWQgJiYgbGV2ZWwgPT09IDEgJiYgdGl0bGUgJiYgdHlwZW9mIHRpdGxlID09PSAnc3RyaW5nJyA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHJvb3RQcmVmaXhDbHMsIFwiLWlubGluZS1jb2xsYXBzZWQtbm9pY29uXCIpXG4gICAgICAgIH0sIHRpdGxlLmNoYXJBdCgwKSkgOiB0aXRsZTtcbiAgICAgIH0gLy8gaW5saW5lLWNvbGxhcHNlZC5tZCBkZW1vIOS+nei1liBzcGFuIOadpemakOiXj+aWh+WtlyzmnIkgaWNvbiDlsZ7mgKfvvIzliJnlhoXpg6jljIXoo7nkuIDkuKogc3BhblxuICAgICAgLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduL3B1bGwvMjM0NTZcblxuXG4gICAgICB2YXIgdGl0bGVJc1NwYW4gPSAoMCwgX3JlYWN0Tm9kZS5pc1ZhbGlkRWxlbWVudCkodGl0bGUpICYmIHRpdGxlLnR5cGUgPT09ICdzcGFuJztcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgaWNvbiwgdGl0bGVJc1NwYW4gPyB0aXRsZSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCBudWxsLCB0aXRsZSkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICAgIHZhciBfdGhpcyRwcm9wczIgPSB0aGlzLnByb3BzLFxuICAgICAgICAgIHJvb3RQcmVmaXhDbHMgPSBfdGhpcyRwcm9wczIucm9vdFByZWZpeENscyxcbiAgICAgICAgICBwb3B1cENsYXNzTmFtZSA9IF90aGlzJHByb3BzMi5wb3B1cENsYXNzTmFtZTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTWVudUNvbnRleHRbXCJkZWZhdWx0XCJdLkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICB2YXIgaW5saW5lQ29sbGFwc2VkID0gX3JlZi5pbmxpbmVDb2xsYXBzZWQsXG4gICAgICAgICAgICBhbnRkTWVudVRoZW1lID0gX3JlZi5hbnRkTWVudVRoZW1lO1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX3JjTWVudS5TdWJNZW51LCAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sICgwLCBfb21pdFtcImRlZmF1bHRcIl0pKF90aGlzMi5wcm9wcywgWydpY29uJ10pLCB7XG4gICAgICAgICAgdGl0bGU6IF90aGlzMi5yZW5kZXJUaXRsZShpbmxpbmVDb2xsYXBzZWQpLFxuICAgICAgICAgIHJlZjogX3RoaXMyLnNhdmVTdWJNZW51LFxuICAgICAgICAgIHBvcHVwQ2xhc3NOYW1lOiAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShyb290UHJlZml4Q2xzLCBcIlwiLmNvbmNhdChyb290UHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KGFudGRNZW51VGhlbWUpLCBwb3B1cENsYXNzTmFtZSlcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTdWJNZW51O1xufShSZWFjdC5Db21wb25lbnQpO1xuXG5TdWJNZW51LmNvbnRleHRUeXBlID0gX01lbnVDb250ZXh0W1wiZGVmYXVsdFwiXTsgLy8gZml4IGlzc3VlOmh0dHBzOi8vZ2l0aHViLmNvbS9hbnQtZGVzaWduL2FudC1kZXNpZ24vaXNzdWVzLzg2NjZcblxuU3ViTWVudS5pc1N1Yk1lbnUgPSAxO1xudmFyIF9kZWZhdWx0ID0gU3ViTWVudTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmRcIik7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX2RlZmluZVByb3BlcnR5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHlcIikpO1xuXG52YXIgX2NsYXNzQ2FsbENoZWNrMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIikpO1xuXG52YXIgX2NyZWF0ZUNsYXNzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIikpO1xuXG52YXIgX2luaGVyaXRzMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIikpO1xuXG52YXIgX2NyZWF0ZVN1cGVyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlU3VwZXJcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjTWVudSA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyYy1tZW51XCIpKTtcblxudmFyIF9jbGFzc25hbWVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiY2xhc3NuYW1lc1wiKSk7XG5cbnZhciBfU3ViTWVudSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vU3ViTWVudVwiKSk7XG5cbnZhciBfTWVudUl0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL01lbnVJdGVtXCIpKTtcblxudmFyIF9jb25maWdQcm92aWRlciA9IHJlcXVpcmUoXCIuLi9jb25maWctcHJvdmlkZXJcIik7XG5cbnZhciBfZGV2V2FybmluZyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL191dGlsL2Rldldhcm5pbmdcIikpO1xuXG52YXIgX1NpZGVyID0gcmVxdWlyZShcIi4uL2xheW91dC9TaWRlclwiKTtcblxudmFyIF9tb3Rpb24gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9fdXRpbC9tb3Rpb25cIikpO1xuXG52YXIgX01lbnVDb250ZXh0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9NZW51Q29udGV4dFwiKSk7XG5cbnZhciBJbnRlcm5hbE1lbnUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQpIHtcbiAgKDAsIF9pbmhlcml0czJbXCJkZWZhdWx0XCJdKShJbnRlcm5hbE1lbnUsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gIHZhciBfc3VwZXIgPSAoMCwgX2NyZWF0ZVN1cGVyMltcImRlZmF1bHRcIl0pKEludGVybmFsTWVudSk7XG5cbiAgZnVuY3Rpb24gSW50ZXJuYWxNZW51KHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgKDAsIF9jbGFzc0NhbGxDaGVjazJbXCJkZWZhdWx0XCJdKSh0aGlzLCBJbnRlcm5hbE1lbnUpO1xuICAgIF90aGlzID0gX3N1cGVyLmNhbGwodGhpcywgcHJvcHMpO1xuXG4gICAgX3RoaXMucmVuZGVyTWVudSA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICB2YXIgZ2V0UG9wdXBDb250YWluZXIgPSBfcmVmLmdldFBvcHVwQ29udGFpbmVyLFxuICAgICAgICAgIGdldFByZWZpeENscyA9IF9yZWYuZ2V0UHJlZml4Q2xzLFxuICAgICAgICAgIGRpcmVjdGlvbiA9IF9yZWYuZGlyZWN0aW9uO1xuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gX3RoaXMkcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICAgIGNsYXNzTmFtZSA9IF90aGlzJHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgICB0aGVtZSA9IF90aGlzJHByb3BzLnRoZW1lO1xuICAgICAgdmFyIGRlZmF1bHRNb3Rpb25zID0ge1xuICAgICAgICBob3Jpem9udGFsOiB7XG4gICAgICAgICAgbW90aW9uTmFtZTogJ3NsaWRlLXVwJ1xuICAgICAgICB9LFxuICAgICAgICBpbmxpbmU6IF9tb3Rpb25bXCJkZWZhdWx0XCJdLFxuICAgICAgICBvdGhlcjoge1xuICAgICAgICAgIG1vdGlvbk5hbWU6ICd6b29tLWJpZydcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ21lbnUnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICAgICAgdmFyIG1lbnVDbGFzc05hbWUgPSAoMCwgX2NsYXNzbmFtZXNbXCJkZWZhdWx0XCJdKShjbGFzc05hbWUsIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItXCIpLmNvbmNhdCh0aGVtZSksICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoe30sIFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5saW5lLWNvbGxhcHNlZFwiKSwgX3RoaXMuZ2V0SW5saW5lQ29sbGFwc2VkKCkpKTtcbiAgICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfTWVudUNvbnRleHRbXCJkZWZhdWx0XCJdLlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgaW5saW5lQ29sbGFwc2VkOiBfdGhpcy5nZXRJbmxpbmVDb2xsYXBzZWQoKSB8fCBmYWxzZSxcbiAgICAgICAgICBhbnRkTWVudVRoZW1lOiB0aGVtZSxcbiAgICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvblxuICAgICAgICB9XG4gICAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcmNNZW51W1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHtcbiAgICAgICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFBvcHVwQ29udGFpbmVyXG4gICAgICB9LCBfdGhpcy5wcm9wcywge1xuICAgICAgICBjbGFzc05hbWU6IG1lbnVDbGFzc05hbWUsXG4gICAgICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgICAgICBkaXJlY3Rpb246IGRpcmVjdGlvbixcbiAgICAgICAgZGVmYXVsdE1vdGlvbnM6IGRlZmF1bHRNb3Rpb25zXG4gICAgICB9KSkpO1xuICAgIH07XG5cbiAgICAoMCwgX2Rldldhcm5pbmdbXCJkZWZhdWx0XCJdKSghKCdpbmxpbmVDb2xsYXBzZWQnIGluIHByb3BzICYmIHByb3BzLm1vZGUgIT09ICdpbmxpbmUnKSwgJ01lbnUnLCAnYGlubGluZUNvbGxhcHNlZGAgc2hvdWxkIG9ubHkgYmUgdXNlZCB3aGVuIGBtb2RlYCBpcyBpbmxpbmUuJyk7XG4gICAgKDAsIF9kZXZXYXJuaW5nW1wiZGVmYXVsdFwiXSkoIShwcm9wcy5zaWRlckNvbGxhcHNlZCAhPT0gdW5kZWZpbmVkICYmICdpbmxpbmVDb2xsYXBzZWQnIGluIHByb3BzKSwgJ01lbnUnLCAnYGlubGluZUNvbGxhcHNlZGAgbm90IGNvbnRyb2wgTWVudSB1bmRlciBTaWRlci4gU2hvdWxkIHNldCBgY29sbGFwc2VkYCBvbiBTaWRlciBpbnN0ZWFkLicpO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyW1wiZGVmYXVsdFwiXSkoSW50ZXJuYWxNZW51LCBbe1xuICAgIGtleTogXCJnZXRJbmxpbmVDb2xsYXBzZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0SW5saW5lQ29sbGFwc2VkKCkge1xuICAgICAgdmFyIF90aGlzJHByb3BzMiA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgaW5saW5lQ29sbGFwc2VkID0gX3RoaXMkcHJvcHMyLmlubGluZUNvbGxhcHNlZCxcbiAgICAgICAgICBzaWRlckNvbGxhcHNlZCA9IF90aGlzJHByb3BzMi5zaWRlckNvbGxhcHNlZDtcblxuICAgICAgaWYgKHNpZGVyQ29sbGFwc2VkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHNpZGVyQ29sbGFwc2VkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gaW5saW5lQ29sbGFwc2VkO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJyZW5kZXJcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KF9jb25maWdQcm92aWRlci5Db25maWdDb25zdW1lciwgbnVsbCwgdGhpcy5yZW5kZXJNZW51KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEludGVybmFsTWVudTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuSW50ZXJuYWxNZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgY2xhc3NOYW1lOiAnJyxcbiAgdGhlbWU6ICdsaWdodCcsXG4gIGZvY3VzYWJsZTogZmFsc2Vcbn07IC8vIFdlIHNob3VsZCBrZWVwIHRoaXMgYXMgcmVmLWFibGVcblxudmFyIE1lbnUgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9SZWFjdCRDb21wb25lbnQyKSB7XG4gICgwLCBfaW5oZXJpdHMyW1wiZGVmYXVsdFwiXSkoTWVudSwgX1JlYWN0JENvbXBvbmVudDIpO1xuXG4gIHZhciBfc3VwZXIyID0gKDAsIF9jcmVhdGVTdXBlcjJbXCJkZWZhdWx0XCJdKShNZW51KTtcblxuICBmdW5jdGlvbiBNZW51KCkge1xuICAgICgwLCBfY2xhc3NDYWxsQ2hlY2syW1wiZGVmYXVsdFwiXSkodGhpcywgTWVudSk7XG4gICAgcmV0dXJuIF9zdXBlcjIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gICgwLCBfY3JlYXRlQ2xhc3MyW1wiZGVmYXVsdFwiXSkoTWVudSwgW3tcbiAgICBrZXk6IFwicmVuZGVyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoX1NpZGVyLlNpZGVyQ29udGV4dC5Db25zdW1lciwgbnVsbCwgZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEludGVybmFsTWVudSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBfdGhpczIucHJvcHMsIGNvbnRleHQpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTWVudTtcbn0oUmVhY3QuQ29tcG9uZW50KTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBNZW51O1xuTWVudS5EaXZpZGVyID0gX3JjTWVudS5EaXZpZGVyO1xuTWVudS5JdGVtID0gX01lbnVJdGVtW1wiZGVmYXVsdFwiXTtcbk1lbnUuU3ViTWVudSA9IF9TdWJNZW51W1wiZGVmYXVsdFwiXTtcbk1lbnUuSXRlbUdyb3VwID0gX3JjTWVudS5JdGVtR3JvdXA7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCIuLi8uLi9zdHlsZS9pbmRleC5sZXNzXCIpO1xuXG5yZXF1aXJlKFwiLi9pbmRleC5sZXNzXCIpO1xuXG5yZXF1aXJlKFwiLi4vLi4vdG9vbHRpcC9zdHlsZVwiKTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtcblxudmFyIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5XCIpKTtcblxudmFyIF9zbGljZWRUb0FycmF5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvc2xpY2VkVG9BcnJheVwiKSk7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgUmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO1xuXG52YXIgX3JjVG9vbHRpcCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJjLXRvb2x0aXBcIikpO1xuXG52YXIgX2NsYXNzbmFtZXMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpKTtcblxudmFyIF9wbGFjZW1lbnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9wbGFjZW1lbnRzXCIpKTtcblxudmFyIF9yZWFjdE5vZGUgPSByZXF1aXJlKFwiLi4vX3V0aWwvcmVhY3ROb2RlXCIpO1xuXG52YXIgX2NvbmZpZ1Byb3ZpZGVyID0gcmVxdWlyZShcIi4uL2NvbmZpZy1wcm92aWRlclwiKTtcblxudmFyIF9jb2xvcnMgPSByZXF1aXJlKFwiLi4vX3V0aWwvY29sb3JzXCIpO1xuXG52YXIgc3BsaXRPYmplY3QgPSBmdW5jdGlvbiBzcGxpdE9iamVjdChvYmosIGtleXMpIHtcbiAgdmFyIHBpY2tlZCA9IHt9O1xuICB2YXIgb21pdHRlZCA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSh7fSwgb2JqKTtcbiAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBpZiAob2JqICYmIGtleSBpbiBvYmopIHtcbiAgICAgIHBpY2tlZFtrZXldID0gb2JqW2tleV07XG4gICAgICBkZWxldGUgb21pdHRlZFtrZXldO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcGlja2VkOiBwaWNrZWQsXG4gICAgb21pdHRlZDogb21pdHRlZFxuICB9O1xufTtcblxudmFyIFByZXNldENvbG9yUmVnZXggPSBuZXcgUmVnRXhwKFwiXihcIi5jb25jYXQoX2NvbG9ycy5QcmVzZXRDb2xvclR5cGVzLmpvaW4oJ3wnKSwgXCIpKC1pbnZlcnNlKT8kXCIpKTsgLy8gRml4IFRvb2x0aXAgd29uJ3QgaGlkZSBhdCBkaXNhYmxlZCBidXR0b25cbi8vIG1vdXNlIGV2ZW50cyBkb24ndCB0cmlnZ2VyIGF0IGRpc2FibGVkIGJ1dHRvbiBpbiBDaHJvbWVcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdC1jb21wb25lbnQvdG9vbHRpcC9pc3N1ZXMvMThcblxuZnVuY3Rpb24gZ2V0RGlzYWJsZWRDb21wYXRpYmxlQ2hpbGRyZW4oZWxlbWVudCwgcHJlZml4Q2xzKSB7XG4gIHZhciBlbGVtZW50VHlwZSA9IGVsZW1lbnQudHlwZTtcblxuICBpZiAoKGVsZW1lbnRUeXBlLl9fQU5UX0JVVFRPTiA9PT0gdHJ1ZSB8fCBlbGVtZW50VHlwZS5fX0FOVF9TV0lUQ0ggPT09IHRydWUgfHwgZWxlbWVudFR5cGUuX19BTlRfQ0hFQ0tCT1ggPT09IHRydWUgfHwgZWxlbWVudC50eXBlID09PSAnYnV0dG9uJykgJiYgZWxlbWVudC5wcm9wcy5kaXNhYmxlZCkge1xuICAgIC8vIFBpY2sgc29tZSBsYXlvdXQgcmVsYXRlZCBzdHlsZSBwcm9wZXJ0aWVzIHVwIHRvIHNwYW5cbiAgICAvLyBQcmV2ZW50IGxheW91dCBidWdzIGxpa2UgaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi9pc3N1ZXMvNTI1NFxuICAgIHZhciBfc3BsaXRPYmplY3QgPSBzcGxpdE9iamVjdChlbGVtZW50LnByb3BzLnN0eWxlLCBbJ3Bvc2l0aW9uJywgJ2xlZnQnLCAncmlnaHQnLCAndG9wJywgJ2JvdHRvbScsICdmbG9hdCcsICdkaXNwbGF5JywgJ3pJbmRleCddKSxcbiAgICAgICAgcGlja2VkID0gX3NwbGl0T2JqZWN0LnBpY2tlZCxcbiAgICAgICAgb21pdHRlZCA9IF9zcGxpdE9iamVjdC5vbWl0dGVkO1xuXG4gICAgdmFyIHNwYW5TdHlsZSA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe1xuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaydcbiAgICB9LCBwaWNrZWQpLCB7XG4gICAgICBjdXJzb3I6ICdub3QtYWxsb3dlZCcsXG4gICAgICB3aWR0aDogZWxlbWVudC5wcm9wcy5ibG9jayA/ICcxMDAlJyA6IG51bGxcbiAgICB9KTtcbiAgICB2YXIgYnV0dG9uU3R5bGUgPSAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBvbWl0dGVkKSwge1xuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnXG4gICAgfSk7XG4gICAgdmFyIGNoaWxkID0gKDAsIF9yZWFjdE5vZGUuY2xvbmVFbGVtZW50KShlbGVtZW50LCB7XG4gICAgICBzdHlsZTogYnV0dG9uU3R5bGUsXG4gICAgICBjbGFzc05hbWU6IG51bGxcbiAgICB9KTtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgIHN0eWxlOiBzcGFuU3R5bGUsXG4gICAgICBjbGFzc05hbWU6ICgwLCBfY2xhc3NuYW1lc1tcImRlZmF1bHRcIl0pKGVsZW1lbnQucHJvcHMuY2xhc3NOYW1lLCBcIlwiLmNvbmNhdChwcmVmaXhDbHMsIFwiLWRpc2FibGVkLWNvbXBhdGlibGUtd3JhcHBlclwiKSlcbiAgICB9LCBjaGlsZCk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxudmFyIFRvb2x0aXAgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgX2NsYXNzTmFtZXMyO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoX2NvbmZpZ1Byb3ZpZGVyLkNvbmZpZ0NvbnRleHQpLFxuICAgICAgZ2V0Q29udGV4dFBvcHVwQ29udGFpbmVyID0gX1JlYWN0JHVzZUNvbnRleHQuZ2V0UG9wdXBDb250YWluZXIsXG4gICAgICBnZXRQcmVmaXhDbHMgPSBfUmVhY3QkdXNlQ29udGV4dC5nZXRQcmVmaXhDbHMsXG4gICAgICBkaXJlY3Rpb24gPSBfUmVhY3QkdXNlQ29udGV4dC5kaXJlY3Rpb247XG5cbiAgdmFyIF9SZWFjdCR1c2VTdGF0ZSA9IFJlYWN0LnVzZVN0YXRlKCEhcHJvcHMudmlzaWJsZSB8fCAhIXByb3BzLmRlZmF1bHRWaXNpYmxlKSxcbiAgICAgIF9SZWFjdCR1c2VTdGF0ZTIgPSAoMCwgX3NsaWNlZFRvQXJyYXkyW1wiZGVmYXVsdFwiXSkoX1JlYWN0JHVzZVN0YXRlLCAyKSxcbiAgICAgIHZpc2libGUgPSBfUmVhY3QkdXNlU3RhdGUyWzBdLFxuICAgICAgc2V0VmlzaWJsZSA9IF9SZWFjdCR1c2VTdGF0ZTJbMV07XG5cbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoJ3Zpc2libGUnIGluIHByb3BzKSB7XG4gICAgICBzZXRWaXNpYmxlKHByb3BzLnZpc2libGUpO1xuICAgIH1cbiAgfSwgW3Byb3BzLnZpc2libGVdKTtcblxuICB2YXIgaXNOb1RpdGxlID0gZnVuY3Rpb24gaXNOb1RpdGxlKCkge1xuICAgIHZhciB0aXRsZSA9IHByb3BzLnRpdGxlLFxuICAgICAgICBvdmVybGF5ID0gcHJvcHMub3ZlcmxheTtcbiAgICByZXR1cm4gIXRpdGxlICYmICFvdmVybGF5ICYmIHRpdGxlICE9PSAwOyAvLyBvdmVybGF5IGZvciBvbGQgdmVyc2lvbiBjb21wYXRpYmlsaXR5XG4gIH07XG5cbiAgdmFyIG9uVmlzaWJsZUNoYW5nZSA9IGZ1bmN0aW9uIG9uVmlzaWJsZUNoYW5nZSh2aXMpIHtcbiAgICBpZiAoISgndmlzaWJsZScgaW4gcHJvcHMpKSB7XG4gICAgICBzZXRWaXNpYmxlKGlzTm9UaXRsZSgpID8gZmFsc2UgOiB2aXMpO1xuICAgIH1cblxuICAgIGlmIChwcm9wcy5vblZpc2libGVDaGFuZ2UgJiYgIWlzTm9UaXRsZSgpKSB7XG4gICAgICBwcm9wcy5vblZpc2libGVDaGFuZ2UodmlzKTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldFRvb2x0aXBQbGFjZW1lbnRzID0gZnVuY3Rpb24gZ2V0VG9vbHRpcFBsYWNlbWVudHMoKSB7XG4gICAgdmFyIGJ1aWx0aW5QbGFjZW1lbnRzID0gcHJvcHMuYnVpbHRpblBsYWNlbWVudHMsXG4gICAgICAgIGFycm93UG9pbnRBdENlbnRlciA9IHByb3BzLmFycm93UG9pbnRBdENlbnRlcixcbiAgICAgICAgYXV0b0FkanVzdE92ZXJmbG93ID0gcHJvcHMuYXV0b0FkanVzdE92ZXJmbG93O1xuICAgIHJldHVybiBidWlsdGluUGxhY2VtZW50cyB8fCAoMCwgX3BsYWNlbWVudHNbXCJkZWZhdWx0XCJdKSh7XG4gICAgICBhcnJvd1BvaW50QXRDZW50ZXI6IGFycm93UG9pbnRBdENlbnRlcixcbiAgICAgIGF1dG9BZGp1c3RPdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93XG4gICAgfSk7XG4gIH07IC8vIOWKqOaAgeiuvue9ruWKqOeUu+eCuVxuXG5cbiAgdmFyIG9uUG9wdXBBbGlnbiA9IGZ1bmN0aW9uIG9uUG9wdXBBbGlnbihkb21Ob2RlLCBhbGlnbikge1xuICAgIHZhciBwbGFjZW1lbnRzID0gZ2V0VG9vbHRpcFBsYWNlbWVudHMoKTsgLy8g5b2T5YmN6L+U5Zue55qE5L2N572uXG5cbiAgICB2YXIgcGxhY2VtZW50ID0gT2JqZWN0LmtleXMocGxhY2VtZW50cykuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJldHVybiBwbGFjZW1lbnRzW2tleV0ucG9pbnRzWzBdID09PSBhbGlnbi5wb2ludHNbMF0gJiYgcGxhY2VtZW50c1trZXldLnBvaW50c1sxXSA9PT0gYWxpZ24ucG9pbnRzWzFdO1xuICAgIH0pWzBdO1xuXG4gICAgaWYgKCFwbGFjZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIOagueaNruW9k+WJjeWdkOagh+iuvue9ruWKqOeUu+eCuVxuXG5cbiAgICB2YXIgcmVjdCA9IGRvbU5vZGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIHRyYW5zZm9ybU9yaWdpbiA9IHtcbiAgICAgIHRvcDogJzUwJScsXG4gICAgICBsZWZ0OiAnNTAlJ1xuICAgIH07XG5cbiAgICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ3RvcCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ0JvdHRvbScpID49IDApIHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbi50b3AgPSBcIlwiLmNvbmNhdChyZWN0LmhlaWdodCAtIGFsaWduLm9mZnNldFsxXSwgXCJweFwiKTtcbiAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdUb3AnKSA+PSAwIHx8IHBsYWNlbWVudC5pbmRleE9mKCdib3R0b20nKSA+PSAwKSB7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW4udG9wID0gXCJcIi5jb25jYXQoLWFsaWduLm9mZnNldFsxXSwgXCJweFwiKTtcbiAgICB9XG5cbiAgICBpZiAocGxhY2VtZW50LmluZGV4T2YoJ2xlZnQnKSA+PSAwIHx8IHBsYWNlbWVudC5pbmRleE9mKCdSaWdodCcpID49IDApIHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbi5sZWZ0ID0gXCJcIi5jb25jYXQocmVjdC53aWR0aCAtIGFsaWduLm9mZnNldFswXSwgXCJweFwiKTtcbiAgICB9IGVsc2UgaWYgKHBsYWNlbWVudC5pbmRleE9mKCdyaWdodCcpID49IDAgfHwgcGxhY2VtZW50LmluZGV4T2YoJ0xlZnQnKSA+PSAwKSB7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW4ubGVmdCA9IFwiXCIuY29uY2F0KC1hbGlnbi5vZmZzZXRbMF0sIFwicHhcIik7XG4gICAgfVxuXG4gICAgZG9tTm9kZS5zdHlsZS50cmFuc2Zvcm1PcmlnaW4gPSBcIlwiLmNvbmNhdCh0cmFuc2Zvcm1PcmlnaW4ubGVmdCwgXCIgXCIpLmNvbmNhdCh0cmFuc2Zvcm1PcmlnaW4udG9wKTtcbiAgfTtcblxuICB2YXIgZ2V0T3ZlcmxheSA9IGZ1bmN0aW9uIGdldE92ZXJsYXkoKSB7XG4gICAgdmFyIHRpdGxlID0gcHJvcHMudGl0bGUsXG4gICAgICAgIG92ZXJsYXkgPSBwcm9wcy5vdmVybGF5O1xuXG4gICAgaWYgKHRpdGxlID09PSAwKSB7XG4gICAgICByZXR1cm4gdGl0bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG92ZXJsYXkgfHwgdGl0bGUgfHwgJyc7XG4gIH07XG5cbiAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHByb3BzLnByZWZpeENscyxcbiAgICAgIG9wZW5DbGFzc05hbWUgPSBwcm9wcy5vcGVuQ2xhc3NOYW1lLFxuICAgICAgZ2V0UG9wdXBDb250YWluZXIgPSBwcm9wcy5nZXRQb3B1cENvbnRhaW5lcixcbiAgICAgIGdldFRvb2x0aXBDb250YWluZXIgPSBwcm9wcy5nZXRUb29sdGlwQ29udGFpbmVyLFxuICAgICAgb3ZlcmxheUNsYXNzTmFtZSA9IHByb3BzLm92ZXJsYXlDbGFzc05hbWUsXG4gICAgICBjb2xvciA9IHByb3BzLmNvbG9yLFxuICAgICAgb3ZlcmxheUlubmVyU3R5bGUgPSBwcm9wcy5vdmVybGF5SW5uZXJTdHlsZTtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ3Rvb2x0aXAnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuICB2YXIgdGVtcFZpc2libGUgPSB2aXNpYmxlOyAvLyBIaWRlIHRvb2x0aXAgd2hlbiB0aGVyZSBpcyBubyB0aXRsZVxuXG4gIGlmICghKCd2aXNpYmxlJyBpbiBwcm9wcykgJiYgaXNOb1RpdGxlKCkpIHtcbiAgICB0ZW1wVmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgdmFyIGNoaWxkID0gZ2V0RGlzYWJsZWRDb21wYXRpYmxlQ2hpbGRyZW4oKDAsIF9yZWFjdE5vZGUuaXNWYWxpZEVsZW1lbnQpKGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIG51bGwsIGNoaWxkcmVuKSwgcHJlZml4Q2xzKTtcbiAgdmFyIGNoaWxkUHJvcHMgPSBjaGlsZC5wcm9wcztcbiAgdmFyIGNoaWxkQ2xzID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkoY2hpbGRQcm9wcy5jbGFzc05hbWUsICgwLCBfZGVmaW5lUHJvcGVydHkyW1wiZGVmYXVsdFwiXSkoe30sIG9wZW5DbGFzc05hbWUgfHwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1vcGVuXCIpLCB0cnVlKSk7XG4gIHZhciBjdXN0b21PdmVybGF5Q2xhc3NOYW1lID0gKDAsIF9jbGFzc25hbWVzW1wiZGVmYXVsdFwiXSkob3ZlcmxheUNsYXNzTmFtZSwgKF9jbGFzc05hbWVzMiA9IHt9LCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1ydGxcIiksIGRpcmVjdGlvbiA9PT0gJ3J0bCcpLCAoMCwgX2RlZmluZVByb3BlcnR5MltcImRlZmF1bHRcIl0pKF9jbGFzc05hbWVzMiwgXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1cIikuY29uY2F0KGNvbG9yKSwgY29sb3IgJiYgUHJlc2V0Q29sb3JSZWdleC50ZXN0KGNvbG9yKSksIF9jbGFzc05hbWVzMikpO1xuICB2YXIgZm9ybWF0dGVkT3ZlcmxheUlubmVyU3R5bGU7XG4gIHZhciBhcnJvd0NvbnRlbnRTdHlsZTtcblxuICBpZiAoY29sb3IgJiYgIVByZXNldENvbG9yUmVnZXgudGVzdChjb2xvcikpIHtcbiAgICBmb3JtYXR0ZWRPdmVybGF5SW5uZXJTdHlsZSA9ICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIG92ZXJsYXlJbm5lclN0eWxlKSwge1xuICAgICAgYmFja2dyb3VuZDogY29sb3JcbiAgICB9KTtcbiAgICBhcnJvd0NvbnRlbnRTdHlsZSA9IHtcbiAgICAgIGJhY2tncm91bmQ6IGNvbG9yXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChfcmNUb29sdGlwW1wiZGVmYXVsdFwiXSwgKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBwcm9wcywge1xuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIG92ZXJsYXlDbGFzc05hbWU6IGN1c3RvbU92ZXJsYXlDbGFzc05hbWUsXG4gICAgZ2V0VG9vbHRpcENvbnRhaW5lcjogZ2V0UG9wdXBDb250YWluZXIgfHwgZ2V0VG9vbHRpcENvbnRhaW5lciB8fCBnZXRDb250ZXh0UG9wdXBDb250YWluZXIsXG4gICAgcmVmOiByZWYsXG4gICAgYnVpbHRpblBsYWNlbWVudHM6IGdldFRvb2x0aXBQbGFjZW1lbnRzKCksXG4gICAgb3ZlcmxheTogZ2V0T3ZlcmxheSgpLFxuICAgIHZpc2libGU6IHRlbXBWaXNpYmxlLFxuICAgIG9uVmlzaWJsZUNoYW5nZTogb25WaXNpYmxlQ2hhbmdlLFxuICAgIG9uUG9wdXBBbGlnbjogb25Qb3B1cEFsaWduLFxuICAgIG92ZXJsYXlJbm5lclN0eWxlOiBmb3JtYXR0ZWRPdmVybGF5SW5uZXJTdHlsZSxcbiAgICBhcnJvd0NvbnRlbnQ6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItYXJyb3ctY29udGVudFwiKSxcbiAgICAgIHN0eWxlOiBhcnJvd0NvbnRlbnRTdHlsZVxuICAgIH0pXG4gIH0pLCB0ZW1wVmlzaWJsZSA/ICgwLCBfcmVhY3ROb2RlLmNsb25lRWxlbWVudCkoY2hpbGQsIHtcbiAgICBjbGFzc05hbWU6IGNoaWxkQ2xzXG4gIH0pIDogY2hpbGQpO1xufSk7XG5Ub29sdGlwLmRpc3BsYXlOYW1lID0gJ1Rvb2x0aXAnO1xuVG9vbHRpcC5kZWZhdWx0UHJvcHMgPSB7XG4gIHBsYWNlbWVudDogJ3RvcCcsXG4gIHRyYW5zaXRpb25OYW1lOiAnem9vbS1iaWctZmFzdCcsXG4gIG1vdXNlRW50ZXJEZWxheTogMC4xLFxuICBtb3VzZUxlYXZlRGVsYXk6IDAuMSxcbiAgYXJyb3dQb2ludEF0Q2VudGVyOiBmYWxzZSxcbiAgYXV0b0FkanVzdE92ZXJmbG93OiB0cnVlXG59O1xudmFyIF9kZWZhdWx0ID0gVG9vbHRpcDtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0ID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0XCIpO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZXRPdmVyZmxvd09wdGlvbnMgPSBnZXRPdmVyZmxvd09wdGlvbnM7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGdldFBsYWNlbWVudHM7XG5cbnZhciBfZXh0ZW5kczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIikpO1xuXG52YXIgX3BsYWNlbWVudHMgPSByZXF1aXJlKFwicmMtdG9vbHRpcC9saWIvcGxhY2VtZW50c1wiKTtcblxudmFyIGF1dG9BZGp1c3RPdmVyZmxvd0VuYWJsZWQgPSB7XG4gIGFkanVzdFg6IDEsXG4gIGFkanVzdFk6IDFcbn07XG52YXIgYXV0b0FkanVzdE92ZXJmbG93RGlzYWJsZWQgPSB7XG4gIGFkanVzdFg6IDAsXG4gIGFkanVzdFk6IDBcbn07XG52YXIgdGFyZ2V0T2Zmc2V0ID0gWzAsIDBdO1xuXG5mdW5jdGlvbiBnZXRPdmVyZmxvd09wdGlvbnMoYXV0b0FkanVzdE92ZXJmbG93KSB7XG4gIGlmICh0eXBlb2YgYXV0b0FkanVzdE92ZXJmbG93ID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gYXV0b0FkanVzdE92ZXJmbG93ID8gYXV0b0FkanVzdE92ZXJmbG93RW5hYmxlZCA6IGF1dG9BZGp1c3RPdmVyZmxvd0Rpc2FibGVkO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfZXh0ZW5kczJbXCJkZWZhdWx0XCJdKSgoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoe30sIGF1dG9BZGp1c3RPdmVyZmxvd0Rpc2FibGVkKSwgYXV0b0FkanVzdE92ZXJmbG93KTtcbn1cblxuZnVuY3Rpb24gZ2V0UGxhY2VtZW50cyhjb25maWcpIHtcbiAgdmFyIF9jb25maWckYXJyb3dXaWR0aCA9IGNvbmZpZy5hcnJvd1dpZHRoLFxuICAgICAgYXJyb3dXaWR0aCA9IF9jb25maWckYXJyb3dXaWR0aCA9PT0gdm9pZCAwID8gNSA6IF9jb25maWckYXJyb3dXaWR0aCxcbiAgICAgIF9jb25maWckaG9yaXpvbnRhbEFyciA9IGNvbmZpZy5ob3Jpem9udGFsQXJyb3dTaGlmdCxcbiAgICAgIGhvcml6b250YWxBcnJvd1NoaWZ0ID0gX2NvbmZpZyRob3Jpem9udGFsQXJyID09PSB2b2lkIDAgPyAxNiA6IF9jb25maWckaG9yaXpvbnRhbEFycixcbiAgICAgIF9jb25maWckdmVydGljYWxBcnJvdyA9IGNvbmZpZy52ZXJ0aWNhbEFycm93U2hpZnQsXG4gICAgICB2ZXJ0aWNhbEFycm93U2hpZnQgPSBfY29uZmlnJHZlcnRpY2FsQXJyb3cgPT09IHZvaWQgMCA/IDggOiBfY29uZmlnJHZlcnRpY2FsQXJyb3csXG4gICAgICBhdXRvQWRqdXN0T3ZlcmZsb3cgPSBjb25maWcuYXV0b0FkanVzdE92ZXJmbG93O1xuICB2YXIgcGxhY2VtZW50TWFwID0ge1xuICAgIGxlZnQ6IHtcbiAgICAgIHBvaW50czogWydjcicsICdjbCddLFxuICAgICAgb2Zmc2V0OiBbLTQsIDBdXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgcG9pbnRzOiBbJ2NsJywgJ2NyJ10sXG4gICAgICBvZmZzZXQ6IFs0LCAwXVxuICAgIH0sXG4gICAgdG9wOiB7XG4gICAgICBwb2ludHM6IFsnYmMnLCAndGMnXSxcbiAgICAgIG9mZnNldDogWzAsIC00XVxuICAgIH0sXG4gICAgYm90dG9tOiB7XG4gICAgICBwb2ludHM6IFsndGMnLCAnYmMnXSxcbiAgICAgIG9mZnNldDogWzAsIDRdXG4gICAgfSxcbiAgICB0b3BMZWZ0OiB7XG4gICAgICBwb2ludHM6IFsnYmwnLCAndGMnXSxcbiAgICAgIG9mZnNldDogWy0oaG9yaXpvbnRhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoKSwgLTRdXG4gICAgfSxcbiAgICBsZWZ0VG9wOiB7XG4gICAgICBwb2ludHM6IFsndHInLCAnY2wnXSxcbiAgICAgIG9mZnNldDogWy00LCAtKHZlcnRpY2FsQXJyb3dTaGlmdCArIGFycm93V2lkdGgpXVxuICAgIH0sXG4gICAgdG9wUmlnaHQ6IHtcbiAgICAgIHBvaW50czogWydicicsICd0YyddLFxuICAgICAgb2Zmc2V0OiBbaG9yaXpvbnRhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoLCAtNF1cbiAgICB9LFxuICAgIHJpZ2h0VG9wOiB7XG4gICAgICBwb2ludHM6IFsndGwnLCAnY3InXSxcbiAgICAgIG9mZnNldDogWzQsIC0odmVydGljYWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCldXG4gICAgfSxcbiAgICBib3R0b21SaWdodDoge1xuICAgICAgcG9pbnRzOiBbJ3RyJywgJ2JjJ10sXG4gICAgICBvZmZzZXQ6IFtob3Jpem9udGFsQXJyb3dTaGlmdCArIGFycm93V2lkdGgsIDRdXG4gICAgfSxcbiAgICByaWdodEJvdHRvbToge1xuICAgICAgcG9pbnRzOiBbJ2JsJywgJ2NyJ10sXG4gICAgICBvZmZzZXQ6IFs0LCB2ZXJ0aWNhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoXVxuICAgIH0sXG4gICAgYm90dG9tTGVmdDoge1xuICAgICAgcG9pbnRzOiBbJ3RsJywgJ2JjJ10sXG4gICAgICBvZmZzZXQ6IFstKGhvcml6b250YWxBcnJvd1NoaWZ0ICsgYXJyb3dXaWR0aCksIDRdXG4gICAgfSxcbiAgICBsZWZ0Qm90dG9tOiB7XG4gICAgICBwb2ludHM6IFsnYnInLCAnY2wnXSxcbiAgICAgIG9mZnNldDogWy00LCB2ZXJ0aWNhbEFycm93U2hpZnQgKyBhcnJvd1dpZHRoXVxuICAgIH1cbiAgfTtcbiAgT2JqZWN0LmtleXMocGxhY2VtZW50TWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBwbGFjZW1lbnRNYXBba2V5XSA9IGNvbmZpZy5hcnJvd1BvaW50QXRDZW50ZXIgPyAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBwbGFjZW1lbnRNYXBba2V5XSksIHtcbiAgICAgIG92ZXJmbG93OiBnZXRPdmVyZmxvd09wdGlvbnMoYXV0b0FkanVzdE92ZXJmbG93KSxcbiAgICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gICAgfSkgOiAoMCwgX2V4dGVuZHMyW1wiZGVmYXVsdFwiXSkoKDAsIF9leHRlbmRzMltcImRlZmF1bHRcIl0pKHt9LCBfcGxhY2VtZW50cy5wbGFjZW1lbnRzW2tleV0pLCB7XG4gICAgICBvdmVyZmxvdzogZ2V0T3ZlcmZsb3dPcHRpb25zKGF1dG9BZGp1c3RPdmVyZmxvdylcbiAgICB9KTtcbiAgICBwbGFjZW1lbnRNYXBba2V5XS5pZ25vcmVTaGFrZSA9IHRydWU7XG4gIH0pO1xuICByZXR1cm4gcGxhY2VtZW50TWFwO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiLi4vLi4vc3R5bGUvaW5kZXgubGVzc1wiKTtcblxucmVxdWlyZShcIi4vaW5kZXgubGVzc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgQ29udGVudCA9IGZ1bmN0aW9uIENvbnRlbnQocHJvcHMpIHtcbiAgdmFyIG92ZXJsYXkgPSBwcm9wcy5vdmVybGF5LFxuICAgICAgcHJlZml4Q2xzID0gcHJvcHMucHJlZml4Q2xzLFxuICAgICAgaWQgPSBwcm9wcy5pZCxcbiAgICAgIG92ZXJsYXlJbm5lclN0eWxlID0gcHJvcHMub3ZlcmxheUlubmVyU3R5bGU7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiXCIuY29uY2F0KHByZWZpeENscywgXCItaW5uZXJcIiksXG4gICAgaWQ6IGlkLFxuICAgIHJvbGU6IFwidG9vbHRpcFwiLFxuICAgIHN0eWxlOiBvdmVybGF5SW5uZXJTdHlsZVxuICB9LCB0eXBlb2Ygb3ZlcmxheSA9PT0gJ2Z1bmN0aW9uJyA/IG92ZXJsYXkoKSA6IG92ZXJsYXkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29udGVudDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpOyB2YXIga2V5LCBpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTsgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHsga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTsgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VJbXBlcmF0aXZlSGFuZGxlLCBmb3J3YXJkUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyaWdnZXIgZnJvbSAncmMtdHJpZ2dlcic7XG5pbXBvcnQgeyBwbGFjZW1lbnRzIH0gZnJvbSAnLi9wbGFjZW1lbnRzJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCc7XG5cbnZhciBUb29sdGlwID0gZnVuY3Rpb24gVG9vbHRpcChwcm9wcywgcmVmKSB7XG4gIHZhciBvdmVybGF5Q2xhc3NOYW1lID0gcHJvcHMub3ZlcmxheUNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyR0cmlnZ2VyID0gcHJvcHMudHJpZ2dlcixcbiAgICAgIHRyaWdnZXIgPSBfcHJvcHMkdHJpZ2dlciA9PT0gdm9pZCAwID8gWydob3ZlciddIDogX3Byb3BzJHRyaWdnZXIsXG4gICAgICBfcHJvcHMkbW91c2VFbnRlckRlbGEgPSBwcm9wcy5tb3VzZUVudGVyRGVsYXksXG4gICAgICBtb3VzZUVudGVyRGVsYXkgPSBfcHJvcHMkbW91c2VFbnRlckRlbGEgPT09IHZvaWQgMCA/IDAgOiBfcHJvcHMkbW91c2VFbnRlckRlbGEsXG4gICAgICBfcHJvcHMkbW91c2VMZWF2ZURlbGEgPSBwcm9wcy5tb3VzZUxlYXZlRGVsYXksXG4gICAgICBtb3VzZUxlYXZlRGVsYXkgPSBfcHJvcHMkbW91c2VMZWF2ZURlbGEgPT09IHZvaWQgMCA/IDAuMSA6IF9wcm9wcyRtb3VzZUxlYXZlRGVsYSxcbiAgICAgIG92ZXJsYXlTdHlsZSA9IHByb3BzLm92ZXJsYXlTdHlsZSxcbiAgICAgIF9wcm9wcyRwcmVmaXhDbHMgPSBwcm9wcy5wcmVmaXhDbHMsXG4gICAgICBwcmVmaXhDbHMgPSBfcHJvcHMkcHJlZml4Q2xzID09PSB2b2lkIDAgPyAncmMtdG9vbHRpcCcgOiBfcHJvcHMkcHJlZml4Q2xzLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIG9uVmlzaWJsZUNoYW5nZSA9IHByb3BzLm9uVmlzaWJsZUNoYW5nZSxcbiAgICAgIGFmdGVyVmlzaWJsZUNoYW5nZSA9IHByb3BzLmFmdGVyVmlzaWJsZUNoYW5nZSxcbiAgICAgIHRyYW5zaXRpb25OYW1lID0gcHJvcHMudHJhbnNpdGlvbk5hbWUsXG4gICAgICBhbmltYXRpb24gPSBwcm9wcy5hbmltYXRpb24sXG4gICAgICBfcHJvcHMkcGxhY2VtZW50ID0gcHJvcHMucGxhY2VtZW50LFxuICAgICAgcGxhY2VtZW50ID0gX3Byb3BzJHBsYWNlbWVudCA9PT0gdm9pZCAwID8gJ3JpZ2h0JyA6IF9wcm9wcyRwbGFjZW1lbnQsXG4gICAgICBfcHJvcHMkYWxpZ24gPSBwcm9wcy5hbGlnbixcbiAgICAgIGFsaWduID0gX3Byb3BzJGFsaWduID09PSB2b2lkIDAgPyB7fSA6IF9wcm9wcyRhbGlnbixcbiAgICAgIF9wcm9wcyRkZXN0cm95VG9vbHRpcCA9IHByb3BzLmRlc3Ryb3lUb29sdGlwT25IaWRlLFxuICAgICAgZGVzdHJveVRvb2x0aXBPbkhpZGUgPSBfcHJvcHMkZGVzdHJveVRvb2x0aXAgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGRlc3Ryb3lUb29sdGlwLFxuICAgICAgZGVmYXVsdFZpc2libGUgPSBwcm9wcy5kZWZhdWx0VmlzaWJsZSxcbiAgICAgIGdldFRvb2x0aXBDb250YWluZXIgPSBwcm9wcy5nZXRUb29sdGlwQ29udGFpbmVyLFxuICAgICAgb3ZlcmxheUlubmVyU3R5bGUgPSBwcm9wcy5vdmVybGF5SW5uZXJTdHlsZSxcbiAgICAgIHJlc3RQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wib3ZlcmxheUNsYXNzTmFtZVwiLCBcInRyaWdnZXJcIiwgXCJtb3VzZUVudGVyRGVsYXlcIiwgXCJtb3VzZUxlYXZlRGVsYXlcIiwgXCJvdmVybGF5U3R5bGVcIiwgXCJwcmVmaXhDbHNcIiwgXCJjaGlsZHJlblwiLCBcIm9uVmlzaWJsZUNoYW5nZVwiLCBcImFmdGVyVmlzaWJsZUNoYW5nZVwiLCBcInRyYW5zaXRpb25OYW1lXCIsIFwiYW5pbWF0aW9uXCIsIFwicGxhY2VtZW50XCIsIFwiYWxpZ25cIiwgXCJkZXN0cm95VG9vbHRpcE9uSGlkZVwiLCBcImRlZmF1bHRWaXNpYmxlXCIsIFwiZ2V0VG9vbHRpcENvbnRhaW5lclwiLCBcIm92ZXJsYXlJbm5lclN0eWxlXCJdKTtcblxuICB2YXIgZG9tUmVmID0gdXNlUmVmKG51bGwpO1xuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkb21SZWYuY3VycmVudDtcbiAgfSk7XG5cbiAgdmFyIGV4dHJhUHJvcHMgPSBfb2JqZWN0U3ByZWFkKHt9LCByZXN0UHJvcHMpO1xuXG4gIGlmICgndmlzaWJsZScgaW4gcHJvcHMpIHtcbiAgICBleHRyYVByb3BzLnBvcHVwVmlzaWJsZSA9IHByb3BzLnZpc2libGU7XG4gIH1cblxuICB2YXIgZ2V0UG9wdXBFbGVtZW50ID0gZnVuY3Rpb24gZ2V0UG9wdXBFbGVtZW50KCkge1xuICAgIHZhciBfcHJvcHMkYXJyb3dDb250ZW50ID0gcHJvcHMuYXJyb3dDb250ZW50LFxuICAgICAgICBhcnJvd0NvbnRlbnQgPSBfcHJvcHMkYXJyb3dDb250ZW50ID09PSB2b2lkIDAgPyBudWxsIDogX3Byb3BzJGFycm93Q29udGVudCxcbiAgICAgICAgb3ZlcmxheSA9IHByb3BzLm92ZXJsYXksXG4gICAgICAgIGlkID0gcHJvcHMuaWQ7XG4gICAgcmV0dXJuIFtSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgIGNsYXNzTmFtZTogXCJcIi5jb25jYXQocHJlZml4Q2xzLCBcIi1hcnJvd1wiKSxcbiAgICAgIGtleTogXCJhcnJvd1wiXG4gICAgfSwgYXJyb3dDb250ZW50KSwgUmVhY3QuY3JlYXRlRWxlbWVudChDb250ZW50LCB7XG4gICAgICBrZXk6IFwiY29udGVudFwiLFxuICAgICAgcHJlZml4Q2xzOiBwcmVmaXhDbHMsXG4gICAgICBpZDogaWQsXG4gICAgICBvdmVybGF5OiBvdmVybGF5LFxuICAgICAgb3ZlcmxheUlubmVyU3R5bGU6IG92ZXJsYXlJbm5lclN0eWxlXG4gICAgfSldO1xuICB9O1xuXG4gIHZhciBkZXN0cm95VG9vbHRpcCA9IGZhbHNlO1xuICB2YXIgYXV0b0Rlc3Ryb3kgPSBmYWxzZTtcblxuICBpZiAodHlwZW9mIGRlc3Ryb3lUb29sdGlwT25IaWRlID09PSAnYm9vbGVhbicpIHtcbiAgICBkZXN0cm95VG9vbHRpcCA9IGRlc3Ryb3lUb29sdGlwT25IaWRlO1xuICB9IGVsc2UgaWYgKGRlc3Ryb3lUb29sdGlwT25IaWRlICYmIF90eXBlb2YoZGVzdHJveVRvb2x0aXBPbkhpZGUpID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBrZWVwUGFyZW50ID0gZGVzdHJveVRvb2x0aXBPbkhpZGUua2VlcFBhcmVudDtcbiAgICBkZXN0cm95VG9vbHRpcCA9IGtlZXBQYXJlbnQgPT09IHRydWU7XG4gICAgYXV0b0Rlc3Ryb3kgPSBrZWVwUGFyZW50ID09PSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRyaWdnZXIsIE9iamVjdC5hc3NpZ24oe1xuICAgIHBvcHVwQ2xhc3NOYW1lOiBvdmVybGF5Q2xhc3NOYW1lLFxuICAgIHByZWZpeENsczogcHJlZml4Q2xzLFxuICAgIHBvcHVwOiBnZXRQb3B1cEVsZW1lbnQsXG4gICAgYWN0aW9uOiB0cmlnZ2VyLFxuICAgIGJ1aWx0aW5QbGFjZW1lbnRzOiBwbGFjZW1lbnRzLFxuICAgIHBvcHVwUGxhY2VtZW50OiBwbGFjZW1lbnQsXG4gICAgcmVmOiBkb21SZWYsXG4gICAgcG9wdXBBbGlnbjogYWxpZ24sXG4gICAgZ2V0UG9wdXBDb250YWluZXI6IGdldFRvb2x0aXBDb250YWluZXIsXG4gICAgb25Qb3B1cFZpc2libGVDaGFuZ2U6IG9uVmlzaWJsZUNoYW5nZSxcbiAgICBhZnRlclBvcHVwVmlzaWJsZUNoYW5nZTogYWZ0ZXJWaXNpYmxlQ2hhbmdlLFxuICAgIHBvcHVwVHJhbnNpdGlvbk5hbWU6IHRyYW5zaXRpb25OYW1lLFxuICAgIHBvcHVwQW5pbWF0aW9uOiBhbmltYXRpb24sXG4gICAgZGVmYXVsdFBvcHVwVmlzaWJsZTogZGVmYXVsdFZpc2libGUsXG4gICAgZGVzdHJveVBvcHVwT25IaWRlOiBkZXN0cm95VG9vbHRpcCxcbiAgICBhdXRvRGVzdHJveTogYXV0b0Rlc3Ryb3ksXG4gICAgbW91c2VMZWF2ZURlbGF5OiBtb3VzZUxlYXZlRGVsYXksXG4gICAgcG9wdXBTdHlsZTogb3ZlcmxheVN0eWxlLFxuICAgIG1vdXNlRW50ZXJEZWxheTogbW91c2VFbnRlckRlbGF5XG4gIH0sIGV4dHJhUHJvcHMpLCBjaGlsZHJlbik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3J3YXJkUmVmKFRvb2x0aXApOyIsImltcG9ydCBUb29sdGlwIGZyb20gJy4vVG9vbHRpcCc7XG5leHBvcnQgZGVmYXVsdCBUb29sdGlwOyIsInZhciBhdXRvQWRqdXN0T3ZlcmZsb3cgPSB7XG4gIGFkanVzdFg6IDEsXG4gIGFkanVzdFk6IDFcbn07XG52YXIgdGFyZ2V0T2Zmc2V0ID0gWzAsIDBdO1xuZXhwb3J0IHZhciBwbGFjZW1lbnRzID0ge1xuICBsZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2NyJywgJ2NsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFstNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHQ6IHtcbiAgICBwb2ludHM6IFsnY2wnLCAnY3InXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcDoge1xuICAgIHBvaW50czogWydiYycsICd0YyddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbToge1xuICAgIHBvaW50czogWyd0YycsICdiYyddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wTGVmdDoge1xuICAgIHBvaW50czogWydibCcsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGxlZnRUb3A6IHtcbiAgICBwb2ludHM6IFsndHInLCAndGwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3BSaWdodDoge1xuICAgIHBvaW50czogWydicicsICd0ciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgLTRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHJpZ2h0VG9wOiB7XG4gICAgcG9pbnRzOiBbJ3RsJywgJ3RyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFs0LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICBib3R0b21SaWdodDoge1xuICAgIHBvaW50czogWyd0cicsICdiciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHRCb3R0b206IHtcbiAgICBwb2ludHM6IFsnYmwnLCAnYnInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbUxlZnQ6IHtcbiAgICBwb2ludHM6IFsndGwnLCAnYmwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzAsIDRdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGxlZnRCb3R0b206IHtcbiAgICBwb2ludHM6IFsnYnInLCAnYmwnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgcGxhY2VtZW50czsiLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGV4cG9ydHMucGxhY2VtZW50cyA9IHZvaWQgMDtcbnZhciBhdXRvQWRqdXN0T3ZlcmZsb3cgPSB7XG4gIGFkanVzdFg6IDEsXG4gIGFkanVzdFk6IDFcbn07XG52YXIgdGFyZ2V0T2Zmc2V0ID0gWzAsIDBdO1xudmFyIHBsYWNlbWVudHMgPSB7XG4gIGxlZnQ6IHtcbiAgICBwb2ludHM6IFsnY3InLCAnY2wnXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWy00LCAwXSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodDoge1xuICAgIHBvaW50czogWydjbCcsICdjciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgdG9wOiB7XG4gICAgcG9pbnRzOiBbJ2JjJywgJ3RjJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tOiB7XG4gICAgcG9pbnRzOiBbJ3RjJywgJ2JjJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICB0b3BMZWZ0OiB7XG4gICAgcG9pbnRzOiBbJ2JsJywgJ3RsJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgbGVmdFRvcDoge1xuICAgIHBvaW50czogWyd0cicsICd0bCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIHRvcFJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ2JyJywgJ3RyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCAtNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgcmlnaHRUb3A6IHtcbiAgICBwb2ludHM6IFsndGwnLCAndHInXSxcbiAgICBvdmVyZmxvdzogYXV0b0FkanVzdE92ZXJmbG93LFxuICAgIG9mZnNldDogWzQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH0sXG4gIGJvdHRvbVJpZ2h0OiB7XG4gICAgcG9pbnRzOiBbJ3RyJywgJ2JyJ10sXG4gICAgb3ZlcmZsb3c6IGF1dG9BZGp1c3RPdmVyZmxvdyxcbiAgICBvZmZzZXQ6IFswLCA0XSxcbiAgICB0YXJnZXRPZmZzZXQ6IHRhcmdldE9mZnNldFxuICB9LFxuICByaWdodEJvdHRvbToge1xuICAgIHBvaW50czogWydibCcsICdiciddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbNCwgMF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgYm90dG9tTGVmdDoge1xuICAgIHBvaW50czogWyd0bCcsICdibCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbMCwgNF0sXG4gICAgdGFyZ2V0T2Zmc2V0OiB0YXJnZXRPZmZzZXRcbiAgfSxcbiAgbGVmdEJvdHRvbToge1xuICAgIHBvaW50czogWydicicsICdibCddLFxuICAgIG92ZXJmbG93OiBhdXRvQWRqdXN0T3ZlcmZsb3csXG4gICAgb2Zmc2V0OiBbLTQsIDBdLFxuICAgIHRhcmdldE9mZnNldDogdGFyZ2V0T2Zmc2V0XG4gIH1cbn07XG5leHBvcnRzLnBsYWNlbWVudHMgPSBwbGFjZW1lbnRzO1xudmFyIF9kZWZhdWx0ID0gcGxhY2VtZW50cztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0OyIsIlwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdG9BcnJheTtcblxudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcblxudmFyIF9yZWFjdElzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiB0b0FycmF5KGNoaWxkcmVuKSB7XG4gIHZhciByZXQgPSBbXTtcblxuICBfcmVhY3QuZGVmYXVsdC5DaGlsZHJlbi5mb3JFYWNoKGNoaWxkcmVuLCBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICBpZiAoY2hpbGQgPT09IHVuZGVmaW5lZCB8fCBjaGlsZCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KGNoaWxkKSkge1xuICAgICAgcmV0ID0gcmV0LmNvbmNhdCh0b0FycmF5KGNoaWxkKSk7XG4gICAgfSBlbHNlIGlmICgoMCwgX3JlYWN0SXMuaXNGcmFnbWVudCkoY2hpbGQpICYmIGNoaWxkLnByb3BzKSB7XG4gICAgICByZXQgPSByZXQuY29uY2F0KHRvQXJyYXkoY2hpbGQucHJvcHMuY2hpbGRyZW4pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0LnB1c2goY2hpbGQpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIHJldDtcbn0iLCJpbXBvcnQgeyBGb3JtLCBCdXR0b24sIElucHV0LExheW91dCwgTWVudSxDYXJkcyB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7XHJcbiAgTWVudVVuZm9sZE91dGxpbmVkLFxyXG4gIE1lbnVGb2xkT3V0bGluZWQsXHJcbiAgVXNlck91dGxpbmVkLFxyXG4gIFZpZGVvQ2FtZXJhT3V0bGluZWQsXHJcbiAgVXBsb2FkT3V0bGluZWQsXHJcbn0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5jb25zdCBGb3JtSXRlbSA9IEZvcm0uSXRlbTtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgcm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gaG9tZSgpIHtcclxuICBjb25zdCBuZXh0aGFuZGxlID0gKHR5cGUpID0+IHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidHlwZVwiLCB0eXBlKTtcclxuICAgIHJvdXRlci5wdXNoKFwiL3BhZ2Uuc2hvcFwiKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH07XHJcbiAgY29uc3QgW2NvbGxhcHNlZCxzZXRDb2xsYXBzZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Rm9ybUl0ZW0gc3R5bGU9e3sgbWFyZ2luOiBcIjBweFwiIH19PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxTaWRlciB0cmlnZ2VyPXtudWxsfSBjb2xsYXBzaWJsZSBjb2xsYXBzZWQ9e3RoaXMuc3RhdGUuY29sbGFwc2VkfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiIC8+XHJcbiAgICAgICAgICA8TWVudSB0aGVtZT1cImRhcmtcIiBtb2RlPVwiaW5saW5lXCIgZGVmYXVsdFNlbGVjdGVkS2V5cz17WycxJ119PlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIiBpY29uPXs8VXNlck91dGxpbmVkIC8+fT5cclxuICAgICAgICAgICAgICBuYXYgMVxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIyXCIgaWNvbj17PFZpZGVvQ2FtZXJhT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgIG5hdiAyXHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjNcIiBpY29uPXs8VXBsb2FkT3V0bGluZWQgLz59PlxyXG4gICAgICAgICAgICAgIG5hdiAzXHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPC9NZW51PlxyXG4gICAgICAgIDwvU2lkZXI+XHJcbiAgICAgICAgPExheW91dCBjbGFzc05hbWU9XCJzaXRlLWxheW91dFwiPlxyXG4gICAgICAgICAgPEhlYWRlciBjbGFzc05hbWU9XCJzaXRlLWxheW91dC1iYWNrZ3JvdW5kXCIgc3R5bGU9e3sgcGFkZGluZzogMCB9fT5cclxuICAgICAgICAgICAge1JlYWN0LmNyZWF0ZUVsZW1lbnQodGhpcy5zdGF0ZS5jb2xsYXBzZWQgPyBNZW51VW5mb2xkT3V0bGluZWQgOiBNZW51Rm9sZE91dGxpbmVkLCB7XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiAndHJpZ2dlcicsXHJcbiAgICAgICAgICAgICAgb25DbGljazogdGhpcy50b2dnbGUsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9IZWFkZXI+XHJcbiAgICAgICAgICA8Q29udGVudFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLWxheW91dC1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW46ICcyNHB4IDE2cHgnLFxyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDI0LFxyXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogMjgwLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBDb250ZW50XHJcbiAgICAgICAgICA8L0NvbnRlbnQ+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8Q2FyZCBzdHlsZT17eyB3aWR0aDogMzAwLGJvcmRlcjpcIjFweCBzb2xpZCBibGFja1wiICxiYWNrZ3JvdW5kOlwiYmxhY2tcIiB9fT5cclxuICAgICAgICA8YSBocmVmPVwiL3Nob3AvcGFnZS5pbnNlcnRwcm9kdWN0XCI+4LmA4Lie4Li04LmI4Lih4Liq4Li04LiZ4LiE4LmJ4LiyPC9hPjxiciAvPlxyXG4gICAgICAgIDxhPuC5geC4geC5ieC5hOC4guC4quC4tOC4meC4hOC5ieC4sjwvYT48YnIgLz5cclxuICAgICAgPC9DYXJkPlxyXG4gICAgICAsXHJcbiAgICA8L0Zvcm1JdGVtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhvbWU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=