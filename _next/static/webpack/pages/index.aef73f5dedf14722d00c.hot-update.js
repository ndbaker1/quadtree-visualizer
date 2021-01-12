webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/physics.ts":
/*!**************************!*\
  !*** ./utils/physics.ts ***!
  \**************************/
/*! exports provided: PhysicsEnvironment, compute2DCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicsEnvironment", function() { return PhysicsEnvironment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compute2DCollision", function() { return compute2DCollision; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _vector2d__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vector2d */ "./utils/vector2d.ts");




var PhysicsEnvironment = /*#__PURE__*/function () {
  function PhysicsEnvironment() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PhysicsEnvironment);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "coefficientOfRestitution", 0.8);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PhysicsEnvironment, [{
    key: "updateVar",
    value: function updateVar(vars) {
      if (vars.coefficientOfRestitution !== undefined) this.coefficientOfRestitution = vars.coefficientOfRestitution;
    }
  }]);

  return PhysicsEnvironment;
}();

/**
 * Computes a collision for the environment
 * first - the resulting velocity vector for body1
 * second - the resulting velocity vector for body2
 * @param first the first physics body 
 * @param second the second physics body
 */
function compute2DCollision(first, second, environment) {
  var jointMass = first.mass + second.mass;
  var momemtumBody1 = {
    x: first.mass * first.velocity.x,
    y: first.mass * first.velocity.y
  };
  var momemtumBody2 = {
    x: second.mass * second.velocity.x,
    y: second.mass * second.velocity.y
  };
  return {
    first: new _vector2d__WEBPACK_IMPORTED_MODULE_3__["Vector2D"](environment.coefficientOfRestitution * second.mass * (second.velocity.x - first.velocity.x) + momemtumBody1.x + momemtumBody2.x, environment.coefficientOfRestitution * second.mass * (second.velocity.y - first.velocity.y) + momemtumBody1.y + momemtumBody2.y).scale(1 / jointMass),
    second: new _vector2d__WEBPACK_IMPORTED_MODULE_3__["Vector2D"](environment.coefficientOfRestitution * first.mass * (first.velocity.x - second.velocity.x) + momemtumBody1.x + momemtumBody2.x, environment.coefficientOfRestitution * first.mass * (first.velocity.y - second.velocity.y) + momemtumBody1.y + momemtumBody2.y).scale(1 / jointMass)
  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcGh5c2ljcy50cyJdLCJuYW1lcyI6WyJQaHlzaWNzRW52aXJvbm1lbnQiLCJ2YXJzIiwiY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uIiwidW5kZWZpbmVkIiwiY29tcHV0ZTJEQ29sbGlzaW9uIiwiZmlyc3QiLCJzZWNvbmQiLCJlbnZpcm9ubWVudCIsImpvaW50TWFzcyIsIm1hc3MiLCJtb21lbXR1bUJvZHkxIiwieCIsInZlbG9jaXR5IiwieSIsIm1vbWVtdHVtQm9keTIiLCJWZWN0b3IyRCIsInNjYWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBS08sSUFBTUEsa0JBQWI7QUFBQTtBQUFBOztBQUFBLGdJQUNvQyxHQURwQztBQUFBOztBQUFBO0FBQUE7QUFBQSw4QkFFbUJDLElBRm5CLEVBRTREO0FBQ3hELFVBQUlBLElBQUksQ0FBQ0Msd0JBQUwsS0FBa0NDLFNBQXRDLEVBQ0UsS0FBS0Qsd0JBQUwsR0FBZ0NELElBQUksQ0FBQ0Msd0JBQXJDO0FBQ0g7QUFMSDs7QUFBQTtBQUFBOztBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sU0FBU0Usa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQWdEQyxNQUFoRCxFQUFxRUMsV0FBckUsRUFBNkk7QUFDbEosTUFBTUMsU0FBUyxHQUFHSCxLQUFLLENBQUNJLElBQU4sR0FBYUgsTUFBTSxDQUFDRyxJQUF0QztBQUNBLE1BQU1DLGFBQWEsR0FBRztBQUFFQyxLQUFDLEVBQUVOLEtBQUssQ0FBQ0ksSUFBTixHQUFhSixLQUFLLENBQUNPLFFBQU4sQ0FBZUQsQ0FBakM7QUFBb0NFLEtBQUMsRUFBRVIsS0FBSyxDQUFDSSxJQUFOLEdBQWFKLEtBQUssQ0FBQ08sUUFBTixDQUFlQztBQUFuRSxHQUF0QjtBQUNBLE1BQU1DLGFBQWEsR0FBRztBQUFFSCxLQUFDLEVBQUVMLE1BQU0sQ0FBQ0csSUFBUCxHQUFjSCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JELENBQW5DO0FBQXNDRSxLQUFDLEVBQUVQLE1BQU0sQ0FBQ0csSUFBUCxHQUFjSCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JDO0FBQXZFLEdBQXRCO0FBQ0EsU0FBTztBQUNMUixTQUFLLEVBQUUsSUFBSVUsa0RBQUosQ0FDSlIsV0FBVyxDQUFDTCx3QkFBWixHQUF1Q0ksTUFBTSxDQUFDRyxJQUE5QyxJQUFzREgsTUFBTSxDQUFDTSxRQUFQLENBQWdCRCxDQUFoQixHQUFvQk4sS0FBSyxDQUFDTyxRQUFOLENBQWVELENBQXpGLElBQThGRCxhQUFhLENBQUNDLENBQTVHLEdBQWdIRyxhQUFhLENBQUNILENBRDFILEVBRUpKLFdBQVcsQ0FBQ0wsd0JBQVosR0FBdUNJLE1BQU0sQ0FBQ0csSUFBOUMsSUFBc0RILE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkMsQ0FBaEIsR0FBb0JSLEtBQUssQ0FBQ08sUUFBTixDQUFlQyxDQUF6RixJQUE4RkgsYUFBYSxDQUFDRyxDQUE1RyxHQUFnSEMsYUFBYSxDQUFDRCxDQUYxSCxFQUdMRyxLQUhLLENBR0MsSUFBSVIsU0FITCxDQURGO0FBS0xGLFVBQU0sRUFBRSxJQUFJUyxrREFBSixDQUNMUixXQUFXLENBQUNMLHdCQUFaLEdBQXVDRyxLQUFLLENBQUNJLElBQTdDLElBQXFESixLQUFLLENBQUNPLFFBQU4sQ0FBZUQsQ0FBZixHQUFtQkwsTUFBTSxDQUFDTSxRQUFQLENBQWdCRCxDQUF4RixJQUE2RkQsYUFBYSxDQUFDQyxDQUEzRyxHQUErR0csYUFBYSxDQUFDSCxDQUR4SCxFQUVMSixXQUFXLENBQUNMLHdCQUFaLEdBQXVDRyxLQUFLLENBQUNJLElBQTdDLElBQXFESixLQUFLLENBQUNPLFFBQU4sQ0FBZUMsQ0FBZixHQUFtQlAsTUFBTSxDQUFDTSxRQUFQLENBQWdCQyxDQUF4RixJQUE2RkgsYUFBYSxDQUFDRyxDQUEzRyxHQUErR0MsYUFBYSxDQUFDRCxDQUZ4SCxFQUdORyxLQUhNLENBR0EsSUFBSVIsU0FISjtBQUxILEdBQVA7QUFVRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hZWY3M2Y1ZGVkZjE0NzIyZDAwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuL3ZlY3RvcjJkJ1xuXG5pbnRlcmZhY2UgUGh5c2ljc0Vudmlyb25tZW50VmFyaWFibGVzIHtcbiAgY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uPzogbnVtYmVyXG59XG5leHBvcnQgY2xhc3MgUGh5c2ljc0Vudmlyb25tZW50IGltcGxlbWVudHMgUGh5c2ljc0Vudmlyb25tZW50VmFyaWFibGVzIHtcbiAgcHVibGljIGNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiA9IDAuOFxuICBwdWJsaWMgdXBkYXRlVmFyKHZhcnM6IFBoeXNpY3NFbnZpcm9ubWVudFZhcmlhYmxlcyk6IHZvaWQge1xuICAgIGlmICh2YXJzLmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiAhPT0gdW5kZWZpbmVkKVxuICAgICAgdGhpcy5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gPSB2YXJzLmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvblxuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGh5c2ljc0JvZHkge1xuICBwb3NpdGlvbjogVmVjdG9yMkQsXG4gIHZlbG9jaXR5OiBWZWN0b3IyRCxcbiAgbWFzczogbnVtYmVyXG59XG5cbi8qKlxuICogQ29tcHV0ZXMgYSBjb2xsaXNpb24gZm9yIHRoZSBlbnZpcm9ubWVudFxuICogZmlyc3QgLSB0aGUgcmVzdWx0aW5nIHZlbG9jaXR5IHZlY3RvciBmb3IgYm9keTFcbiAqIHNlY29uZCAtIHRoZSByZXN1bHRpbmcgdmVsb2NpdHkgdmVjdG9yIGZvciBib2R5MlxuICogQHBhcmFtIGZpcnN0IHRoZSBmaXJzdCBwaHlzaWNzIGJvZHkgXG4gKiBAcGFyYW0gc2Vjb25kIHRoZSBzZWNvbmQgcGh5c2ljcyBib2R5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlMkRDb2xsaXNpb24oZmlyc3Q6IFBoeXNpY3NCb2R5LCBzZWNvbmQ6IFBoeXNpY3NCb2R5LCBlbnZpcm9ubWVudDogUGh5c2ljc0Vudmlyb25tZW50KTogeyBmaXJzdDogVmVjdG9yMkQsIHNlY29uZDogVmVjdG9yMkQgfSB7XG4gIGNvbnN0IGpvaW50TWFzcyA9IGZpcnN0Lm1hc3MgKyBzZWNvbmQubWFzc1xuICBjb25zdCBtb21lbXR1bUJvZHkxID0geyB4OiBmaXJzdC5tYXNzICogZmlyc3QudmVsb2NpdHkueCwgeTogZmlyc3QubWFzcyAqIGZpcnN0LnZlbG9jaXR5LnkgfVxuICBjb25zdCBtb21lbXR1bUJvZHkyID0geyB4OiBzZWNvbmQubWFzcyAqIHNlY29uZC52ZWxvY2l0eS54LCB5OiBzZWNvbmQubWFzcyAqIHNlY29uZC52ZWxvY2l0eS55IH1cbiAgcmV0dXJuIHtcbiAgICBmaXJzdDogbmV3IFZlY3RvcjJEKFxuICAgICAgKGVudmlyb25tZW50LmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiAqIHNlY29uZC5tYXNzICogKHNlY29uZC52ZWxvY2l0eS54IC0gZmlyc3QudmVsb2NpdHkueCkgKyBtb21lbXR1bUJvZHkxLnggKyBtb21lbXR1bUJvZHkyLngpLFxuICAgICAgKGVudmlyb25tZW50LmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiAqIHNlY29uZC5tYXNzICogKHNlY29uZC52ZWxvY2l0eS55IC0gZmlyc3QudmVsb2NpdHkueSkgKyBtb21lbXR1bUJvZHkxLnkgKyBtb21lbXR1bUJvZHkyLnkpXG4gICAgKS5zY2FsZSgxIC8gam9pbnRNYXNzKSxcbiAgICBzZWNvbmQ6IG5ldyBWZWN0b3IyRChcbiAgICAgIChlbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gKiBmaXJzdC5tYXNzICogKGZpcnN0LnZlbG9jaXR5LnggLSBzZWNvbmQudmVsb2NpdHkueCkgKyBtb21lbXR1bUJvZHkxLnggKyBtb21lbXR1bUJvZHkyLngpLFxuICAgICAgKGVudmlyb25tZW50LmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiAqIGZpcnN0Lm1hc3MgKiAoZmlyc3QudmVsb2NpdHkueSAtIHNlY29uZC52ZWxvY2l0eS55KSArIG1vbWVtdHVtQm9keTEueSArIG1vbWVtdHVtQm9keTIueSlcbiAgICApLnNjYWxlKDEgLyBqb2ludE1hc3MpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=