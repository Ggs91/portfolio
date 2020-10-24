/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/assets/stylesheets/scss/main.scss":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/sass-loader/dist/cjs.js!./src/assets/stylesheets/scss/main.scss ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_georges_large_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../images/georges-large.png */ \"./src/assets/images/georges-large.png\");\n/* harmony import */ var _images_georges_small_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../images/georges-small.png */ \"./src/assets/images/georges-small.png\");\n// Imports\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_georges_large_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_georges_small_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* http://meyerweb.com/eric/tools/css/reset/\\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed,\\nfigure, figcaption, footer, header, hgroup,\\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n}\\n\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure,\\nfooter, header, hgroup, menu, nav, section {\\n  display: block;\\n}\\n\\nbody {\\n  line-height: 1;\\n}\\n\\nol, ul {\\n  list-style: none;\\n}\\n\\nblockquote, q {\\n  quotes: none;\\n}\\n\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n  content: \\\"\\\";\\n  content: none;\\n}\\n\\ntable {\\n  border-collapse: collapse;\\n  border-spacing: 0;\\n}\\n\\nhtml {\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box;\\n}\\n\\n*,\\n*:before,\\n*:after {\\n  box-sizing: inherit;\\n}\\n\\nstrong,\\nb {\\n  font-weight: 600;\\n}\\n\\ncite {\\n  text-decoration: underline;\\n}\\n\\ncite,\\nem {\\n  font-style: italic;\\n}\\n\\nbody {\\n  height: 100%;\\n  font-family: \\\"Source Sans Pro\\\", \\\"Helvetica Neue\\\", Helvetica, \\\"Lato\\\", \\\"Open Sans\\\", Arial, sans-serif;\\n  line-height: 1.2;\\n  font-weight: 400;\\n}\\n\\nh1.section-heading {\\n  position: relative;\\n  display: inline-block;\\n  font-size: 3rem;\\n  line-height: 2;\\n  margin-bottom: 3rem;\\n  font-weight: 600;\\n}\\nh1.section-heading:after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  height: 3px;\\n  width: 4rem;\\n  background: #000;\\n  bottom: 0;\\n  left: 50%;\\n  transform: translate(-50%, 0);\\n}\\n\\nh2 {\\n  color: #1179B7;\\n  font-size: 1.7rem;\\n  margin-bottom: 1rem;\\n  font-weight: 600;\\n}\\n\\nh5 {\\n  margin: 1rem 0;\\n  font-size: 1.5rem;\\n  font-weight: 600;\\n}\\n\\np {\\n  font-size: 1.4rem;\\n  line-height: 1.4;\\n  color: #484848;\\n  margin-bottom: 1rem;\\n}\\n\\na {\\n  color: #000;\\n  text-decoration: none;\\n  border-bottom: 1px solid black;\\n}\\n\\n.text-secondary {\\n  color: #1179B7;\\n}\\n\\n.container {\\n  max-width: 1700px;\\n  padding: 0 90px;\\n  margin: 0 auto;\\n}\\n@media only screen and (max-width: 960px) {\\n  .container {\\n    max-width: 600px;\\n    padding: 0;\\n  }\\n}\\n@media only screen and (max-width: 690px) {\\n  .container {\\n    max-width: 420px;\\n  }\\n}\\n@media only screen and (max-width: 480px) {\\n  .container {\\n    max-width: 320px;\\n  }\\n}\\n@media only screen and (max-width: 320px) {\\n  .container {\\n    max-width: 300px;\\n  }\\n}\\n\\n.content-wrapper {\\n  padding: 0 4rem;\\n}\\n\\n.grid-container-col3 {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  grid-column-gap: 1rem;\\n  grid-row-gap: 3rem;\\n}\\n\\nheader {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  background-color: rgba(0, 0, 0, 0);\\n  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\\n  z-index: 2;\\n}\\nheader .flex-wrapper {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 2rem 2rem;\\n}\\n\\n#branding {\\n  font-size: 1.6rem;\\n  line-height: 1.4;\\n  font-weight: 600;\\n  cursor: pointer;\\n  padding: 0;\\n  margin: 0;\\n}\\n#branding span {\\n  letter-spacing: 0.15rem;\\n  display: block;\\n  font-weight: 200;\\n  font-size: 1rem;\\n  text-transform: uppercase;\\n}\\n#branding a {\\n  border: none;\\n}\\n\\n.guy {\\n  box-shadow: 0.25em 0.25em 0.75em rgba(0, 0, 0, 0.25), 0.125em 0.125em 0.25em rgba(0, 0, 0, 0.15);\\n  object-fit: cover;\\n  border-radius: 2px;\\n  height: 40vh;\\n  margin: 100px;\\n}\\n@media only screen and (max-width: 480px) {\\n  .guy {\\n    margin: 140px;\\n    height: 30vh;\\n  }\\n}\\n\\n.hero-bg {\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  background-position: center;\\n}\\n@media only screen and (max-width: 480px) {\\n  .hero-bg {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    border: none;\\n  }\\n}\\n\\nmain > section {\\n  padding-top: 3rem;\\n  padding-bottom: 3rem;\\n}\\n\\n#hero {\\n  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.45);\\n  width: 100%;\\n  height: 100vh;\\n  margin-bottom: 3rem;\\n  display: flex;\\n  justify-content: center;\\n  position: relative;\\n  overflow: hidden;\\n  /*Cache le background img qui est plus grde que la section*/\\n}\\n\\n.hero-bg {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  z-index: -1;\\n}\\n\\n.hero-text {\\n  color: #fff;\\n  font-size: 4rem;\\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\\n}\\n\\n.hero-btn {\\n  display: inline-block;\\n  margin: 0 auto;\\n  color: red;\\n  padding: 5rem;\\n}\\n\\n.description {\\n  text-align: center;\\n}\\n.description i {\\n  font-size: 5rem;\\n  color: #1179B7;\\n}\\n.description p {\\n  border: none;\\n}\\n\\n#education section {\\n  margin-bottom: 2rem;\\n}\\n#education ul {\\n  list-style-type: disc;\\n  padding-left: 2rem;\\n}\\n#education li {\\n  font-size: 1.5rem;\\n  margin: 0 0 10px 0;\\n}\\n\\n#education ul,\\n.skill ul {\\n  list-style-type: disc;\\n  padding-left: 2rem;\\n}\\n#education li,\\n.skill li {\\n  font-size: 1.5rem;\\n  margin: 0 0 10px 0;\\n}\\n\\n.certification {\\n  display: inline-block;\\n  font-size: 1.5rem;\\n  margin: 1rem 0;\\n  font-weight: 600;\\n  margin-bottom: 1rem;\\n}\\n\\n#primary-footer {\\n  padding-top: 3rem;\\n  padding-bottom: 3rem;\\n  background: #f8f8f8;\\n  border-top: 1px solid #f1f1f1;\\n}\\n\\n#primary-footer a {\\n  vertical-align: middle;\\n  border: none;\\n}\\n#primary-footer ul {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-between;\\n}\\n#primary-footer li {\\n  flex: 50%;\\n  font-size: 1.2rem;\\n  margin-bottom: 2rem;\\n}\\n#primary-footer li a:nth-child(2),\\n#primary-footer li span {\\n  text-decoration: none;\\n  margin-left: 1rem;\\n}\\n#primary-footer li a:nth-child(2):hover,\\n#primary-footer li span:hover {\\n  border-bottom: 2px solid black;\\n}\\n#primary-footer li:last-child {\\n  margin-bottom: 0;\\n}\\n\\n.btn {\\n  display: inline-block;\\n  text-align: center;\\n  cursor: pointer;\\n}\\n\\n.btn-primary {\\n  color: #1179B7;\\n  background: #fff;\\n  border: 1px solid #1179B7;\\n  border-radius: 4px;\\n  text-transform: uppercase;\\n  transition: all 0.5s ease-in-out;\\n}\\n.btn-primary:hover {\\n  color: #fff;\\n  background: #1179B7;\\n}\\n\\n.btn-rounded {\\n  position: relative;\\n  display: inline-block;\\n  height: 3.7rem;\\n  width: 3.7rem;\\n  border-radius: 100%;\\n  background-color: #1179B7;\\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\\n}\\n.btn-rounded i {\\n  color: #fff;\\n  line-height: 100%;\\n  font-size: 1.5rem;\\n  position: absolute;\\n  display: block;\\n  vertical-align: center;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n}\\n\\n.menu-btn {\\n  z-index: 3;\\n  cursor: pointer;\\n  transition: all 0.5s ease-out;\\n}\\n.menu-btn .btn-line {\\n  transition: all 0.5s ease-out;\\n  width: 28px;\\n  height: 3px;\\n  margin: 0 0 5px 0;\\n  background: #000;\\n  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);\\n}\\n.menu-btn .btn-line.show {\\n  background: #fff;\\n}\\n.menu-btn .btn-line.close {\\n  transition-delay: 1s;\\n}\\n.menu-btn.close {\\n  transform: rotate(180deg);\\n}\\n.menu-btn.close .btn-line:nth-child(1) {\\n  transform: rotate(45deg) translate(5px, 5px);\\n}\\n.menu-btn.close .btn-line:nth-child(2) {\\n  opacity: 0;\\n}\\n.menu-btn.close .btn-line:nth-child(3) {\\n  transform: rotate(-45deg) translate(7px, -6px);\\n}\\n\\n.menu {\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  opacity: 0.9;\\n  visibility: hidden;\\n}\\n.menu.show {\\n  visibility: visible;\\n}\\n.menu-panel-left, .menu-panel-right {\\n  float: left;\\n  width: 50%;\\n  height: 100vh;\\n  overflow: hidden;\\n}\\n.menu-panel-left.close, .menu-panel-right.close {\\n  transition-delay: 0.6s;\\n}\\n.menu-panel-right {\\n  margin: 0;\\n  padding: 0;\\n  background: #0f141e;\\n  transform: translate3d(0, -100%, 0);\\n  transition: all 0.5s ease-out;\\n}\\n.menu-panel-right.show {\\n  transform: translate3d(0, 0, 0);\\n}\\n.menu-panel-left {\\n  background: #0f141e;\\n  transform: translate3d(0, 100%, 0);\\n  transition: all 0.5s ease-out;\\n}\\n.menu-panel-left.show {\\n  transform: translate3d(0, 0, 0);\\n}\\n.menu-nav {\\n  position: fixed;\\n  top: 0;\\n  width: 100%;\\n  height: 100vh;\\n  overflow: hidden;\\n  background: rgba(0, 0, 0, 0);\\n  display: flex;\\n  flex-flow: column wrap;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.menu .nav-item {\\n  transform: translate3d(1200px, 0, 0);\\n  transition: all 0.5s ease-out;\\n}\\n.menu .nav-item.show {\\n  transform: translate3d(0, 0, 0);\\n}\\n.menu .nav-link {\\n  display: inline-block;\\n  border: none;\\n  position: relative;\\n  font-size: 3rem;\\n  line-height: 1.5;\\n  font-weight: 500;\\n  margin-bottom: 2.5rem;\\n  text-transform: uppercase;\\n  color: #fff;\\n  transition: all 0.6s cubic-bezier(0.25, 1, 0.2, 1);\\n}\\n.menu .nav-link:hover {\\n  transform: scale(1.2);\\n  position: relative;\\n  display: inline-block;\\n}\\n.menu .nav-link:hover:after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  height: 3px;\\n  width: 4rem;\\n  background: #fff;\\n  bottom: 0;\\n  left: 50%;\\n  transform: translate(-50%, 0);\\n}\\n\\n.nav-item:nth-child(1) {\\n  transition-delay: 0.1s;\\n}\\n\\n.nav-item:nth-child(2) {\\n  transition-delay: 0.2s;\\n}\\n\\n.nav-item:nth-child(3) {\\n  transition-delay: 0.3s;\\n}\\n\\n.nav-item:nth-child(4) {\\n  transition-delay: 0.4s;\\n}\\n\\n.card {\\n  position: relative;\\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\\n  border-radius: 2px;\\n  overflow: hidden;\\n}\\n\\n.card-img-wrapper {\\n  position: relative;\\n  overflow: hidden;\\n  cursor: pointer;\\n  height: 300px;\\n}\\n.card-img-wrapper:hover .card-img, .card-img-wrapper:focus .card-img {\\n  transform: scale(1.1);\\n}\\n.card-img-wrapper:hover .card-img-wrapper:after {\\n  background-color: rgba(0, 0, 0, 0);\\n}\\n.card-img-wrapper:after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.1);\\n  transition: all 0.6s cubic-bezier(0.25, 1, 0.2, 1);\\n}\\n\\n.card-img-wrapper:hover::after {\\n  background-color: rgba(0, 0, 0, 0);\\n}\\n\\n.card-img {\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  transition: all 0.6s cubic-bezier(0.25, 1, 0.2, 1);\\n}\\n\\n.card-overlay {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: flex-start;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  padding: 1rem 1rem 0 1rem;\\n  font-size: 1.2rem;\\n  background: #fff;\\n  position: absolute;\\n  transition: all 0.6s cubic-bezier(0.25, 1, 0.2, 1);\\n  transform: translate3d(0, 100%, 0);\\n}\\n.card-overlay.show {\\n  transform: translate3d(0, 0, 0);\\n}\\n.card-overlay .overlay-top {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n.card-overlay .overlay-top h3 {\\n  font-size: 1.5rem;\\n  font-weight: 300;\\n  line-height: 1.5;\\n}\\n.card-overlay ul {\\n  list-style-type: disc;\\n  padding-top: 1rem;\\n  padding-left: 2rem;\\n  font-weight: 400;\\n}\\n.card-overlay li {\\n  line-height: 1.5;\\n  font-size: 1rem;\\n  margin: 0 0 10px 0;\\n}\\n.card-overlay .card-buttons {\\n  border-top: 1px solid rgba(160, 160, 160, 0.2);\\n  padding: 1rem;\\n  margin-top: auto;\\n  display: flex;\\n  align-items: center;\\n}\\n.card-overlay .card-buttons .btn-rounded {\\n  margin-right: 1.5rem;\\n}\\n.card-overlay .close-overlay {\\n  cursor: pointer;\\n  margin-right: 0.5rem;\\n  font-size: 1.4rem;\\n}\\n\\n.card-details {\\n  padding: 1.5rem 1rem;\\n}\\n.card-details h2 {\\n  cursor: pointer;\\n  font-size: 1.3rem;\\n  margin-bottom: 0.5rem;\\n}\\n.card-details p {\\n  margin-bottom: 1rem;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/assets/stylesheets/scss/main.scss?./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/images/georges-large.png":
/*!*********************************************!*\
  !*** ./src/assets/images/georges-large.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"imgs/georges-large.1c0fc05274869aee44f7beab81cd338f.png\");\n\n//# sourceURL=webpack:///./src/assets/images/georges-large.png?");

/***/ }),

