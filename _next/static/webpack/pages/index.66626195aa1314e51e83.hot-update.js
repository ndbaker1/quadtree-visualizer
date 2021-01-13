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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcGh5c2ljcy50cyJdLCJuYW1lcyI6WyJQaHlzaWNzRW52aXJvbm1lbnQiLCJ1cGRhdGVXaXRoIiwidGFyZ2V0Iiwic291cmNlIiwic291cmNlT2JqZWN0TWFwcGluZyIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJrZXkiLCJ2YWx1ZSIsImZvckVhY2giLCJlbnRyeSIsImNvbXB1dGUyRENvbGxpc2lvbiIsImZpcnN0Iiwic2Vjb25kIiwiZW52aXJvbm1lbnQiLCJqb2ludE1hc3MiLCJtYXNzIiwibW9tZW10dW1Cb2R5MSIsIngiLCJ2ZWxvY2l0eSIsInkiLCJtb21lbXR1bUJvZHkyIiwiVmVjdG9yMkQiLCJjb2VmZmljaWVudE9mUmVzdGl0dXRpb24iLCJzY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUNPLElBQU1BLGtCQUFiO0FBQUE7O0FBQUEsOEhBQ29DLEdBRHBDO0FBQUE7QUFJTyxTQUFTQyxVQUFULENBQXVCQyxNQUF2QixFQUFrQ0MsTUFBbEMsRUFBcUU7QUFDMUUsTUFBTUMsbUJBQW1CLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxNQUFaLEVBQW9CSSxHQUFwQixDQUF3QixVQUFDQyxHQUFEO0FBQUEsV0FBVTtBQUFFQSxTQUFHLEVBQUhBLEdBQUY7QUFBT0MsV0FBSyxFQUFFTixNQUFNLENBQUVLLEdBQUY7QUFBcEIsS0FBVjtBQUFBLEdBQXhCLENBQTVCO0FBQ0FKLHFCQUFtQixDQUFDTSxPQUFwQixDQUE0QixVQUFDQyxLQUFELEVBQVc7QUFBRVQsVUFBTSxDQUFDUyxLQUFLLENBQUNILEdBQVAsQ0FBTixHQUFvQkcsS0FBSyxDQUFDRixLQUExQjtBQUFpQyxHQUExRTtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTRyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBZ0RDLE1BQWhELEVBQXFFQyxXQUFyRSxFQUE2STtBQUNsSjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSxNQUFNQyxTQUFTLEdBQUdILEtBQUssQ0FBQ0ksSUFBTixHQUFhSCxNQUFNLENBQUNHLElBQXRDO0FBQ0EsTUFBTUMsYUFBYSxHQUFHO0FBQUVDLEtBQUMsRUFBRU4sS0FBSyxDQUFDSSxJQUFOLEdBQWFKLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxDQUFqQztBQUFvQ0UsS0FBQyxFQUFFUixLQUFLLENBQUNJLElBQU4sR0FBYUosS0FBSyxDQUFDTyxRQUFOLENBQWVDO0FBQW5FLEdBQXRCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHO0FBQUVILEtBQUMsRUFBRUwsTUFBTSxDQUFDRyxJQUFQLEdBQWNILE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkQsQ0FBbkM7QUFBc0NFLEtBQUMsRUFBRVAsTUFBTSxDQUFDRyxJQUFQLEdBQWNILE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkM7QUFBdkUsR0FBdEI7QUFDQSxTQUFPO0FBQ0xSLFNBQUssRUFBRSxJQUFJVSxrREFBSixDQUNKUixXQUFXLENBQUNTLHdCQUFaLEdBQXVDVixNQUFNLENBQUNHLElBQTlDLElBQXNESCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JELENBQWhCLEdBQW9CTixLQUFLLENBQUNPLFFBQU4sQ0FBZUQsQ0FBekYsSUFBOEZELGFBQWEsQ0FBQ0MsQ0FBNUcsR0FBZ0hHLGFBQWEsQ0FBQ0gsQ0FEMUgsRUFFSkosV0FBVyxDQUFDUyx3QkFBWixHQUF1Q1YsTUFBTSxDQUFDRyxJQUE5QyxJQUFzREgsTUFBTSxDQUFDTSxRQUFQLENBQWdCQyxDQUFoQixHQUFvQlIsS0FBSyxDQUFDTyxRQUFOLENBQWVDLENBQXpGLElBQThGSCxhQUFhLENBQUNHLENBQTVHLEdBQWdIQyxhQUFhLENBQUNELENBRjFILEVBR0xJLEtBSEssQ0FHQyxJQUFJVCxTQUhMLENBREY7QUFLTEYsVUFBTSxFQUFFLElBQUlTLGtEQUFKLENBQ0xSLFdBQVcsQ0FBQ1Msd0JBQVosR0FBdUNYLEtBQUssQ0FBQ0ksSUFBN0MsSUFBcURKLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxDQUFmLEdBQW1CTCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JELENBQXhGLElBQTZGRCxhQUFhLENBQUNDLENBQTNHLEdBQStHRyxhQUFhLENBQUNILENBRHhILEVBRUxKLFdBQVcsQ0FBQ1Msd0JBQVosR0FBdUNYLEtBQUssQ0FBQ0ksSUFBN0MsSUFBcURKLEtBQUssQ0FBQ08sUUFBTixDQUFlQyxDQUFmLEdBQW1CUCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JDLENBQXhGLElBQTZGSCxhQUFhLENBQUNHLENBQTNHLEdBQStHQyxhQUFhLENBQUNELENBRnhILEVBR05JLEtBSE0sQ0FHQSxJQUFJVCxTQUhKO0FBTEgsR0FBUDtBQVVEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY2NjI2MTk1YWExMzE0ZTUxZTgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJy4vdmVjdG9yMmQnXG5cbi8qKlxuICogU2V0IG9mIFJlcXVpcmVtZW50cyBmb3IgYSBQaHlzaWNzIEVudmlyb25tZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBQaHlzaWNzRW52aXJvbm1lbnQge1xuICBwdWJsaWMgY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uID0gMC44XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVXaXRoPFQ+KHRhcmdldDogVCwgc291cmNlOiB7IFtLIGluIGtleW9mIFRdPzogVFtLXSB9KSB7XG4gIGNvbnN0IHNvdXJjZU9iamVjdE1hcHBpbmcgPSBPYmplY3Qua2V5cyhzb3VyY2UpLm1hcCgoa2V5KSA9PiAoeyBrZXksIHZhbHVlOiBzb3VyY2VbKGtleSBhcyBrZXlvZiBUKV0gfSkpIGFzIEFycmF5PHsga2V5OiBrZXlvZiBULCB2YWx1ZTogVFtrZXlvZiBUXSB9PlxuICBzb3VyY2VPYmplY3RNYXBwaW5nLmZvckVhY2goKGVudHJ5KSA9PiB7IHRhcmdldFtlbnRyeS5rZXldID0gZW50cnkudmFsdWUgfSlcbn1cblxuLyoqXG4gKiBNaW5pbXVtIHJlcXVpcmVtZW50cyBvZiBhIGJvZHkgdG8gY2FsY3VsYXRlIHBoeXNpY3MgYmFzZWQgcHJvY2Vzc2VzXG4gKiAtIG9taXR0aW5nIGFjY2VsZXJhdGlvbiBmb3Igbm93XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGh5c2ljc0JvZHkge1xuICBwb3NpdGlvbjogVmVjdG9yMkQsXG4gIHZlbG9jaXR5OiBWZWN0b3IyRCxcbiAgbWFzczogbnVtYmVyXG59XG5cbi8qKlxuICogQ29tcHV0ZXMgYSBjb2xsaXNpb24gZm9yIHRoZSBlbnZpcm9ubWVudFxuICogZmlyc3QgLSB0aGUgcmVzdWx0aW5nIHZlbG9jaXR5IHZlY3RvciBmb3IgYm9keTFcbiAqIHNlY29uZCAtIHRoZSByZXN1bHRpbmcgdmVsb2NpdHkgdmVjdG9yIGZvciBib2R5MlxuICogQHBhcmFtIGZpcnN0IHRoZSBmaXJzdCBwaHlzaWNzIGJvZHkgXG4gKiBAcGFyYW0gc2Vjb25kIHRoZSBzZWNvbmQgcGh5c2ljcyBib2R5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlMkRDb2xsaXNpb24oZmlyc3Q6IFBoeXNpY3NCb2R5LCBzZWNvbmQ6IFBoeXNpY3NCb2R5LCBlbnZpcm9ubWVudDogUGh5c2ljc0Vudmlyb25tZW50KTogeyBmaXJzdDogVmVjdG9yMkQsIHNlY29uZDogVmVjdG9yMkQgfSB7XG4gIC8qKlxuICAgKiB2ID0gZmluYWwgdmVsb2NpdHkgdmVjdG9yXG4gICAqIHUgPSBpbml0aWFsIHZlbG9jdHkgdmVjdG9yXG4gICAqIG0gPSBtYXNzIG9mIGJvZHlcbiAgICogcCA9IG1vbWVudHVtIG9mIGJvZHlcbiAgICogQ3IgPSBjb2VmZmljaWVudCBvZiBSZXN0aXR1dGlvblxuICAgKiBcbiAgICogICAgICAgKENyKShtMikodTIgLSB1MSkgKyAobTEpKHYxKSArIChtMikodjIpICAgICAoQ3IpKG0yKSh1MiAtIHUxKSArIHAxICsgcDJcbiAgICogdjEgPSDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQgPSDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcbiAgICogICAgICAgICAgICAgICAgICAgICAgbTEgKyBtMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEgKyBtMlxuICAgKiBcbiAgICogICAgICAgKENyKShtMSkodTEgLSB1MikgKyAobTEpKHYxKSArIChtMikodjIpICAgICAgKENyKShtMSkodTEgLSB1MikgKyBwMSArIHAyXG4gICAqIHYyID0g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUID0gIOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlFxuICAgKiAgICAgICAgICAgICAgICAgICAgICBtMSArIG0yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMSArIG0yXG4gICAqL1xuICBjb25zdCBqb2ludE1hc3MgPSBmaXJzdC5tYXNzICsgc2Vjb25kLm1hc3NcbiAgY29uc3QgbW9tZW10dW1Cb2R5MSA9IHsgeDogZmlyc3QubWFzcyAqIGZpcnN0LnZlbG9jaXR5LngsIHk6IGZpcnN0Lm1hc3MgKiBmaXJzdC52ZWxvY2l0eS55IH1cbiAgY29uc3QgbW9tZW10dW1Cb2R5MiA9IHsgeDogc2Vjb25kLm1hc3MgKiBzZWNvbmQudmVsb2NpdHkueCwgeTogc2Vjb25kLm1hc3MgKiBzZWNvbmQudmVsb2NpdHkueSB9XG4gIHJldHVybiB7XG4gICAgZmlyc3Q6IG5ldyBWZWN0b3IyRChcbiAgICAgIChlbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gKiBzZWNvbmQubWFzcyAqIChzZWNvbmQudmVsb2NpdHkueCAtIGZpcnN0LnZlbG9jaXR5LngpICsgbW9tZW10dW1Cb2R5MS54ICsgbW9tZW10dW1Cb2R5Mi54KSxcbiAgICAgIChlbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gKiBzZWNvbmQubWFzcyAqIChzZWNvbmQudmVsb2NpdHkueSAtIGZpcnN0LnZlbG9jaXR5LnkpICsgbW9tZW10dW1Cb2R5MS55ICsgbW9tZW10dW1Cb2R5Mi55KVxuICAgICkuc2NhbGUoMSAvIGpvaW50TWFzcyksXG4gICAgc2Vjb25kOiBuZXcgVmVjdG9yMkQoXG4gICAgICAoZW52aXJvbm1lbnQuY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uICogZmlyc3QubWFzcyAqIChmaXJzdC52ZWxvY2l0eS54IC0gc2Vjb25kLnZlbG9jaXR5LngpICsgbW9tZW10dW1Cb2R5MS54ICsgbW9tZW10dW1Cb2R5Mi54KSxcbiAgICAgIChlbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gKiBmaXJzdC5tYXNzICogKGZpcnN0LnZlbG9jaXR5LnkgLSBzZWNvbmQudmVsb2NpdHkueSkgKyBtb21lbXR1bUJvZHkxLnkgKyBtb21lbXR1bUJvZHkyLnkpXG4gICAgKS5zY2FsZSgxIC8gam9pbnRNYXNzKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9