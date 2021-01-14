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

  var firstNormalVec = unitNormalVec.scale((environment.coefficientOfRestitution * second.mass * (secondNormalVel - firstNormalVel) + totalNormalMomentum) / jointMass); // v1_norm = v1 * unit_norm

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcGh5c2ljcy50cyJdLCJuYW1lcyI6WyJQaHlzaWNzRW52aXJvbm1lbnQiLCJjb21wdXRlMkRDb2xsaXNpb24iLCJmaXJzdCIsInNlY29uZCIsImVudmlyb25tZW50IiwidW5pdE5vcm1hbG9mQ29sbGlzaW9uIiwiam9pbnRNYXNzIiwibWFzcyIsInVuaXROb3JtYWxWZWMiLCJwb3NpdGlvbiIsInZlY3RvclRvIiwibm9ybWFsaXplZCIsInVuaXRUYW5nZW50VmVjIiwiVmVjdG9yMkQiLCJ5IiwieCIsImZpcnN0Tm9ybWFsVmVsIiwidmVsb2NpdHkiLCJkb3QiLCJzZWNvbmROb3JtYWxWZWwiLCJ0b3RhbE5vcm1hbE1vbWVudHVtIiwiZmlyc3ROb3JtYWxWZWMiLCJzY2FsZSIsImNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiIsInNlY29uZE5vcm1hbFZlYyIsImZpcnN0VGFuZ2VudFZlYyIsInNlY29uZFRhbmdlbnRWZWMiLCJwbHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFDTyxJQUFNQSxrQkFBYjtBQUFBOztBQUFBLDhIQUNvQyxHQURwQztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTQyxrQkFBVCxDQUNMQyxLQURLLEVBRUxDLE1BRkssRUFHTEMsV0FISyxFQUlMQyxxQkFKSyxFQUlvRTtBQUN6RTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRTtBQUNBLE1BQU1DLFNBQVMsR0FBR0osS0FBSyxDQUFDSyxJQUFOLEdBQWFKLE1BQU0sQ0FBQ0ksSUFBdEMsQ0FqQnlFLENBa0J6RTs7QUFDQSxNQUFNQyxhQUFhLEdBQUdILHFCQUFxQixJQUFJSCxLQUFLLENBQUNPLFFBQU4sQ0FBZUMsUUFBZixDQUF3QlAsTUFBTSxDQUFDTSxRQUEvQixFQUF5Q0UsVUFBekMsRUFBL0M7QUFDQSxNQUFNQyxjQUFjLEdBQUcsSUFBSUMsa0RBQUosQ0FBYSxDQUFDTCxhQUFhLENBQUNNLENBQTVCLEVBQStCTixhQUFhLENBQUNPLENBQTdDLENBQXZCLENBcEJ5RSxDQXFCekU7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHZCxLQUFLLENBQUNlLFFBQU4sQ0FBZUMsR0FBZixDQUFtQlYsYUFBbkIsQ0FBdkI7QUFDQSxNQUFNVyxlQUFlLEdBQUdoQixNQUFNLENBQUNjLFFBQVAsQ0FBZ0JDLEdBQWhCLENBQW9CVixhQUFwQixDQUF4QixDQXZCeUUsQ0F3QnpFOztBQUNBLE1BQU1ZLG1CQUFtQixHQUFHbEIsS0FBSyxDQUFDSyxJQUFOLEdBQWFTLGNBQWIsR0FBOEJiLE1BQU0sQ0FBQ0ksSUFBUCxHQUFjWSxlQUF4RSxDQXpCeUUsQ0EwQnpFOztBQUNBLE1BQU1FLGNBQWMsR0FBR2IsYUFBYSxDQUFDYyxLQUFkLENBQ3JCLENBQUNsQixXQUFXLENBQUNtQix3QkFBWixHQUF1Q3BCLE1BQU0sQ0FBQ0ksSUFBOUMsSUFBc0RZLGVBQWUsR0FBR0gsY0FBeEUsSUFBMEZJLG1CQUEzRixJQUFrSGQsU0FEN0YsQ0FBdkIsQ0EzQnlFLENBOEJ6RTs7QUFDQSxNQUFNa0IsZUFBZSxHQUFHaEIsYUFBYSxDQUFDYyxLQUFkLENBQ3RCLENBQUNsQixXQUFXLENBQUNtQix3QkFBWixHQUF1Q3JCLEtBQUssQ0FBQ0ssSUFBN0MsSUFBcURTLGNBQWMsR0FBR0csZUFBdEUsSUFBeUZDLG1CQUExRixJQUFpSGQsU0FEM0YsQ0FBeEIsQ0EvQnlFLENBbUN6RTs7QUFDQSxNQUFNbUIsZUFBZSxHQUFHYixjQUFjLENBQUNVLEtBQWYsQ0FBcUJwQixLQUFLLENBQUNlLFFBQU4sQ0FBZUMsR0FBZixDQUFtQk4sY0FBbkIsQ0FBckIsQ0FBeEI7QUFDQSxNQUFNYyxnQkFBZ0IsR0FBR2QsY0FBYyxDQUFDVSxLQUFmLENBQXFCbkIsTUFBTSxDQUFDYyxRQUFQLENBQWdCQyxHQUFoQixDQUFvQk4sY0FBcEIsQ0FBckIsQ0FBekI7QUFFQSxTQUFPO0FBQ0xWLFNBQUssRUFBRW1CLGNBQWMsQ0FBQ00sSUFBZixDQUFvQkYsZUFBcEIsQ0FERjtBQUVMdEIsVUFBTSxFQUFFcUIsZUFBZSxDQUFDRyxJQUFoQixDQUFxQkQsZ0JBQXJCO0FBRkgsR0FBUDtBQUlEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBkYjU1MjRkY2VkYzIyNGY2MjAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJy4vdmVjdG9yMmQnXG5cbi8qKlxuICogU2V0IG9mIFJlcXVpcmVtZW50cyBmb3IgYSBQaHlzaWNzIEVudmlyb25tZW50XG4gKi9cbmV4cG9ydCBjbGFzcyBQaHlzaWNzRW52aXJvbm1lbnQge1xuICBwdWJsaWMgY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uID0gMC44XG59XG5cbi8qKlxuICogTWluaW11bSByZXF1aXJlbWVudHMgb2YgYSBib2R5IHRvIGNhbGN1bGF0ZSBwaHlzaWNzIGJhc2VkIHByb2Nlc3Nlc1xuICogLSBvbWl0dGluZyBhY2NlbGVyYXRpb24gZm9yIG5vd1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFBoeXNpY3NCb2R5IHtcbiAgcG9zaXRpb246IFZlY3RvcjJELFxuICB2ZWxvY2l0eTogVmVjdG9yMkQsXG4gIG1hc3M6IG51bWJlclxufVxuXG4vKipcbiAqIENvbXB1dGVzIGEgY29sbGlzaW9uIGZvciB0aGUgZW52aXJvbm1lbnRcbiAqIGZpcnN0IC0gdGhlIHJlc3VsdGluZyB2ZWxvY2l0eSB2ZWN0b3IgZm9yIGJvZHkxXG4gKiBzZWNvbmQgLSB0aGUgcmVzdWx0aW5nIHZlbG9jaXR5IHZlY3RvciBmb3IgYm9keTJcbiAqIEBwYXJhbSBmaXJzdCB0aGUgZmlyc3QgcGh5c2ljcyBib2R5IFxuICogQHBhcmFtIHNlY29uZCB0aGUgc2Vjb25kIHBoeXNpY3MgYm9keVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZTJEQ29sbGlzaW9uKFxuICBmaXJzdDogUGh5c2ljc0JvZHksXG4gIHNlY29uZDogUGh5c2ljc0JvZHksXG4gIGVudmlyb25tZW50OiBQaHlzaWNzRW52aXJvbm1lbnQsXG4gIHVuaXROb3JtYWxvZkNvbGxpc2lvbj86IFZlY3RvcjJEKTogeyBmaXJzdDogVmVjdG9yMkQsIHNlY29uZDogVmVjdG9yMkQgfSB7XG4gIC8qIDFEIENvbGxpc2lvblxuICAgKiB2ID0gZmluYWwgdmVsb2NpdHkgdmVjdG9yXG4gICAqIHUgPSBpbml0aWFsIHZlbG9jdHkgdmVjdG9yXG4gICAqIG0gPSBtYXNzIG9mIGJvZHlcbiAgICogcCA9IG1vbWVudHVtIG9mIGJvZHlcbiAgICogQ3IgPSBjb2VmZmljaWVudCBvZiBSZXN0aXR1dGlvblxuICAgKiBcbiAgICogICAgICAgKENyKShtMikodTIgLSB1MSkgKyAobTEpKHYxKSArIChtMikodjIpICAgICAoQ3IpKG0yKSh1MiAtIHUxKSArIHAxICsgcDJcbiAgICogdjEgPSDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJQgPSDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcbiAgICogICAgICAgICAgICAgICAgICAgICAgbTEgKyBtMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEgKyBtMlxuICAgKiBcbiAgICogICAgICAgKENyKShtMSkodTEgLSB1MikgKyAobTEpKHYxKSArIChtMikodjIpICAgICAgKENyKShtMSkodTEgLSB1MikgKyBwMSArIHAyXG4gICAqIHYyID0g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUID0gIOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlFxuICAgKiAgICAgICAgICAgICAgICAgICAgICBtMSArIG0yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtMSArIG0yXG4gICAqL1xuICAvLyB1c2VkIGluIGFsbCBjb21wdXRhdGlvbnNcbiAgY29uc3Qgam9pbnRNYXNzID0gZmlyc3QubWFzcyArIHNlY29uZC5tYXNzXG4gIC8vIHVuaXQgdmVjdG9ycyBvZiBjcml0aWNhbCBheGlzXG4gIGNvbnN0IHVuaXROb3JtYWxWZWMgPSB1bml0Tm9ybWFsb2ZDb2xsaXNpb24gfHwgZmlyc3QucG9zaXRpb24udmVjdG9yVG8oc2Vjb25kLnBvc2l0aW9uKS5ub3JtYWxpemVkKClcbiAgY29uc3QgdW5pdFRhbmdlbnRWZWMgPSBuZXcgVmVjdG9yMkQoLXVuaXROb3JtYWxWZWMueSwgdW5pdE5vcm1hbFZlYy54KVxuICAvLyBnb2luZyB0byBjYWxjdWxhdGUgY29sbGlzaW9ucyBpbiB0aGUgbm9ybWFsIHBsYW5lIChhcHBseSBub3JtYWwgMUQgY29sbGlzaW9uIGFsZ28pXG4gIGNvbnN0IGZpcnN0Tm9ybWFsVmVsID0gZmlyc3QudmVsb2NpdHkuZG90KHVuaXROb3JtYWxWZWMpXG4gIGNvbnN0IHNlY29uZE5vcm1hbFZlbCA9IHNlY29uZC52ZWxvY2l0eS5kb3QodW5pdE5vcm1hbFZlYylcbiAgLy8gcF90b3RhbCA9IG1fMSAqIHZfMSArIG1fMiAqIHZfMiBcbiAgY29uc3QgdG90YWxOb3JtYWxNb21lbnR1bSA9IGZpcnN0Lm1hc3MgKiBmaXJzdE5vcm1hbFZlbCArIHNlY29uZC5tYXNzICogc2Vjb25kTm9ybWFsVmVsXG4gIC8vIHYxX25vcm0gPSB2MSAqIHVuaXRfbm9ybVxuICBjb25zdCBmaXJzdE5vcm1hbFZlYyA9IHVuaXROb3JtYWxWZWMuc2NhbGUoXG4gICAgKGVudmlyb25tZW50LmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiAqIHNlY29uZC5tYXNzICogKHNlY29uZE5vcm1hbFZlbCAtIGZpcnN0Tm9ybWFsVmVsKSArIHRvdGFsTm9ybWFsTW9tZW50dW0pIC8gam9pbnRNYXNzXG4gIClcbiAgLy8gdjFfbm9ybSA9IHYxICogdW5pdF9ub3JtXG4gIGNvbnN0IHNlY29uZE5vcm1hbFZlYyA9IHVuaXROb3JtYWxWZWMuc2NhbGUoXG4gICAgKGVudmlyb25tZW50LmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiAqIGZpcnN0Lm1hc3MgKiAoZmlyc3ROb3JtYWxWZWwgLSBzZWNvbmROb3JtYWxWZWwpICsgdG90YWxOb3JtYWxNb21lbnR1bSkgLyBqb2ludE1hc3NcbiAgKVxuXG4gIC8vIHRhbmdlbnQgcGxhbmUgY29tcG9uZW50cyBzdGF5IHRoZSBzYW1lXG4gIGNvbnN0IGZpcnN0VGFuZ2VudFZlYyA9IHVuaXRUYW5nZW50VmVjLnNjYWxlKGZpcnN0LnZlbG9jaXR5LmRvdCh1bml0VGFuZ2VudFZlYykpXG4gIGNvbnN0IHNlY29uZFRhbmdlbnRWZWMgPSB1bml0VGFuZ2VudFZlYy5zY2FsZShzZWNvbmQudmVsb2NpdHkuZG90KHVuaXRUYW5nZW50VmVjKSlcblxuICByZXR1cm4ge1xuICAgIGZpcnN0OiBmaXJzdE5vcm1hbFZlYy5wbHVzKGZpcnN0VGFuZ2VudFZlYyksXG4gICAgc2Vjb25kOiBzZWNvbmROb3JtYWxWZWMucGx1cyhzZWNvbmRUYW5nZW50VmVjKVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9