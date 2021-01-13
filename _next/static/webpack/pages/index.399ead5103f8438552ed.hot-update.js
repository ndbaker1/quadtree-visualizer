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
  /**
   * Generates a random point on the canvas where a body can spawn
   */


  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(SimulationCanvas, [{
    key: "randomPointInBounds",
    value: function randomPointInBounds() {
      var radius = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props.radius;
      return new _utils_vector2d__WEBPACK_IMPORTED_MODULE_13__["Vector2D"](radius + (this.canvasBounds.w - radius) * Math.random(), radius + (this.canvasBounds.h - radius) * Math.random());
    }
    /**
     * Clear all bodies from the simulation
     */

  }, {
    key: "clearBodies",
    value: function clearBodies() {
      this.bodies = new Array();
      this.quadTree.quadObjects = this.bodies;
    }
    /**
     * Spawn a body into the simulation
     */

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
        return _this2.configureBounds();
      };

      this.configureBounds();
      this.renderLoop();
    }
    /**
     * Retrieves Bounds of the Canvas in order to initialize QuadTree Bounds
     */

  }, {
    key: "configureBounds",
    value: function configureBounds() {
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
    } // Update Graphics

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
    } // Update Physics

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
    /**
     * The procedure for each node on a QuadTree after insertion is finished
     */

  }, {
    key: "quadTreeProcedure",
    value: function quadTreeProcedure() {
      // currently does collisions
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
    } // Logic Loop

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
            lineNumber: 204,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 202,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaW11bGF0aW9uLWNhbnZhcy50c3giXSwibmFtZXMiOlsidGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiU2ltdWxhdGlvbkNhbnZhcyIsInByb3BzIiwic3RhcnQiLCJWZWN0b3IyRCIsImVuZCIsImlzRHJhZ2dpbmciLCJBcnJheSIsImNyZWF0ZVJlZiIsInN0b3BMb29wIiwicmVuZGVyTG9vcCIsImJpbmQiLCJtb3VzZURvd24iLCJtb3VzZVVwIiwibW91c2VEcmFnIiwicmFkaXVzIiwiY2FudmFzQm91bmRzIiwidyIsIk1hdGgiLCJyYW5kb20iLCJoIiwiYm9kaWVzIiwicXVhZFRyZWUiLCJxdWFkT2JqZWN0cyIsInBvc2l0aW9uIiwidmVsb2NpdHkiLCJpbnNlcnQiLCJDaXJjbGVCb2R5IiwicGh5c2ljc0Vudmlyb25tZW50Iiwid2luZG93Iiwib25yZXNpemUiLCJjb25maWd1cmVCb3VuZHMiLCJjYW52YXNEaXZSZWYiLCJjdXJyZW50IiwiY2FudmFzUmVmIiwiY29udGV4dCIsImdldENvbnRleHQiLCJkaW1lbnNpb25zIiwibWluIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3QiLCJRdWFkVHJlZSIsImNhbnZhc0NvbnRleHQiLCJmaWxsU3R5bGUiLCJzdHlsZXMiLCJjb2xvcjEiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwiY29sb3I0IiwiZm9yRWFjaCIsInBhcnRpY2xlIiwiYmVnaW5QYXRoIiwiYXJjIiwieCIsInkiLCJQSSIsInN0cm9rZSIsImRyYWdWZWN0b3IiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzaG93UXVhZFRyZWVzIiwicXVhZCIsInN0cm9rZVJlY3QiLCJib3VuZHMiLCJsZWF2ZXMiLCJsZWFmIiwic2hvd1F1YWRzIiwiY29sb3IzIiwicXVhZFJvb3QiLCJkZWx0YSIsInRpY2siLCJwcm9jZXNzIiwicXVhZFRyZWVQcm9jZWR1cmUiLCJjb2xsaWRlQm91bmRzIiwicHJvY2Vzc0NvbGxpc2lvbnMiLCJxdWFkTm9kZSIsImNvbGxpc2lvbk9iamVjdCIsImkiLCJsZW5ndGgiLCJqIiwiY29sbGlkZSIsInByb2Nlc3NMZWFmQ29sbGlzaW9ucyIsIm9iamVjdCIsImxlYWZDb2xsaXNpb25PYmplY3RzIiwibGVhZk9iamVjdCIsIm5ld3RpbWUiLCJmcHMiLCJyb3VuZCIsInRpbWVzdGFtcCIsInVwZGF0ZVNpbXVsYXRpb24iLCJyZW5kZXJTaW11bGF0aW9uIiwic2hvd0ZQUyIsInNhdmUiLCJmb250IiwiZmlsbFRleHQiLCJyZXN0b3JlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZSIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwiY2xpZW50WSIsIm9mZnNldFRvcCIsImFkZEJvZHkiLCJ2ZWN0b3JUbyIsImNhbnZhc19jb250YWluZXIiLCJjYW52YXNfd3JhcHBlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQU0sSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQU47QUFBQSxDQUFiOztJQUdxQkMsZ0I7Ozs7O0FBU25CLDRCQUFZQyxLQUFaLEVBQTBDO0FBQUE7O0FBQUE7O0FBQ3hDLDhCQUFNQSxLQUFOOztBQUR3QyxvTkFSdEJKLElBQUksRUFRa0I7O0FBQUEscU5BUHJCO0FBQUVLLFdBQUssRUFBRSxJQUFJQyx5REFBSixFQUFUO0FBQXVCQyxTQUFHLEVBQUUsSUFBSUQseURBQUosRUFBNUI7QUFBMENFLGdCQUFVLEVBQUU7QUFBdEQsS0FPcUI7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsaU5BSHpCLElBQUlDLEtBQUosRUFHeUI7O0FBQUEsaU9BRlFDLHVEQUFTLEVBRWpCOztBQUFBLG9PQURRQSx1REFBUyxFQUNqQjs7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Q2dHLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjM5OWVhZDUxMDNmODQzODU1MmVkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZVJlZiwgUmVmT2JqZWN0LCBNb3VzZUV2ZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2ltdWxhdGlvbi1jYW52YXMubW9kdWxlLnNjc3MnXG5cbmltcG9ydCB7IFF1YWROb2RlLCBRdWFkVHJlZSB9IGZyb20gJy4uL3V0aWxzL3F1YWR0cmVlJ1xuaW1wb3J0IHsgUmVjdCB9IGZyb20gJy4uL3V0aWxzL3NoYXBlcydcbmltcG9ydCB7IENpcmNsZUJvZHkgfSBmcm9tICcuLi91dGlscy9jaXJjbGVib2R5J1xuaW1wb3J0IHsgVmVjdG9yMkQgfSBmcm9tICcuLi91dGlscy92ZWN0b3IyZCdcbmltcG9ydCB7IFBoeXNpY3NFbnZpcm9ubWVudCB9IGZyb20gJy4uL3V0aWxzL3BoeXNpY3MnXG5cbmNvbnN0IHRpbWUgPSAoKSA9PiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuXG5leHBvcnQgaW50ZXJmYWNlIFNpbXVsYXRpb25DYW52YXNQcm9wcyB7IHJhZGl1czogbnVtYmVyLCBzaG93RlBTOiBib29sZWFuLCBzaG93UXVhZHM6IGJvb2xlYW4sIHBoeXNpY3NFbnZpcm9ubWVudDogUGh5c2ljc0Vudmlyb25tZW50IH1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbXVsYXRpb25DYW52YXMgZXh0ZW5kcyBDb21wb25lbnQ8U2ltdWxhdGlvbkNhbnZhc1Byb3BzPiB7XG4gIHByaXZhdGUgdGltZXN0YW1wID0gdGltZSgpXG4gIHByaXZhdGUgZHJhZ1ZlY3RvciA9IHsgc3RhcnQ6IG5ldyBWZWN0b3IyRCwgZW5kOiBuZXcgVmVjdG9yMkQsIGlzRHJhZ2dpbmc6IGZhbHNlIH1cbiAgcHJpdmF0ZSBzdG9wTG9vcDogYm9vbGVhblxuICBwcml2YXRlIHF1YWRUcmVlITogUXVhZFRyZWVcbiAgcHJpdmF0ZSBjYW52YXNCb3VuZHMhOiBSZWN0XG4gIHByaXZhdGUgYm9kaWVzID0gbmV3IEFycmF5PENpcmNsZUJvZHk+KClcbiAgcHJpdmF0ZSBjYW52YXNSZWY6IFJlZk9iamVjdDxIVE1MQ2FudmFzRWxlbWVudD4gPSBjcmVhdGVSZWYoKVxuICBwcml2YXRlIGNhbnZhc0RpdlJlZjogUmVmT2JqZWN0PEhUTUxEaXZFbGVtZW50PiA9IGNyZWF0ZVJlZigpXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBTaW11bGF0aW9uQ2FudmFzUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0b3BMb29wID0gZmFsc2VcbiAgICAvLyBiaW5kIGZvciBjb250ZXh0IGluIGFuaW1hdGlvbiBjYWxsYmFja1xuICAgIHRoaXMucmVuZGVyTG9vcCA9IHRoaXMucmVuZGVyTG9vcC5iaW5kKHRoaXMpXG4gICAgdGhpcy5tb3VzZURvd24gPSB0aGlzLm1vdXNlRG93bi5iaW5kKHRoaXMpXG4gICAgdGhpcy5tb3VzZVVwID0gdGhpcy5tb3VzZVVwLmJpbmQodGhpcylcbiAgICB0aGlzLm1vdXNlRHJhZyA9IHRoaXMubW91c2VEcmFnLmJpbmQodGhpcylcbiAgfVxuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSByYW5kb20gcG9pbnQgb24gdGhlIGNhbnZhcyB3aGVyZSBhIGJvZHkgY2FuIHNwYXduXG4gICAqL1xuICBwdWJsaWMgcmFuZG9tUG9pbnRJbkJvdW5kcyhyYWRpdXM6IG51bWJlciA9IHRoaXMucHJvcHMucmFkaXVzKTogVmVjdG9yMkQge1xuICAgIHJldHVybiBuZXcgVmVjdG9yMkQoXG4gICAgICByYWRpdXMgKyAodGhpcy5jYW52YXNCb3VuZHMudyAtIHJhZGl1cykgKiBNYXRoLnJhbmRvbSgpLFxuICAgICAgcmFkaXVzICsgKHRoaXMuY2FudmFzQm91bmRzLmggLSByYWRpdXMpICogTWF0aC5yYW5kb20oKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgYm9kaWVzIGZyb20gdGhlIHNpbXVsYXRpb25cbiAgICovXG4gIHB1YmxpYyBjbGVhckJvZGllcygpOiB2b2lkIHtcbiAgICB0aGlzLmJvZGllcyA9IG5ldyBBcnJheTxDaXJjbGVCb2R5PigpXG4gICAgdGhpcy5xdWFkVHJlZS5xdWFkT2JqZWN0cyA9IHRoaXMuYm9kaWVzXG4gIH1cblxuICAvKipcbiAgICogU3Bhd24gYSBib2R5IGludG8gdGhlIHNpbXVsYXRpb25cbiAgICovXG4gIHB1YmxpYyBhZGRCb2R5KHBvc2l0aW9uOiBWZWN0b3IyRCwgdmVsb2NpdHk6IFZlY3RvcjJELCByYWRpdXM6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucXVhZFRyZWUuaW5zZXJ0KG5ldyBDaXJjbGVCb2R5KHBvc2l0aW9uLCB2ZWxvY2l0eSwgcmFkaXVzLCB0aGlzLnByb3BzLnBoeXNpY3NFbnZpcm9ubWVudCkpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BMb29wID0gdHJ1ZVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4gdGhpcy5jb25maWd1cmVCb3VuZHMoKVxuICAgIHRoaXMuY29uZmlndXJlQm91bmRzKClcbiAgICB0aGlzLnJlbmRlckxvb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBCb3VuZHMgb2YgdGhlIENhbnZhcyBpbiBvcmRlciB0byBpbml0aWFsaXplIFF1YWRUcmVlIEJvdW5kc1xuICAgKi9cbiAgY29uZmlndXJlQm91bmRzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbnZhc0RpdlJlZj8uY3VycmVudCkge1xuICAgICAgaWYgKHRoaXMuY2FudmFzUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBNYXRoLm1pbih0aGlzLmNhbnZhc0RpdlJlZi5jdXJyZW50LmNsaWVudFdpZHRoLCB0aGlzLmNhbnZhc0RpdlJlZi5jdXJyZW50LmNsaWVudEhlaWdodClcbiAgICAgICAgICBjb250ZXh0LmNhbnZhcy53aWR0aCA9IGRpbWVuc2lvbnNcbiAgICAgICAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBkaW1lbnNpb25zXG4gICAgICAgICAgdGhpcy5jYW52YXNCb3VuZHMgPSBuZXcgUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1JlZi5jdXJyZW50Py53aWR0aCwgdGhpcy5jYW52YXNSZWYuY3VycmVudD8uaGVpZ2h0KVxuICAgICAgICAgIHRoaXMucXVhZFRyZWUgPSBuZXcgUXVhZFRyZWUodGhpcy5jYW52YXNCb3VuZHMsIHRoaXMuYm9kaWVzKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIEdyYXBoaWNzXG4gIHJlbmRlclNpbXVsYXRpb24oY2FudmFzQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgY2FudmFzQ29udGV4dC5maWxsU3R5bGUgPSBzdHlsZXMuY29sb3IxXG4gICAgY2FudmFzQ29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhc0JvdW5kcy53LCB0aGlzLmNhbnZhc0JvdW5kcy5oKVxuICAgIGNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBzdHlsZXMuY29sb3I0XG4gICAgdGhpcy5ib2RpZXMuZm9yRWFjaCgocGFydGljbGU6IENpcmNsZUJvZHkpID0+IHtcbiAgICAgIGNhbnZhc0NvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgIGNhbnZhc0NvbnRleHQuYXJjKHBhcnRpY2xlLnBvc2l0aW9uLngsIHBhcnRpY2xlLnBvc2l0aW9uLnksIHBhcnRpY2xlLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpXG4gICAgICBjYW52YXNDb250ZXh0LnN0cm9rZSgpXG4gICAgfSlcbiAgICBpZiAodGhpcy5kcmFnVmVjdG9yLmlzRHJhZ2dpbmcpIHtcbiAgICAgIGNhbnZhc0NvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgIGNhbnZhc0NvbnRleHQubW92ZVRvKHRoaXMuZHJhZ1ZlY3Rvci5zdGFydC54LCB0aGlzLmRyYWdWZWN0b3Iuc3RhcnQueSlcbiAgICAgIGNhbnZhc0NvbnRleHQubGluZVRvKHRoaXMuZHJhZ1ZlY3Rvci5lbmQueCwgdGhpcy5kcmFnVmVjdG9yLmVuZC55KVxuICAgICAgY2FudmFzQ29udGV4dC5zdHJva2UoKVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc2hvd1F1YWRUcmVlcyhxdWFkOiBRdWFkTm9kZSkge1xuICAgICAgY2FudmFzQ29udGV4dC5zdHJva2VSZWN0KHF1YWQuYm91bmRzLngsIHF1YWQuYm91bmRzLnksIHF1YWQuYm91bmRzLncsIHF1YWQuYm91bmRzLmgpXG4gICAgICBxdWFkLmxlYXZlcz8uZm9yRWFjaCgobGVhZjogUXVhZE5vZGUpID0+IHNob3dRdWFkVHJlZXMobGVhZikpXG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnNob3dRdWFkcykge1xuICAgICAgY2FudmFzQ29udGV4dC5zdHJva2VTdHlsZSA9IHN0eWxlcy5jb2xvcjNcbiAgICAgIHNob3dRdWFkVHJlZXModGhpcy5xdWFkVHJlZS5xdWFkUm9vdClcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgUGh5c2ljc1xuICB1cGRhdGVTaW11bGF0aW9uKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmJvZGllcy5mb3JFYWNoKChwYXJ0aWNsZTogQ2lyY2xlQm9keSkgPT4gcGFydGljbGUudGljayhkZWx0YSkpXG4gICAgdGhpcy5xdWFkVHJlZS5wcm9jZXNzKHRoaXMucXVhZFRyZWVQcm9jZWR1cmUoKSlcbiAgICB0aGlzLmJvZGllcy5mb3JFYWNoKChwYXJ0aWNsZTogQ2lyY2xlQm9keSkgPT4gcGFydGljbGUuY29sbGlkZUJvdW5kcyh0aGlzLmNhbnZhc0JvdW5kcykpXG4gIH1cblxuICAvKipcbiAgICogVGhlIHByb2NlZHVyZSBmb3IgZWFjaCBub2RlIG9uIGEgUXVhZFRyZWUgYWZ0ZXIgaW5zZXJ0aW9uIGlzIGZpbmlzaGVkXG4gICAqL1xuICBxdWFkVHJlZVByb2NlZHVyZSgpOiAoKHF1YWROb2RlOiBRdWFkTm9kZSkgPT4gdm9pZCkge1xuICAgIC8vIGN1cnJlbnRseSBkb2VzIGNvbGxpc2lvbnNcbiAgICByZXR1cm4gZnVuY3Rpb24gcHJvY2Vzc0NvbGxpc2lvbnMocXVhZE5vZGU6IFF1YWROb2RlKSB7XG4gICAgICBjb25zdCBjb2xsaXNpb25PYmplY3QgPSBxdWFkTm9kZS5xdWFkT2JqZWN0cyBhcyBDaXJjbGVCb2R5W11cbiAgICAgIC8vIHByb2Nlc3MgY3VycmVudCBsZXZlbCBjb2xsaXNpb25zXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpc2lvbk9iamVjdC5sZW5ndGg7IGkrKylcbiAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgY29sbGlzaW9uT2JqZWN0Lmxlbmd0aDsgaisrKVxuICAgICAgICAgIGNvbGxpc2lvbk9iamVjdFtpXS5jb2xsaWRlKGNvbGxpc2lvbk9iamVjdFtqXSlcblxuICAgICAgLy8gcHJvY2VzcyByZXNjdXJzaXZlIGNvbGxpc2lvbnNcbiAgICAgIGNvbnN0IHByb2Nlc3NMZWFmQ29sbGlzaW9ucyA9IChsZWF2ZXM6IFF1YWROb2RlW10gfCBudWxsKTogdm9pZCA9PiB7XG4gICAgICAgIGxlYXZlcz8uZm9yRWFjaCgobGVhZjogUXVhZE5vZGUpID0+IHtcbiAgICAgICAgICBjb2xsaXNpb25PYmplY3QuZm9yRWFjaCgob2JqZWN0OiBDaXJjbGVCb2R5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZWFmQ29sbGlzaW9uT2JqZWN0cyA9IGxlYWYucXVhZE9iamVjdHMgYXMgQ2lyY2xlQm9keVtdXG4gICAgICAgICAgICBsZWFmQ29sbGlzaW9uT2JqZWN0cy5mb3JFYWNoKChsZWFmT2JqZWN0OiBDaXJjbGVCb2R5KSA9PlxuICAgICAgICAgICAgICBvYmplY3QuY29sbGlkZShsZWFmT2JqZWN0KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLy8gcmVjdXJzZVxuICAgICAgICAgIHByb2Nlc3NMZWFmQ29sbGlzaW9ucyhsZWFmLmxlYXZlcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIC8vIGNhbGwgb24gY3VycmVudCBsZWF2ZXNcbiAgICAgIHByb2Nlc3NMZWFmQ29sbGlzaW9ucyhxdWFkTm9kZS5sZWF2ZXMpXG5cbiAgICAgIC8vIHJlY3Vyc2Ugb24gZm9sbG93aW5nIHF1YWQgbm9kZXNcbiAgICAgIHF1YWROb2RlLmxlYXZlcz8uZm9yRWFjaCgobGVhZjogUXVhZE5vZGUpID0+IHByb2Nlc3NDb2xsaXNpb25zKGxlYWYpKVxuICAgIH1cbiAgfVxuXG4gIC8vIExvZ2ljIExvb3BcbiAgcmVuZGVyTG9vcCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdG9wTG9vcClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgbmV3dGltZSA9IHRpbWUoKVxuICAgIGNvbnN0IGZwcyA9IE1hdGgucm91bmQoMTAwMCAvIChuZXd0aW1lIC0gdGhpcy50aW1lc3RhbXApKVxuICAgIHRoaXMudGltZXN0YW1wID0gbmV3dGltZVxuXG4gICAgdGhpcy51cGRhdGVTaW11bGF0aW9uKDEgLyBmcHMpXG5cbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhc1JlZi5jdXJyZW50XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcz8uZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIHRoaXMucmVuZGVyU2ltdWxhdGlvbihjb250ZXh0KVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5zaG93RlBTKSB7XG4gICAgICAgIGNvbnRleHQuc2F2ZSgpXG4gICAgICAgIGNvbnRleHQuZm9udCA9ICcyNXB4IEFyaWFsJ1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHN0eWxlcy5jb2xvcjRcbiAgICAgICAgY29udGV4dC5maWxsVGV4dCgnRlBTOiAnICsgZnBzLCAxMCwgMzApXG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVxdWVzdCBhbm90aGVyIGZyYW1lIHRvIHRpY2tcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXJMb29wKVxuICB9XG5cbiAgbW91c2VEb3duKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW52YXNSZWYuY3VycmVudCkge1xuICAgICAgdGhpcy5kcmFnVmVjdG9yLnN0YXJ0ID0gdGhpcy5kcmFnVmVjdG9yLmVuZCA9IG5ldyBWZWN0b3IyRChlLmNsaWVudFggLSB0aGlzLmNhbnZhc1JlZi5jdXJyZW50Py5vZmZzZXRMZWZ0LCBlLmNsaWVudFkgLSB0aGlzLmNhbnZhc1JlZi5jdXJyZW50Py5vZmZzZXRUb3ApXG4gICAgICB0aGlzLmRyYWdWZWN0b3IuaXNEcmFnZ2luZyA9IHRydWVcbiAgICB9XG4gIH1cblxuICBtb3VzZURyYWcoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRyYWdWZWN0b3IuaXNEcmFnZ2luZyAmJiB0aGlzLmNhbnZhc1JlZi5jdXJyZW50KVxuICAgICAgdGhpcy5kcmFnVmVjdG9yLmVuZCA9IG5ldyBWZWN0b3IyRChlLmNsaWVudFggLSB0aGlzLmNhbnZhc1JlZi5jdXJyZW50Py5vZmZzZXRMZWZ0LCBlLmNsaWVudFkgLSB0aGlzLmNhbnZhc1JlZi5jdXJyZW50Py5vZmZzZXRUb3ApXG4gIH1cblxuICBtb3VzZVVwKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkQm9keSh0aGlzLmRyYWdWZWN0b3Iuc3RhcnQsIHRoaXMuZHJhZ1ZlY3Rvci5zdGFydC52ZWN0b3JUbyh0aGlzLmRyYWdWZWN0b3IuZW5kKSwgdGhpcy5wcm9wcy5yYWRpdXMpXG4gICAgdGhpcy5kcmFnVmVjdG9yLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICB9XG5cbiAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYW52YXNfY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiByZWY9e3RoaXMuY2FudmFzRGl2UmVmfSBjbGFzc05hbWU9e3N0eWxlcy5jYW52YXNfd3JhcHBlcn0+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e3RoaXMuY2FudmFzUmVmfSBvbk1vdXNlRG93bj17dGhpcy5tb3VzZURvd259IG9uTW91c2VVcD17dGhpcy5tb3VzZVVwfSBvbk1vdXNlTW92ZT17dGhpcy5tb3VzZURyYWd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==