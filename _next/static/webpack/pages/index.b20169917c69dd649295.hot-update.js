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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _vector2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector2d */ "./utils/vector2d.ts");



/**
 * Set of Requirements for a Physics Environment
 */

/**
 * Physics Environment instance
 */
var PhysicsEnvironment = function PhysicsEnvironment() {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PhysicsEnvironment);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "coefficientOfRestitution", 0.8);
} // // updates any of the requested Physics Environment Variables
// public updateVar(vars: PhysicsEnvironmentVariables): void {
//   if (vars.coefficientOfRestitution !== undefined)
//     this.coefficientOfRestitution = vars.coefficientOfRestitution
// }
;
/**
 * Minimum requirements of a body to calculate physics based processes
 * - omitting acceleration for now
 */

/**
 * Computes a collision for the environment
 * first - the resulting velocity vector for body1
 * second - the resulting velocity vector for body2
 * @param first the first physics body 
 * @param second the second physics body
 */
function compute2DCollision(first, second, environment) {
  /**
   * v = final velocity vector
   * u = initial velocty vector
   * m = mass of body
   * p = momentum of body
   * Cr = coefficient of Restitution
   * 
   *       (Cr)(m2)(u2 - u1) + (m1)(v1) + (m2)(v2)     (Cr)(m2)(u2 - u1) + p1 + p2
   * v1 = ————————————————————————————————————————— = —————————————————————————————
   *                      m1 + m2                                m1 + m2
   * 
   *       (Cr)(m1)(u1 - u2) + (m1)(v1) + (m2)(v2)      (Cr)(m1)(u1 - u2) + p1 + p2
   * v2 = ————————————————————————————————————————— =  —————————————————————————————
   *                      m1 + m2                                m1 + m2
   */
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
    first: new _vector2d__WEBPACK_IMPORTED_MODULE_2__["Vector2D"](environment.coefficientOfRestitution * second.mass * (second.velocity.x - first.velocity.x) + momemtumBody1.x + momemtumBody2.x, environment.coefficientOfRestitution * second.mass * (second.velocity.y - first.velocity.y) + momemtumBody1.y + momemtumBody2.y).scale(1 / jointMass),
    second: new _vector2d__WEBPACK_IMPORTED_MODULE_2__["Vector2D"](environment.coefficientOfRestitution * first.mass * (first.velocity.x - second.velocity.x) + momemtumBody1.x + momemtumBody2.x, environment.coefficientOfRestitution * first.mass * (first.velocity.y - second.velocity.y) + momemtumBody1.y + momemtumBody2.y).scale(1 / jointMass)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcGh5c2ljcy50cyJdLCJuYW1lcyI6WyJQaHlzaWNzRW52aXJvbm1lbnQiLCJjb21wdXRlMkRDb2xsaXNpb24iLCJmaXJzdCIsInNlY29uZCIsImVudmlyb25tZW50Iiwiam9pbnRNYXNzIiwibWFzcyIsIm1vbWVtdHVtQm9keTEiLCJ4IiwidmVsb2NpdHkiLCJ5IiwibW9tZW10dW1Cb2R5MiIsIlZlY3RvcjJEIiwiY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uIiwic2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUtBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLGtCQUFiO0FBQUE7O0FBQUEsOEhBQ29DLEdBRHBDO0FBQUEsRUFFRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkY7QUFTQTtBQUNBO0FBQ0E7QUFDQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNDLGtCQUFULENBQTRCQyxLQUE1QixFQUFnREMsTUFBaEQsRUFBcUVDLFdBQXJFLEVBQTZJO0FBQ2xKO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFLE1BQU1DLFNBQVMsR0FBR0gsS0FBSyxDQUFDSSxJQUFOLEdBQWFILE1BQU0sQ0FBQ0csSUFBdEM7QUFDQSxNQUFNQyxhQUFhLEdBQUc7QUFBRUMsS0FBQyxFQUFFTixLQUFLLENBQUNJLElBQU4sR0FBYUosS0FBSyxDQUFDTyxRQUFOLENBQWVELENBQWpDO0FBQW9DRSxLQUFDLEVBQUVSLEtBQUssQ0FBQ0ksSUFBTixHQUFhSixLQUFLLENBQUNPLFFBQU4sQ0FBZUM7QUFBbkUsR0FBdEI7QUFDQSxNQUFNQyxhQUFhLEdBQUc7QUFBRUgsS0FBQyxFQUFFTCxNQUFNLENBQUNHLElBQVAsR0FBY0gsTUFBTSxDQUFDTSxRQUFQLENBQWdCRCxDQUFuQztBQUFzQ0UsS0FBQyxFQUFFUCxNQUFNLENBQUNHLElBQVAsR0FBY0gsTUFBTSxDQUFDTSxRQUFQLENBQWdCQztBQUF2RSxHQUF0QjtBQUNBLFNBQU87QUFDTFIsU0FBSyxFQUFFLElBQUlVLGtEQUFKLENBQ0pSLFdBQVcsQ0FBQ1Msd0JBQVosR0FBdUNWLE1BQU0sQ0FBQ0csSUFBOUMsSUFBc0RILE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkQsQ0FBaEIsR0FBb0JOLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxDQUF6RixJQUE4RkQsYUFBYSxDQUFDQyxDQUE1RyxHQUFnSEcsYUFBYSxDQUFDSCxDQUQxSCxFQUVKSixXQUFXLENBQUNTLHdCQUFaLEdBQXVDVixNQUFNLENBQUNHLElBQTlDLElBQXNESCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JDLENBQWhCLEdBQW9CUixLQUFLLENBQUNPLFFBQU4sQ0FBZUMsQ0FBekYsSUFBOEZILGFBQWEsQ0FBQ0csQ0FBNUcsR0FBZ0hDLGFBQWEsQ0FBQ0QsQ0FGMUgsRUFHTEksS0FISyxDQUdDLElBQUlULFNBSEwsQ0FERjtBQUtMRixVQUFNLEVBQUUsSUFBSVMsa0RBQUosQ0FDTFIsV0FBVyxDQUFDUyx3QkFBWixHQUF1Q1gsS0FBSyxDQUFDSSxJQUE3QyxJQUFxREosS0FBSyxDQUFDTyxRQUFOLENBQWVELENBQWYsR0FBbUJMLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkQsQ0FBeEYsSUFBNkZELGFBQWEsQ0FBQ0MsQ0FBM0csR0FBK0dHLGFBQWEsQ0FBQ0gsQ0FEeEgsRUFFTEosV0FBVyxDQUFDUyx3QkFBWixHQUF1Q1gsS0FBSyxDQUFDSSxJQUE3QyxJQUFxREosS0FBSyxDQUFDTyxRQUFOLENBQWVDLENBQWYsR0FBbUJQLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkMsQ0FBeEYsSUFBNkZILGFBQWEsQ0FBQ0csQ0FBM0csR0FBK0dDLGFBQWEsQ0FBQ0QsQ0FGeEgsRUFHTkksS0FITSxDQUdBLElBQUlULFNBSEo7QUFMSCxHQUFQO0FBVUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjIwMTY5OTE3YzY5ZGQ2NDkyOTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi92ZWN0b3IyZCdcblxuLyoqXG4gKiBTZXQgb2YgUmVxdWlyZW1lbnRzIGZvciBhIFBoeXNpY3MgRW52aXJvbm1lbnRcbiAqL1xuaW50ZXJmYWNlIFBoeXNpY3NFbnZpcm9ubWVudFZhcmlhYmxlcyB7XG4gIGNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbj86IG51bWJlclxufVxuXG4vKipcbiAqIFBoeXNpY3MgRW52aXJvbm1lbnQgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIFBoeXNpY3NFbnZpcm9ubWVudCBpbXBsZW1lbnRzIFBoeXNpY3NFbnZpcm9ubWVudFZhcmlhYmxlcyB7XG4gIHB1YmxpYyBjb2VmZmljaWVudE9mUmVzdGl0dXRpb24gPSAwLjhcbiAgLy8gLy8gdXBkYXRlcyBhbnkgb2YgdGhlIHJlcXVlc3RlZCBQaHlzaWNzIEVudmlyb25tZW50IFZhcmlhYmxlc1xuICAvLyBwdWJsaWMgdXBkYXRlVmFyKHZhcnM6IFBoeXNpY3NFbnZpcm9ubWVudFZhcmlhYmxlcyk6IHZvaWQge1xuICAvLyAgIGlmICh2YXJzLmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiAhPT0gdW5kZWZpbmVkKVxuICAvLyAgICAgdGhpcy5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gPSB2YXJzLmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvblxuICAvLyB9XG59XG5cbi8qKlxuICogTWluaW11bSByZXF1aXJlbWVudHMgb2YgYSBib2R5IHRvIGNhbGN1bGF0ZSBwaHlzaWNzIGJhc2VkIHByb2Nlc3Nlc1xuICogLSBvbWl0dGluZyBhY2NlbGVyYXRpb24gZm9yIG5vd1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFBoeXNpY3NCb2R5IHtcbiAgcG9zaXRpb246IFZlY3RvcjJELFxuICB2ZWxvY2l0eTogVmVjdG9yMkQsXG4gIG1hc3M6IG51bWJlclxufVxuXG4vKipcbiAqIENvbXB1dGVzIGEgY29sbGlzaW9uIGZvciB0aGUgZW52aXJvbm1lbnRcbiAqIGZpcnN0IC0gdGhlIHJlc3VsdGluZyB2ZWxvY2l0eSB2ZWN0b3IgZm9yIGJvZHkxXG4gKiBzZWNvbmQgLSB0aGUgcmVzdWx0aW5nIHZlbG9jaXR5IHZlY3RvciBmb3IgYm9keTJcbiAqIEBwYXJhbSBmaXJzdCB0aGUgZmlyc3QgcGh5c2ljcyBib2R5IFxuICogQHBhcmFtIHNlY29uZCB0aGUgc2Vjb25kIHBoeXNpY3MgYm9keVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZTJEQ29sbGlzaW9uKGZpcnN0OiBQaHlzaWNzQm9keSwgc2Vjb25kOiBQaHlzaWNzQm9keSwgZW52aXJvbm1lbnQ6IFBoeXNpY3NFbnZpcm9ubWVudCk6IHsgZmlyc3Q6IFZlY3RvcjJELCBzZWNvbmQ6IFZlY3RvcjJEIH0ge1xuICAvKipcbiAgICogdiA9IGZpbmFsIHZlbG9jaXR5IHZlY3RvclxuICAgKiB1ID0gaW5pdGlhbCB2ZWxvY3R5IHZlY3RvclxuICAgKiBtID0gbWFzcyBvZiBib2R5XG4gICAqIHAgPSBtb21lbnR1bSBvZiBib2R5XG4gICAqIENyID0gY29lZmZpY2llbnQgb2YgUmVzdGl0dXRpb25cbiAgICogXG4gICAqICAgICAgIChDcikobTIpKHUyIC0gdTEpICsgKG0xKSh2MSkgKyAobTIpKHYyKSAgICAgKENyKShtMikodTIgLSB1MSkgKyBwMSArIHAyXG4gICAqIHYxID0g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUID0g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG4gICAqICAgICAgICAgICAgICAgICAgICAgIG0xICsgbTIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xICsgbTJcbiAgICogXG4gICAqICAgICAgIChDcikobTEpKHUxIC0gdTIpICsgKG0xKSh2MSkgKyAobTIpKHYyKSAgICAgIChDcikobTEpKHUxIC0gdTIpICsgcDEgKyBwMlxuICAgKiB2MiA9IOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCA9ICDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcbiAgICogICAgICAgICAgICAgICAgICAgICAgbTEgKyBtMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEgKyBtMlxuICAgKi9cbiAgY29uc3Qgam9pbnRNYXNzID0gZmlyc3QubWFzcyArIHNlY29uZC5tYXNzXG4gIGNvbnN0IG1vbWVtdHVtQm9keTEgPSB7IHg6IGZpcnN0Lm1hc3MgKiBmaXJzdC52ZWxvY2l0eS54LCB5OiBmaXJzdC5tYXNzICogZmlyc3QudmVsb2NpdHkueSB9XG4gIGNvbnN0IG1vbWVtdHVtQm9keTIgPSB7IHg6IHNlY29uZC5tYXNzICogc2Vjb25kLnZlbG9jaXR5LngsIHk6IHNlY29uZC5tYXNzICogc2Vjb25kLnZlbG9jaXR5LnkgfVxuICByZXR1cm4ge1xuICAgIGZpcnN0OiBuZXcgVmVjdG9yMkQoXG4gICAgICAoZW52aXJvbm1lbnQuY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uICogc2Vjb25kLm1hc3MgKiAoc2Vjb25kLnZlbG9jaXR5LnggLSBmaXJzdC52ZWxvY2l0eS54KSArIG1vbWVtdHVtQm9keTEueCArIG1vbWVtdHVtQm9keTIueCksXG4gICAgICAoZW52aXJvbm1lbnQuY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uICogc2Vjb25kLm1hc3MgKiAoc2Vjb25kLnZlbG9jaXR5LnkgLSBmaXJzdC52ZWxvY2l0eS55KSArIG1vbWVtdHVtQm9keTEueSArIG1vbWVtdHVtQm9keTIueSlcbiAgICApLnNjYWxlKDEgLyBqb2ludE1hc3MpLFxuICAgIHNlY29uZDogbmV3IFZlY3RvcjJEKFxuICAgICAgKGVudmlyb25tZW50LmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiAqIGZpcnN0Lm1hc3MgKiAoZmlyc3QudmVsb2NpdHkueCAtIHNlY29uZC52ZWxvY2l0eS54KSArIG1vbWVtdHVtQm9keTEueCArIG1vbWVtdHVtQm9keTIueCksXG4gICAgICAoZW52aXJvbm1lbnQuY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uICogZmlyc3QubWFzcyAqIChmaXJzdC52ZWxvY2l0eS55IC0gc2Vjb25kLnZlbG9jaXR5LnkpICsgbW9tZW10dW1Cb2R5MS55ICsgbW9tZW10dW1Cb2R5Mi55KVxuICAgICkuc2NhbGUoMSAvIGpvaW50TWFzcylcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==