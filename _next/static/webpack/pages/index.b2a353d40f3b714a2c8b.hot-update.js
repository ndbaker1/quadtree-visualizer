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
                _this2.state.physicsEnvironment.updateVar({
                  coefficientOfRestitution: value
                });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNpbXVsYXRpb25GaWVsZHMiLCJQaHlzaWNzRW52aXJvbm1lbnQiLCJIb21lIiwicHJvcHMiLCJjcmVhdGVSZWYiLCJzdGF0ZSIsInNwYXduUmFuZG9tQm9kaWVzIiwiYmluZCIsInJhZGl1cyIsIk1hdGgiLCJjZWlsIiwibWluIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0U3RhdGUiLCJzaW11bGF0aW9uQ2FudmFzUmVmIiwiY3VycmVudCIsImkiLCJjb3VudCIsImFkZEJvZHkiLCJyYW5kb21Qb2ludHNJbkJvdW5kcyIsIlZlY3RvcjJEIiwicmFuZG9tIiwic3R5bGVzIiwic2ltdWxhdGlvbl9jb250YWluZXIiLCJzaG93RlBTIiwic2hvd1F1YWRzIiwicGh5c2ljc0Vudmlyb25tZW50IiwiY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uIiwidmFsdWUiLCJ1cGRhdGVWYXIiLCJRdWFkVHJlZSIsImNhcGFjaXR5IiwidXBkYXRlVmFycyIsInRhcmdldCIsImZvcmNlVXBkYXRlIiwibWF4RGVwdGgiLCJjbGVhckJvZGllcyIsIl8iLCJjaGVja2VkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsZ0I7Ozs0R0FDSyxDOzsyR0FDRCxHOzs2R0FDRSxJOzsrR0FDRSxJOzt3SEFDUyxJQUFJQyxrRUFBSixFOztBQUd2QjtBQUNBO0FBQ0E7OztJQUNxQkMsSTs7Ozs7QUFFbkIsZ0JBQVlDLEtBQVosRUFBNEI7QUFBQTs7QUFBQTs7QUFDMUIsOEJBQU1BLEtBQU47O0FBRDBCLDJPQUQrQkMsdURBQVMsRUFDeEM7O0FBRTFCLFVBQUtDLEtBQUwsR0FBYSxJQUFJTCxnQkFBSixFQUFiO0FB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c3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjJhMzUzZDQwZjNiNzE0YTJjOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgY3JlYXRlUmVmLCBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXG5pbXBvcnQgUHJvamVjdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3QtaGVhZGVyJ1xuaW1wb3J0IFNpbXVsYXRpb25DYW52YXMsIHsgU2ltdWxhdGlvbkNhbnZhc1Byb3BzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zaW11bGF0aW9uLWNhbnZhcydcbmltcG9ydCBDb250cm9sQmFyLCB7IEFjdGlvbkJ1dHRvbiwgRGF0YUNvbmZpZywgRGF0YVNsaWRlciwgRGF0YVRvZ2dsZSwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250cm9sLWJhcidcbmltcG9ydCB7IFF1YWRUcmVlIH0gZnJvbSAnLi4vdXRpbHMvcXVhZHRyZWUnXG5pbXBvcnQgeyBQaHlzaWNzRW52aXJvbm1lbnQgfSBmcm9tICcuLi91dGlscy9waHlzaWNzJ1xuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuLi91dGlscy92ZWN0b3IyZCdcblxuY2xhc3MgU2ltdWxhdGlvbkZpZWxkcyBpbXBsZW1lbnRzIFNpbXVsYXRpb25DYW52YXNQcm9wcyB7XG4gIHJhZGl1cyA9IDVcbiAgY291bnQgPSAyMDBcbiAgc2hvd0ZQUyA9IHRydWVcbiAgc2hvd1F1YWRzID0gdHJ1ZVxuICBwaHlzaWNzRW52aXJvbm1lbnQgPSBuZXcgUGh5c2ljc0Vudmlyb25tZW50XG59XG5cbi8qKlxuICogTWFpbiBQYWdlIHdoaWNoIGNvbnRhaW5zIHRoZSBRdWFkVHJlZSBWaXN1YWxpemVyIGFuZCBDb250cm9sIEJhclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50PHVua25vd24sIFNpbXVsYXRpb25GaWVsZHM+IHtcbiAgcHJpdmF0ZSBzaW11bGF0aW9uQ2FudmFzUmVmOiBSZWZPYmplY3Q8U2ltdWxhdGlvbkNhbnZhcz4gPSBjcmVhdGVSZWYoKVxuICBjb25zdHJ1Y3Rvcihwcm9wczogdW5rbm93bikge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSBuZXcgU2ltdWxhdGlvbkZpZWxkc1xuICAgIHRoaXMuc3Bhd25SYW5kb21Cb2RpZXMgPSB0aGlzLnNwYXduUmFuZG9tQm9kaWVzLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIC8vIGNhbGN1bGF0ZSBhIHJhZGl1cyB0aGF0IGlzIHJlbGF0aXZlbHkgdGhlIHNhbWUgcmF0aW8gZm9yIGFsbCB3aW5kb3dzXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5jZWlsKE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoIC8gMjAwLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyMDApKVxuICAgIC8vIHNldCBpbml0aWFsIHZhcmlhYmxlc1xuICAgIHRoaXMuc2V0U3RhdGUoeyByYWRpdXM6IHJhZGl1cyB9LCB0aGlzLnNwYXduUmFuZG9tQm9kaWVzKVxuICB9XG5cbiAgLyoqXG4gICAqIFNwYXduIGEgbnVtYmVyIG9mIEJvZGllcyB3aXRoIHJhbmRvbSB2ZWxvY2l0eVxuICAgKiBiYXNlZCBvbiBjdXJyZW50IHNpbXVsYXRpb24gdmFyaWFibGVzXG4gICAqL1xuICBzcGF3blJhbmRvbUJvZGllcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuY291bnQ7IGkrKylcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQuYWRkQm9keShcbiAgICAgICAgICB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudC5yYW5kb21Qb2ludHNJbkJvdW5kcygpLFxuICAgICAgICAgIG5ldyBWZWN0b3IyRCgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyMDAsIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIwMCksXG4gICAgICAgICAgdGhpcy5zdGF0ZS5yYWRpdXMsXG4gICAgICAgIClcbiAgfVxuXG4gIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpbXVsYXRpb25fY29udGFpbmVyfT5cbiAgICAgICAgICA8UHJvamVjdEhlYWRlciB0aXRsZT1cIlF1YWRUcmVlIFZpc3VhbGl6ZXJcIiB5ZWFyPVwiMjAyMVwiIC8+XG4gICAgICAgICAgPFNpbXVsYXRpb25DYW52YXMgcmVmPXt0aGlzLnNpbXVsYXRpb25DYW52YXNSZWZ9XG4gICAgICAgICAgICBzaG93RlBTPXt0aGlzLnN0YXRlLnNob3dGUFN9XG4gICAgICAgICAgICBzaG93UXVhZHM9e3RoaXMuc3RhdGUuc2hvd1F1YWRzfVxuICAgICAgICAgICAgcGh5c2ljc0Vudmlyb25tZW50PXt0aGlzLnN0YXRlLnBoeXNpY3NFbnZpcm9ubWVudH1cbiAgICAgICAgICAgIHJhZGl1cz17dGhpcy5zdGF0ZS5yYWRpdXN9IC8+XG4gICAgICAgICAgPENvbnRyb2xCYXI+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwiUGh5c2ljc1wiIC8+XG4gICAgICAgICAgICA8RGF0YVNsaWRlciBsYWJlbD1cIlJlc3RpdHV0aW9uIENvZWZmaWNpZW50XCIgdmFsdWU9e3RoaXMuc3RhdGUucGh5c2ljc0Vudmlyb25tZW50LmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbn1cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBoeXNpY3NFbnZpcm9ubWVudC51cGRhdGVWYXIoeyBjb2VmZmljaWVudE9mUmVzdGl0dXRpb246IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBoeXNpY3NFbnZpcm9ubWVudDogeyAuLi50aGlzLnN0YXRlLnBoeXNpY3NFbnZpcm9ubWVudCwgY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uOiB2YWx1ZSB9IH0pXG4gICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwiUXVhZFRyZWVcIiAvPlxuICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJOb2RlIENhcGFjaXR5XCIgdmFsdWU9e1F1YWRUcmVlLmNhcGFjaXR5fVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHsgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LnVwZGF0ZVZhcnMoeyBjYXBhY2l0eTogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KTsgdGhpcy5mb3JjZVVwZGF0ZSgpIH19IC8+XG4gICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIk1heG1pbXVtIFRyZWUgRGVwdGhcIiB2YWx1ZT17UXVhZFRyZWUubWF4RGVwdGh9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4geyB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8udXBkYXRlVmFycyh7IG1heERlcHRoOiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pOyB0aGlzLmZvcmNlVXBkYXRlKCkgfX0gLz5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9XCJTaW11bGF0aW9uXCIgLz5cbiAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiUmFkaXVzXCIgdmFsdWU9e3RoaXMuc3RhdGUucmFkaXVzfVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyByYWRpdXM6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIlNwYXduIENvdW50XCIgdmFsdWU9e3RoaXMuc3RhdGUuY291bnR9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvdW50OiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgPEFjdGlvbkJ1dHRvbiBsYWJlbD1cIlNwYXduIEJvZGllc1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3Bhd25SYW5kb21Cb2RpZXN9IC8+XG4gICAgICAgICAgICA8QWN0aW9uQnV0dG9uIGxhYmVsPVwiQ2xlYXIgQm9kaWVzXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LmNsZWFyQm9kaWVzKCl9IC8+XG4gICAgICAgICAgICA8RGF0YVRvZ2dsZSBsYWJlbD1cIlNob3cgRlBTXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2hvd0ZQU31cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KF8sIGNoZWNrZWQpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93RlBTOiBjaGVja2VkIH0pfSAvPlxuICAgICAgICAgICAgPERhdGFUb2dnbGUgbGFiZWw9XCJTaG93IFF1YWRzXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2hvd1F1YWRzfVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsoXywgY2hlY2tlZCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dRdWFkczogY2hlY2tlZCB9KX0gLz5cbiAgICAgICAgICA8L0NvbnRyb2xCYXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==