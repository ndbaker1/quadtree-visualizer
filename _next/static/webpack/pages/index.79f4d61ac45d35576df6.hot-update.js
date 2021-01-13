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
  Object.values(source).forEach(function (value) {
    return console.log(value);
  });
  Object.values(source).forEach(function (value) {
    return console.log(value);
  });
}

var a = new PhysicsEnvironment();
var b = new PhysicsEnvironment();
b.coefficientOfRestitution = 0.1;
updateWith(a, b);
console.log(a);
updateWith(a, {
  coefficientOfRestitution: 0.4
});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcGh5c2ljcy50cyJdLCJuYW1lcyI6WyJQaHlzaWNzRW52aXJvbm1lbnQiLCJ2YXJzIiwiY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uIiwidW5kZWZpbmVkIiwidXBkYXRlV2l0aCIsInRhcmdldCIsInNvdXJjZSIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJhIiwiYiIsImNvbXB1dGUyRENvbGxpc2lvbiIsImZpcnN0Iiwic2Vjb25kIiwiZW52aXJvbm1lbnQiLCJqb2ludE1hc3MiLCJtYXNzIiwibW9tZW10dW1Cb2R5MSIsIngiLCJ2ZWxvY2l0eSIsInkiLCJtb21lbXR1bUJvZHkyIiwiVmVjdG9yMkQiLCJzY2FsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7QUFLQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxrQkFBYjtBQUFBO0FBQUE7O0FBQUEsZ0lBQ29DLEdBRHBDO0FBQUE7O0FBQUE7QUFBQTtBQUVFO0FBRkYsOEJBR21CQyxJQUhuQixFQUc4RztBQUMxRyxVQUFJQSxJQUFJLENBQUNDLHdCQUFMLEtBQWtDQyxTQUF0QyxFQUNFLEtBQUtELHdCQUFMLEdBQWdDRCxJQUFJLENBQUNDLHdCQUFyQztBQUNIO0FBTkg7O0FBQUE7QUFBQTs7QUFTQSxTQUFTRSxVQUFULENBQXVCQyxNQUF2QixFQUFrQ0MsTUFBbEMsRUFBcUU7QUFDbkVDLFFBQU0sQ0FBQ0MsTUFBUCxDQUFjRixNQUFkLEVBQXNCRyxPQUF0QixDQUE4QixVQUFDQyxLQUFEO0FBQUEsV0FBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBWDtBQUFBLEdBQTlCO0FBQ0FILFFBQU0sQ0FBQ0MsTUFBUCxDQUFjRixNQUFkLEVBQXNCRyxPQUF0QixDQUE4QixVQUFDQyxLQUFEO0FBQUEsV0FBV0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEtBQVosQ0FBWDtBQUFBLEdBQTlCO0FBQ0Q7O0FBRUQsSUFBTUcsQ0FBQyxHQUFHLElBQUliLGtCQUFKLEVBQVY7QUFDQSxJQUFNYyxDQUFDLEdBQUcsSUFBSWQsa0JBQUosRUFBVjtBQUNBYyxDQUFDLENBQUNaLHdCQUFGLEdBQTZCLEdBQTdCO0FBQ0FFLFVBQVUsQ0FBQ1MsQ0FBRCxFQUFJQyxDQUFKLENBQVY7QUFDQUgsT0FBTyxDQUFDQyxHQUFSLENBQVlDLENBQVo7QUFDQVQsVUFBVSxDQUFDUyxDQUFELEVBQUk7QUFBRVgsMEJBQXdCLEVBQUU7QUFBNUIsQ0FBSixDQUFWO0FBQ0FTLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxDQUFaO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTRSxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBZ0RDLE1BQWhELEVBQXFFQyxXQUFyRSxFQUE2STtBQUNsSjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRSxNQUFNQyxTQUFTLEdBQUdILEtBQUssQ0FBQ0ksSUFBTixHQUFhSCxNQUFNLENBQUNHLElBQXRDO0FBQ0EsTUFBTUMsYUFBYSxHQUFHO0FBQUVDLEtBQUMsRUFBRU4sS0FBSyxDQUFDSSxJQUFOLEdBQWFKLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxDQUFqQztBQUFvQ0UsS0FBQyxFQUFFUixLQUFLLENBQUNJLElBQU4sR0FBYUosS0FBSyxDQUFDTyxRQUFOLENBQWVDO0FBQW5FLEdBQXRCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHO0FBQUVILEtBQUMsRUFBRUwsTUFBTSxDQUFDRyxJQUFQLEdBQWNILE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkQsQ0FBbkM7QUFBc0NFLEtBQUMsRUFBRVAsTUFBTSxDQUFDRyxJQUFQLEdBQWNILE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkM7QUFBdkUsR0FBdEI7QUFDQSxTQUFPO0FBQ0xSLFNBQUssRUFBRSxJQUFJVSxrREFBSixDQUNKUixXQUFXLENBQUNoQix3QkFBWixHQUF1Q2UsTUFBTSxDQUFDRyxJQUE5QyxJQUFzREgsTUFBTSxDQUFDTSxRQUFQLENBQWdCRCxDQUFoQixHQUFvQk4sS0FBSyxDQUFDTyxRQUFOLENBQWVELENBQXpGLElBQThGRCxhQUFhLENBQUNDLENBQTVHLEdBQWdIRyxhQUFhLENBQUNILENBRDFILEVBRUpKLFdBQVcsQ0FBQ2hCLHdCQUFaLEdBQXVDZSxNQUFNLENBQUNHLElBQTlDLElBQXNESCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JDLENBQWhCLEdBQW9CUixLQUFLLENBQUNPLFFBQU4sQ0FBZUMsQ0FBekYsSUFBOEZILGFBQWEsQ0FBQ0csQ0FBNUcsR0FBZ0hDLGFBQWEsQ0FBQ0QsQ0FGMUgsRUFHTEcsS0FISyxDQUdDLElBQUlSLFNBSEwsQ0FERjtBQUtMRixVQUFNLEVBQUUsSUFBSVMsa0RBQUosQ0FDTFIsV0FBVyxDQUFDaEIsd0JBQVosR0FBdUNjLEtBQUssQ0FBQ0ksSUFBN0MsSUFBcURKLEtBQUssQ0FBQ08sUUFBTixDQUFlRCxDQUFmLEdBQW1CTCxNQUFNLENBQUNNLFFBQVAsQ0FBZ0JELENBQXhGLElBQTZGRCxhQUFhLENBQUNDLENBQTNHLEdBQStHRyxhQUFhLENBQUNILENBRHhILEVBRUxKLFdBQVcsQ0FBQ2hCLHdCQUFaLEdBQXVDYyxLQUFLLENBQUNJLElBQTdDLElBQXFESixLQUFLLENBQUNPLFFBQU4sQ0FBZUMsQ0FBZixHQUFtQlAsTUFBTSxDQUFDTSxRQUFQLENBQWdCQyxDQUF4RixJQUE2RkgsYUFBYSxDQUFDRyxDQUEzRyxHQUErR0MsYUFBYSxDQUFDRCxDQUZ4SCxFQUdORyxLQUhNLENBR0EsSUFBSVIsU0FISjtBQUxILEdBQVA7QUFVRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43OWY0ZDYxYWM0NWQzNTU3NmRmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuL3ZlY3RvcjJkJ1xuXG4vKipcbiAqIFNldCBvZiBSZXF1aXJlbWVudHMgZm9yIGEgUGh5c2ljcyBFbnZpcm9ubWVudFxuICovXG5pbnRlcmZhY2UgUGh5c2ljc0Vudmlyb25tZW50VmFyaWFibGVzIHtcbiAgY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uOiBudW1iZXJcbn1cblxuLyoqXG4gKiBQaHlzaWNzIEVudmlyb25tZW50IGluc3RhbmNlXG4gKi9cbmV4cG9ydCBjbGFzcyBQaHlzaWNzRW52aXJvbm1lbnQgaW1wbGVtZW50cyBQaHlzaWNzRW52aXJvbm1lbnRWYXJpYWJsZXMge1xuICBwdWJsaWMgY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uID0gMC44XG4gIC8vIHVwZGF0ZXMgYW55IG9mIHRoZSByZXF1ZXN0ZWQgUGh5c2ljcyBFbnZpcm9ubWVudCBWYXJpYWJsZXNcbiAgcHVibGljIHVwZGF0ZVZhcih2YXJzOiB7IFtLIGluIGtleW9mIFBoeXNpY3NFbnZpcm9ubWVudFZhcmlhYmxlc10/OiBQaHlzaWNzRW52aXJvbm1lbnRWYXJpYWJsZXNbS10gfSk6IHZvaWQge1xuICAgIGlmICh2YXJzLmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiAhPT0gdW5kZWZpbmVkKVxuICAgICAgdGhpcy5jb2VmZmljaWVudE9mUmVzdGl0dXRpb24gPSB2YXJzLmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvblxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVdpdGg8VD4odGFyZ2V0OiBULCBzb3VyY2U6IHsgW0sgaW4ga2V5b2YgVF0/OiBUW0tdIH0pIHtcbiAgT2JqZWN0LnZhbHVlcyhzb3VyY2UpLmZvckVhY2goKHZhbHVlKSA9PiBjb25zb2xlLmxvZyh2YWx1ZSkpXG4gIE9iamVjdC52YWx1ZXMoc291cmNlKS5mb3JFYWNoKCh2YWx1ZSkgPT4gY29uc29sZS5sb2codmFsdWUpKVxufVxuXG5jb25zdCBhID0gbmV3IFBoeXNpY3NFbnZpcm9ubWVudFxuY29uc3QgYiA9IG5ldyBQaHlzaWNzRW52aXJvbm1lbnRcbmIuY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uID0gMC4xXG51cGRhdGVXaXRoKGEsIGIpXG5jb25zb2xlLmxvZyhhKVxudXBkYXRlV2l0aChhLCB7IGNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbjogMC40IH0pXG5jb25zb2xlLmxvZyhhKVxuXG5cbi8qKlxuICogTWluaW11bSByZXF1aXJlbWVudHMgb2YgYSBib2R5IHRvIGNhbGN1bGF0ZSBwaHlzaWNzIGJhc2VkIHByb2Nlc3Nlc1xuICogLSBvbWl0dGluZyBhY2NlbGVyYXRpb24gZm9yIG5vd1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFBoeXNpY3NCb2R5IHtcbiAgcG9zaXRpb246IFZlY3RvcjJELFxuICB2ZWxvY2l0eTogVmVjdG9yMkQsXG4gIG1hc3M6IG51bWJlclxufVxuXG4vKipcbiAqIENvbXB1dGVzIGEgY29sbGlzaW9uIGZvciB0aGUgZW52aXJvbm1lbnRcbiAqIGZpcnN0IC0gdGhlIHJlc3VsdGluZyB2ZWxvY2l0eSB2ZWN0b3IgZm9yIGJvZHkxXG4gKiBzZWNvbmQgLSB0aGUgcmVzdWx0aW5nIHZlbG9jaXR5IHZlY3RvciBmb3IgYm9keTJcbiAqIEBwYXJhbSBmaXJzdCB0aGUgZmlyc3QgcGh5c2ljcyBib2R5IFxuICogQHBhcmFtIHNlY29uZCB0aGUgc2Vjb25kIHBoeXNpY3MgYm9keVxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZTJEQ29sbGlzaW9uKGZpcnN0OiBQaHlzaWNzQm9keSwgc2Vjb25kOiBQaHlzaWNzQm9keSwgZW52aXJvbm1lbnQ6IFBoeXNpY3NFbnZpcm9ubWVudCk6IHsgZmlyc3Q6IFZlY3RvcjJELCBzZWNvbmQ6IFZlY3RvcjJEIH0ge1xuICAvKipcbiAgICogdiA9IGZpbmFsIHZlbG9jaXR5IHZlY3RvclxuICAgKiB1ID0gaW5pdGlhbCB2ZWxvY3R5IHZlY3RvclxuICAgKiBtID0gbWFzcyBvZiBib2R5XG4gICAqIHAgPSBtb21lbnR1bSBvZiBib2R5XG4gICAqIENyID0gY29lZmZpY2llbnQgb2YgUmVzdGl0dXRpb25cbiAgICogXG4gICAqICAgICAgIChDcikobTIpKHUyIC0gdTEpICsgKG0xKSh2MSkgKyAobTIpKHYyKSAgICAgKENyKShtMikodTIgLSB1MSkgKyBwMSArIHAyXG4gICAqIHYxID0g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUID0g4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCU4oCUXG4gICAqICAgICAgICAgICAgICAgICAgICAgIG0xICsgbTIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG0xICsgbTJcbiAgICogXG4gICAqICAgICAgIChDcikobTEpKHUxIC0gdTIpICsgKG0xKSh2MSkgKyAobTIpKHYyKSAgICAgIChDcikobTEpKHUxIC0gdTIpICsgcDEgKyBwMlxuICAgKiB2MiA9IOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlOKAlCA9ICDigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJTigJRcbiAgICogICAgICAgICAgICAgICAgICAgICAgbTEgKyBtMiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbTEgKyBtMlxuICAgKi9cbiAgY29uc3Qgam9pbnRNYXNzID0gZmlyc3QubWFzcyArIHNlY29uZC5tYXNzXG4gIGNvbnN0IG1vbWVtdHVtQm9keTEgPSB7IHg6IGZpcnN0Lm1hc3MgKiBmaXJzdC52ZWxvY2l0eS54LCB5OiBmaXJzdC5tYXNzICogZmlyc3QudmVsb2NpdHkueSB9XG4gIGNvbnN0IG1vbWVtdHVtQm9keTIgPSB7IHg6IHNlY29uZC5tYXNzICogc2Vjb25kLnZlbG9jaXR5LngsIHk6IHNlY29uZC5tYXNzICogc2Vjb25kLnZlbG9jaXR5LnkgfVxuICByZXR1cm4ge1xuICAgIGZpcnN0OiBuZXcgVmVjdG9yMkQoXG4gICAgICAoZW52aXJvbm1lbnQuY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uICogc2Vjb25kLm1hc3MgKiAoc2Vjb25kLnZlbG9jaXR5LnggLSBmaXJzdC52ZWxvY2l0eS54KSArIG1vbWVtdHVtQm9keTEueCArIG1vbWVtdHVtQm9keTIueCksXG4gICAgICAoZW52aXJvbm1lbnQuY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uICogc2Vjb25kLm1hc3MgKiAoc2Vjb25kLnZlbG9jaXR5LnkgLSBmaXJzdC52ZWxvY2l0eS55KSArIG1vbWVtdHVtQm9keTEueSArIG1vbWVtdHVtQm9keTIueSlcbiAgICApLnNjYWxlKDEgLyBqb2ludE1hc3MpLFxuICAgIHNlY29uZDogbmV3IFZlY3RvcjJEKFxuICAgICAgKGVudmlyb25tZW50LmNvZWZmaWNpZW50T2ZSZXN0aXR1dGlvbiAqIGZpcnN0Lm1hc3MgKiAoZmlyc3QudmVsb2NpdHkueCAtIHNlY29uZC52ZWxvY2l0eS54KSArIG1vbWVtdHVtQm9keTEueCArIG1vbWVtdHVtQm9keTIueCksXG4gICAgICAoZW52aXJvbm1lbnQuY29lZmZpY2llbnRPZlJlc3RpdHV0aW9uICogZmlyc3QubWFzcyAqIChmaXJzdC52ZWxvY2l0eS55IC0gc2Vjb25kLnZlbG9jaXR5LnkpICsgbW9tZW10dW1Cb2R5MS55ICsgbW9tZW10dW1Cb2R5Mi55KVxuICAgICkuc2NhbGUoMSAvIGpvaW50TWFzcylcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==