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

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(QuadNode, "capacity", 30);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb2xsaXNpb24tc2ltdWxhdG9yL3F1YWR0cmVlLnRzIl0sIm5hbWVzIjpbIlBhcnRpY2xlIiwicG9zWCIsInBvc1kiLCJ2ZWxYIiwidmVsWSIsInJhZGl1cyIsInBvc2l0aW9uIiwiVmVjdG9yMkQiLCJ2ZWxvY2l0eSIsImRlbHRhIiwiYWRkIiwic2NhbGUiLCJwYXJ0aWNsZSIsImRpZmZlcmVuY2UiLCJtYWduaXR1ZGUiLCJyZXZlcnNlZCIsImJvdW5kUmVjdCIsImV4aXRpbmdCb3VuZHMiLCJ5IiwieCIsInJlY3QiLCJ3IiwiaCIsIlF1YWROb2RlIiwiZGVwdGgiLCJBcnJheSIsImJvdW5kcyIsInBhcnRpY2xlcyIsImxlYXZlcyIsImZvckVhY2giLCJsZWFmIiwiY2xlYXIiLCJpIiwibGVuZ3RoIiwiaiIsImNvbGxpZGUiLCJwcm9jZXNzIiwibWlkVyIsIm1pZEgiLCJuZXdEZXB0aCIsIlJlY3QiLCJ0ZW1wIiwiaW5zZXJ0ZWQiLCJpbnNlcnQiLCJwdXNoIiwibWF4RGVwdGgiLCJjYXBhY2l0eSIsInN1YmRpdmlkZSIsIlF1YWRUcmVlIiwib2JqZWN0QXJyYXkiLCJvYmplY3RzUmVmIiwicXVhZFJvb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLFFBQWI7QUFJRSxvQkFBWUMsSUFBWixFQUEyQkMsSUFBM0IsRUFBMENDLElBQTFDLEVBQXlEQyxJQUF6RCxFQUF3RUMsTUFBeEUsRUFBeUY7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDdkYsU0FBS0EsTUFBTCxHQUFjQSxNQUFNLElBQUksRUFBeEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCTCxJQUFJLElBQUlDLElBQVIsSUFBZ0IsSUFBSUssdURBQUosQ0FBYU4sSUFBYixFQUFtQkMsSUFBbkIsQ0FBaEIsSUFBNEMsSUFBSUssdURBQUosRUFBNUQ7QUFDQSxTQUFLQyxRQUFMLEdBQWdCTCxJ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O0FBQUE7O0FBQ2QsV0FBS3lCLFFBQUwsR0FBZ0IsSUFBSTVCLFFBQUosQ0FBYSxLQUFLRyxNQUFsQixFQUEwQixDQUExQixDQUFoQixDQURjLENBQytCOztBQUM3QyxXQUFLd0IsVUFBTCxDQUFnQnJCLE9BQWhCLENBQXdCLFVBQUNqQixRQUFEO0FBQUEsZUFBd0IsS0FBSSxDQUFDdUMsUUFBTCxDQUFjUixNQUFkLENBQXFCL0IsUUFBckIsQ0FBeEI7QUFBQSxPQUF4QjtBQUNBLFdBQUt1QyxRQUFMLENBQWNmLE9BQWQ7QUFDRDtBQWRIO0FBQUE7QUFBQSwyQkFnQlN4QixRQWhCVCxFQWdCbUM7QUFDL0IsV0FBS3NDLFVBQUwsQ0FBZ0JOLElBQWhCLENBQXFCaEMsUUFBckI7QUFDQSxXQUFLdUMsUUFBTCxDQUFjUixNQUFkLENBQXFCL0IsUUFBckI7QUFDRDtBQW5CSDs7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmExNGRjYWE3Y2Y1ZTI3ZmQ1ODk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWN0LCBWZWN0b3IyRCB9IGZyb20gJy4uLy4uL3V0aWxzL3BoeXNpY3MnXG5cbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZSB7XG4gIHJhZGl1czogbnVtYmVyXG4gIHBvc2l0aW9uOiBWZWN0b3IyRFxuICB2ZWxvY2l0eTogVmVjdG9yMkRcbiAgY29uc3RydWN0b3IocG9zWD86IG51bWJlciwgcG9zWT86IG51bWJlciwgdmVsWD86IG51bWJlciwgdmVsWT86IG51bWJlciwgcmFkaXVzPzogbnVtYmVyKSB7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXMgfHwgMTBcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zWCAmJiBwb3NZICYmIG5ldyBWZWN0b3IyRChwb3NYLCBwb3NZKSB8fCBuZXcgVmVjdG9yMkRcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVsWCAmJiB2ZWxZICYmIG5ldyBWZWN0b3IyRCh2ZWxYLCB2ZWxZKSB8fCBuZXcgVmVjdG9yMkRcbiAgfVxuICB0aWNrKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnZlbG9jaXR5LnNjYWxlKGRlbHRhKSlcbiAgfVxuICBjb2xsaWRlKHBhcnRpY2xlOiBQYXJ0aWNsZSk6IHZvaWQge1xuICAgIGlmIChwYXJ0aWNsZS5wb3NpdGlvbi5kaWZmZXJlbmNlKHRoaXMucG9zaXRpb24pLm1hZ25pdHVkZSgpIDwgMiAqIHRoaXMucmFkaXVzKSB7XG4gICAgICB0aGlzLnZlbG9jaXR5ID0gdGhpcy52ZWxvY2l0eS5yZXZlcnNlZCgpXG4gICAgICBwYXJ0aWNsZS52ZWxvY2l0eSA9IHBhcnRpY2xlLnZlbG9jaXR5LnJldmVyc2VkKClcbiAgICB9XG4gIH1cbiAgY29sbGlkZUJvdW5kcyhib3VuZFJlY3Q6IFJlY3QpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHRoaXMuZXhpdGluZ0JvdW5kcyhib3VuZFJlY3QpKSB7XG4gICAgICBjYXNlICdUT1AnOlxuICAgICAgY2FzZSAnQk9UVE9NJzpcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICo9IC0xXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdMRUZUJzpcbiAgICAgIGNhc2UgJ1JJR0hUJzpcbiAgICAgICAgdGhpcy52ZWxvY2l0eS54ICo9IC0xXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OiBicmVha1xuICAgIH1cbiAgfVxuICBpbnRlcnNlY3RzUmVjdChyZWN0OiBSZWN0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzIDwgcmVjdC54ICsgcmVjdC53XG4gICAgICAmJiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnJhZGl1cyA+IHJlY3QueFxuICAgICAgJiYgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5yYWRpdXMgPCByZWN0LnkgKyByZWN0LmhcbiAgICAgICYmIHRoaXMucG9zaXRpb24ueSArIHRoaXMucmFkaXVzID4gcmVjdC55XG4gIH1cbiAgZXhpdGluZ0JvdW5kcyhyZWN0OiBSZWN0KTogJ1RPUCcgfCAnTEVGVCcgfCAnQk9UVE9NJyB8ICdSSUdIVCcgfCAnSU5TSURFJyB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMucmFkaXVzID4gcmVjdC54ICsgcmVjdC53KSByZXR1cm4gJ1JJR0hUJ1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnJhZGl1cyA8IHJlY3QueCkgcmV0dXJuICdMRUZUJ1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnJhZGl1cyA+IHJlY3QueSArIHJlY3QuaCkgcmV0dXJuICdCT1RUT00nXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSAtIHRoaXMucmFkaXVzIDwgcmVjdC55KSByZXR1cm4gJ1RPUCdcbiAgICByZXR1cm4gJ0lOU0lERSdcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBRdWFkTm9kZSB7XG4gIHN0YXRpYyByZWFkb25seSBtYXhEZXB0aCA9IDdcbiAgc3RhdGljIHJlYWRvbmx5IGNhcGFjaXR5ID0gMzBcbiAgcHVibGljIGJvdW5kczogUmVjdFxuICBwdWJsaWMgbGVhdmVzITogQXJyYXk8UXVhZE5vZGU+IHwgbnVsbFxuICBwcml2YXRlIGRlcHRoOiBudW1iZXJcbiAgcHJpdmF0ZSBwYXJ0aWNsZXMgPSBuZXcgQXJyYXk8UGFydGljbGU+KClcbiAgY29uc3RydWN0b3IocmVjdDogUmVjdCwgZGVwdGg6IG51bWJlcikge1xuICAgIHRoaXMuZGVwdGggPSBkZXB0aFxuICAgIHRoaXMuYm91bmRzID0gcmVjdFxuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5wYXJ0aWNsZXMgPSBuZXcgQXJyYXk8UGFydGljbGU+KClcbiAgICB0aGlzLmxlYXZlcz8uZm9yRWFjaCgobGVhZjogUXVhZE5vZGUpID0+IGxlYWYuY2xlYXIoKSlcbiAgICB0aGlzLmxlYXZlcyA9IG51bGxcbiAgfVxuXG4gIHByb2Nlc3NDb2xsaXNpb25zKCk6IHZvaWQge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZXMubGVuZ3RoOyBpKyspXG4gICAgICBmb3IgKGxldCBqID0gaSArIDE7IGogPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGorKykge1xuICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXS5jb2xsaWRlKHRoaXMucGFydGljbGVzW2pdKVxuICAgICAgfVxuICB9XG5cbiAgcHJvY2VzcygpOiB2b2lkIHtcbiAgICB0aGlzLmxlYXZlcz8uZm9yRWFjaCgobGVhZjogUXVhZE5vZGUpID0+IHtcbiAgICAgIC8vIHByb2Nlc3MgY29sbGlzaW9uIHdpdGhpbiBxdWFkIGFuZCB3aXRoIGFueSBsZWFmIHF1YWRzXG4gICAgICBsZWFmLnByb2Nlc3MoKVxuICAgIH0pXG4gIH1cblxuICBzdWJkaXZpZGUoKTogdm9pZCB7XG4gICAgY29uc3QgbWlkVyA9IHRoaXMuYm91bmRzLncgLyAyXG4gICAgY29uc3QgbWlkSCA9IHRoaXMuYm91bmRzLmggLyAyXG4gICAgY29uc3QgbmV3RGVwdGggPSB0aGlzLmRlcHRoICsgMVxuICAgIHRoaXMubGVhdmVzID0gW1xuICAgICAgbmV3IFF1YWROb2RlKG5ldyBSZWN0KHRoaXMuYm91bmRzLngsIHRoaXMuYm91bmRzLnksIG1pZFcsIG1pZEgpLCBuZXdEZXB0aCksXG4gICAgICBuZXcgUXVhZE5vZGUobmV3IFJlY3QodGhpcy5ib3VuZHMueCArIG1pZFcsIHRoaXMuYm91bmRzLnksIG1pZFcsIG1pZEgpLCBuZXdEZXB0aCksXG4gICAgICBuZXcgUXVhZE5vZGUobmV3IFJlY3QodGhpcy5ib3VuZHMueCwgdGhpcy5ib3VuZHMueSArIG1pZEgsIG1pZFcsIG1pZEgpLCBuZXdEZXB0aCksXG4gICAgICBuZXcgUXVhZE5vZGUobmV3IFJlY3QodGhpcy5ib3VuZHMueCArIG1pZFcsIHRoaXMuYm91bmRzLnkgKyBtaWRILCBtaWRXLCBtaWRIKSwgbmV3RGVwdGgpXG4gICAgXVxuXG4gICAgLyoqXG4gICAgICogcGxhY2UgY3VycmVudCBwYXJ0aWNsZXMgaW50byBuZXdlbHkgY3JlYXRlZCBncm91cHNcbiAgICAgKi9cbiAgICBjb25zdCB0ZW1wID0gdGhpcy5wYXJ0aWNsZXNcbiAgICB0aGlzLnBhcnRpY2xlcyA9IFtdXG4gICAgZm9yIChjb25zdCBwYXJ0aWNsZSBvZiB0ZW1wKSB7XG4gICAgICBsZXQgaW5zZXJ0ZWQgPSBmYWxzZVxuICAgICAgZm9yIChjb25zdCBsZWFmIG9mIHRoaXMubGVhdmVzKVxuICAgICAgICBpZiAobGVhZi5pbnNlcnQocGFydGljbGUpKVxuICAgICAgICAgIGluc2VydGVkID0gdHJ1ZVxuICAgICAgaWYgKCFpbnNlcnRlZClcbiAgICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChwYXJ0aWNsZSlcbiAgICB9XG4gIH1cblxuICBpbnNlcnQocGFydGljbGU6IFBhcnRpY2xlKTogYm9vbGVhbiB7XG4gICAgaWYgKHBhcnRpY2xlLmV4aXRpbmdCb3VuZHModGhpcy5ib3VuZHMpICE9PSAnSU5TSURFJylcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgKHRoaXMuZGVwdGggPiBRdWFkTm9kZS5tYXhEZXB0aClcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgaWYgKHRoaXMucGFydGljbGVzLmxlbmd0aCA8PSBRdWFkTm9kZS5jYXBhY2l0eSkge1xuICAgICAgdGhpcy5wYXJ0aWNsZXMucHVzaChwYXJ0aWNsZSlcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmxlYXZlcylcbiAgICAgIHRoaXMuc3ViZGl2aWRlKClcblxuICAgIGlmICh0aGlzLmxlYXZlcylcbiAgICAgIGZvciAoY29uc3QgbGVhZiBvZiB0aGlzLmxlYXZlcylcbiAgICAgICAgaWYgKGxlYWYuaW5zZXJ0KHBhcnRpY2xlKSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgdGhpcy5wYXJ0aWNsZXMucHVzaChwYXJ0aWNsZSlcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBRdWFkVHJlZSB7XG4gIGJvdW5kczogUmVjdFxuICBxdWFkUm9vdDogUXVhZE5vZGVcbiAgb2JqZWN0c1JlZjogQXJyYXk8UGFydGljbGU+XG4gIGNvbnN0cnVjdG9yKHJlY3Q6IFJlY3QsIG9iamVjdEFycmF5OiBBcnJheTxQYXJ0aWNsZT4pIHtcbiAgICB0aGlzLmJvdW5kcyA9IHJlY3RcbiAgICB0aGlzLm9iamVjdHNSZWYgPSBvYmplY3RBcnJheVxuICAgIHRoaXMucXVhZFJvb3QgPSBuZXcgUXVhZE5vZGUodGhpcy5ib3VuZHMsIDApXG4gIH1cblxuICBwcm9jZXNzKCk6IHZvaWQge1xuICAgIHRoaXMucXVhZFJvb3QgPSBuZXcgUXVhZE5vZGUodGhpcy5ib3VuZHMsIDApIC8vIGNsZWFyKClcbiAgICB0aGlzLm9iamVjdHNSZWYuZm9yRWFjaCgocGFydGljbGU6IFBhcnRpY2xlKSA9PiB0aGlzLnF1YWRSb290Lmluc2VydChwYXJ0aWNsZSkpXG4gICAgdGhpcy5xdWFkUm9vdC5wcm9jZXNzKClcbiAgfVxuXG4gIGluc2VydChwYXJ0aWNsZTogUGFydGljbGUpOiB2b2lkIHtcbiAgICB0aGlzLm9iamVjdHNSZWYucHVzaChwYXJ0aWNsZSlcbiAgICB0aGlzLnF1YWRSb290Lmluc2VydChwYXJ0aWNsZSlcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=