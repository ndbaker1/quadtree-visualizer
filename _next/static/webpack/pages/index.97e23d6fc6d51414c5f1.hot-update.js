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
            return mass ^ 5;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcGh5c2ljcy50cyJdLCJuYW1lcyI6WyJSZWN0IiwieCIsInkiLCJ3IiwiaCIsIlZlY3RvcjJEIiwiTWF0aCIsInNxcnQiLCJhdGFuMiIsInZlY3RvciIsImFuZ2xlIiwiUEkiLCJjb3MiLCJzaW4iLCJmYWN0b3IiLCJzY2FsZSIsIm1hZyIsIm1hZ25pdHVkZSIsIkNpcmNsZUJvZHkiLCJwb3NYIiwicG9zWSIsInZlbFgiLCJ2ZWxZIiwicmFkaXVzIiwibWFzcyIsInBvc2l0aW9uIiwidmVsb2NpdHkiLCJkZWx0YSIsImFkZCIsImNpcmNsZSIsImNvbGxpc2lvblZlY3RvciIsImRpZmZlcmVuY2UiLCJzb2Z0Q29sbGlzaW9uIiwiY29tcHV0ZVNjYWxlIiwidmVsb2NpdHlWZWMiLCJub3JtYWxpemVkIiwicm90YXRlZCIsImFuZ2xlQmV0d2VlbiIsInJldmVyc2VkIiwiYm91bmRSZWN0IiwiZXhpdGluZ0JvdW5kcyIsInJlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRU8sSUFBTUEsSUFBYixHQUtFLGNBQVlDLENBQVosRUFBd0JDLENBQXhCLEVBQW9DQyxDQUFwQyxFQUFnREMsQ0FBaEQsRUFBNEQ7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDMUQsT0FBS0gsQ0FBTCxHQUFTQSxDQUFDLElBQUksQ0FBZDtBQUNBLE9BQUtDLENBQUwsR0FBU0EsQ0FBQyxJQUFJLENBQWQ7QUFDQSxPQUFLQyxDQUFMLEdBQVNBLENBQUMsSUFBSSxDQUFkO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTQSxDQUFDLElBQUksQ0FBZDtBQUNELENBVkg7QUFhTyxJQUFNQyxRQUFiO0FBR0Usb0JBQVlKLENBQVosRUFBd0JDLENBQXhCLEVBQW9DO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2xDLFNBQUtELENBQUwsR0FBU0EsQ0FBQyxJQUFJLENBQWQ7QUFDQSxTQUFLQyxDQUFMLEdBQVNBLENBQUMsSUFBSSxDQUFk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SUFBSSxDQUFDdEMsQ0FBbEQsRUFBcUQsT0FBTyxPQUFQO0FBQ3JELFVBQUksS0FBS3NCLFFBQUwsQ0FBY3hCLENBQWQsR0FBa0IsS0FBS3NCLE1BQXZCLEdBQWdDa0IsSUFBSSxDQUFDeEMsQ0FBekMsRUFBNEMsT0FBTyxNQUFQO0FBQzVDLFVBQUksS0FBS3dCLFFBQUwsQ0FBY3ZCLENBQWQsR0FBa0IsS0FBS3FCLE1BQXZCLEdBQWdDa0IsSUFBSSxDQUFDdkMsQ0FBTCxHQUFTdUMsSUFBSSxDQUFDckMsQ0FBbEQsRUFBcUQsT0FBTyxRQUFQO0FBQ3JELFVBQUksS0FBS3FCLFFBQUwsQ0FBY3ZCLENBQWQsR0FBa0IsS0FBS3FCLE1BQXZCLEdBQWdDa0IsSUFBSSxDQUFDdkMsQ0FBekMsRUFBNEMsT0FBTyxLQUFQO0FBQzVDLGFBQU8sUUFBUDtBQUNEO0FBM0RIO0FBQUE7QUFBQSwrQkE2RGF1QyxJQTdEYixFQTZEa0M7QUFDOUIsYUFBTyxLQUFLaEIsUUFBTCxDQUFjeEIsQ0FBZCxHQUFrQixLQUFLc0IsTUFBdkIsSUFBaUNrQixJQUFJLENBQUN4QyxDQUFMLEdBQVN3QyxJQUFJLENBQUN0QyxDQUEvQyxJQUNGLEtBQUtzQixRQUFMLENBQWN4QixDQUFkLEdBQWtCLEtBQUtzQixNQUF2QixJQUFpQ2tCLElBQUksQ0FBQ3hDLENBRHBDLElBRUYsS0FBS3dCLFFBQUwsQ0FBY3ZCLENBQWQsR0FBa0IsS0FBS3FCLE1BQXZCLElBQWlDa0IsSUFBSSxDQUFDdkMsQ0FBTCxHQUFTdUMsSUFBSSxDQUFDckMsQ0FGN0MsSUFHRixLQUFLcUIsUUFBTCxDQUFjdkIsQ0FBZCxHQUFrQixLQUFLcUIsTUFBdkIsSUFBaUNrQixJQUFJLENBQUN2QyxDQUgzQztBQUlEO0FBbEVIOztBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTdlMjNkNmZjNmQ1MTQxNGM1ZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1YWRPYmplY3QgfSBmcm9tICcuL3F1YWR0cmVlJ1xuXG5leHBvcnQgY2xhc3MgUmVjdCB7XG4gIHg6IG51bWJlclxuICB5OiBudW1iZXJcbiAgdzogbnVtYmVyXG4gIGg6IG51bWJlclxuICBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyLCB5PzogbnVtYmVyLCB3PzogbnVtYmVyLCBoPzogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0geCB8fCAwXG4gICAgdGhpcy55ID0geSB8fCAwXG4gICAgdGhpcy53ID0gdyB8fCAwXG4gICAgdGhpcy5oID0gaCB8fCAwXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZlY3RvcjJEIHtcbiAgeDogbnVtYmVyXG4gIHk6IG51bWJlclxuICBjb25zdHJ1Y3Rvcih4PzogbnVtYmVyLCB5PzogbnVtYmVyKSB7XG4gICAgdGhpcy54ID0geCB8fCAwXG4gICAgdGhpcy55ID0geSB8fCAwXG4gIH1cblxuICBtYWduaXR1ZGUoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguc3FydCh0aGlzLnggKiB0aGlzLnggKyB0aGlzLnkgKiB0aGlzLnkpIH1cbiAgYW5nbGUoKTogbnVtYmVyIHsgcmV0dXJuIE1hdGguYXRhbjIoLXRoaXMueSwgdGhpcy54KSB9XG4gIGFuZ2xlQmV0d2Vlbih2ZWN0b3I6IFZlY3RvcjJEKTogbnVtYmVyIHsgcmV0dXJuICh0aGlzLmFuZ2xlKCkgLSB2ZWN0b3IuYW5nbGUoKSArIDIgKiBNYXRoLlBJKSAlIE1hdGguUEkgfVxuICBhZGQodmVjdG9yOiBWZWN0b3IyRCk6IHZvaWQgeyB0aGlzLnggKz0gdmVjdG9yLng7IHRoaXMueSArPSB2ZWN0b3IueSB9XG5cbiAgcm90YXRlZChhbmdsZTogbnVtYmVyKTogVmVjdG9yMkQgeyByZXR1cm4gbmV3IFZlY3RvcjJEKHRoaXMueCAqIE1hdGguY29zKGFuZ2xlKSAtIHRoaXMueSAqIE1hdGguc2luKGFuZ2xlKSwgdGhpcy54ICogTWF0aC5zaW4oYW5nbGUpIC0gdGhpcy55ICogTWF0aC5jb3MoYW5nbGUpKSB9XG4gIGRpZmZlcmVuY2UodmVjdG9yOiBWZWN0b3IyRCk6IFZlY3RvcjJEIHsgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLnggLSB2ZWN0b3IueCwgdGhpcy55IC0gdmVjdG9yLnkpIH1cbiAgc2NhbGUoZmFjdG9yOiBudW1iZXIpOiBWZWN0b3IyRCB7IHJldHVybiBuZXcgVmVjdG9yMkQodGhpcy54ICogZmFjdG9yLCB0aGlzLnkgKiBmYWN0b3IpIH1cbiAgcmV2ZXJzZWQoKTogVmVjdG9yMkQgeyByZXR1cm4gdGhpcy5zY2FsZSgtMSkgfVxuICBub3JtYWxpemVkKCk6IFZlY3RvcjJEIHsgY29uc3QgbWFnID0gdGhpcy5tYWduaXR1ZGUoKTsgcmV0dXJuIG5ldyBWZWN0b3IyRCh0aGlzLnggLyBtYWcsIHRoaXMueSAvIG1hZykgfVxufVxuXG50eXBlIEJvdW5kVHlwZSA9ICdUT1AnIHwgJ0xFRlQnIHwgJ0JPVFRPTScgfCAnUklHSFQnIHwgJ0lOU0lERSdcbmV4cG9ydCBjbGFzcyBDaXJjbGVCb2R5IGltcGxlbWVudHMgUXVhZE9iamVjdCB7XG4gIHJhZGl1czogbnVtYmVyXG4gIG1hc3M6IG51bWJlclxuICBwb3NpdGlvbjogVmVjdG9yMkRcbiAgdmVsb2NpdHk6IFZlY3RvcjJEXG4gIGNvbnN0cnVjdG9yKHBvc1g/OiBudW1iZXIsIHBvc1k/OiBudW1iZXIsIHZlbFg/OiBudW1iZXIsIHZlbFk/OiBudW1iZXIsIHJhZGl1cz86IG51bWJlcikge1xuICAgIHRoaXMucmFkaXVzID0gcmFkaXVzIHx8IDEwXG4gICAgdGhpcy5tYXNzID0gdGhpcy5yYWRpdXMgLy8gbWFzcyBwcm9wb3J0aW9uYXRlIHRvIHNpemVcbiAgICB0aGlzLnBvc2l0aW9uID0gKHBvc1ggfHwgcG9zWSkgJiYgbmV3IFZlY3RvcjJEKHBvc1gsIHBvc1kpIHx8IG5ldyBWZWN0b3IyRFxuICAgIHRoaXMudmVsb2NpdHkgPSAodmVsWCB8fCB2ZWxZKSAmJiBuZXcgVmVjdG9yMkQodmVsWCwgdmVsWSkgfHwgbmV3IFZlY3RvcjJEXG4gIH1cbiAgdGljayhkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wb3NpdGlvbi5hZGQodGhpcy52ZWxvY2l0eS5zY2FsZShkZWx0YSkpXG4gIH1cblxuICBjb2xsaWRlKGNpcmNsZTogQ2lyY2xlQm9keSk6IHZvaWQge1xuICAgIGNvbnN0IGNvbGxpc2lvblZlY3RvciA9IGNpcmNsZS5wb3NpdGlvbi5kaWZmZXJlbmNlKHRoaXMucG9zaXRpb24pXG4gICAgaWYgKGNvbGxpc2lvblZlY3Rvci5tYWduaXR1ZGUoKSA8IHRoaXMucmFkaXVzICsgY2lyY2xlLnJhZGl1cykge1xuICAgICAgLy8gVE9ETyAtIHNsaWdodHkgd29ya2luZyBidXQgZGVmZmVycmVkXG4gICAgICBjb25zdCBzb2Z0Q29sbGlzaW9uID0gdHJ1ZVxuICAgICAgaWYgKHNvZnRDb2xsaXNpb24pIHtcbiAgICAgICAgY29uc3QgY29tcHV0ZVNjYWxlID0gKG1hc3M6IG51bWJlciwgdmVsb2NpdHlWZWM6IFZlY3RvcjJEKTogbnVtYmVyID0+IChtYXNzKSBeIDVcbiAgICAgICAgdGhpcy52ZWxvY2l0eS5hZGQoY29sbGlzaW9uVmVjdG9yLm5vcm1hbGl6ZWQoKS5zY2FsZSgtY29tcHV0ZVNjYWxlKGNpcmNsZS5tYXNzLCBjaXJjbGUudmVsb2NpdHkpKSlcbiAgICAgICAgY2lyY2xlLnZlbG9jaXR5LmFkZChjb2xsaXNpb25WZWN0b3Iubm9ybWFsaXplZCgpLnNjYWxlKGNvbXB1dGVTY2FsZSh0aGlzLm1hc3MsIHRoaXMudmVsb2NpdHkpKSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmVsb2NpdHkgPSB0aGlzLnZlbG9jaXR5LnJvdGF0ZWQoMiAqICgoTWF0aC5QSSAvIDIpIC0gdGhpcy52ZWxvY2l0eS5hbmdsZUJldHdlZW4oY29sbGlzaW9uVmVjdG9yKSkpXG4gICAgICAgIGNpcmNsZS52ZWxvY2l0eSA9IGNpcmNsZS52ZWxvY2l0eS5yb3RhdGVkKDIgKiAoKE1hdGguUEkgLyAyKSAtIGNpcmNsZS52ZWxvY2l0eS5hbmdsZUJldHdlZW4oY29sbGlzaW9uVmVjdG9yLnJldmVyc2VkKCkpKSlcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuICBjb2xsaWRlQm91bmRzKGJvdW5kUmVjdDogUmVjdCk6IHZvaWQge1xuICAgIHN3aXRjaCAodGhpcy5leGl0aW5nQm91bmRzKGJvdW5kUmVjdCkpIHtcbiAgICAgIGNhc2UgJ1RPUCc6XG4gICAgICAgIHRoaXMucG9zaXRpb24ueSA9IHRoaXMucmFkaXVzXG4gICAgICAgIHRoaXMudmVsb2NpdHkueSAqPSAtMVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnQk9UVE9NJzpcbiAgICAgICAgdGhpcy5wb3NpdGlvbi55ID0gYm91bmRSZWN0LnkgKyBib3VuZFJlY3QuaCAtIHRoaXMucmFkaXVzXG4gICAgICAgIHRoaXMudmVsb2NpdHkueSAqPSAtMVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnTEVGVCc6XG4gICAgICAgIHRoaXMucG9zaXRpb24ueCA9IHRoaXMucmFkaXVzXG4gICAgICAgIHRoaXMudmVsb2NpdHkueCAqPSAtMVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSAnUklHSFQnOlxuICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBib3VuZFJlY3QueCArIGJvdW5kUmVjdC53IC0gdGhpcy5yYWRpdXNcbiAgICAgICAgdGhpcy52ZWxvY2l0eS54ICo9IC0xXG4gICAgICAgIGJyZWFrXG4gICAgICBkZWZhdWx0OiBicmVha1xuICAgIH1cbiAgfVxuXG4gIGV4aXRpbmdCb3VuZHMocmVjdDogUmVjdCk6IEJvdW5kVHlwZSB7XG4gICAgaWYgKHRoaXMucG9zaXRpb24ueCArIHRoaXMucmFkaXVzID4gcmVjdC54ICsgcmVjdC53KSByZXR1cm4gJ1JJR0hUJ1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnggLSB0aGlzLnJhZGl1cyA8IHJlY3QueCkgcmV0dXJuICdMRUZUJ1xuICAgIGlmICh0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnJhZGl1cyA+IHJlY3QueSArIHJlY3QuaCkgcmV0dXJuICdCT1RUT00nXG4gICAgaWYgKHRoaXMucG9zaXRpb24ueSAtIHRoaXMucmFkaXVzIDwgcmVjdC55KSByZXR1cm4gJ1RPUCdcbiAgICByZXR1cm4gJ0lOU0lERSdcbiAgfVxuXG4gIGluc2lkZVJlY3QocmVjdDogUmVjdCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnggKyB0aGlzLnJhZGl1cyA8PSByZWN0LnggKyByZWN0LndcbiAgICAgICYmIHRoaXMucG9zaXRpb24ueCAtIHRoaXMucmFkaXVzID49IHJlY3QueFxuICAgICAgJiYgdGhpcy5wb3NpdGlvbi55ICsgdGhpcy5yYWRpdXMgPD0gcmVjdC55ICsgcmVjdC5oXG4gICAgICAmJiB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLnJhZGl1cyA+PSByZWN0LnlcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=