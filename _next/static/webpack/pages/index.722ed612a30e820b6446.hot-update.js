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
      value: props.value,
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
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "simulationCanvasRef", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_8__["createRef"])());

    _this.state = {
      radius: 10,
      count: 1,
      showFPS: true,
      showQuads: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$simulationCanva,
          _this2 = this;

      // attempt to sync simulation vars with container flags
      (_this$simulationCanva = this.simulationCanvasRef.current) === null || _this$simulationCanva === void 0 ? void 0 : _this$simulationCanva.updateVars({
        showFPS: this.state.showFPS,
        showQuads: this.state.showQuads
      }); // calculate a radius that is relatively the same retio for all windows

      var radius = Math.ceil(Math.min(window.innerWidth / 500, window.innerHeight / 500));
      this.setState({
        radius: radius,
        count: 200
      }, function () {
        for (var i = 0; i < _this2.state.count; i++) {
          var _this2$simulationCanv;

          (_this2$simulationCanv = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv === void 0 ? void 0 : _this2$simulationCanv.addBody(_this2.state.radius);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
            children: "Quadtree Visualizer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("link", {
            rel: "icon",
            href: "/favicon.ico"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("main", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.simulation_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_simulation_canvas__WEBPACK_IMPORTED_MODULE_11__["default"], {
              ref: this.simulationCanvasRef,
              spawnRadius: this.state.radius
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataConfig, {
                label: "Node Capacity",
                value: _utils_quadtree__WEBPACK_IMPORTED_MODULE_14__["QuadTree"].capacity,
                updateFunc: function updateFunc(value) {
                  var _this3$simulationCanv;

                  return (_this3$simulationCanv = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv === void 0 ? void 0 : _this3$simulationCanv.updateVars({
                    capacity: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataConfig, {
                label: "Maxmimum Tree Depth",
                value: _utils_quadtree__WEBPACK_IMPORTED_MODULE_14__["QuadTree"].maxDepth,
                updateFunc: function updateFunc(value) {
                  var _this3$simulationCanv2;

                  return (_this3$simulationCanv2 = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv2 === void 0 ? void 0 : _this3$simulationCanv2.updateVars({
                    maxDepth: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataConfig, {
                label: "Radius",
                value: this.state.radius,
                updateFunc: function updateFunc(value) {
                  return _this3.setState({
                    radius: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataConfig, {
                label: "Spawn Count",
                value: this.state.count,
                updateFunc: function updateFunc(value) {
                  return _this3.setState({
                    count: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ActionButton, {
                label: "Create Bodies",
                onClick: function onClick() {
                  for (var i = 0; i < _this3.state.count; i++) {
                    var _this3$simulationCanv3;

                    (_this3$simulationCanv3 = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv3 === void 0 ? void 0 : _this3$simulationCanv3.addBody(_this3.state.radius);
                  }
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ActionButton, {
                label: "Clear Bodies",
                onClick: function onClick() {
                  var _this3$simulationCanv4;

                  return (_this3$simulationCanv4 = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv4 === void 0 ? void 0 : _this3$simulationCanv4.clearBodies();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataToggle, {
                label: "Show FPS",
                value: this.state.showFPS,
                updateFunc: function updateFunc(_, checked) {
                  var _this3$simulationCanv5;

                  _this3.setState({
                    showFPS: checked
                  });

                  (_this3$simulationCanv5 = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv5 === void 0 ? void 0 : _this3$simulationCanv5.updateVars({
                    showFPS: checked
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataToggle, {
                label: "Show Quads",
                value: this.state.showQuads,
                updateFunc: function updateFunc(_, checked) {
                  var _this3$simulationCanv6;

                  _this3.setState({
                    showQuads: checked
                  });

                  (_this3$simulationCanv6 = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv6 === void 0 ? void 0 : _this3$simulationCanv6.updateVars({
                    showQuads: checked
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkFjdGlvbkJ1dHRvbiIsInByb3BzIiwib25DbGljayIsImxhYmVsIiwiRGF0YUNvbmZpZyIsInVwZGF0ZUZ1bmMiLCJ2YWx1ZSIsIkRhdGFUb2dnbGUiLCJIb21lIiwiY3JlYXRlUmVmIiwic3RhdGUiLCJyYWRpdXMiLCJjb3VudCIsInNob3dGUFMiLCJzaG93UXVhZHMiLCJzaW11bGF0aW9uQ2FudmFzUmVmIiwiY3VycmVudCIsInVwZGF0ZVZhcnMiLCJNYXRoIiwiY2VpbCIsIm1pbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNldFN0YXRlIiwiaSIsImFkZEJvZHkiLCJzdHlsZXMiLCJzaW11bGF0aW9uX2NvbnRhaW5lciIsIlF1YWRUcmVlIiwiY2FwYWNpdHkiLCJ0YXJnZXQiLCJtYXhEZXB0aCIsImNsZWFyQm9kaWVzIiwiXyIsImNoZWNrZWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQWtGO0FBQ2hGLHNCQUNFLHFFQUFDLHlEQUFEO0FBQVEsV0FBTyxFQUFFQSxLQUFLLENBQUNDLE9BQXZCO0FBQUEsY0FBaUNELEtBQUssQ0FBQ0U7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0Q7O0tBSlFILFk7O0FBTVQsU0FBU0ksVUFBVCxDQUF1QkgsS0FBdkIsRUFBMEo7QUFDeEosc0JBQ0U7QUFBTSxnQkFBWSxFQUFDLEtBQW5CO0FBQUEsMkJBQ0UscUVBQUMsNERBQUQ7QUFBVyxjQUFRLEVBQUVBLEtBQUssQ0FBQ0ksVUFBM0I7QUFBdUMsV0FBSyxFQUFFSixLQUFLLENBQUNLLEtBQXBEO0FBQTJELFdBQUssRUFBRUwsS0FBSyxD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QUFDcEIsbUJBQUwsQ0FBeUJDLE9BQXpCLGtGQUFrQ0MsVUFBbEMsQ0FBNkM7QUFBRUgsNkJBQVMsRUFBRXFCO0FBQWIsbUJBQTdDO0FBQXNFO0FBRDdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFnQ0Q7Ozs7RUF6RCtCQywrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MjJlZDYxMmEzMGU4MjBiNjQ0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIENvbXBvbmVudCwgY3JlYXRlUmVmLCBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXG5pbXBvcnQgU2ltdWxhdGlvbkNhbnZhcyBmcm9tICcuLi9jb21wb25lbnRzL3NpbXVsYXRpb24tY2FudmFzJ1xuaW1wb3J0IENvbnRyb2xCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250cm9sLWJhcidcbmltcG9ydCB7IFRleHRGaWVsZCwgQnV0dG9uLCBDaGVja2JveCwgRm9ybUNvbnRyb2xMYWJlbCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgUXVhZFRyZWUgfSBmcm9tICcuLi91dGlscy9xdWFkdHJlZSdcblxuZnVuY3Rpb24gQWN0aW9uQnV0dG9uKHByb3BzOiB7IG9uQ2xpY2s6ICgpID0+IHZvaWQsIGxhYmVsOiBzdHJpbmcgfSk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9Pntwcm9wcy5sYWJlbH08L0J1dHRvbj5cbiAgKVxufVxuXG5mdW5jdGlvbiBEYXRhQ29uZmlnPFQ+KHByb3BzOiB7IHZhbHVlOiBULCBsYWJlbDogc3RyaW5nLCB1cGRhdGVGdW5jOiAodmFsdWU6IENoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZCB9KTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuICAgICAgPFRleHRGaWVsZCBvbkNoYW5nZT17cHJvcHMudXBkYXRlRnVuY30gdmFsdWU9e3Byb3BzLnZhbHVlfSBsYWJlbD17cHJvcHMubGFiZWx9IHZhcmlhbnQ9XCJmaWxsZWRcIiBpbnB1dE1vZGU9XCJudW1lcmljXCIgLz5cbiAgICA8L2Zvcm0+XG4gIClcbn1cblxuZnVuY3Rpb24gRGF0YVRvZ2dsZShwcm9wczogeyB2YWx1ZTogYm9vbGVhbiwgbGFiZWw6IHN0cmluZywgdXBkYXRlRnVuYzogKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PiwgY2hlY2tlZDogYm9vbGVhbikgPT4gdm9pZCB9KTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxGb3JtQ29udHJvbExhYmVsIGNvbnRyb2w9e1xuICAgICAgPENoZWNrYm94IGNoZWNrZWQ9e3Byb3BzLnZhbHVlfSBvbkNoYW5nZT17cHJvcHMudXBkYXRlRnVuY30gLz5cbiAgICB9IGxhYmVsPXtwcm9wcy5sYWJlbH0gLz5cbiAgKVxufVxuXG5pbnRlcmZhY2UgU3RhdGVGaWVsZHMgeyByYWRpdXM6IG51bWJlciwgY291bnQ6IG51bWJlciwgc2hvd0ZQUzogYm9vbGVhbiwgc2hvd1F1YWRzOiBib29sZWFuIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudDx1bmtub3duLCBTdGF0ZUZpZWxkcz4ge1xuICBwcml2YXRlIHNpbXVsYXRpb25DYW52YXNSZWY6IFJlZk9iamVjdDxTaW11bGF0aW9uQ2FudmFzPiA9IGNyZWF0ZVJlZigpXG4gIGNvbnN0cnVjdG9yKHByb3BzOiB1bmtub3duKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJhZGl1czogMTAsXG4gICAgICBjb3VudDogMSxcbiAgICAgIHNob3dGUFM6IHRydWUsXG4gICAgICBzaG93UXVhZHM6IHRydWVcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICAvLyBhdHRlbXB0IHRvIHN5bmMgc2ltdWxhdGlvbiB2YXJzIHdpdGggY29udGFpbmVyIGZsYWdzXG4gICAgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LnVwZGF0ZVZhcnMoeyBzaG93RlBTOiB0aGlzLnN0YXRlLnNob3dGUFMsIHNob3dRdWFkczogdGhpcy5zdGF0ZS5zaG93UXVhZHMgfSlcblxuICAgIC8vIGNhbGN1bGF0ZSBhIHJhZGl1cyB0aGF0IGlzIHJlbGF0aXZlbHkgdGhlIHNhbWUgcmV0aW8gZm9yIGFsbCB3aW5kb3dzXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5jZWlsKE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoIC8gNTAwLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyA1MDApKVxuICAgIHRoaXMuc2V0U3RhdGUoeyByYWRpdXM6IHJhZGl1cywgY291bnQ6IDIwMCB9LCAoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuY291bnQ7IGkrKylcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LmFkZEJvZHkodGhpcy5zdGF0ZS5yYWRpdXMpXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5RdWFkdHJlZSBWaXN1YWxpemVyPC90aXRsZT5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpbXVsYXRpb25fY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxTaW11bGF0aW9uQ2FudmFzIHJlZj17dGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmfSBzcGF3blJhZGl1cz17dGhpcy5zdGF0ZS5yYWRpdXN9IC8+XG4gICAgICAgICAgICA8Q29udHJvbEJhcj5cbiAgICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJOb2RlIENhcGFjaXR5XCIgdmFsdWU9e1F1YWRUcmVlLmNhcGFjaXR5fVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4gdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LnVwZGF0ZVZhcnMoeyBjYXBhY2l0eTogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJNYXhtaW11bSBUcmVlIERlcHRoXCIgdmFsdWU9e1F1YWRUcmVlLm1heERlcHRofVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4gdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LnVwZGF0ZVZhcnMoeyBtYXhEZXB0aDogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJSYWRpdXNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yYWRpdXN9XG4gICAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgcmFkaXVzOiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIlNwYXduIENvdW50XCIgdmFsdWU9e3RoaXMuc3RhdGUuY291bnR9XG4gICAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgY291bnQ6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgIDxBY3Rpb25CdXR0b24gbGFiZWw9XCJDcmVhdGUgQm9kaWVzXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5jb3VudDsgaSsrKSB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8uYWRkQm9keSh0aGlzLnN0YXRlLnJhZGl1cykgfX0gLz5cbiAgICAgICAgICAgICAgPEFjdGlvbkJ1dHRvbiBsYWJlbD1cIkNsZWFyIEJvZGllc1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LmNsZWFyQm9kaWVzKCl9IC8+XG4gICAgICAgICAgICAgIDxEYXRhVG9nZ2xlIGxhYmVsPVwiU2hvdyBGUFNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zaG93RlBTfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyhfLCBjaGVja2VkKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBzaG93RlBTOiBjaGVja2VkIH0pOyB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8udXBkYXRlVmFycyh7IHNob3dGUFM6IGNoZWNrZWQgfSkgfX0gLz5cbiAgICAgICAgICAgICAgPERhdGFUb2dnbGUgbGFiZWw9XCJTaG93IFF1YWRzXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2hvd1F1YWRzfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyhfLCBjaGVja2VkKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBzaG93UXVhZHM6IGNoZWNrZWQgfSk7IHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py51cGRhdGVWYXJzKHsgc2hvd1F1YWRzOiBjaGVja2VkIH0pIH19IC8+XG4gICAgICAgICAgICA8L0NvbnRyb2xCYXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==