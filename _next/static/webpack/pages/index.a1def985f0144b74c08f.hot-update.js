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
      return new _utils_vector2d__WEBPACK_IMPORTED_MODULE_13__["Vector2D"](this.props.radius + (this.canvasBounds.w - this.props.radius) * Math.random(), this.props.radius + (this.canvasBounds.h - this.props.radius) * Math.random());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaW11bGF0aW9uLWNhbnZhcy50c3giXSwibmFtZXMiOlsidGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiU2ltdWxhdGlvbkNhbnZhcyIsInByb3BzIiwic3RhcnQiLCJWZWN0b3IyRCIsImVuZCIsImlzRHJhZ2dpbmciLCJBcnJheSIsImNyZWF0ZVJlZiIsInN0b3BMb29wIiwicmVuZGVyTG9vcCIsImJpbmQiLCJtb3VzZURvd24iLCJtb3VzZVVwIiwibW91c2VEcmFnIiwicmFkaXVzIiwiY2FudmFzQm91bmRzIiwidyIsIk1hdGgiLCJyYW5kb20iLCJoIiwiYm9kaWVzIiwicXVhZFRyZWUiLCJxdWFkT2JqZWN0cyIsInBvc2l0aW9uIiwidmVsb2NpdHkiLCJpbnNlcnQiLCJDaXJjbGVCb2R5IiwicGh5c2ljc0Vudmlyb25tZW50Iiwid2luZG93Iiwib25yZXNpemUiLCJjb25maWd1cmVCb3VuZHMiLCJjYW52YXNEaXZSZWYiLCJjdXJyZW50IiwiY2FudmFzUmVmIiwiY29udGV4dCIsImdldENvbnRleHQiLCJkaW1lbnNpb25zIiwibWluIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJjYW52YXMiLCJ3aWR0aCIsImhlaWdodCIsIlJlY3QiLCJRdWFkVHJlZSIsImNhbnZhc0NvbnRleHQiLCJmaWxsU3R5bGUiLCJzdHlsZXMiLCJjb2xvcjEiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwiY29sb3I0IiwiZm9yRWFjaCIsInBhcnRpY2xlIiwiYmVnaW5QYXRoIiwiYXJjIiwieCIsInkiLCJQSSIsInN0cm9rZSIsImRyYWdWZWN0b3IiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzaG93UXVhZFRyZWVzIiwicXVhZCIsInN0cm9rZVJlY3QiLCJib3VuZHMiLCJsZWF2ZXMiLCJsZWFmIiwic2hvd1F1YWRzIiwiY29sb3IzIiwicXVhZFJvb3QiLCJkZWx0YSIsInRpY2siLCJwcm9jZXNzIiwicXVhZFRyZWVQcm9jZWR1cmUiLCJjb2xsaWRlQm91bmRzIiwicHJvY2Vzc0NvbGxpc2lvbnMiLCJxdWFkTm9kZSIsImNvbGxpc2lvbk9iamVjdCIsImkiLCJsZW5ndGgiLCJqIiwiY29sbGlkZSIsInByb2Nlc3NMZWFmQ29sbGlzaW9ucyIsIm9iamVjdCIsImxlYWZDb2xsaXNpb25PYmplY3RzIiwibGVhZk9iamVjdCIsIm5ld3RpbWUiLCJmcHMiLCJyb3VuZCIsInRpbWVzdGFtcCIsInVwZGF0ZVNpbXVsYXRpb24iLCJyZW5kZXJTaW11bGF0aW9uIiwic2hvd0ZQUyIsInNhdmUiLCJmb250IiwiZmlsbFRleHQiLCJyZXN0b3JlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZSIsImNsaWVudFgiLCJvZmZzZXRMZWZ0IiwiY2xpZW50WSIsIm9mZnNldFRvcCIsImFkZEJvZHkiLCJ2ZWN0b3JUbyIsImNhbnZhc19jb250YWluZXIiLCJjYW52YXNfd3JhcHBlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQU0sSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQU47QUFBQSxDQUFiOztJQUdxQkMsZ0I7Ozs7O0FBU25CLDRCQUFZQyxLQUFaLEVBQTBDO0FBQUE7O0FBQUE7O0FBQ3hDLDhCQUFNQSxLQUFOOztBQUR3QyxvTkFSdEJKLElBQUksRUFRa0I7O0FBQUEscU5BUHJCO0FBQUVLLFdBQUssRUFBRSxJQUFJQyx5REFBSixFQUFUO0FBQXVCQyxTQUFHLEVBQUUsSUFBSUQseURBQUosRUFBNUI7QUFBMENFLGdCQUFVLEVBQUU7QUFBdEQsS0FPcUI7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEsaU5BSHpCLElBQUlDLEtBQUosRUFHeUI7O0FBQUEsaU9BRlFDLHVEQUFTLEVBRWpCOztBQUFBLG9PQURRQSx1REFBUyxFQUNqQjs7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QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGO0FBT0Q7Ozs7RUFuTTJDZ0csK0MiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTFkZWY5ODVmMDE0NGI3NGMwOGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgY3JlYXRlUmVmLCBSZWZPYmplY3QsIE1vdXNlRXZlbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zaW11bGF0aW9uLWNhbnZhcy5tb2R1bGUuc2NzcydcblxuaW1wb3J0IHsgUXVhZE5vZGUsIFF1YWRUcmVlIH0gZnJvbSAnLi4vdXRpbHMvcXVhZHRyZWUnXG5pbXBvcnQgeyBSZWN0IH0gZnJvbSAnLi4vdXRpbHMvc2hhcGVzJ1xuaW1wb3J0IHsgQ2lyY2xlQm9keSB9IGZyb20gJy4uL3V0aWxzL2NpcmNsZWJvZHknXG5pbXBvcnQgeyBWZWN0b3IyRCB9IGZyb20gJy4uL3V0aWxzL3ZlY3RvcjJkJ1xuaW1wb3J0IHsgUGh5c2ljc0Vudmlyb25tZW50IH0gZnJvbSAnLi4vdXRpbHMvcGh5c2ljcydcblxuY29uc3QgdGltZSA9ICgpID0+IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG5cbmV4cG9ydCBpbnRlcmZhY2UgU2ltdWxhdGlvbkNhbnZhc1Byb3BzIHsgcmFkaXVzOiBudW1iZXIsIHNob3dGUFM6IGJvb2xlYW4sIHNob3dRdWFkczogYm9vbGVhbiwgcGh5c2ljc0Vudmlyb25tZW50OiBQaHlzaWNzRW52aXJvbm1lbnQgfVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvbkNhbnZhcyBleHRlbmRzIENvbXBvbmVudDxTaW11bGF0aW9uQ2FudmFzUHJvcHM+IHtcbiAgcHJpdmF0ZSB0aW1lc3RhbXAgPSB0aW1lKClcbiAgcHJpdmF0ZSBkcmFnVmVjdG9yID0geyBzdGFydDogbmV3IFZlY3RvcjJELCBlbmQ6IG5ldyBWZWN0b3IyRCwgaXNEcmFnZ2luZzogZmFsc2UgfVxuICBwcml2YXRlIHN0b3BMb29wOiBib29sZWFuXG4gIHByaXZhdGUgcXVhZFRyZWUhOiBRdWFkVHJlZVxuICBwcml2YXRlIGNhbnZhc0JvdW5kcyE6IFJlY3RcbiAgcHJpdmF0ZSBib2RpZXMgPSBuZXcgQXJyYXk8Q2lyY2xlQm9keT4oKVxuICBwcml2YXRlIGNhbnZhc1JlZjogUmVmT2JqZWN0PEhUTUxDYW52YXNFbGVtZW50PiA9IGNyZWF0ZVJlZigpXG4gIHByaXZhdGUgY2FudmFzRGl2UmVmOiBSZWZPYmplY3Q8SFRNTERpdkVsZW1lbnQ+ID0gY3JlYXRlUmVmKClcbiAgY29uc3RydWN0b3IocHJvcHM6IFNpbXVsYXRpb25DYW52YXNQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIHRoaXMuc3RvcExvb3AgPSBmYWxzZVxuICAgIC8vIGJpbmQgZm9yIGNvbnRleHQgaW4gYW5pbWF0aW9uIGNhbGxiYWNrXG4gICAgdGhpcy5yZW5kZXJMb29wID0gdGhpcy5yZW5kZXJMb29wLmJpbmQodGhpcylcbiAgICB0aGlzLm1vdXNlRG93biA9IHRoaXMubW91c2VEb3duLmJpbmQodGhpcylcbiAgICB0aGlzLm1vdXNlVXAgPSB0aGlzLm1vdXNlVXAuYmluZCh0aGlzKVxuICAgIHRoaXMubW91c2VEcmFnID0gdGhpcy5tb3VzZURyYWcuYmluZCh0aGlzKVxuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIHJhbmRvbSBwb2ludCBvbiB0aGUgY2FudmFzIHdoZXJlIGEgYm9keSBjYW4gc3Bhd25cbiAgICovXG4gIHB1YmxpYyByYW5kb21Qb2ludEluQm91bmRzKHJhZGl1czogbnVtYmVyID0gdGhpcy5wcm9wcy5yYWRpdXMpOiBWZWN0b3IyRCB7XG4gICAgcmV0dXJuIG5ldyBWZWN0b3IyRChcbiAgICAgIHRoaXMucHJvcHMucmFkaXVzICsgKHRoaXMuY2FudmFzQm91bmRzLncgLSB0aGlzLnByb3BzLnJhZGl1cykgKiBNYXRoLnJhbmRvbSgpLFxuICAgICAgdGhpcy5wcm9wcy5yYWRpdXMgKyAodGhpcy5jYW52YXNCb3VuZHMuaCAtIHRoaXMucHJvcHMucmFkaXVzKSAqIE1hdGgucmFuZG9tKClcbiAgICApXG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIGJvZGllcyBmcm9tIHRoZSBzaW11bGF0aW9uXG4gICAqL1xuICBwdWJsaWMgY2xlYXJCb2RpZXMoKTogdm9pZCB7XG4gICAgdGhpcy5ib2RpZXMgPSBuZXcgQXJyYXk8Q2lyY2xlQm9keT4oKVxuICAgIHRoaXMucXVhZFRyZWUucXVhZE9iamVjdHMgPSB0aGlzLmJvZGllc1xuICB9XG5cbiAgLyoqXG4gICAqIFNwYXduIGEgYm9keSBpbnRvIHRoZSBzaW11bGF0aW9uXG4gICAqL1xuICBwdWJsaWMgYWRkQm9keShwb3NpdGlvbjogVmVjdG9yMkQsIHZlbG9jaXR5OiBWZWN0b3IyRCwgcmFkaXVzOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnF1YWRUcmVlLmluc2VydChuZXcgQ2lyY2xlQm9keShwb3NpdGlvbiwgdmVsb2NpdHksIHJhZGl1cywgdGhpcy5wcm9wcy5waHlzaWNzRW52aXJvbm1lbnQpKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9wTG9vcCA9IHRydWVcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCk6IHZvaWQge1xuICAgIHdpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHRoaXMuY29uZmlndXJlQm91bmRzKClcbiAgICB0aGlzLmNvbmZpZ3VyZUJvdW5kcygpXG4gICAgdGhpcy5yZW5kZXJMb29wKClcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXRyaWV2ZXMgQm91bmRzIG9mIHRoZSBDYW52YXMgaW4gb3JkZXIgdG8gaW5pdGlhbGl6ZSBRdWFkVHJlZSBCb3VuZHNcbiAgICovXG4gIGNvbmZpZ3VyZUJvdW5kcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW52YXNEaXZSZWY/LmN1cnJlbnQpIHtcbiAgICAgIGlmICh0aGlzLmNhbnZhc1JlZi5jdXJyZW50KSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNhbnZhc1JlZi5jdXJyZW50LmdldENvbnRleHQoJzJkJylcbiAgICAgICAgaWYgKGNvbnRleHQpIHtcbiAgICAgICAgICBjb25zdCBkaW1lbnNpb25zID0gTWF0aC5taW4odGhpcy5jYW52YXNEaXZSZWYuY3VycmVudC5jbGllbnRXaWR0aCwgdGhpcy5jYW52YXNEaXZSZWYuY3VycmVudC5jbGllbnRIZWlnaHQpXG4gICAgICAgICAgY29udGV4dC5jYW52YXMud2lkdGggPSBkaW1lbnNpb25zXG4gICAgICAgICAgY29udGV4dC5jYW52YXMuaGVpZ2h0ID0gZGltZW5zaW9uc1xuICAgICAgICAgIHRoaXMuY2FudmFzQm91bmRzID0gbmV3IFJlY3QoMCwgMCwgdGhpcy5jYW52YXNSZWYuY3VycmVudD8ud2lkdGgsIHRoaXMuY2FudmFzUmVmLmN1cnJlbnQ/LmhlaWdodClcbiAgICAgICAgICB0aGlzLnF1YWRUcmVlID0gbmV3IFF1YWRUcmVlKHRoaXMuY2FudmFzQm91bmRzLCB0aGlzLmJvZGllcylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZSBHcmFwaGljc1xuICByZW5kZXJTaW11bGF0aW9uKGNhbnZhc0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xuICAgIGNhbnZhc0NvbnRleHQuZmlsbFN0eWxlID0gc3R5bGVzLmNvbG9yMVxuICAgIGNhbnZhc0NvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy5jYW52YXNCb3VuZHMudywgdGhpcy5jYW52YXNCb3VuZHMuaClcbiAgICBjYW52YXNDb250ZXh0LnN0cm9rZVN0eWxlID0gc3R5bGVzLmNvbG9yNFxuICAgIHRoaXMuYm9kaWVzLmZvckVhY2goKHBhcnRpY2xlOiBDaXJjbGVCb2R5KSA9PiB7XG4gICAgICBjYW52YXNDb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgICBjYW52YXNDb250ZXh0LmFyYyhwYXJ0aWNsZS5wb3NpdGlvbi54LCBwYXJ0aWNsZS5wb3NpdGlvbi55LCBwYXJ0aWNsZS5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKVxuICAgICAgY2FudmFzQ29udGV4dC5zdHJva2UoKVxuICAgIH0pXG4gICAgaWYgKHRoaXMuZHJhZ1ZlY3Rvci5pc0RyYWdnaW5nKSB7XG4gICAgICBjYW52YXNDb250ZXh0LmJlZ2luUGF0aCgpXG4gICAgICBjYW52YXNDb250ZXh0Lm1vdmVUbyh0aGlzLmRyYWdWZWN0b3Iuc3RhcnQueCwgdGhpcy5kcmFnVmVjdG9yLnN0YXJ0LnkpXG4gICAgICBjYW52YXNDb250ZXh0LmxpbmVUbyh0aGlzLmRyYWdWZWN0b3IuZW5kLngsIHRoaXMuZHJhZ1ZlY3Rvci5lbmQueSlcbiAgICAgIGNhbnZhc0NvbnRleHQuc3Ryb2tlKClcbiAgICB9XG5cblxuICAgIGZ1bmN0aW9uIHNob3dRdWFkVHJlZXMocXVhZDogUXVhZE5vZGUpIHtcbiAgICAgIGNhbnZhc0NvbnRleHQuc3Ryb2tlUmVjdChxdWFkLmJvdW5kcy54LCBxdWFkLmJvdW5kcy55LCBxdWFkLmJvdW5kcy53LCBxdWFkLmJvdW5kcy5oKVxuICAgICAgcXVhZC5sZWF2ZXM/LmZvckVhY2goKGxlYWY6IFF1YWROb2RlKSA9PiBzaG93UXVhZFRyZWVzKGxlYWYpKVxuICAgIH1cbiAgICBpZiAodGhpcy5wcm9wcy5zaG93UXVhZHMpIHtcbiAgICAgIGNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBzdHlsZXMuY29sb3IzXG4gICAgICBzaG93UXVhZFRyZWVzKHRoaXMucXVhZFRyZWUucXVhZFJvb3QpXG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIFBoeXNpY3NcbiAgdXBkYXRlU2ltdWxhdGlvbihkZWx0YTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5ib2RpZXMuZm9yRWFjaCgocGFydGljbGU6IENpcmNsZUJvZHkpID0+IHBhcnRpY2xlLnRpY2soZGVsdGEpKVxuICAgIHRoaXMucXVhZFRyZWUucHJvY2Vzcyh0aGlzLnF1YWRUcmVlUHJvY2VkdXJlKCkpXG4gICAgdGhpcy5ib2RpZXMuZm9yRWFjaCgocGFydGljbGU6IENpcmNsZUJvZHkpID0+IHBhcnRpY2xlLmNvbGxpZGVCb3VuZHModGhpcy5jYW52YXNCb3VuZHMpKVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwcm9jZWR1cmUgZm9yIGVhY2ggbm9kZSBvbiBhIFF1YWRUcmVlIGFmdGVyIGluc2VydGlvbiBpcyBmaW5pc2hlZFxuICAgKi9cbiAgcXVhZFRyZWVQcm9jZWR1cmUoKTogKChxdWFkTm9kZTogUXVhZE5vZGUpID0+IHZvaWQpIHtcbiAgICAvLyBjdXJyZW50bHkgZG9lcyBjb2xsaXNpb25zXG4gICAgcmV0dXJuIGZ1bmN0aW9uIHByb2Nlc3NDb2xsaXNpb25zKHF1YWROb2RlOiBRdWFkTm9kZSkge1xuICAgICAgY29uc3QgY29sbGlzaW9uT2JqZWN0ID0gcXVhZE5vZGUucXVhZE9iamVjdHMgYXMgQ2lyY2xlQm9keVtdXG4gICAgICAvLyBwcm9jZXNzIGN1cnJlbnQgbGV2ZWwgY29sbGlzaW9uc1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaXNpb25PYmplY3QubGVuZ3RoOyBpKyspXG4gICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGNvbGxpc2lvbk9iamVjdC5sZW5ndGg7IGorKylcbiAgICAgICAgICBjb2xsaXNpb25PYmplY3RbaV0uY29sbGlkZShjb2xsaXNpb25PYmplY3Rbal0pXG5cbiAgICAgIC8vIHByb2Nlc3MgcmVzY3Vyc2l2ZSBjb2xsaXNpb25zXG4gICAgICBjb25zdCBwcm9jZXNzTGVhZkNvbGxpc2lvbnMgPSAobGVhdmVzOiBRdWFkTm9kZVtdIHwgbnVsbCk6IHZvaWQgPT4ge1xuICAgICAgICBsZWF2ZXM/LmZvckVhY2goKGxlYWY6IFF1YWROb2RlKSA9PiB7XG4gICAgICAgICAgY29sbGlzaW9uT2JqZWN0LmZvckVhY2goKG9iamVjdDogQ2lyY2xlQm9keSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVhZkNvbGxpc2lvbk9iamVjdHMgPSBsZWFmLnF1YWRPYmplY3RzIGFzIENpcmNsZUJvZHlbXVxuICAgICAgICAgICAgbGVhZkNvbGxpc2lvbk9iamVjdHMuZm9yRWFjaCgobGVhZk9iamVjdDogQ2lyY2xlQm9keSkgPT5cbiAgICAgICAgICAgICAgb2JqZWN0LmNvbGxpZGUobGVhZk9iamVjdClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICAgIC8vIHJlY3Vyc2VcbiAgICAgICAgICBwcm9jZXNzTGVhZkNvbGxpc2lvbnMobGVhZi5sZWF2ZXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICAvLyBjYWxsIG9uIGN1cnJlbnQgbGVhdmVzXG4gICAgICBwcm9jZXNzTGVhZkNvbGxpc2lvbnMocXVhZE5vZGUubGVhdmVzKVxuXG4gICAgICAvLyByZWN1cnNlIG9uIGZvbGxvd2luZyBxdWFkIG5vZGVzXG4gICAgICBxdWFkTm9kZS5sZWF2ZXM/LmZvckVhY2goKGxlYWY6IFF1YWROb2RlKSA9PiBwcm9jZXNzQ29sbGlzaW9ucyhsZWFmKSlcbiAgICB9XG4gIH1cblxuICAvLyBMb2dpYyBMb29wXG4gIHJlbmRlckxvb3AoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc3RvcExvb3ApXG4gICAgICByZXR1cm5cblxuICAgIGNvbnN0IG5ld3RpbWUgPSB0aW1lKClcbiAgICBjb25zdCBmcHMgPSBNYXRoLnJvdW5kKDEwMDAgLyAobmV3dGltZSAtIHRoaXMudGltZXN0YW1wKSlcbiAgICB0aGlzLnRpbWVzdGFtcCA9IG5ld3RpbWVcblxuICAgIHRoaXMudXBkYXRlU2ltdWxhdGlvbigxIC8gZnBzKVxuXG4gICAgY29uc3QgY2FudmFzID0gdGhpcy5jYW52YXNSZWYuY3VycmVudFxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXM/LmdldENvbnRleHQoJzJkJylcblxuICAgIGlmIChjb250ZXh0KSB7XG4gICAgICB0aGlzLnJlbmRlclNpbXVsYXRpb24oY29udGV4dClcblxuICAgICAgaWYgKHRoaXMucHJvcHMuc2hvd0ZQUykge1xuICAgICAgICBjb250ZXh0LnNhdmUoKVxuICAgICAgICBjb250ZXh0LmZvbnQgPSAnMjVweCBBcmlhbCdcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBzdHlsZXMuY29sb3I0XG4gICAgICAgIGNvbnRleHQuZmlsbFRleHQoJ0ZQUzogJyArIGZwcywgMTAsIDMwKVxuICAgICAgICBjb250ZXh0LnJlc3RvcmUoKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlcXVlc3QgYW5vdGhlciBmcmFtZSB0byB0aWNrXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMucmVuZGVyTG9vcClcbiAgfVxuXG4gIG1vdXNlRG93bihlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2FudmFzUmVmLmN1cnJlbnQpIHtcbiAgICAgIHRoaXMuZHJhZ1ZlY3Rvci5zdGFydCA9IHRoaXMuZHJhZ1ZlY3Rvci5lbmQgPSBuZXcgVmVjdG9yMkQoZS5jbGllbnRYIC0gdGhpcy5jYW52YXNSZWYuY3VycmVudD8ub2Zmc2V0TGVmdCwgZS5jbGllbnRZIC0gdGhpcy5jYW52YXNSZWYuY3VycmVudD8ub2Zmc2V0VG9wKVxuICAgICAgdGhpcy5kcmFnVmVjdG9yLmlzRHJhZ2dpbmcgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgbW91c2VEcmFnKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kcmFnVmVjdG9yLmlzRHJhZ2dpbmcgJiYgdGhpcy5jYW52YXNSZWYuY3VycmVudClcbiAgICAgIHRoaXMuZHJhZ1ZlY3Rvci5lbmQgPSBuZXcgVmVjdG9yMkQoZS5jbGllbnRYIC0gdGhpcy5jYW52YXNSZWYuY3VycmVudD8ub2Zmc2V0TGVmdCwgZS5jbGllbnRZIC0gdGhpcy5jYW52YXNSZWYuY3VycmVudD8ub2Zmc2V0VG9wKVxuICB9XG5cbiAgbW91c2VVcCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZEJvZHkodGhpcy5kcmFnVmVjdG9yLnN0YXJ0LCB0aGlzLmRyYWdWZWN0b3Iuc3RhcnQudmVjdG9yVG8odGhpcy5kcmFnVmVjdG9yLmVuZCksIHRoaXMucHJvcHMucmFkaXVzKVxuICAgIHRoaXMuZHJhZ1ZlY3Rvci5pc0RyYWdnaW5nID0gZmFsc2VcbiAgfVxuXG4gIHJlbmRlcigpOiBKU1guRWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FudmFzX2NvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgcmVmPXt0aGlzLmNhbnZhc0RpdlJlZn0gY2xhc3NOYW1lPXtzdHlsZXMuY2FudmFzX3dyYXBwZXJ9PlxuICAgICAgICAgIDxjYW52YXMgcmVmPXt0aGlzLmNhbnZhc1JlZn0gb25Nb3VzZURvd249e3RoaXMubW91c2VEb3dufSBvbk1vdXNlVXA9e3RoaXMubW91c2VVcH0gb25Nb3VzZU1vdmU9e3RoaXMubW91c2VEcmFnfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=