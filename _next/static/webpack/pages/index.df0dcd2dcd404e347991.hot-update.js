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
  function QuadTree(rect, objectArray) {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuadTree);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "bounds", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "quadRoot", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "quadObjects", void 0);

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

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(QuadTree, "maxDepth", 10);

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(QuadTree, "capacity", 2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcXVhZHRyZWUudHMiXSwibmFtZXMiOlsiUXVhZE5vZGUiLCJib3VuZHMiLCJkZXB0aCIsIkFycmF5IiwicXVhZE9iamVjdHMiLCJsZWF2ZXMiLCJmb3JFYWNoIiwibGVhZiIsImNsZWFyIiwicXVhZE5vZGVQcm9jZWR1cmUiLCJwcm9jZXNzIiwibWlkVyIsInciLCJtaWRIIiwiaCIsIm5ld0RlcHRoIiwiUmVjdCIsIngiLCJ5Iiwib2JqZWN0IiwiaW5zZXJ0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInF1YWRPYmplY3QiLCJpbnNpZGVSZWN0IiwiUXVhZFRyZWUiLCJtYXhEZXB0aCIsInB1c2giLCJsZW5ndGgiLCJjYXBhY2l0eSIsInN1YmRpdmlkZSIsInJlY3QiLCJvYmplY3RBcnJheSIsInF1YWRSb290Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTUEsUUFBYjtBQUtFLG9CQUFZQyxNQUFaLEVBQTBCQyxLQUExQixFQUF5QztBQUFBOztBQUFBOztBQUFBOztBQUFBLG1IQUZwQixJQUFJQyxLQUFKLEVBRW9COztBQUFBOztBQUN2QyxTQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7O0FBWkE7QUFBQTtBQUFBLDRCQWFnQjtBQUFBOztBQUNaLFdBQUtFLFdBQUwsR0FBbUIsSUFBSUQsS0FBSixFQUFuQjtBQUNBLDJCQUFLRSxNQUFMLDhEQUFhQyxPQUFiLENBQXFCLFVBQUNDLElBQUQ7QUFBQSxlQUFvQkEsSUFBSSxDQUFDQyxLQUFMLEVBQXBCO0FBQUEsT0FBckI7QUFDQSxXQUFLSCxNQUFMLEdBQWMsSUFBZDtBQUNEO0FBRUQ7QUFDRjtBQUNBOztBQXJCQTtBQUFBO0FBQUEsNEJBc0JVSSxpQkF0QlYsRUFzQmlF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RU8sQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZjBkY2QyZGNkNDA0ZTM0Nzk5MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVjdCB9IGZyb20gJy4vcGh5c2ljcydcblxuZXhwb3J0IGludGVyZmFjZSBRdWFkT2JqZWN0IHtcbiAgaW5zaWRlUmVjdDogKHJlY3Q6IFJlY3QpID0+IGJvb2xlYW4gLy8gd2hldGhlciB0aGUgb2JqZWN0IGluIGZ1bGx5IGNvbnRhaW5lZCB3aXRoaW4gYSBSZWN0XG59XG5cbi8qKlxuICogTm9kZSBvZiBhIFF1YWRUcmVlXG4gKiBjYXJyaWVzIGRhdGEgYWJvdXQgaXRzOlxuICogIC0gYm91bmRzXG4gKiAgLSBkZXB0aFxuICogIC0gY2hpbGRyZW5cbiAqICAtIGNvbnRhaW5pbmcgb2JqZWN0c1xuICovXG5leHBvcnQgY2xhc3MgUXVhZE5vZGUge1xuICBwdWJsaWMgYm91bmRzOiBSZWN0XG4gIHB1YmxpYyBsZWF2ZXMhOiBBcnJheTxRdWFkTm9kZT4gfCBudWxsXG4gIHB1YmxpYyBxdWFkT2JqZWN0cyA9IG5ldyBBcnJheTxRdWFkT2JqZWN0PigpXG4gIHByaXZhdGUgZGVwdGg6IG51bWJlclxuICBjb25zdHJ1Y3Rvcihib3VuZHM6IFJlY3QsIGRlcHRoOiBudW1iZXIpIHtcbiAgICB0aGlzLmJvdW5kcyA9IGJvdW5kc1xuICAgIHRoaXMuZGVwdGggPSBkZXB0aFxuICB9XG5cbiAgLyoqXG4gICAqIGNsZWFudXAgcmVmZXJlbmNlcyBkb3duIHRoZSBRdWFkVHJlZSByZWN1cnNpdmVseVxuICAgKi9cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5xdWFkT2JqZWN0cyA9IG5ldyBBcnJheTxRdWFkT2JqZWN0PigpXG4gICAgdGhpcy5sZWF2ZXM/LmZvckVhY2goKGxlYWY6IFF1YWROb2RlKSA9PiBsZWFmLmNsZWFyKCkpXG4gICAgdGhpcy5sZWF2ZXMgPSBudWxsXG4gIH1cblxuICAvKipcbiAgICogcHJvY2VzcyBhbnkgdXBkYXRlcyByZWN1cnNpdmVseSBkb3duIHRoZSB0cmVlXG4gICAqL1xuICBwcm9jZXNzKHF1YWROb2RlUHJvY2VkdXJlOiAocXVhZE5vZGU6IFF1YWROb2RlKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgcXVhZE5vZGVQcm9jZWR1cmUodGhpcylcbiAgICB0aGlzLmxlYXZlcz8uZm9yRWFjaCgobGVhZjogUXVhZE5vZGUpID0+IGxlYWYucHJvY2VzcyhxdWFkTm9kZVByb2NlZHVyZSkpXG4gIH1cblxuICAvKipcbiAgICogSW5pdGlhbGl6ZSB0aGUgc3ViLXF1YWRzIG9mIHRoZSBjdXJyZW50IE5vZGUsXG4gICAqIGFuZCB0ZXN0IGlmIGFueSBvYmplY3QgZml0IGludG8gYSBkZWVwZXIgcXVhZFxuICAgKi9cbiAgc3ViZGl2aWRlKCk6IHZvaWQge1xuICAgIC8vIGNhbGN1bGF0ZSBuZXcgYm91bmRzIG9mIHN1Yi1xdWFkc1xuICAgIGNvbnN0IG1pZFcgPSB0aGlzLmJvdW5kcy53IC8gMlxuICAgIGNvbnN0IG1pZEggPSB0aGlzLmJvdW5kcy5oIC8gMlxuICAgIGNvbnN0IG5ld0RlcHRoID0gdGhpcy5kZXB0aCArIDFcbiAgICB0aGlzLmxlYXZlcyA9IFtcbiAgICAgIG5ldyBRdWFkTm9kZShuZXcgUmVjdCh0aGlzLmJvdW5kcy54LCB0aGlzLmJvdW5kcy55LCBtaWRXLCBtaWRIKSwgbmV3RGVwdGgpLFxuICAgICAgbmV3IFF1YWROb2RlKG5ldyBSZWN0KHRoaXMuYm91bmRzLnggKyBtaWRXLCB0aGlzLmJvdW5kcy55LCBtaWRXLCBtaWRIKSwgbmV3RGVwdGgpLFxuICAgICAgbmV3IFF1YWROb2RlKG5ldyBSZWN0KHRoaXMuYm91bmRzLngsIHRoaXMuYm91bmRzLnkgKyBtaWRILCBtaWRXLCBtaWRIKSwgbmV3RGVwdGgpLFxuICAgICAgbmV3IFF1YWROb2RlKG5ldyBSZWN0KHRoaXMuYm91bmRzLnggKyBtaWRXLCB0aGlzLmJvdW5kcy55ICsgbWlkSCwgbWlkVywgbWlkSCksIG5ld0RlcHRoKVxuICAgIF1cblxuICAgIC8qKlxuICAgICAqIHBsYWNlIGN1cnJlbnQgcGFydGljbGVzIGludG8gbmV3ZWx5IGNyZWF0ZWQgZ3JvdXBzXG4gICAgICogcmVtb3ZlcyB0aGUgb2JqZWN0IGZyb20gdGhlIGN1cnJlbnQgYXJyYXkgaWYgaXQgZml0cyBpbnRvIGFub3RoZXIgbm9kZVxuICAgICAqL1xuICAgIHRoaXMucXVhZE9iamVjdHMuZm9yRWFjaCgob2JqZWN0OiBRdWFkT2JqZWN0KSA9PiB7XG4gICAgICB0aGlzLmxlYXZlcz8uZm9yRWFjaCgobGVhZjogUXVhZE5vZGUpID0+IHtcbiAgICAgICAgaWYgKGxlYWYuaW5zZXJ0KG9iamVjdCkpXG4gICAgICAgICAgdGhpcy5xdWFkT2JqZWN0cy5zcGxpY2UodGhpcy5xdWFkT2JqZWN0cy5pbmRleE9mKG9iamVjdCksIDEpIC8vIHJlbW92ZSBmcm9tIHRoZSBcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRzIGFuIG9iamVjdCBpbnRvIHRoZSBkZWVwZXN0IHBvaW50IG9mIHRoZSBRdWFkVHJlZSBpdCBiZWxvbmdzXG4gICAqIHJldHVybnMgd2hldGhlciB0aGUgb2JqZWN0IGZpdCBpbnRvIHRoZSBib3VuZHMgb2YgdGhlIGN1cnJlbnRseSBhdHRlbXB0ZWQgUXVhZE5vZGUgXG4gICAqL1xuICBpbnNlcnQocXVhZE9iamVjdDogUXVhZE9iamVjdCk6IGJvb2xlYW4ge1xuICAgIC8vIHRlc3QgaWYgdGhlIHF1YWQgYm91bmRzIGNvbnRhaW5zIHRoZSBvYmplY3RcbiAgICBpZiAoIXF1YWRPYmplY3QuaW5zaWRlUmVjdCh0aGlzLmJvdW5kcykpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIC8vIHRlc3QgaWYgdGhlIG1heCB0cmVlIGRlcHRoIGhhcyBiZWVuIHJlYWNoZWRcbiAgICBpZiAodGhpcy5kZXB0aCA+IFF1YWRUcmVlLm1heERlcHRoKVxuICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAvLyBOb2RlIGlzIHNhZmUgdG8gcHVzaCBvYmplY3QgaW50b1xuICAgIC8vIGZpcnN0IHRyeSB0aGUgbGVhdmVzIFxuICAgIGlmICh0aGlzLmxlYXZlcylcbiAgICAgIGZvciAoY29uc3QgbGVhZiBvZiB0aGlzLmxlYXZlcylcbiAgICAgICAgaWYgKGxlYWYuaW5zZXJ0KHF1YWRPYmplY3QpKVxuICAgICAgICAgIHJldHVybiB0cnVlXG5cbiAgICAvLyBpZiBubyBsZWF2ZXMsIG9yIGxlYXZlcyBmYWlsIHRvIGNvdmVyIG9iamVjdCwgcHVzaCBjdXJyZW50IG5vZGVcbiAgICB0aGlzLnF1YWRPYmplY3RzLnB1c2gocXVhZE9iamVjdClcblxuICAgIC8vIHRlc3QgaWYgbWF4IGNhcGFjaXR5IGZvciB0aGUgbm9kZSBoYXMgYmVlbiByZWFjaGVkXG4gICAgaWYgKCF0aGlzLmxlYXZlcyAmJiB0aGlzLnF1YWRPYmplY3RzLmxlbmd0aCA+IFF1YWRUcmVlLmNhcGFjaXR5KVxuICAgICAgdGhpcy5zdWJkaXZpZGUoKSAvLyBkaXZpZGUgYW5kIHJlZGlzdHJpYnV0ZVxuXG4gICAgLy8gb2JqZWN0IGhhcyBiZWVuIHBsYWNlIGludG8gYW4gYXJyYXkgYnkgdGhpcyBwb2ludFxuICAgIHJldHVybiB0cnVlXG4gIH1cbn1cblxuLyoqXG4gKiBSb290IFJlZmVyZW5jZSBmb3IgYSBRdWFkVHJlZVxuICogcHJpbWFyeSBpbnRlcmZhY2UgZm9yIG9wZXJhdGlvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIFF1YWRUcmVlIHtcbiAgc3RhdGljIG1heERlcHRoID0gMTBcbiAgc3RhdGljIGNhcGFjaXR5ID0gMlxuICBwdWJsaWMgYm91bmRzOiBSZWN0XG4gIHB1YmxpYyBxdWFkUm9vdDogUXVhZE5vZGVcbiAgcHVibGljIHF1YWRPYmplY3RzOiBBcnJheTxRdWFkT2JqZWN0PlxuICBjb25zdHJ1Y3RvcihyZWN0OiBSZWN0LCBvYmplY3RBcnJheTogQXJyYXk8UXVhZE9iamVjdD4pIHtcbiAgICB0aGlzLmJvdW5kcyA9IHJlY3RcbiAgICB0aGlzLnF1YWRPYmplY3RzID0gb2JqZWN0QXJyYXlcbiAgICB0aGlzLnF1YWRSb290ID0gbmV3IFF1YWROb2RlKHRoaXMuYm91bmRzLCAwKVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIFF1YWRUcmVlIHdpbGwgbW9zdCByZWNlbnQgb2JqZWN0IHBvc2l0aW9ucyBhbmQgdGhlbiByZWN1cnNpdmVseSBjYWxscyBhIHByb2NlZHVyZVxuICAgKiBAcGFyYW0gcXVhZE5vZGVQcm9jZWR1cmUgZnVuY3Rpb24gdG8gY2FsbCBvbiBlYWNoIG5vZGUgb2YgdGhlIHRyZWVcbiAgICovXG4gIHByb2Nlc3MocXVhZE5vZGVQcm9jZWR1cmU6IChxdWFkTm9kZTogUXVhZE5vZGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLnF1YWRSb290LmNsZWFyKCkgLy8gcmVmcmVzaCB0aGUgUXVhZE5vZGVzXG4gICAgdGhpcy5xdWFkT2JqZWN0cy5mb3JFYWNoKChxdWFkT2JqZWN0OiBRdWFkT2JqZWN0KSA9PiB0aGlzLnF1YWRSb290Lmluc2VydChxdWFkT2JqZWN0KSkgLy8gaW5zZXJ0IHVwZGF0ZWQgb2JqZWN0c1xuICAgIHRoaXMucXVhZFJvb3QucHJvY2VzcyhxdWFkTm9kZVByb2NlZHVyZSkgLy8gY2FsbCBhbnkgdXNlci1kZWZpbmVkLCBwZXItbm9kZSBwcm9jZWR1cmVcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnNlcnRzIGEgUXVhZE9iamVjdCBpbnRvIHRoZSBkZWVwZXN0IGxldmVsIG9mIHRoZSBRdWFkVHJlZSBpdCBiZWxvbmdcbiAgICogQHBhcmFtIHF1YWRPYmplY3Qgb2JqZWN0IHRvIGluc2VydCBpbnRvIHRoZSBRdWFkVHJlZVxuICAgKi9cbiAgaW5zZXJ0KHF1YWRPYmplY3Q6IFF1YWRPYmplY3QpOiB2b2lkIHtcbiAgICB0aGlzLnF1YWRPYmplY3RzLnB1c2gocXVhZE9iamVjdCkgLy8gdXBkYXRlIG1hc3RlciBvYmplY3QgYXJyYXlcbiAgICB0aGlzLnF1YWRSb290Lmluc2VydChxdWFkT2JqZWN0KSAvLyBkZXNjZW5kIG9iamVjdCBpbnRvIHRyZWVcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=