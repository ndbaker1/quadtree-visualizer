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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_simulation_canvas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/simulation-canvas */ "./components/simulation-canvas.tsx");
/* harmony import */ var _components_control_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/control-bar */ "./components/control-bar.tsx");
/* harmony import */ var _utils_quadtree__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/quadtree */ "./utils/quadtree.ts");








var _jsxFileName = "C:\\Users\\SpicyRamenChef\\Desktop\\GitRepos\\quadtree-visualizer\\pages\\index.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Home = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Home);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "simulationCanvasRef", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_8__["createRef"])());

    _this.state = {
      radius: 10,
      count: 1,
      showFPS: true,
      showQuads: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$simulationCanva,
          _this2 = this;

      // attempt to sync simulation vars with container flags
      (_this$simulationCanva = this.simulationCanvasRef.current) === null || _this$simulationCanva === void 0 ? void 0 : _this$simulationCanva.updateVars({
        showFPS: this.state.showFPS,
        showQuads: this.state.showQuads
      }); // calculate a radius that is relatively the same retio for all windows

      var radius = Math.ceil(Math.min(window.innerWidth / 500, window.innerHeight / 500)); // 

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
      var _this3 = this,
          _this$simulationCanva2,
          _this$simulationCanva3;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
            children: "Quadtree Visualizer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
            rel: "icon",
            href: "/favicon.ico"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.simulation_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProjectHeader, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_simulation_canvas__WEBPACK_IMPORTED_MODULE_11__["default"], {
              ref: this.simulationCanvasRef,
              spawnRadius: this.state.radius
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["DataConfig"], {
                label: "Node Capacity",
                value: _utils_quadtree__WEBPACK_IMPORTED_MODULE_13__["QuadTree"].capacity,
                updateFunc: function updateFunc(value) {
                  var _this3$simulationCanv;

                  (_this3$simulationCanv = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv === void 0 ? void 0 : _this3$simulationCanv.updateVars({
                    capacity: +value.target.value
                  });

                  _this3.forceUpdate();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 49,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["DataConfig"], {
                label: "Maxmimum Tree Depth",
                value: _utils_quadtree__WEBPACK_IMPORTED_MODULE_13__["QuadTree"].maxDepth,
                updateFunc: function updateFunc(value) {
                  var _this3$simulationCanv2;

                  (_this3$simulationCanv2 = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv2 === void 0 ? void 0 : _this3$simulationCanv2.updateVars({
                    maxDepth: +value.target.value
                  });

                  _this3.forceUpdate();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["DataConfig"], {
                label: "Radius",
                value: this.state.radius,
                updateFunc: function updateFunc(value) {
                  return _this3.setState({
                    radius: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["DataConfig"], {
                label: "Spawn Count",
                value: this.state.count,
                updateFunc: function updateFunc(value) {
                  return _this3.setState({
                    count: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["ActionButton"], {
                label: "Spawn Bodies",
                onClick: function onClick() {
                  for (var i = 0; i < _this3.state.count; i++) {
                    var _this3$simulationCanv3;

                    (_this3$simulationCanv3 = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv3 === void 0 ? void 0 : _this3$simulationCanv3.addBody(_this3.state.radius);
                  }
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["ActionButton"], {
                label: "Clear Bodies",
                onClick: function onClick() {
                  var _this3$simulationCanv4;

                  return (_this3$simulationCanv4 = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv4 === void 0 ? void 0 : _this3$simulationCanv4.clearBodies();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["DataToggle"], {
                label: "Show FPS",
                value: (_this$simulationCanva2 = this.simulationCanvasRef.current) === null || _this$simulationCanva2 === void 0 ? void 0 : _this$simulationCanva2.debug.showFPS,
                updateFunc: function updateFunc(_, checked) {
                  var _this3$simulationCanv5;

                  (_this3$simulationCanv5 = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv5 === void 0 ? void 0 : _this3$simulationCanv5.updateVars({
                    showFPS: checked
                  });

                  _this3.forceUpdate();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["DataToggle"], {
                label: "Show Quads",
                value: (_this$simulationCanva3 = this.simulationCanvasRef.current) === null || _this$simulationCanva3 === void 0 ? void 0 : _this$simulationCanva3.debug.showQuads,
                updateFunc: function updateFunc(_, checked) {
                  var _this3$simulationCanv6;

                  _this3.setState({
                    showQuads: checked
                  });

                  (_this3$simulationCanv6 = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv6 === void 0 ? void 0 : _this3$simulationCanv6.updateVars({
                    showQuads: checked
                  });

                  _this3.forceUpdate();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsImNyZWF0ZVJlZiIsInN0YXRlIiwicmFkaXVzIiwiY291bnQiLCJzaG93RlBTIiwic2hvd1F1YWRzIiwic2ltdWxhdGlvbkNhbnZhc1JlZiIsImN1cnJlbnQiLCJ1cGRhdGVWYXJzIiwiTWF0aCIsImNlaWwiLCJtaW4iLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJzZXRTdGF0ZSIsImkiLCJhZGRCb2R5Iiwic3R5bGVzIiwic2ltdWxhdGlvbl9jb250YWluZXIiLCJRdWFkVHJlZSIsImNhcGFjaXR5IiwidmFsdWUiLCJ0YXJnZXQiLCJmb3JjZVVwZGF0ZSIsIm1heERlcHRoIiwiY2xlYXJCb2RpZXMiLCJkZWJ1ZyIsIl8iLCJjaGVja2VkIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFLcUJBLEk7Ozs7O0FBRW5CLGdCQUFZQyxLQUFaLEVBQTRCO0FBQUE7O0FBQUE7O0FBQzFCLDhCQUFNQSxLQUFOOztBQUQwQiwyT0FEK0JDLHVEQUFTLEVBQ3hDOztBQUUxQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQUFFLEVBREc7QUFFWEMsV0FBSyxFQUFFLENBRkk7QUFHWEMsYUFBTyxFQUFFLElBSEU7QUFJWEMsZUFBUyxFQUFFO0FBSkEsS0FBYjtBQUYwQjtBQVEzQjs7Ozt3Q0FFeUI7QUFBQTtBQUFBOztBQUN4QjtBQUNBLG9DQUFLQyxtQkFBTCxDQUF5QkMsT0FBekIsZ0ZBQWtDQyxVQUFsQyxDQUE2QztBQUFFSixlQUFPLEVBQUUsS0FBS0gsS0FBTCxDQUFXRyxPQUF0QjtBQUErQkMsaUJBQVMsRUFBRSxLQUFLSixLQUFMLENBQVdJO0FBQXJELE9BQTdDLEVBRndCLENBSXhCOztBQUNB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QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFiRixlQWVFLHFFQUFDLG1FQUFEO0FBQVkscUJBQUssRUFBQyxZQUFsQjtBQUErQixxQkFBSyw0QkFBRSxLQUFLbEIsbUJBQUwsQ0FBeUJDLE9BQTNCLDJEQUFFLHVCQUFrQ29CLEtBQWxDLENBQXdDdEIsU0FBOUU7QUFDRSwwQkFBVSxFQUFFLG9CQUFDdUIsQ0FBRCxFQUFJQyxPQUFKLEVBQWdCO0FBQUE7O0FBQUUsd0JBQUksQ0FBQ2QsUUFBTCxDQUFjO0FBQUVWLDZCQUFTLEVBQUV3QjtBQUFiLG1CQUFkOztBQUF1QyxrREFBSSxDQUFDdkIsbUJBQUwsQ0FBeUJDLE9BQXpCLGtGQUFrQ0MsVUFBbEMsQ0FBNkM7QUFBRUgsNkJBQVMsRUFBRXdCO0FBQWIsbUJBQTdDOztBQUFzRSx3QkFBSSxDQUFDTCxXQUFMO0FBQW9CO0FBRGpLO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFpQ0Q7Ozs7RUEzRCtCTSwrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jNTU0ZmJmMzZjNmY1OWViYjNhNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVSZWYsIFJlZk9iamVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuc2NzcydcbmltcG9ydCBTaW11bGF0aW9uQ2FudmFzIGZyb20gJy4uL2NvbXBvbmVudHMvc2ltdWxhdGlvbi1jYW52YXMnXG5pbXBvcnQgQ29udHJvbEJhciwgeyBBY3Rpb25CdXR0b24sIERhdGFDb25maWcsIERhdGFUb2dnbGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2NvbnRyb2wtYmFyJ1xuaW1wb3J0IHsgUXVhZFRyZWUgfSBmcm9tICcuLi91dGlscy9xdWFkdHJlZSdcblxuXG5pbnRlcmZhY2UgU3RhdGVGaWVsZHMgeyByYWRpdXM6IG51bWJlciwgY291bnQ6IG51bWJlciwgc2hvd0ZQUzogYm9vbGVhbiwgc2hvd1F1YWRzOiBib29sZWFuIH1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZSBleHRlbmRzIENvbXBvbmVudDx1bmtub3duLCBTdGF0ZUZpZWxkcz4ge1xuICBwcml2YXRlIHNpbXVsYXRpb25DYW52YXNSZWY6IFJlZk9iamVjdDxTaW11bGF0aW9uQ2FudmFzPiA9IGNyZWF0ZVJlZigpXG4gIGNvbnN0cnVjdG9yKHByb3BzOiB1bmtub3duKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJhZGl1czogMTAsXG4gICAgICBjb3VudDogMSxcbiAgICAgIHNob3dGUFM6IHRydWUsXG4gICAgICBzaG93UXVhZHM6IHRydWVcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICAvLyBhdHRlbXB0IHRvIHN5bmMgc2ltdWxhdGlvbiB2YXJzIHdpdGggY29udGFpbmVyIGZsYWdzXG4gICAgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LnVwZGF0ZVZhcnMoeyBzaG93RlBTOiB0aGlzLnN0YXRlLnNob3dGUFMsIHNob3dRdWFkczogdGhpcy5zdGF0ZS5zaG93UXVhZHMgfSlcblxuICAgIC8vIGNhbGN1bGF0ZSBhIHJhZGl1cyB0aGF0IGlzIHJlbGF0aXZlbHkgdGhlIHNhbWUgcmV0aW8gZm9yIGFsbCB3aW5kb3dzXG4gICAgY29uc3QgcmFkaXVzID0gTWF0aC5jZWlsKE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoIC8gNTAwLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyA1MDApKVxuICAgIC8vIFxuICAgIHRoaXMuc2V0U3RhdGUoeyByYWRpdXM6IHJhZGl1cywgY291bnQ6IDIwMCB9LCAoKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuY291bnQ7IGkrKylcbiAgICAgICAgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LmFkZEJvZHkodGhpcy5zdGF0ZS5yYWRpdXMpXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgIDx0aXRsZT5RdWFkdHJlZSBWaXN1YWxpemVyPC90aXRsZT5cbiAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDwvSGVhZD5cblxuICAgICAgICA8bWFpbj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpbXVsYXRpb25fY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxQcm9qZWN0SGVhZGVyIC8+XG4gICAgICAgICAgICA8U2ltdWxhdGlvbkNhbnZhcyByZWY9e3RoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZn0gc3Bhd25SYWRpdXM9e3RoaXMuc3RhdGUucmFkaXVzfSAvPlxuICAgICAgICAgICAgPENvbnRyb2xCYXI+XG4gICAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiTm9kZSBDYXBhY2l0eVwiIHZhbHVlPXtRdWFkVHJlZS5jYXBhY2l0eX1cbiAgICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHsgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LnVwZGF0ZVZhcnMoeyBjYXBhY2l0eTogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KTsgdGhpcy5mb3JjZVVwZGF0ZSgpIH19IC8+XG4gICAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiTWF4bWltdW0gVHJlZSBEZXB0aFwiIHZhbHVlPXtRdWFkVHJlZS5tYXhEZXB0aH1cbiAgICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHsgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LnVwZGF0ZVZhcnMoeyBtYXhEZXB0aDogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KTsgdGhpcy5mb3JjZVVwZGF0ZSgpIH19IC8+XG4gICAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiUmFkaXVzXCIgdmFsdWU9e3RoaXMuc3RhdGUucmFkaXVzfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHJhZGl1czogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJTcGF3biBDb3VudFwiIHZhbHVlPXt0aGlzLnN0YXRlLmNvdW50fVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvdW50OiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICA8QWN0aW9uQnV0dG9uIGxhYmVsPVwiU3Bhd24gQm9kaWVzXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5jb3VudDsgaSsrKSB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8uYWRkQm9keSh0aGlzLnN0YXRlLnJhZGl1cykgfX0gLz5cbiAgICAgICAgICAgICAgPEFjdGlvbkJ1dHRvbiBsYWJlbD1cIkNsZWFyIEJvZGllc1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LmNsZWFyQm9kaWVzKCl9IC8+XG4gICAgICAgICAgICAgIDxEYXRhVG9nZ2xlIGxhYmVsPVwiU2hvdyBGUFNcIiB2YWx1ZT17dGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LmRlYnVnLnNob3dGUFN9XG4gICAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KF8sIGNoZWNrZWQpID0+IHsgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LnVwZGF0ZVZhcnMoeyBzaG93RlBTOiBjaGVja2VkIH0pOyB0aGlzLmZvcmNlVXBkYXRlKCkgfX0gLz5cbiAgICAgICAgICAgICAgPERhdGFUb2dnbGUgbGFiZWw9XCJTaG93IFF1YWRzXCIgdmFsdWU9e3RoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py5kZWJ1Zy5zaG93UXVhZHN9XG4gICAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KF8sIGNoZWNrZWQpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHNob3dRdWFkczogY2hlY2tlZCB9KTsgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LnVwZGF0ZVZhcnMoeyBzaG93UXVhZHM6IGNoZWNrZWQgfSk7IHRoaXMuZm9yY2VVcGRhdGUoKSB9fSAvPlxuICAgICAgICAgICAgPC9Db250cm9sQmFyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=