webpackHotUpdate_N_E("pages/index",{

/***/ "./components/control-bar.tsx":
/*!************************************!*\
  !*** ./components/control-bar.tsx ***!
  \************************************/
/*! exports provided: default, ActionButton, DataConfig, DataToggle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ControlBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return ActionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataConfig", function() { return DataConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataToggle", function() { return DataToggle; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_icons_EditSharp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/EditSharp */ "./node_modules/@material-ui/icons/EditSharp.js");
/* harmony import */ var _material_ui_icons_EditSharp__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EditSharp__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_NavigateBeforeSharp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/NavigateBeforeSharp */ "./node_modules/@material-ui/icons/NavigateBeforeSharp.js");
/* harmony import */ var _material_ui_icons_NavigateBeforeSharp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_NavigateBeforeSharp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./control-bar.module.scss */ "./components/control-bar.module.scss");
/* harmony import */ var _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_control_bar_module_scss__WEBPACK_IMPORTED_MODULE_11__);








var _jsxFileName = "C:\\Users\\SpicyRamenChef\\Desktop\\GitRepos\\quadtree-visualizer\\components\\control-bar.tsx",
    _this = undefined;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var ControlNav = function ControlNav(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
    id: _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.top_control,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_icons_NavigateBeforeSharp__WEBPACK_IMPORTED_MODULE_10___default.a, {
      style: {
        fontSize: 50
      },
      onClick: props.hideFunc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("p", {
      children: "SETTINGS"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }, _this);
};

_c = ControlNav;

var ControlBar = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(ControlBar, _Component);

  var _super = _createSuper(ControlBar);

  function ControlBar(props) {
    var _this2;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ControlBar);

    _this2 = _super.call(this, props);
    _this2.state = {
      showing: false
    };
    _this2.handleClick = _this2.handleClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this2));
    return _this2;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ControlBar, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        showing: !this.state.showing
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
        className: _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.control_bar,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.minimized,
          style: {
            transform: "translateX(".concat(this.state.showing ? -100 : 0, "%)")
          },
          onClick: this.handleClick,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_icons_EditSharp__WEBPACK_IMPORTED_MODULE_9___default.a, {
            style: {
              fontSize: 35
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
          className: _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.panel,
          style: {
            transform: "translateX(".concat(this.state.showing ? 0 : -100, "%)")
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(ControlNav, {
            hideFunc: this.handleClick
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            style: {
              margin: 'auto',
              height: 2,
              width: '90%',
              backgroundColor: _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.color2
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("div", {
            id: _control_bar_module_scss__WEBPACK_IMPORTED_MODULE_11___default.a.options,
            children: this.props.children
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }, this);
    }
  }]);

  return ControlBar;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);


function ActionButton(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    onClick: props.onClick,
    size: "medium",
    children: props.label
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
_c2 = ActionButton;
function DataConfig(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])("form", {
    autoComplete: "off",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["TextField"], {
      onChange: props.updateFunc,
      value: props.value,
      label: props.label,
      variant: "filled",
      inputMode: "numeric"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 5
  }, this);
}
_c3 = DataConfig;
function DataToggle(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["FormControlLabel"], {
    control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], {
      checked: props.value === undefined ? true : props.value,
      onChange: props.updateFunc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this),
    label: props.label
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, this);
}
_c4 = DataToggle;

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "ControlNav");
$RefreshReg$(_c2, "ActionButton");
$RefreshReg$(_c3, "DataConfig");
$RefreshReg$(_c4, "DataToggle");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb250cm9sLWJhci50c3giXSwibmFtZXMiOlsiQ29udHJvbE5hdiIsInByb3BzIiwic3R5bGVzIiwidG9wX2NvbnRyb2wiLCJmb250U2l6ZSIsImhpZGVGdW5jIiwiQ29udHJvbEJhciIsInN0YXRlIiwic2hvd2luZyIsImhhbmRsZUNsaWNrIiwiYmluZCIsInNldFN0YXRlIiwiY29udHJvbF9iYXIiLCJtaW5pbWl6ZWQiLCJ0cmFuc2Zvcm0iLCJwYW5lbCIsIm1hcmdpbiIsImhlaWdodCIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IyIiwib3B0aW9ucyIsImNoaWxkcmVuIiwiQ29tcG9uZW50IiwiQWN0aW9uQnV0dG9uIiwib25DbGljayIsImxhYmVsIiwiRGF0YUNvbmZpZyIsInVwZGF0ZUZ1bmMiLCJ2YWx1ZSIsIkRhdGFUb2dnbGUiLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFEO0FBQUEsc0JBQ2pCO0FBQUssTUFBRSxFQUFFQyxnRUFBTSxDQUFDQyxXQUFoQjtBQUFBLDRCQUNFLHFFQUFDLDhFQUFEO0FBQXlCLFdBQUssRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVosT0FBaEM7QUFBa0QsYUFBTyxFQUFFSCxLQUFLLENBQUNJO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGlCO0FBQUEsQ0FBbkI7O0tBQU1MLFU7O0lBU2VNLFU7Ozs7O0FBQ25CLHNCQUFZTCxLQUFaLEVBQTRCO0FBQUE7O0FBQUE7O0FBQzFCLCtCQUFNQSxLQUFOO0FBQ0EsV0FBS00sS0FBTCxHQUFhO0FBQUVDLGFBQU8sRUFBRTtBQUFYLEtBQWI7QUFDQSxXQUFLQyxXQUFMLEdBQW1CLE9BQUtBLFdBQUwsQ0FBaUJDLElBQWpCLDBHQUFuQjtBQUgwQjtBQUkzQjs7OztrQ0FFbUI7QUFDbEIsV0FBS0MsUUFBTCxDQUFjO0FBQUVILGVBQU8sRUFBRSxDQUFDLEtBQUtELEtBQUwsQ0FBV0M7QUFBdkIsT0FBZDtBQUNEOzs7NkJBRXFCO0FBQ3BCLDBCQUNFO0FBQUssaUJBQVMsRUFBRU4sZ0VBQU0sQ0FBQ1UsV0FBdkI7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUVWLGdFQUFNLENBQUNXLFNBRHBCO0FBRUUsZUFBSyxFQUFFO0FBQUVDLHFCQUFTLHVCQUFnQixLQUFLUCxLQUFMLENBQVdDLE9BQVgsR0FBcUIsQ0FBQyxHQUF0QixHQUE0QixDQUE1QztBQUFYLFdBRlQ7QUFHRSxpQkFBTyxFQUFFLEtBQUtDLFdBSGhCO0FBQUEsaUNBSUUscUVBQUMsbUVBQUQ7QUFBZSxpQkFBSyxFQUFFO0FBQUVMLHNCQUFRLEVBQUU7QUFBWjtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU9FO0FBQ0UsbUJBQVMsRUFBRUYsZ0VBQU0sQ0FBQ2EsS0FEcEI7QUFFRSxlQUFLLEVBQUU7QUFBRUQscUJBQVMsdUJBQWdCLEtBQUtQLEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixDQUFyQixHQUF5QixDQUFDLEdBQTFDO0FBQVgsV0FGVDtBQUFBLGtDQUdFLHFFQUFDLFVBQUQ7QUFBWSxvQkFBUSxFQUFFLEtBQUtDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSEYsZUFJRTtBQUFLLGlCQUFLLEVBQUU7QUFBRU8sb0JBQU0sRUFBRSxNQUFWO0FBQWtCQyxvQkFBTSxFQUFFLENBQTFCO0FBQTZCQyxtQkFBSyxFQUFFLEtBQXBDO0FBQTJDQyw2QkFBZSxFQUFFakIsZ0VBQU0sQ0FBQ2tCO0FBQW5FO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKRixlQUtFO0FBQUssY0FBRSxFQUFFbEIsZ0VBQU0sQ0FBQ21CLE9BQWhCO0FBQUEsc0JBQ0csS0FBS3BCLEtBQUwsQ0FBV3FCO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFtQkQ7Ozs7RUEvQnFDQywrQzs7O0FBa0NqQyxTQUFTQyxZQUFULENBQXNCdkIsS0FBdEIsRUFBa0Y7QUFDdkYsc0JBQ0UscUVBQUMsd0RBQUQ7QUFBUSxXQUFPLEVBQUVBLEtBQUssQ0FBQ3dCLE9BQXZCO0FBQWdDLFFBQUksRUFBQyxRQUFyQztBQUFBLGNBQWdEeEIsS0FBSyxDQUFDeUI7QUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0Q7TUFKZUYsWTtBQU1ULFNBQVNHLFVBQVQsQ0FBdUIxQixLQUF2QixFQUEwSjtBQUMvSixzQkFDRTtBQUFNLGdCQUFZLEVBQUMsS0FBbkI7QUFBQSwyQkFDRSxxRUFBQywyREFBRDtBQUFXLGNBQVEsRUFBRUEsS0FBSyxDQUFDMkIsVUFBM0I7QUFBdUMsV0FBSyxFQUFFM0IsS0FBSyxDQUFDNEIsS0FBcEQ7QUFBMkQsV0FBSyxFQUFFNUIsS0FBSyxDQUFDeUIsS0FBeEU7QUFBK0UsYUFBTyxFQUFDLFFBQXZGO0FBQWdHLGVBQVMsRUFBQztBQUExRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7TUFOZUMsVTtBQVFULFNBQVNHLFVBQVQsQ0FBb0I3QixLQUFwQixFQUFxSztBQUMxSyxzQkFDRSxxRUFBQyxrRUFBRDtBQUFrQixXQUFPLGVBQ3ZCLHFFQUFDLDBEQUFEO0FBQVUsYUFBTyxFQUFFQSxLQUFLLENBQUM0QixLQUFOLEtBQWdCRSxTQUFoQixHQUE0QixJQUE1QixHQUFtQzlCLEtBQUssQ0FBQzRCLEtBQTVEO0FBQW1FLGNBQVEsRUFBRTVCLEtBQUssQ0FBQzJCO0FBQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERjtBQUVFLFNBQUssRUFBRTNCLEtBQUssQ0FBQ3lCO0FBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7TUFOZUksVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45ZGVmOTlkOGJhMTllNzg0YTgyNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uLCBDaGVja2JveCwgRm9ybUNvbnRyb2xMYWJlbCwgVGV4dEZpZWxkIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgRWRpdFNoYXJwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdFNoYXJwJ1xuaW1wb3J0IE5hdmlnYXRlQmVmb3JlU2hhcnBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9OYXZpZ2F0ZUJlZm9yZVNoYXJwJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2NvbnRyb2wtYmFyLm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBDb250cm9sTmF2ID0gKHByb3BzOiB7IGhpZGVGdW5jOiAoKSA9PiB2b2lkIH0pOiBKU1guRWxlbWVudCA9PiAoXG4gIDxkaXYgaWQ9e3N0eWxlcy50b3BfY29udHJvbH0+XG4gICAgPE5hdmlnYXRlQmVmb3JlU2hhcnBJY29uIHN0eWxlPXt7IGZvbnRTaXplOiA1MCB9fSBvbkNsaWNrPXtwcm9wcy5oaWRlRnVuY30gLz5cbiAgICA8cD5TRVRUSU5HUzwvcD5cbiAgPC9kaXY+XG4pXG5cbmludGVyZmFjZSBDb250cm9sQmFyU3RhdGUgeyBzaG93aW5nOiBib29sZWFuIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbEJhciBleHRlbmRzIENvbXBvbmVudDx1bmtub3duLCBDb250cm9sQmFyU3RhdGU+IHtcbiAgY29uc3RydWN0b3IocHJvcHM6IHVua25vd24pIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0geyBzaG93aW5nOiBmYWxzZSB9XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKVxuICB9XG5cbiAgaGFuZGxlQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dpbmc6ICF0aGlzLnN0YXRlLnNob3dpbmcgfSlcbiAgfVxuXG4gIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbF9iYXJ9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWluaW1pemVkfVxuICAgICAgICAgIHN0eWxlPXt7IHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoJHt0aGlzLnN0YXRlLnNob3dpbmcgPyAtMTAwIDogMH0lKWAgfX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgICA8RWRpdFNoYXJwSWNvbiBzdHlsZT17eyBmb250U2l6ZTogMzUgfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wYW5lbH1cbiAgICAgICAgICBzdHlsZT17eyB0cmFuc2Zvcm06IGB0cmFuc2xhdGVYKCR7dGhpcy5zdGF0ZS5zaG93aW5nID8gMCA6IC0xMDB9JSlgIH19PlxuICAgICAgICAgIDxDb250cm9sTmF2IGhpZGVGdW5jPXt0aGlzLmhhbmRsZUNsaWNrfSAvPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luOiAnYXV0bycsIGhlaWdodDogMiwgd2lkdGg6ICc5MCUnLCBiYWNrZ3JvdW5kQ29sb3I6IHN0eWxlcy5jb2xvcjIgfX0+PC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD17c3R5bGVzLm9wdGlvbnN9PlxuICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXYgPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQWN0aW9uQnV0dG9uKHByb3BzOiB7IG9uQ2xpY2s6ICgpID0+IHZvaWQsIGxhYmVsOiBzdHJpbmcgfSk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IHNpemU9XCJtZWRpdW1cIiA+e3Byb3BzLmxhYmVsfTwvQnV0dG9uPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBEYXRhQ29uZmlnPFQ+KHByb3BzOiB7IHZhbHVlOiBULCBsYWJlbDogc3RyaW5nLCB1cGRhdGVGdW5jOiAodmFsdWU6IENoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZCB9KTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuICAgICAgPFRleHRGaWVsZCBvbkNoYW5nZT17cHJvcHMudXBkYXRlRnVuY30gdmFsdWU9e3Byb3BzLnZhbHVlfSBsYWJlbD17cHJvcHMubGFiZWx9IHZhcmlhbnQ9XCJmaWxsZWRcIiBpbnB1dE1vZGU9XCJudW1lcmljXCIgLz5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIERhdGFUb2dnbGUocHJvcHM6IHsgdmFsdWU6IGJvb2xlYW4gfCB1bmRlZmluZWQsIGxhYmVsOiBzdHJpbmcsIHVwZGF0ZUZ1bmM6IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQgfSk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRyb2xMYWJlbCBjb250cm9sPXtcbiAgICAgIDxDaGVja2JveCBjaGVja2VkPXtwcm9wcy52YWx1ZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IHByb3BzLnZhbHVlfSBvbkNoYW5nZT17cHJvcHMudXBkYXRlRnVuY30gLz5cbiAgICB9IGxhYmVsPXtwcm9wcy5sYWJlbH0gLz5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==