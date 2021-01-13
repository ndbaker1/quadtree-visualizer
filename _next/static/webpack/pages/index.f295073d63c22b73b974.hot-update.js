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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_project_header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/project-header */ "./components/project-header.tsx");
/* harmony import */ var _components_simulation_canvas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/simulation-canvas */ "./components/simulation-canvas.tsx");
/* harmony import */ var _components_control_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/control-bar */ "./components/control-bar.tsx");
/* harmony import */ var _utils_quadtree__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/quadtree */ "./utils/quadtree.ts");
/* harmony import */ var _utils_physics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/physics */ "./utils/physics.ts");
/* harmony import */ var _utils_vector2d__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/vector2d */ "./utils/vector2d.ts");








var _jsxFileName = "C:\\Users\\SpicyRamenChef\\Desktop\\GitRepos\\quadtree-visualizer\\pages\\index.tsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }










var SimulationFields = function SimulationFields() {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, SimulationFields);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "radius", 5);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "count", 200);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "showFPS", true);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "showQuads", true);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "physicsEnvironment", new _utils_physics__WEBPACK_IMPORTED_MODULE_14__["PhysicsEnvironment"]());
};
/**
 * Main Page which contains the QuadTree Visualizer and Control Bar
 */


var Home = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Home);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "simulationCanvasRef", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_8__["createRef"])());

    _this.state = new SimulationFields();
    _this.spawnRandomBodies = _this.spawnRandomBodies.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // calculate a radius that is relatively the same ratio for all windows
      var radius = Math.ceil(Math.min(window.innerWidth / 200, window.innerHeight / 200)); // set initial variables

      this.setState({
        radius: radius
      }, this.spawnRandomBodies);
    }
    /**
     * Spawn a number of Bodies with random velocity
     * based on current simulation variables
     */

  }, {
    key: "spawnRandomBodies",
    value: function spawnRandomBodies() {
      if (this.simulationCanvasRef.current) for (var i = 0; i < this.state.count; i++) {
        this.simulationCanvasRef.current.addBody(this.simulationCanvasRef.current.randomPointsInBounds(), new _utils_vector2d__WEBPACK_IMPORTED_MODULE_15__["Vector2D"]((Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200), this.state.radius);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.simulation_container,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_project_header__WEBPACK_IMPORTED_MODULE_10__["default"], {
            title: "QuadTree Visualizer",
            year: "2021"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_simulation_canvas__WEBPACK_IMPORTED_MODULE_11__["default"], {
            ref: this.simulationCanvasRef,
            showFPS: this.state.showFPS,
            showQuads: this.state.showQuads,
            physicsEnvironment: this.state.physicsEnvironment,
            radius: this.state.radius
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["SectionTitle"], {
              title: "Physics"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["DataSlider"], {
              label: "Restitution Coefficient",
              value: this.state.physicsEnvironment.coefficientOfRestitution,
              updateFunc: function updateFunc(value) {
                // this.state.physicsEnvironment.updateVar({ coefficientOfRestitution: value })
                _this2.setState({
                  physicsEnvironment: _objectSpread(_objectSpread({}, _this2.state.physicsEnvironment), {}, {
                    coefficientOfRestitution: value
                  })
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["SectionTitle"], {
              title: "QuadTree"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["DataConfig"], {
              label: "Node Capacity",
              value: _utils_quadtree__WEBPACK_IMPORTED_MODULE_13__["QuadTree"].capacity,
              updateFunc: function updateFunc(value) {
                var _this2$simulationCanv;

                (_this2$simulationCanv = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv === void 0 ? void 0 : _this2$simulationCanv.updateVars({
                  capacity: +value.target.value
                });

                _this2.forceUpdate();
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["DataConfig"], {
              label: "Maxmimum Tree Depth",
              value: _utils_quadtree__WEBPACK_IMPORTED_MODULE_13__["QuadTree"].maxDepth,
              updateFunc: function updateFunc(value) {
                var _this2$simulationCanv2;

                (_this2$simulationCanv2 = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv2 === void 0 ? void 0 : _this2$simulationCanv2.updateVars({
                  maxDepth: +value.target.value
                });

                _this2.forceUpdate();
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["SectionTitle"], {
              title: "Simulation"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["DataConfig"], {
              label: "Radius",
              value: this.state.radius,
              updateFunc: function updateFunc(value) {
                return _this2.setState({
                  radius: +value.target.value
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["DataConfig"], {
              label: "Spawn Count",
              value: this.state.count,
              updateFunc: function updateFunc(value) {
                return _this2.setState({
                  count: +value.target.value
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["ActionButton"], {
              label: "Spawn Bodies",
              onClick: this.spawnRandomBodies
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["ActionButton"], {
              label: "Clear Bodies",
              onClick: function onClick() {
                var _this2$simulationCanv3;

                return (_this2$simulationCanv3 = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv3 === void 0 ? void 0 : _this2$simulationCanv3.clearBodies();
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["DataToggle"], {
              label: "Show FPS",
              value: this.state.showFPS,
              updateFunc: function updateFunc(_, checked) {
                return _this2.setState({
                  showFPS: checked
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["DataToggle"], {
              label: "Show Quads",
              value: this.state.showQuads,
              updateFunc: function updateFunc(_, checked) {
                return _this2.setState({
                  showQuads: checked
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }, this);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNpbXVsYXRpb25GaWVsZHMiLCJQaHlzaWNzRW52aXJvbm1lbnQiLCJIb21lIiwicHJvcHMiLCJjcmVhdGVSZWYiLCJzdGF0ZSIsInNwYXduUmFuZG9tQm9kaWVzIiwiYmluZCIsInJhZGl1cyIsIk1hdGgiLCJjZWlsIiwibWluIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0U3RhdGUiLCJzaW11bGF0aW9uQ2FudmFzUmVmIiwiY3VycmVudCIsImkiLCJjb3VudCIsImFkZEJvZHkiLCJyYW5kb21Qb2ludHNJbkJvdW5kcyIsIlZlY3RvcjJEIiwicmFuZG9tIiwic3R5bGVzIiwic2ltdWxhdGlvbl9jb250YWluZXIiLCJzaG93RlBTIiwic2hvd1F1YWRzIiwicGh5c2ljc0Vudmlyb25tZW50IiwiY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uIiwidmFsdWUiLCJRdWFkVHJlZSIsImNhcGFjaXR5IiwidXBkYXRlVmFycyIsInRhcmdldCIsImZvcmNlVXBkYXRlIiwibWF4RGVwdGgiLCJjbGVhckJvZGllcyIsIl8iLCJjaGVja2VkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsZ0I7Ozs0R0FDSyxDOzsyR0FDRCxHOzs2R0FDRSxJOzsrR0FDRSxJOzt3SEFDUyxJQUFJQyxrRUFBSixFOztBQUd2QjtBQUNBO0FBQ0E7OztJQUNxQkMsSTs7Ozs7QUFFbkIsZ0JBQVlDLEtBQVosRUFBNEI7QUFBQTs7QUFBQTs7QUFDMUIsOEJBQU1BLEtBQU47O0FBRDBCLDJPQUQrQkMsdURBQVMsRUFDeEM7O0FBRTFCLFVBQUtDLEtBQUwsR0FBYSxJQUFJTCxnQkFBSixFQUFiO0FBQ0EsVUFBS00saUJB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QUssRUFBQyxjQUFwQjtBQUNFLHFCQUFPLEVBQUUsS0FBS3hCO0FBRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBakJGLGVBbUJFLHFFQUFDLHFFQUFEO0FBQWMsbUJBQUssRUFBQyxjQUFwQjtBQUNFLHFCQUFPLEVBQUU7QUFBQTs7QUFBQSxpREFBTSxNQUFJLENBQUNVLG1CQUFMLENBQXlCQyxPQUEvQiwyREFBTSx1QkFBa0NvQixXQUFsQyxFQUFOO0FBQUE7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQW5CRixlQXFCRSxxRUFBQyxtRUFBRDtBQUFZLG1CQUFLLEVBQUMsVUFBbEI7QUFBNkIsbUJBQUssRUFBRSxLQUFLaEMsS0FBTCxDQUFXcUIsT0FBL0M7QUFDRSx3QkFBVSxFQUFFLG9CQUFDWSxDQUFELEVBQUlDLE9BQUo7QUFBQSx1QkFBZ0IsTUFBSSxDQUFDeEIsUUFBTCxDQUFjO0FBQUVXLHlCQUFPLEVBQUVhO0FBQVgsaUJBQWQsQ0FBaEI7QUFBQTtBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBckJGLGVBdUJFLHFFQUFDLG1FQUFEO0FBQVksbUJBQUssRUFBQyxZQUFsQjtBQUErQixtQkFBSyxFQUFFLEtBQUtsQyxLQUFMLENBQVdzQixTQUFqRDtBQUNFLHdCQUFVLEVBQUUsb0JBQUNXLENBQUQsRUFBSUMsT0FBSjtBQUFBLHVCQUFnQixNQUFJLENBQUN4QixRQUFMLENBQWM7QUFBRVksMkJBQVMsRUFBRVk7QUFBYixpQkFBZCxDQUFoQjtBQUFBO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQXNDRDs7OztFQXBFK0JDLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYyOTUwNzNkNjNjMjJiNzNiOTc0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZVJlZiwgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IFByb2plY3RIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0LWhlYWRlcidcbmltcG9ydCBTaW11bGF0aW9uQ2FudmFzLCB7IFNpbXVsYXRpb25DYW52YXNQcm9wcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2ltdWxhdGlvbi1jYW52YXMnXG5pbXBvcnQgQ29udHJvbEJhciwgeyBBY3Rpb25CdXR0b24sIERhdGFDb25maWcsIERhdGFTbGlkZXIsIERhdGFUb2dnbGUsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udHJvbC1iYXInXG5pbXBvcnQgeyBRdWFkVHJlZSB9IGZyb20gJy4uL3V0aWxzL3F1YWR0cmVlJ1xuaW1wb3J0IHsgUGh5c2ljc0Vudmlyb25tZW50IH0gZnJvbSAnLi4vdXRpbHMvcGh5c2ljcydcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdXRpbHMvdmVjdG9yMmQnXG5cbmNsYXNzIFNpbXVsYXRpb25GaWVsZHMgaW1wbGVtZW50cyBTaW11bGF0aW9uQ2FudmFzUHJvcHMge1xuICByYWRpdXMgPSA1XG4gIGNvdW50ID0gMjAwXG4gIHNob3dGUFMgPSB0cnVlXG4gIHNob3dRdWFkcyA9IHRydWVcbiAgcGh5c2ljc0Vudmlyb25tZW50ID0gbmV3IFBoeXNpY3NFbnZpcm9ubWVudFxufVxuXG4vKipcbiAqIE1haW4gUGFnZSB3aGljaCBjb250YWlucyB0aGUgUXVhZFRyZWUgVmlzdWFsaXplciBhbmQgQ29udHJvbCBCYXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudDx1bmtub3duLCBTaW11bGF0aW9uRmllbGRzPiB7XG4gIHByaXZhdGUgc2ltdWxhdGlvbkNhbnZhc1JlZjogUmVmT2JqZWN0PFNpbXVsYXRpb25DYW52YXM+ID0gY3JlYXRlUmVmKClcbiAgY29uc3RydWN0b3IocHJvcHM6IHVua25vd24pIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0gbmV3IFNpbXVsYXRpb25GaWVsZHNcbiAgICB0aGlzLnNwYXduUmFuZG9tQm9kaWVzID0gdGhpcy5zcGF3blJhbmRvbUJvZGllcy5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICAvLyBjYWxjdWxhdGUgYSByYWRpdXMgdGhhdCBpcyByZWxhdGl2ZWx5IHRoZSBzYW1lIHJhdGlvIGZvciBhbGwgd2luZG93c1xuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGguY2VpbChNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCAvIDIwMCwgd2luZG93LmlubmVySGVpZ2h0IC8gMjAwKSlcbiAgICAvLyBzZXQgaW5pdGlhbCB2YXJpYWJsZXNcbiAgICB0aGlzLnNldFN0YXRlKHsgcmFkaXVzOiByYWRpdXMgfSwgdGhpcy5zcGF3blJhbmRvbUJvZGllcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGF3biBhIG51bWJlciBvZiBCb2RpZXMgd2l0aCByYW5kb20gdmVsb2NpdHlcbiAgICogYmFzZWQgb24gY3VycmVudCBzaW11bGF0aW9uIHZhcmlhYmxlc1xuICAgKi9cbiAgc3Bhd25SYW5kb21Cb2RpZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50KVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmNvdW50OyBpKyspXG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50LmFkZEJvZHkoXG4gICAgICAgICAgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQucmFuZG9tUG9pbnRzSW5Cb3VuZHMoKSxcbiAgICAgICAgICBuZXcgVmVjdG9yMkQoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMjAwLCAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyMDApLFxuICAgICAgICAgIHRoaXMuc3RhdGUucmFkaXVzLFxuICAgICAgICApXG4gIH1cblxuICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaW11bGF0aW9uX2NvbnRhaW5lcn0+XG4gICAgICAgICAgPFByb2plY3RIZWFkZXIgdGl0bGU9XCJRdWFkVHJlZSBWaXN1YWxpemVyXCIgeWVhcj1cIjIwMjFcIiAvPlxuICAgICAgICAgIDxTaW11bGF0aW9uQ2FudmFzIHJlZj17dGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmfVxuICAgICAgICAgICAgc2hvd0ZQUz17dGhpcy5zdGF0ZS5zaG93RlBTfVxuICAgICAgICAgICAgc2hvd1F1YWRzPXt0aGlzLnN0YXRlLnNob3dRdWFkc31cbiAgICAgICAgICAgIHBoeXNpY3NFbnZpcm9ubWVudD17dGhpcy5zdGF0ZS5waHlzaWNzRW52aXJvbm1lbnR9XG4gICAgICAgICAgICByYWRpdXM9e3RoaXMuc3RhdGUucmFkaXVzfSAvPlxuICAgICAgICAgIDxDb250cm9sQmFyPlxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT1cIlBoeXNpY3NcIiAvPlxuICAgICAgICAgICAgPERhdGFTbGlkZXIgbGFiZWw9XCJSZXN0aXR1dGlvbiBDb2VmZmljaWVudFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBoeXNpY3NFbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb259XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdGF0ZS5waHlzaWNzRW52aXJvbm1lbnQudXBkYXRlVmFyKHsgY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwaHlzaWNzRW52aXJvbm1lbnQ6IHsgLi4udGhpcy5zdGF0ZS5waHlzaWNzRW52aXJvbm1lbnQsIGNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbjogdmFsdWUgfSB9KVxuICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT1cIlF1YWRUcmVlXCIgLz5cbiAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiTm9kZSBDYXBhY2l0eVwiIHZhbHVlPXtRdWFkVHJlZS5jYXBhY2l0eX1cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlKSA9PiB7IHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py51cGRhdGVWYXJzKHsgY2FwYWNpdHk6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSk7IHRoaXMuZm9yY2VVcGRhdGUoKSB9fSAvPlxuICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJNYXhtaW11bSBUcmVlIERlcHRoXCIgdmFsdWU9e1F1YWRUcmVlLm1heERlcHRofVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHsgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LnVwZGF0ZVZhcnMoeyBtYXhEZXB0aDogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KTsgdGhpcy5mb3JjZVVwZGF0ZSgpIH19IC8+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwiU2ltdWxhdGlvblwiIC8+XG4gICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIlJhZGl1c1wiIHZhbHVlPXt0aGlzLnN0YXRlLnJhZGl1c31cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgcmFkaXVzOiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJTcGF3biBDb3VudFwiIHZhbHVlPXt0aGlzLnN0YXRlLmNvdW50fVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3VudDogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgIDxBY3Rpb25CdXR0b24gbGFiZWw9XCJTcGF3biBCb2RpZXNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNwYXduUmFuZG9tQm9kaWVzfSAvPlxuICAgICAgICAgICAgPEFjdGlvbkJ1dHRvbiBsYWJlbD1cIkNsZWFyIEJvZGllc1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py5jbGVhckJvZGllcygpfSAvPlxuICAgICAgICAgICAgPERhdGFUb2dnbGUgbGFiZWw9XCJTaG93IEZQU1wiIHZhbHVlPXt0aGlzLnN0YXRlLnNob3dGUFN9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyhfLCBjaGVja2VkKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0ZQUzogY2hlY2tlZCB9KX0gLz5cbiAgICAgICAgICAgIDxEYXRhVG9nZ2xlIGxhYmVsPVwiU2hvdyBRdWFkc1wiIHZhbHVlPXt0aGlzLnN0YXRlLnNob3dRdWFkc31cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KF8sIGNoZWNrZWQpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93UXVhZHM6IGNoZWNrZWQgfSl9IC8+XG4gICAgICAgICAgPC9Db250cm9sQmFyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICApXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=