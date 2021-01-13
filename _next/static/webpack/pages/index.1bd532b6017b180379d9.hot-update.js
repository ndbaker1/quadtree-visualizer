webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/physics.ts":
/*!**************************!*\
  !*** ./utils/physics.ts ***!
  \**************************/
/*! exports provided: PhysicsEnvironment, updateWith, compute2DCollision */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicsEnvironment", function() { return PhysicsEnvironment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWith", function() { return updateWith; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compute2DCollision", function() { return compute2DCollision; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _vector2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector2d */ "./utils/vector2d.ts");



/**
 * Set of Requirements for a Physics Environment
 */

var PhysicsEnvironment = function PhysicsEnvironment() {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PhysicsEnvironment);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "coefficientOfRestitution", 0.8);
};
/**
 * Updates an object with a partial object [source] containing any variable on the target
 * @param target object to update
 * @param source values to update
 */

function updateWith(target, source) {
  var sourceObjectMapping = Object.keys(source).map(function (key) {
    return {
      key: key,
      value: source[key]
    };
  });
  sourceObjectMapping.forEach(function (entry) {
    target[entry.key] = entry.value;
  });
}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcGh5c2ljcy50cyJdLCJuYW1lcyI6WyJQaHlzaWNzRW52aXJvbm1lbnQiLCJ1cGRhdGVXaXRoIiwidGFyZ2V0Iiwic291cmNlIiwic291cmNlT2JqZWN0TWFwcGluZyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsImZvckVhY2giLCJlbnRyeSIsImNvbXB1dGUyRENvbGxpc2lvbiIsImZpcnN0Iiwic2Vjb25kIiwiZW52aXJvbm1lbnQiLCJqb2ludE1hc3MiLCJtYXNzIiwibW9tZW10dW1Cb2R5MSIsIngiLCJ2ZWxvY2l0eSIsInkiLCJtb21lbXR1bUJvZHkyIiwiVmVjdG9yMkQiLCJjb2VmZmljaWVudE9mUmVzdGl0dXRpb24iLCJzY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUNPLElBQU1BLGtCQUFiO0FBQUE7O0FBQUEsOEhBQ29DLEdBRHBDO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNDLFVBQVQsQ0FBdUJDLE1BQXZCLEVBQWtDQyxNQUFsQyxFQUEyRTtBQUNoRixNQUFNQyxtQkFBbUIsR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlILE1BQVosRUFBb0JJLEdBQXBCLENBQXdCLFVBQUNDLEdBQUQ7QUFBQSxXQUFVO0FBQUVBLFNBQUcsRUFBSEEsR0FBRjtBQUFPQyxXQUFLLEVBQUVOLE1BQU0sQ0FBRUssR0FBRjtBQUFwQixLQUFWO0FBQUEsR0FBeEIsQ0FBNUI7QUFDQUoscUJBQW1CLENBQUNNLE9BQXBCLENBQTRCLFVBQUNDLEtBQUQsRUFBVztBQUFFVCxVQUFNLENBQUNTLEtBQUssQ0FBQ0gsR0FBUCxDQUFOLEdBQW9CRyxLQUFLLENBQUNGLEtBQTFCO0FBQWlDLEdBQTFFO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLFNBQVNHLGtCQUFULENBQTRCQyxLQUE1QixFQUFnREMsTUFBaEQsRUFBcUVDLFdBQXJFLEVBQTZJO0FBQ2xKO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFLE1BQU1DLFNBQVMsR0FBR0gsS0FBSyxDQUFDSSxJQUFOLEdBQWFILE1BQU0sQ0FBQ0csSUFBdEM7QUFDQSxNQUFNQyxhQUFhLEdBQUc7QUFBRUMsS0FBQyxFQUFFTixLQUFLLENBQUNJLElBQU4sR0FBYUosS0FBSyxDQUFDTyxRQUFOLENBQWVELENBQWpDO0FBQW9DRSxLQUFDLEVBQUVSLEtBQUssQ0FBQ0ksSUFBTixHQUFhSixLQUFLLENBQUNPLFFBQU4sQ0FBZUM7QUFBbkUsR0FBdEI7QUFDQSxNQUFNQyxhQUFhLEdBQUc7QUFBRUgsS0FBQyxFQUFFTCxNQUFNLENBQUNHLElBQVAsR0FBY0gsTUFBTSxDQUFDTSxRQUFQLENBQWdCRCxDQUFuQztBQUFzQ0UsS0FBQyxFQUFFUCxNQUFNLENBQUNHLElBQVAsR0FBY0gsTUFBTSxDQUFDTSxRQUFQLENBQWdCQztBQUF2RSxHQUF0QjtBQUNBLFNBQU87QUFDTFIsU0FBSyxFQUFFLElBQUlVLGtEQUFKLENBQ0pSLFdBQVcsQ0FBQ1Msd0JBQVosR0FBdUNWLE1BQU0sQ0FBQ0csSUFBOUMsSUFBc0RILE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkQsQ0FBaEIsR0FBb0JOLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxDQUF6RixJQUE4RkQsYUFBYSxDQUFDQyxDQUE1RyxHQUFnSEcsYUFBYSxDQUFDSCxDQUQxSCxFQUVKSixXQUFXLENBQUNTLHdCQUFaLEdBQXVDVixNQUFNLENBQUNHLElBQTlDLElBQXNESCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JDLENBQWhCLEdBQW9CUixLQUFLLENBQUNPLFFBQU4sQ0FBZUMsQ0FBekYsSUFBOEZILGFBQWEsQ0FBQ0csQ0FBNUcsR0FBZ0hDLGFBQWEsQ0FBQ0QsQ0FGMUgsRUFHTEksS0FISyxDQUdDLElBQUlULFNBSEwsQ0FERjtBQUtMRixVQUFNLEVBQUUsSUFBSVMsa0RBQUosQ0FDTFIsV0FBVyxDQUFDUyx3QkFBWixHQUF1Q1gsS0FBSyxDQUFDSSxJQUE3QyxJQUFxREosS0FBSyxDQUFDTyxRQUFOLENBQWVELENBQWYsR0FBbUJMLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkQsQ0FBeEYsSUFBNkZELGFBQWEsQ0FBQ0MsQ0FBM0csR0FBK0dHLGFBQWEsQ0FBQ0gsQ0FEeEgsRUFFTEosV0FBVyxDQUFDUyx3QkFBWixHQUF1Q1gsS0FBSyxDQUFDSSxJQUE3QyxJQUFxREosS0FBSyxDQUFDTyxRQUFOLENBQWVDLENBQWYsR0FBbUJQLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkMsQ0FBeEYsSUFBNkZILGFBQWEsQ0FBQ0csQ0FBM0csR0FBK0dDLGFBQWEsQ0FBQ0QsQ0FGeEgsRUFHTkksS0FITSxDQUdBLElBQUlULFNBSEo7QUFMSCxHQUFQO0FBVUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWJkNTMyYjYwMTdiMTgwMzc5ZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi92ZWN0b3IyZCdcblxuLyoqXG4gKiBTZXQgb2YgUmVxdWlyZW1lbnRzIGZvciBhIFBoeXNpY3MgRW52aXJvbm1lbnRcbiAqL1xuZXhwb3J0IGNsYXNzIFBoeXNpY3NFbnZpcm9ubWVudCB7XG4gIHB1YmxpYyBjb2VmZmljaWVudE9mUmVzdGl0dXRpb24gPSAwLjhcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGFuIG9iamVjdCB3aXRoIGEgcGFydGlhbCBvYmplY3QgW3NvdXJjZV0gY29udGFpbmluZyBhbnkgdmFyaWFibGUgb24gdGhlIHRhcmdldFxuICogQHBhcmFtIHRhcmdldCBvYmplY3QgdG8gdXBkYXRlXG4gKiBAcGFyYW0gc291cmNlIHZhbHVlcyB0byB1cGRhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVdpdGg8VD4odGFyZ2V0OiBULCBzb3VyY2U6IHsgW0sgaW4ga2V5b2YgVF0/OiBUW0tdIH0pOiB2b2lkIHtcbiAgY29uc3Qgc291cmNlT2JqZWN0TWFwcGluZyA9IE9iamVjdC5rZXlzKHNvdXJjZSkubWFwKChrZXkpID0+ICh7IGtleSwgdmFsdWU6IHNvdXJjZVsoa2V5IGFzIGtleW9mIFQpXSB9KSkgYXMgQXJyYXk8eyBrZXk6IGtleW9mIFQsIHZhbHVlOiBUW2tleW9mIFRdIH0+XG4gIHNvdXJjZU9iamVjdE1hcHBpbmcuZm9yRWFjaCgoZW50cnkpID0+IHsgdGFyZ2V0W2VudHJ5LmtleV0gPSBlbnRyeS52YWx1ZSB9KVxufVxuXG4vKipcbiAqIE1pbmltdW0gcmVxdWlyZW1lbnRzIG9mIGEgYm9keSB0byBjYWxjdWxhdGUgcGh5c2ljcyBiYXNlZCBwcm9jZXNzZXNcbiAqIC0gb21pdHRpbmcgYWNjZWxlcmF0aW9uIGZvciBub3dcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQaHlzaWNzQm9keSB7XG4gIHBvc2l0aW9uOiBWZWN0b3IyRCxcbiAgdmVsb2NpdHk6IFZlY3RvcjJELFxuICBtYXNzOiBudW1iZXJcbn1cblxuLyoqXG4gKiBDb21wdXRlcyBhIGNvbGxpc2lvbiBmb3IgdGhlIGVudmlyb25tZW50XG4gKiBmaXJzdCAtIHRoZSByZXN1bHRpbmcgdmVsb2NpdHkgdmVjdG9yIGZvciBib2R5MVxuICogc2Vjb25kIC0gdGhlIHJlc3VsdGluZyB2ZWxvY2l0eSB2ZWN0b3IgZm9yIGJvZHkyXG4gKiBAcGFyYW0gZmlyc3QgdGhlIGZpcnN0IHBoeXNpY3MgYm9keSBcbiAqIEBwYXJhbSBzZWNvbmQgdGhlIHNlY29uZCBwaHlzaWNzIGJvZHlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGUyRENvbGxpc2lvbihmaXJzdDogUGh5c2ljc0JvZHksIHNlY29uZDogUGh5c2ljc0JvZHksIGVudmlyb25tZW50OiBQaHlzaWNzRW52aXJvbm1lbnQpOiB7IGZpcnN0OiBWZWN0b3IyRCwgc2Vjb25kOiBWZWN0b3IyRCB9IHtcbiAgLyoqXG4gICAqIHYgPSBmaW5hbCB2ZWxvY2l0eSB2ZWN0b3JcbiAgICogdSA9IGluaXRpYWwgdmVsb2N0eSB2ZWN0b3JcbiAgICogbSA9IG1hc3Mgb2YgYm9keVxuICAgKiBwID0gbW9tZW50dW0gb2YgYm9keVxuICAgKiBDciA9IGNvZWZmaWNpZW50IG9mIFJlc3RpdHV0aW9uXG4gICAqIFxuICAgKiAgICAgICAoQ3IpKG0yKSh1MiAtIHUxKSArIChtMSkodjEpICsgKG0yKSh2MikgICAgIChDcikobTIpKHUyIC0gdTEpICsgcDEgKyBwMlxuICAgKiB2MSA9IOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCA9IOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlFxuICAgKiAgICAgICAgICAgICAgICAgICAgICBtMSArIG0yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMSArIG0yXG4gICAqIFxuICAgKiAgICAgICAoQ3IpKG0xKSh1MSAtIHUyKSArIChtMSkodjEpICsgKG0yKSh2MikgICAgICAoQ3IpKG0xKSh1MSAtIHUyKSArIHAxICsgcDJcbiAgICogdjIgPSDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQgPSAg4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG4gICAqICAgICAgICAgICAgICAgICAgICAgIG0xICsgbTIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xICsgbTJcbiAgICovXG4gIGNvbnN0IGpvaW50TWFzcyA9IGZpcnN0Lm1hc3MgKyBzZWNvbmQubWFzc1xuICBjb25zdCBtb21lbXR1bUJvZHkxID0geyB4OiBmaXJzdC5tYXNzICogZmlyc3QudmVsb2NpdHkueCwgeTogZmlyc3QubWFzcyAqIGZpcnN0LnZlbG9jaXR5LnkgfVxuICBjb25zdCBtb21lbXR1bUJvZHkyID0geyB4OiBzZWNvbmQubWFzcyAqIHNlY29uZC52ZWxvY2l0eS54LCB5OiBzZWNvbmQubWFzcyAqIHNlY29uZC52ZWxvY2l0eS55IH1cbiAgcmV0dXJuIHtcbiAgICBmaXJzdDogbmV3IFZlY3RvcjJEKFxuICAgICAgKGVudmlyb25tZW50LmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiAqIHNlY29uZC5tYXNzICogKHNlY29uZC52ZWxvY2l0eS54IC0gZmlyc3QudmVsb2NpdHkueCkgKyBtb21lbXR1bUJvZHkxLnggKyBtb21lbXR1bUJvZHkyLngpLFxuICAgICAgKGVudmlyb25tZW50LmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiAqIHNlY29uZC5tYXNzICogKHNlY29uZC52ZWxvY2l0eS55IC0gZmlyc3QudmVsb2NpdHkueSkgKyBtb21lbXR1bUJvZHkxLnkgKyBtb21lbXR1bUJvZHkyLnkpXG4gICAgKS5zY2FsZSgxIC8gam9pbnRNYXNzKSxcbiAgICBzZWNvbmQ6IG5ldyBWZWN0b3IyRChcbiAgICAgIChlbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gKiBmaXJzdC5tYXNzICogKGZpcnN0LnZlbG9jaXR5LnggLSBzZWNvbmQudmVsb2NpdHkueCkgKyBtb21lbXR1bUJvZHkxLnggKyBtb21lbXR1bUJvZHkyLngpLFxuICAgICAgKGVudmlyb25tZW50LmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiAqIGZpcnN0Lm1hc3MgKiAoZmlyc3QudmVsb2NpdHkueSAtIHNlY29uZC52ZWxvY2l0eS55KSArIG1vbWVtdHVtQm9keTEueSArIG1vbWVtdHVtQm9keTIueSlcbiAgICApLnNjYWxlKDEgLyBqb2ludE1hc3MpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=