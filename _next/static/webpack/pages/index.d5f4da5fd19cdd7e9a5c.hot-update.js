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
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.scss */ "./styles/Home.module.scss");
/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_simulation_canvas__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/simulation-canvas */ "./components/simulation-canvas.tsx");
/* harmony import */ var _components_control_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/control-bar */ "./components/control-bar.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _utils_quadtree__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/quadtree */ "./utils/quadtree.ts");








var _jsxFileName = "C:\\Users\\SpicyRamenChef\\Desktop\\GitRepos\\quadtree-visualizer\\pages\\index.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









function ActionButton(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Button"], {
    onClick: props.onClick,
    children: props.label
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

_c = ActionButton;

function DataConfig(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("form", {
    autoComplete: "off",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["TextField"], {
      onChange: props.updateFunc,
      defaultValue: props.value,
      label: props.label,
      variant: "filled",
      inputMode: "numeric"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

_c2 = DataConfig;

function DataToggle(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["FormControlLabel"], {
    control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_13__["Checkbox"], {
      checked: props.value,
      onChange: props.updateFunc
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this),
    label: props.label
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_c3 = DataToggle;

var Home = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, _Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "simulationCanvasRef", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_8__["createRef"])());

    _this.state = {
      radius: 10,
      count: 1,
      showFPS: true,
      showQuads: true
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$simulationCanva,
          _this2 = this;

      (_this$simulationCanva = this.simulationCanvasRef.current) === null || _this$simulationCanva === void 0 ? void 0 : _this$simulationCanva.updateVars({
        showFPS: this.state.showFPS,
        showQuads: this.state.showQuads
      });
      var radius = Math.ceil(Math.min(window.innerWidth / 500, window.innerHeight / 500));
      this.setState({
        radius: radius
      });
      this.setState({
        count: 200
      });
      this.forceUpdate(function () {
        for (var i = 0; i < 200; i++) {
          var _this2$simulationCanv;

          (_this2$simulationCanv = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv === void 0 ? void 0 : _this2$simulationCanv.addBody(_this2.state.radius);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
            children: "Quadtree Visualizer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("link", {
            rel: "icon",
            href: "/favicon.ico"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("main", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.simulation_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_simulation_canvas__WEBPACK_IMPORTED_MODULE_11__["default"], {
              ref: this.simulationCanvasRef,
              spawnRadius: this.state.radius
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataConfig, {
                label: "Node Capacity",
                value: _utils_quadtree__WEBPACK_IMPORTED_MODULE_14__["QuadTree"].capacity,
                updateFunc: function updateFunc(value) {
                  var _this3$simulationCanv;

                  return (_this3$simulationCanv = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv === void 0 ? void 0 : _this3$simulationCanv.updateVars({
                    capacity: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataConfig, {
                label: "Maxmimum Tree Depth",
                value: _utils_quadtree__WEBPACK_IMPORTED_MODULE_14__["QuadTree"].maxDepth,
                updateFunc: function updateFunc(value) {
                  var _this3$simulationCanv2;

                  return (_this3$simulationCanv2 = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv2 === void 0 ? void 0 : _this3$simulationCanv2.updateVars({
                    maxDepth: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataConfig, {
                label: "Radius",
                value: 5,
                updateFunc: function updateFunc(value) {
                  return _this3.setState({
                    radius: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataConfig, {
                label: "Spawn Count",
                value: this.state.count,
                updateFunc: function updateFunc(value) {
                  return _this3.setState({
                    count: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 74,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ActionButton, {
                label: "Create Bodies",
                onClick: function onClick() {
                  for (var i = 0; i < _this3.state.count; i++) {
                    var _this3$simulationCanv3;

                    (_this3$simulationCanv3 = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv3 === void 0 ? void 0 : _this3$simulationCanv3.addBody(_this3.state.radius);
                  }
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ActionButton, {
                label: "Clear Bodies",
                onClick: function onClick() {
                  var _this3$simulationCanv4;

                  return (_this3$simulationCanv4 = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv4 === void 0 ? void 0 : _this3$simulationCanv4.clearBodies();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataToggle, {
                label: "Show FPS",
                value: this.state.showFPS,
                updateFunc: function updateFunc(_, checked) {
                  var _this3$simulationCanv5;

                  _this3.setState({
                    showFPS: checked
                  });

                  (_this3$simulationCanv5 = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv5 === void 0 ? void 0 : _this3$simulationCanv5.updateVars({
                    showFPS: checked
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataToggle, {
                label: "Show Quads",
                value: this.state.showQuads,
                updateFunc: function updateFunc(_, checked) {
                  var _this3$simulationCanv6;

                  _this3.setState({
                    showQuads: checked
                  });

                  (_this3$simulationCanv6 = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv6 === void 0 ? void 0 : _this3$simulationCanv6.updateVars({
                    showQuads: checked
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7
      }, this);
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



var _c, _c2, _c3;

$RefreshReg$(_c, "ActionButton");
$RefreshReg$(_c2, "DataConfig");
$RefreshReg$(_c3, "DataToggle");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkFjdGlvbkJ1dHRvbiIsInByb3BzIiwib25DbGljayIsImxhYmVsIiwiRGF0YUNvbmZpZyIsInVwZGF0ZUZ1bmMiLCJ2YWx1ZSIsIkRhdGFUb2dnbGUiLCJIb21lIiwiY3JlYXRlUmVmIiwic3RhdGUiLCJyYWRpdXMiLCJjb3VudCIsInNob3dGUFMiLCJzaG93UXVhZHMiLCJzaW11bGF0aW9uQ2FudmFzUmVmIiwiY3VycmVudCIsInVwZGF0ZVZhcnMiLCJNYXRoIiwiY2VpbCIsIm1pbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNldFN0YXRlIiwiZm9yY2VVcGRhdGUiLCJpIiwiYWRkQm9keSIsInN0eWxlcyIsInNpbXVsYXRpb25fY29udGFpbmVyIiwiUXVhZFRyZWUiLCJjYXBhY2l0eSIsInRhcmdldCIsIm1heERlcHRoIiwiY2xlYXJCb2RpZXMiLCJfIiwiY2hlY2tlZCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBa0Y7QUFDaEYsc0JBQ0UscUVBQUMseURBQUQ7QUFBUSxXQUFPLEVBQUVBLEtBQUssQ0FBQ0MsT0FBdkI7QUFBQSxjQUFpQ0QsS0FBSyxDQUFDRTtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFHRDs7S0FKUUgsWTs7QUFNVCxTQUFTSSxVQUFULENBQXVCSCxLQUF2QixFQUEwSjtBQUN4SixzQkFDRTtBQUFNLGdCQUFZLEVBQUMsS0FBbkI7QUFBQSwyQkFDRSxxRUFBQyw0REFBRDtBQUFXLGNBQVEsRUFBRUEsS0FBSyxDQUFDSSxVQUEzQjtBQUF1QyxrQkFBWSxFQUFFSixLQUFLLENBQUNLLEtBQTNEO0FBQWtFLFdB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QUFDckIsbUJBQUwsQ0FBeUJDLE9BQXpCLGtGQUFrQ0MsVUFBbEMsQ0FBNkM7QUFBRUgsNkJBQVMsRUFBRXNCO0FBQWIsbUJBQTdDO0FBQXNFO0FBRDdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFnQ0Q7Ozs7RUF4RCtCQywrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNWY0ZGE1ZmQxOWNkZDdlOWE1Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIENvbXBvbmVudCwgY3JlYXRlUmVmLCBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXG5pbXBvcnQgU2ltdWxhdGlvbkNhbnZhcyBmcm9tICcuLi9jb21wb25lbnRzL3NpbXVsYXRpb24tY2FudmFzJ1xuaW1wb3J0IENvbnRyb2xCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250cm9sLWJhcidcbmltcG9ydCB7IFRleHRGaWVsZCwgQnV0dG9uLCBDaGVja2JveCwgRm9ybUNvbnRyb2xMYWJlbCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgUXVhZFRyZWUgfSBmcm9tICcuLi91dGlscy9xdWFkdHJlZSdcblxuZnVuY3Rpb24gQWN0aW9uQnV0dG9uKHByb3BzOiB7IG9uQ2xpY2s6ICgpID0+IHZvaWQsIGxhYmVsOiBzdHJpbmcgfSk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9Pntwcm9wcy5sYWJlbH08L0J1dHRvbj5cbiAgKVxufVxuXG5mdW5jdGlvbiBEYXRhQ29uZmlnPFQ+KHByb3BzOiB7IHZhbHVlOiBULCBsYWJlbDogc3RyaW5nLCB1cGRhdGVGdW5jOiAodmFsdWU6IENoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZCB9KTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuICAgICAgPFRleHRGaWVsZCBvbkNoYW5nZT17cHJvcHMudXBkYXRlRnVuY30gZGVmYXVsdFZhbHVlPXtwcm9wcy52YWx1ZX0gbGFiZWw9e3Byb3BzLmxhYmVsfSB2YXJpYW50PVwiZmlsbGVkXCIgaW5wdXRNb2RlPVwibnVtZXJpY1wiIC8+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmZ1bmN0aW9uIERhdGFUb2dnbGUocHJvcHM6IHsgdmFsdWU6IGJvb2xlYW4sIGxhYmVsOiBzdHJpbmcsIHVwZGF0ZUZ1bmM6IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQgfSk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRyb2xMYWJlbCBjb250cm9sPXtcbiAgICAgIDxDaGVja2JveCBjaGVja2VkPXtwcm9wcy52YWx1ZX0gb25DaGFuZ2U9e3Byb3BzLnVwZGF0ZUZ1bmN9IC8+XG4gICAgfSBsYWJlbD17cHJvcHMubGFiZWx9IC8+XG4gIClcbn1cblxuaW50ZXJmYWNlIFN0YXRlRmllbGRzIHsgcmFkaXVzOiBudW1iZXIsIGNvdW50OiBudW1iZXIsIHNob3dGUFM6IGJvb2xlYW4sIHNob3dRdWFkczogYm9vbGVhbiB9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQ8dW5rbm93biwgU3RhdGVGaWVsZHM+IHtcbiAgcHJpdmF0ZSBzaW11bGF0aW9uQ2FudmFzUmVmOiBSZWZPYmplY3Q8U2ltdWxhdGlvbkNhbnZhcz4gPSBjcmVhdGVSZWYoKVxuICBjb25zdHJ1Y3Rvcihwcm9wczogdW5rbm93bikge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByYWRpdXM6IDEwLFxuICAgICAgY291bnQ6IDEsXG4gICAgICBzaG93RlBTOiB0cnVlLFxuICAgICAgc2hvd1F1YWRzOiB0cnVlXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LnVwZGF0ZVZhcnMoeyBzaG93RlBTOiB0aGlzLnN0YXRlLnNob3dGUFMsIHNob3dRdWFkczogdGhpcy5zdGF0ZS5zaG93UXVhZHMgfSlcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLmNlaWwoTWF0aC5taW4od2luZG93LmlubmVyV2lkdGggLyA1MDAsIHdpbmRvdy5pbm5lckhlaWdodCAvIDUwMCkpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJhZGl1czogcmFkaXVzIH0pXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGNvdW50OiAyMDAgfSlcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjAwOyBpKyspXG4gICAgICAgIHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py5hZGRCb2R5KHRoaXMuc3RhdGUucmFkaXVzKVxuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+UXVhZHRyZWUgVmlzdWFsaXplcjwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaW11bGF0aW9uX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8U2ltdWxhdGlvbkNhbnZhcyByZWY9e3RoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZn0gc3Bhd25SYWRpdXM9e3RoaXMuc3RhdGUucmFkaXVzfSAvPlxuICAgICAgICAgICAgPENvbnRyb2xCYXI+XG4gICAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiTm9kZSBDYXBhY2l0eVwiIHZhbHVlPXtRdWFkVHJlZS5jYXBhY2l0eX1cbiAgICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py51cGRhdGVWYXJzKHsgY2FwYWNpdHk6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiTWF4bWltdW0gVHJlZSBEZXB0aFwiIHZhbHVlPXtRdWFkVHJlZS5tYXhEZXB0aH1cbiAgICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py51cGRhdGVWYXJzKHsgbWF4RGVwdGg6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiUmFkaXVzXCIgdmFsdWU9ezV9XG4gICAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgcmFkaXVzOiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIlNwYXduIENvdW50XCIgdmFsdWU9e3RoaXMuc3RhdGUuY291bnR9XG4gICAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlKSA9PiB0aGlzLnNldFN0YXRlKHsgY291bnQ6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgIDxBY3Rpb25CdXR0b24gbGFiZWw9XCJDcmVhdGUgQm9kaWVzXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7IGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5jb3VudDsgaSsrKSB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8uYWRkQm9keSh0aGlzLnN0YXRlLnJhZGl1cykgfX0gLz5cbiAgICAgICAgICAgICAgPEFjdGlvbkJ1dHRvbiBsYWJlbD1cIkNsZWFyIEJvZGllc1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LmNsZWFyQm9kaWVzKCl9IC8+XG4gICAgICAgICAgICAgIDxEYXRhVG9nZ2xlIGxhYmVsPVwiU2hvdyBGUFNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zaG93RlBTfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyhfLCBjaGVja2VkKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBzaG93RlBTOiBjaGVja2VkIH0pOyB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8udXBkYXRlVmFycyh7IHNob3dGUFM6IGNoZWNrZWQgfSkgfX0gLz5cbiAgICAgICAgICAgICAgPERhdGFUb2dnbGUgbGFiZWw9XCJTaG93IFF1YWRzXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2hvd1F1YWRzfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyhfLCBjaGVja2VkKSA9PiB7IHRoaXMuc2V0U3RhdGUoeyBzaG93UXVhZHM6IGNoZWNrZWQgfSk7IHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py51cGRhdGVWYXJzKHsgc2hvd1F1YWRzOiBjaGVja2VkIH0pIH19IC8+XG4gICAgICAgICAgICA8L0NvbnRyb2xCYXI+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbWFpbj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==