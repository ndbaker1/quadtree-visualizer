webpackHotUpdate_N_E("pages/index",{

/***/ "./utils/quadtree.ts":
/*!***************************!*\
  !*** ./utils/quadtree.ts ***!
  \***************************/
/*! exports provided: QuadNode, QuadTree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuadNode", function() { return QuadNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuadTree", function() { return QuadTree; });
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _physics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./physics */ "./utils/physics.ts");




function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



/**
 * Node of a QuadTree
 * carries data about its:
 *  - bounds
 *  - depth
 *  - children
 *  - containing objects
 */
var QuadNode = /*#__PURE__*/function () {
  function QuadNode(bounds, depth) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuadNode);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "bounds", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "leaves", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "quadObjects", new Array());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "depth", void 0);

    this.bounds = bounds;
    this.depth = depth;
  }
  /**
   * cleanup references down the QuadTree recursively
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuadNode, [{
    key: "clear",
    value: function clear() {
      var _this$leaves;

      this.quadObjects = new Array();
      (_this$leaves = this.leaves) === null || _this$leaves === void 0 ? void 0 : _this$leaves.forEach(function (leaf) {
        return leaf.clear();
      });
      this.leaves = null;
    }
    /**
     * process any updates recursively down the tree
     */

  }, {
    key: "process",
    value: function process(quadNodeProcedure) {
      var _this$leaves2;

      quadNodeProcedure(this);
      (_this$leaves2 = this.leaves) === null || _this$leaves2 === void 0 ? void 0 : _this$leaves2.forEach(function (leaf) {
        return leaf.process(quadNodeProcedure);
      });
    }
    /**
     * Initialize the sub-quads of the current Node,
     * and test if any object fit into a deeper quad
     */

  }, {
    key: "subdivide",
    value: function subdivide() {
      var _this = this;

      // calculate new bounds of sub-quads
      var midW = this.bounds.w / 2;
      var midH = this.bounds.h / 2;
      var newDepth = this.depth + 1;
      this.leaves = [new QuadNode(new _physics__WEBPACK_IMPORTED_MODULE_3__["Rect"](this.bounds.x, this.bounds.y, midW, midH), newDepth), new QuadNode(new _physics__WEBPACK_IMPORTED_MODULE_3__["Rect"](this.bounds.x + midW, this.bounds.y, midW, midH), newDepth), new QuadNode(new _physics__WEBPACK_IMPORTED_MODULE_3__["Rect"](this.bounds.x, this.bounds.y + midH, midW, midH), newDepth), new QuadNode(new _physics__WEBPACK_IMPORTED_MODULE_3__["Rect"](this.bounds.x + midW, this.bounds.y + midH, midW, midH), newDepth)];
      /**
       * place current particles into newely created groups
       * removes the object from the current array if it fits into another node
       */

      this.quadObjects.forEach(function (object) {
        var _this$leaves3;

        (_this$leaves3 = _this.leaves) === null || _this$leaves3 === void 0 ? void 0 : _this$leaves3.forEach(function (leaf) {
          if (leaf.insert(object)) _this.quadObjects.splice(_this.quadObjects.indexOf(object), 1); // remove from the 
        });
      });
    }
    /**
     * Inserts an object into the deepest point of the QuadTree it belongs
     * returns whether the object fit into the bounds of the currently attempted QuadNode 
     */

  }, {
    key: "insert",
    value: function insert(quadObject) {
      // test if the quad bounds contains the object
      if (!quadObject.insideRect(this.bounds)) return false; // test if the max tree depth has been reached

      if (this.depth > QuadTree.maxDepth) return false; // Node is safe to push object into
      // first try the leaves 

      if (this.leaves) {
        var _iterator = _createForOfIteratorHelper(this.leaves),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var leaf = _step.value;
            if (leaf.insert(quadObject)) return true;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      } // if no leaves, or leaves fail to cover object, push current node


      this.quadObjects.push(quadObject); // test if max capacity for the node has been reached

      if (!this.leaves && this.quadObjects.length > QuadTree.capacity) this.subdivide(); // divide and redistribute
      // object has been place into an array by this point

      return true;
    }
  }]);

  return QuadNode;
}();
/**
 * Root Reference for a QuadTree
 * primary interface for operations
 */

