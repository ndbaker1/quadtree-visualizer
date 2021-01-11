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

      // attempt to sync simulation vars with container flags
      (_this$simulationCanva = this.simulationCanvasRef.current) === null || _this$simulationCanva === void 0 ? void 0 : _this$simulationCanva.updateVars({
        showFPS: this.state.showFPS,
        showQuads: this.state.showQuads
      }); // calculate a radius that is relatively the same retio for all windows

      var radius = Math.ceil(Math.min(window.innerWidth / 500, window.innerHeight / 500));
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
      var _this3 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
            children: "Quadtree Visualizer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("link", {
            rel: "icon",
            href: "/favicon.ico"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("main", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.simulation_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_simulation_canvas__WEBPACK_IMPORTED_MODULE_11__["default"], {
              ref: this.simulationCanvasRef,
              spawnRadius: this.state.radius
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
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
                lineNumber: 69,
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
                lineNumber: 71,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataConfig, {
                label: "Radius",
                value: this.state.radius,
                updateFunc: function updateFunc(value) {
                  return _this3.setState({
                    radius: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
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
                lineNumber: 75,
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
                lineNumber: 77,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ActionButton, {
                label: "Clear Bodies",
                onClick: function onClick() {
                  var _this3$simulationCanv4;

                  return (_this3$simulationCanv4 = _this3.simulationCanvasRef.current) === null || _this3$simulationCanv4 === void 0 ? void 0 : _this3$simulationCanv4.clearBodies();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
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
                lineNumber: 81,
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
                lineNumber: 83,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 59,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkFjdGlvbkJ1dHRvbiIsInByb3BzIiwib25DbGljayIsImxhYmVsIiwiRGF0YUNvbmZpZyIsInVwZGF0ZUZ1bmMiLCJ2YWx1ZSIsIkRhdGFUb2dnbGUiLCJIb21lIiwiY3JlYXRlUmVmIiwic3RhdGUiLCJyYWRpdXMiLCJjb3VudCIsInNob3dGUFMiLCJzaG93UXVhZHMiLCJzaW11bGF0aW9uQ2FudmFzUmVmIiwiY3VycmVudCIsInVwZGF0ZVZhcnMiLCJNYXRoIiwiY2VpbCIsIm1pbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNldFN0YXRlIiwiaSIsImFkZEJvZHkiLCJzdHlsZXMiLCJzaW11bGF0aW9uX2NvbnRhaW5lciIsIlF1YWRUcmVlIiwiY2FwYWNpdHkiLCJ0YXJnZXQiLCJtYXhEZXB0aCIsImNsZWFyQm9kaWVzIiwiXyIsImNoZWNrZWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQWtGO0FBQ2hGLHNCQUNFLHFFQUFDLHlEQUFEO0FBQVEsV0FBTyxFQUFFQSxLQUFLLENBQUNDLE9BQXZCO0FBQUEsY0FBaUNELEtBQUssQ0FBQ0U7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0Q7O0tBSlFILFk7O0FBTVQsU0FBU0ksVUFBVCxDQUF1QkgsS0FBdkIsRUFBMEo7QUFDeEosc0JBQ0U7QUFBTSxnQkFBWSxFQUFDLEtBQW5CO0FBQUEsMkJBQ0UscUVBQUMsNERBQUQ7QUFBVyxjQUFRLEVBQUVBLEtBQUssQ0FBQ0ksVUFBM0I7QUFBdUMsa0JBQVksRUFBRUosS0FBSyxDQUFDSyxLQUEzRDtBQUFrRSxXQUFLLEVBQUVMLEtBQUss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Q0FBQ3BCLG1CQUFMLENBQXlCQyxPQUF6QixrRkFBa0NDLFVBQWxDLENBQTZDO0FBQUVILDZCQUFTLEVBQUVxQjtBQUFiLG1CQUE3QztBQUFzRTtBQUQ3STtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBZ0NEOzs7O0VBekQrQkMsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTlhYmQzMjRkMDAzNDU3MTJhY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZUV2ZW50LCBDb21wb25lbnQsIGNyZWF0ZVJlZiwgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IFNpbXVsYXRpb25DYW52YXMgZnJvbSAnLi4vY29tcG9uZW50cy9zaW11bGF0aW9uLWNhbnZhcydcbmltcG9ydCBDb250cm9sQmFyIGZyb20gJy4uL2NvbXBvbmVudHMvY29udHJvbC1iYXInXG5pbXBvcnQgeyBUZXh0RmllbGQsIEJ1dHRvbiwgQ2hlY2tib3gsIEZvcm1Db250cm9sTGFiZWwgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcbmltcG9ydCB7IFF1YWRUcmVlIH0gZnJvbSAnLi4vdXRpbHMvcXVhZHRyZWUnXG5cbmZ1bmN0aW9uIEFjdGlvbkJ1dHRvbihwcm9wczogeyBvbkNsaWNrOiAoKSA9PiB2b2lkLCBsYWJlbDogc3RyaW5nIH0pOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfT57cHJvcHMubGFiZWx9PC9CdXR0b24+XG4gIClcbn1cblxuZnVuY3Rpb24gRGF0YUNvbmZpZzxUPihwcm9wczogeyB2YWx1ZTogVCwgbGFiZWw6IHN0cmluZywgdXBkYXRlRnVuYzogKHZhbHVlOiBDaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudD4pID0+IHZvaWQgfSk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8Zm9ybSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cbiAgICAgIDxUZXh0RmllbGQgb25DaGFuZ2U9e3Byb3BzLnVwZGF0ZUZ1bmN9IGRlZmF1bHRWYWx1ZT17cHJvcHMudmFsdWV9IGxhYmVsPXtwcm9wcy5sYWJlbH0gdmFyaWFudD1cImZpbGxlZFwiIGlucHV0TW9kZT1cIm51bWVyaWNcIiAvPlxuICAgIDwvZm9ybT5cbiAgKVxufVxuXG5mdW5jdGlvbiBEYXRhVG9nZ2xlKHByb3BzOiB7IHZhbHVlOiBib29sZWFuLCBsYWJlbDogc3RyaW5nLCB1cGRhdGVGdW5jOiAoZXZlbnQ6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+LCBjaGVja2VkOiBib29sZWFuKSA9PiB2b2lkIH0pOiBKU1guRWxlbWVudCB7XG4gIHJldHVybiAoXG4gICAgPEZvcm1Db250cm9sTGFiZWwgY29udHJvbD17XG4gICAgICA8Q2hlY2tib3ggY2hlY2tlZD17cHJvcHMudmFsdWV9IG9uQ2hhbmdlPXtwcm9wcy51cGRhdGVGdW5jfSAvPlxuICAgIH0gbGFiZWw9e3Byb3BzLmxhYmVsfSAvPlxuICApXG59XG5cbmludGVyZmFjZSBTdGF0ZUZpZWxkcyB7IHJhZGl1czogbnVtYmVyLCBjb3VudDogbnVtYmVyLCBzaG93RlBTOiBib29sZWFuLCBzaG93UXVhZHM6IGJvb2xlYW4gfVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50PHVua25vd24sIFN0YXRlRmllbGRzPiB7XG4gIHByaXZhdGUgc2ltdWxhdGlvbkNhbnZhc1JlZjogUmVmT2JqZWN0PFNpbXVsYXRpb25DYW52YXM+ID0gY3JlYXRlUmVmKClcbiAgY29uc3RydWN0b3IocHJvcHM6IHVua25vd24pIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcmFkaXVzOiAxMCxcbiAgICAgIGNvdW50OiAxLFxuICAgICAgc2hvd0ZQUzogdHJ1ZSxcbiAgICAgIHNob3dRdWFkczogdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIC8vIGF0dGVtcHQgdG8gc3luYyBzaW11bGF0aW9uIHZhcnMgd2l0aCBjb250YWluZXIgZmxhZ3NcbiAgICB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8udXBkYXRlVmFycyh7IHNob3dGUFM6IHRoaXMuc3RhdGUuc2hvd0ZQUywgc2hvd1F1YWRzOiB0aGlzLnN0YXRlLnNob3dRdWFkcyB9KVxuXG4gICAgLy8gY2FsY3VsYXRlIGEgcmFkaXVzIHRoYXQgaXMgcmVsYXRpdmVseSB0aGUgc2FtZSByZXRpbyBmb3IgYWxsIHdpbmRvd3NcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLmNlaWwoTWF0aC5taW4od2luZG93LmlubmVyV2lkdGggLyA1MDAsIHdpbmRvdy5pbm5lckhlaWdodCAvIDUwMCkpXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJhZGl1czogcmFkaXVzLCBjb3VudDogMjAwIH0sICgpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5jb3VudDsgaSsrKVxuICAgICAgICB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8uYWRkQm9keSh0aGlzLnN0YXRlLnJhZGl1cylcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPHRpdGxlPlF1YWR0cmVlIFZpc3VhbGl6ZXI8L3RpdGxlPlxuICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2ltdWxhdGlvbl9jb250YWluZXJ9PlxuICAgICAgICAgICAgPFNpbXVsYXRpb25DYW52YXMgcmVmPXt0aGlzLnNpbXVsYXRpb25DYW52YXNSZWZ9IHNwYXduUmFkaXVzPXt0aGlzLnN0YXRlLnJhZGl1c30gLz5cbiAgICAgICAgICAgIDxDb250cm9sQmFyPlxuICAgICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIk5vZGUgQ2FwYWNpdHlcIiB2YWx1ZT17UXVhZFRyZWUuY2FwYWNpdHl9XG4gICAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlKSA9PiB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8udXBkYXRlVmFycyh7IGNhcGFjaXR5OiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIk1heG1pbXVtIFRyZWUgRGVwdGhcIiB2YWx1ZT17UXVhZFRyZWUubWF4RGVwdGh9XG4gICAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KHZhbHVlKSA9PiB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8udXBkYXRlVmFycyh7IG1heERlcHRoOiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICA8RGF0YUNvbmZpZyBsYWJlbD1cIlJhZGl1c1wiIHZhbHVlPXt0aGlzLnN0YXRlLnJhZGl1c31cbiAgICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyByYWRpdXM6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiU3Bhd24gQ291bnRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5jb3VudH1cbiAgICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHRoaXMuc2V0U3RhdGUoeyBjb3VudDogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgPEFjdGlvbkJ1dHRvbiBsYWJlbD1cIkNyZWF0ZSBCb2RpZXNcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHsgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnN0YXRlLmNvdW50OyBpKyspIHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py5hZGRCb2R5KHRoaXMuc3RhdGUucmFkaXVzKSB9fSAvPlxuICAgICAgICAgICAgICA8QWN0aW9uQnV0dG9uIGxhYmVsPVwiQ2xlYXIgQm9kaWVzXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8uY2xlYXJCb2RpZXMoKX0gLz5cbiAgICAgICAgICAgICAgPERhdGFUb2dnbGUgbGFiZWw9XCJTaG93IEZQU1wiIHZhbHVlPXt0aGlzLnN0YXRlLnNob3dGUFN9XG4gICAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KF8sIGNoZWNrZWQpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHNob3dGUFM6IGNoZWNrZWQgfSk7IHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py51cGRhdGVWYXJzKHsgc2hvd0ZQUzogY2hlY2tlZCB9KSB9fSAvPlxuICAgICAgICAgICAgICA8RGF0YVRvZ2dsZSBsYWJlbD1cIlNob3cgUXVhZHNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5zaG93UXVhZHN9XG4gICAgICAgICAgICAgICAgdXBkYXRlRnVuYz17KF8sIGNoZWNrZWQpID0+IHsgdGhpcy5zZXRTdGF0ZSh7IHNob3dRdWFkczogY2hlY2tlZCB9KTsgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LnVwZGF0ZVZhcnMoeyBzaG93UXVhZHM6IGNoZWNrZWQgfSkgfX0gLz5cbiAgICAgICAgICAgIDwvQ29udHJvbEJhcj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9