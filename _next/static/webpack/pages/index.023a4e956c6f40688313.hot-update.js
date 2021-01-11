webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_simulation_canvas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/simulation-canvas */ "./components/simulation-canvas.tsx");
/* harmony import */ var _components_control_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/control-bar */ "./components/control-bar.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils_quadtree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/quadtree */ "./utils/quadtree.ts");








var _jsxFileName = "C:\\Users\\SpicyRamenChef\\Desktop\\GitRepos\\quadtree-visualizer\\pages\\index.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









function ActionButton(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    onClick: props.onClick,
    children: props.label
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

_c = ActionButton;

function DataConfig(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
    autoComplete: "off",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TextField"], {
      onChange: props.updateFunc,
      defaultValue: props.value,
      label: props.label,
      variant: "filled",
      inputMode: "numeric"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_c2 = DataConfig;

function DataToggle(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["FormControlLabel"], {
    control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Checkbox"], {
      checked: props.value,
      onChange: props.updateFunc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this),
    label: props.label
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_c3 = DataToggle;

var Home = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this$simulationCanva;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "simulationCanvasRef", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_8__["createRef"])());

    _this.state = {
      radius: 5,
      count: 1,
      showFPS: true,
      showQuads: true
    };
    (_this$simulationCanva = _this.simulationCanvasRef.current) === null || _this$simulationCanva === void 0 ? void 0 : _this$simulationCanva.updateVars({
      showFPS: _this.state.showFPS,
      showQuads: _this.state.showQuads
    });
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        radius: Math.ceil(Math.min(window.innerWidth / 500, window.innerHeight / 500))
      });

      for (var i = 0; i < 200; i++) {
        var _this$simulationCanva2;

        (_this$simulationCanva2 = this.simulationCanvasRef.current) === null || _this$simulationCanva2 === void 0 ? void 0 : _this$simulationCanva2.addBody(this.state.radius);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
            children: "Quadtree Visualizer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("link", {
            rel: "icon",
            href: "/favicon.ico"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("main", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.simulation_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_simulation_canvas__WEBPACK_IMPORTED_MODULE_11__["default"], {
              ref: this.simulationCanvasRef,
              spawnRadius: this.state.radius
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataConfig, {
                label: "Node Capacity",
                value: _utils_quadtree__WEBPACK_IMPORTED_MODULE_14__["QuadTree"].capacity,
                updateFunc: function updateFunc(value) {
                  var _this2$simulationCanv;

                  return (_this2$simulationCanv = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv === void 0 ? void 0 : _this2$simulationCanv.updateVars({
                    capacity: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataConfig, {
                label: "Maxmimum Tree Depth",
                value: _utils_quadtree__WEBPACK_IMPORTED_MODULE_14__["QuadTree"].maxDepth,
                updateFunc: function updateFunc(value) {
                  var _this2$simulationCanv2;

                  return (_this2$simulationCanv2 = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv2 === void 0 ? void 0 : _this2$simulationCanv2.updateVars({
                    maxDepth: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataConfig, {
                label: "Radius",
                value: this.state.radius,
                updateFunc: function updateFunc(value) {
                  return _this2.setState({
                    radius: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataConfig, {
                label: "Spawn Count",
                value: this.state.count,
                updateFunc: function updateFunc(value) {
                  return _this2.setState({
                    count: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ActionButton, {
                label: "Create Bodies",
                onClick: function onClick() {
                  for (var i = 0; i < _this2.state.count; i++) {
                    var _this2$simulationCanv3;

                    (_this2$simulationCanv3 = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv3 === void 0 ? void 0 : _this2$simulationCanv3.addBody(_this2.state.radius);
                  }
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ActionButton, {
                label: "Clear Bodies",
                onClick: function onClick() {
                  var _this2$simulationCanv4;

                  return (_this2$simulationCanv4 = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv4 === void 0 ? void 0 : _this2$simulationCanv4.clearBodies();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataToggle, {
                label: "Show FPS",
                value: this.state.showFPS,
                updateFunc: function updateFunc(_, checked) {
                  var _this2$simulationCanv5;

                  _this2.setState({
                    showFPS: checked
                  });

                  (_this2$simulationCanv5 = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv5 === void 0 ? void 0 : _this2$simulationCanv5.updateVars({
                    showFPS: checked
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataToggle, {
                label: "Show Quads",
                value: this.state.showQuads,
                updateFunc: function updateFunc(_, checked) {
                  var _this2$simulationCanv6;

                  _this2.setState({
                    showQuads: checked
                  });

                  (_this2$simulationCanv6 = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv6 === void 0 ? void 0 : _this2$simulationCanv6.updateVars({
                    showQuads: checked
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }, this);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



var _c, _c2, _c3;

$RefreshReg$(_c, "ActionButton");
$RefreshReg$(_c2, "DataConfig");
$RefreshReg$(_c3, "DataToggle");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkFjdGlvbkJ1dHRvbiIsInByb3BzIiwib25DbGljayIsImxhYmVsIiwiRGF0YUNvbmZpZyIsInVwZGF0ZUZ1bmMiLCJ2YWx1ZSIsIkRhdGFUb2dnbGUiLCJIb21lIiwiY3JlYXRlUmVmIiwic3RhdGUiLCJyYWRpdXMiLCJjb3VudCIsInNob3dGUFMiLCJzaG93UXVhZHMiLCJzaW11bGF0aW9uQ2FudmFzUmVmIiwiY3VycmVudCIsInVwZGF0ZVZhcnMiLCJzZXRTdGF0ZSIsIk1hdGgiLCJjZWlsIiwibWluIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiaSIsImFkZEJvZHkiLCJzdHlsZXMiLCJzaW11bGF0aW9uX2NvbnRhaW5lciIsIlF1YWRUcmVlIiwiY2FwYWNpdHkiLCJ0YXJnZXQiLCJtYXhEZXB0aCIsImNsZWFyQm9kaWVzIiwiXyIsImNoZWNrZWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQWtGO0FBQ2hGLHNCQUNFLHFFQUFDLHlEQUFEO0FBQVEsV0FBTyxFQUFFQSxLQUFLLENBQUNDLE9BQXZCO0FBQUEsY0FBaUNELEtBQUssQ0FBQ0U7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0Q7O0tBSlFILFk7O0FBTVQsU0FBU0ksVUFBVCxDQUF1QkgsS0FBdkIsRUFBMEo7QUFDeEosc0JBQ0U7QUFBTSxnQkFBWSxFQUFDLEtBQW5CO0FBQUEsMkJBQ0UscUVBQUMsNERBQUQ7QUFBVyxjQUFRLEVBQUVBLEtBQUssQ0FBQ0ksVUFBM0I7QUFBdUMsa0JBQVksRUFBRUosS0FBSyxDQUFDSyxLQUEzRDtBQUFrRSxXQUFLLEVBQUVMLEtBQUss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QUE7QUFBQTtBQUFBO0FBQUEsb0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQWdDRDs7OztFQTlDK0JDLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjAyM2E0ZTk1NmM2ZjQwNjg4MzEzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VFdmVudCwgQ29tcG9uZW50LCBjcmVhdGVSZWYsIFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcbmltcG9ydCBTaW11bGF0aW9uQ2FudmFzIGZyb20gJy4uL2NvbXBvbmVudHMvc2ltdWxhdGlvbi1jYW52YXMnXG5pbXBvcnQgQ29udHJvbEJhciBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRyb2wtYmFyJ1xuaW1wb3J0IHsgVGV4dEZpZWxkLCBCdXR0b24sIENoZWNrYm94LCBGb3JtQ29udHJvbExhYmVsIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXG5pbXBvcnQgeyBRdWFkVHJlZSB9IGZyb20gJy4uL3V0aWxzL3F1YWR0cmVlJ1xuXG5mdW5jdGlvbiBBY3Rpb25CdXR0b24ocHJvcHM6IHsgb25DbGljazogKCkgPT4gdm9pZCwgbGFiZWw6IHN0cmluZyB9KTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxCdXR0b24gb25DbGljaz17cHJvcHMub25DbGlja30+e3Byb3BzLmxhYmVsfTwvQnV0dG9uPlxuICApXG59XG5cbmZ1bmN0aW9uIERhdGFDb25maWc8VD4ocHJvcHM6IHsgdmFsdWU6IFQsIGxhYmVsOiBzdHJpbmcsIHVwZGF0ZUZ1bmM6ICh2YWx1ZTogQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB2b2lkIH0pOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPGZvcm0gYXV0b0NvbXBsZXRlPVwib2ZmXCI+XG4gICAgICA8VGV4dEZpZWxkIG9uQ2hhbmdlPXtwcm9wcy51cGRhdGVGdW5jfSBkZWZhdWx0VmFsdWU9e3Byb3BzLnZhbHVlfSBsYWJlbD17cHJvcHMubGFiZWx9IHZhcmlhbnQ9XCJmaWxsZWRcIiBpbnB1dE1vZGU9XCJudW1lcmljXCIgLz5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuZnVuY3Rpb24gRGF0YVRvZ2dsZShwcm9wczogeyB2YWx1ZTogYm9vbGVhbiwgbGFiZWw6IHN0cmluZywgdXBkYXRlRnVuYzogKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PiwgY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZCB9KTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udHJvbExhYmVsIGNvbnRyb2w9e1xuICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e3Byb3BzLnZhbHVlfSBvbkNoYW5nZT17cHJvcHMudXBkYXRlRnVuY30gLz5cbiAgICB9IGxhYmVsPXtwcm9wcy5sYWJlbH0gLz5cbiAgKVxufVxuXG5pbnRlcmZhY2UgU3RhdGVGaWVsZHMgeyByYWRpdXM6IG51bWJlciwgY291bnQ6IG51bWJlciwgc2hvd0ZQUzogYm9vbGVhbiwgc2hvd1F1YWRzOiBib29sZWFuIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudDx1bmtub3duLCBTdGF0ZUZpZWxkcz4ge1xuICBwcml2YXRlIHNpbXVsYXRpb25DYW52YXNSZWY6IFJlZk9iamVjdDxTaW11bGF0aW9uQ2FudmFzPiA9IGNyZWF0ZVJlZigpXG4gIGNvbnN0cnVjdG9yKHByb3BzOiB1bmtub3duKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHsgcmFkaXVzOiA1LCBjb3VudDogMSwgc2hvd0ZQUzogdHJ1ZSwgc2hvd1F1YWRzOiB0cnVlIH1cbiAgICB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8udXBkYXRlVmFycyh7IHNob3dGUFM6IHRoaXMuc3RhdGUuc2hvd0ZQUywgc2hvd1F1YWRzOiB0aGlzLnN0YXRlLnNob3dRdWFkcyB9KVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0U3RhdGUoeyByYWRpdXM6IE1hdGguY2VpbChNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCAvIDUwMCwgd2luZG93LmlubmVySGVpZ2h0IC8gNTAwKSkgfSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwMDsgaSsrKVxuICAgICAgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LmFkZEJvZHkodGhpcy5zdGF0ZS5yYWRpdXMpXG4gIH1cblxuICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+UXVhZHRyZWUgVmlzdWFsaXplcjwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaW11bGF0aW9uX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8U2ltdWxhdGlvbkNhbnZhcyByZWY9e3RoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZn0gc3Bhd25SYWRpdXM9e3RoaXMuc3RhdGUucmFkaXVzfSAvPlxuICAgICAgICAgICAgPENvbnRyb2xCYXI+XG4gICAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiTm9kZSBDYXBhY2l0eVwiIHZhbHVlPXtRdWFkVHJlZS5jYXBhY2l0eX1cbiAgICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py51cGRhdGVWYXJzKHsgY2FwYWNpdHk6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiTWF4bWltdW0gVHJlZSBEZXB0aFwiIHZhbHVlPXtRdWFkVHJlZS5tYXhEZXB0aH1cbiAgICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py51cGRhdGVWYXJzKHsgbWF4RGVwdGg6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiUmFkaXVzXCIgdmFsdWU9e3RoaXMuc3RhdGUucmFkaXVzfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHJhZGl1czogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJTcGF3biBDb3VudFwiIHZhbHVlPXt0aGlzLnN0YXRlLmNvdW50fVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvdW50OiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICA8QWN0aW9uQnV0dG9uIGxhYmVsPVwiQ3JlYXRlIEJvZGllc1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuY291bnQ7IGkrKykgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LmFkZEJvZHkodGhpcy5zdGF0ZS5yYWRpdXMpIH19IC8+XG4gICAgICAgICAgICAgIDxBY3Rpb25CdXR0b24gbGFiZWw9XCJDbGVhciBCb2RpZXNcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py5jbGVhckJvZGllcygpfSAvPlxuICAgICAgICAgICAgICA8RGF0YVRvZ2dsZSBsYWJlbD1cIlNob3cgRlBTXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2hvd0ZQU31cbiAgICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsoXywgY2hlY2tlZCkgPT4geyB0aGlzLnNldFN0YXRlKHsgc2hvd0ZQUzogY2hlY2tlZCB9KTsgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LnVwZGF0ZVZhcnMoeyBzaG93RlBTOiBjaGVja2VkIH0pIH19IC8+XG4gICAgICAgICAgICAgIDxEYXRhVG9nZ2xlIGxhYmVsPVwiU2hvdyBRdWFkc1wiIHZhbHVlPXt0aGlzLnN0YXRlLnNob3dRdWFkc31cbiAgICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsoXywgY2hlY2tlZCkgPT4geyB0aGlzLnNldFN0YXRlKHsgc2hvd1F1YWRzOiBjaGVja2VkIH0pOyB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8udXBkYXRlVmFycyh7IHNob3dRdWFkczogY2hlY2tlZCB9KSB9fSAvPlxuICAgICAgICAgICAgPC9Db250cm9sQmFyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=