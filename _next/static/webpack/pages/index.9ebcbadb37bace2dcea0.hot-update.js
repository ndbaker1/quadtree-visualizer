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
  }); // .forEach((value) => { target[value[0]] = value[1] })
}

var a = new PhysicsEnvironment();
var b = new PhysicsEnvironment();
b.coefficientOfRestitution = 0.1;
updateWith(a, b);
updateWith(a, {
  coefficientOfRestitution: 0.4
});
updateWith(a, {});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcGh5c2ljcy50cyJdLCJuYW1lcyI6WyJQaHlzaWNzRW52aXJvbm1lbnQiLCJ2YXJzIiwiY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uIiwidW5kZWZpbmVkIiwidXBkYXRlV2l0aCIsInRhcmdldCIsInNvdXJjZSIsInNvdXJjZU9iamVjdE1hcHBpbmciLCJPYmplY3QiLCJrZXlzIiwibWFwIiwia2V5IiwidmFsdWUiLCJmb3JFYWNoIiwiZW50cnkiLCJhIiwiYiIsImNvbXB1dGUyRENvbGxpc2lvbiIsImZpcnN0Iiwic2Vjb25kIiwiZW52aXJvbm1lbnQiLCJqb2ludE1hc3MiLCJtYXNzIiwibW9tZW10dW1Cb2R5MSIsIngiLCJ2ZWxvY2l0eSIsInkiLCJtb21lbXR1bUJvZHkyIiwiVmVjdG9yMkQiLCJzY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxrQkFBYjtBQUFBO0FBQUE7O0FBQUEsZ0lBQ29DLEdBRHBDO0FBQUE7O0FBQUE7QUFBQTtBQUVFO0FBRkYsOEJBR21CQyxJQUhuQixFQUc4RztBQUMxRyxVQUFJQSxJQUFJLENBQUNDLHdCQUFMLEtBQWtDQyxTQUF0QyxFQUNFLEtBQUtELHdCQUFMLEdBQWdDRCxJQUFJLENBQUNDLHdCQUFyQztBQUNIO0FBTkg7O0FBQUE7QUFBQTs7QUFTQSxTQUFTRSxVQUFULENBQXVCQyxNQUF2QixFQUFrQ0MsTUFBbEMsRUFBcUU7QUFDbkUsTUFBTUMsbUJBQW1CLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZSCxNQUFaLEVBQW9CSSxHQUFwQixDQUF3QixVQUFDQyxHQUFEO0FBQUEsV0FBVTtBQUFFQSxTQUFHLEVBQUhBLEdBQUY7QUFBT0MsV0FBSyxFQUFFTixNQUFNLENBQUVLLEdBQUY7QUFBcEIsS0FBVjtBQUFBLEdBQXhCLENBQTVCO0FBQ0FKLHFCQUFtQixDQUFD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ZWJjYmFkYjM3YmFjZTJkY2VhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuL3ZlY3RvcjJkJ1xuXG4vKipcbiAqIFNldCBvZiBSZXF1aXJlbWVudHMgZm9yIGEgUGh5c2ljcyBFbnZpcm9ubWVudFxuICovXG5pbnRlcmZhY2UgUGh5c2ljc0Vudmlyb25tZW50VmFyaWFibGVzIHtcbiAgY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uOiBudW1iZXJcbn1cblxuLyoqXG4gKiBQaHlzaWNzIEVudmlyb25tZW50IGluc3RhbmNlXG4gKi9cbmV4cG9ydCBjbGFzcyBQaHlzaWNzRW52aXJvbm1lbnQgaW1wbGVtZW50cyBQaHlzaWNzRW52aXJvbm1lbnRWYXJpYWJsZXMge1xuICBwdWJsaWMgY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uID0gMC44XG4gIC8vIHVwZGF0ZXMgYW55IG9mIHRoZSByZXF1ZXN0ZWQgUGh5c2ljcyBFbnZpcm9ubWVudCBWYXJpYWJsZXNcbiAgcHVibGljIHVwZGF0ZVZhcih2YXJzOiB7IFtLIGluIGtleW9mIFBoeXNpY3NFbnZpcm9ubWVudFZhcmlhYmxlc10/OiBQaHlzaWNzRW52aXJvbm1lbnRWYXJpYWJsZXNbS10gfSk6IHZvaWQge1xuICAgIGlmICh2YXJzLmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiAhPT0gdW5kZWZpbmVkKVxuICAgICAgdGhpcy5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gPSB2YXJzLmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvblxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdpdGg8VD4odGFyZ2V0OiBULCBzb3VyY2U6IHsgW0sgaW4ga2V5b2YgVF0/OiBUW0tdIH0pIHtcbiAgY29uc3Qgc291cmNlT2JqZWN0TWFwcGluZyA9IE9iamVjdC5rZXlzKHNvdXJjZSkubWFwKChrZXkpID0+ICh7IGtleSwgdmFsdWU6IHNvdXJjZVsoa2V5IGFzIGtleW9mIFQpXSB9KSkgYXMgQXJyYXk8eyBrZXk6IGtleW9mIFQsIHZhbHVlOiBUW2tleW9mIFRdIH0+XG4gIHNvdXJjZU9iamVjdE1hcHBpbmcuZm9yRWFjaCgoZW50cnkpID0+IHsgdGFyZ2V0W2VudHJ5LmtleV0gPSBlbnRyeS52YWx1ZSB9KVxuICAvLyAuZm9yRWFjaCgodmFsdWUpID0+IHsgdGFyZ2V0W3ZhbHVlWzBdXSA9IHZhbHVlWzFdIH0pXG59XG5cbmNvbnN0IGEgPSBuZXcgUGh5c2ljc0Vudmlyb25tZW50XG5jb25zdCBiID0gbmV3IFBoeXNpY3NFbnZpcm9ubWVudFxuYi5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gPSAwLjFcbnVwZGF0ZVdpdGgoYSwgYilcbnVwZGF0ZVdpdGgoYSwgeyBjb2VmZmljaWVudE9mUmVzdGl0dXRpb246IDAuNCB9KVxudXBkYXRlV2l0aChhLCB7fSlcblxuLyoqXG4gKiBNaW5pbXVtIHJlcXVpcmVtZW50cyBvZiBhIGJvZHkgdG8gY2FsY3VsYXRlIHBoeXNpY3MgYmFzZWQgcHJvY2Vzc2VzXG4gKiAtIG9taXR0aW5nIGFjY2VsZXJhdGlvbiBmb3Igbm93XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUGh5c2ljc0JvZHkge1xuICBwb3NpdGlvbjogVmVjdG9yMkQsXG4gIHZlbG9jaXR5OiBWZWN0b3IyRCxcbiAgbWFzczogbnVtYmVyXG59XG5cbi8qKlxuICogQ29tcHV0ZXMgYSBjb2xsaXNpb24gZm9yIHRoZSBlbnZpcm9ubWVudFxuICogZmlyc3QgLSB0aGUgcmVzdWx0aW5nIHZlbG9jaXR5IHZlY3RvciBmb3IgYm9keTFcbiAqIHNlY29uZCAtIHRoZSByZXN1bHRpbmcgdmVsb2NpdHkgdmVjdG9yIGZvciBib2R5MlxuICogQHBhcmFtIGZpcnN0IHRoZSBmaXJzdCBwaHlzaWNzIGJvZHkgXG4gKiBAcGFyYW0gc2Vjb25kIHRoZSBzZWNvbmQgcGh5c2ljcyBib2R5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlMkRDb2xsaXNpb24oZmlyc3Q6IFBoeXNpY3NCb2R5LCBzZWNvbmQ6IFBoeXNpY3NCb2R5LCBlbnZpcm9ubWVudDogUGh5c2ljc0Vudmlyb25tZW50KTogeyBmaXJzdDogVmVjdG9yMkQsIHNlY29uZDogVmVjdG9yMkQgfSB7XG4gIC8qKlxuICAgKiB2ID0gZmluYWwgdmVsb2NpdHkgdmVjdG9yXG4gICAqIHUgPSBpbml0aWFsIHZlbG9jdHkgdmVjdG9yXG4gICAqIG0gPSBtYXNzIG9mIGJvZHlcbiAgICogcCA9IG1vbWVudHVtIG9mIGJvZHlcbiAgICogQ3IgPSBjb2VmZmljaWVudCBvZiBSZXN0aXR1dGlvblxuICAgKiBcbiAgICogICAgICAgKENyKShtMikodTIgLSB1MSkgKyAobTEpKHYxKSArIChtMikodjIpICAgICAoQ3IpKG0yKSh1MiAtIHUxKSArIHAxICsgcDJcbiAgICogdjEgPSDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQgPSDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcbiAgICogICAgICAgICAgICAgICAgICAgICAgbTEgKyBtMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEgKyBtMlxuICAgKiBcbiAgICogICAgICAgKENyKShtMSkodTEgLSB1MikgKyAobTEpKHYxKSArIChtMikodjIpICAgICAgKENyKShtMSkodTEgLSB1MikgKyBwMSArIHAyXG4gICAqIHYyID0g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUID0gIOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlFxuICAgKiAgICAgICAgICAgICAgICAgICAgICBtMSArIG0yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMSArIG0yXG4gICAqL1xuICBjb25zdCBqb2ludE1hc3MgPSBmaXJzdC5tYXNzICsgc2Vjb25kLm1hc3NcbiAgY29uc3QgbW9tZW10dW1Cb2R5MSA9IHsgeDogZmlyc3QubWFzcyAqIGZpcnN0LnZlbG9jaXR5LngsIHk6IGZpcnN0Lm1hc3MgKiBmaXJzdC52ZWxvY2l0eS55IH1cbiAgY29uc3QgbW9tZW10dW1Cb2R5MiA9IHsgeDogc2Vjb25kLm1hc3MgKiBzZWNvbmQudmVsb2NpdHkueCwgeTogc2Vjb25kLm1hc3MgKiBzZWNvbmQudmVsb2NpdHkueSB9XG4gIHJldHVybiB7XG4gICAgZmlyc3Q6IG5ldyBWZWN0b3IyRChcbiAgICAgIChlbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gKiBzZWNvbmQubWFzcyAqIChzZWNvbmQudmVsb2NpdHkueCAtIGZpcnN0LnZlbG9jaXR5LngpICsgbW9tZW10dW1Cb2R5MS54ICsgbW9tZW10dW1Cb2R5Mi54KSxcbiAgICAgIChlbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gKiBzZWNvbmQubWFzcyAqIChzZWNvbmQudmVsb2NpdHkueSAtIGZpcnN0LnZlbG9jaXR5LnkpICsgbW9tZW10dW1Cb2R5MS55ICsgbW9tZW10dW1Cb2R5Mi55KVxuICAgICkuc2NhbGUoMSAvIGpvaW50TWFzcyksXG4gICAgc2Vjb25kOiBuZXcgVmVjdG9yMkQoXG4gICAgICAoZW52aXJvbm1lbnQuY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uICogZmlyc3QubWFzcyAqIChmaXJzdC52ZWxvY2l0eS54IC0gc2Vjb25kLnZlbG9jaXR5LngpICsgbW9tZW10dW1Cb2R5MS54ICsgbW9tZW10dW1Cb2R5Mi54KSxcbiAgICAgIChlbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gKiBmaXJzdC5tYXNzICogKGZpcnN0LnZlbG9jaXR5LnkgLSBzZWNvbmQudmVsb2NpdHkueSkgKyBtb21lbXR1bUJvZHkxLnkgKyBtb21lbXR1bUJvZHkyLnkpXG4gICAgKS5zY2FsZSgxIC8gam9pbnRNYXNzKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9