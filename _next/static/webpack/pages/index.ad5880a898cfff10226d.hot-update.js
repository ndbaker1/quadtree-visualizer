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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb2xsaXNpb24tc2ltdWxhdG9yL3F1YWR0cmVlLnRzIl0sIm5hbWVzIjpbIlBhcnRpY2xlIiwicG9zWCIsInBvc1kiLCJ2ZWxYIiwidmVsWSIsInJhZGl1cyIsInBvc2l0aW9uIiwiVmVjdG9yMkQiLCJ2ZWxvY2l0eSIsImRlbHRhIiwiYWRkIiwic2NhbGUiLCJwYXJ0aWNsZSIsImRpZmZlcmVuY2UiLCJtYWduaXR1ZGUiLCJyZXZlcnNlZCIsImJvdW5kUmVjdCIsImV4aXRpbmdCb3VuZHMiLCJ5IiwieCIsInJlY3QiLCJ3IiwiaCIsIlF1YWROb2RlIiwiZGVwdGgiLCJBcnJheSIsImJvdW5kcyIsInBhcnRpY2xlcyIsImxlYXZlcyIsImZvckVhY2giLCJsZWFmIiwiY2xlYXIiLCJpIiwibGVuZ3RoIiwiaiIsImNvbGxpZGUiLCJwcm9jZXNzIiwibWlkVyIsIm1pZEgiLCJuZXdEZXB0aCIsIlJlY3QiLCJ0ZW1wIiwiaW5zZXJ0ZWQiLCJpbnNlcnQiLCJwdXNoIiwibWF4RGVwdGgiLCJjYXBhY2l0eSIsInN1YmRpdmlkZSIsIlF1YWRUcmVlIiwib2JqZWN0QXJyYXkiLCJvYmplY3RzUmVmIiwicXVhZFJvb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFFBQWI7QUFJRSxvQkFBWUMsSUFBWixFQUEyQkMsSUFBM0IsRUFBMENDLElBQTFDLEVBQXlEQyxJQUF6RCxFQUF3RUMsTUFBeEUsRUFBeUY7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDdkYsU0FBS0EsTUFBTCxHQUFjQSxNQUFNLElBQUksRUFBeEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCTCxJQUFJLElBQUlDLElBQVIsSUFBZ0IsSUFBSUssdURBQUosQ0FBYU4sSUFBYixFQUFtQkMsSUFBbkIsQ0FBaEIsSUFBNEMsSUFBSUssdURBQUosRUFBNUQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCTCxJ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QjtBQUFBOztBQUNkLFdBQUt5QixRQUFMLEdBQWdCLElBQUk1QixRQUFKLENBQWEsS0FBS0csTUFBbEIsRUFBMEIsQ0FBMUIsQ0FBaEIsQ0FEYyxDQUMrQjs7QUFDN0MsV0FBS3dCLFVBQUwsQ0FBZ0JyQixPQUFoQixDQUF3QixVQUFDakIsUUFBRDtBQUFBLGVBQXdCLEtBQUksQ0FBQ3VDLFFBQUwsQ0FBY1IsTUFBZCxDQUFxQi9CLFFBQXJCLENBQXhCO0FBQUEsT0FBeEI7QUFDQSxXQUFLdUMsUUFBTCxDQUFjZixPQUFkO0FBQ0Q7QUFkSDtBQUFBO0FBQUEsMkJBZ0JTeEIsUUFoQlQsRUFnQm1DO0FBQy9CLFdBQUtzQyxVQUFMLENBQWdCTixJQUFoQixDQUFxQmhDLFFBQXJCO0FBQ0EsV0FBS3VDLFFBQUwsQ0FBY1IsTUFBZCxDQUFxQi9CLFFBQXJCO0FBQ0Q7QUFuQkg7O0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZDU4ODBhODk4Y2ZmZjEwMjI2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVjdCwgVmVjdG9yMkQgfSBmcm9tICcuLi8uLi91dGlscy9waHlzaWNzJ1xuXG5leHBvcnQgY2xhc3MgUGFydGljbGUge1xuICByYWRpdXM6IG51bWJlclxuICBwb3NpdGlvbjogVmVjdG9yMkRcbiAgdmVsb2NpdHk6IFZlY3RvcjJEXG4gIGNvbnN0cnVjdG9yKHBvc1g/OiBudW1iZXIsIHBvc1k/OiBudW1iZXIsIHZlbFg/OiBudW1iZXIsIHZlbFk/OiBudW1iZXIsIHJhZGl1cz86IG51bWJlcikge1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzIHx8IDEwXG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc1ggJiYgcG9zWSAmJiBuZXcgVmVjdG9yMkQocG9zWCwgcG9zWSkgfHwgbmV3IFZlY3RvcjJEXG4gICAgdGhpcy52ZWxvY2l0eSA9IHZlbFggJiYgdmVsWSAmJiBuZXcgVmVjdG9yMkQodmVsWCwgdmVsWSkgfHwgbmV3IFZlY3RvcjJEXG4gIH1cbiAgdGljayhkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eS5zY2FsZShkZWx0YSkpXG4gIH1cbiAgY29sbGlkZShwYXJ0aWNsZTogUGFydGljbGUpOiB2b2lkIHtcbiAgICBpZiAocGFydGljbGUucG9zaXRpb24uZGlmZmVyZW5jZSh0aGlzLnBvc2l0aW9uKS5tYWduaXR1ZGUoKSA8IDIgKiB0aGlzLnJhZGl1cykge1xuICAgICAgdGhpcy52ZWxvY2l0eSA9IHRoaXMudmVsb2NpdHkucmV2ZXJzZWQoKVxuICAgICAgcGFydGljbGUudmVsb2NpdHkgPSBwYXJ0aWNsZS52ZWxvY2l0eS5yZXZlcnNlZCgpXG4gICAgfVxuICB9XG4gIGNvbGxpZGVCb3VuZHMoYm91bmRSZWN0OiBSZWN0KTogdm9pZCB7XG4gICAgc3dpdGNoICh0aGlzLmV4aXRpbmdCb3VuZHMoYm91bmRSZWN0KSkge1xuICAgICAgY2FzZSAnVE9QJzpcbiAgICAgIGNhc2UgJ0JPVFRPTSc6XG4gICAgICAgIHRoaXMudmVsb2NpdHkueSAqPSAtMVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnTEVGVCc6XG4gICAgICBjYXNlICdSSUdIVCc6XG4gICAgICAgIHRoaXMudmVsb2NpdHkueCAqPSAtMVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDogYnJlYWtcbiAgICB9XG4gIH1cbiAgaW50ZXJzZWN0c1JlY3QocmVjdDogUmVjdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnJhZGl1cyA8IHJlY3QueCArIHJlY3Qud1xuICAgICAgJiYgdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5yYWRpdXMgPiByZWN0LnhcbiAgICAgICYmIHRoaXMucG9zaXRpb24ueSAtIHRoaXMucmFkaXVzIDwgcmVjdC55ICsgcmVjdC5oXG4gICAgICAmJiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnJhZGl1cyA+IHJlY3QueVxuICB9XG4gIGV4aXRpbmdCb3VuZHMocmVjdDogUmVjdCk6ICdUT1AnIHwgJ0xFRlQnIHwgJ0JPVFRPTScgfCAnUklHSFQnIHwgJ0lOU0lERScge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnJhZGl1cyA+IHJlY3QueCArIHJlY3QudykgcmV0dXJuICdSSUdIVCdcbiAgICBpZiAodGhpcy5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMgPCByZWN0LngpIHJldHVybiAnTEVGVCdcbiAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5yYWRpdXMgPiByZWN0LnkgKyByZWN0LmgpIHJldHVybiAnQk9UVE9NJ1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnJhZGl1cyA8IHJlY3QueSkgcmV0dXJuICdUT1AnXG4gICAgcmV0dXJuICdJTlNJREUnXG4gIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgUXVhZE5vZGUge1xuICBzdGF0aWMgcmVhZG9ubHkgbWF4RGVwdGggPSA3XG4gIHN0YXRpYyByZWFkb25seSBjYXBhY2l0eSA9IDNcbiAgcHVibGljIGJvdW5kczogUmVjdFxuICBwdWJsaWMgbGVhdmVzITogQXJyYXk8UXVhZE5vZGU+IHwgbnVsbFxuICBwcml2YXRlIGRlcHRoOiBudW1iZXJcbiAgcHJpdmF0ZSBwYXJ0aWNsZXMgPSBuZXcgQXJyYXk8UGFydGljbGU+KClcbiAgY29uc3RydWN0b3IocmVjdDogUmVjdCwgZGVwdGg6IG51bWJlcikge1xuICAgIHRoaXMuZGVwdGggPSBkZXB0aFxuICAgIHRoaXMuYm91bmRzID0gcmVjdFxuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5wYXJ0aWNsZXMgPSBuZXcgQXJyYXk8UGFydGljbGU+KClcbiAgICB0aGlzLmxlYXZlcz8uZm9yRWFjaCgobGVhZjogUXVhZE5vZGUpID0+IGxlYWYuY2xlYXIoKSlcbiAgICB0aGlzLmxlYXZlcyA9IG51bGxcbiAgfVxuXG4gIHByb2Nlc3NDb2xsaXNpb25zKCk6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZXMubGVuZ3RoOyBpKyspXG4gICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGorKykge1xuICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXS5jb2xsaWRlKHRoaXMucGFydGljbGVzW2pdKVxuICAgICAgfVxuICB9XG5cbiAgcHJvY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLmxlYXZlcz8uZm9yRWFjaCgobGVhZjogUXVhZE5vZGUpID0+IHtcbiAgICAgIC8vIHByb2Nlc3MgY29sbGlzaW9uIHdpdGhpbiBxdWFkIGFuZCB3aXRoIGFueSBsZWFmIHF1YWRzXG4gICAgICBsZWFmLnByb2Nlc3MoKVxuICAgIH0pXG4gIH1cblxuICBzdWJkaXZpZGUoKTogQXJyYXk8UXVhZE5vZGU+IHtcbiAgICBjb25zdCBtaWRXID0gdGhpcy5ib3VuZHMudyAvIDJcbiAgICBjb25zdCBtaWRIID0gdGhpcy5ib3VuZHMuaCAvIDJcbiAgICBjb25zdCBuZXdEZXB0aCA9IHRoaXMuZGVwdGggKyAxXG4gICAgdGhpcy5sZWF2ZXMgPSBbXG4gICAgICBuZXcgUXVhZE5vZGUobmV3IFJlY3QodGhpcy5ib3VuZHMueCwgdGhpcy5ib3VuZHMueSwgbWlkVywgbWlkSCksIG5ld0RlcHRoKSxcbiAgICAgIG5ldyBRdWFkTm9kZShuZXcgUmVjdCh0aGlzLmJvdW5kcy54ICsgbWlkVywgdGhpcy5ib3VuZHMueSwgbWlkVywgbWlkSCksIG5ld0RlcHRoKSxcbiAgICAgIG5ldyBRdWFkTm9kZShuZXcgUmVjdCh0aGlzLmJvdW5kcy54LCB0aGlzLmJvdW5kcy55ICsgbWlkSCwgbWlkVywgbWlkSCksIG5ld0RlcHRoKSxcbiAgICAgIG5ldyBRdWFkTm9kZShuZXcgUmVjdCh0aGlzLmJvdW5kcy54ICsgbWlkVywgdGhpcy5ib3VuZHMueSArIG1pZEgsIG1pZFcsIG1pZEgpLCBuZXdEZXB0aClcbiAgICBdXG5cbiAgICAvKipcbiAgICAgKiBwbGFjZSBjdXJyZW50IHBhcnRpY2xlcyBpbnRvIG5ld2VseSBjcmVhdGVkIGdyb3Vwc1xuICAgICAqL1xuICAgIGNvbnN0IHRlbXAgPSB0aGlzLnBhcnRpY2xlc1xuICAgIHRoaXMucGFydGljbGVzID0gW11cbiAgICBmb3IgKGNvbnN0IHBhcnRpY2xlIG9mIHRlbXApIHtcbiAgICAgIGxldCBpbnNlcnRlZCA9IGZhbHNlXG4gICAgICBmb3IgKGNvbnN0IGxlYWYgb2YgdGhpcy5sZWF2ZXMpXG4gICAgICAgIGlmIChsZWFmLmluc2VydChwYXJ0aWNsZSkpXG4gICAgICAgICAgaW5zZXJ0ZWQgPSB0cnVlXG4gICAgICBpZiAoIWluc2VydGVkKVxuICAgICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKHBhcnRpY2xlKVxuICAgIH1cbiAgfVxuXG4gIGluc2VydChwYXJ0aWNsZTogUGFydGljbGUpOiBib29sZWFuIHtcbiAgICBpZiAocGFydGljbGUuZXhpdGluZ0JvdW5kcyh0aGlzLmJvdW5kcykgIT09ICdJTlNJREUnKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiAodGhpcy5kZXB0aCA+IFF1YWROb2RlLm1heERlcHRoKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICBpZiAodGhpcy5wYXJ0aWNsZXMubGVuZ3RoIDw9IFF1YWROb2RlLmNhcGFjaXR5KSB7XG4gICAgICB0aGlzLnBhcnRpY2xlcy5wdXNoKHBhcnRpY2xlKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMubGVhdmVzKVxuICAgICAgdGhpcy5zdWJkaXZpZGUoKVxuXG4gICAgaWYgKHRoaXMubGVhdmVzKVxuXG4gICAgICBmb3IgKGNvbnN0IGxlYWYgb2YgdGhpcy5sZWF2ZXMpXG4gICAgICAgIGlmIChsZWFmLmluc2VydChwYXJ0aWNsZSkpXG4gICAgICAgICAgcmV0dXJuIHRydWVcblxuICAgIHRoaXMucGFydGljbGVzLnB1c2gocGFydGljbGUpXG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUXVhZFRyZWUge1xuICBib3VuZHM6IFJlY3RcbiAgcXVhZFJvb3Q6IFF1YWROb2RlXG4gIG9iamVjdHNSZWY6IEFycmF5PFBhcnRpY2xlPlxuICBjb25zdHJ1Y3RvcihyZWN0OiBSZWN0LCBvYmplY3RBcnJheTogQXJyYXk8UGFydGljbGU+KSB7XG4gICAgdGhpcy5ib3VuZHMgPSByZWN0XG4gICAgdGhpcy5vYmplY3RzUmVmID0gb2JqZWN0QXJyYXlcbiAgICB0aGlzLnF1YWRSb290ID0gbmV3IFF1YWROb2RlKHRoaXMuYm91bmRzLCAwKVxuICB9XG5cbiAgcHJvY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLnF1YWRSb290ID0gbmV3IFF1YWROb2RlKHRoaXMuYm91bmRzLCAwKSAvLyBjbGVhcigpXG4gICAgdGhpcy5vYmplY3RzUmVmLmZvckVhY2goKHBhcnRpY2xlOiBQYXJ0aWNsZSkgPT4gdGhpcy5xdWFkUm9vdC5pbnNlcnQocGFydGljbGUpKVxuICAgIHRoaXMucXVhZFJvb3QucHJvY2VzcygpXG4gIH1cblxuICBpbnNlcnQocGFydGljbGU6IFBhcnRpY2xlKTogdm9pZCB7XG4gICAgdGhpcy5vYmplY3RzUmVmLnB1c2gocGFydGljbGUpXG4gICAgdGhpcy5xdWFkUm9vdC5pbnNlcnQocGFydGljbGUpXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9