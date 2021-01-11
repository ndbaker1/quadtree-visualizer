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
    var _this$simulationCanva;

    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "simulationCanvasRef", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_8__["createRef"])());

    _this.state = {
      radius: Math.ceil(Math.min(window.innerWidth / 500, window.innerHeight / 500)),
      count: 1,
      showFPS: true,
      showQuads: true
    };
    (_this$simulationCanva = _this.simulationCanvasRef.current) === null || _this$simulationCanva === void 0 ? void 0 : _this$simulationCanva.updateVars({
      showFPS: _this.state.showFPS,
      showQuads: _this.state.showQuads
    });
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      for (var i = 0; i < 200; i++) {
        var _this$simulationCanva2;

        (_this$simulationCanva2 = this.simulationCanvasRef.current) === null || _this$simulationCanva2 === void 0 ? void 0 : _this$simulationCanva2.addBody(this.state.radius);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("title", {
            children: "Quadtree Visualizer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 11
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("link", {
            rel: "icon",
            href: "/favicon.ico"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("main", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])("div", {
            className: _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_10___default.a.simulation_container,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_simulation_canvas__WEBPACK_IMPORTED_MODULE_11__["default"], {
              ref: this.simulationCanvasRef,
              spawnRadius: this.state.radius
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 13
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(_components_control_bar__WEBPACK_IMPORTED_MODULE_12__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataConfig, {
                label: "Node Capacity",
                value: _utils_quadtree__WEBPACK_IMPORTED_MODULE_14__["QuadTree"].capacity,
                updateFunc: function updateFunc(value) {
                  var _this2$simulationCanv;

                  return (_this2$simulationCanv = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv === void 0 ? void 0 : _this2$simulationCanv.updateVars({
                    capacity: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataConfig, {
                label: "Maxmimum Tree Depth",
                value: _utils_quadtree__WEBPACK_IMPORTED_MODULE_14__["QuadTree"].maxDepth,
                updateFunc: function updateFunc(value) {
                  var _this2$simulationCanv2;

                  return (_this2$simulationCanv2 = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv2 === void 0 ? void 0 : _this2$simulationCanv2.updateVars({
                    maxDepth: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataConfig, {
                label: "Radius",
                value: this.state.radius,
                updateFunc: function updateFunc(value) {
                  return _this2.setState({
                    radius: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataConfig, {
                label: "Spawn Count",
                value: this.state.count,
                updateFunc: function updateFunc(value) {
                  return _this2.setState({
                    count: +value.target.value
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ActionButton, {
                label: "Create Bodies",
                onClick: function onClick() {
                  for (var i = 0; i < _this2.state.count; i++) {
                    var _this2$simulationCanv3;

                    (_this2$simulationCanv3 = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv3 === void 0 ? void 0 : _this2$simulationCanv3.addBody(_this2.state.radius);
                  }
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(ActionButton, {
                label: "Clear Bodies",
                onClick: function onClick() {
                  var _this2$simulationCanv4;

                  return (_this2$simulationCanv4 = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv4 === void 0 ? void 0 : _this2$simulationCanv4.clearBodies();
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataToggle, {
                label: "Show FPS",
                value: this.state.showFPS,
                updateFunc: function updateFunc(_, checked) {
                  var _this2$simulationCanv5;

                  _this2.setState({
                    showFPS: checked
                  });

                  (_this2$simulationCanv5 = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv5 === void 0 ? void 0 : _this2$simulationCanv5.updateVars({
                    showFPS: checked
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 15
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxDEV"])(DataToggle, {
                label: "Show Quads",
                value: this.state.showQuads,
                updateFunc: function updateFunc(_, checked) {
                  var _this2$simulationCanv6;

                  _this2.setState({
                    showQuads: checked
                  });

                  (_this2$simulationCanv6 = _this2.simulationCanvasRef.current) === null || _this2$simulationCanv6 === void 0 ? void 0 : _this2$simulationCanv6.updateVars({
                    showQuads: checked
                  });
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 71,
                columnNumber: 15
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 13
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkFjdGlvbkJ1dHRvbiIsInByb3BzIiwib25DbGljayIsImxhYmVsIiwiRGF0YUNvbmZpZyIsInVwZGF0ZUZ1bmMiLCJ2YWx1ZSIsIkRhdGFUb2dnbGUiLCJIb21lIiwiY3JlYXRlUmVmIiwic3RhdGUiLCJyYWRpdXMiLCJNYXRoIiwiY2VpbCIsIm1pbiIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsImNvdW50Iiwic2hvd0ZQUyIsInNob3dRdWFkcyIsInNpbXVsYXRpb25DYW52YXNSZWYiLCJjdXJyZW50IiwidXBkYXRlVmFycyIsImkiLCJhZGRCb2R5Iiwic3R5bGVzIiwic2ltdWxhdGlvbl9jb250YWluZXIiLCJRdWFkVHJlZSIsImNhcGFjaXR5IiwidGFyZ2V0IiwibWF4RGVwdGgiLCJzZXRTdGF0ZSIsImNsZWFyQm9kaWVzIiwiXyIsImNoZWNrZWQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQWtGO0FBQ2hGLHNCQUNFLHFFQUFDLHlEQUFEO0FBQVEsV0FBTyxFQUFFQSxLQUFLLENBQUNDLE9BQXZCO0FBQUEsY0FBaUNELEtBQUssQ0FBQ0U7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBR0Q7O0tBSlFILFk7O0FBTVQsU0FBU0ksVUFBVCxDQUF1QkgsS0FBdkIsRUFBMEo7QUFDeEosc0JBQ0U7QUFBTSxnQkFBWSxFQUFDLEtBQW5CO0FBQUEsMkJBQ0UscUVBQUMsNERBQUQ7QUFBVyxjQUFRLEVBQUVBLEtBQUssQ0FBQ0ksVUFBM0I7QUFBdUMsa0JBQVksRUFBRUosS0FBSyxDQUFDSyxLQUEzRDtBQUFrRSxXQUFLLEVBQUVMLEtBQUssQ0FBQ0UsS0FBL0U7QUFBc0YsYUFBTyxFQUFDLFFBQTlGO0FBQXVHLGVBQVMsRUFBQztBQUFqSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O01BTlFDLFU7O0FBUVQsU0FBU0csVUFBVCxDQUFvQk4sS0FBcEIsRUFBeUo7QUFDdkosc0JBQ0UscUVBQUMsbUVBQUQ7QUFBa0IsV0FBTyxlQUN2QixxRUFBQywyREFBRDtBQUFVLGFBQU8sRUFBRUEsS0FBSyxDQUFDSyxLQUF6QjtBQUFnQyxjQUFRLEVBQUVMLEtBQUssQ0FBQ0k7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGO0FBRUUsU0FBSyxFQUFFSixLQUFLLENBQUNFO0FBRmY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7O01BTlFJLFU7O0lBVVlDLEk7Ozs7O0FBRW5CLGdCQUFZUCxLQUFaLEVBQTRCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQzFCLDhCQUFNQSxLQUFOOztBQUQwQiwyT0FEK0JRLHVEQUFTLEVBQ3hDOztBQUUxQixVQUFLQyxLQUFMLEdBQWE7QUFBRUMsWUFBTSxFQUFFQyxJQUFJLENBQUNDLElBQUwsQ0FBVUQsSUFBSSxDQUFDRSxHQUFMLENBQVNDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixHQUE3QixFQUFrQ0QsTUFBTSxDQUFDRSxXQUFQLEdBQXFCLEdBQXZELENBQVYsQ0FBVjtBQUFrRkMsV0FBSyxFQUFFLENBQXpGO0FBQTRGQyxhQUFPLEVBQUUsSUFBckc7QUFBMkdDLGVBQVMsRUFBRTtBQUF0SCxLQUFiO0FBQ0EsbUNBQUtDLG1CQUFMLENBQXlCQyxPQUF6QixnRkFBa0NDLFVBQWxDLENBQTZDO0FBQUVKLGFBQU8sRUFBRSxNQUFLVCxLQUFMLENBQVdTLE9BQXRCO0FBQStCQyxlQUFTLEVBQUUsTUFBS1YsS0FBTCxDQUFXVTtBQUFyRCxLQUE3QztBQUgwQjtBQUkzQjs7Ozt3Q0FDeUI7QUFDeEIsV0FBSyxJQUFJSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEdBQXBCLEVBQXlCQSxDQUFDLEVBQTFCO0FBQUE7O0FBQ0UsdUNBQUtILG1CQUFMLENBQXlCQyxPQUF6QixrRkFBa0NHLE9BQWxDLENBQTBDLEtBQUtmLEtBQUwsQ0FBV0MsTUFBckQ7QUFERjtBQUVEOzs7NkJBRXFCO0FBQUE7O0FBQ3BCLDBCQUNFO0FBQUEsZ0NBQ0UscUVBQUMsZ0RBQUQ7QUFBQSxrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUVFO0FBQU0sZUFBRyxFQUFDLE1BQVY7QUFBaUIsZ0JBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQU1FO0FBQUEsaUNBQ0U7QUFBSyxxQkFBUyxFQUFFZSxnRUFBTSxDQUFDQyxvQkFBdkI7QUFBQSxvQ0FDRSxxRUFBQyxzRUFBRDtBQUFrQixpQkFBRyxFQUFFLEtBQUtOLG1CQUE1QjtBQUFpRCx5QkFBVyxFQUFFLEtBQUtYLEtBQUwsQ0FBV0M7QUFBekU7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFLHFFQUFDLGdFQUFEO0FBQUEsc0NBQ0UscUVBQUMsVUFBRDtBQUFZLHFCQUFLLEVBQUMsZUFBbEI7QUFBa0MscUJBQUssRUFBRWlCLHlEQUFRLENBQUNDLFFBQWxEO0FBQ0UsMEJBQVUsRUFBRSxvQkFBQ3ZCLEtBQUQ7QUFBQTs7QUFBQSxrREFBVyxNQUFJLENBQUNlLG1CQUFMLENBQXlCQyxPQUFwQywwREFBVyxzQkFBa0NDLFVBQWxDLENBQTZDO0FBQUVNLDRCQUFRLEVBQUUsQ0FBQ3ZCLEtBQUssQ0FBQ3dCLE1BQU4sQ0FBYXhCO0FBQTFCLG1CQUE3QyxDQUFYO0FBQUE7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLGVBR0UscUVBQUMsVUFBRDtBQUFZLHFCQUFLLEVBQUMscUJBQWxCO0FBQXdDLHFCQUFLLEVBQUVzQix5REFBUSxDQUFDRyxRQUF4RDtBQUNFLDBCQUFVLEVBQUUsb0JBQUN6QixLQUFEO0FBQUE7O0FBQUEsbURBQVcsTUFBSSxDQUFDZSxtQkFBTCxDQUF5QkMsT0FBcEMsMkRBQVcsdUJBQWtDQyxVQUFsQyxDQUE2QztBQUFFUSw0QkFBUSxFQUFFLENBQUN6QixLQUFLLENBQUN3QixNQUFOLENBQWF4QjtBQUExQixtQkFBN0MsQ0FBWDtBQUFBO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFIRixlQUtFLHFFQUFDLFVBQUQ7QUFBWSxxQkFBSyxFQUFDLFFBQWxCO0FBQTJCLHFCQUFLLEVBQUUsS0FBS0ksS0FBTCxDQUFXQyxNQUE3QztBQUNFLDBCQUFVLEVBQUUsb0JBQUNMLEtBQUQ7QUFBQSx5QkFBVyxNQUFJLENBQUMwQixRQUFMLENBQWM7QUFBRXJCLDBCQUFNLEVBQUUsQ0FBQ0wsS0FBSyxDQUFDd0IsTUFBTixDQUFheEI7QUFBeEIsbUJBQWQsQ0FBWDtBQUFBO0FBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMRixlQU9FLHFFQUFDLFVBQUQ7QUFBWSxxQkFBSyxFQUFDLGFBQWxCO0FBQWdDLHFCQUFLLEVBQUUsS0FBS0ksS0FBTCxDQUFXUSxLQUFsRDtBQUNFLDBCQUFVLEVBQUUsb0JBQUNaLEtBQUQ7QUFBQSx5QkFBVyxNQUFJLENBQUMwQixRQUFMLENBQWM7QUFBRWQseUJBQUssRUFBRSxDQUFDWixLQUFLLENBQUN3QixNQUFOLENBQWF4QjtBQUF2QixtQkFBZCxDQUFYO0FBQUE7QUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVBGLGVBU0UscUVBQUMsWUFBRDtBQUFjLHFCQUFLLEVBQUMsZUFBcEI7QUFDRSx1QkFBTyxFQUFFLG1CQUFNO0FBQUUsdUJBQUssSUFBSWtCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsTUFBSSxDQUFDZCxLQUFMLENBQVdRLEtBQS9CLEVBQXNDTSxDQUFDLEVBQXZDO0FBQUE7O0FBQTJDLG9EQUFJLENBQUNILG1CQUFMLENBQXlCQyxPQUF6QixrRkFBa0NHLE9BQWxDLENBQTBDLE1BQUksQ0FBQ2YsS0FBTCxDQUFXQyxNQUFyRDtBQUEzQztBQUF5RztBQUQ1SDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVRGLGVBV0UscUVBQUMsWUFBRDtBQUFjLHFCQUFLLEVBQUMsY0FBcEI7QUFDRSx1QkFBTyxFQUFFO0FBQUE7O0FBQUEsbURBQU0sTUFBSSxDQUFDVSxtQkFBTCxDQUF5QkMsT0FBL0IsMkRBQU0sdUJBQWtDVyxXQUFsQyxFQUFOO0FBQUE7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQVhGLGVBYUUscUVBQUMsVUFBRDtBQUFZLHFCQUFLLEVBQUMsVUFBbEI7QUFBNkIscUJBQUssRUFBRSxLQUFLdkIsS0FBTCxDQUFXUyxPQUEvQztBQUNFLDBCQUFVLEVBQUUsb0JBQUNlLENBQUQsRUFBSUMsT0FBSixFQUFnQjtBQUFBOztBQUFFLHdCQUFJLENBQUNILFFBQUwsQ0FBYztBQUFFYiwyQkFBTyxFQUFFZ0I7QUFBWCxtQkFBZDs7QUFBcUMsa0RBQUksQ0FBQ2QsbUJBQUwsQ0FBeUJDLE9BQXpCLGtGQUFrQ0MsVUFBbEMsQ0FBNkM7QUFBRUosMkJBQU8sRUFBRWdCO0FBQVgsbUJBQTdDO0FBQW9FO0FBRHpJO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBYkYsZUFlRSxxRUFBQyxVQUFEO0FBQVkscUJBQUssRUFBQyxZQUFsQjtBQUErQixxQkFBSyxFQUFFLEtBQUt6QixLQUFMLENBQVdVLFNBQWpEO0FBQ0UsMEJBQVUsRUFBRSxvQkFBQ2MsQ0FBRCxFQUFJQyxPQUFKLEVBQWdCO0FBQUE7O0FBQUUsd0JBQUksQ0FBQ0gsUUFBTCxDQUFjO0FBQUVaLDZCQUFTLEVBQUVlO0FBQWIsbUJBQWQ7O0FBQXVDLGtEQUFJLENBQUNkLG1CQUFMLENBQXlCQyxPQUF6QixrRkFBa0NDLFVBQWxDLENBQTZDO0FBQUVILDZCQUFTLEVBQUVlO0FBQWIsbUJBQTdDO0FBQXNFO0FBRDdJO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFnQ0Q7Ozs7RUE3QytCQywrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNWI5NzFiZTY1MWQ1YTBmYTUxZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIENvbXBvbmVudCwgY3JlYXRlUmVmLCBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLnNjc3MnXG5pbXBvcnQgU2ltdWxhdGlvbkNhbnZhcyBmcm9tICcuLi9jb21wb25lbnRzL3NpbXVsYXRpb24tY2FudmFzJ1xuaW1wb3J0IENvbnRyb2xCYXIgZnJvbSAnLi4vY29tcG9uZW50cy9jb250cm9sLWJhcidcbmltcG9ydCB7IFRleHRGaWVsZCwgQnV0dG9uLCBDaGVja2JveCwgRm9ybUNvbnRyb2xMYWJlbCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xuaW1wb3J0IHsgUXVhZFRyZWUgfSBmcm9tICcuLi91dGlscy9xdWFkdHJlZSdcblxuZnVuY3Rpb24gQWN0aW9uQnV0dG9uKHByb3BzOiB7IG9uQ2xpY2s6ICgpID0+IHZvaWQsIGxhYmVsOiBzdHJpbmcgfSk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9Pntwcm9wcy5sYWJlbH08L0J1dHRvbj5cbiAgKVxufVxuXG5mdW5jdGlvbiBEYXRhQ29uZmlnPFQ+KHByb3BzOiB7IHZhbHVlOiBULCBsYWJlbDogc3RyaW5nLCB1cGRhdGVGdW5jOiAodmFsdWU6IENoYW5nZUV2ZW50PEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50PikgPT4gdm9pZCB9KTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxmb3JtIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxuICAgICAgPFRleHRGaWVsZCBvbkNoYW5nZT17cHJvcHMudXBkYXRlRnVuY30gZGVmYXVsdFZhbHVlPXtwcm9wcy52YWx1ZX0gbGFiZWw9e3Byb3BzLmxhYmVsfSB2YXJpYW50PVwiZmlsbGVkXCIgaW5wdXRNb2RlPVwibnVtZXJpY1wiIC8+XG4gICAgPC9mb3JtPlxuICApXG59XG5cbmZ1bmN0aW9uIERhdGFUb2dnbGUocHJvcHM6IHsgdmFsdWU6IGJvb2xlYW4sIGxhYmVsOiBzdHJpbmcsIHVwZGF0ZUZ1bmM6IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4sIGNoZWNrZWQ6IGJvb2xlYW4pID0+IHZvaWQgfSk6IEpTWC5FbGVtZW50IHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUNvbnRyb2xMYWJlbCBjb250cm9sPXtcbiAgICAgIDxDaGVja2JveCBjaGVja2VkPXtwcm9wcy52YWx1ZX0gb25DaGFuZ2U9e3Byb3BzLnVwZGF0ZUZ1bmN9IC8+XG4gICAgfSBsYWJlbD17cHJvcHMubGFiZWx9IC8+XG4gIClcbn1cblxuaW50ZXJmYWNlIFN0YXRlRmllbGRzIHsgcmFkaXVzOiBudW1iZXIsIGNvdW50OiBudW1iZXIsIHNob3dGUFM6IGJvb2xlYW4sIHNob3dRdWFkczogYm9vbGVhbiB9XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQ8dW5rbm93biwgU3RhdGVGaWVsZHM+IHtcbiAgcHJpdmF0ZSBzaW11bGF0aW9uQ2FudmFzUmVmOiBSZWZPYmplY3Q8U2ltdWxhdGlvbkNhbnZhcz4gPSBjcmVhdGVSZWYoKVxuICBjb25zdHJ1Y3Rvcihwcm9wczogdW5rbm93bikge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RhdGUgPSB7IHJhZGl1czogTWF0aC5jZWlsKE1hdGgubWluKHdpbmRvdy5pbm5lcldpZHRoIC8gNTAwLCB3aW5kb3cuaW5uZXJIZWlnaHQgLyA1MDApKSwgY291bnQ6IDEsIHNob3dGUFM6IHRydWUsIHNob3dRdWFkczogdHJ1ZSB9XG4gICAgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LnVwZGF0ZVZhcnMoeyBzaG93RlBTOiB0aGlzLnN0YXRlLnNob3dGUFMsIHNob3dRdWFkczogdGhpcy5zdGF0ZS5zaG93UXVhZHMgfSlcbiAgfVxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwMDsgaSsrKVxuICAgICAgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LmFkZEJvZHkodGhpcy5zdGF0ZS5yYWRpdXMpXG4gIH1cblxuICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICA8dGl0bGU+UXVhZHRyZWUgVmlzdWFsaXplcjwvdGl0bGU+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaW11bGF0aW9uX2NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8U2ltdWxhdGlvbkNhbnZhcyByZWY9e3RoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZn0gc3Bhd25SYWRpdXM9e3RoaXMuc3RhdGUucmFkaXVzfSAvPlxuICAgICAgICAgICAgPENvbnRyb2xCYXI+XG4gICAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiTm9kZSBDYXBhY2l0eVwiIHZhbHVlPXtRdWFkVHJlZS5jYXBhY2l0eX1cbiAgICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py51cGRhdGVWYXJzKHsgY2FwYWNpdHk6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiTWF4bWltdW0gVHJlZSBEZXB0aFwiIHZhbHVlPXtRdWFkVHJlZS5tYXhEZXB0aH1cbiAgICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsodmFsdWUpID0+IHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py51cGRhdGVWYXJzKHsgbWF4RGVwdGg6ICt2YWx1ZS50YXJnZXQudmFsdWUgfSl9IC8+XG4gICAgICAgICAgICAgIDxEYXRhQ29uZmlnIGxhYmVsPVwiUmFkaXVzXCIgdmFsdWU9e3RoaXMuc3RhdGUucmFkaXVzfVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHJhZGl1czogK3ZhbHVlLnRhcmdldC52YWx1ZSB9KX0gLz5cbiAgICAgICAgICAgICAgPERhdGFDb25maWcgbGFiZWw9XCJTcGF3biBDb3VudFwiIHZhbHVlPXt0aGlzLnN0YXRlLmNvdW50fVxuICAgICAgICAgICAgICAgIHVwZGF0ZUZ1bmM9eyh2YWx1ZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvdW50OiArdmFsdWUudGFyZ2V0LnZhbHVlIH0pfSAvPlxuICAgICAgICAgICAgICA8QWN0aW9uQnV0dG9uIGxhYmVsPVwiQ3JlYXRlIEJvZGllc1wiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4geyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUuY291bnQ7IGkrKykgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LmFkZEJvZHkodGhpcy5zdGF0ZS5yYWRpdXMpIH19IC8+XG4gICAgICAgICAgICAgIDxBY3Rpb25CdXR0b24gbGFiZWw9XCJDbGVhciBCb2RpZXNcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2ltdWxhdGlvbkNhbnZhc1JlZi5jdXJyZW50Py5jbGVhckJvZGllcygpfSAvPlxuICAgICAgICAgICAgICA8RGF0YVRvZ2dsZSBsYWJlbD1cIlNob3cgRlBTXCIgdmFsdWU9e3RoaXMuc3RhdGUuc2hvd0ZQU31cbiAgICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsoXywgY2hlY2tlZCkgPT4geyB0aGlzLnNldFN0YXRlKHsgc2hvd0ZQUzogY2hlY2tlZCB9KTsgdGhpcy5zaW11bGF0aW9uQ2FudmFzUmVmLmN1cnJlbnQ/LnVwZGF0ZVZhcnMoeyBzaG93RlBTOiBjaGVja2VkIH0pIH19IC8+XG4gICAgICAgICAgICAgIDxEYXRhVG9nZ2xlIGxhYmVsPVwiU2hvdyBRdWFkc1wiIHZhbHVlPXt0aGlzLnN0YXRlLnNob3dRdWFkc31cbiAgICAgICAgICAgICAgICB1cGRhdGVGdW5jPXsoXywgY2hlY2tlZCkgPT4geyB0aGlzLnNldFN0YXRlKHsgc2hvd1F1YWRzOiBjaGVja2VkIH0pOyB0aGlzLnNpbXVsYXRpb25DYW52YXNSZWYuY3VycmVudD8udXBkYXRlVmFycyh7IHNob3dRdWFkczogY2hlY2tlZCB9KSB9fSAvPlxuICAgICAgICAgICAgPC9Db250cm9sQmFyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=