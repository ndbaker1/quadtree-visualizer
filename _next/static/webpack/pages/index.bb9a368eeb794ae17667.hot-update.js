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
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.count;
      var radius = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.state.radius;
      if (this.simulationCanvasRef.current) for (var i = 0; i < count; i++) {
        this.simulationCanvasRef.current.addBody(this.simulationCanvasRef.current.randomPointInBounds(), new _utils_vector2d__WEBPACK_IMPORTED_MODULE_14__["Vector2D"]((Math.random() - 0.5) * 200, (Math.random() - 0.5) * 200), radius);
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
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["ActionButton"], {
              label: "Random Body",
              onClick: function onClick() {
                return _this2.spawnRandomBodies(1, Math.random() * 100);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
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
              lineNumber: 84,
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
              lineNumber: 86,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNpbXVsYXRpb25GaWVsZHMiLCJQaHlzaWNzRW52aXJvbm1lbnQiLCJIb21lIiwicHJvcHMiLCJjcmVhdGVSZWYiLCJzdGF0ZSIsInNwYXduUmFuZG9tQm9kaWVzIiwiYmluZCIsInJhZGl1cyIsIk1hdGgiLCJjZWlsIiwibWluIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0U3RhdGUiLCJjb3VudCIsInNpbXVsYXRpb25DYW52YXNSZWYiLCJjdXJyZW50IiwiaSIsImFkZEJvZHkiLCJyYW5kb21Qb2ludEluQm91bmRzIiwiVmVjdG9yMkQiLCJyYW5kb20iLCJzdHlsZXMiLCJzaW11bGF0aW9uX2NvbnRhaW5lciIsInNob3dGUFMiLCJzaG93UXVhZHMiLCJwaHlzaWNzRW52aXJvbm1lbnQiLCJjb2VmZmljaWVudE9mUmVzdGl0dXRpb24iLCJ2YWx1ZSIsInVwZGF0ZVdpdGgiLCJRdWFkVHJlZSIsImNhcGFjaXR5IiwidGFyZ2V0IiwiZm9yY2VVcGRhdGUiLCJtYXhEZXB0aCIsImNsZWFyQm9kaWVzIiwiXyIsImNoZWNrZWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLGdCOzs7NEdBQ0ssQzs7MkdBQ0QsRzs7NkdBQ0UsSTs7K0dBQ0UsSTs7d0hBQ1MsSUFBSUMsa0VBQUosRTs7QUFHdkI7QUFDQTtBQUNBOzs7SUFDcUJDLEk7Ozs7O0FBRW5CLGdCQUFZQyxLQUFaLEVBQTRCO0FBQUE7O0FBQUE7O0FBQzFCLDhCQUFNQSxLQUFOOztBQUQwQiwyT0FEK0JDLHVEQUFTLEVBQ3hDOztBQUUxQixVQUFLQyxLQUFMLEdBQWEsSUFBSUwsZ0JBQUosRUFBYjtBQUNBLFVBQUtNLGlC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QTtBQUFBO0FBQUEsb0JBekJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUF3Q0Q7Ozs7RUF0RStCQywrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iYjlhMzY4ZWViNzk0YWUxNzY2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVSZWYsIFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFByb2plY3RIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0LWhlYWRlcidcbmltcG9ydCBTaW11bGF0aW9uQ2FudmFzLCB7IFNpbXVsYXRpb25DYW52YXNQcm9wcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2ltdWxhdGlvbi1jYW52YXMnXG5pbXBvcnQgQ29udHJvbEJhciwgeyBBY3Rpb25CdXR0b24sIERhdGFDb25maWcsIERhdGFTbGlkZXIsIERhdGFUb2dnbGUsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udHJvbC1iYXInXG5pbXBvcnQgeyBRdWFkVHJlZSB9IGZyb20gJy4uL3V0aWxzL3F1YWR0cmVlJ1xuaW1wb3J0IHsgUGh5c2ljc0Vudmlyb25tZW50IH0gZnJvbSAnLi4vdXRpbHMvcGh5c2ljcydcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdXRpbHMvdmVjdG9yMmQnXG5pbXBvcnQgeyB1cGRhdGVXaXRoIH0gZnJvbSAnLi4vdXRpbHMvZnVuY3Rpb25zJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcblxuY2xhc3MgU2ltdWxhdGlvbkZpZWxkcyBpbXBsZW1lbnRzIFNpbXVsYXRpb25DYW52YXNQcm9wcyB7XG4gIHJhZGl1cyA9IDVcbiAgY291bnQgPSAyMDBcbiAgc2hvd0ZQUyA9IHRydWVcbiAgc2hvd1F1YWRzID0gdHJ1ZVxuICBwaHlzaWNzRW52aXJvbm1lbnQgPSBuZXcgUGh5c2ljc0Vudmlyb25tZW50XG59XG5cbi8qKlxuICogTWFpbiBQYWdlIHdoaWNoIGNvbnRhaW5zIHRoZSBRdWFkVHJlZSBWaXN1YWxpemVyIGFuZCBDb250cm9sIEJhclxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50PHVua25vd24sIFNpbXVsYXRpb25GaWVsZHM+IHtcbiAgcHJpdmF0ZSBzaW11bGF0aW9uQ2FudmFzUmVmOiBSZWZPYmplY3Q8U2ltdWxhdGlvbkNhbnZhcz4gPSBjcmVhdGVSZWYoKVxuICBjb25zdHJ1Y3Rvcihwcm9wczogdW5rbm93bikge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSBuZXcgU2ltdWxhdGlvbkZpZWxkc1xuICAgIHRoaXMuc3Bhd25SYW5kb21Cb2RpZXMgPSB0aGlzLnNwYXduUmFuZG9tQm9kaWVzLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIC8vIGNhbGN1bGF0ZSBhIHJhZGl1cyB0aGF0IGlzIHJlbGF0aXZlbHkgdGhlIHNhbWUgcmF0aW8gZm9yIGFsbCB3aW5kb3dzXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5jZWlsKE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoIC8gMjAwLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyMDApKVxuICAgIC8vIHNldCBpbml0aWFsIHZhcmlhYmxlc1xuICAgIHRoaXMuc2V0U3RhdGUoeyByYWRpdXM6IHJhZGl1cyB9LCB0aGlzLnNwYXduUmFuZG9tQm9kaWVzKVxuICB9XG5cbiAgLyoqXG4gICAqIFNwYXduIGEgbnVtYmVyIG9mIEJvZGllcyB3aXRoIHJhbmRvbSB2ZWxvY2l0eVxuICAgKiBiYXNlZCBvbiBjdXJyZW50IHNpbXVsYXRpb24gdmFyaWFibGVzXG4gICAqL1xuICBzcGF3blJhbmRvbUJvZGllcyhjb3VudDogbnVtYmVyID0gdGhpcy5zdGF0ZS5jb3VudCwgcmFkaXVzOiBudW1iZXIgPSB0aGlzLnN0YXRlLnJhZGl1cyk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudClcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKylcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQuYWRkQm9keShcbiAgICAgICAgICB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudC5yYW5kb21Qb2ludEluQm91bmRzKCksXG4gICAgICAgICAgbmV3IFZlY3RvcjJEKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIwMCwgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMjAwKSxcbiAgICAgICAgICByYWRpdXMsXG4gICAgICAgIClcbiAgfVxuXG4gIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpbXVsYXRpb25fY29udGFpbmVyfT5cbiAgICAgICAgICA8UHJvamVjdEhlYWRlciB0aXRsZT1cIlF1YWRUcmVlIFZpc3VhbGl6ZXJcIiB5ZWFyPVwiMjAyMVwiIC8+XG4gICAgICAgICAgPFNpbXVsYXRpb25DYW52YXMgcmVmPXt0aGlzLnNpbXVsYXRpb25DYW52YXNSZWZ9XG4gICAgICAgICAgICBzaG93RlBTPXt0aGlzLnN0YXRlLnNob3dGUFN9XG4gICAgICAgICAgICBzaG93UXVhZHM9e3RoaXMuc3RhdGUuc2hvd1F1YWRzfVxuICAgICAgICAgICAgcGh5c2ljc0Vudmlyb25tZW50PXt0aGlzLnN0YXRlLnBoeXNpY3NFbnZpcm9ubWVudH1cbiAgICAgICAgICAgIHJhZGl1cz17dGhpcy5zdGF0ZS5yYWRpdXN9IC8+XG4gICAgICAgICAgPENvbnRyb2xCYXI+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwiUGh5c2ljc1wiIC8+XG4gICAgICAgICAgICA8RGF0YVNsaWRlciBsYWJlbD1cIlJlc3RpdHV0aW9uIENvZWZmaWNpZW50XCIgdmFsdWU9e3RoaXMuc3RhdGUucGh5c2ljc0Vudmlyb25tZW50LmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbn1cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICB1cGRhdGVXaXRoKHRoaXMuc3RhdGUucGh5c2ljc0Vudmlyb25tZW50LCB7IGNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbjogdmFsdWUgfSlcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGh5c2ljc0Vudmlyb25tZW50OiB0aGlzLnN0YXRlLnBoeXNpY3NFbnZpcm9ubWVudCB9KVxuICAgICAgICAgICAgICB9fSAvPlxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT1cIlF1YWRUcmVlXCIgLz5cbiAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiTm9kZSBDYXBhY2l0eVwiIHZhbHVlPXtRdWFkVHJlZS5jYXBhY2l0eX1cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlKSA9PiB7IHVwZGF0ZVdpdGgoUXVhZFRyZWUsIHsgY2FwYWNpdHk6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSk7IHRoaXMuZm9yY2VVcGRhdGUoKSB9fSAvPlxuICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJNYXhtaW11bSBUcmVlIERlcHRoXCIgdmFsdWU9e1F1YWRUcmVlLm1heERlcHRofVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHsgdXBkYXRlV2l0aChRdWFkVHJlZSwgeyBtYXhEZXB0aDogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KTsgdGhpcy5mb3JjZVVwZGF0ZSgpIH19IC8+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwiU2ltdWxhdGlvblwiIC8+XG4gICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIlJhZGl1c1wiIHZhbHVlPXt0aGlzLnN0YXRlLnJhZGl1c31cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgcmFkaXVzOiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJTcGF3biBDb3VudFwiIHZhbHVlPXt0aGlzLnN0YXRlLmNvdW50fVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3VudDogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgIDxBY3Rpb25CdXR0b24gbGFiZWw9XCJTcGF3biBCb2RpZXNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnNwYXduUmFuZG9tQm9kaWVzfSAvPlxuICAgICAgICAgICAgPEFjdGlvbkJ1dHRvbiBsYWJlbD1cIkNsZWFyIEJvZGllc1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py5jbGVhckJvZGllcygpfSAvPlxuICAgICAgICAgICAgPEFjdGlvbkJ1dHRvbiBsYWJlbD1cIlJhbmRvbSBCb2R5XCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zcGF3blJhbmRvbUJvZGllcygxLCBNYXRoLnJhbmRvbSgpICogMTAwKX0gLz5cbiAgICAgICAgICAgIDxEYXRhVG9nZ2xlIGxhYmVsPVwiU2hvdyBGUFNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zaG93RlBTfVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsoXywgY2hlY2tlZCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dGUFM6IGNoZWNrZWQgfSl9IC8+XG4gICAgICAgICAgICA8RGF0YVRvZ2dsZSBsYWJlbD1cIlNob3cgUXVhZHNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zaG93UXVhZHN9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyhfLCBjaGVja2VkKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1F1YWRzOiBjaGVja2VkIH0pfSAvPlxuICAgICAgICAgIDwvQ29udHJvbEJhcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9