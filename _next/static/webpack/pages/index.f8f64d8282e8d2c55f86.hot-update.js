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
            lineNumber: 57,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_simulation_canvas__WEBPACK_IMPORTED_MODULE_10__["default"], {
            ref: this.simulationCanvasRef,
            showFPS: this.state.showFPS,
            showQuads: this.state.showQuads,
            physicsEnvironment: this.state.physicsEnvironment,
            radius: this.state.radius
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["SectionTitle"], {
              title: "Physics"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
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
              lineNumber: 65,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["SectionTitle"], {
              title: "QuadTree"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
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
              lineNumber: 71,
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
              lineNumber: 73,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["SectionTitle"], {
              title: "Simulation"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
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
              lineNumber: 76,
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
              lineNumber: 78,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["ActionButton"], {
              label: "Spawn Bodies",
              onClick: this.spawnRandomBodies
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 80,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["ActionButton"], {
              label: "Clear Bodies",
              onClick: function onClick() {
                var _this2$simulationCanv;

                return (_this2$simulationCanv = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv === void 0 ? void 0 : _this2$simulationCanv.clearBodies();
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 82,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_11__["ActionButton"], {
              label: "Random Body",
              onClick: function onClick() {
                return _this2.spawnRandomBodies(1, 20 + Math.random() * 20);
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 84,
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
              lineNumber: 86,
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
              lineNumber: 88,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlNpbXVsYXRpb25GaWVsZHMiLCJQaHlzaWNzRW52aXJvbm1lbnQiLCJIb21lIiwicHJvcHMiLCJjcmVhdGVSZWYiLCJzdGF0ZSIsInNwYXduUmFuZG9tQm9kaWVzIiwiYmluZCIsInJhZGl1cyIsIk1hdGgiLCJjZWlsIiwibWluIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0Iiwic2V0U3RhdGUiLCJjb3VudCIsInNpbXVsYXRpb25DYW52YXNSZWYiLCJjdXJyZW50Iiwic3BlZWQiLCJpIiwiYWRkQm9keSIsInJhbmRvbVBvaW50SW5Cb3VuZHMiLCJWZWN0b3IyRCIsInJhbmRvbSIsInN0eWxlcyIsInNpbXVsYXRpb25fY29udGFpbmVyIiwic2hvd0ZQUyIsInNob3dRdWFkcyIsInBoeXNpY3NFbnZpcm9ubWVudCIsImNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiIsInZhbHVlIiwidXBkYXRlV2l0aCIsIlF1YWRUcmVlIiwiY2FwYWNpdHkiLCJ0YXJnZXQiLCJmb3JjZVVwZGF0ZSIsIm1heERlcHRoIiwiY2xlYXJCb2RpZXMiLCJfIiwiY2hlY2tlZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsZ0I7Ozs0R0FDSyxDOzsyR0FDRCxHOzs2R0FDRSxJOzsrR0FDRSxJOzt3SEFDUyxJQUFJQyxrRUFBSixFOztBQUd2QjtBQUNBO0FBQ0E7OztJQUNxQkMsSTs7Ozs7QUFFbkIsZ0JBQVlDLEtBQVosRUFBNEI7QUFBQTs7QUFBQTs7QUFDMUIsOEJBQU1BLEtBQU47O0FBRDBCLDJPQUQrQkMsdURBQVMsRUFDeEM7O0FBRTFCLFVBQUtDLEtBQUwsR0FBYSxJQUFJTCxnQkFBSixFQUFiO0FBQ0Es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LENBQUN6QixRQUFMLENBQWM7QUFBRWEsMkJBQVMsRUFBRVk7QUFBYixpQkFBZCxDQUFoQjtBQUFBO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQXdDRDs7OztFQXhFK0JDLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY4ZjY0ZDgyODJlOGQyYzU1Zjg2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZVJlZiwgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvamVjdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3QtaGVhZGVyJ1xuaW1wb3J0IFNpbXVsYXRpb25DYW52YXMsIHsgU2ltdWxhdGlvbkNhbnZhc1Byb3BzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9zaW11bGF0aW9uLWNhbnZhcydcbmltcG9ydCBDb250cm9sQmFyLCB7IEFjdGlvbkJ1dHRvbiwgRGF0YUNvbmZpZywgRGF0YVNsaWRlciwgRGF0YVRvZ2dsZSwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vY29tcG9uZW50cy9jb250cm9sLWJhcidcbmltcG9ydCB7IFF1YWRUcmVlIH0gZnJvbSAnLi4vdXRpbHMvcXVhZHRyZWUnXG5pbXBvcnQgeyBQaHlzaWNzRW52aXJvbm1lbnQgfSBmcm9tICcuLi91dGlscy9waHlzaWNzJ1xuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuLi91dGlscy92ZWN0b3IyZCdcbmltcG9ydCB7IHVwZGF0ZVdpdGggfSBmcm9tICcuLi91dGlscy9mdW5jdGlvbnMnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJ1xuXG5jbGFzcyBTaW11bGF0aW9uRmllbGRzIGltcGxlbWVudHMgU2ltdWxhdGlvbkNhbnZhc1Byb3BzIHtcbiAgcmFkaXVzID0gNVxuICBjb3VudCA9IDIwMFxuICBzaG93RlBTID0gdHJ1ZVxuICBzaG93UXVhZHMgPSB0cnVlXG4gIHBoeXNpY3NFbnZpcm9ubWVudCA9IG5ldyBQaHlzaWNzRW52aXJvbm1lbnRcbn1cblxuLyoqXG4gKiBNYWluIFBhZ2Ugd2hpY2ggY29udGFpbnMgdGhlIFF1YWRUcmVlIFZpc3VhbGl6ZXIgYW5kIENvbnRyb2wgQmFyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQ8dW5rbm93biwgU2ltdWxhdGlvbkZpZWxkcz4ge1xuICBwcml2YXRlIHNpbXVsYXRpb25DYW52YXNSZWY6IFJlZk9iamVjdDxTaW11bGF0aW9uQ2FudmFzPiA9IGNyZWF0ZVJlZigpXG4gIGNvbnN0cnVjdG9yKHByb3BzOiB1bmtub3duKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IG5ldyBTaW11bGF0aW9uRmllbGRzXG4gICAgdGhpcy5zcGF3blJhbmRvbUJvZGllcyA9IHRoaXMuc3Bhd25SYW5kb21Cb2RpZXMuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgLy8gY2FsY3VsYXRlIGEgcmFkaXVzIHRoYXQgaXMgcmVsYXRpdmVseSB0aGUgc2FtZSByYXRpbyBmb3IgYWxsIHdpbmRvd3NcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLmNlaWwoTWF0aC5taW4od2luZG93LmlubmVyV2lkdGggLyAyMDAsIHdpbmRvdy5pbm5lckhlaWdodCAvIDIwMCkpXG4gICAgLy8gc2V0IGluaXRpYWwgdmFyaWFibGVzXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJhZGl1czogcmFkaXVzIH0sIHRoaXMuc3Bhd25SYW5kb21Cb2RpZXMpXG4gIH1cblxuICAvKipcbiAgICogU3Bhd24gYSBudW1iZXIgb2YgQm9kaWVzIHdpdGggcmFuZG9tIHZlbG9jaXR5XG4gICAqIGJhc2VkIG9uIGN1cnJlbnQgc2ltdWxhdGlvbiB2YXJpYWJsZXNcbiAgICovXG4gIHNwYXduUmFuZG9tQm9kaWVzKGNvdW50OiBudW1iZXIgPSB0aGlzLnN0YXRlLmNvdW50LCByYWRpdXM6IG51bWJlciA9IHRoaXMuc3RhdGUucmFkaXVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50KSB7XG4gICAgICBjb25zdCBzcGVlZCA9IDMwMFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKVxuICAgICAgICB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudC5hZGRCb2R5KFxuICAgICAgICAgIHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50LnJhbmRvbVBvaW50SW5Cb3VuZHMocmFkaXVzKSxcbiAgICAgICAgICBuZXcgVmVjdG9yMkQoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogc3BlZWQsIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHNwZWVkKSxcbiAgICAgICAgICByYWRpdXMsXG4gICAgICAgIClcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICA8bWFpbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaW11bGF0aW9uX2NvbnRhaW5lcn0+XG4gICAgICAgICAgPFByb2plY3RIZWFkZXIgdGl0bGU9XCJRdWFkVHJlZSBWaXN1YWxpemVyXCIgeWVhcj1cIjIwMjFcIiAvPlxuICAgICAgICAgIDxTaW11bGF0aW9uQ2FudmFzIHJlZj17dGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmfVxuICAgICAgICAgICAgc2hvd0ZQUz17dGhpcy5zdGF0ZS5zaG93RlBTfVxuICAgICAgICAgICAgc2hvd1F1YWRzPXt0aGlzLnN0YXRlLnNob3dRdWFkc31cbiAgICAgICAgICAgIHBoeXNpY3NFbnZpcm9ubWVudD17dGhpcy5zdGF0ZS5waHlzaWNzRW52aXJvbm1lbnR9XG4gICAgICAgICAgICByYWRpdXM9e3RoaXMuc3RhdGUucmFkaXVzfSAvPlxuICAgICAgICAgIDxDb250cm9sQmFyPlxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT1cIlBoeXNpY3NcIiAvPlxuICAgICAgICAgICAgPERhdGFTbGlkZXIgbGFiZWw9XCJSZXN0aXR1dGlvbiBDb2VmZmljaWVudFwiIHZhbHVlPXt0aGlzLnN0YXRlLnBoeXNpY3NFbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb259XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZTogbnVtYmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdXBkYXRlV2l0aCh0aGlzLnN0YXRlLnBoeXNpY3NFbnZpcm9ubWVudCwgeyBjb2VmZmljaWVudE9mUmVzdGl0dXRpb246IHZhbHVlIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBoeXNpY3NFbnZpcm9ubWVudDogdGhpcy5zdGF0ZS5waHlzaWNzRW52aXJvbm1lbnQgfSlcbiAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgIDxTZWN0aW9uVGl0bGUgdGl0bGU9XCJRdWFkVHJlZVwiIC8+XG4gICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIk5vZGUgQ2FwYWNpdHlcIiB2YWx1ZT17UXVhZFRyZWUuY2FwYWNpdHl9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4geyB1cGRhdGVXaXRoKFF1YWRUcmVlLCB7IGNhcGFjaXR5OiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pOyB0aGlzLmZvcmNlVXBkYXRlKCkgfX0gLz5cbiAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiTWF4bWltdW0gVHJlZSBEZXB0aFwiIHZhbHVlPXtRdWFkVHJlZS5tYXhEZXB0aH1cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlKSA9PiB7IHVwZGF0ZVdpdGgoUXVhZFRyZWUsIHsgbWF4RGVwdGg6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSk7IHRoaXMuZm9yY2VVcGRhdGUoKSB9fSAvPlxuICAgICAgICAgICAgPFNlY3Rpb25UaXRsZSB0aXRsZT1cIlNpbXVsYXRpb25cIiAvPlxuICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJSYWRpdXNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5yYWRpdXN9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHJhZGl1czogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiU3Bhd24gQ291bnRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jb3VudH1cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgY291bnQ6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICA8QWN0aW9uQnV0dG9uIGxhYmVsPVwiU3Bhd24gQm9kaWVzXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zcGF3blJhbmRvbUJvZGllc30gLz5cbiAgICAgICAgICAgIDxBY3Rpb25CdXR0b24gbGFiZWw9XCJDbGVhciBCb2RpZXNcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8uY2xlYXJCb2RpZXMoKX0gLz5cbiAgICAgICAgICAgIDxBY3Rpb25CdXR0b24gbGFiZWw9XCJSYW5kb20gQm9keVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc3Bhd25SYW5kb21Cb2RpZXMoMSwgMjAgKyBNYXRoLnJhbmRvbSgpICogMjApfSAvPlxuICAgICAgICAgICAgPERhdGFUb2dnbGUgbGFiZWw9XCJTaG93IEZQU1wiIHZhbHVlPXt0aGlzLnN0YXRlLnNob3dGUFN9XG4gICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyhfLCBjaGVja2VkKSA9PiB0aGlzLnNldFN0YXRlKHsgc2hvd0ZQUzogY2hlY2tlZCB9KX0gLz5cbiAgICAgICAgICAgIDxEYXRhVG9nZ2xlIGxhYmVsPVwiU2hvdyBRdWFkc1wiIHZhbHVlPXt0aGlzLnN0YXRlLnNob3dRdWFkc31cbiAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KF8sIGNoZWNrZWQpID0+IHRoaXMuc2V0U3RhdGUoeyBzaG93UXVhZHM6IGNoZWNrZWQgfSl9IC8+XG4gICAgICAgICAgPC9Db250cm9sQmFyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICApXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=