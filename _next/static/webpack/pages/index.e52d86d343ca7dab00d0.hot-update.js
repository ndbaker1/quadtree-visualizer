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
  Object.entries(source).forEach(function (value) {
    target[value[0]] = value[1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcGh5c2ljcy50cyJdLCJuYW1lcyI6WyJQaHlzaWNzRW52aXJvbm1lbnQiLCJ2YXJzIiwiY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uIiwidW5kZWZpbmVkIiwidXBkYXRlV2l0aCIsInRhcmdldCIsInNvdXJjZSIsIk9iamVjdCIsImVudHJpZXMiLCJmb3JFYWNoIiwidmFsdWUiLCJhIiwiYiIsImNvbXB1dGUyRENvbGxpc2lvbiIsImZpcnN0Iiwic2Vjb25kIiwiZW52aXJvbm1lbnQiLCJqb2ludE1hc3MiLCJtYXNzIiwibW9tZW10dW1Cb2R5MSIsIngiLCJ2ZWxvY2l0eSIsInkiLCJtb21lbXR1bUJvZHkyIiwiVmVjdG9yMkQiLCJzY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxrQkFBYjtBQUFBO0FBQUE7O0FBQUEsZ0lBQ29DLEdBRHBDO0FBQUE7O0FBQUE7QUFBQTtBQUVFO0FBRkYsOEJBR21CQyxJQUhuQixFQUc4RztBQUMxRyxVQUFJQSxJQUFJLENBQUNDLHdCQUFMLEtBQWtDQyxTQUF0QyxFQUNFLEtBQUtELHdCQUFMLEdBQWdDRCxJQUFJLENBQUNDLHdCQUFyQztBQUNIO0FBTkg7O0FBQUE7QUFBQTs7QUFTQSxTQUFTRSxVQUFULENBQXVCQyxNQUF2QixFQUF5REMsTUFBekQsRUFBNEY7QUFDekZDLFFBQU0sQ0FBQ0MsT0FBUCxDQUFlRixNQUFmLENBQUQsQ0FBaURHLE9BQWpELENBQXlELFVBQUNDLEtBQUQsRUFBVztBQUFFTCxVQUFNLENBQUNLLEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBTixHQUFtQkEsS0FBSyxDQUFDLENBQUQsQ0FBeEI7QUFBNkIsR0FBbkc7QUFDRDs7QUFFRCxJQUFNQyxDQUFDLEdBQUcsSUFBSVgsa0JBQUosRUFBVjtBQUNBLElBQU1ZLENBQUMsR0FBRyxJQUFJWixrQkFBSixFQUFWO0FBQ0FZLENBQUMsQ0FBQ1Ysd0JBQUYsR0FBNkIsR0FBN0I7QUFDQUUsVUFBVSxDQUFDTyxDQUFELEVBQUlDLENBQUosQ0FBVjtBQUNBUixVQUFVLENBQUNPLENBQUQsRUFBSTtBQUFFVCwwQkFBd0IsRUFBRTtBQUE1QixDQUFKLENBQVY7QUFDQUUsVUFBVSxDQUFDTyxDQUFELEVBQUksRUFBSixDQUFWO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTRSxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBZ0RDLE1BQWhELEVBQXFFQyxXQUFyRSxFQUE2STtBQUNsSjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSxNQUFNQyxTQUFTLEdBQUdILEtBQUssQ0FBQ0ksSUFBTixHQUFhSCxNQUFNLENBQUNHLElBQXRDO0FBQ0EsTUFBTUMsYUFBYSxHQUFHO0FBQUVDLEtBQUMsRUFBRU4sS0FBSyxDQUFDSSxJQUFOLEdBQWFKLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxDQUFqQztBQUFvQ0UsS0FBQyxFQUFFUixLQUFLLENBQUNJLElBQU4sR0FBYUosS0FBSyxDQUFDTyxRQUFOLENBQWVDO0FBQW5FLEdBQXRCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHO0FBQUVILEtBQUMsRUFBRUwsTUFBTSxDQUFDRyxJQUFQLEdBQWNILE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkQsQ0FBbkM7QUFBc0NFLEtBQUMsRUFBRVAsTUFBTSxDQUFDRyxJQUFQLEdBQWNILE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkM7QUFBdkUsR0FBdEI7QUFDQSxTQUFPO0FBQ0xSLFNBQUssRUFBRSxJQUFJVSxrREFBSixDQUNKUixXQUFXLENBQUNkLHdCQUFaLEdBQXVDYSxNQUFNLENBQUNHLElBQTlDLElBQXNESCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JELENBQWhCLEdBQW9CTixLQUFLLENBQUNPLFFBQU4sQ0FBZUQsQ0FBekYsSUFBOEZELGFBQWEsQ0FBQ0MsQ0FBNUcsR0FBZ0hHLGFBQWEsQ0FBQ0gsQ0FEMUgsRUFFSkosV0FBVyxDQUFDZCx3QkFBWixHQUF1Q2EsTUFBTSxDQUFDRyxJQUE5QyxJQUFzREgsTUFBTSxDQUFDTSxRQUFQLENBQWdCQyxDQUFoQixHQUFvQlIsS0FBSyxDQUFDTyxRQUFOLENBQWVDLENBQXpGLElBQThGSCxhQUFhLENBQUNHLENBQTVHLEdBQWdIQyxhQUFhLENBQUNELENBRjFILEVBR0xHLEtBSEssQ0FHQyxJQUFJUixTQUhMLENBREY7QUFLTEYsVUFBTSxFQUFFLElBQUlTLGtEQUFKLENBQ0xSLFdBQVcsQ0FBQ2Qsd0JBQVosR0FBdUNZLEtBQUssQ0FBQ0ksSUFBN0MsSUFBcURKLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxDQUFmLEdBQW1CTCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JELENBQXhGLElBQTZGRCxhQUFhLENBQUNDLENBQTNHLEdBQStHRyxhQUFhLENBQUNILENBRHhILEVBRUxKLFdBQVcsQ0FBQ2Qsd0JBQVosR0FBdUNZLEtBQUssQ0FBQ0ksSUFBN0MsSUFBcURKLEtBQUssQ0FBQ08sUUFBTixDQUFlQyxDQUFmLEdBQW1CUCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JDLENBQXhGLElBQTZGSCxhQUFhLENBQUNHLENBQTNHLEdBQStHQyxhQUFhLENBQUNELENBRnhILEVBR05HLEtBSE0sQ0FHQSxJQUFJUixTQUhKO0FBTEgsR0FBUDtBQVVEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU1MmQ4NmQzNDNjYTdkYWIwMGQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJy4vdmVjdG9yMmQnXG5cbi8qKlxuICogU2V0IG9mIFJlcXVpcmVtZW50cyBmb3IgYSBQaHlzaWNzIEVudmlyb25tZW50XG4gKi9cbmludGVyZmFjZSBQaHlzaWNzRW52aXJvbm1lbnRWYXJpYWJsZXMge1xuICBjb2VmZmljaWVudE9mUmVzdGl0dXRpb246IG51bWJlclxufVxuXG4vKipcbiAqIFBoeXNpY3MgRW52aXJvbm1lbnQgaW5zdGFuY2VcbiAqL1xuZXhwb3J0IGNsYXNzIFBoeXNpY3NFbnZpcm9ubWVudCBpbXBsZW1lbnRzIFBoeXNpY3NFbnZpcm9ubWVudFZhcmlhYmxlcyB7XG4gIHB1YmxpYyBjb2VmZmljaWVudE9mUmVzdGl0dXRpb24gPSAwLjhcbiAgLy8gdXBkYXRlcyBhbnkgb2YgdGhlIHJlcXVlc3RlZCBQaHlzaWNzIEVudmlyb25tZW50IFZhcmlhYmxlc1xuICBwdWJsaWMgdXBkYXRlVmFyKHZhcnM6IHsgW0sgaW4ga2V5b2YgUGh5c2ljc0Vudmlyb25tZW50VmFyaWFibGVzXT86IFBoeXNpY3NFbnZpcm9ubWVudFZhcmlhYmxlc1tLXSB9KTogdm9pZCB7XG4gICAgaWYgKHZhcnMuY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uICE9PSB1bmRlZmluZWQpXG4gICAgICB0aGlzLmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiA9IHZhcnMuY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uXG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlV2l0aDxUPih0YXJnZXQ6IHsgW0sgaW4ga2V5b2YgVF06IFRbS10gfSwgc291cmNlOiB7IFtLIGluIGtleW9mIFRdPzogVFtLXSB9KSB7XG4gIChPYmplY3QuZW50cmllcyhzb3VyY2UpIGFzIFtzdHJpbmcsIFRba2V5b2YgVF1dKS5mb3JFYWNoKCh2YWx1ZSkgPT4geyB0YXJnZXRbdmFsdWVbMF1dID0gdmFsdWVbMV0gfSlcbn1cblxuY29uc3QgYSA9IG5ldyBQaHlzaWNzRW52aXJvbm1lbnRcbmNvbnN0IGIgPSBuZXcgUGh5c2ljc0Vudmlyb25tZW50XG5iLmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiA9IDAuMVxudXBkYXRlV2l0aChhLCBiKVxudXBkYXRlV2l0aChhLCB7IGNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbjogMC40IH0pXG51cGRhdGVXaXRoKGEsIHt9KVxuXG4vKipcbiAqIE1pbmltdW0gcmVxdWlyZW1lbnRzIG9mIGEgYm9keSB0byBjYWxjdWxhdGUgcGh5c2ljcyBiYXNlZCBwcm9jZXNzZXNcbiAqIC0gb21pdHRpbmcgYWNjZWxlcmF0aW9uIGZvciBub3dcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQaHlzaWNzQm9keSB7XG4gIHBvc2l0aW9uOiBWZWN0b3IyRCxcbiAgdmVsb2NpdHk6IFZlY3RvcjJELFxuICBtYXNzOiBudW1iZXJcbn1cblxuLyoqXG4gKiBDb21wdXRlcyBhIGNvbGxpc2lvbiBmb3IgdGhlIGVudmlyb25tZW50XG4gKiBmaXJzdCAtIHRoZSByZXN1bHRpbmcgdmVsb2NpdHkgdmVjdG9yIGZvciBib2R5MVxuICogc2Vjb25kIC0gdGhlIHJlc3VsdGluZyB2ZWxvY2l0eSB2ZWN0b3IgZm9yIGJvZHkyXG4gKiBAcGFyYW0gZmlyc3QgdGhlIGZpcnN0IHBoeXNpY3MgYm9keSBcbiAqIEBwYXJhbSBzZWNvbmQgdGhlIHNlY29uZCBwaHlzaWNzIGJvZHlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGUyRENvbGxpc2lvbihmaXJzdDogUGh5c2ljc0JvZHksIHNlY29uZDogUGh5c2ljc0JvZHksIGVudmlyb25tZW50OiBQaHlzaWNzRW52aXJvbm1lbnQpOiB7IGZpcnN0OiBWZWN0b3IyRCwgc2Vjb25kOiBWZWN0b3IyRCB9IHtcbiAgLyoqXG4gICAqIHYgPSBmaW5hbCB2ZWxvY2l0eSB2ZWN0b3JcbiAgICogdSA9IGluaXRpYWwgdmVsb2N0eSB2ZWN0b3JcbiAgICogbSA9IG1hc3Mgb2YgYm9keVxuICAgKiBwID0gbW9tZW50dW0gb2YgYm9keVxuICAgKiBDciA9IGNvZWZmaWNpZW50IG9mIFJlc3RpdHV0aW9uXG4gICAqIFxuICAgKiAgICAgICAoQ3IpKG0yKSh1MiAtIHUxKSArIChtMSkodjEpICsgKG0yKSh2MikgICAgIChDcikobTIpKHUyIC0gdTEpICsgcDEgKyBwMlxuICAgKiB2MSA9IOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCA9IOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlFxuICAgKiAgICAgICAgICAgICAgICAgICAgICBtMSArIG0yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMSArIG0yXG4gICAqIFxuICAgKiAgICAgICAoQ3IpKG0xKSh1MSAtIHUyKSArIChtMSkodjEpICsgKG0yKSh2MikgICAgICAoQ3IpKG0xKSh1MSAtIHUyKSArIHAxICsgcDJcbiAgICogdjIgPSDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQgPSAg4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG4gICAqICAgICAgICAgICAgICAgICAgICAgIG0xICsgbTIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xICsgbTJcbiAgICovXG4gIGNvbnN0IGpvaW50TWFzcyA9IGZpcnN0Lm1hc3MgKyBzZWNvbmQubWFzc1xuICBjb25zdCBtb21lbXR1bUJvZHkxID0geyB4OiBmaXJzdC5tYXNzICogZmlyc3QudmVsb2NpdHkueCwgeTogZmlyc3QubWFzcyAqIGZpcnN0LnZlbG9jaXR5LnkgfVxuICBjb25zdCBtb21lbXR1bUJvZHkyID0geyB4OiBzZWNvbmQubWFzcyAqIHNlY29uZC52ZWxvY2l0eS54LCB5OiBzZWNvbmQubWFzcyAqIHNlY29uZC52ZWxvY2l0eS55IH1cbiAgcmV0dXJuIHtcbiAgICBmaXJzdDogbmV3IFZlY3RvcjJEKFxuICAgICAgKGVudmlyb25tZW50LmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiAqIHNlY29uZC5tYXNzICogKHNlY29uZC52ZWxvY2l0eS54IC0gZmlyc3QudmVsb2NpdHkueCkgKyBtb21lbXR1bUJvZHkxLnggKyBtb21lbXR1bUJvZHkyLngpLFxuICAgICAgKGVudmlyb25tZW50LmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiAqIHNlY29uZC5tYXNzICogKHNlY29uZC52ZWxvY2l0eS55IC0gZmlyc3QudmVsb2NpdHkueSkgKyBtb21lbXR1bUJvZHkxLnkgKyBtb21lbXR1bUJvZHkyLnkpXG4gICAgKS5zY2FsZSgxIC8gam9pbnRNYXNzKSxcbiAgICBzZWNvbmQ6IG5ldyBWZWN0b3IyRChcbiAgICAgIChlbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gKiBmaXJzdC5tYXNzICogKGZpcnN0LnZlbG9jaXR5LnggLSBzZWNvbmQudmVsb2NpdHkueCkgKyBtb21lbXR1bUJvZHkxLnggKyBtb21lbXR1bUJvZHkyLngpLFxuICAgICAgKGVudmlyb25tZW50LmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiAqIGZpcnN0Lm1hc3MgKiAoZmlyc3QudmVsb2NpdHkueSAtIHNlY29uZC52ZWxvY2l0eS55KSArIG1vbWVtdHVtQm9keTEueSArIG1vbWVtdHVtQm9keTIueSlcbiAgICApLnNjYWxlKDEgLyBqb2ludE1hc3MpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=