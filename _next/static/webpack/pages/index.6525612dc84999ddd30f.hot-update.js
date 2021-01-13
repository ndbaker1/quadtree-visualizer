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
                Object(_utils_physics__WEBPACK_IMPORTED_MODULE_14__["updateWith"])(_this2.state.physicsEnvironment, {
                  coefficientOfRestitution: value
                });

                _this2.setState({
                  physicsEnvironment: _this2.state.physicsEnvironment
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNpbXVsYXRpb25GaWVsZHMiLCJQaHlzaWNzRW52aXJvbm1lbnQiLCJIb21lIiwicHJvcHMiLCJjcmVhdGVSZWYiLCJzdGF0ZSIsInNwYXduUmFuZG9tQm9kaWVzIiwiYmluZCIsInJhZGl1cyIsIk1hdGgiLCJjZWlsIiwibWluIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0U3RhdGUiLCJzaW11bGF0aW9uQ2FudmFzUmVmIiwiY3VycmVudCIsImkiLCJjb3VudCIsImFkZEJvZHkiLCJyYW5kb21Qb2ludHNJbkJvdW5kcyIsIlZlY3RvcjJEIiwicmFuZG9tIiwic3R5bGVzIiwic2ltdWxhdGlvbl9jb250YWluZXIiLCJzaG93RlBTIiwic2hvd1F1YWRzIiwicGh5c2ljc0Vudmlyb25tZW50IiwiY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uIiwidmFsdWUiLCJ1cGRhdGVXaXRoIiwiUXVhZFRyZWUiLCJjYXBhY2l0eSIsInVwZGF0ZVZhcnMiLCJ0YXJnZXQiLCJmb3JjZVVwZGF0ZSIsIm1heERlcHRoIiwiY2xlYXJCb2RpZXMiLCJfIiwiY2hlY2tlZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsZ0I7Ozs0R0FDSyxDOzsyR0FDRCxHOzs2R0FDRSxJOzsrR0FDRSxJOzt3SEFDUyxJQUFJQyxrRUFBSixFOztBQUd2QjtBQUNBO0FBQ0E7OztJQUNxQkMsSTs7Ozs7QUFFbkIsZ0JBQVlDLEtBQVosRUFBNEI7QUFBQTs7QUFBQTs7QUFDMUIsOEJBQU1BLEtBQU47O0FBRDBCLDJPQUQrQkMsdURBQVMsRUFDeEM7O0FBRTFCLFVBQUtDLEtBQUwsR0FBYSxJQUFJTCxnQkFBSixFQUFiO0FBQ0Es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ZGM4NDk5OWRkZDMwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVSZWYsIFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcbmltcG9ydCBQcm9qZWN0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvamVjdC1oZWFkZXInXG5pbXBvcnQgU2ltdWxhdGlvbkNhbnZhcywgeyBTaW11bGF0aW9uQ2FudmFzUHJvcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL3NpbXVsYXRpb24tY2FudmFzJ1xuaW1wb3J0IENvbnRyb2xCYXIsIHsgQWN0aW9uQnV0dG9uLCBEYXRhQ29uZmlnLCBEYXRhU2xpZGVyLCBEYXRhVG9nZ2xlLCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRyb2wtYmFyJ1xuaW1wb3J0IHsgUXVhZFRyZWUgfSBmcm9tICcuLi91dGlscy9xdWFkdHJlZSdcbmltcG9ydCB7IFBoeXNpY3NFbnZpcm9ubWVudCwgdXBkYXRlV2l0aCB9IGZyb20gJy4uL3V0aWxzL3BoeXNpY3MnXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJy4uL3V0aWxzL3ZlY3RvcjJkJ1xuXG5jbGFzcyBTaW11bGF0aW9uRmllbGRzIGltcGxlbWVudHMgU2ltdWxhdGlvbkNhbnZhc1Byb3BzIHtcbiAgcmFkaXVzID0gNVxuICBjb3VudCA9IDIwMFxuICBzaG93RlBTID0gdHJ1ZVxuICBzaG93UXVhZHMgPSB0cnVlXG4gIHBoeXNpY3NFbnZpcm9ubWVudCA9IG5ldyBQaHlzaWNzRW52aXJvbm1lbnRcbn1cblxuLyoqXG4gKiBNYWluIFBhZ2Ugd2hpY2ggY29udGFpbnMgdGhlIFF1YWRUcmVlIFZpc3VhbGl6ZXIgYW5kIENvbnRyb2wgQmFyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQ8dW5rbm93biwgU2ltdWxhdGlvbkZpZWxkcz4ge1xuICBwcml2YXRlIHNpbXVsYXRpb25DYW52YXNSZWY6IFJlZk9iamVjdDxTaW11bGF0aW9uQ2FudmFzPiA9IGNyZWF0ZVJlZigpXG4gIGNvbnN0cnVjdG9yKHByb3BzOiB1bmtub3duKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IG5ldyBTaW11bGF0aW9uRmllbGRzXG4gICAgdGhpcy5zcGF3blJhbmRvbUJvZGllcyA9IHRoaXMuc3Bhd25SYW5kb21Cb2RpZXMuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgLy8gY2FsY3VsYXRlIGEgcmFkaXVzIHRoYXQgaXMgcmVsYXRpdmVseSB0aGUgc2FtZSByYXRpbyBmb3IgYWxsIHdpbmRvd3NcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLmNlaWwoTWF0aC5taW4od2luZG93LmlubmVyV2lkdGggLyAyMDAsIHdpbmRvdy5pbm5lckhlaWdodCAvIDIwMCkpXG4gICAgLy8gc2V0IGluaXRpYWwgdmFyaWFibGVzXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJhZGl1czogcmFkaXVzIH0sIHRoaXMuc3Bhd25SYW5kb21Cb2RpZXMpXG4gIH1cblxuICAvKipcbiAgICogU3Bhd24gYSBudW1iZXIgb2YgQm9kaWVzIHdpdGggcmFuZG9tIHZlbG9jaXR5XG4gICAqIGJhc2VkIG9uIGN1cnJlbnQgc2ltdWxhdGlvbiB2YXJpYWJsZXNcbiAgICovXG4gIHNwYXduUmFuZG9tQm9kaWVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudClcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5jb3VudDsgaSsrKVxuICAgICAgICB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudC5hZGRCb2R5KFxuICAgICAgICAgIHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50LnJhbmRvbVBvaW50c0luQm91bmRzKCksXG4gICAgICAgICAgbmV3IFZlY3RvcjJEKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIwMCwgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMjAwKSxcbiAgICAgICAgICB0aGlzLnN0YXRlLnJhZGl1cyxcbiAgICAgICAgKVxuICB9XG5cbiAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2ltdWxhdGlvbl9jb250YWluZXJ9PlxuICAgICAgICAgIDxQcm9qZWN0SGVhZGVyIHRpdGxlPVwiUXVhZFRyZWUgVmlzdWFsaXplclwiIHllYXI9XCIyMDIxXCIgLz5cbiAgICAgICAgICA8U2ltdWxhdGlvbkNhbnZhcyByZWY9e3RoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZn1cbiAgICAgICAgICAgIHNob3dGUFM9e3RoaXMuc3RhdGUuc2hvd0ZQU31cbiAgICAgICAgICAgIHNob3dRdWFkcz17dGhpcy5zdGF0ZS5zaG93UXVhZHN9XG4gICAgICAgICAgICBwaHlzaWNzRW52aXJvbm1lbnQ9e3RoaXMuc3RhdGUucGh5c2ljc0Vudmlyb25tZW50fVxuICAgICAgICAgICAgcmFkaXVzPXt0aGlzLnN0YXRlLnJhZGl1c30gLz5cbiAgICAgICAgICA8Q29udHJvbEJhcj5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9XCJQaHlzaWNzXCIgLz5cbiAgICAgICAgICAgIDxEYXRhU2xpZGVyIGxhYmVsPVwiUmVzdGl0dXRpb24gQ29lZmZpY2llbnRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waHlzaWNzRW52aXJvbm1lbnQuY29lZmZpY2llbnRPZlJlc3RpdHV0aW9ufVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVdpdGgodGhpcy5zdGF0ZS5waHlzaWNzRW52aXJvbm1lbnQsIHsgY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwaHlzaWNzRW52aXJvbm1lbnQ6IHRoaXMuc3RhdGUucGh5c2ljc0Vudmlyb25tZW50IH0pXG4gICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwiUXVhZFRyZWVcIiAvPlxuICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJOb2RlIENhcGFjaXR5XCIgdmFsdWU9e1F1YWRUcmVlLmNhcGFjaXR5fVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHsgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LnVwZGF0ZVZhcnMoeyBjYXBhY2l0eTogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KTsgdGhpcy5mb3JjZVVwZGF0ZSgpIH19IC8+XG4gICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIk1heG1pbXVtIFRyZWUgRGVwdGhcIiB2YWx1ZT17UXVhZFRyZWUubWF4RGVwdGh9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4geyB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8udXBkYXRlVmFycyh7IG1heERlcHRoOiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pOyB0aGlzLmZvcmNlVXBkYXRlKCkgfX0gLz5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9XCJTaW11bGF0aW9uXCIgLz5cbiAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiUmFkaXVzXCIgdmFsdWU9e3RoaXMuc3RhdGUucmFkaXVzfVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyByYWRpdXM6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIlNwYXduIENvdW50XCIgdmFsdWU9e3RoaXMuc3RhdGUuY291bnR9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvdW50OiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgPEFjdGlvbkJ1dHRvbiBsYWJlbD1cIlNwYXduIEJvZGllc1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3Bhd25SYW5kb21Cb2RpZXN9IC8+XG4gICAgICAgICAgICA8QWN0aW9uQnV0dG9uIGxhYmVsPVwiQ2xlYXIgQm9kaWVzXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LmNsZWFyQm9kaWVzKCl9IC8+XG4gICAgICAgICAgICA8RGF0YVRvZ2dsZSBsYWJlbD1cIlNob3cgRlBTXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2hvd0ZQU31cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KF8sIGNoZWNrZWQpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93RlBTOiBjaGVja2VkIH0pfSAvPlxuICAgICAgICAgICAgPERhdGFUb2dnbGUgbGFiZWw9XCJTaG93IFF1YWRzXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2hvd1F1YWRzfVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsoXywgY2hlY2tlZCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dRdWFkczogY2hlY2tlZCB9KX0gLz5cbiAgICAgICAgICA8L0NvbnRyb2xCYXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==