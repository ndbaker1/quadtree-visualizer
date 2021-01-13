webpackHotUpdate_N_E("pages/index",{

/***/ "./components/control-bar.tsx":
/*!************************************!*\
  !*** ./components/control-bar.tsx ***!
  \************************************/
/*! exports provided: default, SectionTitle, DataSlider, ActionButton, DataConfig, DataToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ControlBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionTitle", function() { return SectionTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataSlider", function() { return DataSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return ActionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataConfig", function() { return DataConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataToggle", function() { return DataToggle; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons */ "./node_modules/@material-ui/icons/esm/index.js");
/* harmony import */ var _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./control-bar.module.scss */ "./components/control-bar.module.scss");
/* harmony import */ var _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_control_bar_module_scss__WEBPACK_IMPORTED_MODULE_10__);








var _jsxFileName = "C:\\Users\\SpicyRamenChef\\Desktop\\GitRepos\\quadtree-visualizer\\components\\control-bar.tsx",
    _this2 = undefined;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





/**
 * Component for the Navigation Tab and Menu for Controlling Varialbes
 */

var ControlBar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ControlBar, _Component);

  var _super = _createSuper(ControlBar);

  function ControlBar(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ControlBar);

    _this = _super.call(this, props);
    _this.state = {
      showing: false
    };
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ControlBar, [{
    key: "setShowing",
    value: function setShowing(show) {
      this.setState({
        showing: show
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        showing: !this.state.showing
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.control_bar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.minimized,
          style: {
            transform: "translateX(".concat(this.state.showing ? -100 : 0, "%)")
          },
          onClick: this.handleClick,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["EditSharp"], {
            style: {
              fontSize: 35
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.panel,
          style: {
            transform: "translateX(".concat(this.state.showing ? 0 : -100, "%)")
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ControlNav, {
            hideFunc: this.handleClick
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            style: {
              margin: 'auto',
              height: 2,
              width: '90%',
              backgroundColor: _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.color2
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            id: _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.options,
            children: this.props.children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(UIInfo, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }, this);
    }
  }]);

  return ControlBar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]); // Header of control Nav




var ControlNav = function ControlNav(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    id: _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.top_control,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons__WEBPACK_IMPORTED_MODULE_9__["NavigateBeforeSharp"], {
      style: {
        fontSize: 50
      },
      onClick: props.hideFunc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }, _this2), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "SETTINGS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 5
    }, _this2)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 3
  }, _this2);
}; // small text at bottom of popout


_c = ControlNav;

var UIInfo = function UIInfo() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    style: {
      textAlign: 'center',
      fontSize: '0.8rem'
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("i", {
      children: "Click and Drag to Launch a New Body"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 92
    }, _this2)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 35
  }, _this2);
}; // Titles for sections of configurable variables


_c2 = UIInfo;
function SectionTitle(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.section_header,
    children: props.title.toUpperCase()
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 10
  }, this);
} // Slider for variables

_c3 = SectionTitle;
function DataSlider(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.data_title,
      children: ["Restitution Constant", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 62
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
        children: props.value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 68
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Slider"], {
      style: {
        width: '80%'
      },
      value: props.value,
      onChange: function onChange(_, value) {
        return props.updateFunc(typeof value === 'number' ? value : 0);
      },
      step: 0.01,
      min: 0,
      max: 1
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 5
  }, this);
} // button with callback

_c4 = DataSlider;
function ActionButton(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    onClick: props.onClick,
    size: "medium",
    children: props.label
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 85,
    columnNumber: 5
  }, this);
} // Text-editable config variables

_c5 = ActionButton;
function DataConfig(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    autoComplete: "off",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
      onChange: props.updateFunc,
      value: props.value,
      label: props.label,
      variant: "filled",
      inputMode: "numeric"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 92,
    columnNumber: 5
  }, this);
} // toggled config variables

