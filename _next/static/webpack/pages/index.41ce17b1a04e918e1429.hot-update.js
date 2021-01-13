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
    /**
     * Generates a random point on the canvas where a body can spawn
     */

  }, {
    key: "randomPointInBounds",
    value: function randomPointInBounds() {
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
            lineNumber: 211,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 209,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaW11bGF0aW9uLWNhbnZhcy50c3giXSwibmFtZXMiOlsidGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiU2ltdWxhdGlvbkNhbnZhcyIsInByb3BzIiwic3RhcnQiLCJWZWN0b3IyRCIsImVuZCIsImlzRHJhZ2dpbmciLCJBcnJheSIsImNyZWF0ZVJlZiIsInN0b3BMb29wIiwicmVuZGVyTG9vcCIsImJpbmQiLCJtb3VzZURvd24iLCJtb3VzZVVwIiwibW91c2VEcmFnIiwidmFycyIsIlF1YWRUcmVlIiwiY2FwYWNpdHkiLCJ1bmRlZmluZWQiLCJtYXhEZXB0aCIsInJhZGl1cyIsImNhbnZhc0JvdW5kcyIsInciLCJNYXRoIiwicmFuZG9tIiwiaCIsImJvZGllcyIsInF1YWRUcmVlIiwicXVhZE9iamVjdHMiLCJwb3NpdGlvbiIsInZlbG9jaXR5IiwiaW5zZXJ0IiwiQ2lyY2xlQm9keSIsInBoeXNpY3NFbnZpcm9ubWVudCIsIndpbmRvdyIsIm9ucmVzaXplIiwiY29uZmlndXJlQm91bmRzIiwiY2FudmFzRGl2UmVmIiwiY3VycmVudCIsImNhbnZhc1JlZiIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZGltZW5zaW9ucyIsIm1pbiIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJSZWN0IiwiY2FudmFzQ29udGV4dCIsImZpbGxTdHlsZSIsInN0eWxlcyIsImNvbG9yMSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJjb2xvcjQiLCJmb3JFYWNoIiwicGFydGljbGUiLCJiZWdpblBhdGgiLCJhcmMiLCJ4IiwieSIsIlBJIiwic3Ryb2tlIiwiZHJhZ1ZlY3RvciIsIm1vdmVUbyIsImxpbmVUbyIsInNob3dRdWFkVHJlZXMiLCJxdWFkIiwic3Ryb2tlUmVjdCIsImJvdW5kcyIsImxlYXZlcyIsImxlYWYiLCJzaG93UXVhZHMiLCJjb2xvcjMiLCJxdWFkUm9vdCIsImRlbHRhIiwidGljayIsInByb2Nlc3MiLCJxdWFkVHJlZVByb2NlZHVyZSIsImNvbGxpZGVCb3VuZHMiLCJwcm9jZXNzQ29sbGlzaW9ucyIsInF1YWROb2RlIiwiY29sbGlzaW9uT2JqZWN0IiwiaSIsImxlbmd0aCIsImoiLCJjb2xsaWRlIiwicHJvY2Vzc0xlYWZDb2xsaXNpb25zIiwib2JqZWN0IiwibGVhZkNvbGxpc2lvbk9iamVjdHMiLCJsZWFmT2JqZWN0IiwibmV3dGltZSIsImZwcyIsInJvdW5kIiwidGltZXN0YW1wIiwidXBkYXRlU2ltdWxhdGlvbiIsInJlbmRlclNpbXVsYXRpb24iLCJzaG93RlBTIiwic2F2ZSIsImZvbnQiLCJmaWxsVGV4dCIsInJlc3RvcmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJlIiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJjbGllbnRZIiwib2Zmc2V0VG9wIiwiYWRkQm9keSIsInZlY3RvclRvIiwiY2FudmFzX2NvbnRhaW5lciIsImNhbnZhc193cmFwcGVyIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsU0FBTSxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsRUFBTjtBQUFBLENBQWI7O0lBR3FCQyxnQjs7Ozs7QUFTbkIsNEJBQVlDLEtBQVosRUFBMEM7QUFBQTs7QUFBQTs7QUFDeEMsOEJBQU1BLEtBQU47O0FBRHdDLG9OQVJ0QkosSUFBSSxFQVFrQjs7QUFBQSxxTkFQckI7QUFBRUssV0FBSyxFQUFFLElBQUlDLHlEQUFKLEVBQVQ7QUFBdUJDLFNBQUcsRUFBRSxJQUFJRCx5REFBSixFQUE1QjtBQUEwQ0UsZ0JBQVUsRUFBRTtBQUF0RCxLQU9xQjs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxpTkFIekIsSUFBSUMsS0FBSixFQUd5Qjs7QUFBQSxpT0FG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SyxpQkFBUyxFQUFFOEMscUVBQU0sQ0FBQzRELGdCQUF2QjtBQUFBLCtCQUNFO0FBQUssYUFBRyxFQUFFLEtBQUszRSxZQUFmO0FBQTZCLG1CQUFTLEVBQUVlLHFFQUFNLENBQUM2RCxjQUEvQztBQUFBLGlDQUNFO0FBQVEsZUFBRyxFQUFFLEtBQUsxRSxTQUFsQjtBQUE2Qix1QkFBVyxFQUFFLEtBQUszQixTQUEvQztBQUEwRCxxQkFBUyxFQUFFLEtBQUtDLE9BQTFFO0FBQW1GLHVCQUFXLEVBQUUsS0FBS0M7QUFBckc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFPRDs7OztFQTFNMkNvRywrQyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MWNlMTdiMWEwNGU5MThlMTQyOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVSZWYsIFJlZk9iamVjdCwgTW91c2VFdmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3NpbXVsYXRpb24tY2FudmFzLm1vZHVsZS5zY3NzJ1xuXG5pbXBvcnQgeyBRdWFkTm9kZSwgUXVhZFRyZWUgfSBmcm9tICcuLi91dGlscy9xdWFkdHJlZSdcbmltcG9ydCB7IFJlY3QgfSBmcm9tICcuLi91dGlscy9zaGFwZXMnXG5pbXBvcnQgeyBDaXJjbGVCb2R5IH0gZnJvbSAnLi4vdXRpbHMvY2lyY2xlYm9keSdcbmltcG9ydCB7IFZlY3RvcjJEIH0gZnJvbSAnLi4vdXRpbHMvdmVjdG9yMmQnXG5pbXBvcnQgeyBQaHlzaWNzRW52aXJvbm1lbnQgfSBmcm9tICcuLi91dGlscy9waHlzaWNzJ1xuXG5jb25zdCB0aW1lID0gKCkgPT4gbmV3IERhdGUoKS5nZXRUaW1lKClcblxuZXhwb3J0IGludGVyZmFjZSBTaW11bGF0aW9uQ2FudmFzUHJvcHMgeyByYWRpdXM6IG51bWJlciwgc2hvd0ZQUzogYm9vbGVhbiwgc2hvd1F1YWRzOiBib29sZWFuLCBwaHlzaWNzRW52aXJvbm1lbnQ6IFBoeXNpY3NFbnZpcm9ubWVudCB9XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW11bGF0aW9uQ2FudmFzIGV4dGVuZHMgQ29tcG9uZW50PFNpbXVsYXRpb25DYW52YXNQcm9wcz4ge1xuICBwcml2YXRlIHRpbWVzdGFtcCA9IHRpbWUoKVxuICBwcml2YXRlIGRyYWdWZWN0b3IgPSB7IHN0YXJ0OiBuZXcgVmVjdG9yMkQsIGVuZDogbmV3IFZlY3RvcjJELCBpc0RyYWdnaW5nOiBmYWxzZSB9XG4gIHByaXZhdGUgc3RvcExvb3A6IGJvb2xlYW5cbiAgcHJpdmF0ZSBxdWFkVHJlZSE6IFF1YWRUcmVlXG4gIHByaXZhdGUgY2FudmFzQm91bmRzITogUmVjdFxuICBwcml2YXRlIGJvZGllcyA9IG5ldyBBcnJheTxDaXJjbGVCb2R5PigpXG4gIHByaXZhdGUgY2FudmFzUmVmOiBSZWZPYmplY3Q8SFRNTENhbnZhc0VsZW1lbnQ+ID0gY3JlYXRlUmVmKClcbiAgcHJpdmF0ZSBjYW52YXNEaXZSZWY6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4gPSBjcmVhdGVSZWYoKVxuICBjb25zdHJ1Y3Rvcihwcm9wczogU2ltdWxhdGlvbkNhbnZhc1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdG9wTG9vcCA9IGZhbHNlXG4gICAgLy8gYmluZCBmb3IgY29udGV4dCBpbiBhbmltYXRpb24gY2FsbGJhY2tcbiAgICB0aGlzLnJlbmRlckxvb3AgPSB0aGlzLnJlbmRlckxvb3AuYmluZCh0aGlzKVxuICAgIHRoaXMubW91c2VEb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKVxuICAgIHRoaXMubW91c2VVcCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpXG4gICAgdGhpcy5tb3VzZURyYWcgPSB0aGlzLm1vdXNlRHJhZy5iaW5kKHRoaXMpXG4gIH1cblxuICBwdWJsaWMgdXBkYXRlVmFycyh2YXJzOiB7IGNhcGFjaXR5PzogbnVtYmVyLCBtYXhEZXB0aD86IG51bWJlciB9KTogdm9pZCB7XG4gICAgaWYgKCdjYXBhY2l0eScgaW4gdmFycylcbiAgICAgIFF1YWRUcmVlLmNhcGFjaXR5ID0gdmFycy5jYXBhY2l0eSA9PT0gdW5kZWZpbmVkID8gMSA6IHZhcnMuY2FwYWNpdHlcbiAgICBpZiAoJ21heERlcHRoJyBpbiB2YXJzKVxuICAgICAgUXVhZFRyZWUubWF4RGVwdGggPSB2YXJzLm1heERlcHRoID09PSB1bmRlZmluZWQgPyAxIDogdmFycy5tYXhEZXB0aFxuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIHJhbmRvbSBwb2ludCBvbiB0aGUgY2FudmFzIHdoZXJlIGEgYm9keSBjYW4gc3Bhd25cbiAgICovXG4gIHB1YmxpYyByYW5kb21Qb2ludEluQm91bmRzKCk6IFZlY3RvcjJEIHtcbiAgICByZXR1cm4gbmV3IFZlY3RvcjJEKFxuICAgICAgdGhpcy5wcm9wcy5yYWRpdXMgKyAodGhpcy5jYW52YXNCb3VuZHMudyAtIHRoaXMucHJvcHMucmFkaXVzKSAqIE1hdGgucmFuZG9tKCksXG4gICAgICB0aGlzLnByb3BzLnJhZGl1cyArICh0aGlzLmNhbnZhc0JvdW5kcy5oIC0gdGhpcy5wcm9wcy5yYWRpdXMpICogTWF0aC5yYW5kb20oKVxuICAgIClcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgYm9kaWVzIGZyb20gdGhlIHNpbXVsYXRpb25cbiAgICovXG4gIHB1YmxpYyBjbGVhckJvZGllcygpOiB2b2lkIHtcbiAgICB0aGlzLmJvZGllcyA9IG5ldyBBcnJheTxDaXJjbGVCb2R5PigpXG4gICAgdGhpcy5xdWFkVHJlZS5xdWFkT2JqZWN0cyA9IHRoaXMuYm9kaWVzXG4gIH1cblxuICAvKipcbiAgICogU3Bhd24gYSBib2R5IGludG8gdGhlIHNpbXVsYXRpb25cbiAgICovXG4gIHB1YmxpYyBhZGRCb2R5KHBvc2l0aW9uOiBWZWN0b3IyRCwgdmVsb2NpdHk6IFZlY3RvcjJELCByYWRpdXM6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucXVhZFRyZWUuaW5zZXJ0KG5ldyBDaXJjbGVCb2R5KHBvc2l0aW9uLCB2ZWxvY2l0eSwgcmFkaXVzLCB0aGlzLnByb3BzLnBoeXNpY3NFbnZpcm9ubWVudCkpXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BMb29wID0gdHJ1ZVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4gdGhpcy5jb25maWd1cmVCb3VuZHMoKVxuICAgIHRoaXMuY29uZmlndXJlQm91bmRzKClcbiAgICB0aGlzLnJlbmRlckxvb3AoKVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHJpZXZlcyBCb3VuZHMgb2YgdGhlIENhbnZhcyBpbiBvcmRlciB0byBpbml0aWFsaXplIFF1YWRUcmVlIEJvdW5kc1xuICAgKi9cbiAgY29uZmlndXJlQm91bmRzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbnZhc0RpdlJlZj8uY3VycmVudCkge1xuICAgICAgaWYgKHRoaXMuY2FudmFzUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBNYXRoLm1pbih0aGlzLmNhbnZhc0RpdlJlZi5jdXJyZW50LmNsaWVudFdpZHRoLCB0aGlzLmNhbnZhc0RpdlJlZi5jdXJyZW50LmNsaWVudEhlaWdodClcbiAgICAgICAgICBjb250ZXh0LmNhbnZhcy53aWR0aCA9IGRpbWVuc2lvbnNcbiAgICAgICAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBkaW1lbnNpb25zXG4gICAgICAgICAgdGhpcy5jYW52YXNCb3VuZHMgPSBuZXcgUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1JlZi5jdXJyZW50Py53aWR0aCwgdGhpcy5jYW52YXNSZWYuY3VycmVudD8uaGVpZ2h0KVxuICAgICAgICAgIHRoaXMucXVhZFRyZWUgPSBuZXcgUXVhZFRyZWUodGhpcy5jYW52YXNCb3VuZHMsIHRoaXMuYm9kaWVzKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIEdyYXBoaWNzXG4gIHJlbmRlclNpbXVsYXRpb24oY2FudmFzQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgY2FudmFzQ29udGV4dC5maWxsU3R5bGUgPSBzdHlsZXMuY29sb3IxXG4gICAgY2FudmFzQ29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLmNhbnZhc0JvdW5kcy53LCB0aGlzLmNhbnZhc0JvdW5kcy5oKVxuICAgIGNhbnZhc0NvbnRleHQuc3Ryb2tlU3R5bGUgPSBzdHlsZXMuY29sb3I0XG4gICAgdGhpcy5ib2RpZXMuZm9yRWFjaCgocGFydGljbGU6IENpcmNsZUJvZHkpID0+IHtcbiAgICAgIGNhbnZhc0NvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgIGNhbnZhc0NvbnRleHQuYXJjKHBhcnRpY2xlLnBvc2l0aW9uLngsIHBhcnRpY2xlLnBvc2l0aW9uLnksIHBhcnRpY2xlLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpXG4gICAgICBjYW52YXNDb250ZXh0LnN0cm9rZSgpXG4gICAgfSlcbiAgICBpZiAodGhpcy5kcmFnVmVjdG9yLmlzRHJhZ2dpbmcpIHtcbiAgICAgIGNhbnZhc0NvbnRleHQuYmVnaW5QYXRoKClcbiAgICAgIGNhbnZhc0NvbnRleHQubW92ZVRvKHRoaXMuZHJhZ1ZlY3Rvci5zdGFydC54LCB0aGlzLmRyYWdWZWN0b3Iuc3RhcnQueSlcbiAgICAgIGNhbnZhc0NvbnRleHQubGluZVRvKHRoaXMuZHJhZ1ZlY3Rvci5lbmQueCwgdGhpcy5kcmFnVmVjdG9yLmVuZC55KVxuICAgICAgY2FudmFzQ29udGV4dC5zdHJva2UoKVxuICAgIH1cblxuXG4gICAgZnVuY3Rpb24gc2hvd1F1YWRUcmVlcyhxdWFkOiBRdWFkTm9kZSkge1xuICAgICAgY2FudmFzQ29udGV4dC5zdHJva2VSZWN0KHF1YWQuYm91bmRzLngsIHF1YWQuYm91bmRzLnksIHF1YWQuYm91bmRzLncsIHF1YWQuYm91bmRzLmgpXG4gICAgICBxdWFkLmxlYXZlcz8uZm9yRWFjaCgobGVhZjogUXVhZE5vZGUpID0+IHNob3dRdWFkVHJlZXMobGVhZikpXG4gICAgfVxuICAgIGlmICh0aGlzLnByb3BzLnNob3dRdWFkcykge1xuICAgICAgY2FudmFzQ29udGV4dC5zdHJva2VTdHlsZSA9IHN0eWxlcy5jb2xvcjNcbiAgICAgIHNob3dRdWFkVHJlZXModGhpcy5xdWFkVHJlZS5xdWFkUm9vdClcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgUGh5c2ljc1xuICB1cGRhdGVTaW11bGF0aW9uKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmJvZGllcy5mb3JFYWNoKChwYXJ0aWNsZTogQ2lyY2xlQm9keSkgPT4gcGFydGljbGUudGljayhkZWx0YSkpXG4gICAgdGhpcy5xdWFkVHJlZS5wcm9jZXNzKHRoaXMucXVhZFRyZWVQcm9jZWR1cmUoKSlcbiAgICB0aGlzLmJvZGllcy5mb3JFYWNoKChwYXJ0aWNsZTogQ2lyY2xlQm9keSkgPT4gcGFydGljbGUuY29sbGlkZUJvdW5kcyh0aGlzLmNhbnZhc0JvdW5kcykpXG4gIH1cblxuICAvKipcbiAgICogVGhlIHByb2NlZHVyZSBmb3IgZWFjaCBub2RlIG9uIGEgUXVhZFRyZWUgYWZ0ZXIgaW5zZXJ0aW9uIGlzIGZpbmlzaGVkXG4gICAqL1xuICBxdWFkVHJlZVByb2NlZHVyZSgpOiAoKHF1YWROb2RlOiBRdWFkTm9kZSkgPT4gdm9pZCkge1xuICAgIC8vIGN1cnJlbnRseSBkb2VzIGNvbGxpc2lvbnNcbiAgICByZXR1cm4gZnVuY3Rpb24gcHJvY2Vzc0NvbGxpc2lvbnMocXVhZE5vZGU6IFF1YWROb2RlKSB7XG4gICAgICBjb25zdCBjb2xsaXNpb25PYmplY3QgPSBxdWFkTm9kZS5xdWFkT2JqZWN0cyBhcyBDaXJjbGVCb2R5W11cbiAgICAgIC8vIHByb2Nlc3MgY3VycmVudCBsZXZlbCBjb2xsaXNpb25zXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpc2lvbk9iamVjdC5sZW5ndGg7IGkrKylcbiAgICAgICAgZm9yIChsZXQgaiA9IGkgKyAxOyBqIDwgY29sbGlzaW9uT2JqZWN0Lmxlbmd0aDsgaisrKVxuICAgICAgICAgIGNvbGxpc2lvbk9iamVjdFtpXS5jb2xsaWRlKGNvbGxpc2lvbk9iamVjdFtqXSlcblxuICAgICAgLy8gcHJvY2VzcyByZXNjdXJzaXZlIGNvbGxpc2lvbnNcbiAgICAgIGNvbnN0IHByb2Nlc3NMZWFmQ29sbGlzaW9ucyA9IChsZWF2ZXM6IFF1YWROb2RlW10gfCBudWxsKTogdm9pZCA9PiB7XG4gICAgICAgIGxlYXZlcz8uZm9yRWFjaCgobGVhZjogUXVhZE5vZGUpID0+IHtcbiAgICAgICAgICBjb2xsaXNpb25PYmplY3QuZm9yRWFjaCgob2JqZWN0OiBDaXJjbGVCb2R5KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsZWFmQ29sbGlzaW9uT2JqZWN0cyA9IGxlYWYucXVhZE9iamVjdHMgYXMgQ2lyY2xlQm9keVtdXG4gICAgICAgICAgICBsZWFmQ29sbGlzaW9uT2JqZWN0cy5mb3JFYWNoKChsZWFmT2JqZWN0OiBDaXJjbGVCb2R5KSA9PlxuICAgICAgICAgICAgICBvYmplY3QuY29sbGlkZShsZWFmT2JqZWN0KVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLy8gcmVjdXJzZVxuICAgICAgICAgIHByb2Nlc3NMZWFmQ29sbGlzaW9ucyhsZWFmLmxlYXZlcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIC8vIGNhbGwgb24gY3VycmVudCBsZWF2ZXNcbiAgICAgIHByb2Nlc3NMZWFmQ29sbGlzaW9ucyhxdWFkTm9kZS5sZWF2ZXMpXG5cbiAgICAgIC8vIHJlY3Vyc2Ugb24gZm9sbG93aW5nIHF1YWQgbm9kZXNcbiAgICAgIHF1YWROb2RlLmxlYXZlcz8uZm9yRWFjaCgobGVhZjogUXVhZE5vZGUpID0+IHByb2Nlc3NDb2xsaXNpb25zKGxlYWYpKVxuICAgIH1cbiAgfVxuXG4gIC8vIExvZ2ljIExvb3BcbiAgcmVuZGVyTG9vcCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdG9wTG9vcClcbiAgICAgIHJldHVyblxuXG4gICAgY29uc3QgbmV3dGltZSA9IHRpbWUoKVxuICAgIGNvbnN0IGZwcyA9IE1hdGgucm91bmQoMTAwMCAvIChuZXd0aW1lIC0gdGhpcy50aW1lc3RhbXApKVxuICAgIHRoaXMudGltZXN0YW1wID0gbmV3dGltZVxuXG4gICAgdGhpcy51cGRhdGVTaW11bGF0aW9uKDEgLyBmcHMpXG5cbiAgICBjb25zdCBjYW52YXMgPSB0aGlzLmNhbnZhc1JlZi5jdXJyZW50XG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcz8uZ2V0Q29udGV4dCgnMmQnKVxuXG4gICAgaWYgKGNvbnRleHQpIHtcbiAgICAgIHRoaXMucmVuZGVyU2ltdWxhdGlvbihjb250ZXh0KVxuXG4gICAgICBpZiAodGhpcy5wcm9wcy5zaG93RlBTKSB7XG4gICAgICAgIGNvbnRleHQuc2F2ZSgpXG4gICAgICAgIGNvbnRleHQuZm9udCA9ICcyNXB4IEFyaWFsJ1xuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHN0eWxlcy5jb2xvcjRcbiAgICAgICAgY29udGV4dC5maWxsVGV4dCgnRlBTOiAnICsgZnBzLCAxMCwgMzApXG4gICAgICAgIGNvbnRleHQucmVzdG9yZSgpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVxdWVzdCBhbm90aGVyIGZyYW1lIHRvIHRpY2tcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5yZW5kZXJMb29wKVxuICB9XG5cbiAgbW91c2VEb3duKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW52YXNSZWYuY3VycmVudCkge1xuICAgICAgdGhpcy5kcmFnVmVjdG9yLnN0YXJ0ID0gdGhpcy5kcmFnVmVjdG9yLmVuZCA9IG5ldyBWZWN0b3IyRChlLmNsaWVudFggLSB0aGlzLmNhbnZhc1JlZi5jdXJyZW50Py5vZmZzZXRMZWZ0LCBlLmNsaWVudFkgLSB0aGlzLmNhbnZhc1JlZi5jdXJyZW50Py5vZmZzZXRUb3ApXG4gICAgICB0aGlzLmRyYWdWZWN0b3IuaXNEcmFnZ2luZyA9IHRydWVcbiAgICB9XG4gIH1cblxuICBtb3VzZURyYWcoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRyYWdWZWN0b3IuaXNEcmFnZ2luZyAmJiB0aGlzLmNhbnZhc1JlZi5jdXJyZW50KVxuICAgICAgdGhpcy5kcmFnVmVjdG9yLmVuZCA9IG5ldyBWZWN0b3IyRChlLmNsaWVudFggLSB0aGlzLmNhbnZhc1JlZi5jdXJyZW50Py5vZmZzZXRMZWZ0LCBlLmNsaWVudFkgLSB0aGlzLmNhbnZhc1JlZi5jdXJyZW50Py5vZmZzZXRUb3ApXG4gIH1cblxuICBtb3VzZVVwKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkQm9keSh0aGlzLmRyYWdWZWN0b3Iuc3RhcnQsIHRoaXMuZHJhZ1ZlY3Rvci5zdGFydC52ZWN0b3JUbyh0aGlzLmRyYWdWZWN0b3IuZW5kKSwgdGhpcy5wcm9wcy5yYWRpdXMpXG4gICAgdGhpcy5kcmFnVmVjdG9yLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICB9XG5cbiAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYW52YXNfY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiByZWY9e3RoaXMuY2FudmFzRGl2UmVmfSBjbGFzc05hbWU9e3N0eWxlcy5jYW52YXNfd3JhcHBlcn0+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e3RoaXMuY2FudmFzUmVmfSBvbk1vdXNlRG93bj17dGhpcy5tb3VzZURvd259IG9uTW91c2VVcD17dGhpcy5tb3VzZVVwfSBvbk1vdXNlTW92ZT17dGhpcy5tb3VzZURyYWd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==