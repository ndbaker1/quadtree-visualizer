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

    for (var i = 0; i < 200; i++) {
      var radius = 5;
      var speed = 200;
      radius = radius + radius * Math.random() / 10;

      _this.quadTree.insert(new _quadtree__WEBPACK_IMPORTED_MODULE_9__["Particle"](radius + (_this.props.width / 4 - 2 * radius) * Math.random(), radius + (_this.props.height / 4 - 2 * radius) * Math.random(), (Math.random() - 0.5) * speed, (Math.random() - 0.5) * speed, radius));
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
      this.particleArray.forEach(function (particle) {
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
      }

      requestAnimationFrame(this.renderLoop);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb2xsaXNpb24tc2ltdWxhdG9yL2NvbGxpc2lvbi1zaW11bGF0b3IudHN4Il0sIm5hbWVzIjpbInRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsInRpbWVzdGFtcCIsImRlYnVnIiwic2hvd0ZQUyIsInNob3dRdWFkcyIsIkNvbGxpc2lvblNpbXVsYXRvciIsInByb3BzIiwiQXJyYXkiLCJjcmVhdGVSZWYiLCJzdG9wTG9vcCIsImNhbnZhc0JvdW5kcyIsIlJlY3QiLCJ3aWR0aCIsImhlaWdodCIsInF1YWRUcmVlIiwiUXVhZFRyZWUiLCJwYXJ0aWNsZUFycmF5IiwiaSIsInJhZGl1cyIsInNwZWVkIiwiTWF0aCIsInJhbmRvbSIsImluc2VydCIsIlBhcnRpY2xlIiwicmVuZGVyTG9vcCIsImJpbmQiLCJjYW52YXNDb250ZXh0IiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJzdHJva2VTdHlsZSIsImZvckVhY2giLCJwYXJ0aWNsZSIsImJlZ2luUGF0aCIsImFyYyIsInBvc2l0aW9uIiwieCIsInkiLCJQSSIsInN0cm9rZSIsInNob3dRdWFkVHJlZXMiLCJxdWFkIiwic3Ryb2tlUmVjdCIsImJvdW5kcyIsInciLCJoIiwibGVhdmVzIiwibGVhZiIsInF1YWRSb290IiwiZGVsdGEiLCJ0aWNrIiwiY29sbGlkZUJvdW5kcyIsInByb2Nlc3MiLCJuZXd0aW1lIiwiZnBzIiwicm91bmQiLCJ1cGRhdGVTaW11bGF0aW9uIiwiY2FudmFzIiwiY2FudmFzUmVmIiwiY3VycmVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwicmVuZGVyU2ltdWxhdGlvbiIsInNhdmUiLCJmb250IiwiZmlsbFRleHQiLCJyZXN0b3JlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBT0EsSUFBTUEs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Q0FBZUMsT0FBOUI7QUFDQSxVQUFNQyxPQUFPLEdBQUdILE1BQUgsYUFBR0EsTUFBSCx1QkFBR0EsTUFBTSxDQUFFSSxVQUFSLENBQW1CLElBQW5CLENBQWhCOztBQUVBLFVBQUlELE9BQUosRUFBYTtBQUNYLGFBQUtFLGdCQUFMLENBQXNCRixPQUF0Qjs7QUFFQSxZQUFJekQsS0FBSyxDQUFDQyxPQUFWLEVBQW1CO0FBQ2pCd0QsaUJBQU8sQ0FBQ0csSUFBUjtBQUNBSCxpQkFBTyxDQUFDSSxJQUFSLEdBQWUsWUFBZjtBQUNBSixpQkFBTyxDQUFDaEMsU0FBUixHQUFvQixNQUFwQjtBQUNBZ0MsaUJBQU8sQ0FBQ0ssUUFBUixDQUFpQixVQUFVWCxHQUEzQixFQUFnQyxFQUFoQyxFQUFvQyxFQUFwQztBQUNBTSxpQkFBTyxDQUFDTSxPQUFSO0FBQ0Q7QUFDRjs7QUFFREMsMkJBQXFCLENBQUMsS0FBSzFDLFVBQU4sQ0FBckI7QUFDRDs7OzZCQUVxQjtBQUNwQiwwQkFDRTtBQUNFLGFBQUssRUFBRSxLQUFLbEIsS0FBTCxDQUFXTSxLQURwQjtBQUVFLGNBQU0sRUFBRSxLQUFLTixLQUFMLENBQVdPLE1BRnJCO0FBR0UsV0FBRyxFQUFFLEtBQUs0QztBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQU9EOzs7O0VBbkc2Q1UsK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZmJmNWQxMjFlOTNmNmZiYjEyZTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgY3JlYXRlUmVmLCBSZWZPYmplY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFF1YWROb2RlLCBRdWFkVHJlZSwgUGFydGljbGUgfSBmcm9tICcuL3F1YWR0cmVlJ1xuaW1wb3J0IHsgUmVjdCB9IGZyb20gJy4uLy4uL3V0aWxzL3BoeXNpY3MnXG5cbmludGVyZmFjZSBDYW52YXNQcm9wcyB7XG4gIHdpZHRoOiBudW1iZXJcbiAgaGVpZ2h0OiBudW1iZXJcbn1cblxuY29uc3QgdGltZSA9ICgpID0+IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG5sZXQgdGltZXN0YW1wID0gdGltZSgpXG5jb25zdCBkZWJ1ZyA9IHtcbiAgc2hvd0ZQUzogdHJ1ZSxcbiAgc2hvd1F1YWRzOiB0cnVlXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxpc2lvblNpbXVsYXRvciBleHRlbmRzIENvbXBvbmVudDxDYW52YXNQcm9wcz4ge1xuICBwcml2YXRlIHF1YWRUcmVlOiBRdWFkVHJlZVxuICBwcml2YXRlIHN0b3BMb29wOiBib29sZWFuXG4gIHByaXZhdGUgY2FudmFzQm91bmRzOiBSZWN0XG4gIHByaXZhdGUgcGFydGljbGVBcnJheSA9IG5ldyBBcnJheTxQYXJ0aWNsZT4oKVxuICBwcml2YXRlIGNhbnZhc1JlZjogUmVmT2JqZWN0PEhUTUxDYW52YXNFbGVtZW50PiA9IGNyZWF0ZVJlZigpXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBDYW52YXNQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RvcExvb3AgPSBmYWxzZVxuICAgIHRoaXMuY2FudmFzQm91bmRzID0gbmV3IFJlY3QoMCwgMCwgdGhpcy5wcm9wcy53aWR0aCwgdGhpcy5wcm9wcy5oZWlnaHQpXG4gICAgdGhpcy5xdWFkVHJlZSA9IG5ldyBRdWFkVHJlZSh0aGlzLmNhbnZhc0JvdW5kcywgdGhpcy5wYXJ0aWNsZUFycmF5KVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjAwOyBpKyspIHtcbiAgICAgIGxldCByYWRpdXMgPSA1XG4gICAgICBjb25zdCBzcGVlZCA9IDIwMFxuICAgICAgcmFkaXVzID0gcmFkaXVzICsgcmFkaXVzICogTWF0aC5yYW5kb20oKSAvIDEwXG4gICAgICB0aGlzLnF1YWRUcmVlLmluc2VydChcbiAgICAgICAgbmV3IFBhcnRpY2xlKFxuICAgICAgICAgIHJhZGl1cyArICh0aGlzLnByb3BzLndpZHRoIC8gNCAtIDIgKiByYWRpdXMpICogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgICByYWRpdXMgKyAodGhpcy5wcm9wcy5oZWlnaHQgLyA0IC0gMiAqIHJhZGl1cykgKiBNYXRoLnJhbmRvbSgpLFxuICAgICAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHNwZWVkLFxuICAgICAgICAgIChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIHNwZWVkLFxuICAgICAgICAgIHJhZGl1c1xuICAgICAgICApXG4gICAgICApXG4gICAgfVxuICAgIC8vIGJpbmQgZm9yIGNvbnRleHQgaW4gYW5pbWF0aW9uIGNhbGxiYWNrXG4gICAgdGhpcy5yZW5kZXJMb29wID0gdGhpcy5yZW5kZXJMb29wLmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcExvb3AgPSB0cnVlXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlckxvb3AoKVxuICB9XG5cbiAgcmVuZGVyU2ltdWxhdGlvbihjYW52YXNDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICBjYW52YXNDb250ZXh0LmZpbGxTdHlsZSA9ICd3aGl0ZSdcbiAgICBjYW52YXNDb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMucHJvcHMud2lkdGgsIHRoaXMucHJvcHMuaGVpZ2h0KVxuICAgIGNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSAnYmxhY2snXG4gICAgdGhpcy5wYXJ0aWNsZUFycmF5LmZvckVhY2goKHBhcnRpY2xlOiBQYXJ0aWNsZSkgPT4ge1xuICAgICAgY2FudmFzQ29udGV4dC5iZWdpblBhdGgoKVxuICAgICAgY2FudmFzQ29udGV4dC5hcmMocGFydGljbGUucG9zaXRpb24ueCwgcGFydGljbGUucG9zaXRpb24ueSwgcGFydGljbGUucmFkaXVzLCAwLCAyICogTWF0aC5QSSlcbiAgICAgIGNhbnZhc0NvbnRleHQuc3Ryb2tlKClcbiAgICB9KVxuXG4gICAgZnVuY3Rpb24gc2hvd1F1YWRUcmVlcyhxdWFkOiBRdWFkTm9kZSkge1xuICAgICAgY2FudmFzQ29udGV4dC5zdHJva2VSZWN0KHF1YWQuYm91bmRzLngsIHF1YWQuYm91bmRzLnksIHF1YWQuYm91bmRzLncsIHF1YWQuYm91bmRzLmgpXG4gICAgICBxdWFkLmxlYXZlcz8uZm9yRWFjaCgobGVhZjogUXVhZE5vZGUpID0+IHNob3dRdWFkVHJlZXMobGVhZikpXG4gICAgfVxuICAgIGlmIChkZWJ1Zy5zaG93UXVhZHMpIHtcbiAgICAgIGNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSAnI2JiYidcbiAgICAgIHNob3dRdWFkVHJlZXModGhpcy5xdWFkVHJlZS5xdWFkUm9vdClcbiAgICB9XG4gIH1cblxuICB1cGRhdGVTaW11bGF0aW9uKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBhcnRpY2xlQXJyYXkuZm9yRWFjaCgocGFydGljbGU6IFBhcnRpY2xlKSA9PiBwYXJ0aWNsZS50aWNrKGRlbHRhKSlcbiAgICB0aGlzLnBhcnRpY2xlQXJyYXkuZm9yRWFjaCgocGFydGljbGU6IFBhcnRpY2xlKSA9PiBwYXJ0aWNsZS5jb2xsaWRlQm91bmRzKHRoaXMuY2FudmFzQm91bmRzKSlcbiAgICB0aGlzLnF1YWRUcmVlLnByb2Nlc3MoKVxuICB9XG5cbiAgcmVuZGVyTG9vcCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdG9wTG9vcClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgbmV3dGltZSA9IHRpbWUoKVxuICAgIGNvbnN0IGZwcyA9IE1hdGgucm91bmQoMTAwMCAvIChuZXd0aW1lIC0gdGltZXN0YW1wKSlcbiAgICB0aW1lc3RhbXAgPSBuZXd0aW1lXG5cbiAgICB0aGlzLnVwZGF0ZVNpbXVsYXRpb24oMSAvIGZwcylcblxuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzUmVmLmN1cnJlbnRcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzPy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBpZiAoY29udGV4dCkge1xuICAgICAgdGhpcy5yZW5kZXJTaW11bGF0aW9uKGNvbnRleHQpXG5cbiAgICAgIGlmIChkZWJ1Zy5zaG93RlBTKSB7XG4gICAgICAgIGNvbnRleHQuc2F2ZSgpXG4gICAgICAgIGNvbnRleHQuZm9udCA9ICcyNXB4IEFyaWFsJ1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICdncmV5J1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KCdGUFM6ICcgKyBmcHMsIDEwLCAzMClcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXJMb29wKVxuICB9XG5cbiAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGNhbnZhc1xuICAgICAgICB3aWR0aD17dGhpcy5wcm9wcy53aWR0aH1cbiAgICAgICAgaGVpZ2h0PXt0aGlzLnByb3BzLmhlaWdodH1cbiAgICAgICAgcmVmPXt0aGlzLmNhbnZhc1JlZn0+XG4gICAgICA8L2NhbnZhcz5cbiAgICApXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9