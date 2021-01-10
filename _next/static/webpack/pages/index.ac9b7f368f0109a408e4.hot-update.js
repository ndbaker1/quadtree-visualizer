webpackHotUpdate_N_E("pages/index",{

/***/ "./components/collision-simulator/quadtree.ts":
/*!****************************************************!*\
  !*** ./components/collision-simulator/quadtree.ts ***!
  \****************************************************/
/*! exports provided: Particle, QuadNode, QuadTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Particle", function() { return Particle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuadNode", function() { return QuadNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuadTree", function() { return QuadTree; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_physics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/physics */ "./utils/physics.ts");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


var Particle = /*#__PURE__*/function () {
  function Particle(posX, posY, velX, velY, radius) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Particle);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "radius", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "position", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "velocity", void 0);

    this.radius = radius || 10;
    this.position = posX && posY && new _utils_physics__WEBPACK_IMPORTED_MODULE_3__["Vector2D"](posX, posY) || new _utils_physics__WEBPACK_IMPORTED_MODULE_3__["Vector2D"]();
    this.velocity = velX && velY && new _utils_physics__WEBPACK_IMPORTED_MODULE_3__["Vector2D"](velX, velY) || new _utils_physics__WEBPACK_IMPORTED_MODULE_3__["Vector2D"]();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Particle, [{
    key: "tick",
    value: function tick(delta) {
      this.position.add(this.velocity.scale(delta));
    }
  }, {
    key: "collide",
    value: function collide(particle) {
      if (particle.position.difference(this.position).magnitude() < 2 * this.radius) {
        this.velocity = this.velocity.reversed();
        particle.velocity = particle.velocity.reversed();
      }
    }
  }, {
    key: "collideBounds",
    value: function collideBounds(boundRect) {
      switch (this.exitingBounds(boundRect)) {
        case 'TOP':
        case 'BOTTOM':
          this.velocity.y *= -1;
          break;

        case 'LEFT':
        case 'RIGHT':
          this.velocity.x *= -1;
          break;

        default:
          break;
      }
    }
  }, {
    key: "intersectsRect",
    value: function intersectsRect(rect) {
      return this.position.x - this.radius < rect.x + rect.w && this.position.x + this.radius > rect.x && this.position.y - this.radius < rect.y + rect.h && this.position.y + this.radius > rect.y;
    }
  }, {
    key: "exitingBounds",
    value: function exitingBounds(rect) {
      if (this.position.x + this.radius > rect.x + rect.w) return 'RIGHT';
      if (this.position.x - this.radius < rect.x) return 'LEFT';
      if (this.position.y + this.radius > rect.y + rect.h) return 'BOTTOM';
      if (this.position.y - this.radius < rect.y) return 'TOP';
      return 'INSIDE';
    }
  }]);

  return Particle;
}();
var QuadNode = /*#__PURE__*/function () {
  function QuadNode(rect, depth) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuadNode);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "bounds", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "leaves", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "depth", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "particles", new Array());

    this.depth = depth;
    this.bounds = rect;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuadNode, [{
    key: "clear",
    value: function clear() {
      var _this$leaves;

      this.particles = new Array();
      (_this$leaves = this.leaves) === null || _this$leaves === void 0 ? void 0 : _this$leaves.forEach(function (leaf) {
        return leaf.clear();
      });
      this.leaves = null;
    }
  }, {
    key: "processCollisions",
    value: function processCollisions() {
      for (var i = 0; i < this.particles.length; i++) {
        for (var j = i + 1; j < this.particles.length; j++) {
          this.particles[i].collide(this.particles[j]);
        }
      }
    }
  }, {
    key: "process",
    value: function process() {
      var _this$leaves2;

      (_this$leaves2 = this.leaves) === null || _this$leaves2 === void 0 ? void 0 : _this$leaves2.forEach(function (leaf) {
        // process collision within quad and with any leaf quads
        leaf.process();
      });
    }
  }, {
    key: "subdivide",
    value: function subdivide() {
      var midW = this.bounds.w / 2;
      var midH = this.bounds.h / 2;
      var newDepth = this.depth + 1;
      console.log('divide', new _utils_physics__WEBPACK_IMPORTED_MODULE_3__["Rect"](this.bounds.x, this.bounds.y, midW, midH));
      this.leaves = [new QuadNode(new _utils_physics__WEBPACK_IMPORTED_MODULE_3__["Rect"](this.bounds.x, this.bounds.y, midW, midH), newDepth), new QuadNode(new _utils_physics__WEBPACK_IMPORTED_MODULE_3__["Rect"](this.bounds.x + midW, this.bounds.y, midW, midH), newDepth), new QuadNode(new _utils_physics__WEBPACK_IMPORTED_MODULE_3__["Rect"](this.bounds.x, this.bounds.y + midH, midW, midH), newDepth), new QuadNode(new _utils_physics__WEBPACK_IMPORTED_MODULE_3__["Rect"](this.bounds.x + midW, this.bounds.y + midH, midW, midH), newDepth)];
      /**
       * place current particles into newely created groups
       */

      var temp = this.particles;
      this.particles = [];

      var _iterator = _createForOfIteratorHelper(temp),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var particle = _step.value;
          var inserted = false;

          var _iterator2 = _createForOfIteratorHelper(this.leaves),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var leaf = _step2.value;
              if (leaf.insert(particle)) inserted = true;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          if (!inserted) this.particles.push(particle);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return this.leaves;
    }
  }, {
    key: "insert",
    value: function insert(particle) {
      if (particle.exitingBounds(this.bounds) !== 'INSIDE') return false;
      if (this.depth > QuadNode.maxDepth) return false;

      if (this.particles.length <= QuadNode.capacity) {
        this.particles.push(particle);
        return true;
      }

      var _iterator3 = _createForOfIteratorHelper(this.subdivide()),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var leaf = _step3.value;
          if (leaf.insert(particle)) return true;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      this.particles.push(particle);
      return true;
    }
  }]);

  return QuadNode;
}();

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(QuadNode, "maxDepth", 7);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(QuadNode, "capacity", 3);

var QuadTree = /*#__PURE__*/function () {
  function QuadTree(rect, objectArray) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuadTree);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "bounds", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "quadRoot", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "objectsRef", void 0);

    this.bounds = rect;
    this.objectsRef = objectArray;
    this.quadRoot = new QuadNode(this.bounds, 0);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuadTree, [{
    key: "process",
    value: function process() {
      var _this = this;

      this.quadRoot = new QuadNode(this.bounds, 0); // clear()

      this.objectsRef.forEach(function (particle) {
        return _this.quadRoot.insert(particle);
      });
      this.quadRoot.process();
    }
  }, {
    key: "insert",
    value: function insert(particle) {
      this.objectsRef.push(particle);
      this.quadRoot.insert(particle);
    }
  }]);

  return QuadTree;
}();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb2xsaXNpb24tc2ltdWxhdG9yL3F1YWR0cmVlLnRzIl0sIm5hbWVzIjpbIlBhcnRpY2xlIiwicG9zWCIsInBvc1kiLCJ2ZWxYIiwidmVsWSIsInJhZGl1cyIsInBvc2l0aW9uIiwiVmVjdG9yMkQiLCJ2ZWxvY2l0eSIsImRlbHRhIiwiYWRkIiwic2NhbGUiLCJwYXJ0aWNsZSIsImRpZmZlcmVuY2UiLCJtYWduaXR1ZGUiLCJyZXZlcnNlZCIsImJvdW5kUmVjdCIsImV4aXRpbmdCb3VuZHMiLCJ5IiwieCIsInJlY3QiLCJ3IiwiaCIsIlF1YWROb2RlIiwiZGVwdGgiLCJBcnJheSIsImJvdW5kcyIsInBhcnRpY2xlcyIsImxlYXZlcyIsImZvckVhY2giLCJsZWFmIiwiY2xlYXIiLCJpIiwibGVuZ3RoIiwiaiIsImNvbGxpZGUiLCJwcm9jZXNzIiwibWlkVyIsIm1pZEgiLCJuZXdEZXB0aCIsImNvbnNvbGUiLCJsb2ciLCJSZWN0IiwidGVtcCIsImluc2VydGVkIiwiaW5zZXJ0IiwicHVzaCIsIm1heERlcHRoIiwiY2FwYWNpdHkiLCJzdWJkaXZpZGUiLCJRdWFkVHJlZSIsIm9iamVjdEFycmF5Iiwib2JqZWN0c1JlZiIsInF1YWRSb290Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxRQUFiO0FBSUUsb0JBQVlDLElBQVosRUFBMkJDLElBQTNCLEVBQTBDQyxJQUExQyxFQUF5REMsSUFBekQsRUFBd0VDLE1BQXhFLEVBQXlGO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ3ZGLFNBQUtBLE1BQUwsR0FBY0EsTUFBTSxJQUFJLEVBQXhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkwsSUFBSSxJQUFJQyxJQUFSLElBQWdCLElBQUlLLHVEQUFKLENBQWFOLElBQWIsRUFBbUJDLElBQW5CLENBQWhCLElBQTRDLElBQUlLLHVEQUFKLEVBQTVEO0FBQ0EsU0FB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ZDtBQUNBLFNBQUtnQyxVQUFMLEdBQWtCRCxXQUFsQjtBQUNBLFNBQUtFLFFBQUwsR0FBZ0IsSUFBSTlCLFFBQUosQ0FBYSxLQUFLRyxNQUFsQixFQUEwQixDQUExQixDQUFoQjtBQUNEOztBQVJIO0FBQUE7QUFBQSw4QkFVa0I7QUFBQTs7QUFDZCxXQUFLMkIsUUFBTCxHQUFnQixJQUFJOUIsUUFBSixDQUFhLEtBQUtHLE1BQWxCLEVBQTBCLENBQTFCLENBQWhCLENBRGMsQ0FDK0I7O0FBQzdDLFdBQUswQixVQUFMLENBQWdCdkIsT0FBaEIsQ0FBd0IsVUFBQ2pCLFFBQUQ7QUFBQSxlQUF3QixLQUFJLENBQUN5QyxRQUFMLENBQWNSLE1BQWQsQ0FBcUJqQyxRQUFyQixDQUF4QjtBQUFBLE9BQXhCO0FBQ0EsV0FBS3lDLFFBQUwsQ0FBY2pCLE9BQWQ7QUFDRDtBQWRIO0FBQUE7QUFBQSwyQkFnQlN4QixRQWhCVCxFQWdCbUM7QUFDL0IsV0FBS3dDLFVBQUwsQ0FBZ0JOLElBQWhCLENBQXFCbEMsUUFBckI7QUFDQSxXQUFLeUMsUUFBTCxDQUFjUixNQUFkLENBQXFCakMsUUFBckI7QUFDRDtBQW5CSDs7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFjOWI3ZjM2OGYwMTA5YTQwOGU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWN0LCBWZWN0b3IyRCB9IGZyb20gJy4uLy4uL3V0aWxzL3BoeXNpY3MnXG5cbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZSB7XG4gIHJhZGl1czogbnVtYmVyXG4gIHBvc2l0aW9uOiBWZWN0b3IyRFxuICB2ZWxvY2l0eTogVmVjdG9yMkRcbiAgY29uc3RydWN0b3IocG9zWD86IG51bWJlciwgcG9zWT86IG51bWJlciwgdmVsWD86IG51bWJlciwgdmVsWT86IG51bWJlciwgcmFkaXVzPzogbnVtYmVyKSB7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXMgfHwgMTBcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zWCAmJiBwb3NZICYmIG5ldyBWZWN0b3IyRChwb3NYLCBwb3NZKSB8fCBuZXcgVmVjdG9yMkRcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsWCAmJiB2ZWxZICYmIG5ldyBWZWN0b3IyRCh2ZWxYLCB2ZWxZKSB8fCBuZXcgVmVjdG9yMkRcbiAgfVxuICB0aWNrKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnZlbG9jaXR5LnNjYWxlKGRlbHRhKSlcbiAgfVxuICBjb2xsaWRlKHBhcnRpY2xlOiBQYXJ0aWNsZSk6IHZvaWQge1xuICAgIGlmIChwYXJ0aWNsZS5wb3NpdGlvbi5kaWZmZXJlbmNlKHRoaXMucG9zaXRpb24pLm1hZ25pdHVkZSgpIDwgMiAqIHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5ID0gdGhpcy52ZWxvY2l0eS5yZXZlcnNlZCgpXG4gICAgICBwYXJ0aWNsZS52ZWxvY2l0eSA9IHBhcnRpY2xlLnZlbG9jaXR5LnJldmVyc2VkKClcbiAgICB9XG4gIH1cbiAgY29sbGlkZUJvdW5kcyhib3VuZFJlY3Q6IFJlY3QpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHRoaXMuZXhpdGluZ0JvdW5kcyhib3VuZFJlY3QpKSB7XG4gICAgICBjYXNlICdUT1AnOlxuICAgICAgY2FzZSAnQk9UVE9NJzpcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICo9IC0xXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdMRUZUJzpcbiAgICAgIGNhc2UgJ1JJR0hUJzpcbiAgICAgICAgdGhpcy52ZWxvY2l0eS54ICo9IC0xXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OiBicmVha1xuICAgIH1cbiAgfVxuICBpbnRlcnNlY3RzUmVjdChyZWN0OiBSZWN0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzIDwgcmVjdC54ICsgcmVjdC53XG4gICAgICAmJiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnJhZGl1cyA+IHJlY3QueFxuICAgICAgJiYgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5yYWRpdXMgPCByZWN0LnkgKyByZWN0LmhcbiAgICAgICYmIHRoaXMucG9zaXRpb24ueSArIHRoaXMucmFkaXVzID4gcmVjdC55XG4gIH1cbiAgZXhpdGluZ0JvdW5kcyhyZWN0OiBSZWN0KTogJ1RPUCcgfCAnTEVGVCcgfCAnQk9UVE9NJyB8ICdSSUdIVCcgfCAnSU5TSURFJyB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMucmFkaXVzID4gcmVjdC54ICsgcmVjdC53KSByZXR1cm4gJ1JJR0hUJ1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnJhZGl1cyA8IHJlY3QueCkgcmV0dXJuICdMRUZUJ1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnJhZGl1cyA+IHJlY3QueSArIHJlY3QuaCkgcmV0dXJuICdCT1RUT00nXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSAtIHRoaXMucmFkaXVzIDwgcmVjdC55KSByZXR1cm4gJ1RPUCdcbiAgICByZXR1cm4gJ0lOU0lERSdcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBRdWFkTm9kZSB7XG4gIHN0YXRpYyByZWFkb25seSBtYXhEZXB0aCA9IDdcbiAgc3RhdGljIHJlYWRvbmx5IGNhcGFjaXR5ID0gM1xuICBwdWJsaWMgYm91bmRzOiBSZWN0XG4gIHB1YmxpYyBsZWF2ZXMhOiBBcnJheTxRdWFkTm9kZT4gfCBudWxsXG4gIHByaXZhdGUgZGVwdGg6IG51bWJlclxuICBwcml2YXRlIHBhcnRpY2xlcyA9IG5ldyBBcnJheTxQYXJ0aWNsZT4oKVxuICBjb25zdHJ1Y3RvcihyZWN0OiBSZWN0LCBkZXB0aDogbnVtYmVyKSB7XG4gICAgdGhpcy5kZXB0aCA9IGRlcHRoXG4gICAgdGhpcy5ib3VuZHMgPSByZWN0XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLnBhcnRpY2xlcyA9IG5ldyBBcnJheTxQYXJ0aWNsZT4oKVxuICAgIHRoaXMubGVhdmVzPy5mb3JFYWNoKChsZWFmOiBRdWFkTm9kZSkgPT4gbGVhZi5jbGVhcigpKVxuICAgIHRoaXMubGVhdmVzID0gbnVsbFxuICB9XG5cbiAgcHJvY2Vzc0NvbGxpc2lvbnMoKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKylcbiAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHRoaXMucGFydGljbGVzW2ldLmNvbGxpZGUodGhpcy5wYXJ0aWNsZXNbal0pXG4gICAgICB9XG4gIH1cblxuICBwcm9jZXNzKCk6IHZvaWQge1xuICAgIHRoaXMubGVhdmVzPy5mb3JFYWNoKChsZWFmOiBRdWFkTm9kZSkgPT4ge1xuICAgICAgLy8gcHJvY2VzcyBjb2xsaXNpb24gd2l0aGluIHF1YWQgYW5kIHdpdGggYW55IGxlYWYgcXVhZHNcbiAgICAgIGxlYWYucHJvY2VzcygpXG4gICAgfSlcbiAgfVxuXG4gIHN1YmRpdmlkZSgpOiBBcnJheTxRdWFkTm9kZT4ge1xuICAgIGNvbnN0IG1pZFcgPSB0aGlzLmJvdW5kcy53IC8gMlxuICAgIGNvbnN0IG1pZEggPSB0aGlzLmJvdW5kcy5oIC8gMlxuICAgIGNvbnN0IG5ld0RlcHRoID0gdGhpcy5kZXB0aCArIDFcbiAgICBjb25zb2xlLmxvZygnZGl2aWRlJywgbmV3IFJlY3QodGhpcy5ib3VuZHMueCwgdGhpcy5ib3VuZHMueSwgbWlkVywgbWlkSCkpXG4gICAgdGhpcy5sZWF2ZXMgPSBbXG4gICAgICBuZXcgUXVhZE5vZGUobmV3IFJlY3QodGhpcy5ib3VuZHMueCwgdGhpcy5ib3VuZHMueSwgbWlkVywgbWlkSCksIG5ld0RlcHRoKSxcbiAgICAgIG5ldyBRdWFkTm9kZShuZXcgUmVjdCh0aGlzLmJvdW5kcy54ICsgbWlkVywgdGhpcy5ib3VuZHMueSwgbWlkVywgbWlkSCksIG5ld0RlcHRoKSxcbiAgICAgIG5ldyBRdWFkTm9kZShuZXcgUmVjdCh0aGlzLmJvdW5kcy54LCB0aGlzLmJvdW5kcy55ICsgbWlkSCwgbWlkVywgbWlkSCksIG5ld0RlcHRoKSxcbiAgICAgIG5ldyBRdWFkTm9kZShuZXcgUmVjdCh0aGlzLmJvdW5kcy54ICsgbWlkVywgdGhpcy5ib3VuZHMueSArIG1pZEgsIG1pZFcsIG1pZEgpLCBuZXdEZXB0aClcbiAgICBdXG5cbiAgICAvKipcbiAgICAgKiBwbGFjZSBjdXJyZW50IHBhcnRpY2xlcyBpbnRvIG5ld2VseSBjcmVhdGVkIGdyb3Vwc1xuICAgICAqL1xuICAgIGNvbnN0IHRlbXAgPSB0aGlzLnBhcnRpY2xlc1xuICAgIHRoaXMucGFydGljbGVzID0gW11cbiAgICBmb3IgKGNvbnN0IHBhcnRpY2xlIG9mIHRlbXApIHtcbiAgICAgIGxldCBpbnNlcnRlZCA9IGZhbHNlXG4gICAgICBmb3IgKGNvbnN0IGxlYWYgb2YgdGhpcy5sZWF2ZXMpXG4gICAgICAgIGlmIChsZWFmLmluc2VydChwYXJ0aWNsZSkpXG4gICAgICAgICAgaW5zZXJ0ZWQgPSB0cnVlXG4gICAgICBpZiAoIWluc2VydGVkKVxuICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKHBhcnRpY2xlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxlYXZlc1xuICB9XG5cbiAgaW5zZXJ0KHBhcnRpY2xlOiBQYXJ0aWNsZSk6IGJvb2xlYW4ge1xuICAgIGlmIChwYXJ0aWNsZS5leGl0aW5nQm91bmRzKHRoaXMuYm91bmRzKSAhPT0gJ0lOU0lERScpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmICh0aGlzLmRlcHRoID4gUXVhZE5vZGUubWF4RGVwdGgpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmICh0aGlzLnBhcnRpY2xlcy5sZW5ndGggPD0gUXVhZE5vZGUuY2FwYWNpdHkpIHtcbiAgICAgIHRoaXMucGFydGljbGVzLnB1c2gocGFydGljbGUpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgbGVhZiBvZiB0aGlzLnN1YmRpdmlkZSgpKVxuICAgICAgaWYgKGxlYWYuaW5zZXJ0KHBhcnRpY2xlKSlcbiAgICAgICAgcmV0dXJuIHRydWVcblxuICAgIHRoaXMucGFydGljbGVzLnB1c2gocGFydGljbGUpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVhZFRyZWUge1xuICBib3VuZHM6IFJlY3RcbiAgcXVhZFJvb3Q6IFF1YWROb2RlXG4gIG9iamVjdHNSZWY6IEFycmF5PFBhcnRpY2xlPlxuICBjb25zdHJ1Y3RvcihyZWN0OiBSZWN0LCBvYmplY3RBcnJheTogQXJyYXk8UGFydGljbGU+KSB7XG4gICAgdGhpcy5ib3VuZHMgPSByZWN0XG4gICAgdGhpcy5vYmplY3RzUmVmID0gb2JqZWN0QXJyYXlcbiAgICB0aGlzLnF1YWRSb290ID0gbmV3IFF1YWROb2RlKHRoaXMuYm91bmRzLCAwKVxuICB9XG5cbiAgcHJvY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLnF1YWRSb290ID0gbmV3IFF1YWROb2RlKHRoaXMuYm91bmRzLCAwKSAvLyBjbGVhcigpXG4gICAgdGhpcy5vYmplY3RzUmVmLmZvckVhY2goKHBhcnRpY2xlOiBQYXJ0aWNsZSkgPT4gdGhpcy5xdWFkUm9vdC5pbnNlcnQocGFydGljbGUpKVxuICAgIHRoaXMucXVhZFJvb3QucHJvY2VzcygpXG4gIH1cblxuICBpbnNlcnQocGFydGljbGU6IFBhcnRpY2xlKTogdm9pZCB7XG4gICAgdGhpcy5vYmplY3RzUmVmLnB1c2gocGFydGljbGUpXG4gICAgdGhpcy5xdWFkUm9vdC5pbnNlcnQocGFydGljbGUpXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9