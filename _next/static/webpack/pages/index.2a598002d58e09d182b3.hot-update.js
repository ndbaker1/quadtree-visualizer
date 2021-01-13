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
      // calculate a radius that is relatively the same retio for all windows
      var radius = Math.ceil(Math.min(window.innerWidth / 200, window.innerHeight / 200)); // set initial variables

      this.setState({
        radius: radius,
        count: 100
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
            lineNumber: 52,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_simulation_canvas__WEBPACK_IMPORTED_MODULE_11__["default"], {
            ref: this.simulationCanvasRef,
            showFPS: this.state.showFPS,
            showQuads: this.state.showQuads,
            physicsEnvironment: this.state.physicsEnvironment,
            radius: this.state.radius
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["SectionTitle"], {
              title: "Physics"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["DataSlider"], {
              label: "Restitution Coefficient",
              value: this.state.physicsEnvironment.coefficientOfRestitution,
              updateFunc: function updateFunc(value) {
                _this2.state.physicsEnvironment.updateVar({
                  coefficientOfRestitution: value
                });

                _this2.setState({
                  physicsEnvironment: _this2.state.physicsEnvironment
                });
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["SectionTitle"], {
              title: "QuadTree"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
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
              lineNumber: 66,
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
              lineNumber: 68,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["SectionTitle"], {
              title: "Simulation"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
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
              lineNumber: 71,
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
              lineNumber: 73,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["ActionButton"], {
              label: "Spawn Bodies",
              onClick: this.spawnRandomBodies
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["ActionButton"], {
              label: "Clear Bodies",
              onClick: function onClick() {
                var _this2$simulationCanv3;

                return (_this2$simulationCanv3 = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv3 === void 0 ? void 0 : _this2$simulationCanv3.clearBodies();
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
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
              lineNumber: 79,
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
              lineNumber: 81,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNpbXVsYXRpb25GaWVsZHMiLCJQaHlzaWNzRW52aXJvbm1lbnQiLCJIb21lIiwicHJvcHMiLCJjcmVhdGVSZWYiLCJzdGF0ZSIsInNwYXduUmFuZG9tQm9kaWVzIiwiYmluZCIsInJhZGl1cyIsIk1hdGgiLCJjZWlsIiwibWluIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0U3RhdGUiLCJjb3VudCIsInNpbXVsYXRpb25DYW52YXNSZWYiLCJjdXJyZW50IiwiaSIsImFkZEJvZHkiLCJyYW5kb21Qb2ludHNJbkJvdW5kcyIsIlZlY3RvcjJEIiwicmFuZG9tIiwic3R5bGVzIiwic2ltdWxhdGlvbl9jb250YWluZXIiLCJzaG93RlBTIiwic2hvd1F1YWRzIiwicGh5c2ljc0Vudmlyb25tZW50IiwiY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uIiwidmFsdWUiLCJ1cGRhdGVWYXIiLCJRdWFkVHJlZSIsImNhcGFjaXR5IiwidXBkYXRlVmFycyIsInRhcmdldCIsImZvcmNlVXBkYXRlIiwibWF4RGVwdGgiLCJjbGVhckJvZGllcyIsIl8iLCJjaGVja2VkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxnQjs7OzRHQUNLLEM7OzJHQUNELEc7OzZHQUNFLEk7OytHQUNFLEk7O3dIQUNTLElBQUlDLGtFQUFKLEU7OztJQUdGQyxJOzs7OztBQUVuQixnQkFBWUMsS0FBWixFQUE0QjtBQUFBOztBQUFBOztBQUMxQiw4QkFBTUEsS0FBTjs7QUFEMEIsMk9BRCtCQyx1REFBUyxFQUN4Qzs7QUFFMUIsVUFBS0MsS0FBTCxHQUFhLElBQUlMLGdCQUFKLEVBQWI7QUFFQSxVQUFLTSxpQkFBTCxHQUF5QixN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MDJkNThlMDlkMTgyYjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgY3JlYXRlUmVmLCBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXG5pbXBvcnQgUHJvamVjdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3QtaGVhZGVyJ1xuaW1wb3J0IFNpbXVsYXRpb25DYW52YXMsIHsgU2ltdWxhdGlvbkNhbnZhc1Byb3BzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zaW11bGF0aW9uLWNhbnZhcydcbmltcG9ydCBDb250cm9sQmFyLCB7IEFjdGlvbkJ1dHRvbiwgRGF0YUNvbmZpZywgRGF0YVNsaWRlciwgRGF0YVRvZ2dsZSwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250cm9sLWJhcidcbmltcG9ydCB7IFF1YWRUcmVlIH0gZnJvbSAnLi4vdXRpbHMvcXVhZHRyZWUnXG5pbXBvcnQgeyBQaHlzaWNzRW52aXJvbm1lbnQgfSBmcm9tICcuLi91dGlscy9waHlzaWNzJ1xuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuLi91dGlscy92ZWN0b3IyZCdcblxuY2xhc3MgU2ltdWxhdGlvbkZpZWxkcyBpbXBsZW1lbnRzIFNpbXVsYXRpb25DYW52YXNQcm9wcyB7XG4gIHJhZGl1cyA9IDVcbiAgY291bnQgPSAyMDBcbiAgc2hvd0ZQUyA9IHRydWVcbiAgc2hvd1F1YWRzID0gdHJ1ZVxuICBwaHlzaWNzRW52aXJvbm1lbnQgPSBuZXcgUGh5c2ljc0Vudmlyb25tZW50XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQ8dW5rbm93biwgU2ltdWxhdGlvbkZpZWxkcz4ge1xuICBwcml2YXRlIHNpbXVsYXRpb25DYW52YXNSZWY6IFJlZk9iamVjdDxTaW11bGF0aW9uQ2FudmFzPiA9IGNyZWF0ZVJlZigpXG4gIGNvbnN0cnVjdG9yKHByb3BzOiB1bmtub3duKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IG5ldyBTaW11bGF0aW9uRmllbGRzXG5cbiAgICB0aGlzLnNwYXduUmFuZG9tQm9kaWVzID0gdGhpcy5zcGF3blJhbmRvbUJvZGllcy5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICAvLyBjYWxjdWxhdGUgYSByYWRpdXMgdGhhdCBpcyByZWxhdGl2ZWx5IHRoZSBzYW1lIHJldGlvIGZvciBhbGwgd2luZG93c1xuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGguY2VpbChNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCAvIDIwMCwgd2luZG93LmlubmVySGVpZ2h0IC8gMjAwKSlcbiAgICAvLyBzZXQgaW5pdGlhbCB2YXJpYWJsZXNcbiAgICB0aGlzLnNldFN0YXRlKHsgcmFkaXVzOiByYWRpdXMsIGNvdW50OiAxMDAgfSwgdGhpcy5zcGF3blJhbmRvbUJvZGllcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGF3biBhIG51bWJlciBvZiBCb2RpZXMgd2l0aCByYW5kb20gdmVsb2NpdHlcbiAgICogYmFzZWQgb24gY3VycmVudCBzaW11bGF0aW9uIHZhcmlhYmxlc1xuICAgKi9cbiAgc3Bhd25SYW5kb21Cb2RpZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50KVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmNvdW50OyBpKyspXG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50LmFkZEJvZHkoXG4gICAgICAgICAgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQucmFuZG9tUG9pbnRzSW5Cb3VuZHMoKSxcbiAgICAgICAgICBuZXcgVmVjdG9yMkQoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMjAwLCAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyMDApLFxuICAgICAgICAgIHRoaXMuc3RhdGUucmFkaXVzLFxuICAgICAgICApXG4gIH1cblxuICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaW11bGF0aW9uX2NvbnRhaW5lcn0+XG4gICAgICAgICAgPFByb2plY3RIZWFkZXIgdGl0bGU9XCJRdWFkVHJlZSBWaXN1YWxpemVyXCIgeWVhcj1cIjIwMjFcIiAvPlxuICAgICAgICAgIDxTaW11bGF0aW9uQ2FudmFzIHJlZj17dGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmfVxuICAgICAgICAgICAgc2hvd0ZQUz17dGhpcy5zdGF0ZS5zaG93RlBTfVxuICAgICAgICAgICAgc2hvd1F1YWRzPXt0aGlzLnN0YXRlLnNob3dRdWFkc31cbiAgICAgICAgICAgIHBoeXNpY3NFbnZpcm9ubWVudD17dGhpcy5zdGF0ZS5waHlzaWNzRW52aXJvbm1lbnR9XG4gICAgICAgICAgICByYWRpdXM9e3RoaXMuc3RhdGUucmFkaXVzfSAvPlxuICAgICAgICAgIDxDb250cm9sQmFyPlxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT1cIlBoeXNpY3NcIiAvPlxuICAgICAgICAgICAgPERhdGFTbGlkZXIgbGFiZWw9XCJSZXN0aXR1dGlvbiBDb2VmZmljaWVudFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBoeXNpY3NFbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb259XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5waHlzaWNzRW52aXJvbm1lbnQudXBkYXRlVmFyKHsgY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwaHlzaWNzRW52aXJvbm1lbnQ6IHRoaXMuc3RhdGUucGh5c2ljc0Vudmlyb25tZW50IH0pXG4gICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwiUXVhZFRyZWVcIiAvPlxuICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJOb2RlIENhcGFjaXR5XCIgdmFsdWU9e1F1YWRUcmVlLmNhcGFjaXR5fVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHsgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LnVwZGF0ZVZhcnMoeyBjYXBhY2l0eTogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KTsgdGhpcy5mb3JjZVVwZGF0ZSgpIH19IC8+XG4gICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIk1heG1pbXVtIFRyZWUgRGVwdGhcIiB2YWx1ZT17UXVhZFRyZWUubWF4RGVwdGh9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4geyB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8udXBkYXRlVmFycyh7IG1heERlcHRoOiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pOyB0aGlzLmZvcmNlVXBkYXRlKCkgfX0gLz5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9XCJTaW11bGF0aW9uXCIgLz5cbiAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiUmFkaXVzXCIgdmFsdWU9e3RoaXMuc3RhdGUucmFkaXVzfVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyByYWRpdXM6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIlNwYXduIENvdW50XCIgdmFsdWU9e3RoaXMuc3RhdGUuY291bnR9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvdW50OiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgPEFjdGlvbkJ1dHRvbiBsYWJlbD1cIlNwYXduIEJvZGllc1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3Bhd25SYW5kb21Cb2RpZXN9IC8+XG4gICAgICAgICAgICA8QWN0aW9uQnV0dG9uIGxhYmVsPVwiQ2xlYXIgQm9kaWVzXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LmNsZWFyQm9kaWVzKCl9IC8+XG4gICAgICAgICAgICA8RGF0YVRvZ2dsZSBsYWJlbD1cIlNob3cgRlBTXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2hvd0ZQU31cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KF8sIGNoZWNrZWQpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93RlBTOiBjaGVja2VkIH0pfSAvPlxuICAgICAgICAgICAgPERhdGFUb2dnbGUgbGFiZWw9XCJTaG93IFF1YWRzXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2hvd1F1YWRzfVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsoXywgY2hlY2tlZCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dRdWFkczogY2hlY2tlZCB9KX0gLz5cbiAgICAgICAgICA8L0NvbnRyb2xCYXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==