var QuadTree = /*#__PURE__*/function () {
  // default less than 5 pixels on a 1000x1000 grid
  function QuadTree(rect, objectArray) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuadTree);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "bounds", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "quadRoot", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "quadObjects", void 0);

    alert(QuadTree.maxDepth);
    this.bounds = rect;
    this.quadObjects = objectArray;
    this.quadRoot = new QuadNode(this.bounds, 0);
  }
  /**
   * Updates the QuadTree will most recent object positions and then recursively calls a procedure
   * @param quadNodeProcedure function to call on each node of the tree
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuadTree, [{
    key: "process",
    value: function process(quadNodeProcedure) {
      var _this2 = this;

      this.quadRoot.clear(); // refresh the QuadNodes

      this.quadObjects.forEach(function (quadObject) {
        return _this2.quadRoot.insert(quadObject);
      }); // insert updated objects

      this.quadRoot.process(quadNodeProcedure); // call any user-defined, per-node procedure
    }
    /**
     * Inserts a QuadObject into the deepest level of the QuadTree it belong
     * @param quadObject object to insert into the QuadTree
     */

  }, {
    key: "insert",
    value: function insert(quadObject) {
      this.quadObjects.push(quadObject); // update master object array

      this.quadRoot.insert(quadObject); // descend object into tree
    }
  }]);

  return QuadTree;
}();

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(QuadTree, "maxDepth", Math.ceil(Math.log2(1000 / 5) / 2));

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(QuadTree, "capacity", 10);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcXVhZHRyZWUudHMiXSwibmFtZXMiOlsiUXVhZE5vZGUiLCJib3VuZHMiLCJkZXB0aCIsIkFycmF5IiwicXVhZE9iamVjdHMiLCJsZWF2ZXMiLCJmb3JFYWNoIiwibGVhZiIsImNsZWFyIiwicXVhZE5vZGVQcm9jZWR1cmUiLCJwcm9jZXNzIiwibWlkVyIsInciLCJtaWRIIiwiaCIsIm5ld0RlcHRoIiwiUmVjdCIsIngiLCJ5Iiwib2JqZWN0IiwiaW5zZXJ0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInF1YWRPYmplY3QiLCJpbnNpZGVSZWN0IiwiUXVhZFRyZWUiLCJtYXhEZXB0aCIsInB1c2giLCJsZW5ndGgiLCJjYXBhY2l0eSIsInN1YmRpdmlkZSIsInJlY3QiLCJvYmplY3RBcnJheSIsImFsZXJ0IiwicXVhZFJvb3QiLCJNYXRoIiwiY2VpbCIsImxvZzIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNQSxRQUFiO0FBS0Usb0JBQVlDLE1BQVosRUFBMEJDLEtBQTFCLEVBQXlDO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsbUhBRnBCLElBQUlDLEtBQUosRUFFb0I7O0FBQUE7O0FBQ3ZDLFNBQUtGLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNEO0FBRUQ7QUFDRjtBQUNBOzs7QUFaQTtBQUFBO0FBQUEsNEJBYWdCO0FBQUE7O0FBQ1osV0FBS0UsV0FBTCxHQUFtQixJQUFJRCxLQUFKLEVBQW5CO0FBQ0EsMkJBQUtFLE1BQUwsOERBQWFDLE9BQWIsQ0FBcUIsVUFBQ0MsSUFBRDtBQUFBLGVBQW9CQSxJQUFJLENBQUNDLEtBQUwsRUFBcEI7QUFBQSxPQUFyQjtBQUNBLFdBQUtILE1BQUwsR0FBYyxJQUFkO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7O0FBckJBO0FB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QUFxQkcsVUFBckIsRUFGbUMsQ0FFRjtBQUNsQztBQTlCSDs7QUFBQTtBQUFBOzswRkFBYUUsUSxjQUNPVSxJQUFJLENBQUNDLElBQUwsQ0FBVUQsSUFBSSxDQUFDRSxJQUFMLENBQVUsT0FBTyxDQUFqQixJQUFzQixDQUFoQyxDOzswRkFEUFosUSxjQUVPLEUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGFmMDU1MzQzY2Q1N2Y3NmZlNTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlY3QgfSBmcm9tICcuL3BoeXNpY3MnXG5cbmV4cG9ydCBpbnRlcmZhY2UgUXVhZE9iamVjdCB7XG4gIGluc2lkZVJlY3Q6IChyZWN0OiBSZWN0KSA9PiBib29sZWFuIC8vIHdoZXRoZXIgdGhlIG9iamVjdCBpbiBmdWxseSBjb250YWluZWQgd2l0aGluIGEgUmVjdFxufVxuXG4vKipcbiAqIE5vZGUgb2YgYSBRdWFkVHJlZVxuICogY2FycmllcyBkYXRhIGFib3V0IGl0czpcbiAqICAtIGJvdW5kc1xuICogIC0gZGVwdGhcbiAqICAtIGNoaWxkcmVuXG4gKiAgLSBjb250YWluaW5nIG9iamVjdHNcbiAqL1xuZXhwb3J0IGNsYXNzIFF1YWROb2RlIHtcbiAgcHVibGljIGJvdW5kczogUmVjdFxuICBwdWJsaWMgbGVhdmVzITogQXJyYXk8UXVhZE5vZGU+IHwgbnVsbFxuICBwdWJsaWMgcXVhZE9iamVjdHMgPSBuZXcgQXJyYXk8UXVhZE9iamVjdD4oKVxuICBwcml2YXRlIGRlcHRoOiBudW1iZXJcbiAgY29uc3RydWN0b3IoYm91bmRzOiBSZWN0LCBkZXB0aDogbnVtYmVyKSB7XG4gICAgdGhpcy5ib3VuZHMgPSBib3VuZHNcbiAgICB0aGlzLmRlcHRoID0gZGVwdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBjbGVhbnVwIHJlZmVyZW5jZXMgZG93biB0aGUgUXVhZFRyZWUgcmVjdXJzaXZlbHlcbiAgICovXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIHRoaXMucXVhZE9iamVjdHMgPSBuZXcgQXJyYXk8UXVhZE9iamVjdD4oKVxuICAgIHRoaXMubGVhdmVzPy5mb3JFYWNoKChsZWFmOiBRdWFkTm9kZSkgPT4gbGVhZi5jbGVhcigpKVxuICAgIHRoaXMubGVhdmVzID0gbnVsbFxuICB9XG5cbiAgLyoqXG4gICAqIHByb2Nlc3MgYW55IHVwZGF0ZXMgcmVjdXJzaXZlbHkgZG93biB0aGUgdHJlZVxuICAgKi9cbiAgcHJvY2VzcyhxdWFkTm9kZVByb2NlZHVyZTogKHF1YWROb2RlOiBRdWFkTm9kZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHF1YWROb2RlUHJvY2VkdXJlKHRoaXMpXG4gICAgdGhpcy5sZWF2ZXM/LmZvckVhY2goKGxlYWY6IFF1YWROb2RlKSA9PiBsZWFmLnByb2Nlc3MocXVhZE5vZGVQcm9jZWR1cmUpKVxuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemUgdGhlIHN1Yi1xdWFkcyBvZiB0aGUgY3VycmVudCBOb2RlLFxuICAgKiBhbmQgdGVzdCBpZiBhbnkgb2JqZWN0IGZpdCBpbnRvIGEgZGVlcGVyIHF1YWRcbiAgICovXG4gIHN1YmRpdmlkZSgpOiB2b2lkIHtcbiAgICAvLyBjYWxjdWxhdGUgbmV3IGJvdW5kcyBvZiBzdWItcXVhZHNcbiAgICBjb25zdCBtaWRXID0gdGhpcy5ib3VuZHMudyAvIDJcbiAgICBjb25zdCBtaWRIID0gdGhpcy5ib3VuZHMuaCAvIDJcbiAgICBjb25zdCBuZXdEZXB0aCA9IHRoaXMuZGVwdGggKyAxXG4gICAgdGhpcy5sZWF2ZXMgPSBbXG4gICAgICBuZXcgUXVhZE5vZGUobmV3IFJlY3QodGhpcy5ib3VuZHMueCwgdGhpcy5ib3VuZHMueSwgbWlkVywgbWlkSCksIG5ld0RlcHRoKSxcbiAgICAgIG5ldyBRdWFkTm9kZShuZXcgUmVjdCh0aGlzLmJvdW5kcy54ICsgbWlkVywgdGhpcy5ib3VuZHMueSwgbWlkVywgbWlkSCksIG5ld0RlcHRoKSxcbiAgICAgIG5ldyBRdWFkTm9kZShuZXcgUmVjdCh0aGlzLmJvdW5kcy54LCB0aGlzLmJvdW5kcy55ICsgbWlkSCwgbWlkVywgbWlkSCksIG5ld0RlcHRoKSxcbiAgICAgIG5ldyBRdWFkTm9kZShuZXcgUmVjdCh0aGlzLmJvdW5kcy54ICsgbWlkVywgdGhpcy5ib3VuZHMueSArIG1pZEgsIG1pZFcsIG1pZEgpLCBuZXdEZXB0aClcbiAgICBdXG5cbiAgICAvKipcbiAgICAgKiBwbGFjZSBjdXJyZW50IHBhcnRpY2xlcyBpbnRvIG5ld2VseSBjcmVhdGVkIGdyb3Vwc1xuICAgICAqIHJlbW92ZXMgdGhlIG9iamVjdCBmcm9tIHRoZSBjdXJyZW50IGFycmF5IGlmIGl0IGZpdHMgaW50byBhbm90aGVyIG5vZGVcbiAgICAgKi9cbiAgICB0aGlzLnF1YWRPYmplY3RzLmZvckVhY2goKG9iamVjdDogUXVhZE9iamVjdCkgPT4ge1xuICAgICAgdGhpcy5sZWF2ZXM/LmZvckVhY2goKGxlYWY6IFF1YWROb2RlKSA9PiB7XG4gICAgICAgIGlmIChsZWFmLmluc2VydChvYmplY3QpKVxuICAgICAgICAgIHRoaXMucXVhZE9iamVjdHMuc3BsaWNlKHRoaXMucXVhZE9iamVjdHMuaW5kZXhPZihvYmplY3QpLCAxKSAvLyByZW1vdmUgZnJvbSB0aGUgXG4gICAgICB9KVxuICAgIH0pXG4gIH1cblxuICAvKipcbiAgICogSW5zZXJ0cyBhbiBvYmplY3QgaW50byB0aGUgZGVlcGVzdCBwb2ludCBvZiB0aGUgUXVhZFRyZWUgaXQgYmVsb25nc1xuICAgKiByZXR1cm5zIHdoZXRoZXIgdGhlIG9iamVjdCBmaXQgaW50byB0aGUgYm91bmRzIG9mIHRoZSBjdXJyZW50bHkgYXR0ZW1wdGVkIFF1YWROb2RlIFxuICAgKi9cbiAgaW5zZXJ0KHF1YWRPYmplY3Q6IFF1YWRPYmplY3QpOiBib29sZWFuIHtcbiAgICAvLyB0ZXN0IGlmIHRoZSBxdWFkIGJvdW5kcyBjb250YWlucyB0aGUgb2JqZWN0XG4gICAgaWYgKCFxdWFkT2JqZWN0Lmluc2lkZVJlY3QodGhpcy5ib3VuZHMpKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAvLyB0ZXN0IGlmIHRoZSBtYXggdHJlZSBkZXB0aCBoYXMgYmVlbiByZWFjaGVkXG4gICAgaWYgKHRoaXMuZGVwdGggPiBRdWFkVHJlZS5tYXhEZXB0aClcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgLy8gTm9kZSBpcyBzYWZlIHRvIHB1c2ggb2JqZWN0IGludG9cbiAgICAvLyBmaXJzdCB0cnkgdGhlIGxlYXZlcyBcbiAgICBpZiAodGhpcy5sZWF2ZXMpXG4gICAgICBmb3IgKGNvbnN0IGxlYWYgb2YgdGhpcy5sZWF2ZXMpXG4gICAgICAgIGlmIChsZWFmLmluc2VydChxdWFkT2JqZWN0KSlcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuXG4gICAgLy8gaWYgbm8gbGVhdmVzLCBvciBsZWF2ZXMgZmFpbCB0byBjb3ZlciBvYmplY3QsIHB1c2ggY3VycmVudCBub2RlXG4gICAgdGhpcy5xdWFkT2JqZWN0cy5wdXNoKHF1YWRPYmplY3QpXG5cbiAgICAvLyB0ZXN0IGlmIG1heCBjYXBhY2l0eSBmb3IgdGhlIG5vZGUgaGFzIGJlZW4gcmVhY2hlZFxuICAgIGlmICghdGhpcy5sZWF2ZXMgJiYgdGhpcy5xdWFkT2JqZWN0cy5sZW5ndGggPiBRdWFkVHJlZS5jYXBhY2l0eSlcbiAgICAgIHRoaXMuc3ViZGl2aWRlKCkgLy8gZGl2aWRlIGFuZCByZWRpc3RyaWJ1dGVcblxuICAgIC8vIG9iamVjdCBoYXMgYmVlbiBwbGFjZSBpbnRvIGFuIGFycmF5IGJ5IHRoaXMgcG9pbnRcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59XG5cbi8qKlxuICogUm9vdCBSZWZlcmVuY2UgZm9yIGEgUXVhZFRyZWVcbiAqIHByaW1hcnkgaW50ZXJmYWNlIGZvciBvcGVyYXRpb25zXG4gKi9cbmV4cG9ydCBjbGFzcyBRdWFkVHJlZSB7XG4gIHN0YXRpYyBtYXhEZXB0aCA9IE1hdGguY2VpbChNYXRoLmxvZzIoMTAwMCAvIDUpIC8gMikgLy8gZGVmYXVsdCBsZXNzIHRoYW4gNSBwaXhlbHMgb24gYSAxMDAweDEwMDAgZ3JpZFxuICBzdGF0aWMgY2FwYWNpdHkgPSAxMFxuICBwdWJsaWMgYm91bmRzOiBSZWN0XG4gIHB1YmxpYyBxdWFkUm9vdDogUXVhZE5vZGVcbiAgcHVibGljIHF1YWRPYmplY3RzOiBBcnJheTxRdWFkT2JqZWN0PlxuICBjb25zdHJ1Y3RvcihyZWN0OiBSZWN0LCBvYmplY3RBcnJheTogQXJyYXk8UXVhZE9iamVjdD4pIHtcbiAgICBhbGVydChRdWFkVHJlZS5tYXhEZXB0aClcbiAgICB0aGlzLmJvdW5kcyA9IHJlY3RcbiAgICB0aGlzLnF1YWRPYmplY3RzID0gb2JqZWN0QXJyYXlcbiAgICB0aGlzLnF1YWRSb290ID0gbmV3IFF1YWROb2RlKHRoaXMuYm91bmRzLCAwKVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIFF1YWRUcmVlIHdpbGwgbW9zdCByZWNlbnQgb2JqZWN0IHBvc2l0aW9ucyBhbmQgdGhlbiByZWN1cnNpdmVseSBjYWxscyBhIHByb2NlZHVyZVxuICAgKiBAcGFyYW0gcXVhZE5vZGVQcm9jZWR1cmUgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIG5vZGUgb2YgdGhlIHRyZWVcbiAgICovXG4gIHByb2Nlc3MocXVhZE5vZGVQcm9jZWR1cmU6IChxdWFkTm9kZTogUXVhZE5vZGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLnF1YWRSb290LmNsZWFyKCkgLy8gcmVmcmVzaCB0aGUgUXVhZE5vZGVzXG4gICAgdGhpcy5xdWFkT2JqZWN0cy5mb3JFYWNoKChxdWFkT2JqZWN0OiBRdWFkT2JqZWN0KSA9PiB0aGlzLnF1YWRSb290Lmluc2VydChxdWFkT2JqZWN0KSkgLy8gaW5zZXJ0IHVwZGF0ZWQgb2JqZWN0c1xuICAgIHRoaXMucXVhZFJvb3QucHJvY2VzcyhxdWFkTm9kZVByb2NlZHVyZSkgLy8gY2FsbCBhbnkgdXNlci1kZWZpbmVkLCBwZXItbm9kZSBwcm9jZWR1cmVcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRzIGEgUXVhZE9iamVjdCBpbnRvIHRoZSBkZWVwZXN0IGxldmVsIG9mIHRoZSBRdWFkVHJlZSBpdCBiZWxvbmdcbiAgICogQHBhcmFtIHF1YWRPYmplY3Qgb2JqZWN0IHRvIGluc2VydCBpbnRvIHRoZSBRdWFkVHJlZVxuICAgKi9cbiAgaW5zZXJ0KHF1YWRPYmplY3Q6IFF1YWRPYmplY3QpOiB2b2lkIHtcbiAgICB0aGlzLnF1YWRPYmplY3RzLnB1c2gocXVhZE9iamVjdCkgLy8gdXBkYXRlIG1hc3RlciBvYmplY3QgYXJyYXlcbiAgICB0aGlzLnF1YWRSb290Lmluc2VydChxdWFkT2JqZWN0KSAvLyBkZXNjZW5kIG9iamVjdCBpbnRvIHRyZWVcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=