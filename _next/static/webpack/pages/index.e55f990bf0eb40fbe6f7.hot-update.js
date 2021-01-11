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
  // less than 20 pixels on a 1000x1000 grid
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

Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(QuadTree, "maxDepth", Math.round(Math.log2(1000 / 20) / 2));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvcXVhZHRyZWUudHMiXSwibmFtZXMiOlsiUXVhZE5vZGUiLCJib3VuZHMiLCJkZXB0aCIsIkFycmF5IiwicXVhZE9iamVjdHMiLCJsZWF2ZXMiLCJmb3JFYWNoIiwibGVhZiIsImNsZWFyIiwicXVhZE5vZGVQcm9jZWR1cmUiLCJwcm9jZXNzIiwibWlkVyIsInciLCJtaWRIIiwiaCIsIm5ld0RlcHRoIiwiUmVjdCIsIngiLCJ5Iiwib2JqZWN0IiwiaW5zZXJ0Iiwic3BsaWNlIiwiaW5kZXhPZiIsInF1YWRPYmplY3QiLCJpbnNpZGVSZWN0IiwiUXVhZFRyZWUiLCJtYXhEZXB0aCIsInB1c2giLCJsZW5ndGgiLCJjYXBhY2l0eSIsInN1YmRpdmlkZSIsInJlY3QiLCJvYmplY3RBcnJheSIsInF1YWRSb290IiwiTWF0aCIsInJvdW5kIiwibG9nMiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLFFBQWI7QUFLRSxvQkFBWUMsTUFBWixFQUEwQkMsS0FBMUIsRUFBeUM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxtSEFGcEIsSUFBSUMsS0FBSixFQUVvQjs7QUFBQTs7QUFDdkMsU0FBS0YsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7QUFFRDtBQUNGO0FBQ0E7OztBQVpBO0FBQUE7QUFBQSw0QkFhZ0I7QUFBQTs7QUFDWixXQUFLRSxXQUFMLEdBQW1CLElBQUlELEtBQUosRUFBbkI7QUFDQSwyQkFBS0UsTUFBTCw4REFBYUMsT0FBYixDQUFxQixVQUFDQyxJQUFEO0FBQUEsZUFBb0JBLElBQUksQ0FBQ0MsS0FBTCxFQUFwQjtBQUFBLE9BQXJCO0FBQ0EsV0FBS0gsTUFBTCxHQUFjLElBQWQ7QUFDRDtBQUVEO0FBQ0Y7QUFDQTs7QUFyQkE7QUFBQTtBQUFB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MEZBQWFFLFEsY0FFT1MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsSUFBTCxDQUFVLE9BQU8sRUFBakIsSUFBdUIsQ0FBbEMsQzs7MEZBRlBYLFEsY0FHTyxFIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU1NWY5OTBiZjBlYjQwZmJlNmY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWN0IH0gZnJvbSAnLi9waHlzaWNzJ1xuXG5leHBvcnQgaW50ZXJmYWNlIFF1YWRPYmplY3Qge1xuICBpbnNpZGVSZWN0OiAocmVjdDogUmVjdCkgPT4gYm9vbGVhbiAvLyB3aGV0aGVyIHRoZSBvYmplY3QgaW4gZnVsbHkgY29udGFpbmVkIHdpdGhpbiBhIFJlY3Rcbn1cblxuLyoqXG4gKiBOb2RlIG9mIGEgUXVhZFRyZWVcbiAqIGNhcnJpZXMgZGF0YSBhYm91dCBpdHM6XG4gKiAgLSBib3VuZHNcbiAqICAtIGRlcHRoXG4gKiAgLSBjaGlsZHJlblxuICogIC0gY29udGFpbmluZyBvYmplY3RzXG4gKi9cbmV4cG9ydCBjbGFzcyBRdWFkTm9kZSB7XG4gIHB1YmxpYyBib3VuZHM6IFJlY3RcbiAgcHVibGljIGxlYXZlcyE6IEFycmF5PFF1YWROb2RlPiB8IG51bGxcbiAgcHVibGljIHF1YWRPYmplY3RzID0gbmV3IEFycmF5PFF1YWRPYmplY3Q+KClcbiAgcHJpdmF0ZSBkZXB0aDogbnVtYmVyXG4gIGNvbnN0cnVjdG9yKGJvdW5kczogUmVjdCwgZGVwdGg6IG51bWJlcikge1xuICAgIHRoaXMuYm91bmRzID0gYm91bmRzXG4gICAgdGhpcy5kZXB0aCA9IGRlcHRoXG4gIH1cblxuICAvKipcbiAgICogY2xlYW51cCByZWZlcmVuY2VzIGRvd24gdGhlIFF1YWRUcmVlIHJlY3Vyc2l2ZWx5XG4gICAqL1xuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLnF1YWRPYmplY3RzID0gbmV3IEFycmF5PFF1YWRPYmplY3Q+KClcbiAgICB0aGlzLmxlYXZlcz8uZm9yRWFjaCgobGVhZjogUXVhZE5vZGUpID0+IGxlYWYuY2xlYXIoKSlcbiAgICB0aGlzLmxlYXZlcyA9IG51bGxcbiAgfVxuXG4gIC8qKlxuICAgKiBwcm9jZXNzIGFueSB1cGRhdGVzIHJlY3Vyc2l2ZWx5IGRvd24gdGhlIHRyZWVcbiAgICovXG4gIHByb2Nlc3MocXVhZE5vZGVQcm9jZWR1cmU6IChxdWFkTm9kZTogUXVhZE5vZGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBxdWFkTm9kZVByb2NlZHVyZSh0aGlzKVxuICAgIHRoaXMubGVhdmVzPy5mb3JFYWNoKChsZWFmOiBRdWFkTm9kZSkgPT4gbGVhZi5wcm9jZXNzKHF1YWROb2RlUHJvY2VkdXJlKSlcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplIHRoZSBzdWItcXVhZHMgb2YgdGhlIGN1cnJlbnQgTm9kZSxcbiAgICogYW5kIHRlc3QgaWYgYW55IG9iamVjdCBmaXQgaW50byBhIGRlZXBlciBxdWFkXG4gICAqL1xuICBzdWJkaXZpZGUoKTogdm9pZCB7XG4gICAgLy8gY2FsY3VsYXRlIG5ldyBib3VuZHMgb2Ygc3ViLXF1YWRzXG4gICAgY29uc3QgbWlkVyA9IHRoaXMuYm91bmRzLncgLyAyXG4gICAgY29uc3QgbWlkSCA9IHRoaXMuYm91bmRzLmggLyAyXG4gICAgY29uc3QgbmV3RGVwdGggPSB0aGlzLmRlcHRoICsgMVxuICAgIHRoaXMubGVhdmVzID0gW1xuICAgICAgbmV3IFF1YWROb2RlKG5ldyBSZWN0KHRoaXMuYm91bmRzLngsIHRoaXMuYm91bmRzLnksIG1pZFcsIG1pZEgpLCBuZXdEZXB0aCksXG4gICAgICBuZXcgUXVhZE5vZGUobmV3IFJlY3QodGhpcy5ib3VuZHMueCArIG1pZFcsIHRoaXMuYm91bmRzLnksIG1pZFcsIG1pZEgpLCBuZXdEZXB0aCksXG4gICAgICBuZXcgUXVhZE5vZGUobmV3IFJlY3QodGhpcy5ib3VuZHMueCwgdGhpcy5ib3VuZHMueSArIG1pZEgsIG1pZFcsIG1pZEgpLCBuZXdEZXB0aCksXG4gICAgICBuZXcgUXVhZE5vZGUobmV3IFJlY3QodGhpcy5ib3VuZHMueCArIG1pZFcsIHRoaXMuYm91bmRzLnkgKyBtaWRILCBtaWRXLCBtaWRIKSwgbmV3RGVwdGgpXG4gICAgXVxuXG4gICAgLyoqXG4gICAgICogcGxhY2UgY3VycmVudCBwYXJ0aWNsZXMgaW50byBuZXdlbHkgY3JlYXRlZCBncm91cHNcbiAgICAgKiByZW1vdmVzIHRoZSBvYmplY3QgZnJvbSB0aGUgY3VycmVudCBhcnJheSBpZiBpdCBmaXRzIGludG8gYW5vdGhlciBub2RlXG4gICAgICovXG4gICAgdGhpcy5xdWFkT2JqZWN0cy5mb3JFYWNoKChvYmplY3Q6IFF1YWRPYmplY3QpID0+IHtcbiAgICAgIHRoaXMubGVhdmVzPy5mb3JFYWNoKChsZWFmOiBRdWFkTm9kZSkgPT4ge1xuICAgICAgICBpZiAobGVhZi5pbnNlcnQob2JqZWN0KSlcbiAgICAgICAgICB0aGlzLnF1YWRPYmplY3RzLnNwbGljZSh0aGlzLnF1YWRPYmplY3RzLmluZGV4T2Yob2JqZWN0KSwgMSkgLy8gcmVtb3ZlIGZyb20gdGhlIFxuICAgICAgfSlcbiAgICB9KVxuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgYW4gb2JqZWN0IGludG8gdGhlIGRlZXBlc3QgcG9pbnQgb2YgdGhlIFF1YWRUcmVlIGl0IGJlbG9uZ3NcbiAgICogcmV0dXJucyB3aGV0aGVyIHRoZSBvYmplY3QgZml0IGludG8gdGhlIGJvdW5kcyBvZiB0aGUgY3VycmVudGx5IGF0dGVtcHRlZCBRdWFkTm9kZSBcbiAgICovXG4gIGluc2VydChxdWFkT2JqZWN0OiBRdWFkT2JqZWN0KTogYm9vbGVhbiB7XG4gICAgLy8gdGVzdCBpZiB0aGUgcXVhZCBib3VuZHMgY29udGFpbnMgdGhlIG9iamVjdFxuICAgIGlmICghcXVhZE9iamVjdC5pbnNpZGVSZWN0KHRoaXMuYm91bmRzKSlcbiAgICAgIHJldHVybiBmYWxzZVxuXG4gICAgLy8gdGVzdCBpZiB0aGUgbWF4IHRyZWUgZGVwdGggaGFzIGJlZW4gcmVhY2hlZFxuICAgIGlmICh0aGlzLmRlcHRoID4gUXVhZFRyZWUubWF4RGVwdGgpXG4gICAgICByZXR1cm4gZmFsc2VcblxuICAgIC8vIE5vZGUgaXMgc2FmZSB0byBwdXNoIG9iamVjdCBpbnRvXG4gICAgLy8gZmlyc3QgdHJ5IHRoZSBsZWF2ZXMgXG4gICAgaWYgKHRoaXMubGVhdmVzKVxuICAgICAgZm9yIChjb25zdCBsZWFmIG9mIHRoaXMubGVhdmVzKVxuICAgICAgICBpZiAobGVhZi5pbnNlcnQocXVhZE9iamVjdCkpXG4gICAgICAgICAgcmV0dXJuIHRydWVcblxuICAgIC8vIGlmIG5vIGxlYXZlcywgb3IgbGVhdmVzIGZhaWwgdG8gY292ZXIgb2JqZWN0LCBwdXNoIGN1cnJlbnQgbm9kZVxuICAgIHRoaXMucXVhZE9iamVjdHMucHVzaChxdWFkT2JqZWN0KVxuXG4gICAgLy8gdGVzdCBpZiBtYXggY2FwYWNpdHkgZm9yIHRoZSBub2RlIGhhcyBiZWVuIHJlYWNoZWRcbiAgICBpZiAoIXRoaXMubGVhdmVzICYmIHRoaXMucXVhZE9iamVjdHMubGVuZ3RoID4gUXVhZFRyZWUuY2FwYWNpdHkpXG4gICAgICB0aGlzLnN1YmRpdmlkZSgpIC8vIGRpdmlkZSBhbmQgcmVkaXN0cmlidXRlXG5cbiAgICAvLyBvYmplY3QgaGFzIGJlZW4gcGxhY2UgaW50byBhbiBhcnJheSBieSB0aGlzIHBvaW50XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufVxuXG4vKipcbiAqIFJvb3QgUmVmZXJlbmNlIGZvciBhIFF1YWRUcmVlXG4gKiBwcmltYXJ5IGludGVyZmFjZSBmb3Igb3BlcmF0aW9uc1xuICovXG5leHBvcnQgY2xhc3MgUXVhZFRyZWUge1xuICAvLyBsZXNzIHRoYW4gMjAgcGl4ZWxzIG9uIGEgMTAwMHgxMDAwIGdyaWRcbiAgc3RhdGljIG1heERlcHRoID0gTWF0aC5yb3VuZChNYXRoLmxvZzIoMTAwMCAvIDIwKSAvIDIpXG4gIHN0YXRpYyBjYXBhY2l0eSA9IDEwXG4gIHB1YmxpYyBib3VuZHM6IFJlY3RcbiAgcHVibGljIHF1YWRSb290OiBRdWFkTm9kZVxuICBwdWJsaWMgcXVhZE9iamVjdHM6IEFycmF5PFF1YWRPYmplY3Q+XG4gIGNvbnN0cnVjdG9yKHJlY3Q6IFJlY3QsIG9iamVjdEFycmF5OiBBcnJheTxRdWFkT2JqZWN0Pikge1xuICAgIHRoaXMuYm91bmRzID0gcmVjdFxuICAgIHRoaXMucXVhZE9iamVjdHMgPSBvYmplY3RBcnJheVxuICAgIHRoaXMucXVhZFJvb3QgPSBuZXcgUXVhZE5vZGUodGhpcy5ib3VuZHMsIDApXG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgUXVhZFRyZWUgd2lsbCBtb3N0IHJlY2VudCBvYmplY3QgcG9zaXRpb25zIGFuZCB0aGVuIHJlY3Vyc2l2ZWx5IGNhbGxzIGEgcHJvY2VkdXJlXG4gICAqIEBwYXJhbSBxdWFkTm9kZVByb2NlZHVyZSBmdW5jdGlvbiB0byBjYWxsIG9uIGVhY2ggbm9kZSBvZiB0aGUgdHJlZVxuICAgKi9cbiAgcHJvY2VzcyhxdWFkTm9kZVByb2NlZHVyZTogKHF1YWROb2RlOiBRdWFkTm9kZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMucXVhZFJvb3QuY2xlYXIoKSAvLyByZWZyZXNoIHRoZSBRdWFkTm9kZXNcbiAgICB0aGlzLnF1YWRPYmplY3RzLmZvckVhY2goKHF1YWRPYmplY3Q6IFF1YWRPYmplY3QpID0+IHRoaXMucXVhZFJvb3QuaW5zZXJ0KHF1YWRPYmplY3QpKSAvLyBpbnNlcnQgdXBkYXRlZCBvYmplY3RzXG4gICAgdGhpcy5xdWFkUm9vdC5wcm9jZXNzKHF1YWROb2RlUHJvY2VkdXJlKSAvLyBjYWxsIGFueSB1c2VyLWRlZmluZWQsIHBlci1ub2RlIHByb2NlZHVyZVxuICB9XG5cbiAgLyoqXG4gICAqIEluc2VydHMgYSBRdWFkT2JqZWN0IGludG8gdGhlIGRlZXBlc3QgbGV2ZWwgb2YgdGhlIFF1YWRUcmVlIGl0IGJlbG9uZ1xuICAgKiBAcGFyYW0gcXVhZE9iamVjdCBvYmplY3QgdG8gaW5zZXJ0IGludG8gdGhlIFF1YWRUcmVlXG4gICAqL1xuICBpbnNlcnQocXVhZE9iamVjdDogUXVhZE9iamVjdCk6IHZvaWQge1xuICAgIHRoaXMucXVhZE9iamVjdHMucHVzaChxdWFkT2JqZWN0KSAvLyB1cGRhdGUgbWFzdGVyIG9iamVjdCBhcnJheVxuICAgIHRoaXMucXVhZFJvb3QuaW5zZXJ0KHF1YWRPYmplY3QpIC8vIGRlc2NlbmQgb2JqZWN0IGludG8gdHJlZVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==