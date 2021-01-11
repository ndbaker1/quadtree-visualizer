webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/physics.ts":
/*!**************************!*\
  !*** ./utils/physics.ts ***!
  \**************************/
/*! exports provided: Rect, Vector2D, CircleBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vector2D", function() { return Vector2D; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleBody", function() { return CircleBody; });
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");



var Rect = function Rect(x, y, w, h) {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Rect);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "x", void 0);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "y", void 0);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "w", void 0);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "h", void 0);

  this.x = x || 0;
  this.y = y || 0;
  this.w = w || 0;
  this.h = h || 0;
};
var Vector2D = /*#__PURE__*/function () {
  function Vector2D(x, y) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Vector2D);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "x", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "y", void 0);

    this.x = x || 0;
    this.y = y || 0;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Vector2D, [{
    key: "magnitude",
    value: function magnitude() {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    }
  }, {
    key: "angle",
    value: function angle() {
      return Math.atan2(-this.y, this.x);
    }
  }, {
    key: "angleBetween",
    value: function angleBetween(vector) {
      return (this.angle() - vector.angle() + 2 * Math.PI) % Math.PI;
    }
  }, {
    key: "add",
    value: function add(vector) {
      this.x += vector.x;
      this.y += vector.y;
    }
  }, {
    key: "rotated",
    value: function rotated(angle) {
      return new Vector2D(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) - this.y * Math.cos(angle));
    }
  }, {
    key: "difference",
    value: function difference(vector) {
      return new Vector2D(this.x - vector.x, this.y - vector.y);
    }
  }, {
    key: "scale",
    value: function scale(factor) {
      return new Vector2D(this.x * factor, this.y * factor);
    }
  }, {
    key: "reversed",
    value: function reversed() {
      return this.scale(-1);
    }
  }, {
    key: "normalized",
    value: function normalized() {
      var mag = this.magnitude();
      return new Vector2D(this.x / mag, this.y / mag);
    }
  }]);

  return Vector2D;
}();
var CircleBody = /*#__PURE__*/function () {
  function CircleBody(posX, posY, velX, velY, radius) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, CircleBody);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "radius", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "mass", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "position", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "velocity", void 0);

    this.radius = radius || 10;
    this.mass = this.radius; // mass proportionate to size

    this.position = (posX || posY) && new Vector2D(posX, posY) || new Vector2D();
    this.velocity = (velX || velY) && new Vector2D(velX, velY) || new Vector2D();
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(CircleBody, [{
    key: "tick",
    value: function tick(delta) {
      this.position.add(this.velocity.scale(delta));
    }
  }, {
    key: "collide",
    value: function collide(circle) {
      var collisionVector = circle.position.difference(this.position);

      if (collisionVector.magnitude() < this.radius + circle.radius) {
        // TODO - slighty working but defferred
        var softCollision = true;

        if (softCollision) {
          var computeScale = function computeScale(mass, velocityVec) {
            return velocityVec.magnitude() / 1000;
          };

          this.velocity.add(collisionVector.normalized().scale(-computeScale(circle.mass, circle.velocity)));
          circle.velocity.add(collisionVector.normalized().scale(computeScale(this.mass, this.velocity)));
        } else {
          this.velocity = this.velocity.rotated(2 * (Math.PI / 2 - this.velocity.angleBetween(collisionVector)));
          circle.velocity = circle.velocity.rotated(2 * (Math.PI / 2 - circle.velocity.angleBetween(collisionVector.reversed())));
        }
      }
    }
  }, {
    key: "collideBounds",
    value: function collideBounds(boundRect) {
      switch (this.exitingBounds(boundRect)) {
        case 'TOP':
          this.position.y = this.radius;
          this.velocity.y *= -1;
          break;

        case 'BOTTOM':
          this.position.y = boundRect.y + boundRect.h - this.radius;
          this.velocity.y *= -1;
          break;

        case 'LEFT':
          this.position.x = this.radius;
          this.velocity.x *= -1;
          break;

        case 'RIGHT':
          this.position.x = boundRect.x + boundRect.w - this.radius;
          this.velocity.x *= -1;
          break;

        default:
          break;
      }
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
  }, {
    key: "insideRect",
    value: function insideRect(rect) {
      return this.position.x + this.radius <= rect.x + rect.w && this.position.x - this.radius >= rect.x && this.position.y + this.radius <= rect.y + rect.h && this.position.y - this.radius >= rect.y;
    }
  }]);

  return CircleBody;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcGh5c2ljcy50cyJdLCJuYW1lcyI6WyJSZWN0IiwieCIsInkiLCJ3IiwiaCIsIlZlY3RvcjJEIiwiTWF0aCIsInNxcnQiLCJhdGFuMiIsInZlY3RvciIsImFuZ2xlIiwiUEkiLCJjb3MiLCJzaW4iLCJmYWN0b3IiLCJzY2FsZSIsIm1hZyIsIm1hZ25pdHVkZSIsIkNpcmNsZUJvZHkiLCJwb3NYIiwicG9zWSIsInZlbFgiLCJ2ZWxZIiwicmFkaXVzIiwibWFzcyIsInBvc2l0aW9uIiwidmVsb2NpdHkiLCJkZWx0YSIsImFkZCIsImNpcmNsZSIsImNvbGxpc2lvblZlY3RvciIsImRpZmZlcmVuY2UiLCJzb2Z0Q29sbGlzaW9uIiwiY29tcHV0ZVNjYWxlIiwidmVsb2NpdHlWZWMiLCJub3JtYWxpemVkIiwicm90YXRlZCIsImFuZ2xlQmV0d2VlbiIsInJldmVyc2VkIiwiYm91bmRSZWN0IiwiZXhpdGluZ0JvdW5kcyIsInJlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsSUFBYixHQUtFLGNBQVlDLENBQVosRUFBd0JDLENBQXhCLEVBQW9DQyxDQUFwQyxFQUFnREMsQ0FBaEQsRUFBNEQ7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDMUQsT0FBS0gsQ0FBTCxHQUFTQSxDQUFDLElBQUksQ0FBZDtBQUNBLE9BQUtDLENBQUwsR0FBU0EsQ0FBQyxJQUFJLENBQWQ7QUFDQSxPQUFLQyxDQUFMLEdBQVNBLENBQUMsSUFBSSxDQUFkO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTQSxDQUFDLElBQUksQ0FBZDtBQUNELENBVkg7QUFhTyxJQUFNQyxRQUFiO0FBR0Usb0JBQVlKLENBQVosRUFBd0JDLENBQXhCLEVBQW9DO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2xDLFNBQUtELENBQUwsR0FBU0EsQ0FBQyxJQUFJLENBQWQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQUMsSUFBSSxDQUFk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LENBQUwsR0FBU3dDLElBQUksQ0FBQ3RDLENBQWxELEVBQXFELE9BQU8sT0FBUDtBQUNyRCxVQUFJLEtBQUtzQixRQUFMLENBQWN4QixDQUFkLEdBQWtCLEtBQUtzQixNQUF2QixHQUFnQ2tCLElBQUksQ0FBQ3hDLENBQXpDLEVBQTRDLE9BQU8sTUFBUDtBQUM1QyxVQUFJLEtBQUt3QixRQUFMLENBQWN2QixDQUFkLEdBQWtCLEtBQUtxQixNQUF2QixHQUFnQ2tCLElBQUksQ0FBQ3ZDLENBQUwsR0FBU3VDLElBQUksQ0FBQ3JDLENBQWxELEVBQXFELE9BQU8sUUFBUDtBQUNyRCxVQUFJLEtBQUtxQixRQUFMLENBQWN2QixDQUFkLEdBQWtCLEtBQUtxQixNQUF2QixHQUFnQ2tCLElBQUksQ0FBQ3ZDLENBQXpDLEVBQTRDLE9BQU8sS0FBUDtBQUM1QyxhQUFPLFFBQVA7QUFDRDtBQTNESDtBQUFBO0FBQUEsK0JBNkRhdUMsSUE3RGIsRUE2RGtDO0FBQzlCLGFBQU8sS0FBS2hCLFFBQUwsQ0FBY3hCLENBQWQsR0FBa0IsS0FBS3NCLE1BQXZCLElBQWlDa0IsSUFBSSxDQUFDeEMsQ0FBTCxHQUFTd0MsSUFBSSxDQUFDdEMsQ0FBL0MsSUFDRixLQUFLc0IsUUFBTCxDQUFjeEIsQ0FBZCxHQUFrQixLQUFLc0IsTUFBdkIsSUFBaUNrQixJQUFJLENBQUN4QyxDQURwQyxJQUVGLEtBQUt3QixRQUFMLENBQWN2QixDQUFkLEdBQWtCLEtBQUtxQixNQUF2QixJQUFpQ2tCLElBQUksQ0FBQ3ZDLENBQUwsR0FBU3VDLElBQUksQ0FBQ3JDLENBRjdDLElBR0YsS0FBS3FCLFFBQUwsQ0FBY3ZCLENBQWQsR0FBa0IsS0FBS3FCLE1BQXZCLElBQWlDa0IsSUFBSSxDQUFDdkMsQ0FIM0M7QUFJRDtBQWxFSDs7QUFBQTtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmZkNDQ4OWZiNzE4YjE0NmY3ZjQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBRdWFkT2JqZWN0IH0gZnJvbSAnLi9xdWFkdHJlZSdcblxuZXhwb3J0IGNsYXNzIFJlY3Qge1xuICB4OiBudW1iZXJcbiAgeTogbnVtYmVyXG4gIHc6IG51bWJlclxuICBoOiBudW1iZXJcbiAgY29uc3RydWN0b3IoeD86IG51bWJlciwgeT86IG51bWJlciwgdz86IG51bWJlciwgaD86IG51bWJlcikge1xuICAgIHRoaXMueCA9IHggfHwgMFxuICAgIHRoaXMueSA9IHkgfHwgMFxuICAgIHRoaXMudyA9IHcgfHwgMFxuICAgIHRoaXMuaCA9IGggfHwgMFxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWZWN0b3IyRCB7XG4gIHg6IG51bWJlclxuICB5OiBudW1iZXJcbiAgY29uc3RydWN0b3IoeD86IG51bWJlciwgeT86IG51bWJlcikge1xuICAgIHRoaXMueCA9IHggfHwgMFxuICAgIHRoaXMueSA9IHkgfHwgMFxuICB9XG5cbiAgbWFnbml0dWRlKCk6IG51bWJlciB7IHJldHVybiBNYXRoLnNxcnQodGhpcy54ICogdGhpcy54ICsgdGhpcy55ICogdGhpcy55KSB9XG4gIGFuZ2xlKCk6IG51bWJlciB7IHJldHVybiBNYXRoLmF0YW4yKC10aGlzLnksIHRoaXMueCkgfVxuICBhbmdsZUJldHdlZW4odmVjdG9yOiBWZWN0b3IyRCk6IG51bWJlciB7IHJldHVybiAodGhpcy5hbmdsZSgpIC0gdmVjdG9yLmFuZ2xlKCkgKyAyICogTWF0aC5QSSkgJSBNYXRoLlBJIH1cbiAgYWRkKHZlY3RvcjogVmVjdG9yMkQpOiB2b2lkIHsgdGhpcy54ICs9IHZlY3Rvci54OyB0aGlzLnkgKz0gdmVjdG9yLnkgfVxuXG4gIHJvdGF0ZWQoYW5nbGU6IG51bWJlcik6IFZlY3RvcjJEIHsgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLnggKiBNYXRoLmNvcyhhbmdsZSkgLSB0aGlzLnkgKiBNYXRoLnNpbihhbmdsZSksIHRoaXMueCAqIE1hdGguc2luKGFuZ2xlKSAtIHRoaXMueSAqIE1hdGguY29zKGFuZ2xlKSkgfVxuICBkaWZmZXJlbmNlKHZlY3RvcjogVmVjdG9yMkQpOiBWZWN0b3IyRCB7IHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54IC0gdmVjdG9yLngsIHRoaXMueSAtIHZlY3Rvci55KSB9XG4gIHNjYWxlKGZhY3RvcjogbnVtYmVyKTogVmVjdG9yMkQgeyByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAqIGZhY3RvciwgdGhpcy55ICogZmFjdG9yKSB9XG4gIHJldmVyc2VkKCk6IFZlY3RvcjJEIHsgcmV0dXJuIHRoaXMuc2NhbGUoLTEpIH1cbiAgbm9ybWFsaXplZCgpOiBWZWN0b3IyRCB7IGNvbnN0IG1hZyA9IHRoaXMubWFnbml0dWRlKCk7IHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54IC8gbWFnLCB0aGlzLnkgLyBtYWcpIH1cbn1cblxudHlwZSBCb3VuZFR5cGUgPSAnVE9QJyB8ICdMRUZUJyB8ICdCT1RUT00nIHwgJ1JJR0hUJyB8ICdJTlNJREUnXG5leHBvcnQgY2xhc3MgQ2lyY2xlQm9keSBpbXBsZW1lbnRzIFF1YWRPYmplY3Qge1xuICByYWRpdXM6IG51bWJlclxuICBtYXNzOiBudW1iZXJcbiAgcG9zaXRpb246IFZlY3RvcjJEXG4gIHZlbG9jaXR5OiBWZWN0b3IyRFxuICBjb25zdHJ1Y3Rvcihwb3NYPzogbnVtYmVyLCBwb3NZPzogbnVtYmVyLCB2ZWxYPzogbnVtYmVyLCB2ZWxZPzogbnVtYmVyLCByYWRpdXM/OiBudW1iZXIpIHtcbiAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cyB8fCAxMFxuICAgIHRoaXMubWFzcyA9IHRoaXMucmFkaXVzIC8vIG1hc3MgcHJvcG9ydGlvbmF0ZSB0byBzaXplXG4gICAgdGhpcy5wb3NpdGlvbiA9IChwb3NYIHx8IHBvc1kpICYmIG5ldyBWZWN0b3IyRChwb3NYLCBwb3NZKSB8fCBuZXcgVmVjdG9yMkRcbiAgICB0aGlzLnZlbG9jaXR5ID0gKHZlbFggfHwgdmVsWSkgJiYgbmV3IFZlY3RvcjJEKHZlbFgsIHZlbFkpIHx8IG5ldyBWZWN0b3IyRFxuICB9XG4gIHRpY2soZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucG9zaXRpb24uYWRkKHRoaXMudmVsb2NpdHkuc2NhbGUoZGVsdGEpKVxuICB9XG5cbiAgY29sbGlkZShjaXJjbGU6IENpcmNsZUJvZHkpOiB2b2lkIHtcbiAgICBjb25zdCBjb2xsaXNpb25WZWN0b3IgPSBjaXJjbGUucG9zaXRpb24uZGlmZmVyZW5jZSh0aGlzLnBvc2l0aW9uKVxuICAgIGlmIChjb2xsaXNpb25WZWN0b3IubWFnbml0dWRlKCkgPCB0aGlzLnJhZGl1cyArIGNpcmNsZS5yYWRpdXMpIHtcbiAgICAgIC8vIFRPRE8gLSBzbGlnaHR5IHdvcmtpbmcgYnV0IGRlZmZlcnJlZFxuICAgICAgY29uc3Qgc29mdENvbGxpc2lvbiA9IHRydWVcbiAgICAgIGlmIChzb2Z0Q29sbGlzaW9uKSB7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVTY2FsZSA9IChtYXNzOiBudW1iZXIsIHZlbG9jaXR5VmVjOiBWZWN0b3IyRCk6IG51bWJlciA9PiAodmVsb2NpdHlWZWMubWFnbml0dWRlKCkgLyAxMDAwKVxuICAgICAgICB0aGlzLnZlbG9jaXR5LmFkZChjb2xsaXNpb25WZWN0b3Iubm9ybWFsaXplZCgpLnNjYWxlKC1jb21wdXRlU2NhbGUoY2lyY2xlLm1hc3MsIGNpcmNsZS52ZWxvY2l0eSkpKVxuICAgICAgICBjaXJjbGUudmVsb2NpdHkuYWRkKGNvbGxpc2lvblZlY3Rvci5ub3JtYWxpemVkKCkuc2NhbGUoY29tcHV0ZVNjYWxlKHRoaXMubWFzcywgdGhpcy52ZWxvY2l0eSkpKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52ZWxvY2l0eSA9IHRoaXMudmVsb2NpdHkucm90YXRlZCgyICogKChNYXRoLlBJIC8gMikgLSB0aGlzLnZlbG9jaXR5LmFuZ2xlQmV0d2Vlbihjb2xsaXNpb25WZWN0b3IpKSlcbiAgICAgICAgY2lyY2xlLnZlbG9jaXR5ID0gY2lyY2xlLnZlbG9jaXR5LnJvdGF0ZWQoMiAqICgoTWF0aC5QSSAvIDIpIC0gY2lyY2xlLnZlbG9jaXR5LmFuZ2xlQmV0d2Vlbihjb2xsaXNpb25WZWN0b3IucmV2ZXJzZWQoKSkpKVxuICAgICAgfVxuXG4gICAgfVxuICB9XG4gIGNvbGxpZGVCb3VuZHMoYm91bmRSZWN0OiBSZWN0KTogdm9pZCB7XG4gICAgc3dpdGNoICh0aGlzLmV4aXRpbmdCb3VuZHMoYm91bmRSZWN0KSkge1xuICAgICAgY2FzZSAnVE9QJzpcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5yYWRpdXNcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICo9IC0xXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdCT1RUT00nOlxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBib3VuZFJlY3QueSArIGJvdW5kUmVjdC5oIC0gdGhpcy5yYWRpdXNcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICo9IC0xXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdMRUZUJzpcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5yYWRpdXNcbiAgICAgICAgdGhpcy52ZWxvY2l0eS54ICo9IC0xXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdSSUdIVCc6XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IGJvdW5kUmVjdC54ICsgYm91bmRSZWN0LncgLSB0aGlzLnJhZGl1c1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnggKj0gLTFcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6IGJyZWFrXG4gICAgfVxuICB9XG5cbiAgZXhpdGluZ0JvdW5kcyhyZWN0OiBSZWN0KTogQm91bmRUeXBlIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5yYWRpdXMgPiByZWN0LnggKyByZWN0LncpIHJldHVybiAnUklHSFQnXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzIDwgcmVjdC54KSByZXR1cm4gJ0xFRlQnXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMucmFkaXVzID4gcmVjdC55ICsgcmVjdC5oKSByZXR1cm4gJ0JPVFRPTSdcbiAgICBpZiAodGhpcy5wb3NpdGlvbi55IC0gdGhpcy5yYWRpdXMgPCByZWN0LnkpIHJldHVybiAnVE9QJ1xuICAgIHJldHVybiAnSU5TSURFJ1xuICB9XG5cbiAgaW5zaWRlUmVjdChyZWN0OiBSZWN0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueCArIHRoaXMucmFkaXVzIDw9IHJlY3QueCArIHJlY3Qud1xuICAgICAgJiYgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMgPj0gcmVjdC54XG4gICAgICAmJiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnJhZGl1cyA8PSByZWN0LnkgKyByZWN0LmhcbiAgICAgICYmIHRoaXMucG9zaXRpb24ueSAtIHRoaXMucmFkaXVzID49IHJlY3QueVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==