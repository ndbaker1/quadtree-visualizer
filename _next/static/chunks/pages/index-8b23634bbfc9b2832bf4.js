_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(t,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=a,e.useAmp=function(){return a(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.ampFirst,n=void 0!==e&&e,r=t.hybrid,o=void 0!==r&&r,i=t.hasQuery,a=void 0!==i&&i;return n||o&&a}},"/EDR":function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"23aj":function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return A}));var r=n("nKUr");function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function f(t){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function l(t,e){return!e||"object"!==f(e)&&"function"!==typeof e?s(t):e}function d(t){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=n("rePB"),v=n("q1tI"),p=n("g4pe"),y=n.n(p),b=n("GITI"),m=n.n(b),g=n("oIG3"),w=n.n(g),O=function t(e,n,r,i){o(this,t),Object(h.a)(this,"x",void 0),Object(h.a)(this,"y",void 0),Object(h.a)(this,"w",void 0),Object(h.a)(this,"h",void 0),this.x=e||0,this.y=n||0,this.w=r||0,this.h=i||0},x=function(){function t(e,n){o(this,t),Object(h.a)(this,"x",void 0),Object(h.a)(this,"y",void 0),this.x=e||0,this.y=n||0}return a(t,[{key:"magnitude",value:function(){return Math.sqrt(this.x*this.x+this.y*this.y)}},{key:"angle",value:function(){return Math.atan2(-this.y,this.x)}},{key:"angleBetween",value:function(t){return(this.angle()-t.angle()+2*Math.PI)%Math.PI}},{key:"add",value:function(t){this.x+=t.x,this.y+=t.y}},{key:"rotated",value:function(e){return new t(this.x*Math.cos(e)-this.y*Math.sin(e),this.x*Math.sin(e)-this.y*Math.cos(e))}},{key:"difference",value:function(e){return new t(this.x-e.x,this.y-e.y)}},{key:"scale",value:function(e){return new t(this.x*e,this.y*e)}},{key:"reversed",value:function(){return this.scale(-1)}},{key:"normalized",value:function(){var e=this.magnitude();return new t(this.x/e,this.y/e)}}]),t}(),j=function(){function t(e,n,r,i,a){o(this,t),Object(h.a)(this,"radius",void 0),Object(h.a)(this,"mass",void 0),Object(h.a)(this,"position",void 0),Object(h.a)(this,"velocity",void 0),this.radius=a||10,this.mass=this.radius,this.position=(e||n)&&new x(e,n)||new x,this.velocity=(r||i)&&new x(r,i)||new x}return a(t,[{key:"tick",value:function(t){this.position.add(this.velocity.scale(t))}},{key:"collide",value:function(t){t.position.difference(this.position).magnitude(),this.radius,t.radius}},{key:"collideBounds",value:function(t){switch(this.exitingBounds(t)){case"TOP":this.position.y=this.radius,this.velocity.y*=-1;break;case"BOTTOM":this.position.y=t.y+t.h-this.radius,this.velocity.y*=-1;break;case"LEFT":this.position.x=this.radius,this.velocity.x*=-1;break;case"RIGHT":this.position.x=t.x+t.w-this.radius,this.velocity.x*=-1}}},{key:"exitingBounds",value:function(t){return this.position.x+this.radius>t.x+t.w?"RIGHT":this.position.x-this.radius<t.x?"LEFT":this.position.y+this.radius>t.y+t.h?"BOTTOM":this.position.y-this.radius<t.y?"TOP":"INSIDE"}},{key:"insideRect",value:function(t){return this.position.x+this.radius<=t.x+t.w&&this.position.x-this.radius>=t.x&&this.position.y+this.radius<=t.y+t.h&&this.position.y-this.radius>=t.y}}]),t}();function _(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"===typeof t)return k(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return k(t,e)}(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return a=t.done,t},e:function(t){s=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function k(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var M=function(){function t(e,n){o(this,t),Object(h.a)(this,"bounds",void 0),Object(h.a)(this,"leaves",void 0),Object(h.a)(this,"quadObjects",new Array),Object(h.a)(this,"depth",void 0),this.bounds=e,this.depth=n}return a(t,[{key:"clear",value:function(){var t;this.quadObjects=new Array,null===(t=this.leaves)||void 0===t||t.forEach((function(t){return t.clear()})),this.leaves=null}},{key:"process",value:function(t){var e;t(this),null===(e=this.leaves)||void 0===e||e.forEach((function(e){return e.process(t)}))}},{key:"subdivide",value:function(){var e=this,n=this.bounds.w/2,r=this.bounds.h/2,o=this.depth+1;this.leaves=[new t(new O(this.bounds.x,this.bounds.y,n,r),o),new t(new O(this.bounds.x+n,this.bounds.y,n,r),o),new t(new O(this.bounds.x,this.bounds.y+r,n,r),o),new t(new O(this.bounds.x+n,this.bounds.y+r,n,r),o)],this.quadObjects.forEach((function(t){var n;null===(n=e.leaves)||void 0===n||n.forEach((function(n){n.insert(t)&&e.quadObjects.splice(e.quadObjects.indexOf(t),1)}))}))}},{key:"insert",value:function(t){if(!t.insideRect(this.bounds))return!1;if(this.depth>R.maxDepth)return!1;if(this.leaves){var e,n=_(this.leaves);try{for(n.s();!(e=n.n()).done;){if(e.value.insert(t))return!0}}catch(r){n.e(r)}finally{n.f()}}return this.quadObjects.push(t),!this.leaves&&this.quadObjects.length>R.capacity&&this.subdivide(),!0}}]),t}(),R=function(){function t(e,n){o(this,t),Object(h.a)(this,"bounds",void 0),Object(h.a)(this,"quadRoot",void 0),Object(h.a)(this,"quadObjects",void 0),this.bounds=e,this.quadObjects=n,this.quadRoot=new M(this.bounds,0)}return a(t,[{key:"process",value:function(t){var e=this;this.quadRoot.clear(),this.quadObjects.forEach((function(t){return e.quadRoot.insert(t)})),this.quadRoot.process(t)}},{key:"insert",value:function(t){this.quadObjects.push(t),this.quadRoot.insert(t)}}]),t}();function S(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}Object(h.a)(R,"maxDepth",10),Object(h.a)(R,"capacity",10);var P=function(){return(new Date).getTime()},D=function(t){c(n,t);var e=S(n);function n(t){var r;return o(this,n),r=e.call(this,t),Object(h.a)(s(r),"timestamp",P()),Object(h.a)(s(r),"debug",{showFPS:!0,showQuads:!0}),Object(h.a)(s(r),"dragVector",{start:new x,end:new x,isDragging:!1}),Object(h.a)(s(r),"stopLoop",void 0),Object(h.a)(s(r),"quadTree",void 0),Object(h.a)(s(r),"canvasBounds",void 0),Object(h.a)(s(r),"bodies",new Array),Object(h.a)(s(r),"canvasRef",Object(v.createRef)()),Object(h.a)(s(r),"canvasDivRef",Object(v.createRef)()),r.stopLoop=!1,r.renderLoop=r.renderLoop.bind(s(r)),r.mouseDown=r.mouseDown.bind(s(r)),r.mouseUp=r.mouseUp.bind(s(r)),r.mouseDrag=r.mouseDrag.bind(s(r)),r}return a(n,[{key:"addBody",value:function(t,e,n){this.quadTree.insert(new j((null===n||void 0===n?void 0:n.x)||t+(this.canvasBounds.w-2*t)*Math.random(),(null===n||void 0===n?void 0:n.y)||t+(this.canvasBounds.h-2*t)*Math.random(),(null===e||void 0===e?void 0:e.x)||100*(Math.random()-.5),(null===e||void 0===e?void 0:e.y)||100*(Math.random()-.5),t))}},{key:"componentWillUnmount",value:function(){this.stopLoop=!0}},{key:"componentDidMount",value:function(){var t=this;window.onresize=function(){return t.setupQuadTree()},this.setupQuadTree(),this.renderLoop()}},{key:"setupQuadTree",value:function(){var t;if(null!==(t=this.canvasDivRef)&&void 0!==t&&t.current&&this.canvasRef.current){var e=this.canvasRef.current.getContext("2d");if(e){var n,r,o=Math.min(this.canvasDivRef.current.clientWidth,this.canvasDivRef.current.clientHeight);e.canvas.width=o,e.canvas.height=o,this.canvasBounds=new O(0,0,null===(n=this.canvasRef.current)||void 0===n?void 0:n.width,null===(r=this.canvasRef.current)||void 0===r?void 0:r.height),this.quadTree=new R(this.canvasBounds,this.bodies)}}}},{key:"renderSimulation",value:function(t){t.fillStyle=w.a.color1,t.fillRect(0,0,this.canvasBounds.w,this.canvasBounds.h),t.strokeStyle=w.a.color4,this.bodies.forEach((function(e){t.beginPath(),t.arc(e.position.x,e.position.y,e.radius,0,2*Math.PI),t.stroke()})),this.dragVector.isDragging&&(t.beginPath(),t.moveTo(this.dragVector.start.x,this.dragVector.start.y),t.lineTo(this.dragVector.end.x,this.dragVector.end.y),t.stroke()),this.debug.showQuads&&(t.strokeStyle=w.a.color3,function e(n){var r;t.strokeRect(n.bounds.x,n.bounds.y,n.bounds.w,n.bounds.h),null===(r=n.leaves)||void 0===r||r.forEach((function(t){return e(t)}))}(this.quadTree.quadRoot))}},{key:"updateSimulation",value:function(t){var e=this;this.bodies.forEach((function(e){return e.tick(t)})),this.quadTree.process(this.quadTreeProcedure()),this.bodies.forEach((function(t){return t.collideBounds(e.canvasBounds)}))}},{key:"quadTreeProcedure",value:function(){return function t(e){for(var n,r=e.quadObjects,o=0;o<r.length;o++)for(var i=o+1;i<r.length;i++)r[o].collide(r[i]);!function t(e){null===e||void 0===e||e.forEach((function(e){r.forEach((function(t){e.quadObjects.forEach((function(e){return t.collide(e)}))})),t(e.leaves)}))}(e.leaves),null===(n=e.leaves)||void 0===n||n.forEach((function(e){return t(e)}))}}},{key:"renderLoop",value:function(){if(!this.stopLoop){var t=P(),e=Math.round(1e3/(t-this.timestamp));this.timestamp=t,this.updateSimulation(1/e);var n=this.canvasRef.current,r=null===n||void 0===n?void 0:n.getContext("2d");r&&(this.renderSimulation(r),this.debug.showFPS&&(r.save(),r.font="25px Arial",r.fillStyle=w.a.color4,r.fillText("FPS: "+e,10,30),r.restore())),requestAnimationFrame(this.renderLoop)}}},{key:"mouseDown",value:function(t){var e,n;this.canvasRef.current&&(this.dragVector.start=this.dragVector.end=new x(t.clientX-(null===(e=this.canvasRef.current)||void 0===e?void 0:e.offsetLeft),t.clientY-(null===(n=this.canvasRef.current)||void 0===n?void 0:n.offsetTop)),this.dragVector.isDragging=!0)}},{key:"mouseDrag",value:function(t){var e,n;this.dragVector.isDragging&&this.canvasRef.current&&(this.dragVector.end=new x(t.clientX-(null===(e=this.canvasRef.current)||void 0===e?void 0:e.offsetLeft),t.clientY-(null===(n=this.canvasRef.current)||void 0===n?void 0:n.offsetTop)))}},{key:"mouseUp",value:function(){this.addBody(10,this.dragVector.end.difference(this.dragVector.start),this.dragVector.start),this.dragVector.isDragging=!1}},{key:"render",value:function(){return Object(r.jsx)("div",{className:w.a.canvas_container,children:Object(r.jsx)("div",{ref:this.canvasDivRef,className:w.a.canvas_wrapper,children:Object(r.jsx)("canvas",{ref:this.canvasRef,onMouseDown:this.mouseDown,onMouseUp:this.mouseUp,onMouseMove:this.mouseDrag})})})}}]),n}(v.Component),E=n("4XV1"),q=n.n(E);function T(t){return Object(r.jsx)("div",{className:q.a.control_bar,children:t.children})}function I(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d(t);if(e){var o=d(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}var A=function(t){c(n,t);var e=I(n);function n(){var t;o(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i)),Object(h.a)(s(t),"simulationCanvasRef",Object(v.createRef)()),t}return a(n,[{key:"componentDidMount",value:function(){for(var t=0;t<200;t++){var e;null===(e=this.simulationCanvasRef.current)||void 0===e||e.addBody(5)}}},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsxs)(y.a,{children:[Object(r.jsx)("title",{children:"Quadtree Visualizer"}),Object(r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),Object(r.jsx)("main",{children:Object(r.jsxs)("div",{className:m.a.simulation_container,children:[Object(r.jsx)(D,{ref:this.simulationCanvasRef}),Object(r.jsx)(T,{})]})})]})}}]),n}(v.Component)},"4XV1":function(t,e,n){t.exports={color1:"#1a1a2e",color2:"#52057b",color3:"#892cdc",color4:"#bc6ff1",simulation_container:"control-bar_simulation_container__N3AMm",control_bar:"control-bar_control_bar__3KPD_"}},"7W2i":function(t,e,n){var r=n("SksO");t.exports=function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},"8Kt/":function(t,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=f,e.default=void 0;var r,o=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==typeof t&&"function"!==typeof t)return{default:t};var e=c();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=r?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},a=n("lwAK"),s=n("FYa8"),u=n("/0+H");function c(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return c=function(){return t},t}function f(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[o.default.createElement("meta",{charSet:"utf-8"})];return t||e.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function l(t,e){return"string"===typeof e||"number"===typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((function(t,e){return"string"===typeof e||"number"===typeof e?t:t.concat(e)}),[])):t.concat(e)}var d=["name","httpEquiv","charSet","itemProp"];function h(t,e){return t.reduce((function(t,e){var n=o.default.Children.toArray(e.props.children);return t.concat(n)}),[]).reduce(l,[]).reverse().concat(f(e.inAmpMode)).filter(function(){var t=new Set,e=new Set,n=new Set,r={};return function(o){var i=!0,a=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){a=!0;var s=o.key.slice(o.key.indexOf("$")+1);t.has(s)?i=!1:t.add(s)}switch(o.type){case"title":case"base":e.has(o.type)?i=!1:e.add(o.type);break;case"meta":for(var u=0,c=d.length;u<c;u++){var f=d[u];if(o.props.hasOwnProperty(f))if("charSet"===f)n.has(f)?i=!1:n.add(f);else{var l=o.props[f],h=r[f]||new Set;"name"===f&&a||!h.has(l)?(h.add(l),r[f]=h):i=!1}}}return i}}()).reverse().map((function(t,e){var n=t.key||e;return o.default.cloneElement(t,{key:n})}))}function v(t){var e=t.children,n=(0,o.useContext)(a.AmpStateContext),r=(0,o.useContext)(s.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:h,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},e)}v.rewind=function(){};var p=v;e.default=p},Bnag:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(t,e){t.exports=function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},FYa8:function(t,e,n){"use strict";var r;e.__esModule=!0,e.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.HeadManagerContext=o},GITI:function(t,e,n){t.exports={color1:"#1a1a2e",color2:"#52057b",color3:"#892cdc",color4:"#bc6ff1",simulation_container:"Home_simulation_container__2wiye"}},Ijbi:function(t,e,n){var r=n("WkPL");t.exports=function(t){if(Array.isArray(t))return r(t)}},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},PJYZ:function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},Qetd:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},RIqP:function(t,e,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");t.exports=function(t){return r(t)||o(t)||i(t)||a()}},SksO:function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},W8MJ:function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},WkPL:function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},Xuae:function(t,e,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),a=(n("PJYZ"),n("7W2i")),s=n("a1gu"),u=n("Nsbk");function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}e.__esModule=!0,e.default=void 0;var f=n("q1tI"),l=function(t){a(n,t);var e=c(n);function n(t){var i;return o(this,n),(i=e.call(this,t))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(f.Component);e.default=l},ZhPi:function(t,e,n){var r=n("WkPL");t.exports=function(t,e){if(t){if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},a1gu:function(t,e,n){var r=n("cDf5"),o=n("PJYZ");t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!==typeof e?o(t):e}},cDf5:function(t,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},g4pe:function(t,e,n){t.exports=n("8Kt/")},lSNA:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},lwAK:function(t,e,n){"use strict";var r;e.__esModule=!0,e.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});e.AmpStateContext=o},lwsE:function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},oIG3:function(t,e,n){t.exports={color1:"#1a1a2e",color2:"#52057b",color3:"#892cdc",color4:"#bc6ff1",simulation_container:"simulation-canvas_simulation_container__2Xxey",canvas_container:"simulation-canvas_canvas_container__37NXe",canvas_wrapper:"simulation-canvas_canvas_wrapper__2ODEv"}},rePB:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))}},[["/EDR",0,1]]]);