/***/ "./src/assets/images/georges-small.png":
/*!*********************************************!*\
  !*** ./src/assets/images/georges-small.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"imgs/georges-small.3b5baff9fb1a74f80c0f04c966896f94.png\");\n\n//# sourceURL=webpack:///./src/assets/images/georges-small.png?");

/***/ }),

/***/ "./src/assets/stylesheets/js/main.js":
/*!*******************************************!*\
  !*** ./src/assets/stylesheets/js/main.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", function() {\n  //Setting requestAnimationFrame\n  var requestAnimationFrame = window.requestAnimationFrame ||\n  window.mozRequestAnimationFrame ||\n  window.webkitRequestAnimationFrame ||\n  window.msRequestAnimationFrame;\n  var xScrollPosition;\n  var yScrollPosition;\n\n//   const work = document.querySelector('.work');\n//\n// work.addEventListener(\"click\", hidePanels);\n//\n// function hidePanels() {\n//   // menuPanelRight.style.visibility=\"hidden\";\n// }\n  // Menu Toggle\n  const menuBtn = document.querySelector('.menu-btn');\n  const menu = document.querySelector('.menu');\n  const menuPanelRight = document.querySelector('.menu-panel-right');\n  const menuPanelLeft = document.querySelector('.menu-panel-left');\n  const navItems = document.querySelectorAll('.nav-item');\n  const buttonLines = document.querySelectorAll('.btn-line');\n\n  // Set Initial State Of Menu\n  let showMenu = false;\n\n  menuBtn.addEventListener('click', toggleMenu);\n\n  function toggleMenu() {\n    if (!showMenu) { //ce qui se passe quand on ouvre le menu\n      menuBtn.classList.add('close');\n      menu.classList.add('show');\n      menuPanelRight.classList.add('show');\n      menuPanelRight.classList.remove('close'); /////\n      menuPanelLeft.classList.add('show');\n      menuPanelLeft.classList.remove('close'); /////\n      navItems.forEach(item => item.classList.add('show'));\n      buttonLines.forEach(item => item.classList.add('show'));\n      buttonLines.forEach(item => item.classList.remove('close'));\n\n      // Set Menu State\n      showMenu = true;\n    } else {\n      menuBtn.classList.remove('close');\n      menu.classList.remove('show');\n      menuPanelRight.classList.remove('show');\n      menuPanelRight.classList.add('close'); /////\n      menuPanelLeft.classList.remove('show');\n      menuPanelLeft.classList.add('close'); /////\n      navItems.forEach(item => item.classList.remove('show'));\n      buttonLines.forEach(item => item.classList.remove('show'));\n      buttonLines.forEach(item => item.classList.add('close'));\n\n      // Set Menu State\n      showMenu = false;\n    }\n  }\n\n//Card Overlay\n\n  const cardOverlays = document.querySelectorAll('.card-overlay');\n  const cardImageWrappers = document.querySelectorAll(\".card-img-wrapper\");\n  const cardTitles = document.querySelectorAll(\".card-title\");\n  const closeDetailsButtons = document.querySelectorAll('.close-overlay');\n\n  for (let i = 0; i < cardOverlays.length; i++) {\n    cardTitles[i].addEventListener(\"click\", ()=> cardOverlays[i].classList.add('show'));\n    cardImageWrappers[i].addEventListener(\"click\", ()=> cardOverlays[i].classList.add('show'));\n    closeDetailsButtons[i].addEventListener(\"click\", ()=> cardOverlays[i].classList.remove('show'));\n  }\n});\n\n\n\n// Parallax Effect Hero Section\nwindow.addEventListener(\"DOMContentLoaded\", scrollLoop, false);\n\nvar heroBG = document.getElementsByClassName(\"hero-bg\")[0];\n\nfunction scrollLoop(e) {// requestAnimation frame fait this function fction 60fps. 60 times per sec setTranslate is called and it update transform3D of the img, and so its position\n  xScrollPosition = window.scrollX; //We don't use the scroll event to get the position for perfs reasons, instead we ask for x & y position 60 times per sec\n  yScrollPosition = window.scrollY;\n  setTranslate(0, yScrollPosition * -0.3, heroBG);\n  requestAnimationFrame(scrollLoop);\n}\n\nfunction setTranslate(xPos, yPos, el){\n  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;\n}\n\n\n//# sourceURL=webpack:///./src/assets/stylesheets/js/main.js?");

/***/ }),

/***/ "./src/assets/stylesheets/scss/main.scss":
/*!***********************************************!*\
  !*** ./src/assets/stylesheets/scss/main.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--7-1!../../../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js!./src/assets/stylesheets/scss/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/assets/stylesheets/scss/main.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_stylesheets_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/stylesheets/scss/main.scss */ \"./src/assets/stylesheets/scss/main.scss\");\n/* harmony import */ var _assets_stylesheets_scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_stylesheets_js_main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/stylesheets/js/main.js */ \"./src/assets/stylesheets/js/main.js\");\n/* harmony import */ var _assets_stylesheets_js_main_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_stylesheets_js_main_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });