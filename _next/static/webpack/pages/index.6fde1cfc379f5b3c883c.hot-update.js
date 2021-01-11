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
/* harmony import */ var _utils_physics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/physics */ "./utils/physics.ts");








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

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "debug", {
      showFPS: true,
      showQuads: true
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "timestamp", time());

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "dragVector", {
      start: new _utils_physics__WEBPACK_IMPORTED_MODULE_11__["Vector2D"](),
      end: new _utils_physics__WEBPACK_IMPORTED_MODULE_11__["Vector2D"](),
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
      if ('showFPS' in vars) this.debug.showFPS = !!vars.showFPS;
      if ('showQuads' in vars) this.debug.showQuads = !!vars.showQuads;
    }
  }, {
    key: "clearBodies",
    value: function clearBodies() {
      this.bodies = new Array();
      this.quadTree.quadObjects = this.bodies;
    }
  }, {
    key: "addBody",
    value: function addBody(radius, velocity, position) {
      this.quadTree.insert(new _utils_physics__WEBPACK_IMPORTED_MODULE_11__["CircleBody"]((position === null || position === void 0 ? void 0 : position.x) || radius + (this.canvasBounds.w - 2 * radius) * Math.random(), (position === null || position === void 0 ? void 0 : position.y) || radius + (this.canvasBounds.h - 2 * radius) * Math.random(), (velocity === null || velocity === void 0 ? void 0 : velocity.x) || 100 * (Math.random() - 0.5), (velocity === null || velocity === void 0 ? void 0 : velocity.y) || 100 * (Math.random() - 0.5), radius));
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
            this.canvasBounds = new _utils_physics__WEBPACK_IMPORTED_MODULE_11__["Rect"](0, 0, (_this$canvasRef$curre = this.canvasRef.current) === null || _this$canvasRef$curre === void 0 ? void 0 : _this$canvasRef$curre.width, (_this$canvasRef$curre2 = this.canvasRef.current) === null || _this$canvasRef$curre2 === void 0 ? void 0 : _this$canvasRef$curre2.height);
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

      if (this.debug.showQuads) {
        canvasContext.strokeStyle = _simulation_canvas_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.color4;
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

        if (this.debug.showFPS) {
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

        this.dragVector.start = this.dragVector.end = new _utils_physics__WEBPACK_IMPORTED_MODULE_11__["Vector2D"](e.clientX - ((_this$canvasRef$curre3 = this.canvasRef.current) === null || _this$canvasRef$curre3 === void 0 ? void 0 : _this$canvasRef$curre3.offsetLeft), e.clientY - ((_this$canvasRef$curre4 = this.canvasRef.current) === null || _this$canvasRef$curre4 === void 0 ? void 0 : _this$canvasRef$curre4.offsetTop));
        this.dragVector.isDragging = true;
      }
    }
  }, {
    key: "mouseDrag",
    value: function mouseDrag(e) {
      var _this$canvasRef$curre5, _this$canvasRef$curre6;

      if (this.dragVector.isDragging && this.canvasRef.current) this.dragVector.end = new _utils_physics__WEBPACK_IMPORTED_MODULE_11__["Vector2D"](e.clientX - ((_this$canvasRef$curre5 = this.canvasRef.current) === null || _this$canvasRef$curre5 === void 0 ? void 0 : _this$canvasRef$curre5.offsetLeft), e.clientY - ((_this$canvasRef$curre6 = this.canvasRef.current) === null || _this$canvasRef$curre6 === void 0 ? void 0 : _this$canvasRef$curre6.offsetTop));
    }
  }, {
    key: "mouseUp",
    value: function mouseUp() {
      this.addBody(this.props.spawnRadius, this.dragVector.end.difference(this.dragVector.start), this.dragVector.start);
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
            lineNumber: 195,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 193,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zaW11bGF0aW9uLWNhbnZhcy50c3giXSwibmFtZXMiOlsidGltZSIsIkRhdGUiLCJnZXRUaW1lIiwiU2ltdWxhdGlvbkNhbnZhcyIsInByb3BzIiwic2hvd0ZQUyIsInNob3dRdWFkcyIsInN0YXJ0IiwiVmVjdG9yMkQiLCJlbmQiLCJpc0RyYWdnaW5nIiwiQXJyYXkiLCJjcmVhdGVSZWYiLCJzdG9wTG9vcCIsInJlbmRlckxvb3AiLCJiaW5kIiwibW91c2VEb3duIiwibW91c2VVcCIsIm1vdXNlRHJhZyIsInZhcnMiLCJRdWFkVHJlZSIsImNhcGFjaXR5IiwidW5kZWZpbmVkIiwibWF4RGVwdGgiLCJkZWJ1ZyIsImJvZGllcyIsInF1YWRUcmVlIiwicXVhZE9iamVjdHMiLCJyYWRpdXMiLCJ2ZWxvY2l0eSIsInBvc2l0aW9uIiwiaW5zZXJ0IiwiQ2lyY2xlQm9keSIsIngiLCJjYW52YXNCb3VuZHMiLCJ3IiwiTWF0aCIsInJhbmRvbSIsInkiLCJoIiwid2luZG93Iiwib25yZXNpemUiLCJzZXR1cFF1YWRUcmVlIiwiY2FudmFzRGl2UmVmIiwiY3VycmVudCIsImNhbnZhc1JlZiIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZGltZW5zaW9ucyIsIm1pbiIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiY2FudmFzIiwid2lkdGgiLCJoZWlnaHQiLCJSZWN0IiwiY2FudmFzQ29udGV4dCIsImZpbGxTdHlsZSIsInN0eWxlcyIsImNvbG9yMSIsImZpbGxSZWN0Iiwic3Ryb2tlU3R5bGUiLCJjb2xvcjQiLCJmb3JFYWNoIiwicGFydGljbGUiLCJiZWdpblBhdGgiLCJhcmMiLCJQSSIsInN0cm9rZSIsImRyYWdWZWN0b3IiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzaG93UXVhZFRyZWVzIiwicXVhZCIsInN0cm9rZVJlY3QiLCJib3VuZHMiLCJsZWF2ZXMiLCJsZWFmIiwicXVhZFJvb3QiLCJkZWx0YSIsInRpY2siLCJwcm9jZXNzIiwicXVhZFRyZWVQcm9jZWR1cmUiLCJjb2xsaWRlQm91bmRzIiwicHJvY2Vzc0NvbGxpc2lvbnMiLCJxdWFkTm9kZSIsImNvbGxpc2lvbk9iamVjdCIsImkiLCJsZW5ndGgiLCJqIiwiY29sbGlkZSIsInByb2Nlc3NMZWFmQ29sbGlzaW9ucyIsIm9iamVjdCIsImxlYWZDb2xsaXNpb25PYmplY3RzIiwibGVhZk9iamVjdCIsIm5ld3RpbWUiLCJmcHMiLCJyb3VuZCIsInRpbWVzdGFtcCIsInVwZGF0ZVNpbXVsYXRpb24iLCJyZW5kZXJTaW11bGF0aW9uIiwic2F2ZSIsImZvbnQiLCJmaWxsVGV4dCIsInJlc3RvcmUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJlIiwiY2xpZW50WCIsIm9mZnNldExlZnQiLCJjbGllbnRZIiwib2Zmc2V0VG9wIiwiYWRkQm9keSIsInNwYXduUmFkaXVzIiwiZGlmZmVyZW5jZSIsImNhbnZhc19jb250YWluZXIiLCJjYW52YXNfd3JhcHBlciIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQU0sSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBQU47QUFBQSxDQUFiOztJQUdxQkMsZ0I7Ozs7O0FBVW5CLDRCQUFZQyxLQUFaLEVBQTBDO0FBQUE7O0FBQUE7O0FBQ3hDLDhCQUFNQSxLQUFOOztBQUR3QyxnTkFUM0I7QUFBRUMsYUFBTyxFQUFFLElBQVg7QUFBaUJDLGVBQVMsRUFBRTtBQUE1QixLQVMyQjs7QUFBQSxvTkFSdEJOLElBQUksRUFRa0I7O0FBQUEscU5BUHJCO0FBQUVPLFdBQUssRUFBRSxJQUFJQyx3REFBSixFQUFUO0FBQXVCQyxTQUFHLEVBQUUsSUFBSUQsd0RBQUosRUFBNUI7QUFBMENFLGdCQUFVLEVBQUU7QUFBdEQsS0FPcUI7O0FBQUE7O0FBQUE7O0FB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QTdELENBQXRCO0FBQ0g7Ozs4QkFFZTtBQUNkLFdBQUtDLE9BQUwsQ0FBYSxLQUFLM0csS0FBTCxDQUFXNEcsV0FBeEIsRUFBcUMsS0FBSzNDLFVBQUwsQ0FBZ0I1RCxHQUFoQixDQUFvQndHLFVBQXBCLENBQStCLEtBQUs1QyxVQUFMLENBQWdCOUQsS0FBL0MsQ0FBckMsRUFBNEYsS0FBSzhELFVBQUwsQ0FBZ0I5RCxLQUE1RztBQUNBLFdBQUs4RCxVQUFMLENBQWdCM0QsVUFBaEIsR0FBNkIsS0FBN0I7QUFDRDs7OzZCQUVxQjtBQUNwQiwwQkFDRTtBQUFLLGlCQUFTLEVBQUVnRCxxRUFBTSxDQUFDd0QsZ0JBQXZCO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUUsS0FBS3ZFLFlBQWY7QUFBNkIsbUJBQVMsRUFBRWUscUVBQU0sQ0FBQ3lELGNBQS9DO0FBQUEsaUNBQ0U7QUFBUSxlQUFHLEVBQUUsS0FBS3RFLFNBQWxCO0FBQTZCLHVCQUFXLEVBQUUsS0FBSzdCLFNBQS9DO0FBQTBELHFCQUFTLEVBQUUsS0FBS0MsT0FBMUU7QUFBbUYsdUJBQVcsRUFBRSxLQUFLQztBQUFyRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERjtBQU9EOzs7O0VBN0wyQ2tHLCtDIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZmZGUxY2ZjMzc5ZjViM2M4ODNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIGNyZWF0ZVJlZiwgUmVmT2JqZWN0LCBNb3VzZUV2ZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2ltdWxhdGlvbi1jYW52YXMubW9kdWxlLnNjc3MnXG5cbmltcG9ydCB7IFF1YWROb2RlLCBRdWFkVHJlZSB9IGZyb20gJy4uL3V0aWxzL3F1YWR0cmVlJ1xuaW1wb3J0IHsgUmVjdCwgQ2lyY2xlQm9keSwgVmVjdG9yMkQgfSBmcm9tICcuLi91dGlscy9waHlzaWNzJ1xuXG5jb25zdCB0aW1lID0gKCkgPT4gbmV3IERhdGUoKS5nZXRUaW1lKClcblxuaW50ZXJmYWNlIFNpbXVsYXRpb25DYW52YXNQcm9wcyB7IHNwYXduUmFkaXVzOiBudW1iZXIgfVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2ltdWxhdGlvbkNhbnZhcyBleHRlbmRzIENvbXBvbmVudDxTaW11bGF0aW9uQ2FudmFzUHJvcHM+IHtcbiAgcHVibGljIGRlYnVnID0geyBzaG93RlBTOiB0cnVlLCBzaG93UXVhZHM6IHRydWUgfVxuICBwcml2YXRlIHRpbWVzdGFtcCA9IHRpbWUoKVxuICBwcml2YXRlIGRyYWdWZWN0b3IgPSB7IHN0YXJ0OiBuZXcgVmVjdG9yMkQsIGVuZDogbmV3IFZlY3RvcjJELCBpc0RyYWdnaW5nOiBmYWxzZSB9XG4gIHByaXZhdGUgc3RvcExvb3A6IGJvb2xlYW5cbiAgcHJpdmF0ZSBxdWFkVHJlZSE6IFF1YWRUcmVlXG4gIHByaXZhdGUgY2FudmFzQm91bmRzITogUmVjdFxuICBwcml2YXRlIGJvZGllcyA9IG5ldyBBcnJheTxDaXJjbGVCb2R5PigpXG4gIHByaXZhdGUgY2FudmFzUmVmOiBSZWZPYmplY3Q8SFRNTENhbnZhc0VsZW1lbnQ+ID0gY3JlYXRlUmVmKClcbiAgcHJpdmF0ZSBjYW52YXNEaXZSZWY6IFJlZk9iamVjdDxIVE1MRGl2RWxlbWVudD4gPSBjcmVhdGVSZWYoKVxuICBjb25zdHJ1Y3Rvcihwcm9wczogU2ltdWxhdGlvbkNhbnZhc1Byb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG4gICAgdGhpcy5zdG9wTG9vcCA9IGZhbHNlXG4gICAgLy8gYmluZCBmb3IgY29udGV4dCBpbiBhbmltYXRpb24gY2FsbGJhY2tcbiAgICB0aGlzLnJlbmRlckxvb3AgPSB0aGlzLnJlbmRlckxvb3AuYmluZCh0aGlzKVxuICAgIHRoaXMubW91c2VEb3duID0gdGhpcy5tb3VzZURvd24uYmluZCh0aGlzKVxuICAgIHRoaXMubW91c2VVcCA9IHRoaXMubW91c2VVcC5iaW5kKHRoaXMpXG4gICAgdGhpcy5tb3VzZURyYWcgPSB0aGlzLm1vdXNlRHJhZy5iaW5kKHRoaXMpXG4gIH1cblxuICBwdWJsaWMgdXBkYXRlVmFycyh2YXJzOiB7IGNhcGFjaXR5PzogbnVtYmVyLCBtYXhEZXB0aD86IG51bWJlciwgc2hvd0ZQUz86IGJvb2xlYW4sIHNob3dRdWFkcz86IGJvb2xlYW4gfSk6IHZvaWQge1xuICAgIGlmICgnY2FwYWNpdHknIGluIHZhcnMpXG4gICAgICBRdWFkVHJlZS5jYXBhY2l0eSA9IHZhcnMuY2FwYWNpdHkgPT09IHVuZGVmaW5lZCA/IDEgOiB2YXJzLmNhcGFjaXR5XG4gICAgaWYgKCdtYXhEZXB0aCcgaW4gdmFycylcbiAgICAgIFF1YWRUcmVlLm1heERlcHRoID0gdmFycy5tYXhEZXB0aCA9PT0gdW5kZWZpbmVkID8gMSA6IHZhcnMubWF4RGVwdGhcbiAgICBpZiAoJ3Nob3dGUFMnIGluIHZhcnMpXG4gICAgICB0aGlzLmRlYnVnLnNob3dGUFMgPSAhIXZhcnMuc2hvd0ZQU1xuICAgIGlmICgnc2hvd1F1YWRzJyBpbiB2YXJzKVxuICAgICAgdGhpcy5kZWJ1Zy5zaG93UXVhZHMgPSAhIXZhcnMuc2hvd1F1YWRzXG4gIH1cblxuICBwdWJsaWMgY2xlYXJCb2RpZXMoKTogdm9pZCB7XG4gICAgdGhpcy5ib2RpZXMgPSBuZXcgQXJyYXk8Q2lyY2xlQm9keT4oKVxuICAgIHRoaXMucXVhZFRyZWUucXVhZE9iamVjdHMgPSB0aGlzLmJvZGllc1xuICB9XG5cbiAgcHVibGljIGFkZEJvZHkocmFkaXVzOiBudW1iZXIsIHZlbG9jaXR5PzogVmVjdG9yMkQsIHBvc2l0aW9uPzogVmVjdG9yMkQpOiB2b2lkIHtcbiAgICB0aGlzLnF1YWRUcmVlLmluc2VydChcbiAgICAgIG5ldyBDaXJjbGVCb2R5KFxuICAgICAgICBwb3NpdGlvbj8ueCB8fCByYWRpdXMgKyAodGhpcy5jYW52YXNCb3VuZHMudyAtIDIgKiByYWRpdXMpICogTWF0aC5yYW5kb20oKSxcbiAgICAgICAgcG9zaXRpb24/LnkgfHwgcmFkaXVzICsgKHRoaXMuY2FudmFzQm91bmRzLmggLSAyICogcmFkaXVzKSAqIE1hdGgucmFuZG9tKCksXG4gICAgICAgIHZlbG9jaXR5Py54IHx8IDEwMCAqIChNYXRoLnJhbmRvbSgpIC0gMC41KSxcbiAgICAgICAgdmVsb2NpdHk/LnkgfHwgMTAwICogKE1hdGgucmFuZG9tKCkgLSAwLjUpLFxuICAgICAgICByYWRpdXNcbiAgICAgIClcbiAgICApXG4gIH1cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3BMb29wID0gdHJ1ZVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKTogdm9pZCB7XG4gICAgd2luZG93Lm9ucmVzaXplID0gKCkgPT4gdGhpcy5zZXR1cFF1YWRUcmVlKClcbiAgICB0aGlzLnNldHVwUXVhZFRyZWUoKVxuICAgIHRoaXMucmVuZGVyTG9vcCgpXG4gIH1cblxuICBzZXR1cFF1YWRUcmVlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbnZhc0RpdlJlZj8uY3VycmVudCkge1xuICAgICAgaWYgKHRoaXMuY2FudmFzUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FudmFzUmVmLmN1cnJlbnQuZ2V0Q29udGV4dCgnMmQnKVxuICAgICAgICBpZiAoY29udGV4dCkge1xuICAgICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSBNYXRoLm1pbih0aGlzLmNhbnZhc0RpdlJlZi5jdXJyZW50LmNsaWVudFdpZHRoLCB0aGlzLmNhbnZhc0RpdlJlZi5jdXJyZW50LmNsaWVudEhlaWdodClcbiAgICAgICAgICBjb250ZXh0LmNhbnZhcy53aWR0aCA9IGRpbWVuc2lvbnNcbiAgICAgICAgICBjb250ZXh0LmNhbnZhcy5oZWlnaHQgPSBkaW1lbnNpb25zXG4gICAgICAgICAgdGhpcy5jYW52YXNCb3VuZHMgPSBuZXcgUmVjdCgwLCAwLCB0aGlzLmNhbnZhc1JlZi5jdXJyZW50Py53aWR0aCwgdGhpcy5jYW52YXNSZWYuY3VycmVudD8uaGVpZ2h0KVxuICAgICAgICAgIHRoaXMucXVhZFRyZWUgPSBuZXcgUXVhZFRyZWUodGhpcy5jYW52YXNCb3VuZHMsIHRoaXMuYm9kaWVzKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyU2ltdWxhdGlvbihjYW52YXNDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICBjYW52YXNDb250ZXh0LmZpbGxTdHlsZSA9IHN0eWxlcy5jb2xvcjFcbiAgICBjYW52YXNDb250ZXh0LmZpbGxSZWN0KDAsIDAsIHRoaXMuY2FudmFzQm91bmRzLncsIHRoaXMuY2FudmFzQm91bmRzLmgpXG4gICAgY2FudmFzQ29udGV4dC5zdHJva2VTdHlsZSA9IHN0eWxlcy5jb2xvcjRcbiAgICB0aGlzLmJvZGllcy5mb3JFYWNoKChwYXJ0aWNsZTogQ2lyY2xlQm9keSkgPT4ge1xuICAgICAgY2FudmFzQ29udGV4dC5iZWdpblBhdGgoKVxuICAgICAgY2FudmFzQ29udGV4dC5hcmMocGFydGljbGUucG9zaXRpb24ueCwgcGFydGljbGUucG9zaXRpb24ueSwgcGFydGljbGUucmFkaXVzLCAwLCAyICogTWF0aC5QSSlcbiAgICAgIGNhbnZhc0NvbnRleHQuc3Ryb2tlKClcbiAgICB9KVxuICAgIGlmICh0aGlzLmRyYWdWZWN0b3IuaXNEcmFnZ2luZykge1xuICAgICAgY2FudmFzQ29udGV4dC5iZWdpblBhdGgoKVxuICAgICAgY2FudmFzQ29udGV4dC5tb3ZlVG8odGhpcy5kcmFnVmVjdG9yLnN0YXJ0LngsIHRoaXMuZHJhZ1ZlY3Rvci5zdGFydC55KVxuICAgICAgY2FudmFzQ29udGV4dC5saW5lVG8odGhpcy5kcmFnVmVjdG9yLmVuZC54LCB0aGlzLmRyYWdWZWN0b3IuZW5kLnkpXG4gICAgICBjYW52YXNDb250ZXh0LnN0cm9rZSgpXG4gICAgfVxuXG5cbiAgICBmdW5jdGlvbiBzaG93UXVhZFRyZWVzKHF1YWQ6IFF1YWROb2RlKSB7XG4gICAgICBjYW52YXNDb250ZXh0LnN0cm9rZVJlY3QocXVhZC5ib3VuZHMueCwgcXVhZC5ib3VuZHMueSwgcXVhZC5ib3VuZHMudywgcXVhZC5ib3VuZHMuaClcbiAgICAgIHF1YWQubGVhdmVzPy5mb3JFYWNoKChsZWFmOiBRdWFkTm9kZSkgPT4gc2hvd1F1YWRUcmVlcyhsZWFmKSlcbiAgICB9XG4gICAgaWYgKHRoaXMuZGVidWcuc2hvd1F1YWRzKSB7XG4gICAgICBjYW52YXNDb250ZXh0LnN0cm9rZVN0eWxlID0gc3R5bGVzLmNvbG9yNFxuICAgICAgc2hvd1F1YWRUcmVlcyh0aGlzLnF1YWRUcmVlLnF1YWRSb290KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVNpbXVsYXRpb24oZGVsdGE6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYm9kaWVzLmZvckVhY2goKHBhcnRpY2xlOiBDaXJjbGVCb2R5KSA9PiBwYXJ0aWNsZS50aWNrKGRlbHRhKSlcbiAgICB0aGlzLnF1YWRUcmVlLnByb2Nlc3ModGhpcy5xdWFkVHJlZVByb2NlZHVyZSgpKVxuICAgIHRoaXMuYm9kaWVzLmZvckVhY2goKHBhcnRpY2xlOiBDaXJjbGVCb2R5KSA9PiBwYXJ0aWNsZS5jb2xsaWRlQm91bmRzKHRoaXMuY2FudmFzQm91bmRzKSlcbiAgfVxuXG4gIHF1YWRUcmVlUHJvY2VkdXJlKCk6ICgocXVhZE5vZGU6IFF1YWROb2RlKSA9PiB2b2lkKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHByb2Nlc3NDb2xsaXNpb25zKHF1YWROb2RlOiBRdWFkTm9kZSkge1xuICAgICAgY29uc3QgY29sbGlzaW9uT2JqZWN0ID0gcXVhZE5vZGUucXVhZE9iamVjdHMgYXMgQ2lyY2xlQm9keVtdXG4gICAgICAvLyBwcm9jZXNzIGN1cnJlbnQgbGV2ZWwgY29sbGlzaW9uc1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaXNpb25PYmplY3QubGVuZ3RoOyBpKyspXG4gICAgICAgIGZvciAobGV0IGogPSBpICsgMTsgaiA8IGNvbGxpc2lvbk9iamVjdC5sZW5ndGg7IGorKylcbiAgICAgICAgICBjb2xsaXNpb25PYmplY3RbaV0uY29sbGlkZShjb2xsaXNpb25PYmplY3Rbal0pXG5cbiAgICAgIC8vIHByb2Nlc3MgcmVzY3Vyc2l2ZSBjb2xsaXNpb25zXG4gICAgICBjb25zdCBwcm9jZXNzTGVhZkNvbGxpc2lvbnMgPSAobGVhdmVzOiBRdWFkTm9kZVtdIHwgbnVsbCk6IHZvaWQgPT4ge1xuICAgICAgICBsZWF2ZXM/LmZvckVhY2goKGxlYWY6IFF1YWROb2RlKSA9PiB7XG4gICAgICAgICAgY29sbGlzaW9uT2JqZWN0LmZvckVhY2goKG9iamVjdDogQ2lyY2xlQm9keSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGVhZkNvbGxpc2lvbk9iamVjdHMgPSBsZWFmLnF1YWRPYmplY3RzIGFzIENpcmNsZUJvZHlbXVxuICAgICAgICAgICAgbGVhZkNvbGxpc2lvbk9iamVjdHMuZm9yRWFjaCgobGVhZk9iamVjdDogQ2lyY2xlQm9keSkgPT5cbiAgICAgICAgICAgICAgb2JqZWN0LmNvbGxpZGUobGVhZk9iamVjdClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICAgIC8vIHJlY3Vyc2VcbiAgICAgICAgICBwcm9jZXNzTGVhZkNvbGxpc2lvbnMobGVhZi5sZWF2ZXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICAvLyBjYWxsIG9uIGN1cnJlbnQgbGVhdmVzXG4gICAgICBwcm9jZXNzTGVhZkNvbGxpc2lvbnMocXVhZE5vZGUubGVhdmVzKVxuXG4gICAgICAvLyByZWN1cnNlIG9uIGZvbGxvd2luZyBxdWFkIG5vZGVzXG4gICAgICBxdWFkTm9kZS5sZWF2ZXM/LmZvckVhY2goKGxlYWY6IFF1YWROb2RlKSA9PiBwcm9jZXNzQ29sbGlzaW9ucyhsZWFmKSlcbiAgICB9XG4gIH1cblxuICByZW5kZXJMb29wKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnN0b3BMb29wKVxuICAgICAgcmV0dXJuXG5cbiAgICBjb25zdCBuZXd0aW1lID0gdGltZSgpXG4gICAgY29uc3QgZnBzID0gTWF0aC5yb3VuZCgxMDAwIC8gKG5ld3RpbWUgLSB0aGlzLnRpbWVzdGFtcCkpXG4gICAgdGhpcy50aW1lc3RhbXAgPSBuZXd0aW1lXG5cbiAgICB0aGlzLnVwZGF0ZVNpbXVsYXRpb24oMSAvIGZwcylcblxuICAgIGNvbnN0IGNhbnZhcyA9IHRoaXMuY2FudmFzUmVmLmN1cnJlbnRcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzPy5nZXRDb250ZXh0KCcyZCcpXG5cbiAgICBpZiAoY29udGV4dCkge1xuICAgICAgdGhpcy5yZW5kZXJTaW11bGF0aW9uKGNvbnRleHQpXG5cbiAgICAgIGlmICh0aGlzLmRlYnVnLnNob3dGUFMpIHtcbiAgICAgICAgY29udGV4dC5zYXZlKClcbiAgICAgICAgY29udGV4dC5mb250ID0gJzI1cHggQXJpYWwnXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gc3R5bGVzLmNvbG9yNFxuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KCdGUFM6ICcgKyBmcHMsIDEwLCAzMClcbiAgICAgICAgY29udGV4dC5yZXN0b3JlKClcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXF1ZXN0IGFub3RoZXIgZnJhbWUgdG8gdGlja1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJlbmRlckxvb3ApXG4gIH1cblxuICBtb3VzZURvd24oZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbnZhc1JlZi5jdXJyZW50KSB7XG4gICAgICB0aGlzLmRyYWdWZWN0b3Iuc3RhcnQgPSB0aGlzLmRyYWdWZWN0b3IuZW5kID0gbmV3IFZlY3RvcjJEKGUuY2xpZW50WCAtIHRoaXMuY2FudmFzUmVmLmN1cnJlbnQ/Lm9mZnNldExlZnQsIGUuY2xpZW50WSAtIHRoaXMuY2FudmFzUmVmLmN1cnJlbnQ/Lm9mZnNldFRvcClcbiAgICAgIHRoaXMuZHJhZ1ZlY3Rvci5pc0RyYWdnaW5nID0gdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIG1vdXNlRHJhZyhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZHJhZ1ZlY3Rvci5pc0RyYWdnaW5nICYmIHRoaXMuY2FudmFzUmVmLmN1cnJlbnQpXG4gICAgICB0aGlzLmRyYWdWZWN0b3IuZW5kID0gbmV3IFZlY3RvcjJEKGUuY2xpZW50WCAtIHRoaXMuY2FudmFzUmVmLmN1cnJlbnQ/Lm9mZnNldExlZnQsIGUuY2xpZW50WSAtIHRoaXMuY2FudmFzUmVmLmN1cnJlbnQ/Lm9mZnNldFRvcClcbiAgfVxuXG4gIG1vdXNlVXAoKTogdm9pZCB7XG4gICAgdGhpcy5hZGRCb2R5KHRoaXMucHJvcHMuc3Bhd25SYWRpdXMsIHRoaXMuZHJhZ1ZlY3Rvci5lbmQuZGlmZmVyZW5jZSh0aGlzLmRyYWdWZWN0b3Iuc3RhcnQpLCB0aGlzLmRyYWdWZWN0b3Iuc3RhcnQpXG4gICAgdGhpcy5kcmFnVmVjdG9yLmlzRHJhZ2dpbmcgPSBmYWxzZVxuICB9XG5cbiAgcmVuZGVyKCk6IEpTWC5FbGVtZW50IHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYW52YXNfY29udGFpbmVyfT5cbiAgICAgICAgPGRpdiByZWY9e3RoaXMuY2FudmFzRGl2UmVmfSBjbGFzc05hbWU9e3N0eWxlcy5jYW52YXNfd3JhcHBlcn0+XG4gICAgICAgICAgPGNhbnZhcyByZWY9e3RoaXMuY2FudmFzUmVmfSBvbk1vdXNlRG93bj17dGhpcy5tb3VzZURvd259IG9uTW91c2VVcD17dGhpcy5tb3VzZVVwfSBvbk1vdXNlTW92ZT17dGhpcy5tb3VzZURyYWd9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==