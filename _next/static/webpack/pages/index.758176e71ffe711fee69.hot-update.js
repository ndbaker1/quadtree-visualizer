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
            lineNumber: 55,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_simulation_canvas__WEBPACK_IMPORTED_MODULE_11__["default"], {
            ref: this.simulationCanvasRef,
            showFPS: this.state.showFPS,
            showQuads: this.state.showQuads,
            physicsEnvironment: this.state.physicsEnvironment,
            radius: this.state.radius
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["SectionTitle"], {
              title: "Physics"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
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
              lineNumber: 63,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["SectionTitle"], {
              title: "QuadTree"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
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
              lineNumber: 69,
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
              lineNumber: 71,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["SectionTitle"], {
              title: "Simulation"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
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
              lineNumber: 74,
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
              lineNumber: 76,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["ActionButton"], {
              label: "Spawn Bodies",
              onClick: this.spawnRandomBodies
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["ActionButton"], {
              label: "Clear Bodies",
              onClick: function onClick() {
                var _this2$simulationCanv3;

                return (_this2$simulationCanv3 = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv3 === void 0 ? void 0 : _this2$simulationCanv3.clearBodies();
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
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
              lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNpbXVsYXRpb25GaWVsZHMiLCJQaHlzaWNzRW52aXJvbm1lbnQiLCJIb21lIiwicHJvcHMiLCJjcmVhdGVSZWYiLCJzdGF0ZSIsInNwYXduUmFuZG9tQm9kaWVzIiwiYmluZCIsInJhZGl1cyIsIk1hdGgiLCJjZWlsIiwibWluIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0U3RhdGUiLCJzaW11bGF0aW9uQ2FudmFzUmVmIiwiY3VycmVudCIsImkiLCJjb3VudCIsImFkZEJvZHkiLCJyYW5kb21Qb2ludHNJbkJvdW5kcyIsIlZlY3RvcjJEIiwicmFuZG9tIiwic3R5bGVzIiwic2ltdWxhdGlvbl9jb250YWluZXIiLCJzaG93RlBTIiwic2hvd1F1YWRzIiwicGh5c2ljc0Vudmlyb25tZW50IiwiY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uIiwidmFsdWUiLCJ1cGRhdGVWYXIiLCJRdWFkVHJlZSIsImNhcGFjaXR5IiwidXBkYXRlVmFycyIsInRhcmdldCIsImZvcmNlVXBkYXRlIiwibWF4RGVwdGgiLCJjbGVhckJvZGllcyIsIl8iLCJjaGVja2VkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxnQjs7OzRHQUNLLEM7OzJHQUNELEc7OzZHQUNFLEk7OytHQUNFLEk7O3dIQUNTLElBQUlDLGtFQUFKLEU7O0FBR3ZCO0FBQ0E7QUFDQTs7O0lBQ3FCQyxJOzs7OztBQUVuQixnQkFBWUMsS0FBWixFQUE0QjtBQUFBOztBQUFBOztBQUMxQiw4QkFBTUEsS0FBTjs7QUFEMEIsMk9BRCtCQyx1REFBUyxFQUN4Qzs7QUFFMUIsVUFBS0MsS0FBTCxHQUFhLElBQUlMLGdCQUFKLEVBQWI7QUFFQSxV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ZTcxMWZlZTY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZVJlZiwgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IFByb2plY3RIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0LWhlYWRlcidcbmltcG9ydCBTaW11bGF0aW9uQ2FudmFzLCB7IFNpbXVsYXRpb25DYW52YXNQcm9wcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvc2ltdWxhdGlvbi1jYW52YXMnXG5pbXBvcnQgQ29udHJvbEJhciwgeyBBY3Rpb25CdXR0b24sIERhdGFDb25maWcsIERhdGFTbGlkZXIsIERhdGFUb2dnbGUsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvY29udHJvbC1iYXInXG5pbXBvcnQgeyBRdWFkVHJlZSB9IGZyb20gJy4uL3V0aWxzL3F1YWR0cmVlJ1xuaW1wb3J0IHsgUGh5c2ljc0Vudmlyb25tZW50IH0gZnJvbSAnLi4vdXRpbHMvcGh5c2ljcydcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdXRpbHMvdmVjdG9yMmQnXG5cbmNsYXNzIFNpbXVsYXRpb25GaWVsZHMgaW1wbGVtZW50cyBTaW11bGF0aW9uQ2FudmFzUHJvcHMge1xuICByYWRpdXMgPSA1XG4gIGNvdW50ID0gMjAwXG4gIHNob3dGUFMgPSB0cnVlXG4gIHNob3dRdWFkcyA9IHRydWVcbiAgcGh5c2ljc0Vudmlyb25tZW50ID0gbmV3IFBoeXNpY3NFbnZpcm9ubWVudFxufVxuXG4vKipcbiAqIE1haW4gUGFnZSB3aGljaCBjb250YWlucyB0aGUgUXVhZFRyZWUgVmlzdWFsaXplciBhbmQgQ29udHJvbCBCYXJcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudDx1bmtub3duLCBTaW11bGF0aW9uRmllbGRzPiB7XG4gIHByaXZhdGUgc2ltdWxhdGlvbkNhbnZhc1JlZjogUmVmT2JqZWN0PFNpbXVsYXRpb25DYW52YXM+ID0gY3JlYXRlUmVmKClcbiAgY29uc3RydWN0b3IocHJvcHM6IHVua25vd24pIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0gbmV3IFNpbXVsYXRpb25GaWVsZHNcblxuICAgIHRoaXMuc3Bhd25SYW5kb21Cb2RpZXMgPSB0aGlzLnNwYXduUmFuZG9tQm9kaWVzLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIC8vIGNhbGN1bGF0ZSBhIHJhZGl1cyB0aGF0IGlzIHJlbGF0aXZlbHkgdGhlIHNhbWUgcmF0aW8gZm9yIGFsbCB3aW5kb3dzXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5jZWlsKE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoIC8gMjAwLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyMDApKVxuICAgIC8vIHNldCBpbml0aWFsIHZhcmlhYmxlc1xuICAgIHRoaXMuc2V0U3RhdGUoeyByYWRpdXM6IHJhZGl1cyB9LCB0aGlzLnNwYXduUmFuZG9tQm9kaWVzKVxuICB9XG5cbiAgLyoqXG4gICAqIFNwYXduIGEgbnVtYmVyIG9mIEJvZGllcyB3aXRoIHJhbmRvbSB2ZWxvY2l0eVxuICAgKiBiYXNlZCBvbiBjdXJyZW50IHNpbXVsYXRpb24gdmFyaWFibGVzXG4gICAqL1xuICBzcGF3blJhbmRvbUJvZGllcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQpXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuY291bnQ7IGkrKylcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQuYWRkQm9keShcbiAgICAgICAgICB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudC5yYW5kb21Qb2ludHNJbkJvdW5kcygpLFxuICAgICAgICAgIG5ldyBWZWN0b3IyRCgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyMDAsIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIwMCksXG4gICAgICAgICAgdGhpcy5zdGF0ZS5yYWRpdXMsXG4gICAgICAgIClcbiAgfVxuXG4gIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxtYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpbXVsYXRpb25fY29udGFpbmVyfT5cbiAgICAgICAgICA8UHJvamVjdEhlYWRlciB0aXRsZT1cIlF1YWRUcmVlIFZpc3VhbGl6ZXJcIiB5ZWFyPVwiMjAyMVwiIC8+XG4gICAgICAgICAgPFNpbXVsYXRpb25DYW52YXMgcmVmPXt0aGlzLnNpbXVsYXRpb25DYW52YXNSZWZ9XG4gICAgICAgICAgICBzaG93RlBTPXt0aGlzLnN0YXRlLnNob3dGUFN9XG4gICAgICAgICAgICBzaG93UXVhZHM9e3RoaXMuc3RhdGUuc2hvd1F1YWRzfVxuICAgICAgICAgICAgcGh5c2ljc0Vudmlyb25tZW50PXt0aGlzLnN0YXRlLnBoeXNpY3NFbnZpcm9ubWVudH1cbiAgICAgICAgICAgIHJhZGl1cz17dGhpcy5zdGF0ZS5yYWRpdXN9IC8+XG4gICAgICAgICAgPENvbnRyb2xCYXI+XG4gICAgICAgICAgICA8U2VjdGlvblRpdGxlIHRpdGxlPVwiUGh5c2ljc1wiIC8+XG4gICAgICAgICAgICA8RGF0YVNsaWRlciBsYWJlbD1cIlJlc3RpdHV0aW9uIENvZWZmaWNpZW50XCIgdmFsdWU9e3RoaXMuc3RhdGUucGh5c2ljc0Vudmlyb25tZW50LmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbn1cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlOiBudW1iZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBoeXNpY3NFbnZpcm9ubWVudC51cGRhdGVWYXIoeyBjb2VmZmljaWVudE9mUmVzdGl0dXRpb246IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBoeXNpY3NFbnZpcm9ubWVudDogdGhpcy5zdGF0ZS5waHlzaWNzRW52aXJvbm1lbnQgfSlcbiAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9XCJRdWFkVHJlZVwiIC8+XG4gICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIk5vZGUgQ2FwYWNpdHlcIiB2YWx1ZT17UXVhZFRyZWUuY2FwYWNpdHl9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4geyB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8udXBkYXRlVmFycyh7IGNhcGFjaXR5OiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pOyB0aGlzLmZvcmNlVXBkYXRlKCkgfX0gLz5cbiAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiTWF4bWltdW0gVHJlZSBEZXB0aFwiIHZhbHVlPXtRdWFkVHJlZS5tYXhEZXB0aH1cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlKSA9PiB7IHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py51cGRhdGVWYXJzKHsgbWF4RGVwdGg6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSk7IHRoaXMuZm9yY2VVcGRhdGUoKSB9fSAvPlxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT1cIlNpbXVsYXRpb25cIiAvPlxuICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJSYWRpdXNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yYWRpdXN9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHJhZGl1czogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiU3Bhd24gQ291bnRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jb3VudH1cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgY291bnQ6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICA8QWN0aW9uQnV0dG9uIGxhYmVsPVwiU3Bhd24gQm9kaWVzXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zcGF3blJhbmRvbUJvZGllc30gLz5cbiAgICAgICAgICAgIDxBY3Rpb25CdXR0b24gbGFiZWw9XCJDbGVhciBCb2RpZXNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8uY2xlYXJCb2RpZXMoKX0gLz5cbiAgICAgICAgICAgIDxEYXRhVG9nZ2xlIGxhYmVsPVwiU2hvdyBGUFNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zaG93RlBTfVxuICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsoXywgY2hlY2tlZCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNob3dGUFM6IGNoZWNrZWQgfSl9IC8+XG4gICAgICAgICAgICA8RGF0YVRvZ2dsZSBsYWJlbD1cIlNob3cgUXVhZHNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zaG93UXVhZHN9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyhfLCBjaGVja2VkKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd1F1YWRzOiBjaGVja2VkIH0pfSAvPlxuICAgICAgICAgIDwvQ29udHJvbEJhcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9