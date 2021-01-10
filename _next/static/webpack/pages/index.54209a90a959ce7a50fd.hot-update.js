webpackHotUpdate_N_E("pages/index",{

/***/ "./components/collision-simulator/collision-simulator.tsx":
/*!****************************************************************!*\
  !*** ./components/collision-simulator/collision-simulator.tsx ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CollisionSimulator; });
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
/* harmony import */ var _quadtree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quadtree */ "./components/collision-simulator/quadtree.ts");
/* harmony import */ var _utils_physics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../utils/physics */ "./utils/physics.ts");








var _jsxFileName = "C:\\Users\\SpicyRamenChef\\Desktop\\GitRepos\\quadtree-visualizer\\components\\collision-simulator\\collision-simulator.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var time = function time() {
  return new Date().getTime();
};

var timestamp = time();
var debug = {
  showFPS: true,
  showQuads: true
};

var CollisionSimulator = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CollisionSimulator, _Component);

  var _super = _createSuper(CollisionSimulator);

  function CollisionSimulator(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CollisionSimulator);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "quadTree", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "stopLoop", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "canvasBounds", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "particleArray", new Array());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "canvasRef", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_8__["createRef"])());

    _this.stopLoop = false;
    _this.canvasBounds = new _utils_physics__WEBPACK_IMPORTED_MODULE_10__["Rect"](0, 0, _this.props.width, _this.props.height);
    _this.quadTree = new _quadtree__WEBPACK_IMPORTED_MODULE_9__["QuadTree"](_this.canvasBounds, _this.particleArray);

    for (var i = 0; i < 20; i++) {
      var radius = 50;
      var speed = 200;
      radius = radius + radius * Math.random() / 10;

      _this.quadTree.insert(new _quadtree__WEBPACK_IMPORTED_MODULE_9__["Particle"](radius + (_this.props.width - 2 * radius) * Math.random(), radius + (_this.props.height - 2 * radius) * Math.random(), (Math.random() - 0.5) * speed, (Math.random() - 0.5) * speed, radius));
    } // bind for context in animation callback


    _this.renderLoop = _this.renderLoop.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(CollisionSimulator, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopLoop = true;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.renderLoop();
    }
  }, {
    key: "renderSimulation",
    value: function renderSimulation(canvasContext) {
      canvasContext.fillStyle = 'white';
      canvasContext.fillRect(0, 0, this.props.width, this.props.height);
      canvasContext.strokeStyle = 'black';
      this.quadTree.objectsRef.forEach(function (particle) {
        canvasContext.beginPath();
        canvasContext.arc(particle.position.x, particle.position.y, particle.radius, 0, 2 * Math.PI);
        canvasContext.stroke();
      });

      function showQuadTrees(quad) {
        var _quad$leaves;

        canvasContext.strokeRect(quad.bounds.x, quad.bounds.y, quad.bounds.w, quad.bounds.h);
        (_quad$leaves = quad.leaves) === null || _quad$leaves === void 0 ? void 0 : _quad$leaves.forEach(function (leaf) {
          return showQuadTrees(leaf);
        });
      }

      if (debug.showQuads) {
        canvasContext.strokeStyle = '#bbb';
        showQuadTrees(this.quadTree.quadRoot);
      }
    }
  }, {
    key: "updateSimulation",
    value: function updateSimulation(delta) {
      var _this2 = this;

      this.particleArray.forEach(function (particle) {
        return particle.tick(delta);
      });
      this.particleArray.forEach(function (particle) {
        return particle.collideBounds(_this2.canvasBounds);
      });
      this.quadTree.process();
    }
  }, {
    key: "renderLoop",
    value: function renderLoop() {
      if (this.stopLoop) return;
      var newtime = time();
      var fps = Math.round(1000 / (newtime - timestamp));
      timestamp = newtime;
      this.updateSimulation(1 / fps);
      var canvas = this.canvasRef.current;
      var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');

      if (context) {
        this.renderSimulation(context);

        if (debug.showFPS) {
          context.save();
          context.font = '25px Arial';
          context.fillStyle = 'grey';
          context.fillText('FPS: ' + fps, 10, 30);
          context.restore();
        }
      } // requestAnimationFrame(this.renderLoop)

    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("canvas", {
        width: this.props.width,
        height: this.props.height,
        ref: this.canvasRef
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 7
      }, this);
    }
  }]);

  return CollisionSimulator;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb2xsaXNpb24tc2ltdWxhdG9yL2NvbGxpc2lvbi1zaW11bGF0b3IudHN4Il0sIm5hbWVzIjpbInRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWVzdGFtcCIsImRlYnVnIiwic2hvd0ZQUyIsInNob3dRdWFkcyIsIkNvbGxpc2lvblNpbXVsYXRvciIsInByb3BzIiwiQXJyYXkiLCJjcmVhdGVSZWYiLCJzdG9wTG9vcCIsImNhbnZhc0JvdW5kcyIsIlJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInF1YWRUcmVlIiwiUXVhZFRyZWUiLCJwYXJ0aWNsZUFycmF5IiwiaSIsInJhZGl1cyIsInNwZWVkIiwiTWF0aCIsInJhbmRvbSIsImluc2VydCIsIlBhcnRpY2xlIiwicmVuZGVyTG9vcCIsImJpbmQiLCJjYW52YXNDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VTdHlsZSIsIm9iamVjdHNSZWYiLCJmb3JFYWNoIiwicGFydGljbGUiLCJiZWdpblBhdGgiLCJhcmMiLCJwb3NpdGlvbiIsIngiLCJ5IiwiUEkiLCJzdHJva2UiLCJzaG93UXVhZFRyZWVzIiwicXVhZCIsInN0cm9rZVJlY3QiLCJib3VuZHMiLCJ3IiwiaCIsImxlYXZlcyIsImxlYWYiLCJxdWFkUm9vdCIsImRlbHRhIiwidGljayIsImNvbGxpZGVCb3VuZHMiLCJwcm9jZXNzIiwibmV3dGltZSIsImZwcyIsInJvdW5kIiwidXBkYXRlU2ltdWxhdGlvbiIsImNhbnZhcyIsImNhbnZhc1JlZiIsImN1cnJlbnQiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsInJlbmRlclNpbXVsYXRpb24iLCJzYXZlIiwiZm9udCIsImZpbGxUZXh0IiwicmVzdG9yZSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQU9BLElBQU1BLElBQUksR0FBRyxT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LE9BQU8sR0FBR0gsTUFBSCxhQUFHQSxNQUFILHVCQUFHQSxNQUFNLENBQUVJLFVBQVIsQ0FBbUIsSUFBbkIsQ0FBaEI7O0FBRUEsVUFBSUQsT0FBSixFQUFhO0FBQ1gsYUFBS0UsZ0JBQUwsQ0FBc0JGLE9BQXRCOztBQUVBLFlBQUkxRCxLQUFLLENBQUNDLE9BQVYsRUFBbUI7QUFDakJ5RCxpQkFBTyxDQUFDRyxJQUFSO0FBQ0FILGlCQUFPLENBQUNJLElBQVIsR0FBZSxZQUFmO0FBQ0FKLGlCQUFPLENBQUNqQyxTQUFSLEdBQW9CLE1BQXBCO0FBQ0FpQyxpQkFBTyxDQUFDSyxRQUFSLENBQWlCLFVBQVVYLEdBQTNCLEVBQWdDLEVBQWhDLEVBQW9DLEVBQXBDO0FBQ0FNLGlCQUFPLENBQUNNLE9BQVI7QUFDRDtBQUNGLE9BdkJnQixDQXlCakI7O0FBQ0Q7Ozs2QkFFcUI7QUFDcEIsMEJBQ0U7QUFDRSxhQUFLLEVBQUUsS0FBSzVELEtBQUwsQ0FBV00sS0FEcEI7QUFFRSxjQUFNLEVBQUUsS0FBS04sS0FBTCxDQUFXTyxNQUZyQjtBQUdFLFdBQUcsRUFBRSxLQUFLNkM7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFPRDs7OztFQW5HNkNTLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU0MjA5YTkwYTk1OWNlN2E1MGZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZVJlZiwgUmVmT2JqZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBRdWFkTm9kZSwgUXVhZFRyZWUsIFBhcnRpY2xlIH0gZnJvbSAnLi9xdWFkdHJlZSdcbmltcG9ydCB7IFJlY3QgfSBmcm9tICcuLi8uLi91dGlscy9waHlzaWNzJ1xuXG5pbnRlcmZhY2UgQ2FudmFzUHJvcHMge1xuICB3aWR0aDogbnVtYmVyXG4gIGhlaWdodDogbnVtYmVyXG59XG5cbmNvbnN0IHRpbWUgPSAoKSA9PiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxubGV0IHRpbWVzdGFtcCA9IHRpbWUoKVxuY29uc3QgZGVidWcgPSB7XG4gIHNob3dGUFM6IHRydWUsXG4gIHNob3dRdWFkczogdHJ1ZVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsaXNpb25TaW11bGF0b3IgZXh0ZW5kcyBDb21wb25lbnQ8Q2FudmFzUHJvcHM+IHtcbiAgcHJpdmF0ZSBxdWFkVHJlZTogUXVhZFRyZWVcbiAgcHJpdmF0ZSBzdG9wTG9vcDogYm9vbGVhblxuICBwcml2YXRlIGNhbnZhc0JvdW5kczogUmVjdFxuICBwcml2YXRlIHBhcnRpY2xlQXJyYXkgPSBuZXcgQXJyYXk8UGFydGljbGU+KClcbiAgcHJpdmF0ZSBjYW52YXNSZWY6IFJlZk9iamVjdDxIVE1MQ2FudmFzRWxlbWVudD4gPSBjcmVhdGVSZWYoKVxuICBjb25zdHJ1Y3Rvcihwcm9wczogQ2FudmFzUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0b3BMb29wID0gZmFsc2VcbiAgICB0aGlzLmNhbnZhc0JvdW5kcyA9IG5ldyBSZWN0KDAsIDAsIHRoaXMucHJvcHMud2lkdGgsIHRoaXMucHJvcHMuaGVpZ2h0KVxuICAgIHRoaXMucXVhZFRyZWUgPSBuZXcgUXVhZFRyZWUodGhpcy5jYW52YXNCb3VuZHMsIHRoaXMucGFydGljbGVBcnJheSlcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICAgIGxldCByYWRpdXMgPSA1MFxuICAgICAgY29uc3Qgc3BlZWQgPSAyMDBcbiAgICAgIHJhZGl1cyA9IHJhZGl1cyArIHJhZGl1cyAqIE1hdGgucmFuZG9tKCkgLyAxMFxuICAgICAgdGhpcy5xdWFkVHJlZS5pbnNlcnQoXG4gICAgICAgIG5ldyBQYXJ0aWNsZShcbiAgICAgICAgICByYWRpdXMgKyAodGhpcy5wcm9wcy53aWR0aCAtIDIgKiByYWRpdXMpICogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgICByYWRpdXMgKyAodGhpcy5wcm9wcy5oZWlnaHQgLSAyICogcmFkaXVzKSAqIE1hdGgucmFuZG9tKCksXG4gICAgICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogc3BlZWQsXG4gICAgICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICogc3BlZWQsXG4gICAgICAgICAgcmFkaXVzXG4gICAgICAgIClcbiAgICAgIClcbiAgICB9XG4gICAgLy8gYmluZCBmb3IgY29udGV4dCBpbiBhbmltYXRpb24gY2FsbGJhY2tcbiAgICB0aGlzLnJlbmRlckxvb3AgPSB0aGlzLnJlbmRlckxvb3AuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9wTG9vcCA9IHRydWVcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyTG9vcCgpXG4gIH1cblxuICByZW5kZXJTaW11bGF0aW9uKGNhbnZhc0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xuICAgIGNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gJ3doaXRlJ1xuICAgIGNhbnZhc0NvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy5wcm9wcy53aWR0aCwgdGhpcy5wcm9wcy5oZWlnaHQpXG4gICAgY2FudmFzQ29udGV4dC5zdHJva2VTdHlsZSA9ICdibGFjaydcbiAgICB0aGlzLnF1YWRUcmVlLm9iamVjdHNSZWYuZm9yRWFjaCgocGFydGljbGU6IFBhcnRpY2xlKSA9PiB7XG4gICAgICBjYW52YXNDb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgICBjYW52YXNDb250ZXh0LmFyYyhwYXJ0aWNsZS5wb3NpdGlvbi54LCBwYXJ0aWNsZS5wb3NpdGlvbi55LCBwYXJ0aWNsZS5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxuICAgICAgY2FudmFzQ29udGV4dC5zdHJva2UoKVxuICAgIH0pXG5cbiAgICBmdW5jdGlvbiBzaG93UXVhZFRyZWVzKHF1YWQ6IFF1YWROb2RlKSB7XG4gICAgICBjYW52YXNDb250ZXh0LnN0cm9rZVJlY3QocXVhZC5ib3VuZHMueCwgcXVhZC5ib3VuZHMueSwgcXVhZC5ib3VuZHMudywgcXVhZC5ib3VuZHMuaClcbiAgICAgIHF1YWQubGVhdmVzPy5mb3JFYWNoKChsZWFmOiBRdWFkTm9kZSkgPT4gc2hvd1F1YWRUcmVlcyhsZWFmKSlcbiAgICB9XG4gICAgaWYgKGRlYnVnLnNob3dRdWFkcykge1xuICAgICAgY2FudmFzQ29udGV4dC5zdHJva2VTdHlsZSA9ICcjYmJiJ1xuICAgICAgc2hvd1F1YWRUcmVlcyh0aGlzLnF1YWRUcmVlLnF1YWRSb290KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVNpbXVsYXRpb24oZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucGFydGljbGVBcnJheS5mb3JFYWNoKChwYXJ0aWNsZTogUGFydGljbGUpID0+IHBhcnRpY2xlLnRpY2soZGVsdGEpKVxuICAgIHRoaXMucGFydGljbGVBcnJheS5mb3JFYWNoKChwYXJ0aWNsZTogUGFydGljbGUpID0+IHBhcnRpY2xlLmNvbGxpZGVCb3VuZHModGhpcy5jYW52YXNCb3VuZHMpKVxuICAgIHRoaXMucXVhZFRyZWUucHJvY2VzcygpXG4gIH1cblxuICByZW5kZXJMb29wKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0b3BMb29wKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBuZXd0aW1lID0gdGltZSgpXG4gICAgY29uc3QgZnBzID0gTWF0aC5yb3VuZCgxMDAwIC8gKG5ld3RpbWUgLSB0aW1lc3RhbXApKVxuICAgIHRpbWVzdGFtcCA9IG5ld3RpbWVcblxuICAgIHRoaXMudXBkYXRlU2ltdWxhdGlvbigxIC8gZnBzKVxuXG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNSZWYuY3VycmVudFxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXM/LmdldENvbnRleHQoJzJkJylcblxuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICB0aGlzLnJlbmRlclNpbXVsYXRpb24oY29udGV4dClcblxuICAgICAgaWYgKGRlYnVnLnNob3dGUFMpIHtcbiAgICAgICAgY29udGV4dC5zYXZlKClcbiAgICAgICAgY29udGV4dC5mb250ID0gJzI1cHggQXJpYWwnXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJ2dyZXknXG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoJ0ZQUzogJyArIGZwcywgMTAsIDMwKVxuICAgICAgICBjb250ZXh0LnJlc3RvcmUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlckxvb3ApXG4gIH1cblxuICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICA8Y2FudmFzXG4gICAgICAgIHdpZHRoPXt0aGlzLnByb3BzLndpZHRofVxuICAgICAgICBoZWlnaHQ9e3RoaXMucHJvcHMuaGVpZ2h0fVxuICAgICAgICByZWY9e3RoaXMuY2FudmFzUmVmfT5cbiAgICAgIDwvY2FudmFzPlxuICAgIClcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=