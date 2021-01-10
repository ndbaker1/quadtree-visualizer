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

      var _iterator = _createForOfIteratorHelper(temp),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var particle = _step.value;

          var _iterator2 = _createForOfIteratorHelper(this.leaves),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var leaf = _step2.value;
              if (leaf.insert(particle)) break;
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }

          this.particles.push(particle);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
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

      if (!this.leaves) this.subdivide();

      if (this.leaves) {
        var _iterator3 = _createForOfIteratorHelper(this.leaves),
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
      }

      this.particles.push(particle);
      return true;
    }
  }]);

  return QuadNode;
}();

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(QuadNode, "maxDepth", 10);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(QuadNode, "capacity", 1);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb2xsaXNpb24tc2ltdWxhdG9yL3F1YWR0cmVlLnRzIl0sIm5hbWVzIjpbIlBhcnRpY2xlIiwicG9zWCIsInBvc1kiLCJ2ZWxYIiwidmVsWSIsInJhZGl1cyIsInBvc2l0aW9uIiwiVmVjdG9yMkQiLCJ2ZWxvY2l0eSIsImRlbHRhIiwiYWRkIiwic2NhbGUiLCJwYXJ0aWNsZSIsImRpZmZlcmVuY2UiLCJtYWduaXR1ZGUiLCJyZXZlcnNlZCIsImJvdW5kUmVjdCIsImV4aXRpbmdCb3VuZHMiLCJ5IiwieCIsInJlY3QiLCJ3IiwiaCIsIlF1YWROb2RlIiwiZGVwdGgiLCJBcnJheSIsImJvdW5kcyIsInBhcnRpY2xlcyIsImxlYXZlcyIsImZvckVhY2giLCJsZWFmIiwiY2xlYXIiLCJpIiwibGVuZ3RoIiwiaiIsImNvbGxpZGUiLCJwcm9jZXNzIiwibWlkVyIsIm1pZEgiLCJuZXdEZXB0aCIsIlJlY3QiLCJ0ZW1wIiwiaW5zZXJ0IiwicHVzaCIsIm1heERlcHRoIiwiY2FwYWNpdHkiLCJzdWJkaXZpZGUiLCJRdWFkVHJlZSIsIm9iamVjdEFycmF5Iiwib2JqZWN0c1JlZiIsInF1YWRSb290Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxRQUFiO0FBSUUsb0JBQVlDLElBQVosRUFBMkJDLElBQTNCLEVBQTBDQyxJQUExQyxFQUF5REMsSUFBekQsRUFBd0VDLE1BQXhFLEVBQXlGO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ3ZGLFNBQUtBLE1BQUwsR0FBY0EsTUFBTSxJQUFJLEVBQXhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkwsSUFBSSxJQUFJQyxJQUFSLElBQWdCLElBQUlLLHVEQUFKLENBQWFOLElBQWIsRUFBbUJDLElBQW5CLENBQWhCLElBQTRDLElBQUlLLHVEQUFKLEVBQTVEO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkwsSUFBSSxJQUFJQyxJ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Q0FEYyxDQUMrQjs7QUFDN0MsV0FBS3VCLFVBQUwsQ0FBZ0JwQixPQUFoQixDQUF3QixVQUFDakIsUUFBRDtBQUFBLGVBQXdCLEtBQUksQ0FBQ3NDLFFBQUwsQ0FBY1IsTUFBZCxDQUFxQjlCLFFBQXJCLENBQXhCO0FBQUEsT0FBeEI7QUFDQSxXQUFLc0MsUUFBTCxDQUFjZCxPQUFkO0FBQ0Q7QUFkSDtBQUFBO0FBQUEsMkJBZ0JTeEIsUUFoQlQsRUFnQm1DO0FBQy9CLFdBQUtxQyxVQUFMLENBQWdCTixJQUFoQixDQUFxQi9CLFFBQXJCO0FBQ0EsV0FBS3NDLFFBQUwsQ0FBY1IsTUFBZCxDQUFxQjlCLFFBQXJCO0FBQ0Q7QUFuQkg7O0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45NjFiYjRlYzIyZDRjZGFjZjk3Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVjdCwgVmVjdG9yMkQgfSBmcm9tICcuLi8uLi91dGlscy9waHlzaWNzJ1xuXG5leHBvcnQgY2xhc3MgUGFydGljbGUge1xuICByYWRpdXM6IG51bWJlclxuICBwb3NpdGlvbjogVmVjdG9yMkRcbiAgdmVsb2NpdHk6IFZlY3RvcjJEXG4gIGNvbnN0cnVjdG9yKHBvc1g/OiBudW1iZXIsIHBvc1k/OiBudW1iZXIsIHZlbFg/OiBudW1iZXIsIHZlbFk/OiBudW1iZXIsIHJhZGl1cz86IG51bWJlcikge1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzIHx8IDEwXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc1ggJiYgcG9zWSAmJiBuZXcgVmVjdG9yMkQocG9zWCwgcG9zWSkgfHwgbmV3IFZlY3RvcjJEXG4gICAgdGhpcy52ZWxvY2l0eSA9IHZlbFggJiYgdmVsWSAmJiBuZXcgVmVjdG9yMkQodmVsWCwgdmVsWSkgfHwgbmV3IFZlY3RvcjJEXG4gIH1cbiAgdGljayhkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eS5zY2FsZShkZWx0YSkpXG4gIH1cbiAgY29sbGlkZShwYXJ0aWNsZTogUGFydGljbGUpOiB2b2lkIHtcbiAgICBpZiAocGFydGljbGUucG9zaXRpb24uZGlmZmVyZW5jZSh0aGlzLnBvc2l0aW9uKS5tYWduaXR1ZGUoKSA8IDIgKiB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eSA9IHRoaXMudmVsb2NpdHkucmV2ZXJzZWQoKVxuICAgICAgcGFydGljbGUudmVsb2NpdHkgPSBwYXJ0aWNsZS52ZWxvY2l0eS5yZXZlcnNlZCgpXG4gICAgfVxuICB9XG4gIGNvbGxpZGVCb3VuZHMoYm91bmRSZWN0OiBSZWN0KTogdm9pZCB7XG4gICAgc3dpdGNoICh0aGlzLmV4aXRpbmdCb3VuZHMoYm91bmRSZWN0KSkge1xuICAgICAgY2FzZSAnVE9QJzpcbiAgICAgIGNhc2UgJ0JPVFRPTSc6XG4gICAgICAgIHRoaXMudmVsb2NpdHkueSAqPSAtMVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnTEVGVCc6XG4gICAgICBjYXNlICdSSUdIVCc6XG4gICAgICAgIHRoaXMudmVsb2NpdHkueCAqPSAtMVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDogYnJlYWtcbiAgICB9XG4gIH1cbiAgaW50ZXJzZWN0c1JlY3QocmVjdDogUmVjdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnJhZGl1cyA8IHJlY3QueCArIHJlY3Qud1xuICAgICAgJiYgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5yYWRpdXMgPiByZWN0LnhcbiAgICAgICYmIHRoaXMucG9zaXRpb24ueSAtIHRoaXMucmFkaXVzIDwgcmVjdC55ICsgcmVjdC5oXG4gICAgICAmJiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnJhZGl1cyA+IHJlY3QueVxuICB9XG4gIGV4aXRpbmdCb3VuZHMocmVjdDogUmVjdCk6ICdUT1AnIHwgJ0xFRlQnIHwgJ0JPVFRPTScgfCAnUklHSFQnIHwgJ0lOU0lERScge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnJhZGl1cyA+IHJlY3QueCArIHJlY3QudykgcmV0dXJuICdSSUdIVCdcbiAgICBpZiAodGhpcy5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMgPCByZWN0LngpIHJldHVybiAnTEVGVCdcbiAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5yYWRpdXMgPiByZWN0LnkgKyByZWN0LmgpIHJldHVybiAnQk9UVE9NJ1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnJhZGl1cyA8IHJlY3QueSkgcmV0dXJuICdUT1AnXG4gICAgcmV0dXJuICdJTlNJREUnXG4gIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgUXVhZE5vZGUge1xuICBzdGF0aWMgcmVhZG9ubHkgbWF4RGVwdGggPSAxMFxuICBzdGF0aWMgcmVhZG9ubHkgY2FwYWNpdHkgPSAxXG4gIHB1YmxpYyBib3VuZHM6IFJlY3RcbiAgcHVibGljIGxlYXZlcyE6IEFycmF5PFF1YWROb2RlPiB8IG51bGxcbiAgcHJpdmF0ZSBkZXB0aDogbnVtYmVyXG4gIHByaXZhdGUgcGFydGljbGVzID0gbmV3IEFycmF5PFBhcnRpY2xlPigpXG4gIGNvbnN0cnVjdG9yKHJlY3Q6IFJlY3QsIGRlcHRoOiBudW1iZXIpIHtcbiAgICB0aGlzLmRlcHRoID0gZGVwdGhcbiAgICB0aGlzLmJvdW5kcyA9IHJlY3RcbiAgfVxuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMucGFydGljbGVzID0gbmV3IEFycmF5PFBhcnRpY2xlPigpXG4gICAgdGhpcy5sZWF2ZXM/LmZvckVhY2goKGxlYWY6IFF1YWROb2RlKSA9PiBsZWFmLmNsZWFyKCkpXG4gICAgdGhpcy5sZWF2ZXMgPSBudWxsXG4gIH1cblxuICBwcm9jZXNzQ29sbGlzaW9ucygpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKVxuICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5wYXJ0aWNsZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0uY29sbGlkZSh0aGlzLnBhcnRpY2xlc1tqXSlcbiAgICAgIH1cbiAgfVxuXG4gIHByb2Nlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5sZWF2ZXM/LmZvckVhY2goKGxlYWY6IFF1YWROb2RlKSA9PiB7XG4gICAgICAvLyBwcm9jZXNzIGNvbGxpc2lvbiB3aXRoaW4gcXVhZCBhbmQgd2l0aCBhbnkgbGVhZiBxdWFkc1xuICAgICAgbGVhZi5wcm9jZXNzKClcbiAgICB9KVxuICB9XG5cbiAgc3ViZGl2aWRlKCk6IHZvaWQge1xuICAgIGNvbnN0IG1pZFcgPSB0aGlzLmJvdW5kcy53IC8gMlxuICAgIGNvbnN0IG1pZEggPSB0aGlzLmJvdW5kcy5oIC8gMlxuICAgIGNvbnN0IG5ld0RlcHRoID0gdGhpcy5kZXB0aCArIDFcbiAgICB0aGlzLmxlYXZlcyA9IFtcbiAgICAgIG5ldyBRdWFkTm9kZShuZXcgUmVjdCh0aGlzLmJvdW5kcy54LCB0aGlzLmJvdW5kcy55LCBtaWRXLCBtaWRIKSwgbmV3RGVwdGgpLFxuICAgICAgbmV3IFF1YWROb2RlKG5ldyBSZWN0KHRoaXMuYm91bmRzLnggKyBtaWRXLCB0aGlzLmJvdW5kcy55LCBtaWRXLCBtaWRIKSwgbmV3RGVwdGgpLFxuICAgICAgbmV3IFF1YWROb2RlKG5ldyBSZWN0KHRoaXMuYm91bmRzLngsIHRoaXMuYm91bmRzLnkgKyBtaWRILCBtaWRXLCBtaWRIKSwgbmV3RGVwdGgpLFxuICAgICAgbmV3IFF1YWROb2RlKG5ldyBSZWN0KHRoaXMuYm91bmRzLnggKyBtaWRXLCB0aGlzLmJvdW5kcy55ICsgbWlkSCwgbWlkVywgbWlkSCksIG5ld0RlcHRoKVxuICAgIF1cblxuICAgIC8qKlxuICAgICAqIHBsYWNlIGN1cnJlbnQgcGFydGljbGVzIGludG8gbmV3ZWx5IGNyZWF0ZWQgZ3JvdXBzXG4gICAgICovXG4gICAgY29uc3QgdGVtcCA9IHRoaXMucGFydGljbGVzXG4gICAgdGhpcy5wYXJ0aWNsZXMgPSBbXVxuICAgIGZvciAoY29uc3QgcGFydGljbGUgb2YgdGVtcCkge1xuICAgICAgZm9yIChjb25zdCBsZWFmIG9mIHRoaXMubGVhdmVzKVxuICAgICAgICBpZiAobGVhZi5pbnNlcnQocGFydGljbGUpKVxuICAgICAgICAgIGJyZWFrXG4gICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKHBhcnRpY2xlKVxuICAgIH1cbiAgfVxuXG4gIGluc2VydChwYXJ0aWNsZTogUGFydGljbGUpOiBib29sZWFuIHtcbiAgICBpZiAocGFydGljbGUuZXhpdGluZ0JvdW5kcyh0aGlzLmJvdW5kcykgIT09ICdJTlNJREUnKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiAodGhpcy5kZXB0aCA+IFF1YWROb2RlLm1heERlcHRoKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiAodGhpcy5wYXJ0aWNsZXMubGVuZ3RoIDw9IFF1YWROb2RlLmNhcGFjaXR5KSB7XG4gICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKHBhcnRpY2xlKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubGVhdmVzKVxuICAgICAgdGhpcy5zdWJkaXZpZGUoKVxuXG4gICAgaWYgKHRoaXMubGVhdmVzKVxuICAgICAgZm9yIChjb25zdCBsZWFmIG9mIHRoaXMubGVhdmVzKVxuICAgICAgICBpZiAobGVhZi5pbnNlcnQocGFydGljbGUpKVxuICAgICAgICAgIHJldHVybiB0cnVlXG5cbiAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKHBhcnRpY2xlKVxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFF1YWRUcmVlIHtcbiAgYm91bmRzOiBSZWN0XG4gIHF1YWRSb290OiBRdWFkTm9kZVxuICBvYmplY3RzUmVmOiBBcnJheTxQYXJ0aWNsZT5cbiAgY29uc3RydWN0b3IocmVjdDogUmVjdCwgb2JqZWN0QXJyYXk6IEFycmF5PFBhcnRpY2xlPikge1xuICAgIHRoaXMuYm91bmRzID0gcmVjdFxuICAgIHRoaXMub2JqZWN0c1JlZiA9IG9iamVjdEFycmF5XG4gICAgdGhpcy5xdWFkUm9vdCA9IG5ldyBRdWFkTm9kZSh0aGlzLmJvdW5kcywgMClcbiAgfVxuXG4gIHByb2Nlc3MoKTogdm9pZCB7XG4gICAgdGhpcy5xdWFkUm9vdCA9IG5ldyBRdWFkTm9kZSh0aGlzLmJvdW5kcywgMCkgLy8gY2xlYXIoKVxuICAgIHRoaXMub2JqZWN0c1JlZi5mb3JFYWNoKChwYXJ0aWNsZTogUGFydGljbGUpID0+IHRoaXMucXVhZFJvb3QuaW5zZXJ0KHBhcnRpY2xlKSlcbiAgICB0aGlzLnF1YWRSb290LnByb2Nlc3MoKVxuICB9XG5cbiAgaW5zZXJ0KHBhcnRpY2xlOiBQYXJ0aWNsZSk6IHZvaWQge1xuICAgIHRoaXMub2JqZWN0c1JlZi5wdXNoKHBhcnRpY2xlKVxuICAgIHRoaXMucXVhZFJvb3QuaW5zZXJ0KHBhcnRpY2xlKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==