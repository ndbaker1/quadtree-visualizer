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

var PhysicsEnvironment = function PhysicsEnvironment() {
  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PhysicsEnvironment);

  Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "coefficientOfRestitution", 0.8);
};
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
function compute2DCollision(first, second, environment, unitNormalofCollision) {
  /* 1D Collision
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
  // used in all computations
  var jointMass = first.mass + second.mass; // unit vectors of critical axis

  var unitNormalVec = unitNormalofCollision || first.position.vectorTo(second.position).normalized();
  var unitTangentVec = new _vector2d__WEBPACK_IMPORTED_MODULE_2__["Vector2D"](-unitNormalVec.y, unitNormalVec.x); // going to calculate collisions in the normal plane (apply normal 1D collision algo)

  var firstNormalVel = first.velocity.dot(unitNormalVec);
  var secondNormalVel = second.velocity.dot(unitNormalVec); // p_total = m_1 * v_1 + m_2 * v_2 

  var totalNormalMomentum = first.mass * firstNormalVel + second.mass * secondNormalVel; // v1_norm = v1 * unit_norm

  var firstNormalVec = unitNormalVec.scale((environment.coefficientOfRestitution * second.mass * (secondNormalVel - firstNormalVel) + totalNormalMomentum) / jointMass); // v2_norm = v2 * unit_norm

  var secondNormalVec = unitNormalVec.scale((environment.coefficientOfRestitution * first.mass * (firstNormalVel - secondNormalVel) + totalNormalMomentum) / jointMass); // tangent plane components stay the same, just in the tangent plane
  // v_tangent = v * unit_tangent

  var firstTangentVec = unitTangentVec.scale(first.velocity.dot(unitTangentVec));
  var secondTangentVec = unitTangentVec.scale(second.velocity.dot(unitTangentVec)); // return composition of normal and tangent components
  // vec = vec_norm + vec_tangent

  return {
    first: firstNormalVec.plus(firstTangentVec),
    second: secondNormalVec.plus(secondTangentVec)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcGh5c2ljcy50cyJdLCJuYW1lcyI6WyJQaHlzaWNzRW52aXJvbm1lbnQiLCJjb21wdXRlMkRDb2xsaXNpb24iLCJmaXJzdCIsInNlY29uZCIsImVudmlyb25tZW50IiwidW5pdE5vcm1hbG9mQ29sbGlzaW9uIiwiam9pbnRNYXNzIiwibWFzcyIsInVuaXROb3JtYWxWZWMiLCJwb3NpdGlvbiIsInZlY3RvclRvIiwibm9ybWFsaXplZCIsInVuaXRUYW5nZW50VmVjIiwiVmVjdG9yMkQiLCJ5IiwieCIsImZpcnN0Tm9ybWFsVmVsIiwidmVsb2NpdHkiLCJkb3QiLCJzZWNvbmROb3JtYWxWZWwiLCJ0b3RhbE5vcm1hbE1vbWVudHVtIiwiZmlyc3ROb3JtYWxWZWMiLCJzY2FsZSIsImNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiIsInNlY29uZE5vcm1hbFZlYyIsImZpcnN0VGFuZ2VudFZlYyIsInNlY29uZFRhbmdlbnRWZWMiLCJwbHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxrQkFBYjtBQUFBOztBQUFBLDhIQUNvQyxHQURwQztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQyxrQkFBVCxDQUNMQyxLQURLLEVBRUxDLE1BRkssRUFHTEMsV0FISyxFQUlMQyxxQkFKSyxFQUlvRTtBQUN6RTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRTtBQUNBLE1BQU1DLFNBQVMsR0FBR0osS0FBSyxDQUFDSyxJQUFOLEdBQWFKLE1BQU0sQ0FBQ0ksSUFBdEMsQ0FqQnlFLENBa0J6RTs7QUFDQSxNQUFNQyxhQUFhLEdBQUdILHFCQUFxQixJQUFJSCxLQUFLLENBQUNPLFFBQU4sQ0FBZUMsUUFBZixDQUF3QlAsTUFBTSxDQUFDTSxRQUEvQixFQUF5Q0UsVUFBekMsRUFBL0M7QUFDQSxNQUFNQyxjQUFjLEdBQUcsSUFBSUMsa0RBQUosQ0FBYSxDQUFDTCxhQUFhLENBQUNNLENBQTVCLEVBQStCTixhQUFhLENBQUNPLENBQTdDLENBQXZCLENBcEJ5RSxDQXFCekU7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHZCxLQUFLLENBQUNlLFFBQU4sQ0FBZUMsR0FBZixDQUFtQlYsYUFBbkIsQ0FBdkI7QUFDQSxNQUFNVyxlQUFlLEdBQUdoQixNQUFNLENBQUNjLFFBQVAsQ0FBZ0JDLEdBQWhCLENBQW9CVixhQUFwQixDQUF4QixDQXZCeUUsQ0F3QnpFOztBQUNBLE1BQU1ZLG1CQUFtQixHQUFHbEIsS0FBSyxDQUFDSyxJQUFOLEdBQWFTLGNBQWIsR0FBOEJiLE1BQU0sQ0FBQ0ksSUFBUCxHQUFjWSxlQUF4RSxDQXpCeUUsQ0EwQnpFOztBQUNBLE1BQU1FLGNBQWMsR0FBR2IsYUFBYSxDQUFDYyxLQUFkLENBQ3JCLENBQUNsQixXQUFXLENBQUNtQix3QkFBWixHQUF1Q3BCLE1BQU0sQ0FBQ0ksSUFBOUMsSUFBc0RZLGVBQWUsR0FBR0gsY0FBeEUsSUFBMEZJLG1CQUEzRixJQUFrSGQsU0FEN0YsQ0FBdkIsQ0EzQnlFLENBOEJ6RTs7QUFDQSxNQUFNa0IsZUFBZSxHQUFHaEIsYUFBYSxDQUFDYyxLQUFkLENBQ3RCLENBQUNsQixXQUFXLENBQUNtQix3QkFBWixHQUF1Q3JCLEtBQUssQ0FBQ0ssSUFBN0MsSUFBcURTLGNBQWMsR0FBR0csZUFBdEUsSUFBeUZDLG1CQUExRixJQUFpSGQsU0FEM0YsQ0FBeEIsQ0EvQnlFLENBa0N6RTtBQUNBOztBQUNBLE1BQU1tQixlQUFlLEdBQUdiLGNBQWMsQ0FBQ1UsS0FBZixDQUFxQnBCLEtBQUssQ0FBQ2UsUUFBTixDQUFlQyxHQUFmLENBQW1CTixjQUFuQixDQUFyQixDQUF4QjtBQUNBLE1BQU1jLGdCQUFnQixHQUFHZCxjQUFjLENBQUNVLEtBQWYsQ0FBcUJuQixNQUFNLENBQUNjLFFBQVAsQ0FBZ0JDLEdBQWhCLENBQW9CTixjQUFwQixDQUFyQixDQUF6QixDQXJDeUUsQ0F1Q3pFO0FBQ0E7O0FBQ0EsU0FBTztBQUNMVixTQUFLLEVBQUVtQixjQUFjLENBQUNNLElBQWYsQ0FBb0JGLGVBQXBCLENBREY7QUFFTHRCLFVBQU0sRUFBRXFCLGVBQWUsQ0FBQ0csSUFBaEIsQ0FBcUJELGdCQUFyQjtBQUZILEdBQVA7QUFJRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42NmE0ZTYzNmM3MjRiMjFjZGQ0NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuL3ZlY3RvcjJkJ1xuXG4vKipcbiAqIFNldCBvZiBSZXF1aXJlbWVudHMgZm9yIGEgUGh5c2ljcyBFbnZpcm9ubWVudFxuICovXG5leHBvcnQgY2xhc3MgUGh5c2ljc0Vudmlyb25tZW50IHtcbiAgcHVibGljIGNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiA9IDAuOFxufVxuXG4vKipcbiAqIE1pbmltdW0gcmVxdWlyZW1lbnRzIG9mIGEgYm9keSB0byBjYWxjdWxhdGUgcGh5c2ljcyBiYXNlZCBwcm9jZXNzZXNcbiAqIC0gb21pdHRpbmcgYWNjZWxlcmF0aW9uIGZvciBub3dcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQaHlzaWNzQm9keSB7XG4gIHBvc2l0aW9uOiBWZWN0b3IyRCxcbiAgdmVsb2NpdHk6IFZlY3RvcjJELFxuICBtYXNzOiBudW1iZXJcbn1cblxuLyoqXG4gKiBDb21wdXRlcyBhIGNvbGxpc2lvbiBmb3IgdGhlIGVudmlyb25tZW50XG4gKiBmaXJzdCAtIHRoZSByZXN1bHRpbmcgdmVsb2NpdHkgdmVjdG9yIGZvciBib2R5MVxuICogc2Vjb25kIC0gdGhlIHJlc3VsdGluZyB2ZWxvY2l0eSB2ZWN0b3IgZm9yIGJvZHkyXG4gKiBAcGFyYW0gZmlyc3QgdGhlIGZpcnN0IHBoeXNpY3MgYm9keSBcbiAqIEBwYXJhbSBzZWNvbmQgdGhlIHNlY29uZCBwaHlzaWNzIGJvZHlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGUyRENvbGxpc2lvbihcbiAgZmlyc3Q6IFBoeXNpY3NCb2R5LFxuICBzZWNvbmQ6IFBoeXNpY3NCb2R5LFxuICBlbnZpcm9ubWVudDogUGh5c2ljc0Vudmlyb25tZW50LFxuICB1bml0Tm9ybWFsb2ZDb2xsaXNpb24/OiBWZWN0b3IyRCk6IHsgZmlyc3Q6IFZlY3RvcjJELCBzZWNvbmQ6IFZlY3RvcjJEIH0ge1xuICAvKiAxRCBDb2xsaXNpb25cbiAgICogdiA9IGZpbmFsIHZlbG9jaXR5IHZlY3RvclxuICAgKiB1ID0gaW5pdGlhbCB2ZWxvY3R5IHZlY3RvclxuICAgKiBtID0gbWFzcyBvZiBib2R5XG4gICAqIHAgPSBtb21lbnR1bSBvZiBib2R5XG4gICAqIENyID0gY29lZmZpY2llbnQgb2YgUmVzdGl0dXRpb25cbiAgICogXG4gICAqICAgICAgIChDcikobTIpKHUyIC0gdTEpICsgKG0xKSh2MSkgKyAobTIpKHYyKSAgICAgKENyKShtMikodTIgLSB1MSkgKyBwMSArIHAyXG4gICAqIHYxID0g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUID0g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG4gICAqICAgICAgICAgICAgICAgICAgICAgIG0xICsgbTIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xICsgbTJcbiAgICogXG4gICAqICAgICAgIChDcikobTEpKHUxIC0gdTIpICsgKG0xKSh2MSkgKyAobTIpKHYyKSAgICAgIChDcikobTEpKHUxIC0gdTIpICsgcDEgKyBwMlxuICAgKiB2MiA9IOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCA9ICDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcbiAgICogICAgICAgICAgICAgICAgICAgICAgbTEgKyBtMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEgKyBtMlxuICAgKi9cbiAgLy8gdXNlZCBpbiBhbGwgY29tcHV0YXRpb25zXG4gIGNvbnN0IGpvaW50TWFzcyA9IGZpcnN0Lm1hc3MgKyBzZWNvbmQubWFzc1xuICAvLyB1bml0IHZlY3RvcnMgb2YgY3JpdGljYWwgYXhpc1xuICBjb25zdCB1bml0Tm9ybWFsVmVjID0gdW5pdE5vcm1hbG9mQ29sbGlzaW9uIHx8IGZpcnN0LnBvc2l0aW9uLnZlY3RvclRvKHNlY29uZC5wb3NpdGlvbikubm9ybWFsaXplZCgpXG4gIGNvbnN0IHVuaXRUYW5nZW50VmVjID0gbmV3IFZlY3RvcjJEKC11bml0Tm9ybWFsVmVjLnksIHVuaXROb3JtYWxWZWMueClcbiAgLy8gZ29pbmcgdG8gY2FsY3VsYXRlIGNvbGxpc2lvbnMgaW4gdGhlIG5vcm1hbCBwbGFuZSAoYXBwbHkgbm9ybWFsIDFEIGNvbGxpc2lvbiBhbGdvKVxuICBjb25zdCBmaXJzdE5vcm1hbFZlbCA9IGZpcnN0LnZlbG9jaXR5LmRvdCh1bml0Tm9ybWFsVmVjKVxuICBjb25zdCBzZWNvbmROb3JtYWxWZWwgPSBzZWNvbmQudmVsb2NpdHkuZG90KHVuaXROb3JtYWxWZWMpXG4gIC8vIHBfdG90YWwgPSBtXzEgKiB2XzEgKyBtXzIgKiB2XzIgXG4gIGNvbnN0IHRvdGFsTm9ybWFsTW9tZW50dW0gPSBmaXJzdC5tYXNzICogZmlyc3ROb3JtYWxWZWwgKyBzZWNvbmQubWFzcyAqIHNlY29uZE5vcm1hbFZlbFxuICAvLyB2MV9ub3JtID0gdjEgKiB1bml0X25vcm1cbiAgY29uc3QgZmlyc3ROb3JtYWxWZWMgPSB1bml0Tm9ybWFsVmVjLnNjYWxlKFxuICAgIChlbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gKiBzZWNvbmQubWFzcyAqIChzZWNvbmROb3JtYWxWZWwgLSBmaXJzdE5vcm1hbFZlbCkgKyB0b3RhbE5vcm1hbE1vbWVudHVtKSAvIGpvaW50TWFzc1xuICApXG4gIC8vIHYyX25vcm0gPSB2MiAqIHVuaXRfbm9ybVxuICBjb25zdCBzZWNvbmROb3JtYWxWZWMgPSB1bml0Tm9ybWFsVmVjLnNjYWxlKFxuICAgIChlbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gKiBmaXJzdC5tYXNzICogKGZpcnN0Tm9ybWFsVmVsIC0gc2Vjb25kTm9ybWFsVmVsKSArIHRvdGFsTm9ybWFsTW9tZW50dW0pIC8gam9pbnRNYXNzXG4gIClcbiAgLy8gdGFuZ2VudCBwbGFuZSBjb21wb25lbnRzIHN0YXkgdGhlIHNhbWUsIGp1c3QgaW4gdGhlIHRhbmdlbnQgcGxhbmVcbiAgLy8gdl90YW5nZW50ID0gdiAqIHVuaXRfdGFuZ2VudFxuICBjb25zdCBmaXJzdFRhbmdlbnRWZWMgPSB1bml0VGFuZ2VudFZlYy5zY2FsZShmaXJzdC52ZWxvY2l0eS5kb3QodW5pdFRhbmdlbnRWZWMpKVxuICBjb25zdCBzZWNvbmRUYW5nZW50VmVjID0gdW5pdFRhbmdlbnRWZWMuc2NhbGUoc2Vjb25kLnZlbG9jaXR5LmRvdCh1bml0VGFuZ2VudFZlYykpXG5cbiAgLy8gcmV0dXJuIGNvbXBvc2l0aW9uIG9mIG5vcm1hbCBhbmQgdGFuZ2VudCBjb21wb25lbnRzXG4gIC8vIHZlYyA9IHZlY19ub3JtICsgdmVjX3RhbmdlbnRcbiAgcmV0dXJuIHtcbiAgICBmaXJzdDogZmlyc3ROb3JtYWxWZWMucGx1cyhmaXJzdFRhbmdlbnRWZWMpLFxuICAgIHNlY29uZDogc2Vjb25kTm9ybWFsVmVjLnBsdXMoc2Vjb25kVGFuZ2VudFZlYylcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==