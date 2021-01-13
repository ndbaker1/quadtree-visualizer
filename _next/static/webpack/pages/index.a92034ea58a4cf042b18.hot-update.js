webpackHotUpdate_N_E("pages/index",{

/***/ "./components/simulation-canvas.tsx":
/*!******************************************!*\
  !*** ./components/simulation-canvas.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimulationCanvas; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _simulation_canvas_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./simulation-canvas.module.scss */ "./components/simulation-canvas.module.scss");
/* harmony import */ var _simulation_canvas_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_simulation_canvas_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils_quadtree__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/quadtree */ "./utils/quadtree.ts");
/* harmony import */ var _utils_shapes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/shapes */ "./utils/shapes.ts");
/* harmony import */ var _utils_circlebody__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../utils/circlebody */ "./utils/circlebody.ts");
/* harmony import */ var _utils_vector2d__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../utils/vector2d */ "./utils/vector2d.ts");








var _jsxFileName = "C:\\Users\\SpicyRamenChef\\Desktop\\GitRepos\\quadtree-visualizer\\components\\simulation-canvas.tsx";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var time = function time() {
  return new Date().getTime();
};

var SimulationCanvas = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(SimulationCanvas, _Component);

  var _super = _createSuper(SimulationCanvas);

  function SimulationCanvas(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, SimulationCanvas);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "timestamp", time());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "dragVector", {
      start: new _utils_vector2d__WEBPACK_IMPORTED_MODULE_13__["Vector2D"](),
      end: new _utils_vector2d__WEBPACK_IMPORTED_MODULE_13__["Vector2D"](),
      isDragging: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "stopLoop", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "quadTree", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "canvasBounds", void 0);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "bodies", new Array());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "canvasRef", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_8__["createRef"])());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "canvasDivRef", /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_8__["createRef"])());

    _this.stopLoop = false; // bind for context in animation callback

    _this.renderLoop = _this.renderLoop.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.mouseDown = _this.mouseDown.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.mouseUp = _this.mouseUp.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    _this.mouseDrag = _this.mouseDrag.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SimulationCanvas, [{
    key: "updateVars",
    value: function updateVars(vars) {
      if ('capacity' in vars) _utils_quadtree__WEBPACK_IMPORTED_MODULE_10__["QuadTree"].capacity = vars.capacity === undefined ? 1 : vars.capacity;
      if ('maxDepth' in vars) _utils_quadtree__WEBPACK_IMPORTED_MODULE_10__["QuadTree"].maxDepth = vars.maxDepth === undefined ? 1 : vars.maxDepth;
    }
  }, {
    key: "randomPointsInBounds",
    value: function randomPointsInBounds() {
      return new _utils_vector2d__WEBPACK_IMPORTED_MODULE_13__["Vector2D"](this.props.radius + (this.canvasBounds.w - this.props.radius) * Math.random(), this.props.radius + (this.canvasBounds.h - this.props.radius) * Math.random());
    }
  }, {
    key: "clearBodies",
    value: function clearBodies() {
      this.bodies = new Array();
      this.quadTree.quadObjects = this.bodies;
    }
  }, {
    key: "addBody",
    value: function addBody(position, velocity, radius) {
      this.quadTree.insert(new _utils_circlebody__WEBPACK_IMPORTED_MODULE_12__["CircleBody"](position, velocity, radius, this.props.physicsEnvironment));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.stopLoop = true;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.onresize = function () {
        return _this2.setupQuadTree();
      };

      this.setupQuadTree();
      this.renderLoop();
    }
  }, {
    key: "setupQuadTree",
    value: function setupQuadTree() {
      var _this$canvasDivRef;

      if ((_this$canvasDivRef = this.canvasDivRef) !== null && _this$canvasDivRef !== void 0 && _this$canvasDivRef.current) {
        if (this.canvasRef.current) {
          var context = this.canvasRef.current.getContext('2d');

          if (context) {
            var _this$canvasRef$curre, _this$canvasRef$curre2;

            var dimensions = Math.min(this.canvasDivRef.current.clientWidth, this.canvasDivRef.current.clientHeight);
            context.canvas.width = dimensions;
            context.canvas.height = dimensions;
            this.canvasBounds = new _utils_shapes__WEBPACK_IMPORTED_MODULE_11__["Rect"](0, 0, (_this$canvasRef$curre = this.canvasRef.current) === null || _this$canvasRef$curre === void 0 ? void 0 : _this$canvasRef$curre.width, (_this$canvasRef$curre2 = this.canvasRef.current) === null || _this$canvasRef$curre2 === void 0 ? void 0 : _this$canvasRef$curre2.height);
            this.quadTree = new _utils_quadtree__WEBPACK_IMPORTED_MODULE_10__["QuadTree"](this.canvasBounds, this.bodies);
          }
        }
      }
    }
  }, {
    key: "renderSimulation",
    value: function renderSimulation(canvasContext) {
      canvasContext.fillStyle = _simulation_canvas_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.color1;
      canvasContext.fillRect(0, 0, this.canvasBounds.w, this.canvasBounds.h);
      canvasContext.strokeStyle = _simulation_canvas_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.color4;
      this.bodies.forEach(function (particle) {
        canvasContext.beginPath();
        canvasContext.arc(particle.position.x, particle.position.y, particle.radius, 0, 2 * Math.PI);
        canvasContext.stroke();
      });

      if (this.dragVector.isDragging) {
        canvasContext.beginPath();
        canvasContext.moveTo(this.dragVector.start.x, this.dragVector.start.y);
        canvasContext.lineTo(this.dragVector.end.x, this.dragVector.end.y);
        canvasContext.stroke();
      }

      function showQuadTrees(quad) {
        var _quad$leaves;

        canvasContext.strokeRect(quad.bounds.x, quad.bounds.y, quad.bounds.w, quad.bounds.h);
        (_quad$leaves = quad.leaves) === null || _quad$leaves === void 0 ? void 0 : _quad$leaves.forEach(function (leaf) {
          return showQuadTrees(leaf);
        });
      }

      if (this.props.showQuads) {
        canvasContext.strokeStyle = _simulation_canvas_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.color3;
        showQuadTrees(this.quadTree.quadRoot);
      }
    }
  }, {
    key: "updateSimulation",
    value: function updateSimulation(delta) {
      var _this3 = this;

      this.bodies.forEach(function (particle) {
        return particle.tick(delta);
      });
      this.quadTree.process(this.quadTreeProcedure());
      this.bodies.forEach(function (particle) {
        return particle.collideBounds(_this3.canvasBounds);
      });
    }
  }, {
    key: "quadTreeProcedure",
    value: function quadTreeProcedure() {
      return function processCollisions(quadNode) {
        var _quadNode$leaves;

        var collisionObject = quadNode.quadObjects; // process current level collisions

        for (var i = 0; i < collisionObject.length; i++) {
          for (var j = i + 1; j < collisionObject.length; j++) {
            collisionObject[i].collide(collisionObject[j]);
          }
        } // process rescursive collisions


        var processLeafCollisions = function processLeafCollisions(leaves) {
          leaves === null || leaves === void 0 ? void 0 : leaves.forEach(function (leaf) {
            collisionObject.forEach(function (object) {
              var leafCollisionObjects = leaf.quadObjects;
              leafCollisionObjects.forEach(function (leafObject) {
                return object.collide(leafObject);
              });
            }); // recurse

            processLeafCollisions(leaf.leaves);
          });
        }; // call on current leaves


        processLeafCollisions(quadNode.leaves); // recurse on following quad nodes

        (_quadNode$leaves = quadNode.leaves) === null || _quadNode$leaves === void 0 ? void 0 : _quadNode$leaves.forEach(function (leaf) {
          return processCollisions(leaf);
        });
      };
    }
  }, {
    key: "renderLoop",
    value: function renderLoop() {
      if (this.stopLoop) return;
      var newtime = time();
      var fps = Math.round(1000 / (newtime - this.timestamp));
      this.timestamp = newtime;
      this.updateSimulation(1 / fps);
      var canvas = this.canvasRef.current;
      var context = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');

      if (context) {
        this.renderSimulation(context);

        if (this.props.showFPS) {
          context.save();
          context.font = '25px Arial';
          context.fillStyle = _simulation_canvas_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.color4;
          context.fillText('FPS: ' + fps, 10, 30);
          context.restore();
        }
      } // request another frame to tick


      requestAnimationFrame(this.renderLoop);
    }
  }, {
    key: "mouseDown",
    value: function mouseDown(e) {
      if (this.canvasRef.current) {
        var _this$canvasRef$curre3, _this$canvasRef$curre4;

        this.dragVector.start = this.dragVector.end = new _utils_vector2d__WEBPACK_IMPORTED_MODULE_13__["Vector2D"](e.clientX - ((_this$canvasRef$curre3 = this.canvasRef.current) === null || _this$canvasRef$curre3 === void 0 ? void 0 : _this$canvasRef$curre3.offsetLeft), e.clientY - ((_this$canvasRef$curre4 = this.canvasRef.current) === null || _this$canvasRef$curre4 === void 0 ? void 0 : _this$canvasRef$curre4.offsetTop));
        this.dragVector.isDragging = true;
      }
    }
  }, {
    key: "mouseDrag",
    value: function mouseDrag(e) {
      var _this$canvasRef$curre5, _this$canvasRef$curre6;

      if (this.dragVector.isDragging && this.canvasRef.current) this.dragVector.end = new _utils_vector2d__WEBPACK_IMPORTED_MODULE_13__["Vector2D"](e.clientX - ((_this$canvasRef$curre5 = this.canvasRef.current) === null || _this$canvasRef$curre5 === void 0 ? void 0 : _this$canvasRef$curre5.offsetLeft), e.clientY - ((_this$canvasRef$curre6 = this.canvasRef.current) === null || _this$canvasRef$curre6 === void 0 ? void 0 : _this$canvasRef$curre6.offsetTop));
    }
  }, {
    key: "mouseUp",
    value: function mouseUp() {
      this.addBody(this.dragVector.start, this.dragVector.start.vectorTo(this.dragVector.end), this.props.radius);
      this.dragVector.isDragging = false;
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _simulation_canvas_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.canvas_container,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          ref: this.canvasDivRef,
          className: _simulation_canvas_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.canvas_wrapper,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("canvas", {
            ref: this.canvasRef,
            onMouseDown: this.mouseDown,
            onMouseUp: this.mouseUp,
            onMouseMove: this.mouseDrag
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 191,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 7
      }, this);
    }
  }]);

  return SimulationCanvas;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaW11bGF0aW9uLWNhbnZhcy50c3giXSwibmFtZXMiOlsidGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiU2ltdWxhdGlvbkNhbnZhcyIsInByb3BzIiwic3RhcnQiLCJWZWN0b3IyRCIsImVuZCIsImlzRHJhZ2dpbmciLCJBcnJheSIsImNyZWF0ZVJlZiIsInN0b3BMb29wIiwicmVuZGVyTG9vcCIsImJpbmQiLCJtb3VzZURvd24iLCJtb3VzZVVwIiwibW91c2VEcmFnIiwidmFycyIsIlF1YWRUcmVlIiwiY2FwYWNpdHkiLCJ1bmRlZmluZWQiLCJtYXhEZXB0aCIsInJhZGl1cyIsImNhbnZhc0JvdW5kcyIsInciLCJNYXRoIiwicmFuZG9tIiwiaCIsImJvZGllcyIsInF1YWRUcmVlIiwicXVhZE9iamVjdHMiLCJwb3NpdGlvbiIsInZlbG9jaXR5IiwiaW5zZXJ0IiwiQ2lyY2xlQm9keSIsInBoeXNpY3NFbnZpcm9ubWVudCIsIndpbmRvdyIsIm9ucmVzaXplIiwic2V0dXBRdWFkVHJlZSIsImNhbnZhc0RpdlJlZiIsImN1cnJlbnQiLCJjYW52YXNSZWYiLCJjb250ZXh0IiwiZ2V0Q29udGV4dCIsImRpbWVuc2lvbnMiLCJtaW4iLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiUmVjdCIsImNhbnZhc0NvbnRleHQiLCJmaWxsU3R5bGUiLCJzdHlsZXMiLCJjb2xvcjEiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwiY29sb3I0IiwiZm9yRWFjaCIsInBhcnRpY2xlIiwiYmVnaW5QYXRoIiwiYXJjIiwieCIsInkiLCJQSSIsInN0cm9rZSIsImRyYWdWZWN0b3IiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzaG93UXVhZFRyZWVzIiwicXVhZCIsInN0cm9rZVJlY3QiLCJib3VuZHMiLCJsZWF2ZXMiLCJsZWFmIiwic2hvd1F1YWRzIiwiY29sb3IzIiwicXVhZFJvb3QiLCJkZWx0YSIsInRpY2siLCJwcm9jZXNzIiwicXVhZFRyZWVQcm9jZWR1cmUiLCJjb2xsaWRlQm91bmRzIiwicHJvY2Vzc0NvbGxpc2lvbnMiLCJxdWFkTm9kZSIsImNvbGxpc2lvbk9iamVjdCIsImkiLCJsZW5ndGgiLCJqIiwiY29sbGlkZSIsInByb2Nlc3NMZWFmQ29sbGlzaW9ucyIsIm9iamVjdCIsImxlYWZDb2xsaXNpb25PYmplY3RzIiwibGVhZk9iamVjdCIsIm5ld3RpbWUiLCJmcHMiLCJyb3VuZCIsInRpbWVzdGFtcCIsInVwZGF0ZVNpbXVsYXRpb24iLCJyZW5kZXJTaW11bGF0aW9uIiwic2hvd0ZQUyIsInNhdmUiLCJmb250IiwiZmlsbFRleHQiLCJyZXN0b3JlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZSIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwiY2xpZW50WSIsIm9mZnNldFRvcCIsImFkZEJvZHkiLCJ2ZWN0b3JUbyIsImNhbnZhc19jb250YWluZXIiLCJjYW52YXNfd3JhcHBlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQU0sSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQU47QUFBQSxDQUFiOztJQUdxQkMsZ0I7Ozs7O0FBU25CLDRCQUFZQyxLQUFaLEVBQTBDO0FBQUE7O0FBQUE7O0FBQ3hDLDhCQUFNQSxLQUFOOztBQUR3QyxvTkFSdEJKLElBQUksRUFRa0I7O0FBQUEscU5BUHJCO0FBQUVLLFdBQUssRUFBRSxJQUFJQyx5REFBSixFQUFUO0FBQXVCQyxTQUFHLEVBQUUsSUFBSUQseURBQUosRUFBNUI7QUFBMENFLGdCQUFVLEVBQUU7QUFBdEQsS0FPcUI7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsaU5BSHpCLElBQUlDLEtBQUosRUFHeUI7O0FBQUEsaU9BRlFD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QUEsaUNBQ0U7QUFBUSxlQUFHLEVBQUUsS0FBSzFFLFNBQWxCO0FBQTZCLHVCQUFXLEVBQUUsS0FBSzNCLFNBQS9DO0FBQTBELHFCQUFTLEVBQUUsS0FBS0MsT0FBMUU7QUFBbUYsdUJBQVcsRUFBRSxLQUFLQztBQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQU9EOzs7O0VBdkwyQ29HLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmE5MjAzNGVhNThhNGNmMDQyYjE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZVJlZiwgUmVmT2JqZWN0LCBNb3VzZUV2ZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2ltdWxhdGlvbi1jYW52YXMubW9kdWxlLnNjc3MnXG5cbmltcG9ydCB7IFF1YWROb2RlLCBRdWFkVHJlZSB9IGZyb20gJy4uL3V0aWxzL3F1YWR0cmVlJ1xuaW1wb3J0IHsgUmVjdCB9IGZyb20gJy4uL3V0aWxzL3NoYXBlcydcbmltcG9ydCB7IENpcmNsZUJvZHkgfSBmcm9tICcuLi91dGlscy9jaXJjbGVib2R5J1xuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuLi91dGlscy92ZWN0b3IyZCdcbmltcG9ydCB7IFBoeXNpY3NFbnZpcm9ubWVudCB9IGZyb20gJy4uL3V0aWxzL3BoeXNpY3MnXG5cbmNvbnN0IHRpbWUgPSAoKSA9PiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbXVsYXRpb25DYW52YXNQcm9wcyB7IHJhZGl1czogbnVtYmVyLCBzaG93RlBTOiBib29sZWFuLCBzaG93UXVhZHM6IGJvb2xlYW4sIHBoeXNpY3NFbnZpcm9ubWVudDogUGh5c2ljc0Vudmlyb25tZW50IH1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXVsYXRpb25DYW52YXMgZXh0ZW5kcyBDb21wb25lbnQ8U2ltdWxhdGlvbkNhbnZhc1Byb3BzPiB7XG4gIHByaXZhdGUgdGltZXN0YW1wID0gdGltZSgpXG4gIHByaXZhdGUgZHJhZ1ZlY3RvciA9IHsgc3RhcnQ6IG5ldyBWZWN0b3IyRCwgZW5kOiBuZXcgVmVjdG9yMkQsIGlzRHJhZ2dpbmc6IGZhbHNlIH1cbiAgcHJpdmF0ZSBzdG9wTG9vcDogYm9vbGVhblxuICBwcml2YXRlIHF1YWRUcmVlITogUXVhZFRyZWVcbiAgcHJpdmF0ZSBjYW52YXNCb3VuZHMhOiBSZWN0XG4gIHByaXZhdGUgYm9kaWVzID0gbmV3IEFycmF5PENpcmNsZUJvZHk+KClcbiAgcHJpdmF0ZSBjYW52YXNSZWY6IFJlZk9iamVjdDxIVE1MQ2FudmFzRWxlbWVudD4gPSBjcmVhdGVSZWYoKVxuICBwcml2YXRlIGNhbnZhc0RpdlJlZjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IGNyZWF0ZVJlZigpXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTaW11bGF0aW9uQ2FudmFzUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0b3BMb29wID0gZmFsc2VcbiAgICAvLyBiaW5kIGZvciBjb250ZXh0IGluIGFuaW1hdGlvbiBjYWxsYmFja1xuICAgIHRoaXMucmVuZGVyTG9vcCA9IHRoaXMucmVuZGVyTG9vcC5iaW5kKHRoaXMpXG4gICAgdGhpcy5tb3VzZURvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpXG4gICAgdGhpcy5tb3VzZVVwID0gdGhpcy5tb3VzZVVwLmJpbmQodGhpcylcbiAgICB0aGlzLm1vdXNlRHJhZyA9IHRoaXMubW91c2VEcmFnLmJpbmQodGhpcylcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVWYXJzKHZhcnM6IHsgY2FwYWNpdHk/OiBudW1iZXIsIG1heERlcHRoPzogbnVtYmVyIH0pOiB2b2lkIHtcbiAgICBpZiAoJ2NhcGFjaXR5JyBpbiB2YXJzKVxuICAgICAgUXVhZFRyZWUuY2FwYWNpdHkgPSB2YXJzLmNhcGFjaXR5ID09PSB1bmRlZmluZWQgPyAxIDogdmFycy5jYXBhY2l0eVxuICAgIGlmICgnbWF4RGVwdGgnIGluIHZhcnMpXG4gICAgICBRdWFkVHJlZS5tYXhEZXB0aCA9IHZhcnMubWF4RGVwdGggPT09IHVuZGVmaW5lZCA/IDEgOiB2YXJzLm1heERlcHRoXG4gIH1cblxuICBwdWJsaWMgcmFuZG9tUG9pbnRzSW5Cb3VuZHMoKTogVmVjdG9yMkQge1xuICAgIHJldHVybiBuZXcgVmVjdG9yMkQoXG4gICAgICB0aGlzLnByb3BzLnJhZGl1cyArICh0aGlzLmNhbnZhc0JvdW5kcy53IC0gdGhpcy5wcm9wcy5yYWRpdXMpICogTWF0aC5yYW5kb20oKSxcbiAgICAgIHRoaXMucHJvcHMucmFkaXVzICsgKHRoaXMuY2FudmFzQm91bmRzLmggLSB0aGlzLnByb3BzLnJhZGl1cykgKiBNYXRoLnJhbmRvbSgpXG4gICAgKVxuICB9XG5cbiAgcHVibGljIGNsZWFyQm9kaWVzKCk6IHZvaWQge1xuICAgIHRoaXMuYm9kaWVzID0gbmV3IEFycmF5PENpcmNsZUJvZHk+KClcbiAgICB0aGlzLnF1YWRUcmVlLnF1YWRPYmplY3RzID0gdGhpcy5ib2RpZXNcbiAgfVxuXG4gIHB1YmxpYyBhZGRCb2R5KHBvc2l0aW9uOiBWZWN0b3IyRCwgdmVsb2NpdHk6IFZlY3RvcjJELCByYWRpdXM6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucXVhZFRyZWUuaW5zZXJ0KG5ldyBDaXJjbGVCb2R5KHBvc2l0aW9uLCB2ZWxvY2l0eSwgcmFkaXVzLCB0aGlzLnByb3BzLnBoeXNpY3NFbnZpcm9ubWVudCkpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BMb29wID0gdHJ1ZVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4gdGhpcy5zZXR1cFF1YWRUcmVlKClcbiAgICB0aGlzLnNldHVwUXVhZFRyZWUoKVxuICAgIHRoaXMucmVuZGVyTG9vcCgpXG4gIH1cblxuICBzZXR1cFF1YWRUcmVlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbnZhc0RpdlJlZj8uY3VycmVudCkge1xuICAgICAgaWYgKHRoaXMuY2FudmFzUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBNYXRoLm1pbih0aGlzLmNhbnZhc0RpdlJlZi5jdXJyZW50LmNsaWVudFdpZHRoLCB0aGlzLmNhbnZhc0RpdlJlZi5jdXJyZW50LmNsaWVudEhlaWdodClcbiAgICAgICAgICBjb250ZXh0LmNhbnZhcy53aWR0aCA9IGRpbWVuc2lvbnNcbiAgICAgICAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBkaW1lbnNpb25zXG4gICAgICAgICAgdGhpcy5jYW52YXNCb3VuZHMgPSBuZXcgUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1JlZi5jdXJyZW50Py53aWR0aCwgdGhpcy5jYW52YXNSZWYuY3VycmVudD8uaGVpZ2h0KVxuICAgICAgICAgIHRoaXMucXVhZFRyZWUgPSBuZXcgUXVhZFRyZWUodGhpcy5jYW52YXNCb3VuZHMsIHRoaXMuYm9kaWVzKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU2ltdWxhdGlvbihjYW52YXNDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICBjYW52YXNDb250ZXh0LmZpbGxTdHlsZSA9IHN0eWxlcy5jb2xvcjFcbiAgICBjYW52YXNDb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzQm91bmRzLncsIHRoaXMuY2FudmFzQm91bmRzLmgpXG4gICAgY2FudmFzQ29udGV4dC5zdHJva2VTdHlsZSA9IHN0eWxlcy5jb2xvcjRcbiAgICB0aGlzLmJvZGllcy5mb3JFYWNoKChwYXJ0aWNsZTogQ2lyY2xlQm9keSkgPT4ge1xuICAgICAgY2FudmFzQ29udGV4dC5iZWdpblBhdGgoKVxuICAgICAgY2FudmFzQ29udGV4dC5hcmMocGFydGljbGUucG9zaXRpb24ueCwgcGFydGljbGUucG9zaXRpb24ueSwgcGFydGljbGUucmFkaXVzLCAwLCAyICogTWF0aC5QSSlcbiAgICAgIGNhbnZhc0NvbnRleHQuc3Ryb2tlKClcbiAgICB9KVxuICAgIGlmICh0aGlzLmRyYWdWZWN0b3IuaXNEcmFnZ2luZykge1xuICAgICAgY2FudmFzQ29udGV4dC5iZWdpblBhdGgoKVxuICAgICAgY2FudmFzQ29udGV4dC5tb3ZlVG8odGhpcy5kcmFnVmVjdG9yLnN0YXJ0LngsIHRoaXMuZHJhZ1ZlY3Rvci5zdGFydC55KVxuICAgICAgY2FudmFzQ29udGV4dC5saW5lVG8odGhpcy5kcmFnVmVjdG9yLmVuZC54LCB0aGlzLmRyYWdWZWN0b3IuZW5kLnkpXG4gICAgICBjYW52YXNDb250ZXh0LnN0cm9rZSgpXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzaG93UXVhZFRyZWVzKHF1YWQ6IFF1YWROb2RlKSB7XG4gICAgICBjYW52YXNDb250ZXh0LnN0cm9rZVJlY3QocXVhZC5ib3VuZHMueCwgcXVhZC5ib3VuZHMueSwgcXVhZC5ib3VuZHMudywgcXVhZC5ib3VuZHMuaClcbiAgICAgIHF1YWQubGVhdmVzPy5mb3JFYWNoKChsZWFmOiBRdWFkTm9kZSkgPT4gc2hvd1F1YWRUcmVlcyhsZWFmKSlcbiAgICB9XG4gICAgaWYgKHRoaXMucHJvcHMuc2hvd1F1YWRzKSB7XG4gICAgICBjYW52YXNDb250ZXh0LnN0cm9rZVN0eWxlID0gc3R5bGVzLmNvbG9yM1xuICAgICAgc2hvd1F1YWRUcmVlcyh0aGlzLnF1YWRUcmVlLnF1YWRSb290KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVNpbXVsYXRpb24oZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYm9kaWVzLmZvckVhY2goKHBhcnRpY2xlOiBDaXJjbGVCb2R5KSA9PiBwYXJ0aWNsZS50aWNrKGRlbHRhKSlcbiAgICB0aGlzLnF1YWRUcmVlLnByb2Nlc3ModGhpcy5xdWFkVHJlZVByb2NlZHVyZSgpKVxuICAgIHRoaXMuYm9kaWVzLmZvckVhY2goKHBhcnRpY2xlOiBDaXJjbGVCb2R5KSA9PiBwYXJ0aWNsZS5jb2xsaWRlQm91bmRzKHRoaXMuY2FudmFzQm91bmRzKSlcbiAgfVxuXG4gIHF1YWRUcmVlUHJvY2VkdXJlKCk6ICgocXVhZE5vZGU6IFF1YWROb2RlKSA9PiB2b2lkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHByb2Nlc3NDb2xsaXNpb25zKHF1YWROb2RlOiBRdWFkTm9kZSkge1xuICAgICAgY29uc3QgY29sbGlzaW9uT2JqZWN0ID0gcXVhZE5vZGUucXVhZE9iamVjdHMgYXMgQ2lyY2xlQm9keVtdXG4gICAgICAvLyBwcm9jZXNzIGN1cnJlbnQgbGV2ZWwgY29sbGlzaW9uc1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaXNpb25PYmplY3QubGVuZ3RoOyBpKyspXG4gICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGNvbGxpc2lvbk9iamVjdC5sZW5ndGg7IGorKylcbiAgICAgICAgICBjb2xsaXNpb25PYmplY3RbaV0uY29sbGlkZShjb2xsaXNpb25PYmplY3Rbal0pXG5cbiAgICAgIC8vIHByb2Nlc3MgcmVzY3Vyc2l2ZSBjb2xsaXNpb25zXG4gICAgICBjb25zdCBwcm9jZXNzTGVhZkNvbGxpc2lvbnMgPSAobGVhdmVzOiBRdWFkTm9kZVtdIHwgbnVsbCk6IHZvaWQgPT4ge1xuICAgICAgICBsZWF2ZXM/LmZvckVhY2goKGxlYWY6IFF1YWROb2RlKSA9PiB7XG4gICAgICAgICAgY29sbGlzaW9uT2JqZWN0LmZvckVhY2goKG9iamVjdDogQ2lyY2xlQm9keSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVhZkNvbGxpc2lvbk9iamVjdHMgPSBsZWFmLnF1YWRPYmplY3RzIGFzIENpcmNsZUJvZHlbXVxuICAgICAgICAgICAgbGVhZkNvbGxpc2lvbk9iamVjdHMuZm9yRWFjaCgobGVhZk9iamVjdDogQ2lyY2xlQm9keSkgPT5cbiAgICAgICAgICAgICAgb2JqZWN0LmNvbGxpZGUobGVhZk9iamVjdClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICAgIC8vIHJlY3Vyc2VcbiAgICAgICAgICBwcm9jZXNzTGVhZkNvbGxpc2lvbnMobGVhZi5sZWF2ZXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICAvLyBjYWxsIG9uIGN1cnJlbnQgbGVhdmVzXG4gICAgICBwcm9jZXNzTGVhZkNvbGxpc2lvbnMocXVhZE5vZGUubGVhdmVzKVxuXG4gICAgICAvLyByZWN1cnNlIG9uIGZvbGxvd2luZyBxdWFkIG5vZGVzXG4gICAgICBxdWFkTm9kZS5sZWF2ZXM/LmZvckVhY2goKGxlYWY6IFF1YWROb2RlKSA9PiBwcm9jZXNzQ29sbGlzaW9ucyhsZWFmKSlcbiAgICB9XG4gIH1cblxuICByZW5kZXJMb29wKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0b3BMb29wKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBuZXd0aW1lID0gdGltZSgpXG4gICAgY29uc3QgZnBzID0gTWF0aC5yb3VuZCgxMDAwIC8gKG5ld3RpbWUgLSB0aGlzLnRpbWVzdGFtcCkpXG4gICAgdGhpcy50aW1lc3RhbXAgPSBuZXd0aW1lXG5cbiAgICB0aGlzLnVwZGF0ZVNpbXVsYXRpb24oMSAvIGZwcylcblxuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzUmVmLmN1cnJlbnRcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzPy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBpZiAoY29udGV4dCkge1xuICAgICAgdGhpcy5yZW5kZXJTaW11bGF0aW9uKGNvbnRleHQpXG5cbiAgICAgIGlmICh0aGlzLnByb3BzLnNob3dGUFMpIHtcbiAgICAgICAgY29udGV4dC5zYXZlKClcbiAgICAgICAgY29udGV4dC5mb250ID0gJzI1cHggQXJpYWwnXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gc3R5bGVzLmNvbG9yNFxuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KCdGUFM6ICcgKyBmcHMsIDEwLCAzMClcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXF1ZXN0IGFub3RoZXIgZnJhbWUgdG8gdGlja1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlckxvb3ApXG4gIH1cblxuICBtb3VzZURvd24oZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbnZhc1JlZi5jdXJyZW50KSB7XG4gICAgICB0aGlzLmRyYWdWZWN0b3Iuc3RhcnQgPSB0aGlzLmRyYWdWZWN0b3IuZW5kID0gbmV3IFZlY3RvcjJEKGUuY2xpZW50WCAtIHRoaXMuY2FudmFzUmVmLmN1cnJlbnQ/Lm9mZnNldExlZnQsIGUuY2xpZW50WSAtIHRoaXMuY2FudmFzUmVmLmN1cnJlbnQ/Lm9mZnNldFRvcClcbiAgICAgIHRoaXMuZHJhZ1ZlY3Rvci5pc0RyYWdnaW5nID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlRHJhZyhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHJhZ1ZlY3Rvci5pc0RyYWdnaW5nICYmIHRoaXMuY2FudmFzUmVmLmN1cnJlbnQpXG4gICAgICB0aGlzLmRyYWdWZWN0b3IuZW5kID0gbmV3IFZlY3RvcjJEKGUuY2xpZW50WCAtIHRoaXMuY2FudmFzUmVmLmN1cnJlbnQ/Lm9mZnNldExlZnQsIGUuY2xpZW50WSAtIHRoaXMuY2FudmFzUmVmLmN1cnJlbnQ/Lm9mZnNldFRvcClcbiAgfVxuXG4gIG1vdXNlVXAoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRCb2R5KHRoaXMuZHJhZ1ZlY3Rvci5zdGFydCwgdGhpcy5kcmFnVmVjdG9yLnN0YXJ0LnZlY3RvclRvKHRoaXMuZHJhZ1ZlY3Rvci5lbmQpLCB0aGlzLnByb3BzLnJhZGl1cylcbiAgICB0aGlzLmRyYWdWZWN0b3IuaXNEcmFnZ2luZyA9IGZhbHNlXG4gIH1cblxuICByZW5kZXIoKTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhbnZhc19jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IHJlZj17dGhpcy5jYW52YXNEaXZSZWZ9IGNsYXNzTmFtZT17c3R5bGVzLmNhbnZhc193cmFwcGVyfT5cbiAgICAgICAgICA8Y2FudmFzIHJlZj17dGhpcy5jYW52YXNSZWZ9IG9uTW91c2VEb3duPXt0aGlzLm1vdXNlRG93bn0gb25Nb3VzZVVwPXt0aGlzLm1vdXNlVXB9IG9uTW91c2VNb3ZlPXt0aGlzLm1vdXNlRHJhZ30gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9