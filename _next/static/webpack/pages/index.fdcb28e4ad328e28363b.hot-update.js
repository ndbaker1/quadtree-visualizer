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

      if (this.simulationCanvasRef.current) {
        var speed = 300;
        alert(count + '  ' + this.state.count + '  ' + radius);

        for (var i = 0; i < count; i++) {
          this.simulationCanvasRef.current.addBody(this.simulationCanvasRef.current.randomPointInBounds(radius), new _utils_vector2d__WEBPACK_IMPORTED_MODULE_14__["Vector2D"]((Math.random() - 0.5) * speed, (Math.random() - 0.5) * speed), radius);
        }
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
            lineNumber: 58,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_simulation_canvas__WEBPACK_IMPORTED_MODULE_10__["default"], {
            ref: this.simulationCanvasRef,
            showFPS: this.state.showFPS,
            showQuads: this.state.showQuads,
            physicsEnvironment: this.state.physicsEnvironment,
            radius: this.state.radius
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["SectionTitle"], {
              title: "Physics"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
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
              lineNumber: 66,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["SectionTitle"], {
              title: "QuadTree"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
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
              lineNumber: 72,
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
              lineNumber: 74,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["SectionTitle"], {
              title: "Simulation"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
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
              lineNumber: 77,
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
              lineNumber: 79,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["ActionButton"], {
              label: "Spawn Bodies",
              onClick: this.spawnRandomBodies
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["ActionButton"], {
              label: "Clear Bodies",
              onClick: function onClick() {
                var _this2$simulationCanv;

                return (_this2$simulationCanv = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv === void 0 ? void 0 : _this2$simulationCanv.clearBodies();
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["ActionButton"], {
              label: "Random Body",
              onClick: function onClick() {
                return _this2.spawnRandomBodies(1, 20 + Math.random() * 20);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
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
              lineNumber: 87,
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
              lineNumber: 89,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNpbXVsYXRpb25GaWVsZHMiLCJQaHlzaWNzRW52aXJvbm1lbnQiLCJIb21lIiwicHJvcHMiLCJjcmVhdGVSZWYiLCJzdGF0ZSIsInNwYXduUmFuZG9tQm9kaWVzIiwiYmluZCIsInJhZGl1cyIsIk1hdGgiLCJjZWlsIiwibWluIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0U3RhdGUiLCJjb3VudCIsInNpbXVsYXRpb25DYW52YXNSZWYiLCJjdXJyZW50Iiwic3BlZWQiLCJhbGVydCIsImkiLCJhZGRCb2R5IiwicmFuZG9tUG9pbnRJbkJvdW5kcyIsIlZlY3RvcjJEIiwicmFuZG9tIiwic3R5bGVzIiwic2ltdWxhdGlvbl9jb250YWluZXIiLCJzaG93RlBTIiwic2hvd1F1YWRzIiwicGh5c2ljc0Vudmlyb25tZW50IiwiY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uIiwidmFsdWUiLCJ1cGRhdGVXaXRoIiwiUXVhZFRyZWUiLCJjYXBhY2l0eSIsInRhcmdldCIsImZvcmNlVXBkYXRlIiwibWF4RGVwdGgiLCJjbGVhckJvZGllcyIsIl8iLCJjaGVja2VkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxnQjs7OzRHQUNLLEM7OzJHQUNELEc7OzZHQUNFLEk7OytHQUNFLEk7O3dIQUNTLElBQUlDLGtFQUFKLEU7O0FBR3ZCO0FBQ0E7QUFDQTs7O0lBQ3FCQyxJOzs7OztBQUVuQixnQkFBWUMsS0FBWixFQUE0QjtBQUFBOztBQUFBOztBQUMxQiw4QkFBTUEsS0FBTjs7QUFEMEIsMk9BRCtCQyx1REFBUyxFQUN4Qzs7QUFFMUIsVUFBS0MsS0FBTCxHQUFhLElBQUlMLGdCQUFKLEVB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LFlBQWxCO0FBQStCLG1CQUFLLEVBQUUsS0FBS3BDLEtBQUwsQ0FBV3dCLFNBQWpEO0FBQ0Usd0JBQVUsRUFBRSxvQkFBQ1csQ0FBRCxFQUFJQyxPQUFKO0FBQUEsdUJBQWdCLE1BQUksQ0FBQzFCLFFBQUwsQ0FBYztBQUFFYywyQkFBUyxFQUFFWTtBQUFiLGlCQUFkLENBQWhCO0FBQUE7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQXpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBd0NEOzs7O0VBekUrQkMsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmRjYjI4ZTRhZDMyOGUyODM2M2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgY3JlYXRlUmVmLCBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9qZWN0SGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvcHJvamVjdC1oZWFkZXInXG5pbXBvcnQgU2ltdWxhdGlvbkNhbnZhcywgeyBTaW11bGF0aW9uQ2FudmFzUHJvcHMgfSBmcm9tICcuLi9jb21wb25lbnRzL3NpbXVsYXRpb24tY2FudmFzJ1xuaW1wb3J0IENvbnRyb2xCYXIsIHsgQWN0aW9uQnV0dG9uLCBEYXRhQ29uZmlnLCBEYXRhU2xpZGVyLCBEYXRhVG9nZ2xlLCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRyb2wtYmFyJ1xuaW1wb3J0IHsgUXVhZFRyZWUgfSBmcm9tICcuLi91dGlscy9xdWFkdHJlZSdcbmltcG9ydCB7IFBoeXNpY3NFbnZpcm9ubWVudCB9IGZyb20gJy4uL3V0aWxzL3BoeXNpY3MnXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJy4uL3V0aWxzL3ZlY3RvcjJkJ1xuaW1wb3J0IHsgdXBkYXRlV2l0aCB9IGZyb20gJy4uL3V0aWxzL2Z1bmN0aW9ucydcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXG5cbmNsYXNzIFNpbXVsYXRpb25GaWVsZHMgaW1wbGVtZW50cyBTaW11bGF0aW9uQ2FudmFzUHJvcHMge1xuICByYWRpdXMgPSA1XG4gIGNvdW50ID0gMjAwXG4gIHNob3dGUFMgPSB0cnVlXG4gIHNob3dRdWFkcyA9IHRydWVcbiAgcGh5c2ljc0Vudmlyb25tZW50ID0gbmV3IFBoeXNpY3NFbnZpcm9ubWVudFxufVxuXG4vKipcbiAqIE1haW4gUGFnZSB3aGljaCBjb250YWlucyB0aGUgUXVhZFRyZWUgVmlzdWFsaXplciBhbmQgQ29udHJvbCBCYXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudDx1bmtub3duLCBTaW11bGF0aW9uRmllbGRzPiB7XG4gIHByaXZhdGUgc2ltdWxhdGlvbkNhbnZhc1JlZjogUmVmT2JqZWN0PFNpbXVsYXRpb25DYW52YXM+ID0gY3JlYXRlUmVmKClcbiAgY29uc3RydWN0b3IocHJvcHM6IHVua25vd24pIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0gbmV3IFNpbXVsYXRpb25GaWVsZHNcbiAgICB0aGlzLnNwYXduUmFuZG9tQm9kaWVzID0gdGhpcy5zcGF3blJhbmRvbUJvZGllcy5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICAvLyBjYWxjdWxhdGUgYSByYWRpdXMgdGhhdCBpcyByZWxhdGl2ZWx5IHRoZSBzYW1lIHJhdGlvIGZvciBhbGwgd2luZG93c1xuICAgIGNvbnN0IHJhZGl1cyA9IE1hdGguY2VpbChNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCAvIDIwMCwgd2luZG93LmlubmVySGVpZ2h0IC8gMjAwKSlcbiAgICAvLyBzZXQgaW5pdGlhbCB2YXJpYWJsZXNcbiAgICB0aGlzLnNldFN0YXRlKHsgcmFkaXVzOiByYWRpdXMgfSwgdGhpcy5zcGF3blJhbmRvbUJvZGllcylcbiAgfVxuXG4gIC8qKlxuICAgKiBTcGF3biBhIG51bWJlciBvZiBCb2RpZXMgd2l0aCByYW5kb20gdmVsb2NpdHlcbiAgICogYmFzZWQgb24gY3VycmVudCBzaW11bGF0aW9uIHZhcmlhYmxlc1xuICAgKi9cbiAgc3Bhd25SYW5kb21Cb2RpZXMoY291bnQ6IG51bWJlciA9IHRoaXMuc3RhdGUuY291bnQsIHJhZGl1czogbnVtYmVyID0gdGhpcy5zdGF0ZS5yYWRpdXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IHNwZWVkID0gMzAwXG4gICAgICBhbGVydChjb3VudCArICcgICcgKyB0aGlzLnN0YXRlLmNvdW50ICsgJyAgJyArIHJhZGl1cylcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKylcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQuYWRkQm9keShcbiAgICAgICAgICB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudC5yYW5kb21Qb2ludEluQm91bmRzKHJhZGl1cyksXG4gICAgICAgICAgbmV3IFZlY3RvcjJEKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHNwZWVkLCAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBzcGVlZCksXG4gICAgICAgICAgcmFkaXVzLFxuICAgICAgICApXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgPG1haW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2ltdWxhdGlvbl9jb250YWluZXJ9PlxuICAgICAgICAgIDxQcm9qZWN0SGVhZGVyIHRpdGxlPVwiUXVhZFRyZWUgVmlzdWFsaXplclwiIHllYXI9XCIyMDIxXCIgLz5cbiAgICAgICAgICA8U2ltdWxhdGlvbkNhbnZhcyByZWY9e3RoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZn1cbiAgICAgICAgICAgIHNob3dGUFM9e3RoaXMuc3RhdGUuc2hvd0ZQU31cbiAgICAgICAgICAgIHNob3dRdWFkcz17dGhpcy5zdGF0ZS5zaG93UXVhZHN9XG4gICAgICAgICAgICBwaHlzaWNzRW52aXJvbm1lbnQ9e3RoaXMuc3RhdGUucGh5c2ljc0Vudmlyb25tZW50fVxuICAgICAgICAgICAgcmFkaXVzPXt0aGlzLnN0YXRlLnJhZGl1c30gLz5cbiAgICAgICAgICA8Q29udHJvbEJhcj5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9XCJQaHlzaWNzXCIgLz5cbiAgICAgICAgICAgIDxEYXRhU2xpZGVyIGxhYmVsPVwiUmVzdGl0dXRpb24gQ29lZmZpY2llbnRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5waHlzaWNzRW52aXJvbm1lbnQuY29lZmZpY2llbnRPZlJlc3RpdHV0aW9ufVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWU6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgIHVwZGF0ZVdpdGgodGhpcy5zdGF0ZS5waHlzaWNzRW52aXJvbm1lbnQsIHsgY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uOiB2YWx1ZSB9KVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwaHlzaWNzRW52aXJvbm1lbnQ6IHRoaXMuc3RhdGUucGh5c2ljc0Vudmlyb25tZW50IH0pXG4gICAgICAgICAgICAgIH19IC8+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwiUXVhZFRyZWVcIiAvPlxuICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJOb2RlIENhcGFjaXR5XCIgdmFsdWU9e1F1YWRUcmVlLmNhcGFjaXR5fVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHsgdXBkYXRlV2l0aChRdWFkVHJlZSwgeyBjYXBhY2l0eTogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KTsgdGhpcy5mb3JjZVVwZGF0ZSgpIH19IC8+XG4gICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIk1heG1pbXVtIFRyZWUgRGVwdGhcIiB2YWx1ZT17UXVhZFRyZWUubWF4RGVwdGh9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4geyB1cGRhdGVXaXRoKFF1YWRUcmVlLCB7IG1heERlcHRoOiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pOyB0aGlzLmZvcmNlVXBkYXRlKCkgfX0gLz5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9XCJTaW11bGF0aW9uXCIgLz5cbiAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiUmFkaXVzXCIgdmFsdWU9e3RoaXMuc3RhdGUucmFkaXVzfVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyByYWRpdXM6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIlNwYXduIENvdW50XCIgdmFsdWU9e3RoaXMuc3RhdGUuY291bnR9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvdW50OiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgPEFjdGlvbkJ1dHRvbiBsYWJlbD1cIlNwYXduIEJvZGllc1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3Bhd25SYW5kb21Cb2RpZXN9IC8+XG4gICAgICAgICAgICA8QWN0aW9uQnV0dG9uIGxhYmVsPVwiQ2xlYXIgQm9kaWVzXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LmNsZWFyQm9kaWVzKCl9IC8+XG4gICAgICAgICAgICA8QWN0aW9uQnV0dG9uIGxhYmVsPVwiUmFuZG9tIEJvZHlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNwYXduUmFuZG9tQm9kaWVzKDEsIDIwICsgTWF0aC5yYW5kb20oKSAqIDIwKX0gLz5cbiAgICAgICAgICAgIDxEYXRhVG9nZ2xlIGxhYmVsPVwiU2hvdyBGUFNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zaG93RlBTfVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsoXywgY2hlY2tlZCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dGUFM6IGNoZWNrZWQgfSl9IC8+XG4gICAgICAgICAgICA8RGF0YVRvZ2dsZSBsYWJlbD1cIlNob3cgUXVhZHNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zaG93UXVhZHN9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyhfLCBjaGVja2VkKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1F1YWRzOiBjaGVja2VkIH0pfSAvPlxuICAgICAgICAgIDwvQ29udHJvbEJhcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9