_c6 = DataConfig;
function DataToggle(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControlLabel"], {
    control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], {
      checked: props.value === undefined ? true : props.value,
      onChange: props.updateFunc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this),
    label: props.label,
    style: {
      marginLeft: 10,
      marginRight: 'auto'
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 101,
    columnNumber: 5
  }, this);
}
_c7 = DataToggle;

var _c, _c2, _c3, _c4, _c5, _c6, _c7;

$RefreshReg$(_c, "ControlNav");
$RefreshReg$(_c2, "UIInfo");
$RefreshReg$(_c3, "SectionTitle");
$RefreshReg$(_c4, "DataSlider");
$RefreshReg$(_c5, "ActionButton");
$RefreshReg$(_c6, "DataConfig");
$RefreshReg$(_c7, "DataToggle");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250cm9sLWJhci50c3giXSwibmFtZXMiOlsiQ29udHJvbEJhciIsInByb3BzIiwic3RhdGUiLCJzaG93aW5nIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwic2hvdyIsInNldFN0YXRlIiwic3R5bGVzIiwiY29udHJvbF9iYXIiLCJtaW5pbWl6ZWQiLCJ0cmFuc2Zvcm0iLCJmb250U2l6ZSIsInBhbmVsIiwibWFyZ2luIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvcjIiLCJvcHRpb25zIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiLCJDb250cm9sTmF2IiwidG9wX2NvbnRyb2wiLCJoaWRlRnVuYyIsIlVJSW5mbyIsInRleHRBbGlnbiIsIlNlY3Rpb25UaXRsZSIsInNlY3Rpb25faGVhZGVyIiwidGl0bGUiLCJ0b1VwcGVyQ2FzZSIsIkRhdGFTbGlkZXIiLCJkYXRhX3RpdGxlIiwidmFsdWUiLCJfIiwidXBkYXRlRnVuYyIsIkFjdGlvbkJ1dHRvbiIsIm9uQ2xpY2siLCJsYWJlbCIsIkRhdGFDb25maWciLCJEYXRhVG9nZ2xlIiwidW5kZWZpbmVkIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0lBQ3FCQSxVOzs7OztBQUNuQixzQkFBWUMsS0FBWixFQUE0QjtBQUFBOztBQUFBOztBQUMxQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxhQUFPLEVBQUU7QUFBWCxLQUFiO0FBQ0EsVUFBS0MsV0FBTCxHQUFtQixNQUFLQSxXQUFMLENBQWlCQyxJQUFqQix5R0FBbkI7QUFIMEI7QUFJM0I7Ozs7K0JBRWlCQyxJLEVBQXFCO0FBQ3JDLFdBQUtDLFFBQUwsQ0FBYztBQUFFSixlQUFPLEVB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cEQ7QUFBMkQsV0FBSyxFQUFFaEMsS0FBSyxDQUFDcUMsS0FBeEU7QUFBK0UsYUFBTyxFQUFDLFFBQXZGO0FBQWdHLGVBQVMsRUFBQztBQUExRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0QsQyxDQUVEOztNQVJnQkMsVTtBQVNULFNBQVNDLFVBQVQsQ0FBb0J2QyxLQUFwQixFQUFxSztBQUMxSyxzQkFDRSxxRUFBQyxrRUFBRDtBQUFrQixXQUFPLGVBQ3ZCLHFFQUFDLDBEQUFEO0FBQVUsYUFBTyxFQUFFQSxLQUFLLENBQUNnQyxLQUFOLEtBQWdCUSxTQUFoQixHQUE0QixJQUE1QixHQUFtQ3hDLEtBQUssQ0FBQ2dDLEtBQTVEO0FBQW1FLGNBQVEsRUFBRWhDLEtBQUssQ0FBQ2tDO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUVFLFNBQUssRUFBRWxDLEtBQUssQ0FBQ3FDLEtBRmY7QUFFc0IsU0FBSyxFQUFFO0FBQUVJLGdCQUFVLEVBQUUsRUFBZDtBQUFrQkMsaUJBQVcsRUFBRTtBQUEvQjtBQUY3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDtNQU5lSCxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVkYTEwMzIzMDhjOTc0OGUwZDU5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VFdmVudCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IEJ1dHRvbiwgQ2hlY2tib3gsIEZvcm1Db250cm9sTGFiZWwsIFNsaWRlciwgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBFZGl0U2hhcnAsIE5hdmlnYXRlQmVmb3JlU2hhcnAgfSBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jb250cm9sLWJhci5tb2R1bGUuc2NzcydcblxuLyoqXG4gKiBDb21wb25lbnQgZm9yIHRoZSBOYXZpZ2F0aW9uIFRhYiBhbmQgTWVudSBmb3IgQ29udHJvbGxpbmcgVmFyaWFsYmVzXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xCYXIgZXh0ZW5kcyBDb21wb25lbnQ8dW5rbm93biwgeyBzaG93aW5nOiBib29sZWFuIH0+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IHVua25vd24pIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyBzaG93aW5nOiBmYWxzZSB9XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxuICB9XG5cbiAgcHVibGljIHNldFNob3dpbmcoc2hvdzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93aW5nOiBzaG93IH0pXG4gIH1cblxuICBoYW5kbGVDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2hvd2luZzogIXRoaXMuc3RhdGUuc2hvd2luZyB9KVxuICB9XG5cbiAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250cm9sX2Jhcn0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5taW5pbWl6ZWR9XG4gICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RoaXMuc3RhdGUuc2hvd2luZyA/IC0xMDAgOiAwfSUpYCB9fVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICAgIDxFZGl0U2hhcnAgc3R5bGU9e3sgZm9udFNpemU6IDM1IH19IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucGFuZWx9XG4gICAgICAgICAgc3R5bGU9e3sgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWCgke3RoaXMuc3RhdGUuc2hvd2luZyA/IDAgOiAtMTAwfSUpYCB9fT5cbiAgICAgICAgICA8Q29udHJvbE5hdiBoaWRlRnVuYz17dGhpcy5oYW5kbGVDbGlja30gLz5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbjogJ2F1dG8nLCBoZWlnaHQ6IDIsIHdpZHRoOiAnOTAlJywgYmFja2dyb3VuZENvbG9yOiBzdHlsZXMuY29sb3IyIH19PjwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5vcHRpb25zfT5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxVSUluZm8gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuLy8gSGVhZGVyIG9mIGNvbnRyb2wgTmF2XG5jb25zdCBDb250cm9sTmF2ID0gKHByb3BzOiB7IGhpZGVGdW5jOiAoKSA9PiB2b2lkIH0pOiBKU1guRWxlbWVudCA9PiAoXG4gIDxkaXYgaWQ9e3N0eWxlcy50b3BfY29udHJvbH0+XG4gICAgPE5hdmlnYXRlQmVmb3JlU2hhcnAgc3R5bGU9e3sgZm9udFNpemU6IDUwIH19IG9uQ2xpY2s9e3Byb3BzLmhpZGVGdW5jfSAvPlxuICAgIDxwPlNFVFRJTkdTPC9wPlxuICA8L2Rpdj5cbilcblxuLy8gc21hbGwgdGV4dCBhdCBib3R0b20gb2YgcG9wb3V0XG5jb25zdCBVSUluZm8gPSAoKTogSlNYLkVsZW1lbnQgPT4gPGRpdiBzdHlsZT17eyB0ZXh0QWxpZ246ICdjZW50ZXInLCBmb250U2l6ZTogJzAuOHJlbScgfX0+PGk+Q2xpY2sgYW5kIERyYWcgdG8gTGF1bmNoIGEgTmV3IEJvZHk8L2k+PC9kaXY+XG5cbi8vIFRpdGxlcyBmb3Igc2VjdGlvbnMgb2YgY29uZmlndXJhYmxlIHZhcmlhYmxlc1xuZXhwb3J0IGZ1bmN0aW9uIFNlY3Rpb25UaXRsZShwcm9wczogeyB0aXRsZTogc3RyaW5nIH0pOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25faGVhZGVyfT57cHJvcHMudGl0bGUudG9VcHBlckNhc2UoKX08L2Rpdj5cbn1cblxuLy8gU2xpZGVyIGZvciB2YXJpYWJsZXNcbmV4cG9ydCBmdW5jdGlvbiBEYXRhU2xpZGVyKHByb3BzOiB7IHZhbHVlOiBudW1iZXIsIHVwZGF0ZUZ1bmM6ICh2YWx1ZTogbnVtYmVyKSA9PiB2b2lkLCBsYWJlbDogc3RyaW5nIH0pOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0YV90aXRsZX0+UmVzdGl0dXRpb24gQ29uc3RhbnQ8YnIgLz48Yj57cHJvcHMudmFsdWV9PC9iPjwvZGl2PlxuICAgICAgPFNsaWRlciBzdHlsZT17eyB3aWR0aDogJzgwJScgfX1cbiAgICAgICAgdmFsdWU9e3Byb3BzLnZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KF8sIHZhbHVlOiBudW1iZXIgfCBudW1iZXJbXSkgPT4gcHJvcHMudXBkYXRlRnVuYyh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInID8gdmFsdWUgOiAwKX1cbiAgICAgICAgc3RlcD17MC4wMX1cbiAgICAgICAgbWluPXswfVxuICAgICAgICBtYXg9ezF9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vIGJ1dHRvbiB3aXRoIGNhbGxiYWNrXG5leHBvcnQgZnVuY3Rpb24gQWN0aW9uQnV0dG9uKHByb3BzOiB7IG9uQ2xpY2s6ICgpID0+IHZvaWQsIGxhYmVsOiBzdHJpbmcgfSk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IHNpemU9XCJtZWRpdW1cIiA+e3Byb3BzLmxhYmVsfTwvQnV0dG9uPlxuICApXG59XG5cbi8vIFRleHQtZWRpdGFibGUgY29uZmlnIHZhcmlhYmxlc1xuZXhwb3J0IGZ1bmN0aW9uIERhdGFDb25maWc8VD4ocHJvcHM6IHsgdmFsdWU6IFQsIGxhYmVsOiBzdHJpbmcsIHVwZGF0ZUZ1bmM6ICh2YWx1ZTogQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkIH0pOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICA8VGV4dEZpZWxkIG9uQ2hhbmdlPXtwcm9wcy51cGRhdGVGdW5jfSB2YWx1ZT17cHJvcHMudmFsdWV9IGxhYmVsPXtwcm9wcy5sYWJlbH0gdmFyaWFudD1cImZpbGxlZFwiIGlucHV0TW9kZT1cIm51bWVyaWNcIiAvPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG4vLyB0b2dnbGVkIGNvbmZpZyB2YXJpYWJsZXNcbmV4cG9ydCBmdW5jdGlvbiBEYXRhVG9nZ2xlKHByb3BzOiB7IHZhbHVlOiBib29sZWFuIHwgdW5kZWZpbmVkLCBsYWJlbDogc3RyaW5nLCB1cGRhdGVGdW5jOiAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkIH0pOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEZvcm1Db250cm9sTGFiZWwgY29udHJvbD17XG4gICAgICA8Q2hlY2tib3ggY2hlY2tlZD17cHJvcHMudmFsdWUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBwcm9wcy52YWx1ZX0gb25DaGFuZ2U9e3Byb3BzLnVwZGF0ZUZ1bmN9IC8+XG4gICAgfSBsYWJlbD17cHJvcHMubGFiZWx9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDEwLCBtYXJnaW5SaWdodDogJ2F1dG8nIH19IC8+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=