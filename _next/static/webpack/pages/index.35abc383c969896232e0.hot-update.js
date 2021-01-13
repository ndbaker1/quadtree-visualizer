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




/**
 * Set of Requirements for a Physics Environment
 */

/**
 * Physics Environment instance
 */
var PhysicsEnvironment = /*#__PURE__*/function () {
  function PhysicsEnvironment() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PhysicsEnvironment);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "coefficientOfRestitution", 0.8);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PhysicsEnvironment, [{
    key: "updateVar",
    // updates any of the requested Physics Environment Variables
    value: function updateVar(vars) {
      if (vars.coefficientOfRestitution !== undefined) this.coefficientOfRestitution = vars.coefficientOfRestitution;
    }
  }]);

  return PhysicsEnvironment;
}();

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

var a = new PhysicsEnvironment();
var b = new PhysicsEnvironment();
b.coefficientOfRestitution = 0.1;
updateWith(a, b);
updateWith(a, {
  coefficientOfRestitution: 0.4
});
updateWith(a, {});
console.log(a);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcGh5c2ljcy50cyJdLCJuYW1lcyI6WyJQaHlzaWNzRW52aXJvbm1lbnQiLCJ2YXJzIiwiY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uIiwidW5kZWZpbmVkIiwidXBkYXRlV2l0aCIsInRhcmdldCIsInNvdXJjZSIsInNvdXJjZU9iamVjdE1hcHBpbmciLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwidmFsdWUiLCJmb3JFYWNoIiwiZW50cnkiLCJhIiwiYiIsImNvbnNvbGUiLCJsb2ciLCJjb21wdXRlMkRDb2xsaXNpb24iLCJmaXJzdCIsInNlY29uZCIsImVudmlyb25tZW50Iiwiam9pbnRNYXNzIiwibWFzcyIsIm1vbWVtdHVtQm9keTEiLCJ4IiwidmVsb2NpdHkiLCJ5IiwibW9tZW10dW1Cb2R5MiIsIlZlY3RvcjJEIiwic2NhbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBS0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsa0JBQWI7QUFBQTtBQUFBOztBQUFBLGdJQUNvQyxHQURwQztBQUFBOztBQUFBO0FBQUE7QUFFRTtBQUZGLDhCQUdtQkMsSUFIbkIsRUFHOEc7QUFDMUcsVUFBSUEsSUFBSSxDQUFDQyx3QkFBTCxLQUFrQ0MsU0FBdEMsRUFDRSxLQUFLRCx3QkFBTCxHQUFnQ0QsSUFBSSxDQUFDQyx3QkFBckM7QUFDSDtBQU5IOztBQUFBO0FBQUE7O0FBU0EsU0FBU0UsVUFBVCxDQUF1QkMsTUFBdkIsRUFBa0NDLE1BQWxDLEVBQXFFO0FBQ25FLE1BQU1DLG1CQUFtQixHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBWUgsTUFBWixFQUFvQkksR0FBcEIsQ0FBd0IsVUFBQ0MsR0FBRDtBQUFBLFdBQVU7QUFBRUEsU0FBRyxFQUFIQSxHQUFGO0FBQU9DLFdBQUssRUFBRU4sTUFBTSxDQUFFSyxHQUFGO0FBQXBCLEtBQVY7QUFBQSxHQUF4QixDQUE1QjtB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LCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzVhYmMzODNjOTY5ODk2MjMyZTAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi92ZWN0b3IyZCdcblxuLyoqXG4gKiBTZXQgb2YgUmVxdWlyZW1lbnRzIGZvciBhIFBoeXNpY3MgRW52aXJvbm1lbnRcbiAqL1xuaW50ZXJmYWNlIFBoeXNpY3NFbnZpcm9ubWVudFZhcmlhYmxlcyB7XG4gIGNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbjogbnVtYmVyXG59XG5cbi8qKlxuICogUGh5c2ljcyBFbnZpcm9ubWVudCBpbnN0YW5jZVxuICovXG5leHBvcnQgY2xhc3MgUGh5c2ljc0Vudmlyb25tZW50IGltcGxlbWVudHMgUGh5c2ljc0Vudmlyb25tZW50VmFyaWFibGVzIHtcbiAgcHVibGljIGNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiA9IDAuOFxuICAvLyB1cGRhdGVzIGFueSBvZiB0aGUgcmVxdWVzdGVkIFBoeXNpY3MgRW52aXJvbm1lbnQgVmFyaWFibGVzXG4gIHB1YmxpYyB1cGRhdGVWYXIodmFyczogeyBbSyBpbiBrZXlvZiBQaHlzaWNzRW52aXJvbm1lbnRWYXJpYWJsZXNdPzogUGh5c2ljc0Vudmlyb25tZW50VmFyaWFibGVzW0tdIH0pOiB2b2lkIHtcbiAgICBpZiAodmFycy5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gIT09IHVuZGVmaW5lZClcbiAgICAgIHRoaXMuY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uID0gdmFycy5jb2VmZmljaWVudE9mUmVzdGl0dXRpb25cbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVXaXRoPFQ+KHRhcmdldDogVCwgc291cmNlOiB7IFtLIGluIGtleW9mIFRdPzogVFtLXSB9KSB7XG4gIGNvbnN0IHNvdXJjZU9iamVjdE1hcHBpbmcgPSBPYmplY3Qua2V5cyhzb3VyY2UpLm1hcCgoa2V5KSA9PiAoeyBrZXksIHZhbHVlOiBzb3VyY2VbKGtleSBhcyBrZXlvZiBUKV0gfSkpIGFzIEFycmF5PHsga2V5OiBrZXlvZiBULCB2YWx1ZTogVFtrZXlvZiBUXSB9PlxuICBzb3VyY2VPYmplY3RNYXBwaW5nLmZvckVhY2goKGVudHJ5KSA9PiB7IHRhcmdldFtlbnRyeS5rZXldID0gZW50cnkudmFsdWUgfSlcbn1cblxuY29uc3QgYSA9IG5ldyBQaHlzaWNzRW52aXJvbm1lbnRcbmNvbnN0IGIgPSBuZXcgUGh5c2ljc0Vudmlyb25tZW50XG5iLmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiA9IDAuMVxudXBkYXRlV2l0aChhLCBiKVxudXBkYXRlV2l0aChhLCB7IGNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbjogMC40IH0pXG51cGRhdGVXaXRoKGEsIHt9KVxuY29uc29sZS5sb2coYSlcblxuLyoqXG4gKiBNaW5pbXVtIHJlcXVpcmVtZW50cyBvZiBhIGJvZHkgdG8gY2FsY3VsYXRlIHBoeXNpY3MgYmFzZWQgcHJvY2Vzc2VzXG4gKiAtIG9taXR0aW5nIGFjY2VsZXJhdGlvbiBmb3Igbm93XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGh5c2ljc0JvZHkge1xuICBwb3NpdGlvbjogVmVjdG9yMkQsXG4gIHZlbG9jaXR5OiBWZWN0b3IyRCxcbiAgbWFzczogbnVtYmVyXG59XG5cbi8qKlxuICogQ29tcHV0ZXMgYSBjb2xsaXNpb24gZm9yIHRoZSBlbnZpcm9ubWVudFxuICogZmlyc3QgLSB0aGUgcmVzdWx0aW5nIHZlbG9jaXR5IHZlY3RvciBmb3IgYm9keTFcbiAqIHNlY29uZCAtIHRoZSByZXN1bHRpbmcgdmVsb2NpdHkgdmVjdG9yIGZvciBib2R5MlxuICogQHBhcmFtIGZpcnN0IHRoZSBmaXJzdCBwaHlzaWNzIGJvZHkgXG4gKiBAcGFyYW0gc2Vjb25kIHRoZSBzZWNvbmQgcGh5c2ljcyBib2R5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlMkRDb2xsaXNpb24oZmlyc3Q6IFBoeXNpY3NCb2R5LCBzZWNvbmQ6IFBoeXNpY3NCb2R5LCBlbnZpcm9ubWVudDogUGh5c2ljc0Vudmlyb25tZW50KTogeyBmaXJzdDogVmVjdG9yMkQsIHNlY29uZDogVmVjdG9yMkQgfSB7XG4gIC8qKlxuICAgKiB2ID0gZmluYWwgdmVsb2NpdHkgdmVjdG9yXG4gICAqIHUgPSBpbml0aWFsIHZlbG9jdHkgdmVjdG9yXG4gICAqIG0gPSBtYXNzIG9mIGJvZHlcbiAgICogcCA9IG1vbWVudHVtIG9mIGJvZHlcbiAgICogQ3IgPSBjb2VmZmljaWVudCBvZiBSZXN0aXR1dGlvblxuICAgKiBcbiAgICogICAgICAgKENyKShtMikodTIgLSB1MSkgKyAobTEpKHYxKSArIChtMikodjIpICAgICAoQ3IpKG0yKSh1MiAtIHUxKSArIHAxICsgcDJcbiAgICogdjEgPSDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQgPSDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcbiAgICogICAgICAgICAgICAgICAgICAgICAgbTEgKyBtMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEgKyBtMlxuICAgKiBcbiAgICogICAgICAgKENyKShtMSkodTEgLSB1MikgKyAobTEpKHYxKSArIChtMikodjIpICAgICAgKENyKShtMSkodTEgLSB1MikgKyBwMSArIHAyXG4gICAqIHYyID0g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUID0gIOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlFxuICAgKiAgICAgICAgICAgICAgICAgICAgICBtMSArIG0yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMSArIG0yXG4gICAqL1xuICBjb25zdCBqb2ludE1hc3MgPSBmaXJzdC5tYXNzICsgc2Vjb25kLm1hc3NcbiAgY29uc3QgbW9tZW10dW1Cb2R5MSA9IHsgeDogZmlyc3QubWFzcyAqIGZpcnN0LnZlbG9jaXR5LngsIHk6IGZpcnN0Lm1hc3MgKiBmaXJzdC52ZWxvY2l0eS55IH1cbiAgY29uc3QgbW9tZW10dW1Cb2R5MiA9IHsgeDogc2Vjb25kLm1hc3MgKiBzZWNvbmQudmVsb2NpdHkueCwgeTogc2Vjb25kLm1hc3MgKiBzZWNvbmQudmVsb2NpdHkueSB9XG4gIHJldHVybiB7XG4gICAgZmlyc3Q6IG5ldyBWZWN0b3IyRChcbiAgICAgIChlbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gKiBzZWNvbmQubWFzcyAqIChzZWNvbmQudmVsb2NpdHkueCAtIGZpcnN0LnZlbG9jaXR5LngpICsgbW9tZW10dW1Cb2R5MS54ICsgbW9tZW10dW1Cb2R5Mi54KSxcbiAgICAgIChlbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gKiBzZWNvbmQubWFzcyAqIChzZWNvbmQudmVsb2NpdHkueSAtIGZpcnN0LnZlbG9jaXR5LnkpICsgbW9tZW10dW1Cb2R5MS55ICsgbW9tZW10dW1Cb2R5Mi55KVxuICAgICkuc2NhbGUoMSAvIGpvaW50TWFzcyksXG4gICAgc2Vjb25kOiBuZXcgVmVjdG9yMkQoXG4gICAgICAoZW52aXJvbm1lbnQuY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uICogZmlyc3QubWFzcyAqIChmaXJzdC52ZWxvY2l0eS54IC0gc2Vjb25kLnZlbG9jaXR5LngpICsgbW9tZW10dW1Cb2R5MS54ICsgbW9tZW10dW1Cb2R5Mi54KSxcbiAgICAgIChlbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gKiBmaXJzdC5tYXNzICogKGZpcnN0LnZlbG9jaXR5LnkgLSBzZWNvbmQudmVsb2NpdHkueSkgKyBtb21lbXR1bUJvZHkxLnkgKyBtb21lbXR1bUJvZHkyLnkpXG4gICAgKS5zY2FsZSgxIC8gam9pbnRNYXNzKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9