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
/* harmony import */ var _components_project_header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/project-header */ "./components/project-header.tsx");
/* harmony import */ var _components_simulation_canvas__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/simulation-canvas */ "./components/simulation-canvas.tsx");
/* harmony import */ var _components_control_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/control-bar */ "./components/control-bar.tsx");
/* harmony import */ var _utils_quadtree__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/quadtree */ "./utils/quadtree.ts");
/* harmony import */ var _utils_physics__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/physics */ "./utils/physics.ts");
/* harmony import */ var _utils_vector2d__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/vector2d */ "./utils/vector2d.ts");
/* harmony import */ var _utils_functions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../utils/functions */ "./utils/functions.ts");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_16__);








var _jsxFileName = "C:\\Users\\SpicyRamenChef\\Desktop\\GitRepos\\quadtree-visualizer\\pages\\index.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }











var SimulationFields = function SimulationFields() {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__["default"])(this, SimulationFields);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "radius", 5);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "count", 200);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "showFPS", true);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "showQuads", true);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(this, "physicsEnvironment", new _utils_physics__WEBPACK_IMPORTED_MODULE_13__["PhysicsEnvironment"]());
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
        this.simulationCanvasRef.current.addBody(this.simulationCanvasRef.current.randomPointInBounds(), new _utils_vector2d__WEBPACK_IMPORTED_MODULE_14__["Vector2D"]((Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200), this.state.radius);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_16___default.a.simulation_container,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_project_header__WEBPACK_IMPORTED_MODULE_9__["default"], {
            title: "QuadTree Visualizer",
            year: "2021"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_simulation_canvas__WEBPACK_IMPORTED_MODULE_10__["default"], {
            ref: this.simulationCanvasRef,
            showFPS: this.state.showFPS,
            showQuads: this.state.showQuads,
            physicsEnvironment: this.state.physicsEnvironment,
            radius: this.state.radius
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["SectionTitle"], {
              title: "Physics"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["DataSlider"], {
              label: "Restitution Coefficient",
              value: this.state.physicsEnvironment.coefficientOfRestitution,
              updateFunc: function updateFunc(value) {
                Object(_utils_functions__WEBPACK_IMPORTED_MODULE_15__["updateWith"])(_this2.state.physicsEnvironment, {
                  coefficientOfRestitution: value
                });

                _this2.setState({
                  physicsEnvironment: _this2.state.physicsEnvironment
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["SectionTitle"], {
              title: "QuadTree"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["DataConfig"], {
              label: "Node Capacity",
              value: _utils_quadtree__WEBPACK_IMPORTED_MODULE_12__["QuadTree"].capacity,
              updateFunc: function updateFunc(value) {
                Object(_utils_functions__WEBPACK_IMPORTED_MODULE_15__["updateWith"])(_utils_quadtree__WEBPACK_IMPORTED_MODULE_12__["QuadTree"], {
                  capacity: +value.target.value
                });

                _this2.forceUpdate();
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["DataConfig"], {
              label: "Maxmimum Tree Depth",
              value: _utils_quadtree__WEBPACK_IMPORTED_MODULE_12__["QuadTree"].maxDepth,
              updateFunc: function updateFunc(value) {
                Object(_utils_functions__WEBPACK_IMPORTED_MODULE_15__["updateWith"])(_utils_quadtree__WEBPACK_IMPORTED_MODULE_12__["QuadTree"], {
                  maxDepth: +value.target.value
                });

                _this2.forceUpdate();
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["SectionTitle"], {
              title: "Simulation"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["DataConfig"], {
              label: "Radius",
              value: this.state.radius,
              updateFunc: function updateFunc(value) {
                return _this2.setState({
                  radius: +value.target.value
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["DataConfig"], {
              label: "Spawn Count",
              value: this.state.count,
              updateFunc: function updateFunc(value) {
                return _this2.setState({
                  count: +value.target.value
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["ActionButton"], {
              label: "Spawn Bodies",
              onClick: this.spawnRandomBodies
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["ActionButton"], {
              label: "Clear Bodies",
              onClick: function onClick() {
                var _this2$simulationCanv;

                return (_this2$simulationCanv = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv === void 0 ? void 0 : _this2$simulationCanv.clearBodies();
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["DataToggle"], {
              label: "Show FPS",
              value: this.state.showFPS,
              updateFunc: function updateFunc(_, checked) {
                return _this2.setState({
                  showFPS: checked
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["DataToggle"], {
              label: "Show Quads",
              value: this.state.showQuads,
              updateFunc: function updateFunc(_, checked) {
                return _this2.setState({
                  showQuads: checked
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNpbXVsYXRpb25GaWVsZHMiLCJQaHlzaWNzRW52aXJvbm1lbnQiLCJIb21lIiwicHJvcHMiLCJjcmVhdGVSZWYiLCJzdGF0ZSIsInNwYXduUmFuZG9tQm9kaWVzIiwiYmluZCIsInJhZGl1cyIsIk1hdGgiLCJjZWlsIiwibWluIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0U3RhdGUiLCJzaW11bGF0aW9uQ2FudmFzUmVmIiwiY3VycmVudCIsImkiLCJjb3VudCIsImFkZEJvZHkiLCJyYW5kb21Qb2ludEluQm91bmRzIiwiVmVjdG9yMkQiLCJyYW5kb20iLCJzdHlsZXMiLCJzaW11bGF0aW9uX2NvbnRhaW5lciIsInNob3dGUFMiLCJzaG93UXVhZHMiLCJwaHlzaWNzRW52aXJvbm1lbnQiLCJjb2VmZmljaWVudE9mUmVzdGl0dXRpb24iLCJ2YWx1ZSIsInVwZGF0ZVdpdGgiLCJRdWFkVHJlZSIsImNhcGFjaXR5IiwidGFyZ2V0IiwiZm9yY2VVcGRhdGUiLCJtYXhEZXB0aCIsImNsZWFyQm9kaWVzIiwiXyIsImNoZWNrZWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLGdCOzs7NEdBQ0ssQzs7MkdBQ0QsRzs7NkdBQ0UsSTs7K0dBQ0UsSTs7d0hBQ1MsSUFBSUMsa0VBQUosRTs7QUFHdkI7QUFDQTtBQUNBOzs7SUFDcUJDLEk7Ozs7O0FBRW5CLGdCQUFZQyxLQUFaLEVBQTRCO0FBQUE7O0FBQUE7O0FBQzFCLDhCQUFNQSxLQUFOOztBQUQwQiwyT0FEK0JDLHVEQUFTLEVBQ3hDOztBQUUxQixVQUFLQyxLQUFMLEdBQWEsSUFBSUwsZ0JBQUosRUFBYjtBQUNBLFVBQUtNLGlC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LGNBQXBCO0FBQ0UscUJBQU8sRUFBRSxLQUFLeEI7QUFEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFqQkYsZUFtQkUscUVBQUMscUVBQUQ7QUFBYyxtQkFBSyxFQUFDLGNBQXBCO0FBQ0UscUJBQU8sRUFBRTtBQUFBOztBQUFBLGdEQUFNLE1BQUksQ0FBQ1UsbUJBQUwsQ0FBeUJDLE9BQS9CLDBEQUFNLHNCQUFrQ29CLFdBQWxDLEVBQU47QUFBQTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBbkJGLGVBcUJFLHFFQUFDLG1FQUFEO0FBQVksbUJBQUssRUFBQyxVQUFsQjtBQUE2QixtQkFBSyxFQUFFLEtBQUtoQyxLQUFMLENBQVdxQixPQUEvQztBQUNFLHdCQUFVLEVBQUUsb0JBQUNZLENBQUQsRUFBSUMsT0FBSjtBQUFBLHVCQUFnQixNQUFJLENBQUN4QixRQUFMLENBQWM7QUFBRVcseUJBQU8sRUFBRWE7QUFBWCxpQkFBZCxDQUFoQjtBQUFBO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFyQkYsZUF1QkUscUVBQUMsbUVBQUQ7QUFBWSxtQkFBSyxFQUFDLFlBQWxCO0FBQStCLG1CQUFLLEVBQUUsS0FBS2xDLEtBQUwsQ0FBV3NCLFNBQWpEO0FBQ0Usd0JBQVUsRUFBRSxvQkFBQ1csQ0FBRCxFQUFJQyxPQUFKO0FBQUEsdUJBQWdCLE1BQUksQ0FBQ3hCLFFBQUwsQ0FBYztBQUFFWSwyQkFBUyxFQUFFWTtBQUFiLGlCQUFkLENBQWhCO0FBQUE7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBc0NEOzs7O0VBcEUrQkMsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTFjOWE1MTIxMmExZTExOTMxZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgY3JlYXRlUmVmLCBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9qZWN0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvamVjdC1oZWFkZXInXG5pbXBvcnQgU2ltdWxhdGlvbkNhbnZhcywgeyBTaW11bGF0aW9uQ2FudmFzUHJvcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL3NpbXVsYXRpb24tY2FudmFzJ1xuaW1wb3J0IENvbnRyb2xCYXIsIHsgQWN0aW9uQnV0dG9uLCBEYXRhQ29uZmlnLCBEYXRhU2xpZGVyLCBEYXRhVG9nZ2xlLCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRyb2wtYmFyJ1xuaW1wb3J0IHsgUXVhZFRyZWUgfSBmcm9tICcuLi91dGlscy9xdWFkdHJlZSdcbmltcG9ydCB7IFBoeXNpY3NFbnZpcm9ubWVudCB9IGZyb20gJy4uL3V0aWxzL3BoeXNpY3MnXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJy4uL3V0aWxzL3ZlY3RvcjJkJ1xuaW1wb3J0IHsgdXBkYXRlV2l0aCB9IGZyb20gJy4uL3V0aWxzL2Z1bmN0aW9ucydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXG5cbmNsYXNzIFNpbXVsYXRpb25GaWVsZHMgaW1wbGVtZW50cyBTaW11bGF0aW9uQ2FudmFzUHJvcHMge1xuICByYWRpdXMgPSA1XG4gIGNvdW50ID0gMjAwXG4gIHNob3dGUFMgPSB0cnVlXG4gIHNob3dRdWFkcyA9IHRydWVcbiAgcGh5c2ljc0Vudmlyb25tZW50ID0gbmV3IFBoeXNpY3NFbnZpcm9ubWVudFxufVxuXG4vKipcbiAqIE1haW4gUGFnZSB3aGljaCBjb250YWlucyB0aGUgUXVhZFRyZWUgVmlzdWFsaXplciBhbmQgQ29udHJvbCBCYXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudDx1bmtub3duLCBTaW11bGF0aW9uRmllbGRzPiB7XG4gIHByaXZhdGUgc2ltdWxhdGlvbkNhbnZhc1JlZjogUmVmT2JqZWN0PFNpbXVsYXRpb25DYW52YXM+ID0gY3JlYXRlUmVmKClcbiAgY29uc3RydWN0b3IocHJvcHM6IHVua25vd24pIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0gbmV3IFNpbXVsYXRpb25GaWVsZHNcbiAgICB0aGlzLnNwYXduUmFuZG9tQm9kaWVzID0gdGhpcy5zcGF3blJhbmRvbUJvZGllcy5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICAvLyBjYWxjdWxhdGUgYSByYWRpdXMgdGhhdCBpcyByZWxhdGl2ZWx5IHRoZSBzYW1lIHJhdGlvIGZvciBhbGwgd2luZG93c1xuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGguY2VpbChNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCAvIDIwMCwgd2luZG93LmlubmVySGVpZ2h0IC8gMjAwKSlcbiAgICAvLyBzZXQgaW5pdGlhbCB2YXJpYWJsZXNcbiAgICB0aGlzLnNldFN0YXRlKHsgcmFkaXVzOiByYWRpdXMgfSwgdGhpcy5zcGF3blJhbmRvbUJvZGllcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGF3biBhIG51bWJlciBvZiBCb2RpZXMgd2l0aCByYW5kb20gdmVsb2NpdHlcbiAgICogYmFzZWQgb24gY3VycmVudCBzaW11bGF0aW9uIHZhcmlhYmxlc1xuICAgKi9cbiAgc3Bhd25SYW5kb21Cb2RpZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50KVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmNvdW50OyBpKyspXG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50LmFkZEJvZHkoXG4gICAgICAgICAgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQucmFuZG9tUG9pbnRJbkJvdW5kcygpLFxuICAgICAgICAgIG5ldyBWZWN0b3IyRCgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyMDAsIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIwMCksXG4gICAgICAgICAgdGhpcy5zdGF0ZS5yYWRpdXMsXG4gICAgICAgIClcbiAgfVxuXG4gIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpbXVsYXRpb25fY29udGFpbmVyfT5cbiAgICAgICAgICA8UHJvamVjdEhlYWRlciB0aXRsZT1cIlF1YWRUcmVlIFZpc3VhbGl6ZXJcIiB5ZWFyPVwiMjAyMVwiIC8+XG4gICAgICAgICAgPFNpbXVsYXRpb25DYW52YXMgcmVmPXt0aGlzLnNpbXVsYXRpb25DYW52YXNSZWZ9XG4gICAgICAgICAgICBzaG93RlBTPXt0aGlzLnN0YXRlLnNob3dGUFN9XG4gICAgICAgICAgICBzaG93UXVhZHM9e3RoaXMuc3RhdGUuc2hvd1F1YWRzfVxuICAgICAgICAgICAgcGh5c2ljc0Vudmlyb25tZW50PXt0aGlzLnN0YXRlLnBoeXNpY3NFbnZpcm9ubWVudH1cbiAgICAgICAgICAgIHJhZGl1cz17dGhpcy5zdGF0ZS5yYWRpdXN9IC8+XG4gICAgICAgICAgPENvbnRyb2xCYXI+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwiUGh5c2ljc1wiIC8+XG4gICAgICAgICAgICA8RGF0YVNsaWRlciBsYWJlbD1cIlJlc3RpdHV0aW9uIENvZWZmaWNpZW50XCIgdmFsdWU9e3RoaXMuc3RhdGUucGh5c2ljc0Vudmlyb25tZW50LmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbn1cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICB1cGRhdGVXaXRoKHRoaXMuc3RhdGUucGh5c2ljc0Vudmlyb25tZW50LCB7IGNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbjogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGh5c2ljc0Vudmlyb25tZW50OiB0aGlzLnN0YXRlLnBoeXNpY3NFbnZpcm9ubWVudCB9KVxuICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT1cIlF1YWRUcmVlXCIgLz5cbiAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiTm9kZSBDYXBhY2l0eVwiIHZhbHVlPXtRdWFkVHJlZS5jYXBhY2l0eX1cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlKSA9PiB7IHVwZGF0ZVdpdGgoUXVhZFRyZWUsIHsgY2FwYWNpdHk6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSk7IHRoaXMuZm9yY2VVcGRhdGUoKSB9fSAvPlxuICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJNYXhtaW11bSBUcmVlIERlcHRoXCIgdmFsdWU9e1F1YWRUcmVlLm1heERlcHRofVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHsgdXBkYXRlV2l0aChRdWFkVHJlZSwgeyBtYXhEZXB0aDogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KTsgdGhpcy5mb3JjZVVwZGF0ZSgpIH19IC8+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwiU2ltdWxhdGlvblwiIC8+XG4gICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIlJhZGl1c1wiIHZhbHVlPXt0aGlzLnN0YXRlLnJhZGl1c31cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgcmFkaXVzOiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJTcGF3biBDb3VudFwiIHZhbHVlPXt0aGlzLnN0YXRlLmNvdW50fVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3VudDogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgIDxBY3Rpb25CdXR0b24gbGFiZWw9XCJTcGF3biBCb2RpZXNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNwYXduUmFuZG9tQm9kaWVzfSAvPlxuICAgICAgICAgICAgPEFjdGlvbkJ1dHRvbiBsYWJlbD1cIkNsZWFyIEJvZGllc1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py5jbGVhckJvZGllcygpfSAvPlxuICAgICAgICAgICAgPERhdGFUb2dnbGUgbGFiZWw9XCJTaG93IEZQU1wiIHZhbHVlPXt0aGlzLnN0YXRlLnNob3dGUFN9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyhfLCBjaGVja2VkKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0ZQUzogY2hlY2tlZCB9KX0gLz5cbiAgICAgICAgICAgIDxEYXRhVG9nZ2xlIGxhYmVsPVwiU2hvdyBRdWFkc1wiIHZhbHVlPXt0aGlzLnN0YXRlLnNob3dRdWFkc31cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KF8sIGNoZWNrZWQpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93UXVhZHM6IGNoZWNrZWQgfSl9IC8+XG4gICAgICAgICAgPC9Db250cm9sQmFyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICApXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=