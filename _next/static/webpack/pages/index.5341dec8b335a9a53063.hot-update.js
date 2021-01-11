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
        var computeScale = function computeScale(mass, velocityVec) {
          return mass ^ 5;
        };

        this.velocity.add(collisionVector.normalized().scale(-computeScale(circle.mass, circle.velocity)));
        circle.velocity.add(collisionVector.normalized().scale(computeScale(this.mass, this.velocity))); // this.velocity = this.velocity.rotated(2 * ((Math.PI / 2) - this.velocity.angleBetween(differenceVector)))
        // circle.velocity = circle.velocity.rotated(2 * ((Math.PI / 2) - circle.velocity.angleBetween(differenceVector.reversed())))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcGh5c2ljcy50cyJdLCJuYW1lcyI6WyJSZWN0IiwieCIsInkiLCJ3IiwiaCIsIlZlY3RvcjJEIiwiTWF0aCIsInNxcnQiLCJhdGFuMiIsInZlY3RvciIsImFuZ2xlIiwiUEkiLCJjb3MiLCJzaW4iLCJmYWN0b3IiLCJzY2FsZSIsIm1hZyIsIm1hZ25pdHVkZSIsIkNpcmNsZUJvZHkiLCJwb3NYIiwicG9zWSIsInZlbFgiLCJ2ZWxZIiwicmFkaXVzIiwibWFzcyIsInBvc2l0aW9uIiwidmVsb2NpdHkiLCJkZWx0YSIsImFkZCIsImNpcmNsZSIsImNvbGxpc2lvblZlY3RvciIsImRpZmZlcmVuY2UiLCJjb21wdXRlU2NhbGUiLCJ2ZWxvY2l0eVZlYyIsIm5vcm1hbGl6ZWQiLCJib3VuZFJlY3QiLCJleGl0aW5nQm91bmRzIiwicmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxJQUFiLEdBS0UsY0FBWUMsQ0FBWixFQUF3QkMsQ0FBeEIsRUFBb0NDLENBQXBDLEVBQWdEQyxDQUFoRCxFQUE0RDtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUMxRCxPQUFLSCxDQUFMLEdBQVNBLENBQUMsSUFBSSxDQUFkO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTQSxDQUFDLElBQUksQ0FBZDtBQUNBLE9BQUtDLENBQUwsR0FBU0EsQ0FBQyxJQUFJLENBQWQ7QUFDQSxPQUFLQyxDQUFMLEdBQVNBLENBQUMsSUFBSSxDQUFkO0FBQ0QsQ0FWSDtBQWFPLElBQU1DLFFBQWI7QUFHRSxvQkFBWUosQ0FBWixFQUF3QkMsQ0FBeEIsRUFBb0M7QUFBQTs7QUFBQTs7QUFBQTs7QUFDbEMsU0FBS0QsQ0FBTCxHQUFTQSxDQUFDLElBQUksQ0FBZDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBQyxJQUFJLENBQWQ7QUFDRDs7QUFOSDtBQUFBO0FBQUEsZ0NBUXNCO0FBQUUsYUFBT0ksSUFBSSxDQUFDQyxJ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ZCxHQUFrQixLQUFLc0IsTUFBdkIsSUFBaUNjLElBQUksQ0FBQ3BDLENBQUwsR0FBU29DLElBQUksQ0FBQ2xDLENBQS9DLElBQ0YsS0FBS3NCLFFBQUwsQ0FBY3hCLENBQWQsR0FBa0IsS0FBS3NCLE1BQXZCLElBQWlDYyxJQUFJLENBQUNwQyxDQURwQyxJQUVGLEtBQUt3QixRQUFMLENBQWN2QixDQUFkLEdBQWtCLEtBQUtxQixNQUF2QixJQUFpQ2MsSUFBSSxDQUFDbkMsQ0FBTCxHQUFTbUMsSUFBSSxDQUFDakMsQ0FGN0MsSUFHRixLQUFLcUIsUUFBTCxDQUFjdkIsQ0FBZCxHQUFrQixLQUFLcUIsTUFBdkIsSUFBaUNjLElBQUksQ0FBQ25DLENBSDNDO0FBSUQ7QUEvREg7O0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MzQxZGVjOGIzMzVhOWE1MzA2My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVhZE9iamVjdCB9IGZyb20gJy4vcXVhZHRyZWUnXG5cbmV4cG9ydCBjbGFzcyBSZWN0IHtcbiAgeDogbnVtYmVyXG4gIHk6IG51bWJlclxuICB3OiBudW1iZXJcbiAgaDogbnVtYmVyXG4gIGNvbnN0cnVjdG9yKHg/OiBudW1iZXIsIHk/OiBudW1iZXIsIHc/OiBudW1iZXIsIGg/OiBudW1iZXIpIHtcbiAgICB0aGlzLnggPSB4IHx8IDBcbiAgICB0aGlzLnkgPSB5IHx8IDBcbiAgICB0aGlzLncgPSB3IHx8IDBcbiAgICB0aGlzLmggPSBoIHx8IDBcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVmVjdG9yMkQge1xuICB4OiBudW1iZXJcbiAgeTogbnVtYmVyXG4gIGNvbnN0cnVjdG9yKHg/OiBudW1iZXIsIHk/OiBudW1iZXIpIHtcbiAgICB0aGlzLnggPSB4IHx8IDBcbiAgICB0aGlzLnkgPSB5IHx8IDBcbiAgfVxuXG4gIG1hZ25pdHVkZSgpOiBudW1iZXIgeyByZXR1cm4gTWF0aC5zcXJ0KHRoaXMueCAqIHRoaXMueCArIHRoaXMueSAqIHRoaXMueSkgfVxuICBhbmdsZSgpOiBudW1iZXIgeyByZXR1cm4gTWF0aC5hdGFuMigtdGhpcy55LCB0aGlzLngpIH1cbiAgYW5nbGVCZXR3ZWVuKHZlY3RvcjogVmVjdG9yMkQpOiBudW1iZXIgeyByZXR1cm4gKHRoaXMuYW5nbGUoKSAtIHZlY3Rvci5hbmdsZSgpICsgMiAqIE1hdGguUEkpICUgTWF0aC5QSSB9XG4gIGFkZCh2ZWN0b3I6IFZlY3RvcjJEKTogdm9pZCB7IHRoaXMueCArPSB2ZWN0b3IueDsgdGhpcy55ICs9IHZlY3Rvci55IH1cblxuICByb3RhdGVkKGFuZ2xlOiBudW1iZXIpOiBWZWN0b3IyRCB7IHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54ICogTWF0aC5jb3MoYW5nbGUpIC0gdGhpcy55ICogTWF0aC5zaW4oYW5nbGUpLCB0aGlzLnggKiBNYXRoLnNpbihhbmdsZSkgLSB0aGlzLnkgKiBNYXRoLmNvcyhhbmdsZSkpIH1cbiAgZGlmZmVyZW5jZSh2ZWN0b3I6IFZlY3RvcjJEKTogVmVjdG9yMkQgeyByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAtIHZlY3Rvci54LCB0aGlzLnkgLSB2ZWN0b3IueSkgfVxuICBzY2FsZShmYWN0b3I6IG51bWJlcik6IFZlY3RvcjJEIHsgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLnggKiBmYWN0b3IsIHRoaXMueSAqIGZhY3RvcikgfVxuICByZXZlcnNlZCgpOiBWZWN0b3IyRCB7IHJldHVybiB0aGlzLnNjYWxlKC0xKSB9XG4gIG5vcm1hbGl6ZWQoKTogVmVjdG9yMkQgeyBjb25zdCBtYWcgPSB0aGlzLm1hZ25pdHVkZSgpOyByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAvIG1hZywgdGhpcy55IC8gbWFnKSB9XG59XG5cbnR5cGUgQm91bmRUeXBlID0gJ1RPUCcgfCAnTEVGVCcgfCAnQk9UVE9NJyB8ICdSSUdIVCcgfCAnSU5TSURFJ1xuZXhwb3J0IGNsYXNzIENpcmNsZUJvZHkgaW1wbGVtZW50cyBRdWFkT2JqZWN0IHtcbiAgcmFkaXVzOiBudW1iZXJcbiAgbWFzczogbnVtYmVyXG4gIHBvc2l0aW9uOiBWZWN0b3IyRFxuICB2ZWxvY2l0eTogVmVjdG9yMkRcbiAgY29uc3RydWN0b3IocG9zWD86IG51bWJlciwgcG9zWT86IG51bWJlciwgdmVsWD86IG51bWJlciwgdmVsWT86IG51bWJlciwgcmFkaXVzPzogbnVtYmVyKSB7XG4gICAgdGhpcy5yYWRpdXMgPSByYWRpdXMgfHwgMTBcbiAgICB0aGlzLm1hc3MgPSB0aGlzLnJhZGl1cyAvLyBtYXNzIHByb3BvcnRpb25hdGUgdG8gc2l6ZVxuICAgIHRoaXMucG9zaXRpb24gPSAocG9zWCB8fCBwb3NZKSAmJiBuZXcgVmVjdG9yMkQocG9zWCwgcG9zWSkgfHwgbmV3IFZlY3RvcjJEXG4gICAgdGhpcy52ZWxvY2l0eSA9ICh2ZWxYIHx8IHZlbFkpICYmIG5ldyBWZWN0b3IyRCh2ZWxYLCB2ZWxZKSB8fCBuZXcgVmVjdG9yMkRcbiAgfVxuICB0aWNrKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBvc2l0aW9uLmFkZCh0aGlzLnZlbG9jaXR5LnNjYWxlKGRlbHRhKSlcbiAgfVxuXG4gIGNvbGxpZGUoY2lyY2xlOiBDaXJjbGVCb2R5KTogdm9pZCB7XG4gICAgY29uc3QgY29sbGlzaW9uVmVjdG9yID0gY2lyY2xlLnBvc2l0aW9uLmRpZmZlcmVuY2UodGhpcy5wb3NpdGlvbilcbiAgICBpZiAoY29sbGlzaW9uVmVjdG9yLm1hZ25pdHVkZSgpIDwgdGhpcy5yYWRpdXMgKyBjaXJjbGUucmFkaXVzKSB7XG4gICAgICAvLyBUT0RPIC0gc2xpZ2h0eSB3b3JraW5nIGJ1dCBkZWZmZXJyZWRcblxuICAgICAgY29uc3QgY29tcHV0ZVNjYWxlID0gKG1hc3M6IG51bWJlciwgdmVsb2NpdHlWZWM6IFZlY3RvcjJEKTogbnVtYmVyID0+IChtYXNzKSBeIDVcbiAgICAgIHRoaXMudmVsb2NpdHkuYWRkKGNvbGxpc2lvblZlY3Rvci5ub3JtYWxpemVkKCkuc2NhbGUoLWNvbXB1dGVTY2FsZShjaXJjbGUubWFzcywgY2lyY2xlLnZlbG9jaXR5KSkpXG4gICAgICBjaXJjbGUudmVsb2NpdHkuYWRkKGNvbGxpc2lvblZlY3Rvci5ub3JtYWxpemVkKCkuc2NhbGUoY29tcHV0ZVNjYWxlKHRoaXMubWFzcywgdGhpcy52ZWxvY2l0eSkpKVxuXG4gICAgICAvLyB0aGlzLnZlbG9jaXR5ID0gdGhpcy52ZWxvY2l0eS5yb3RhdGVkKDIgKiAoKE1hdGguUEkgLyAyKSAtIHRoaXMudmVsb2NpdHkuYW5nbGVCZXR3ZWVuKGRpZmZlcmVuY2VWZWN0b3IpKSlcbiAgICAgIC8vIGNpcmNsZS52ZWxvY2l0eSA9IGNpcmNsZS52ZWxvY2l0eS5yb3RhdGVkKDIgKiAoKE1hdGguUEkgLyAyKSAtIGNpcmNsZS52ZWxvY2l0eS5hbmdsZUJldHdlZW4oZGlmZmVyZW5jZVZlY3Rvci5yZXZlcnNlZCgpKSkpXG4gICAgfVxuICB9XG4gIGNvbGxpZGVCb3VuZHMoYm91bmRSZWN0OiBSZWN0KTogdm9pZCB7XG4gICAgc3dpdGNoICh0aGlzLmV4aXRpbmdCb3VuZHMoYm91bmRSZWN0KSkge1xuICAgICAgY2FzZSAnVE9QJzpcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gdGhpcy5yYWRpdXNcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICo9IC0xXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdCT1RUT00nOlxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSBib3VuZFJlY3QueSArIGJvdW5kUmVjdC5oIC0gdGhpcy5yYWRpdXNcbiAgICAgICAgdGhpcy52ZWxvY2l0eS55ICo9IC0xXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdMRUZUJzpcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gdGhpcy5yYWRpdXNcbiAgICAgICAgdGhpcy52ZWxvY2l0eS54ICo9IC0xXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdSSUdIVCc6XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IGJvdW5kUmVjdC54ICsgYm91bmRSZWN0LncgLSB0aGlzLnJhZGl1c1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnggKj0gLTFcbiAgICAgICAgYnJlYWtcbiAgICAgIGRlZmF1bHQ6IGJyZWFrXG4gICAgfVxuICB9XG5cbiAgZXhpdGluZ0JvdW5kcyhyZWN0OiBSZWN0KTogQm91bmRUeXBlIHtcbiAgICBpZiAodGhpcy5wb3NpdGlvbi54ICsgdGhpcy5yYWRpdXMgPiByZWN0LnggKyByZWN0LncpIHJldHVybiAnUklHSFQnXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzIDwgcmVjdC54KSByZXR1cm4gJ0xFRlQnXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSArIHRoaXMucmFkaXVzID4gcmVjdC55ICsgcmVjdC5oKSByZXR1cm4gJ0JPVFRPTSdcbiAgICBpZiAodGhpcy5wb3NpdGlvbi55IC0gdGhpcy5yYWRpdXMgPCByZWN0LnkpIHJldHVybiAnVE9QJ1xuICAgIHJldHVybiAnSU5TSURFJ1xuICB9XG5cbiAgaW5zaWRlUmVjdChyZWN0OiBSZWN0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueCArIHRoaXMucmFkaXVzIDw9IHJlY3QueCArIHJlY3Qud1xuICAgICAgJiYgdGhpcy5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMgPj0gcmVjdC54XG4gICAgICAmJiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnJhZGl1cyA8PSByZWN0LnkgKyByZWN0LmhcbiAgICAgICYmIHRoaXMucG9zaXRpb24ueSAtIHRoaXMucmFkaXVzID49IHJlY3QueVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==