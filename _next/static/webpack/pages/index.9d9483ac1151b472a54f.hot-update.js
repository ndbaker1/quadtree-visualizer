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
        // const computeScale = (mass: number, velocityVec: Vector2D): number => (mass) ^ 5
        // this.velocity.add(collisionVector.normalized().scale(-computeScale(circle.mass, circle.velocity)))
        // circle.velocity.add(collisionVector.normalized().scale(computeScale(this.mass, this.velocity)))
        this.velocity = this.velocity.rotated(2 * (Math.PI / 2 - this.velocity.angleBetween(collisionVector)));
        circle.velocity = circle.velocity.rotated(2 * (Math.PI / 2 - circle.velocity.angleBetween(collisionVector.reversed())));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcGh5c2ljcy50cyJdLCJuYW1lcyI6WyJSZWN0IiwieCIsInkiLCJ3IiwiaCIsIlZlY3RvcjJEIiwiTWF0aCIsInNxcnQiLCJhdGFuMiIsInZlY3RvciIsImFuZ2xlIiwiUEkiLCJjb3MiLCJzaW4iLCJmYWN0b3IiLCJzY2FsZSIsIm1hZyIsIm1hZ25pdHVkZSIsIkNpcmNsZUJvZHkiLCJwb3NYIiwicG9zWSIsInZlbFgiLCJ2ZWxZIiwicmFkaXVzIiwibWFzcyIsInBvc2l0aW9uIiwidmVsb2NpdHkiLCJkZWx0YSIsImFkZCIsImNpcmNsZSIsImNvbGxpc2lvblZlY3RvciIsImRpZmZlcmVuY2UiLCJyb3RhdGVkIiwiYW5nbGVCZXR3ZWVuIiwicmV2ZXJzZWQiLCJib3VuZFJlY3QiLCJleGl0aW5nQm91bmRzIiwicmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTyxJQUFNQSxJQUFiLEdBS0UsY0FBWUMsQ0FBWixFQUF3QkMsQ0FBeEIsRUFBb0NDLENBQXBDLEVBQWdEQyxDQUFoRCxFQUE0RDtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUMxRCxPQUFLSCxDQUFMLEdBQVNBLENBQUMsSUFBSSxDQUFkO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTQSxDQUFDLElBQUksQ0FBZDtBQUNBLE9BQUtDLENBQUwsR0FBU0EsQ0FBQyxJQUFJLENBQWQ7QUFDQSxPQUFLQyxDQUFMLEdBQVNBLENBQUMsSUFBSSxDQUFkO0FBQ0QsQ0FWSDtBQWFPLElBQU1DLFFBQWI7QUFHRSxvQkFBWUosQ0FBWixFQUF3QkMsQ0FBeEIsRUFBb0M7QUFBQTs7QUFBQTs7QUFBQTs7QUFDbEMsU0FBS0QsQ0FBTCxHQUFTQSxDQUFDLElBQUksQ0FBZDtBQUNBLFNBQUtDLENBQUwsR0FBU0EsQ0FBQyxJQUFJLENBQWQ7QUFDRDs7QUFOSDtBQUFBO0FBQUEsZ0NBUXNCO0FBQUUsYUFBT0ksSUFBSSxDQUFDQyxJQUFMLENB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QyxJQUFJLENBQUNsQyxDQUEvQyxJQUNGLEtBQUtzQixRQUFMLENBQWN4QixDQUFkLEdBQWtCLEtBQUtzQixNQUF2QixJQUFpQ2MsSUFBSSxDQUFDcEMsQ0FEcEMsSUFFRixLQUFLd0IsUUFBTCxDQUFjdkIsQ0FBZCxHQUFrQixLQUFLcUIsTUFBdkIsSUFBaUNjLElBQUksQ0FBQ25DLENBQUwsR0FBU21DLElBQUksQ0FBQ2pDLENBRjdDLElBR0YsS0FBS3FCLFFBQUwsQ0FBY3ZCLENBQWQsR0FBa0IsS0FBS3FCLE1BQXZCLElBQWlDYyxJQUFJLENBQUNuQyxDQUgzQztBQUlEO0FBL0RIOztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWQ5NDgzYWMxMTUxYjQ3MmE1NGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1YWRPYmplY3QgfSBmcm9tICcuL3F1YWR0cmVlJ1xuXG5leHBvcnQgY2xhc3MgUmVjdCB7XG4gIHg6IG51bWJlclxuICB5OiBudW1iZXJcbiAgdzogbnVtYmVyXG4gIGg6IG51bWJlclxuICBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyLCB5PzogbnVtYmVyLCB3PzogbnVtYmVyLCBoPzogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0geCB8fCAwXG4gICAgdGhpcy55ID0geSB8fCAwXG4gICAgdGhpcy53ID0gdyB8fCAwXG4gICAgdGhpcy5oID0gaCB8fCAwXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZlY3RvcjJEIHtcbiAgeDogbnVtYmVyXG4gIHk6IG51bWJlclxuICBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyLCB5PzogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0geCB8fCAwXG4gICAgdGhpcy55ID0geSB8fCAwXG4gIH1cblxuICBtYWduaXR1ZGUoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpIH1cbiAgYW5nbGUoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguYXRhbjIoLXRoaXMueSwgdGhpcy54KSB9XG4gIGFuZ2xlQmV0d2Vlbih2ZWN0b3I6IFZlY3RvcjJEKTogbnVtYmVyIHsgcmV0dXJuICh0aGlzLmFuZ2xlKCkgLSB2ZWN0b3IuYW5nbGUoKSArIDIgKiBNYXRoLlBJKSAlIE1hdGguUEkgfVxuICBhZGQodmVjdG9yOiBWZWN0b3IyRCk6IHZvaWQgeyB0aGlzLnggKz0gdmVjdG9yLng7IHRoaXMueSArPSB2ZWN0b3IueSB9XG5cbiAgcm90YXRlZChhbmdsZTogbnVtYmVyKTogVmVjdG9yMkQgeyByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAqIE1hdGguY29zKGFuZ2xlKSAtIHRoaXMueSAqIE1hdGguc2luKGFuZ2xlKSwgdGhpcy54ICogTWF0aC5zaW4oYW5nbGUpIC0gdGhpcy55ICogTWF0aC5jb3MoYW5nbGUpKSB9XG4gIGRpZmZlcmVuY2UodmVjdG9yOiBWZWN0b3IyRCk6IFZlY3RvcjJEIHsgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLnggLSB2ZWN0b3IueCwgdGhpcy55IC0gdmVjdG9yLnkpIH1cbiAgc2NhbGUoZmFjdG9yOiBudW1iZXIpOiBWZWN0b3IyRCB7IHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54ICogZmFjdG9yLCB0aGlzLnkgKiBmYWN0b3IpIH1cbiAgcmV2ZXJzZWQoKTogVmVjdG9yMkQgeyByZXR1cm4gdGhpcy5zY2FsZSgtMSkgfVxuICBub3JtYWxpemVkKCk6IFZlY3RvcjJEIHsgY29uc3QgbWFnID0gdGhpcy5tYWduaXR1ZGUoKTsgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLnggLyBtYWcsIHRoaXMueSAvIG1hZykgfVxufVxuXG50eXBlIEJvdW5kVHlwZSA9ICdUT1AnIHwgJ0xFRlQnIHwgJ0JPVFRPTScgfCAnUklHSFQnIHwgJ0lOU0lERSdcbmV4cG9ydCBjbGFzcyBDaXJjbGVCb2R5IGltcGxlbWVudHMgUXVhZE9iamVjdCB7XG4gIHJhZGl1czogbnVtYmVyXG4gIG1hc3M6IG51bWJlclxuICBwb3NpdGlvbjogVmVjdG9yMkRcbiAgdmVsb2NpdHk6IFZlY3RvcjJEXG4gIGNvbnN0cnVjdG9yKHBvc1g/OiBudW1iZXIsIHBvc1k/OiBudW1iZXIsIHZlbFg/OiBudW1iZXIsIHZlbFk/OiBudW1iZXIsIHJhZGl1cz86IG51bWJlcikge1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzIHx8IDEwXG4gICAgdGhpcy5tYXNzID0gdGhpcy5yYWRpdXMgLy8gbWFzcyBwcm9wb3J0aW9uYXRlIHRvIHNpemVcbiAgICB0aGlzLnBvc2l0aW9uID0gKHBvc1ggfHwgcG9zWSkgJiYgbmV3IFZlY3RvcjJEKHBvc1gsIHBvc1kpIHx8IG5ldyBWZWN0b3IyRFxuICAgIHRoaXMudmVsb2NpdHkgPSAodmVsWCB8fCB2ZWxZKSAmJiBuZXcgVmVjdG9yMkQodmVsWCwgdmVsWSkgfHwgbmV3IFZlY3RvcjJEXG4gIH1cbiAgdGljayhkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eS5zY2FsZShkZWx0YSkpXG4gIH1cblxuICBjb2xsaWRlKGNpcmNsZTogQ2lyY2xlQm9keSk6IHZvaWQge1xuICAgIGNvbnN0IGNvbGxpc2lvblZlY3RvciA9IGNpcmNsZS5wb3NpdGlvbi5kaWZmZXJlbmNlKHRoaXMucG9zaXRpb24pXG4gICAgaWYgKGNvbGxpc2lvblZlY3Rvci5tYWduaXR1ZGUoKSA8IHRoaXMucmFkaXVzICsgY2lyY2xlLnJhZGl1cykge1xuICAgICAgLy8gVE9ETyAtIHNsaWdodHkgd29ya2luZyBidXQgZGVmZmVycmVkXG5cbiAgICAgIC8vIGNvbnN0IGNvbXB1dGVTY2FsZSA9IChtYXNzOiBudW1iZXIsIHZlbG9jaXR5VmVjOiBWZWN0b3IyRCk6IG51bWJlciA9PiAobWFzcykgXiA1XG4gICAgICAvLyB0aGlzLnZlbG9jaXR5LmFkZChjb2xsaXNpb25WZWN0b3Iubm9ybWFsaXplZCgpLnNjYWxlKC1jb21wdXRlU2NhbGUoY2lyY2xlLm1hc3MsIGNpcmNsZS52ZWxvY2l0eSkpKVxuICAgICAgLy8gY2lyY2xlLnZlbG9jaXR5LmFkZChjb2xsaXNpb25WZWN0b3Iubm9ybWFsaXplZCgpLnNjYWxlKGNvbXB1dGVTY2FsZSh0aGlzLm1hc3MsIHRoaXMudmVsb2NpdHkpKSlcblxuICAgICAgdGhpcy52ZWxvY2l0eSA9IHRoaXMudmVsb2NpdHkucm90YXRlZCgyICogKChNYXRoLlBJIC8gMikgLSB0aGlzLnZlbG9jaXR5LmFuZ2xlQmV0d2Vlbihjb2xsaXNpb25WZWN0b3IpKSlcbiAgICAgIGNpcmNsZS52ZWxvY2l0eSA9IGNpcmNsZS52ZWxvY2l0eS5yb3RhdGVkKDIgKiAoKE1hdGguUEkgLyAyKSAtIGNpcmNsZS52ZWxvY2l0eS5hbmdsZUJldHdlZW4oY29sbGlzaW9uVmVjdG9yLnJldmVyc2VkKCkpKSlcbiAgICB9XG4gIH1cbiAgY29sbGlkZUJvdW5kcyhib3VuZFJlY3Q6IFJlY3QpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKHRoaXMuZXhpdGluZ0JvdW5kcyhib3VuZFJlY3QpKSB7XG4gICAgICBjYXNlICdUT1AnOlxuICAgICAgICB0aGlzLnBvc2l0aW9uLnkgPSB0aGlzLnJhZGl1c1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKj0gLTFcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ0JPVFRPTSc6XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IGJvdW5kUmVjdC55ICsgYm91bmRSZWN0LmggLSB0aGlzLnJhZGl1c1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnkgKj0gLTFcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ0xFRlQnOlxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSB0aGlzLnJhZGl1c1xuICAgICAgICB0aGlzLnZlbG9jaXR5LnggKj0gLTFcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ1JJR0hUJzpcbiAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gYm91bmRSZWN0LnggKyBib3VuZFJlY3QudyAtIHRoaXMucmFkaXVzXG4gICAgICAgIHRoaXMudmVsb2NpdHkueCAqPSAtMVxuICAgICAgICBicmVha1xuICAgICAgZGVmYXVsdDogYnJlYWtcbiAgICB9XG4gIH1cblxuICBleGl0aW5nQm91bmRzKHJlY3Q6IFJlY3QpOiBCb3VuZFR5cGUge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnJhZGl1cyA+IHJlY3QueCArIHJlY3QudykgcmV0dXJuICdSSUdIVCdcbiAgICBpZiAodGhpcy5wb3NpdGlvbi54IC0gdGhpcy5yYWRpdXMgPCByZWN0LngpIHJldHVybiAnTEVGVCdcbiAgICBpZiAodGhpcy5wb3NpdGlvbi55ICsgdGhpcy5yYWRpdXMgPiByZWN0LnkgKyByZWN0LmgpIHJldHVybiAnQk9UVE9NJ1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnJhZGl1cyA8IHJlY3QueSkgcmV0dXJuICdUT1AnXG4gICAgcmV0dXJuICdJTlNJREUnXG4gIH1cblxuICBpbnNpZGVSZWN0KHJlY3Q6IFJlY3QpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5yYWRpdXMgPD0gcmVjdC54ICsgcmVjdC53XG4gICAgICAmJiB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnJhZGl1cyA+PSByZWN0LnhcbiAgICAgICYmIHRoaXMucG9zaXRpb24ueSArIHRoaXMucmFkaXVzIDw9IHJlY3QueSArIHJlY3QuaFxuICAgICAgJiYgdGhpcy5wb3NpdGlvbi55IC0gdGhpcy5yYWRpdXMgPj0gcmVjdC55XG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9