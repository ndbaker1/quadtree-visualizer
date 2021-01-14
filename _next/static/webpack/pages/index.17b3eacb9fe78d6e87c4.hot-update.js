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
  var jointMass = first.mass + second.mass;
  var unitNormalVec = unitNormalofCollision || first.position.vectorTo(second.position).normalized();
  var unitTangentVec = new _vector2d__WEBPACK_IMPORTED_MODULE_2__["Vector2D"](-unitNormalVec.y, unitNormalVec.x); // calculate collisions in the normal plane (normal 1D collisions)

  var firstNormalVel = first.velocity.dot(unitNormalVec);
  var secondNormalVel = second.velocity.dot(unitNormalVec); // p_total = m_1 * v_1 + m_2 * v_2 

  var totalNormalMomentum = first.mass * firstNormalVel + second.mass * secondNormalVel;
  var firstNormalVec = unitNormalVec.scale((environment.coefficientOfRestitution * second.mass * (secondNormalVel - firstNormalVel) + totalNormalMomentum) / jointMass);
  var secondNormalVec = unitNormalVec.scale((environment.coefficientOfRestitution * first.mass * (firstNormalVel - secondNormalVel) + totalNormalMomentum) / jointMass); // tangent plane components stay the same

  var firstTangentVec = unitTangentVec.scale(first.velocity.dot(unitTangentVec));
  var secondTangentVec = unitTangentVec.scale(second.velocity.dot(unitTangentVec));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcGh5c2ljcy50cyJdLCJuYW1lcyI6WyJQaHlzaWNzRW52aXJvbm1lbnQiLCJjb21wdXRlMkRDb2xsaXNpb24iLCJmaXJzdCIsInNlY29uZCIsImVudmlyb25tZW50IiwidW5pdE5vcm1hbG9mQ29sbGlzaW9uIiwiam9pbnRNYXNzIiwibWFzcyIsInVuaXROb3JtYWxWZWMiLCJwb3NpdGlvbiIsInZlY3RvclRvIiwibm9ybWFsaXplZCIsInVuaXRUYW5nZW50VmVjIiwiVmVjdG9yMkQiLCJ5IiwieCIsImZpcnN0Tm9ybWFsVmVsIiwidmVsb2NpdHkiLCJkb3QiLCJzZWNvbmROb3JtYWxWZWwiLCJ0b3RhbE5vcm1hbE1vbWVudHVtIiwiZmlyc3ROb3JtYWxWZWMiLCJzY2FsZSIsImNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiIsInNlY29uZE5vcm1hbFZlYyIsImZpcnN0VGFuZ2VudFZlYyIsInNlY29uZFRhbmdlbnRWZWMiLCJwbHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxrQkFBYjtBQUFBOztBQUFBLDhIQUNvQyxHQURwQztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQyxrQkFBVCxDQUNMQyxLQURLLEVBRUxDLE1BRkssRUFHTEMsV0FISyxFQUlMQyxxQkFKSyxFQUlvRTtBQUN6RTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFRSxNQUFNQyxTQUFTLEdBQUdKLEtBQUssQ0FBQ0ssSUFBTixHQUFhSixNQUFNLENBQUNJLElBQXRDO0FBQ0EsTUFBTUMsYUFBYSxHQUFHSCxxQkFBcUIsSUFBSUgsS0FBSyxDQUFDTyxRQUFOLENBQWVDLFFBQWYsQ0FBd0JQLE1BQU0sQ0FBQ00sUUFBL0IsRUFBeUNFLFVBQXpDLEVBQS9DO0FBQ0EsTUFBTUMsY0FBYyxHQUFHLElBQUlDLGtEQUFKLENBQWEsQ0FBQ0wsYUFBYSxDQUFDTSxDQUE1QixFQUErQk4sYUFBYSxDQUFDTyxDQUE3QyxDQUF2QixDQW5CeUUsQ0FxQnpFOztBQUNBLE1BQU1DLGNBQWMsR0FBR2QsS0FBSyxDQUFDZSxRQUFOLENBQWVDLEdBQWYsQ0FBbUJWLGFBQW5CLENBQXZCO0FBQ0EsTUFBTVcsZUFBZSxHQUFHaEIsTUFBTSxDQUFDYyxRQUFQLENBQWdCQyxHQUFoQixDQUFvQlYsYUFBcEIsQ0FBeEIsQ0F2QnlFLENBd0J6RTs7QUFDQSxNQUFNWSxtQkFBbUIsR0FBR2xCLEtBQUssQ0FBQ0ssSUFBTixHQUFhUyxjQUFiLEdBQThCYixNQUFNLENBQUNJLElBQVAsR0FBY1ksZUFBeEU7QUFDQSxNQUFNRSxjQUFjLEdBQUdiLGFBQWEsQ0FBQ2MsS0FBZCxDQUNyQixDQUFDbEIsV0FBVyxDQUFDbUIsd0JBQVosR0FBdUNwQixNQUFNLENBQUNJLElBQTlDLElBQXNEWSxlQUFlLEdBQUdILGNBQXhFLElBQTBGSSxtQkFBM0YsSUFBa0hkLFNBRDdGLENBQXZCO0FBR0EsTUFBTWtCLGVBQWUsR0FBR2hCLGFBQWEsQ0FBQ2MsS0FBZCxDQUN0QixDQUFDbEIsV0FBVyxDQUFDbUIsd0JBQVosR0FBdUNyQixLQUFLLENBQUNLLElBQTdDLElBQXFEUyxjQUFjLEdBQUdHLGVBQXRFLElBQXlGQyxtQkFBMUYsSUFBaUhkLFNBRDNGLENBQXhCLENBN0J5RSxDQWlDekU7O0FBQ0EsTUFBTW1CLGVBQWUsR0FBR2IsY0FBYyxDQUFDVSxLQUFmLENBQXFCcEIsS0FBSyxDQUFDZSxRQUFOLENBQWVDLEdBQWYsQ0FBbUJOLGNBQW5CLENBQXJCLENBQXhCO0FBQ0EsTUFBTWMsZ0JBQWdCLEdBQUdkLGNBQWMsQ0FBQ1UsS0FBZixDQUFxQm5CLE1BQU0sQ0FBQ2MsUUFBUCxDQUFnQkMsR0FBaEIsQ0FBb0JOLGNBQXBCLENBQXJCLENBQXpCO0FBRUEsU0FBTztBQUNMVixTQUFLLEVBQUVtQixjQUFjLENBQUNNLElBQWYsQ0FBb0JGLGVBQXBCLENBREY7QUFFTHRCLFVBQU0sRUFBRXFCLGVBQWUsQ0FBQ0csSUFBaEIsQ0FBcUJELGdCQUFyQjtBQUZILEdBQVA7QUFJRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xN2IzZWFjYjlmZTc4ZDZlODdjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuL3ZlY3RvcjJkJ1xuXG4vKipcbiAqIFNldCBvZiBSZXF1aXJlbWVudHMgZm9yIGEgUGh5c2ljcyBFbnZpcm9ubWVudFxuICovXG5leHBvcnQgY2xhc3MgUGh5c2ljc0Vudmlyb25tZW50IHtcbiAgcHVibGljIGNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiA9IDAuOFxufVxuXG4vKipcbiAqIE1pbmltdW0gcmVxdWlyZW1lbnRzIG9mIGEgYm9keSB0byBjYWxjdWxhdGUgcGh5c2ljcyBiYXNlZCBwcm9jZXNzZXNcbiAqIC0gb21pdHRpbmcgYWNjZWxlcmF0aW9uIGZvciBub3dcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQaHlzaWNzQm9keSB7XG4gIHBvc2l0aW9uOiBWZWN0b3IyRCxcbiAgdmVsb2NpdHk6IFZlY3RvcjJELFxuICBtYXNzOiBudW1iZXJcbn1cblxuLyoqXG4gKiBDb21wdXRlcyBhIGNvbGxpc2lvbiBmb3IgdGhlIGVudmlyb25tZW50XG4gKiBmaXJzdCAtIHRoZSByZXN1bHRpbmcgdmVsb2NpdHkgdmVjdG9yIGZvciBib2R5MVxuICogc2Vjb25kIC0gdGhlIHJlc3VsdGluZyB2ZWxvY2l0eSB2ZWN0b3IgZm9yIGJvZHkyXG4gKiBAcGFyYW0gZmlyc3QgdGhlIGZpcnN0IHBoeXNpY3MgYm9keSBcbiAqIEBwYXJhbSBzZWNvbmQgdGhlIHNlY29uZCBwaHlzaWNzIGJvZHlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGUyRENvbGxpc2lvbihcbiAgZmlyc3Q6IFBoeXNpY3NCb2R5LFxuICBzZWNvbmQ6IFBoeXNpY3NCb2R5LFxuICBlbnZpcm9ubWVudDogUGh5c2ljc0Vudmlyb25tZW50LFxuICB1bml0Tm9ybWFsb2ZDb2xsaXNpb24/OiBWZWN0b3IyRCk6IHsgZmlyc3Q6IFZlY3RvcjJELCBzZWNvbmQ6IFZlY3RvcjJEIH0ge1xuICAvKiAxRCBDb2xsaXNpb25cbiAgICogdiA9IGZpbmFsIHZlbG9jaXR5IHZlY3RvclxuICAgKiB1ID0gaW5pdGlhbCB2ZWxvY3R5IHZlY3RvclxuICAgKiBtID0gbWFzcyBvZiBib2R5XG4gICAqIHAgPSBtb21lbnR1bSBvZiBib2R5XG4gICAqIENyID0gY29lZmZpY2llbnQgb2YgUmVzdGl0dXRpb25cbiAgICogXG4gICAqICAgICAgIChDcikobTIpKHUyIC0gdTEpICsgKG0xKSh2MSkgKyAobTIpKHYyKSAgICAgKENyKShtMikodTIgLSB1MSkgKyBwMSArIHAyXG4gICAqIHYxID0g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUID0g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG4gICAqICAgICAgICAgICAgICAgICAgICAgIG0xICsgbTIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xICsgbTJcbiAgICogXG4gICAqICAgICAgIChDcikobTEpKHUxIC0gdTIpICsgKG0xKSh2MSkgKyAobTIpKHYyKSAgICAgIChDcikobTEpKHUxIC0gdTIpICsgcDEgKyBwMlxuICAgKiB2MiA9IOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCA9ICDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcbiAgICogICAgICAgICAgICAgICAgICAgICAgbTEgKyBtMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEgKyBtMlxuICAgKi9cblxuICBjb25zdCBqb2ludE1hc3MgPSBmaXJzdC5tYXNzICsgc2Vjb25kLm1hc3NcbiAgY29uc3QgdW5pdE5vcm1hbFZlYyA9IHVuaXROb3JtYWxvZkNvbGxpc2lvbiB8fCBmaXJzdC5wb3NpdGlvbi52ZWN0b3JUbyhzZWNvbmQucG9zaXRpb24pLm5vcm1hbGl6ZWQoKVxuICBjb25zdCB1bml0VGFuZ2VudFZlYyA9IG5ldyBWZWN0b3IyRCgtdW5pdE5vcm1hbFZlYy55LCB1bml0Tm9ybWFsVmVjLngpXG5cbiAgLy8gY2FsY3VsYXRlIGNvbGxpc2lvbnMgaW4gdGhlIG5vcm1hbCBwbGFuZSAobm9ybWFsIDFEIGNvbGxpc2lvbnMpXG4gIGNvbnN0IGZpcnN0Tm9ybWFsVmVsID0gZmlyc3QudmVsb2NpdHkuZG90KHVuaXROb3JtYWxWZWMpXG4gIGNvbnN0IHNlY29uZE5vcm1hbFZlbCA9IHNlY29uZC52ZWxvY2l0eS5kb3QodW5pdE5vcm1hbFZlYylcbiAgLy8gcF90b3RhbCA9IG1fMSAqIHZfMSArIG1fMiAqIHZfMiBcbiAgY29uc3QgdG90YWxOb3JtYWxNb21lbnR1bSA9IGZpcnN0Lm1hc3MgKiBmaXJzdE5vcm1hbFZlbCArIHNlY29uZC5tYXNzICogc2Vjb25kTm9ybWFsVmVsXG4gIGNvbnN0IGZpcnN0Tm9ybWFsVmVjID0gdW5pdE5vcm1hbFZlYy5zY2FsZShcbiAgICAoZW52aXJvbm1lbnQuY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uICogc2Vjb25kLm1hc3MgKiAoc2Vjb25kTm9ybWFsVmVsIC0gZmlyc3ROb3JtYWxWZWwpICsgdG90YWxOb3JtYWxNb21lbnR1bSkgLyBqb2ludE1hc3NcbiAgKVxuICBjb25zdCBzZWNvbmROb3JtYWxWZWMgPSB1bml0Tm9ybWFsVmVjLnNjYWxlKFxuICAgIChlbnZpcm9ubWVudC5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gKiBmaXJzdC5tYXNzICogKGZpcnN0Tm9ybWFsVmVsIC0gc2Vjb25kTm9ybWFsVmVsKSArIHRvdGFsTm9ybWFsTW9tZW50dW0pIC8gam9pbnRNYXNzXG4gIClcblxuICAvLyB0YW5nZW50IHBsYW5lIGNvbXBvbmVudHMgc3RheSB0aGUgc2FtZVxuICBjb25zdCBmaXJzdFRhbmdlbnRWZWMgPSB1bml0VGFuZ2VudFZlYy5zY2FsZShmaXJzdC52ZWxvY2l0eS5kb3QodW5pdFRhbmdlbnRWZWMpKVxuICBjb25zdCBzZWNvbmRUYW5nZW50VmVjID0gdW5pdFRhbmdlbnRWZWMuc2NhbGUoc2Vjb25kLnZlbG9jaXR5LmRvdCh1bml0VGFuZ2VudFZlYykpXG5cbiAgcmV0dXJuIHtcbiAgICBmaXJzdDogZmlyc3ROb3JtYWxWZWMucGx1cyhmaXJzdFRhbmdlbnRWZWMpLFxuICAgIHNlY29uZDogc2Vjb25kTm9ybWFsVmVjLnBsdXMoc2Vjb25kVGFuZ2VudFZlYylcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==