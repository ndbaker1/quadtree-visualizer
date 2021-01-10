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
      this.leaves = [new QuadNode(new _utils_physics__WEBPACK_IMPORTED_MODULE_3__["Rect"](this.bounds.x, this.bounds.y, midW, midH), newDepth), new QuadNode(new _utils_physics__WEBPACK_IMPORTED_MODULE_3__["Rect"](this.bounds.x + midW, this.bounds.y, midW, midH), newDepth), new QuadNode(new _utils_physics__WEBPACK_IMPORTED_MODULE_3__["Rect"](this.bounds.x, this.bounds.y + midH, midW, midH), newDepth), new QuadNode(new _utils_physics__WEBPACK_IMPORTED_MODULE_3__["Rect"](this.bounds.x + midW, this.bounds.y + midH, midW, midH), newDepth)];
      /**
       * place current particles into newely created groups
       */

      var temp = this.particles;
      this.particles = [];
      console.log(temp);

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
      return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb2xsaXNpb24tc2ltdWxhdG9yL3F1YWR0cmVlLnRzIl0sIm5hbWVzIjpbIlBhcnRpY2xlIiwicG9zWCIsInBvc1kiLCJ2ZWxYIiwidmVsWSIsInJhZGl1cyIsInBvc2l0aW9uIiwiVmVjdG9yMkQiLCJ2ZWxvY2l0eSIsImRlbHRhIiwiYWRkIiwic2NhbGUiLCJwYXJ0aWNsZSIsImRpZmZlcmVuY2UiLCJtYWduaXR1ZGUiLCJyZXZlcnNlZCIsImJvdW5kUmVjdCIsImV4aXRpbmdCb3VuZHMiLCJ5IiwieCIsInJlY3QiLCJ3IiwiaCIsIlF1YWROb2RlIiwiZGVwdGgiLCJBcnJheSIsImJvdW5kcyIsInBhcnRpY2xlcyIsImxlYXZlcyIsImZvckVhY2giLCJsZWFmIiwiY2xlYXIiLCJpIiwibGVuZ3RoIiwiaiIsImNvbGxpZGUiLCJwcm9jZXNzIiwibWlkVyIsIm1pZEgiLCJuZXdEZXB0aCIsIlJlY3QiLCJ0ZW1wIiwiY29uc29sZSIsImxvZyIsImluc2VydGVkIiwiaW5zZXJ0IiwicHVzaCIsIm1heERlcHRoIiwiY2FwYWNpdHkiLCJzdWJkaXZpZGUiLCJRdWFkVHJlZSIsIm9iamVjdEFycmF5Iiwib2JqZWN0c1JlZiIsInF1YWRSb290Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxRQUFiO0FBSUUsb0JBQVlDLElBQVosRUFBMkJDLElBQTNCLEVBQTBDQyxJQUExQyxFQUF5REMsSUFBekQsRUFBd0VDLE1BQXhFLEVBQXlGO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ3ZGLFNBQUtBLE1BQUwsR0FBY0EsTUFBTSxJQUFJLEVBQXhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkwsSUFBSSxJQUFJQyxJQUFSLElBQWdCLElBQUlLLHVEQUFKLENBQWFOLElBQWIsRUFBbUJDLElBQW5CLENBQWhCLElBQTRDLElBQUlLLHVEQUFKLEVBQTVEO0FBQ0EsU0FB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Q0Q7O0FBUkg7QUFBQTtBQUFBLDhCQVVrQjtBQUFBOztBQUNkLFdBQUsyQixRQUFMLEdBQWdCLElBQUk5QixRQUFKLENBQWEsS0FBS0csTUFBbEIsRUFBMEIsQ0FBMUIsQ0FBaEIsQ0FEYyxDQUMrQjs7QUFDN0MsV0FBSzBCLFVBQUwsQ0FBZ0J2QixPQUFoQixDQUF3QixVQUFDakIsUUFBRDtBQUFBLGVBQXdCLEtBQUksQ0FBQ3lDLFFBQUwsQ0FBY1IsTUFBZCxDQUFxQmpDLFFBQXJCLENBQXhCO0FBQUEsT0FBeEI7QUFDQSxXQUFLeUMsUUFBTCxDQUFjakIsT0FBZDtBQUNEO0FBZEg7QUFBQTtBQUFBLDJCQWdCU3hCLFFBaEJULEVBZ0JtQztBQUMvQixXQUFLd0MsVUFBTCxDQUFnQk4sSUFBaEIsQ0FBcUJsQyxRQUFyQjtBQUNBLFdBQUt5QyxRQUFMLENBQWNSLE1BQWQsQ0FBcUJqQyxRQUFyQjtBQUNEO0FBbkJIOztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWZhNGE2NTM5OGNjYmRiOWE1YjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlY3QsIFZlY3RvcjJEIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGh5c2ljcydcblxuZXhwb3J0IGNsYXNzIFBhcnRpY2xlIHtcbiAgcmFkaXVzOiBudW1iZXJcbiAgcG9zaXRpb246IFZlY3RvcjJEXG4gIHZlbG9jaXR5OiBWZWN0b3IyRFxuICBjb25zdHJ1Y3Rvcihwb3NYPzogbnVtYmVyLCBwb3NZPzogbnVtYmVyLCB2ZWxYPzogbnVtYmVyLCB2ZWxZPzogbnVtYmVyLCByYWRpdXM/OiBudW1iZXIpIHtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAxMFxuICAgIHRoaXMucG9zaXRpb24gPSBwb3NYICYmIHBvc1kgJiYgbmV3IFZlY3RvcjJEKHBvc1gsIHBvc1kpIHx8IG5ldyBWZWN0b3IyRFxuICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxYICYmIHZlbFkgJiYgbmV3IFZlY3RvcjJEKHZlbFgsIHZlbFkpIHx8IG5ldyBWZWN0b3IyRFxuICB9XG4gIHRpY2soZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkuc2NhbGUoZGVsdGEpKVxuICB9XG4gIGNvbGxpZGUocGFydGljbGU6IFBhcnRpY2xlKTogdm9pZCB7XG4gICAgaWYgKHBhcnRpY2xlLnBvc2l0aW9uLmRpZmZlcmVuY2UodGhpcy5wb3NpdGlvbikubWFnbml0dWRlKCkgPCAyICogdGhpcy5yYWRpdXMpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkgPSB0aGlzLnZlbG9jaXR5LnJldmVyc2VkKClcbiAgICAgIHBhcnRpY2xlLnZlbG9jaXR5ID0gcGFydGljbGUudmVsb2NpdHkucmV2ZXJzZWQoKVxuICAgIH1cbiAgfVxuICBjb2xsaWRlQm91bmRzKGJvdW5kUmVjdDogUmVjdCk6IHZvaWQge1xuICAgIHN3aXRjaCAodGhpcy5leGl0aW5nQm91bmRzKGJvdW5kUmVjdCkpIHtcbiAgICAgIGNhc2UgJ1RPUCc6XG4gICAgICBjYXNlICdCT1RUT00nOlxuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKj0gLTFcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ0xFRlQnOlxuICAgICAgY2FzZSAnUklHSFQnOlxuICAgICAgICB0aGlzLnZlbG9jaXR5LnggKj0gLTFcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6IGJyZWFrXG4gICAgfVxuICB9XG4gIGludGVyc2VjdHNSZWN0KHJlY3Q6IFJlY3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMgPCByZWN0LnggKyByZWN0LndcbiAgICAgICYmIHRoaXMucG9zaXRpb24ueCArIHRoaXMucmFkaXVzID4gcmVjdC54XG4gICAgICAmJiB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnJhZGl1cyA8IHJlY3QueSArIHJlY3QuaFxuICAgICAgJiYgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5yYWRpdXMgPiByZWN0LnlcbiAgfVxuICBleGl0aW5nQm91bmRzKHJlY3Q6IFJlY3QpOiAnVE9QJyB8ICdMRUZUJyB8ICdCT1RUT00nIHwgJ1JJR0hUJyB8ICdJTlNJREUnIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5yYWRpdXMgPiByZWN0LnggKyByZWN0LncpIHJldHVybiAnUklHSFQnXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzIDwgcmVjdC54KSByZXR1cm4gJ0xFRlQnXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMucmFkaXVzID4gcmVjdC55ICsgcmVjdC5oKSByZXR1cm4gJ0JPVFRPTSdcbiAgICBpZiAodGhpcy5wb3NpdGlvbi55IC0gdGhpcy5yYWRpdXMgPCByZWN0LnkpIHJldHVybiAnVE9QJ1xuICAgIHJldHVybiAnSU5TSURFJ1xuICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIFF1YWROb2RlIHtcbiAgc3RhdGljIHJlYWRvbmx5IG1heERlcHRoID0gN1xuICBzdGF0aWMgcmVhZG9ubHkgY2FwYWNpdHkgPSAzXG4gIHB1YmxpYyBib3VuZHM6IFJlY3RcbiAgcHVibGljIGxlYXZlcyE6IEFycmF5PFF1YWROb2RlPiB8IG51bGxcbiAgcHJpdmF0ZSBkZXB0aDogbnVtYmVyXG4gIHByaXZhdGUgcGFydGljbGVzID0gbmV3IEFycmF5PFBhcnRpY2xlPigpXG4gIGNvbnN0cnVjdG9yKHJlY3Q6IFJlY3QsIGRlcHRoOiBudW1iZXIpIHtcbiAgICB0aGlzLmRlcHRoID0gZGVwdGhcbiAgICB0aGlzLmJvdW5kcyA9IHJlY3RcbiAgfVxuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMucGFydGljbGVzID0gbmV3IEFycmF5PFBhcnRpY2xlPigpXG4gICAgdGhpcy5sZWF2ZXM/LmZvckVhY2goKGxlYWY6IFF1YWROb2RlKSA9PiBsZWFmLmNsZWFyKCkpXG4gICAgdGhpcy5sZWF2ZXMgPSBudWxsXG4gIH1cblxuICBwcm9jZXNzQ29sbGlzaW9ucygpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKVxuICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5wYXJ0aWNsZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0uY29sbGlkZSh0aGlzLnBhcnRpY2xlc1tqXSlcbiAgICAgIH1cbiAgfVxuXG4gIHByb2Nlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5sZWF2ZXM/LmZvckVhY2goKGxlYWY6IFF1YWROb2RlKSA9PiB7XG4gICAgICAvLyBwcm9jZXNzIGNvbGxpc2lvbiB3aXRoaW4gcXVhZCBhbmQgd2l0aCBhbnkgbGVhZiBxdWFkc1xuICAgICAgbGVhZi5wcm9jZXNzKClcbiAgICB9KVxuICB9XG5cbiAgc3ViZGl2aWRlKCk6IEFycmF5PFF1YWROb2RlPiB7XG4gICAgY29uc3QgbWlkVyA9IHRoaXMuYm91bmRzLncgLyAyXG4gICAgY29uc3QgbWlkSCA9IHRoaXMuYm91bmRzLmggLyAyXG4gICAgY29uc3QgbmV3RGVwdGggPSB0aGlzLmRlcHRoICsgMVxuICAgIHRoaXMubGVhdmVzID0gW1xuICAgICAgbmV3IFF1YWROb2RlKG5ldyBSZWN0KHRoaXMuYm91bmRzLngsIHRoaXMuYm91bmRzLnksIG1pZFcsIG1pZEgpLCBuZXdEZXB0aCksXG4gICAgICBuZXcgUXVhZE5vZGUobmV3IFJlY3QodGhpcy5ib3VuZHMueCArIG1pZFcsIHRoaXMuYm91bmRzLnksIG1pZFcsIG1pZEgpLCBuZXdEZXB0aCksXG4gICAgICBuZXcgUXVhZE5vZGUobmV3IFJlY3QodGhpcy5ib3VuZHMueCwgdGhpcy5ib3VuZHMueSArIG1pZEgsIG1pZFcsIG1pZEgpLCBuZXdEZXB0aCksXG4gICAgICBuZXcgUXVhZE5vZGUobmV3IFJlY3QodGhpcy5ib3VuZHMueCArIG1pZFcsIHRoaXMuYm91bmRzLnkgKyBtaWRILCBtaWRXLCBtaWRIKSwgbmV3RGVwdGgpXG4gICAgXVxuXG4gICAgLyoqXG4gICAgICogcGxhY2UgY3VycmVudCBwYXJ0aWNsZXMgaW50byBuZXdlbHkgY3JlYXRlZCBncm91cHNcbiAgICAgKi9cbiAgICBjb25zdCB0ZW1wID0gdGhpcy5wYXJ0aWNsZXNcbiAgICB0aGlzLnBhcnRpY2xlcyA9IFtdXG4gICAgY29uc29sZS5sb2codGVtcClcbiAgICBmb3IgKGNvbnN0IHBhcnRpY2xlIG9mIHRlbXApIHtcbiAgICAgIGxldCBpbnNlcnRlZCA9IGZhbHNlXG4gICAgICBmb3IgKGNvbnN0IGxlYWYgb2YgdGhpcy5sZWF2ZXMpIHtcbiAgICAgICAgaWYgKGxlYWYuaW5zZXJ0KHBhcnRpY2xlKSkgaW5zZXJ0ZWQgPSB0cnVlXG4gICAgICB9XG4gICAgICBpZiAoIWluc2VydGVkKVxuICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKHBhcnRpY2xlKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmxlYXZlc1xuICB9XG5cbiAgaW5zZXJ0KHBhcnRpY2xlOiBQYXJ0aWNsZSk6IGJvb2xlYW4ge1xuICAgIGlmIChwYXJ0aWNsZS5leGl0aW5nQm91bmRzKHRoaXMuYm91bmRzKSAhPT0gJ0lOU0lERScpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmICh0aGlzLmRlcHRoID4gUXVhZE5vZGUubWF4RGVwdGgpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIGlmICh0aGlzLnBhcnRpY2xlcy5sZW5ndGggPD0gUXVhZE5vZGUuY2FwYWNpdHkpIHtcbiAgICAgIHRoaXMucGFydGljbGVzLnB1c2gocGFydGljbGUpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgbGVhZiBvZiB0aGlzLnN1YmRpdmlkZSgpKVxuICAgICAgaWYgKGxlYWYuaW5zZXJ0KHBhcnRpY2xlKSlcbiAgICAgICAgcmV0dXJuIHRydWVcblxuICAgIHRoaXMucGFydGljbGVzLnB1c2gocGFydGljbGUpXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1YWRUcmVlIHtcbiAgYm91bmRzOiBSZWN0XG4gIHF1YWRSb290OiBRdWFkTm9kZVxuICBvYmplY3RzUmVmOiBBcnJheTxQYXJ0aWNsZT5cbiAgY29uc3RydWN0b3IocmVjdDogUmVjdCwgb2JqZWN0QXJyYXk6IEFycmF5PFBhcnRpY2xlPikge1xuICAgIHRoaXMuYm91bmRzID0gcmVjdFxuICAgIHRoaXMub2JqZWN0c1JlZiA9IG9iamVjdEFycmF5XG4gICAgdGhpcy5xdWFkUm9vdCA9IG5ldyBRdWFkTm9kZSh0aGlzLmJvdW5kcywgMClcbiAgfVxuXG4gIHByb2Nlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5xdWFkUm9vdCA9IG5ldyBRdWFkTm9kZSh0aGlzLmJvdW5kcywgMCkgLy8gY2xlYXIoKVxuICAgIHRoaXMub2JqZWN0c1JlZi5mb3JFYWNoKChwYXJ0aWNsZTogUGFydGljbGUpID0+IHRoaXMucXVhZFJvb3QuaW5zZXJ0KHBhcnRpY2xlKSlcbiAgICB0aGlzLnF1YWRSb290LnByb2Nlc3MoKVxuICB9XG5cbiAgaW5zZXJ0KHBhcnRpY2xlOiBQYXJ0aWNsZSk6IHZvaWQge1xuICAgIHRoaXMub2JqZWN0c1JlZi5wdXNoKHBhcnRpY2xlKVxuICAgIHRoaXMucXVhZFJvb3QuaW5zZXJ0KHBhcnRpY2xlKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==