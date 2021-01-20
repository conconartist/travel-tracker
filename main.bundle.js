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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\nhtml, body {\n  background: #15435D;\n  width: 100%; }\n\nbody {\n  font-family: 'Open Sans', sans-serif; }\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%; }\n\nnav {\n  align-items: center;\n  background-color: #e5ddd7;\n  display: flex;\n  justify-content: space-between;\n  height: 35vh; }\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1%; }\n\n.dashboard-wrapper {\n  display: grid;\n  grid-gap: 1% 3%;\n  grid-template-columns: repeat(1, 1fr);\n  margin: 4%;\n  background-color: #15435D; }\n\n.trip-list-wrapper {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  background-color: #e5ddd7;\n  color: #07161f;\n  padding: 3%; }\n\n.card-book-trip {\n  background-color: #e5ddd7;\n  display: flex;\n  flex-direction: column; }\n\n.card-trip {\n  padding: 2%;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.destination-photo {\n  width: 40vh; }\n\n.pending-trips {\n  display: flex;\n  justify-content: center;\n  flex-direction: column; }\n\nh1 {\n  color: #0b222f;\n  font-size: 8vh;\n  margin: 5vh;\n  text-shadow: 1px 1px 0px black; }\n\nh2 {\n  color: #fdf5eb;\n  margin: 3vh; }\n\nh3 {\n  background-color: #2a2521;\n  color: #fdf5eb;\n  margin: 0;\n  padding: 3%;\n  display: flex;\n  justify-content: center; }\n  h3:active {\n    background-color: black; }\n\np {\n  font-weight: 300; }\n\n.amount-spent-amount {\n  font-weight: bold; }\n\n.cost-estimate-announcement {\n  display: flex;\n  justify-content: center;\n  font-size: 3vh;\n  font-weight: 600;\n  padding: 2%;\n  padding-top: 0; }\n\n.greeting {\n  color: #CFCFD7;\n  font-size: 4vh;\n  margin-bottom: 0%;\n  text-shadow: 1px 1px 0px black; }\n\n.total-amount-spent {\n  display: flex;\n  justify-content: center;\n  background-color: #CFCFD7;\n  border-radius: 6px;\n  padding: 2%; }\n\n.trip-status-announcement {\n  display: flex;\n  justify-content: center;\n  padding: 3%;\n  font-weight: 400;\n  font-size: 3vh; }\n\n.container-username, .container-password, .button-login {\n  margin: 2%;\n  width: 55%; }\n\n.button-login {\n  border-radius: 6px;\n  border: none;\n  height: 7vh;\n  margin: 2vh;\n  width: 43%;\n  padding: 2%;\n  width: 60%; }\n  .button-login:hover {\n    background-color: #0b222f;\n    color: #fdf5eb; }\n\n.input-login {\n  border-radius: 6px;\n  border: none;\n  height: 4vh;\n  padding: 1vh;\n  margin-top: 1%;\n  background-color: #fdf5eb;\n  padding: 2%;\n  width: 60%; }\n\n.login-display {\n  background-color: #CFCFD7;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 55%;\n  height: 25vh;\n  padding: 5%;\n  border-radius: 6px; }\n\n.button-cost-estimate, .button-submit-request {\n  border-radius: 6px;\n  border: none;\n  height: 7vh;\n  margin: 2vh;\n  width: 43%; }\n  .button-cost-estimate:hover, .button-submit-request:hover {\n    background-color: #0b222f;\n    color: #fdf5eb; }\n\n.button-nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  border-width: 0;\n  margin: 1vh;\n  width: 10%;\n  height: 10vh; }\n  .button-nav:hover {\n    background-color: #0b222f;\n    color: #fdf5eb; }\n\n.date-input, .destination-menu, .duration-input, .travelers-input {\n  border-radius: 6px;\n  border: none;\n  height: 4vh;\n  padding: 1vh;\n  margin-top: 1%;\n  background-color: #CFCFD7;\n  margin: 1vh; }\n\n.duration-input {\n  width: 20vh;\n  margin-bottom: 3%; }\n\n.travelers-input {\n  width: 8vh; }\n\n.hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n@media (max-width: 800px) {\n  .trip-list-wrapper {\n    grid-gap: 0.5% 4%;\n    grid-template-columns: repeat(1, 1fr); }\n  nav {\n    flex-direction: column;\n    height: 40vh; }\n  .destination-photo {\n    width: 50vh; }\n  .login-display {\n    width: 82%; }\n  .main-header {\n    height: 18vh; }\n  .search-input {\n    width: 50%; } }\n", "",{"version":3,"sources":["webpack://./src/css/base.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_extends.scss"],"names":[],"mappings":"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","sourcesContent":["@import './variables';\n@import './extends';\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  background: $primary-background;\n  width: 100%;\n}\nbody {\n  @extend html;\n  font-family: 'Open Sans', sans-serif;\n}\n\nmain {\n  @include align-center-flex();\n  height: 100%;\n  width: 100%;\n}\n\nnav {\n  align-items: center;\n  background-color: $secondary-muted-accent;\n  display: flex;\n  justify-content: space-between;\n  height: 35vh;\n}\n\nform {\n  @include align-center-flex;\n  padding: 1%;\n}\n\n.dashboard-wrapper {\n  display: grid;\n  grid-gap: 1% 3%;\n  grid-template-columns: repeat(1, 1fr);\n  margin: 4%;\n  background-color: $primary-background;\n}\n\n.trip-list-wrapper {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  background-color: $secondary-muted-accent;\n  color: $darker-primary-color;\n  padding: 3%;\n}\n//----------categories-----------//\n\n.card-book-trip {\n  background-color: $secondary-muted-accent;\n  display: flex;\n  flex-direction: column;\n}\n\n.card-trip {\n  padding: 2%;\n  @include align-center-flex;\n}\n\n.destination-photo {\n  width: 40vh;\n}\n\n.pending-trips {\n  @include justify-center-flex;\n  flex-direction: column;\n}\n\n//----------Text----------------//\nh1 {\n  color: $dark-text-color;\n  font-size: 8vh;\n  margin: 5vh;\n  text-shadow: 1px 1px 0px black;\n}\n\nh2 {\n  color: $dark-hover-text;\n  margin: 3vh;\n}\n\nh3 {\n  background-color: $dark-hover-background;\n  color: $dark-hover-text;\n  margin: 0;\n  padding: 3%;\n  @include justify-center-flex();\n  &:active {\n    background-color: black;\n  }\n}\n\np {\n  font-weight:300;\n}\n\n.amount-spent-amount {\n  font-weight: bold;\n}\n\n.cost-estimate-announcement {\n  @include justify-center-flex;\n  font-size: 3vh;\n  font-weight: 600;\n  padding: 2%;\n  padding-top: 0;\n}\n\n.greeting {\n  color: $muted-accent;\n  font-size: 4vh;\n  margin-bottom: 0%;\n  text-shadow: 1px 1px 0px black;\n}\n\n.total-amount-spent {\n  @include justify-center-flex;\n  background-color: $muted-accent;\n  border-radius: 6px;\n  padding: 2%;\n}\n\n.trip-status-announcement {\n  display: flex;\n  justify-content: center;\n  padding: 3%;\n  font-weight: 400;\n  font-size: 3vh;\n}\n//---------login display------//\n\n.container-username {\n  margin: 2%;\n  width: 55%;\n}\n\n.container-password {\n  @extend .container-username;  \n}\n\n.button-login {\n  @extend .container-username;\n  @include button-style;\n  padding: 2%;\n  width: 60%;\n  &:hover {\n    @include button-hover;\n  }\n}\n\n.input-login {\n  @include input-style;\n  background-color: $dark-hover-text;\n  padding: 2%;\n  width: 60%;\n}\n\n.login-display {\n  background-color: $muted-accent;\n  @include align-center-flex();\n  justify-content: space-around;\n  width: 55%;\n  height: 25vh;\n  padding: 5%;\n  border-radius: 6px;\n}\n\n//---------buttons and input fields-----------//\n\n.button-cost-estimate, .button-submit-request {\n  @include button-style;\n  &:hover {\n    @include button-hover;\n  }\n}\n\n.button-nav {\n  @include justify-center-flex();\n  align-items: center;\n  border-radius: 6px;\n  border-width: 0;\n  margin: 1vh;\n  width: 10%;\n  height: 10vh;\n  &:hover {\n    @include button-hover;\n  }\n}\n\n.date-input {\n  @include input-style;\n  background-color: $muted-accent;\n  margin: 1vh;\n}\n\n.destination-menu {\n  @extend .date-input;\n}\n\n.duration-input {\n  @extend .date-input;\n  width: 20vh;\n  margin-bottom: 3%;\n}\n\n.travelers-input {\n  @extend .date-input;\n  width: 8vh;\n}\n\n//---------hidden-----------//\n.hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n//-------media queries------//\n\n@media (max-width: 800px) {\n  .trip-list-wrapper {\n    grid-gap: 0.5% 4%;\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n  nav {\n    flex-direction: column;\n    height: 40vh;\n  }\n\n  .destination-photo {\n    width: 50vh;\n  }\n  \n  .login-display {\n    width: 82%;\n  }\n\n  .main-header {\n    height: 18vh;\n  }\n\n  .search-input {\n    width: 50%;\n  }\n}","$primary-background: #15435D;\n$darker-primary-color: darken($primary-background, 15%);\n$dark-text-color: mix(black, $primary-background);\n$lighter-background: #A89688;\n$muted-accent: #CFCFD7;\n$secondary-muted-accent: mix(antiquewhite, $muted-accent);\n$lightest-accent: antiquewhite;\n$dark-hover-background: #2a2521;\n$dark-hover-text: mix(antiquewhite, white);","@mixin justify-center-flex() {\n    display: flex;\n    justify-content: center;\n}\n\n@mixin align-center-flex() {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n@mixin button-style() {\n    border-radius: 6px;\n    border: none;\n    height: 7vh;\n    margin: 2vh;\n    width: 43%;\n}\n\n@mixin button-hover() {\n    background-color: $dark-text-color;\n    color: $dark-hover-text;\n}\n\n@mixin input-style() {\n    border-radius: 6px;\n    border: none;\n    height: 4vh;\n    padding: 1vh;\n    margin-top: 1%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === 'function') {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/Traveler.js":
/*!*************************!*\
  !*** ./src/Traveler.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Traveler {
  constructor(travelerData) {
    this.id = travelerData.id;
    this.name = travelerData.name;
    this.travelerType = travelerData.travelerType;
    this.username = "traveler" + this.id;
    this.password = "travel2020";
    this.trips = [];
    this.pendingTrips = [];
    this.upcomingTrips = [];
    this.pastTrips = [];
    this.presentTrips = [];
  }
  filterAllTrips(tripData) {
    this.trips = tripData.filter(trip => trip.userID === this.id);
    return this.trips;
  }

  filterPendingTrips(tripData) {
    this.filterAllTrips(tripData);
    this.pendingTrips = this.trips.filter(trip => trip.status === 'pending');
    return this.pendingTrips;
  }  

  filterUpcomingTrips(tripData, dateToday) {
    this.filterAllTrips(tripData);
    this.upcomingTrips = this.trips.filter(trip => trip.status === 'approved' && parseInt(trip.status === trip.date.split('/').join('')) > parseInt(dateToday.split('/').join('')));
    return this.upcomingTrips;
  }

  filterPastTrips(tripData, dateToday) {
    this.filterAllTrips(tripData);
    this.pastTrips = this.trips.filter(trip => parseInt(trip.date.split('/').join('')) < parseInt(dateToday.split('/').join('')));
    return this.pastTrips;
  }

  filterPresentTrips(tripData, dateToday) {
    this.filterAllTrips(tripData);
    this.trips.forEach(trip => {
      const tripStartDates = parseInt(trip.date.split('/').join(''));
      const tripEndDates = tripStartDates + trip.duration;
      const todaysDate = parseInt(dateToday.split('/').join(''));
      if (tripStartDates < todaysDate && tripEndDates > todaysDate) {
        this.presentTrips.push(trip)
      }
    })
    return this.presentTrips;
  }

  determineTotalAmtSpent(tripData, year, destinations) {
    let userTrips = this.filterAllTrips(tripData);
    let tripsInYear = userTrips.filter(trip => trip.date.includes(year) && trip.status === 'approved');
    let getCostStats = tripsInYear.map(trip => {
      let totalTripCost = {};
      destinations.forEach(destination => {
        if (trip.destinationID === destination.id) {
          totalTripCost.totalLodging = destination.estimatedLodgingCostPerDay * trip.duration;
          totalTripCost.totalFlightCost = destination.estimatedFlightCostPerPerson * trip.travelers;
          totalTripCost.agentFee = (totalTripCost.totalLodging + totalTripCost.totalFlightCost) * 0.1;
        }
      })
      return totalTripCost;
    });
    let totalCostPerGivenYear = getCostStats.reduce((costSum, costStat) => {
      costSum += costStat.totalLodging + costStat.totalFlightCost + costStat.agentFee;
      return costSum;
    }, 0);
    return totalCostPerGivenYear;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Traveler);

/***/ }),

/***/ "./src/Trip.js":
/*!*********************!*\
  !*** ./src/Trip.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Trip {
  constructor(tripData) {
    this.id = tripData.id;
    this.userID = tripData.userID;
    this.destinationID = tripData.destinationID;
    this.travelers = tripData.travelers;
    this.date = tripData.date;
    this.duration = tripData.duration;
    this.status = tripData.status;
    this.suggestedActivities = tripData.suggestedActivities;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Trip);

/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/domUpdates.js":
/*!***************************!*\
  !*** ./src/domUpdates.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let domUpdates = {

  hideDashboard() {
    document.querySelector(".dashboard-wrapper").classList.add("hidden");
    document.querySelector(".button-nav").classList.add("hidden");
  },

  revealDashboard() {
    document.querySelector(".login-display").classList.add("hidden");
    document.querySelector(".dashboard-wrapper").classList.remove("hidden");
    document.querySelector(".button-nav").classList.remove("hidden");
  },

  displayMessage(message) {
    const displayMessage = document.querySelector('.error-message');
    displayMessage.innerHTML = `<p class="message">${message}</p>`
  }, 

  greetUser(traveler) {
    const name = traveler.name.split(' ')[0]
    const userGreeting = document.querySelector(".greeting");
    userGreeting.innerText = `Welcome, ${name}`
  },

  displayBookTrip(destinations) {
    const destinationMenu = document.querySelector(".destination-menu");
    destinations.forEach(destination => {
      const listElement = document.createElement("option");
      listElement.innerHTML = `${destination.destination}`;
      listElement.value = `${destination.id}`;
      destinationMenu.appendChild(listElement);
    })
  },
  showUpcomingTrips(traveler, tripData, dateToday, destinations) {
    let upcomingTripsSection = document.querySelector('.card-upcoming-trips');
    let upcomingTripsList = traveler.filterUpcomingTrips(tripData, dateToday);
    upcomingTripsList.forEach(trip => {
      destinations.forEach(destination => {
        if (destination.id === trip.destinationID) {
          upcomingTripsSection.insertAdjacentHTML('afterbegin', `
          <div class="card-trip">
            <p class="display-date upcoming-date">Date: ${trip.date}</p>
            <p class="display-destination upcoming-destination">Destination: ${destination.destination}</p>
            <img src="${destination.image}" class="destination-photo" alt="photo of ${destination.destination}>
            <p class="display-duration upcoming-duration">Duration: ${trip.duration}</p>
            <p class="display-number-travelers upcoming-travelers"># of Travelers: ${trip.travelers}</p>
          </div>
          `)
        }
      })
    })
  },

  showPendingTrips(traveler, tripData, destinations) {
    let pendingTripsSection = document.querySelector('.card-pending-trips');
    let pendingTripsList = traveler.filterPendingTrips(tripData);
    pendingTripsList.forEach(trip => {
      destinations.forEach(destination => {
        if (destination.id === trip.destinationID) {
        pendingTripsSection.insertAdjacentHTML('afterbegin', `
        <div class="card-trip">
          <p class="display-date pending-date">Date: ${trip.date}</p>
          <p class="display-destination pending-destination">Destination: ${destination.destination}</p>
          <img src ="${destination.image}" class="destination-photo" alt="photo of ${destination.destination}>
          <p class="display-duration pending-duration">Duration: ${trip.duration}</p>
          <p class="display-number-travelers pending-travelers"># of Travelers: ${trip.travelers}</p>
        </div>
        `)
        }
      })
    })
  },

  showPastTrips(traveler, tripData, dateToday, destinations) {
    let pastTripsSection = document.querySelector('.card-past-trip');
    let pastTrips = traveler.filterPastTrips(tripData, dateToday);
    pastTrips.forEach(trip => {
      destinations.forEach(destination => {
        if (destination.id === trip.destinationID) {
        pastTripsSection.insertAdjacentHTML('afterbegin', `
        <div class="card-trip">
          <p class="display-date pending-date">Date: ${trip.date}</p>
          <p class="display-destination pending-destination">Destination: ${destination.destination}</p>
          <img src ="${destination.image}" class="destination-photo" alt="photo of ${destination.destination}>
          <p class="display-duration pending-duration">Duration: ${trip.duration}</p>
          <p class="display-number-travelers pending-travelers"># of Travelers: ${trip.travelers}</p>
        </div>
        `)
        }
      })
    })
  },

  showPresentTrip(traveler, tripData, dateToday, destinations) {
    let presentTripsSection = document.querySelector('.card-present-trip');
    let presentTrips = traveler.filterPresentTrips(tripData, dateToday);
    presentTrips.forEach(trip => {
      destinations.forEach(destination => {
        if (destination.id === trip.destinationID) {
          presentTripsSection.insertAdjacentHTML('afterbegin', `
          <p class="display-date pending-date">Date: ${trip.date}</p>
          <p class="display-destination pending-destination">Destination: ${destination.destination}</p>
          <img src ="${destination.image}" class="destination-photo" alt="photo of ${destination.destination}>
          <p class="display-duration pending-duration">Duration: ${trip.duration}</p>
          <p class="display-number-travelers pending-travelers"># of Travelers: ${trip.travelers}</p>
          `)
        }
      })
    })
  },

  displayTotalAnnualAmt(traveler, tripData, year, destinations) {
    let totalAmtSpent = traveler.determineTotalAmtSpent(tripData, year, destinations);
    let totalSpentDisplay = document.querySelector('.total-amount-spent');
    totalSpentDisplay.innerHTML += `<p class="amount-spent-amount">$${totalAmtSpent}</p>`;
  }, 

  revealSubmissionButton() {
    document.querySelector(".button-submit-request").classList.remove("hidden");
  },

  clearForm() {
    document.querySelector(".date-input").value = "";
    document.querySelector(".destination-menu").value = "";
    document.querySelector(".duration-input").value = "";
    document.querySelector(".travelers-input").value = "";
    document.querySelector(".button-submit-request").classList.add("hidden");
  }, 

  submitRequest() {
    event.preventDefault()
    document.querySelector(".card-book-trip").insertAdjacentHTML('beforeend', `
    <p class="trip-status-announcement">Your trip has been submitted and is now pending.</p>`)
    document.querySelector(".button-submit-request").classList.add("hidden");
    this.clearForm();
  }, 

  showCostEstimate(tripEstimate) {
    event.preventDefault()
    document.querySelector(".card-book-trip").insertAdjacentHTML('beforeend', `
    <p class="cost-estimate-announcement">Trip Cost Estimate: $${tripEstimate}<p>
    `)
  },

  clearText() {
    document.querySelector(".cost-estimate-announcement").innerHTML = "";
  }
}
/* harmony default export */ __webpack_exports__["default"] = (domUpdates);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domUpdates.js */ "./src/domUpdates.js");
/* harmony import */ var _Traveler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Traveler.js */ "./src/Traveler.js");
/* harmony import */ var _Trip_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Trip.js */ "./src/Trip.js");







const logInButton = document.querySelector(".button-login");
const logOutButton = document.querySelector('#button-log-out');
const calculateCostButton = document.querySelector('.button-cost-estimate');
const submitRequestButton = document.querySelector('.button-submit-request');

let traveler, travelerId, trips, destinations;

let today = new Date().toISOString().slice(0, 10).replaceAll("-", "");
// let today = "2020/07/25";
let year = '2020';

const instantiateUser = (travelers, userLogin) => {
  const travelerInfo = travelers.find(traveler => {
    return traveler.id === userLogin;
  })
  traveler = new _Traveler_js__WEBPACK_IMPORTED_MODULE_2__["default"]({id: travelerId, name: travelerInfo.name, travelerType: travelerInfo.travelerType});
}

const getData = () => {
  let userPromise = fetch('http://localhost:3001/api/v1/travelers/')
    .then(res => res.json());
  let tripsPromise = fetch('http://localhost:3001/api/v1/trips')
    .then(res => res.json());
  let destinationsPromise = fetch('http://localhost:3001/api/v1/destinations')
    .then(res => res.json());

  Promise.all([userPromise, tripsPromise, destinationsPromise])
    .then(dataset => {
      instantiateUser(dataset[0].travelers, travelerId)
      trips = dataset[1].trips;
      destinations = dataset[2].destinations;
      _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].greetUser(traveler);
      _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].revealDashboard();
      _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayTotalAnnualAmt(traveler, trips, year, destinations);
      _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].showPendingTrips(traveler, trips, destinations);
      _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].showUpcomingTrips(traveler, trips, today, destinations);
      _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].showPastTrips(traveler, trips, today, destinations);
      _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].showPresentTrip(traveler, trips, today, destinations);
      _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayBookTrip(destinations);
    })
    .catch(error => _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayMessage("Oops! Something went wrong. Please try again."));
}

const openDashboard = () => {
  getData();
}

const getTravelerId = () => {
  const userLogin = document.querySelector("#input-username").value;
  const userPassword = document.querySelector("#input-password").value;
  if (!userLogin.includes("traveler") || userPassword !== "travel2020") {
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayMessage("Wrong username and/or password. Please try again.");
  } else {
    travelerId = Number(userLogin.slice(8));
    return travelerId;
  }
}

const checkLoginInfo = () => {
  if (document.querySelector("#input-username").value && document.querySelector("#input-password").value) {
    getTravelerId();
    openDashboard();
  } else {
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayMessage("Wrong username and/or password. Please try again.");
  }
}

const loginUser = () => {
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].hideDashboard();
}

const addTrip = (tripDetails) => {
  tripDetails.status = 'pending';
  tripDetails.id = parseInt(trips.length) + 1;
  tripDetails.date = tripDetails.date.replaceAll('-', "/");
  tripDetails.userID = traveler.id;
  tripDetails.suggestedActivities = [];
  tripDetails = new _Trip_js__WEBPACK_IMPORTED_MODULE_3__["default"](tripDetails);
  fetch('http://localhost:3001/api/v1/trips', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(tripDetails)
  })
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(err => _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayMessage("Sorry.  Your trip request didn't go through."))
}

const logOutUser = () => {
  reload = location.reload();
}

const getTripDetails = () => {
  const tripDetails = {};
  tripDetails.date = document.querySelector("#book-date").value;
  tripDetails.destinationID = +document.querySelector(".destination-menu").value;
  tripDetails.duration = document.querySelector("#book-duration").value;
  tripDetails.travelers = document.querySelector("#book-travelers").value;
  return tripDetails;
}

const checkInputFields = () => {
  event.preventDefault();
  if (document.querySelector("#book-date").value && document.querySelector(".destination-menu").value && document.querySelector("#book-duration").value > 0 && document.querySelector("#book-travelers").value > 0) {
    getTripCostEstimate();
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].revealSubmissionButton();
  }
}

const getTripCostEstimate = () => {
  event.preventDefault();
  const tripDetails = getTripDetails();
  const findDestination = destinations.find(destination => destination.id == tripDetails.destinationID);
  const lodgingEstimate = findDestination.estimatedLodgingCostPerDay * tripDetails.duration;
  const flightEstimate = findDestination.estimatedFlightCostPerPerson * tripDetails.travelers;
  const agentFee = (lodgingEstimate + flightEstimate) * 0.1;
  const tripEstimate = lodgingEstimate + flightEstimate + agentFee;
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].showCostEstimate(tripEstimate);
}

const submitBookingRequest = () => {
  const tripDetails = getTripDetails();
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].submitRequest();
  addTrip(tripDetails);
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearText();
  _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].clearForm();
}

window.onload = loginUser();
logInButton.addEventListener('click', checkLoginInfo);
logOutButton.addEventListener('click', logOutUser, true);
calculateCostButton.addEventListener('click', checkInputFields);
submitRequestButton.addEventListener('click', submitBookingRequest);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1RyYXZlbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmlwLmpzIiwid2VicGFjazovLy8uL3NyYy9jc3MvYmFzZS5zY3NzPzExMDciLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbVVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFl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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBVTtBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0RBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0EsRUFBRSxzREFBVTtBQUNaO0FBQ0EsRUFBRSxzREFBVTtBQUNaLEVBQUUsc0RBQVU7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDsgfVxcblxcbmh0bWwsIGJvZHkge1xcbiAgYmFja2dyb3VuZDogIzE1NDM1RDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7IH1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxubmF2IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVkZGQ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMzV2aDsgfVxcblxcbmZvcm0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMSU7IH1cXG5cXG4uZGFzaGJvYXJkLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAxJSAzJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxuICBtYXJnaW46IDQlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE1NDM1RDsgfVxcblxcbi50cmlwLWxpc3Qtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWRkZDc7XFxuICBjb2xvcjogIzA3MTYxZjtcXG4gIHBhZGRpbmc6IDMlOyB9XFxuXFxuLmNhcmQtYm9vay10cmlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWRkZDc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5jYXJkLXRyaXAge1xcbiAgcGFkZGluZzogMiU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uZGVzdGluYXRpb24tcGhvdG8ge1xcbiAgd2lkdGg6IDQwdmg7IH1cXG5cXG4ucGVuZGluZy10cmlwcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuXFxuaDEge1xcbiAgY29sb3I6ICMwYjIyMmY7XFxuICBmb250LXNpemU6IDh2aDtcXG4gIG1hcmdpbjogNXZoO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IGJsYWNrOyB9XFxuXFxuaDIge1xcbiAgY29sb3I6ICNmZGY1ZWI7XFxuICBtYXJnaW46IDN2aDsgfVxcblxcbmgzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTI1MjE7XFxuICBjb2xvcjogI2ZkZjVlYjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDMlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XFxuICBoMzphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgfVxcblxcbnAge1xcbiAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcblxcbi5hbW91bnQtc3BlbnQtYW1vdW50IHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XFxuXFxuLmNvc3QtZXN0aW1hdGUtYW5ub3VuY2VtZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgcGFkZGluZy10b3A6IDA7IH1cXG5cXG4uZ3JlZXRpbmcge1xcbiAgY29sb3I6ICNDRkNGRDc7XFxuICBmb250LXNpemU6IDR2aDtcXG4gIG1hcmdpbi1ib3R0b206IDAlO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IGJsYWNrOyB9XFxuXFxuLnRvdGFsLWFtb3VudC1zcGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZDRkQ3O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogMiU7IH1cXG5cXG4udHJpcC1zdGF0dXMtYW5ub3VuY2VtZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMlO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogM3ZoOyB9XFxuXFxuLmNvbnRhaW5lci11c2VybmFtZSwgLmNvbnRhaW5lci1wYXNzd29yZCwgLmJ1dHRvbi1sb2dpbiB7XFxuICBtYXJnaW46IDIlO1xcbiAgd2lkdGg6IDU1JTsgfVxcblxcbi5idXR0b24tbG9naW4ge1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBtYXJnaW46IDJ2aDtcXG4gIHdpZHRoOiA0MyU7XFxuICBwYWRkaW5nOiAyJTtcXG4gIHdpZHRoOiA2MCU7IH1cXG4gIC5idXR0b24tbG9naW46aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIyMjJmO1xcbiAgICBjb2xvcjogI2ZkZjVlYjsgfVxcblxcbi5pbnB1dC1sb2dpbiB7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDR2aDtcXG4gIHBhZGRpbmc6IDF2aDtcXG4gIG1hcmdpbi10b3A6IDElO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZjVlYjtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgd2lkdGg6IDYwJTsgfVxcblxcbi5sb2dpbi1kaXNwbGF5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkNGRDc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiA1NSU7XFxuICBoZWlnaHQ6IDI1dmg7XFxuICBwYWRkaW5nOiA1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDsgfVxcblxcbi5idXR0b24tY29zdC1lc3RpbWF0ZSwgLmJ1dHRvbi1zdWJtaXQtcmVxdWVzdCB7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDd2aDtcXG4gIG1hcmdpbjogMnZoO1xcbiAgd2lkdGg6IDQzJTsgfVxcbiAgLmJ1dHRvbi1jb3N0LWVzdGltYXRlOmhvdmVyLCAuYnV0dG9uLXN1Ym1pdC1yZXF1ZXN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMjIyZjtcXG4gICAgY29sb3I6ICNmZGY1ZWI7IH1cXG5cXG4uYnV0dG9uLW5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgbWFyZ2luOiAxdmg7XFxuICB3aWR0aDogMTAlO1xcbiAgaGVpZ2h0OiAxMHZoOyB9XFxuICAuYnV0dG9uLW5hdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjIyMmY7XFxuICAgIGNvbG9yOiAjZmRmNWViOyB9XFxuXFxuLmRhdGUtaW5wdXQsIC5kZXN0aW5hdGlvbi1tZW51LCAuZHVyYXRpb24taW5wdXQsIC50cmF2ZWxlcnMtaW5wdXQge1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiA0dmg7XFxuICBwYWRkaW5nOiAxdmg7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkNGRDc7XFxuICBtYXJnaW46IDF2aDsgfVxcblxcbi5kdXJhdGlvbi1pbnB1dCB7XFxuICB3aWR0aDogMjB2aDtcXG4gIG1hcmdpbi1ib3R0b206IDMlOyB9XFxuXFxuLnRyYXZlbGVycy1pbnB1dCB7XFxuICB3aWR0aDogOHZoOyB9XFxuXFxuLmhpZGRlbiB7XFxuICBib3JkZXI6IDA7XFxuICBjbGlwOiByZWN0KDAgMCAwIDApO1xcbiAgaGVpZ2h0OiAxcHg7XFxuICBtYXJnaW46IC0xcHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcGFkZGluZzogMDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7IH1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC50cmlwLWxpc3Qtd3JhcHBlciB7XFxuICAgIGdyaWQtZ2FwOiAwLjUlIDQlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpOyB9XFxuICBuYXYge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDQwdmg7IH1cXG4gIC5kZXN0aW5hdGlvbi1waG90byB7XFxuICAgIHdpZHRoOiA1MHZoOyB9XFxuICAubG9naW4tZGlzcGxheSB7XFxuICAgIHdpZHRoOiA4MiU7IH1cXG4gIC5tYWluLWhlYWRlciB7XFxuICAgIGhlaWdodDogMTh2aDsgfVxcbiAgLnNlYXJjaC1pbnB1dCB7XFxuICAgIHdpZHRoOiA1MCU7IH0gfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFj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bUI3QyxjRGJzQyxFQUFBOztBRDBMMUM7RUV6S0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUZ1S2hCLHlCQ2hNb0I7RURpTXBCLFdBQVcsRUFBQTs7QUFPYjtFQUVFLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFFRSxVQUFVLEVBQUE7O0FBSVo7RUFDRSxTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUtaO0VBekxBO0lBMkxJLGlCQUFpQjtJQUNqQixxQ0FBcUMsRUFBQTtFQWpOekM7SUFxTkksc0JBQXNCO0lBQ3RCLFlBQVksRUFBQTtFQTdLaEI7SUFpTEksV0FBVyxFQUFBO0VBL0VmO0lBbUZJLFVBQVUsRUFBQTtFQUdaO0lBQ0UsWUFBWSxFQUFBO0VBR2Q7SUFDRSxVQUFVLEVBQUEsRUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XFxuQGltcG9ydCAnLi9leHRlbmRzJztcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgYmFja2dyb3VuZDogJHByaW1hcnktYmFja2dyb3VuZDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gIEBleHRlbmQgaHRtbDtcXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxubWFpbiB7XFxuICBAaW5jbHVkZSBhbGlnbi1jZW50ZXItZmxleCgpO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbm5hdiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1tdXRlZC1hY2NlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAzNXZoO1xcbn1cXG5cXG5mb3JtIHtcXG4gIEBpbmNsdWRlIGFsaWduLWNlbnRlci1mbGV4O1xcbiAgcGFkZGluZzogMSU7XFxufVxcblxcbi5kYXNoYm9hcmQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDElIDMlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gIG1hcmdpbjogNCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1iYWNrZ3JvdW5kO1xcbn1cXG5cXG4udHJpcC1saXN0LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LW11dGVkLWFjY2VudDtcXG4gIGNvbG9yOiAkZGFya2VyLXByaW1hcnktY29sb3I7XFxuICBwYWRkaW5nOiAzJTtcXG59XFxuLy8tLS0tLS0tLS0tY2F0ZWdvcmllcy0tLS0tLS0tLS0tLy9cXG5cXG4uY2FyZC1ib29rLXRyaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1tdXRlZC1hY2NlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNhcmQtdHJpcCB7XFxuICBwYWRkaW5nOiAyJTtcXG4gIEBpbmNsdWRlIGFsaWduLWNlbnRlci1mbGV4O1xcbn1cXG5cXG4uZGVzdGluYXRpb24tcGhvdG8ge1xcbiAgd2lkdGg6IDQwdmg7XFxufVxcblxcbi5wZW5kaW5nLXRyaXBzIHtcXG4gIEBpbmNsdWRlIGp1c3RpZnktY2VudGVyLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4vLy0tLS0tLS0tLS1UZXh0LS0tLS0tLS0tLS0tLS0tLS8vXFxuaDEge1xcbiAgY29sb3I6ICRkYXJrLXRleHQtY29sb3I7XFxuICBmb250LXNpemU6IDh2aDtcXG4gIG1hcmdpbjogNXZoO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IGJsYWNrO1xcbn1cXG5cXG5oMiB7XFxuICBjb2xvcjogJGRhcmstaG92ZXItdGV4dDtcXG4gIG1hcmdpbjogM3ZoO1xcbn1cXG5cXG5oMyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ob3Zlci1iYWNrZ3JvdW5kO1xcbiAgY29sb3I6ICRkYXJrLWhvdmVyLXRleHQ7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzJTtcXG4gIEBpbmNsdWRlIGp1c3RpZnktY2VudGVyLWZsZXgoKTtcXG4gICY6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICB9XFxufVxcblxcbnAge1xcbiAgZm9udC13ZWlnaHQ6MzAwO1xcbn1cXG5cXG4uYW1vdW50LXNwZW50LWFtb3VudCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmNvc3QtZXN0aW1hdGUtYW5ub3VuY2VtZW50IHtcXG4gIEBpbmNsdWRlIGp1c3RpZnktY2VudGVyLWZsZXg7XFxuICBmb250LXNpemU6IDN2aDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAyJTtcXG4gIHBhZGRpbmctdG9wOiAwO1xcbn1cXG5cXG4uZ3JlZXRpbmcge1xcbiAgY29sb3I6ICRtdXRlZC1hY2NlbnQ7XFxuICBmb250LXNpemU6IDR2aDtcXG4gIG1hcmdpbi1ib3R0b206IDAlO1xcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMHB4IGJsYWNrO1xcbn1cXG5cXG4udG90YWwtYW1vdW50LXNwZW50IHtcXG4gIEBpbmNsdWRlIGp1c3RpZnktY2VudGVyLWZsZXg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbXV0ZWQtYWNjZW50O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgcGFkZGluZzogMiU7XFxufVxcblxcbi50cmlwLXN0YXR1cy1hbm5vdW5jZW1lbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogMyU7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zaXplOiAzdmg7XFxufVxcbi8vLS0tLS0tLS0tbG9naW4gZGlzcGxheS0tLS0tLS8vXFxuXFxuLmNvbnRhaW5lci11c2VybmFtZSB7XFxuICBtYXJnaW46IDIlO1xcbiAgd2lkdGg6IDU1JTtcXG59XFxuXFxuLmNvbnRhaW5lci1wYXNzd29yZCB7XFxuICBAZXh0ZW5kIC5jb250YWluZXItdXNlcm5hbWU7ICBcXG59XFxuXFxuLmJ1dHRvbi1sb2dpbiB7XFxuICBAZXh0ZW5kIC5jb250YWluZXItdXNlcm5hbWU7XFxuICBAaW5jbHVkZSBidXR0b24tc3R5bGU7XFxuICBwYWRkaW5nOiAyJTtcXG4gIHdpZHRoOiA2MCU7XFxuICAmOmhvdmVyIHtcXG4gICAgQGluY2x1ZGUgYnV0dG9uLWhvdmVyO1xcbiAgfVxcbn1cXG5cXG4uaW5wdXQtbG9naW4ge1xcbiAgQGluY2x1ZGUgaW5wdXQtc3R5bGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ob3Zlci10ZXh0O1xcbiAgcGFkZGluZzogMiU7XFxuICB3aWR0aDogNjAlO1xcbn1cXG5cXG4ubG9naW4tZGlzcGxheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbXV0ZWQtYWNjZW50O1xcbiAgQGluY2x1ZGUgYWxpZ24tY2VudGVyLWZsZXgoKTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDU1JTtcXG4gIGhlaWdodDogMjV2aDtcXG4gIHBhZGRpbmc6IDUlO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4vLy0tLS0tLS0tLWJ1dHRvbnMgYW5kIGlucHV0IGZpZWxkcy0tLS0tLS0tLS0tLy9cXG5cXG4uYnV0dG9uLWNvc3QtZXN0aW1hdGUsIC5idXR0b24tc3VibWl0LXJlcXVlc3Qge1xcbiAgQGluY2x1ZGUgYnV0dG9uLXN0eWxlO1xcbiAgJjpob3ZlciB7XFxuICAgIEBpbmNsdWRlIGJ1dHRvbi1ob3ZlcjtcXG4gIH1cXG59XFxuXFxuLmJ1dHRvbi1uYXYge1xcbiAgQGluY2x1ZGUganVzdGlmeS1jZW50ZXItZmxleCgpO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIG1hcmdpbjogMXZoO1xcbiAgd2lkdGg6IDEwJTtcXG4gIGhlaWdodDogMTB2aDtcXG4gICY6aG92ZXIge1xcbiAgICBAaW5jbHVkZSBidXR0b24taG92ZXI7XFxuICB9XFxufVxcblxcbi5kYXRlLWlucHV0IHtcXG4gIEBpbmNsdWRlIGlucHV0LXN0eWxlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJG11dGVkLWFjY2VudDtcXG4gIG1hcmdpbjogMXZoO1xcbn1cXG5cXG4uZGVzdGluYXRpb24tbWVudSB7XFxuICBAZXh0ZW5kIC5kYXRlLWlucHV0O1xcbn1cXG5cXG4uZHVyYXRpb24taW5wdXQge1xcbiAgQGV4dGVuZCAuZGF0ZS1pbnB1dDtcXG4gIHdpZHRoOiAyMHZoO1xcbiAgbWFyZ2luLWJvdHRvbTogMyU7XFxufVxcblxcbi50cmF2ZWxlcnMtaW5wdXQge1xcbiAgQGV4dGVuZCAuZGF0ZS1pbnB1dDtcXG4gIHdpZHRoOiA4dmg7XFxufVxcblxcbi8vLS0tLS0tLS0taGlkZGVuLS0tLS0tLS0tLS0vL1xcbi5oaWRkZW4ge1xcbiAgYm9yZGVyOiAwO1xcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4O1xcbn1cXG5cXG4vLy0tLS0tLS1tZWRpYSBxdWVyaWVzLS0tLS0tLy9cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcXG4gIC50cmlwLWxpc3Qtd3JhcHBlciB7XFxuICAgIGdyaWQtZ2FwOiAwLjUlIDQlO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgfVxcblxcbiAgbmF2IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA0MHZoO1xcbiAgfVxcblxcbiAgLmRlc3RpbmF0aW9uLXBob3RvIHtcXG4gICAgd2lkdGg6IDUwdmg7XFxuICB9XFxuICBcXG4gIC5sb2dpbi1kaXNwbGF5IHtcXG4gICAgd2lkdGg6IDgyJTtcXG4gIH1cXG5cXG4gIC5tYWluLWhlYWRlciB7XFxuICAgIGhlaWdodDogMTh2aDtcXG4gIH1cXG5cXG4gIC5zZWFyY2gtaW5wdXQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgfVxcbn1cIixcIiRwcmltYXJ5LWJhY2tncm91bmQ6ICMxNTQzNUQ7XFxuJGRhcmtlci1wcmltYXJ5LWNvbG9yOiBkYXJrZW4oJHByaW1hcnktYmFja2dyb3VuZCwgMTUlKTtcXG4kZGFyay10ZXh0LWNvbG9yOiBtaXgoYmxhY2ssICRwcmltYXJ5LWJhY2tncm91bmQpO1xcbiRsaWdodGVyLWJhY2tncm91bmQ6ICNBODk2ODg7XFxuJG11dGVkLWFjY2VudDogI0NGQ0ZENztcXG4kc2Vjb25kYXJ5LW11dGVkLWFjY2VudDogbWl4KGFudGlxdWV3aGl0ZSwgJG11dGVkLWFjY2VudCk7XFxuJGxpZ2h0ZXN0LWFjY2VudDogYW50aXF1ZXdoaXRlO1xcbiRkYXJrLWhvdmVyLWJhY2tncm91bmQ6ICMyYTI1MjE7XFxuJGRhcmstaG92ZXItdGV4dDogbWl4KGFudGlxdWV3aGl0ZSwgd2hpdGUpO1wiLFwiQG1peGluIGp1c3RpZnktY2VudGVyLWZsZXgoKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5AbWl4aW4gYWxpZ24tY2VudGVyLWZsZXgoKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbkBtaXhpbiBidXR0b24tc3R5bGUoKSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDd2aDtcXG4gICAgbWFyZ2luOiAydmg7XFxuICAgIHdpZHRoOiA0MyU7XFxufVxcblxcbkBtaXhpbiBidXR0b24taG92ZXIoKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLXRleHQtY29sb3I7XFxuICAgIGNvbG9yOiAkZGFyay1ob3Zlci10ZXh0O1xcbn1cXG5cXG5AbWl4aW4gaW5wdXQtc3R5bGUoKSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDR2aDtcXG4gICAgcGFkZGluZzogMXZoO1xcbiAgICBtYXJnaW4tdG9wOiAxJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNsYXNzIFRyYXZlbGVyIHtcbiAgY29uc3RydWN0b3IodHJhdmVsZXJEYXRhKSB7XG4gICAgdGhpcy5pZCA9IHRyYXZlbGVyRGF0YS5pZDtcbiAgICB0aGlzLm5hbWUgPSB0cmF2ZWxlckRhdGEubmFtZTtcbiAgICB0aGlzLnRyYXZlbGVyVHlwZSA9IHRyYXZlbGVyRGF0YS50cmF2ZWxlclR5cGU7XG4gICAgdGhpcy51c2VybmFtZSA9IFwidHJhdmVsZXJcIiArIHRoaXMuaWQ7XG4gICAgdGhpcy5wYXNzd29yZCA9IFwidHJhdmVsMjAyMFwiO1xuICAgIHRoaXMudHJpcHMgPSBbXTtcbiAgICB0aGlzLnBlbmRpbmdUcmlwcyA9IFtdO1xuICAgIHRoaXMudXBjb21pbmdUcmlwcyA9IFtdO1xuICAgIHRoaXMucGFzdFRyaXBzID0gW107XG4gICAgdGhpcy5wcmVzZW50VHJpcHMgPSBbXTtcbiAgfVxuICBmaWx0ZXJBbGxUcmlwcyh0cmlwRGF0YSkge1xuICAgIHRoaXMudHJpcHMgPSB0cmlwRGF0YS5maWx0ZXIodHJpcCA9PiB0cmlwLnVzZXJJRCA9PT0gdGhpcy5pZCk7XG4gICAgcmV0dXJuIHRoaXMudHJpcHM7XG4gIH1cblxuICBmaWx0ZXJQZW5kaW5nVHJpcHModHJpcERhdGEpIHtcbiAgICB0aGlzLmZpbHRlckFsbFRyaXBzKHRyaXBEYXRhKTtcbiAgICB0aGlzLnBlbmRpbmdUcmlwcyA9IHRoaXMudHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5zdGF0dXMgPT09ICdwZW5kaW5nJyk7XG4gICAgcmV0dXJuIHRoaXMucGVuZGluZ1RyaXBzO1xuICB9ICBcblxuICBmaWx0ZXJVcGNvbWluZ1RyaXBzKHRyaXBEYXRhLCBkYXRlVG9kYXkpIHtcbiAgICB0aGlzLmZpbHRlckFsbFRyaXBzKHRyaXBEYXRhKTtcbiAgICB0aGlzLnVwY29taW5nVHJpcHMgPSB0aGlzLnRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAuc3RhdHVzID09PSAnYXBwcm92ZWQnICYmIHBhcnNlSW50KHRyaXAuc3RhdHVzID09PSB0cmlwLmRhdGUuc3BsaXQoJy8nKS5qb2luKCcnKSkgPiBwYXJzZUludChkYXRlVG9kYXkuc3BsaXQoJy8nKS5qb2luKCcnKSkpO1xuICAgIHJldHVybiB0aGlzLnVwY29taW5nVHJpcHM7XG4gIH1cblxuICBmaWx0ZXJQYXN0VHJpcHModHJpcERhdGEsIGRhdGVUb2RheSkge1xuICAgIHRoaXMuZmlsdGVyQWxsVHJpcHModHJpcERhdGEpO1xuICAgIHRoaXMucGFzdFRyaXBzID0gdGhpcy50cmlwcy5maWx0ZXIodHJpcCA9PiBwYXJzZUludCh0cmlwLmRhdGUuc3BsaXQoJy8nKS5qb2luKCcnKSkgPCBwYXJzZUludChkYXRlVG9kYXkuc3BsaXQoJy8nKS5qb2luKCcnKSkpO1xuICAgIHJldHVybiB0aGlzLnBhc3RUcmlwcztcbiAgfVxuXG4gIGZpbHRlclByZXNlbnRUcmlwcyh0cmlwRGF0YSwgZGF0ZVRvZGF5KSB7XG4gICAgdGhpcy5maWx0ZXJBbGxUcmlwcyh0cmlwRGF0YSk7XG4gICAgdGhpcy50cmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgY29uc3QgdHJpcFN0YXJ0RGF0ZXMgPSBwYXJzZUludCh0cmlwLmRhdGUuc3BsaXQoJy8nKS5qb2luKCcnKSk7XG4gICAgICBjb25zdCB0cmlwRW5kRGF0ZXMgPSB0cmlwU3RhcnREYXRlcyArIHRyaXAuZHVyYXRpb247XG4gICAgICBjb25zdCB0b2RheXNEYXRlID0gcGFyc2VJbnQoZGF0ZVRvZGF5LnNwbGl0KCcvJykuam9pbignJykpO1xuICAgICAgaWYgKHRyaXBTdGFydERhdGVzIDwgdG9kYXlzRGF0ZSAmJiB0cmlwRW5kRGF0ZXMgPiB0b2RheXNEYXRlKSB7XG4gICAgICAgIHRoaXMucHJlc2VudFRyaXBzLnB1c2godHJpcClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnByZXNlbnRUcmlwcztcbiAgfVxuXG4gIGRldGVybWluZVRvdGFsQW10U3BlbnQodHJpcERhdGEsIHllYXIsIGRlc3RpbmF0aW9ucykge1xuICAgIGxldCB1c2VyVHJpcHMgPSB0aGlzLmZpbHRlckFsbFRyaXBzKHRyaXBEYXRhKTtcbiAgICBsZXQgdHJpcHNJblllYXIgPSB1c2VyVHJpcHMuZmlsdGVyKHRyaXAgPT4gdHJpcC5kYXRlLmluY2x1ZGVzKHllYXIpICYmIHRyaXAuc3RhdHVzID09PSAnYXBwcm92ZWQnKTtcbiAgICBsZXQgZ2V0Q29zdFN0YXRzID0gdHJpcHNJblllYXIubWFwKHRyaXAgPT4ge1xuICAgICAgbGV0IHRvdGFsVHJpcENvc3QgPSB7fTtcbiAgICAgIGRlc3RpbmF0aW9ucy5mb3JFYWNoKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgICAgaWYgKHRyaXAuZGVzdGluYXRpb25JRCA9PT0gZGVzdGluYXRpb24uaWQpIHtcbiAgICAgICAgICB0b3RhbFRyaXBDb3N0LnRvdGFsTG9kZ2luZyA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICogdHJpcC5kdXJhdGlvbjtcbiAgICAgICAgICB0b3RhbFRyaXBDb3N0LnRvdGFsRmxpZ2h0Q29zdCA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gKiB0cmlwLnRyYXZlbGVycztcbiAgICAgICAgICB0b3RhbFRyaXBDb3N0LmFnZW50RmVlID0gKHRvdGFsVHJpcENvc3QudG90YWxMb2RnaW5nICsgdG90YWxUcmlwQ29zdC50b3RhbEZsaWdodENvc3QpICogMC4xO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRvdGFsVHJpcENvc3Q7XG4gICAgfSk7XG4gICAgbGV0IHRvdGFsQ29zdFBlckdpdmVuWWVhciA9IGdldENvc3RTdGF0cy5yZWR1Y2UoKGNvc3RTdW0sIGNvc3RTdGF0KSA9PiB7XG4gICAgICBjb3N0U3VtICs9IGNvc3RTdGF0LnRvdGFsTG9kZ2luZyArIGNvc3RTdGF0LnRvdGFsRmxpZ2h0Q29zdCArIGNvc3RTdGF0LmFnZW50RmVlO1xuICAgICAgcmV0dXJuIGNvc3RTdW07XG4gICAgfSwgMCk7XG4gICAgcmV0dXJuIHRvdGFsQ29zdFBlckdpdmVuWWVhcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWxlcjsiLCJjbGFzcyBUcmlwIHtcbiAgY29uc3RydWN0b3IodHJpcERhdGEpIHtcbiAgICB0aGlzLmlkID0gdHJpcERhdGEuaWQ7XG4gICAgdGhpcy51c2VySUQgPSB0cmlwRGF0YS51c2VySUQ7XG4gICAgdGhpcy5kZXN0aW5hdGlvbklEID0gdHJpcERhdGEuZGVzdGluYXRpb25JRDtcbiAgICB0aGlzLnRyYXZlbGVycyA9IHRyaXBEYXRhLnRyYXZlbGVycztcbiAgICB0aGlzLmRhdGUgPSB0cmlwRGF0YS5kYXRlO1xuICAgIHRoaXMuZHVyYXRpb24gPSB0cmlwRGF0YS5kdXJhdGlvbjtcbiAgICB0aGlzLnN0YXR1cyA9IHRyaXBEYXRhLnN0YXR1cztcbiAgICB0aGlzLnN1Z2dlc3RlZEFjdGl2aXRpZXMgPSB0cmlwRGF0YS5zdWdnZXN0ZWRBY3Rpdml0aWVzO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXA7IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwibGV0IGRvbVVwZGF0ZXMgPSB7XG5cbiAgaGlkZURhc2hib2FyZCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhc2hib2FyZC13cmFwcGVyXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tbmF2XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH0sXG5cbiAgcmV2ZWFsRGFzaGJvYXJkKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9naW4tZGlzcGxheVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFzaGJvYXJkLXdyYXBwZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1uYXZcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfSxcblxuICBkaXNwbGF5TWVzc2FnZShtZXNzYWdlKSB7XG4gICAgY29uc3QgZGlzcGxheU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbWVzc2FnZScpO1xuICAgIGRpc3BsYXlNZXNzYWdlLmlubmVySFRNTCA9IGA8cCBjbGFzcz1cIm1lc3NhZ2VcIj4ke21lc3NhZ2V9PC9wPmBcbiAgfSwgXG5cbiAgZ3JlZXRVc2VyKHRyYXZlbGVyKSB7XG4gICAgY29uc3QgbmFtZSA9IHRyYXZlbGVyLm5hbWUuc3BsaXQoJyAnKVswXVxuICAgIGNvbnN0IHVzZXJHcmVldGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ3JlZXRpbmdcIik7XG4gICAgdXNlckdyZWV0aW5nLmlubmVyVGV4dCA9IGBXZWxjb21lLCAke25hbWV9YFxuICB9LFxuXG4gIGRpc3BsYXlCb29rVHJpcChkZXN0aW5hdGlvbnMpIHtcbiAgICBjb25zdCBkZXN0aW5hdGlvbk1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc3RpbmF0aW9uLW1lbnVcIik7XG4gICAgZGVzdGluYXRpb25zLmZvckVhY2goZGVzdGluYXRpb24gPT4ge1xuICAgICAgY29uc3QgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgbGlzdEVsZW1lbnQuaW5uZXJIVE1MID0gYCR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259YDtcbiAgICAgIGxpc3RFbGVtZW50LnZhbHVlID0gYCR7ZGVzdGluYXRpb24uaWR9YDtcbiAgICAgIGRlc3RpbmF0aW9uTWVudS5hcHBlbmRDaGlsZChsaXN0RWxlbWVudCk7XG4gICAgfSlcbiAgfSxcbiAgc2hvd1VwY29taW5nVHJpcHModHJhdmVsZXIsIHRyaXBEYXRhLCBkYXRlVG9kYXksIGRlc3RpbmF0aW9ucykge1xuICAgIGxldCB1cGNvbWluZ1RyaXBzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXVwY29taW5nLXRyaXBzJyk7XG4gICAgbGV0IHVwY29taW5nVHJpcHNMaXN0ID0gdHJhdmVsZXIuZmlsdGVyVXBjb21pbmdUcmlwcyh0cmlwRGF0YSwgZGF0ZVRvZGF5KTtcbiAgICB1cGNvbWluZ1RyaXBzTGlzdC5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgZGVzdGluYXRpb25zLmZvckVhY2goZGVzdGluYXRpb24gPT4ge1xuICAgICAgICBpZiAoZGVzdGluYXRpb24uaWQgPT09IHRyaXAuZGVzdGluYXRpb25JRCkge1xuICAgICAgICAgIHVwY29taW5nVHJpcHNTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGBcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10cmlwXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cImRpc3BsYXktZGF0ZSB1cGNvbWluZy1kYXRlXCI+RGF0ZTogJHt0cmlwLmRhdGV9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJkaXNwbGF5LWRlc3RpbmF0aW9uIHVwY29taW5nLWRlc3RpbmF0aW9uXCI+RGVzdGluYXRpb246ICR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259PC9wPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke2Rlc3RpbmF0aW9uLmltYWdlfVwiIGNsYXNzPVwiZGVzdGluYXRpb24tcGhvdG9cIiBhbHQ9XCJwaG90byBvZiAke2Rlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufT5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZGlzcGxheS1kdXJhdGlvbiB1cGNvbWluZy1kdXJhdGlvblwiPkR1cmF0aW9uOiAke3RyaXAuZHVyYXRpb259PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJkaXNwbGF5LW51bWJlci10cmF2ZWxlcnMgdXBjb21pbmctdHJhdmVsZXJzXCI+IyBvZiBUcmF2ZWxlcnM6ICR7dHJpcC50cmF2ZWxlcnN9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICBzaG93UGVuZGluZ1RyaXBzKHRyYXZlbGVyLCB0cmlwRGF0YSwgZGVzdGluYXRpb25zKSB7XG4gICAgbGV0IHBlbmRpbmdUcmlwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1wZW5kaW5nLXRyaXBzJyk7XG4gICAgbGV0IHBlbmRpbmdUcmlwc0xpc3QgPSB0cmF2ZWxlci5maWx0ZXJQZW5kaW5nVHJpcHModHJpcERhdGEpO1xuICAgIHBlbmRpbmdUcmlwc0xpc3QuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgIGRlc3RpbmF0aW9ucy5mb3JFYWNoKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLmlkID09PSB0cmlwLmRlc3RpbmF0aW9uSUQpIHtcbiAgICAgICAgcGVuZGluZ1RyaXBzU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRyaXBcIj5cbiAgICAgICAgICA8cCBjbGFzcz1cImRpc3BsYXktZGF0ZSBwZW5kaW5nLWRhdGVcIj5EYXRlOiAke3RyaXAuZGF0ZX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkaXNwbGF5LWRlc3RpbmF0aW9uIHBlbmRpbmctZGVzdGluYXRpb25cIj5EZXN0aW5hdGlvbjogJHtkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn08L3A+XG4gICAgICAgICAgPGltZyBzcmMgPVwiJHtkZXN0aW5hdGlvbi5pbWFnZX1cIiBjbGFzcz1cImRlc3RpbmF0aW9uLXBob3RvXCIgYWx0PVwicGhvdG8gb2YgJHtkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn0+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkaXNwbGF5LWR1cmF0aW9uIHBlbmRpbmctZHVyYXRpb25cIj5EdXJhdGlvbjogJHt0cmlwLmR1cmF0aW9ufTwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImRpc3BsYXktbnVtYmVyLXRyYXZlbGVycyBwZW5kaW5nLXRyYXZlbGVyc1wiPiMgb2YgVHJhdmVsZXJzOiAke3RyaXAudHJhdmVsZXJzfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuICBzaG93UGFzdFRyaXBzKHRyYXZlbGVyLCB0cmlwRGF0YSwgZGF0ZVRvZGF5LCBkZXN0aW5hdGlvbnMpIHtcbiAgICBsZXQgcGFzdFRyaXBzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXBhc3QtdHJpcCcpO1xuICAgIGxldCBwYXN0VHJpcHMgPSB0cmF2ZWxlci5maWx0ZXJQYXN0VHJpcHModHJpcERhdGEsIGRhdGVUb2RheSk7XG4gICAgcGFzdFRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBkZXN0aW5hdGlvbnMuZm9yRWFjaChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5pZCA9PT0gdHJpcC5kZXN0aW5hdGlvbklEKSB7XG4gICAgICAgIHBhc3RUcmlwc1NlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10cmlwXCI+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkaXNwbGF5LWRhdGUgcGVuZGluZy1kYXRlXCI+RGF0ZTogJHt0cmlwLmRhdGV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGlzcGxheS1kZXN0aW5hdGlvbiBwZW5kaW5nLWRlc3RpbmF0aW9uXCI+RGVzdGluYXRpb246ICR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259PC9wPlxuICAgICAgICAgIDxpbWcgc3JjID1cIiR7ZGVzdGluYXRpb24uaW1hZ2V9XCIgY2xhc3M9XCJkZXN0aW5hdGlvbi1waG90b1wiIGFsdD1cInBob3RvIG9mICR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259PlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGlzcGxheS1kdXJhdGlvbiBwZW5kaW5nLWR1cmF0aW9uXCI+RHVyYXRpb246ICR7dHJpcC5kdXJhdGlvbn08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkaXNwbGF5LW51bWJlci10cmF2ZWxlcnMgcGVuZGluZy10cmF2ZWxlcnNcIj4jIG9mIFRyYXZlbGVyczogJHt0cmlwLnRyYXZlbGVyc308L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgc2hvd1ByZXNlbnRUcmlwKHRyYXZlbGVyLCB0cmlwRGF0YSwgZGF0ZVRvZGF5LCBkZXN0aW5hdGlvbnMpIHtcbiAgICBsZXQgcHJlc2VudFRyaXBzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXByZXNlbnQtdHJpcCcpO1xuICAgIGxldCBwcmVzZW50VHJpcHMgPSB0cmF2ZWxlci5maWx0ZXJQcmVzZW50VHJpcHModHJpcERhdGEsIGRhdGVUb2RheSk7XG4gICAgcHJlc2VudFRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICBkZXN0aW5hdGlvbnMuZm9yRWFjaChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5pZCA9PT0gdHJpcC5kZXN0aW5hdGlvbklEKSB7XG4gICAgICAgICAgcHJlc2VudFRyaXBzU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgXG4gICAgICAgICAgPHAgY2xhc3M9XCJkaXNwbGF5LWRhdGUgcGVuZGluZy1kYXRlXCI+RGF0ZTogJHt0cmlwLmRhdGV9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGlzcGxheS1kZXN0aW5hdGlvbiBwZW5kaW5nLWRlc3RpbmF0aW9uXCI+RGVzdGluYXRpb246ICR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259PC9wPlxuICAgICAgICAgIDxpbWcgc3JjID1cIiR7ZGVzdGluYXRpb24uaW1hZ2V9XCIgY2xhc3M9XCJkZXN0aW5hdGlvbi1waG90b1wiIGFsdD1cInBob3RvIG9mICR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259PlxuICAgICAgICAgIDxwIGNsYXNzPVwiZGlzcGxheS1kdXJhdGlvbiBwZW5kaW5nLWR1cmF0aW9uXCI+RHVyYXRpb246ICR7dHJpcC5kdXJhdGlvbn08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJkaXNwbGF5LW51bWJlci10cmF2ZWxlcnMgcGVuZGluZy10cmF2ZWxlcnNcIj4jIG9mIFRyYXZlbGVyczogJHt0cmlwLnRyYXZlbGVyc308L3A+XG4gICAgICAgICAgYClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICB9LFxuXG4gIGRpc3BsYXlUb3RhbEFubnVhbEFtdCh0cmF2ZWxlciwgdHJpcERhdGEsIHllYXIsIGRlc3RpbmF0aW9ucykge1xuICAgIGxldCB0b3RhbEFtdFNwZW50ID0gdHJhdmVsZXIuZGV0ZXJtaW5lVG90YWxBbXRTcGVudCh0cmlwRGF0YSwgeWVhciwgZGVzdGluYXRpb25zKTtcbiAgICBsZXQgdG90YWxTcGVudERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG90YWwtYW1vdW50LXNwZW50Jyk7XG4gICAgdG90YWxTcGVudERpc3BsYXkuaW5uZXJIVE1MICs9IGA8cCBjbGFzcz1cImFtb3VudC1zcGVudC1hbW91bnRcIj4kJHt0b3RhbEFtdFNwZW50fTwvcD5gO1xuICB9LCBcblxuICByZXZlYWxTdWJtaXNzaW9uQnV0dG9uKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLXN1Ym1pdC1yZXF1ZXN0XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH0sXG5cbiAgY2xlYXJGb3JtKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGF0ZS1pbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXN0aW5hdGlvbi1tZW51XCIpLnZhbHVlID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1cmF0aW9uLWlucHV0XCIpLnZhbHVlID0gXCJcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRyYXZlbGVycy1pbnB1dFwiKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tc3VibWl0LXJlcXVlc3RcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfSwgXG5cbiAgc3VibWl0UmVxdWVzdCgpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkLWJvb2stdHJpcFwiKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICA8cCBjbGFzcz1cInRyaXAtc3RhdHVzLWFubm91bmNlbWVudFwiPllvdXIgdHJpcCBoYXMgYmVlbiBzdWJtaXR0ZWQgYW5kIGlzIG5vdyBwZW5kaW5nLjwvcD5gKVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnV0dG9uLXN1Ym1pdC1yZXF1ZXN0XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgdGhpcy5jbGVhckZvcm0oKTtcbiAgfSwgXG5cbiAgc2hvd0Nvc3RFc3RpbWF0ZSh0cmlwRXN0aW1hdGUpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkLWJvb2stdHJpcFwiKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICA8cCBjbGFzcz1cImNvc3QtZXN0aW1hdGUtYW5ub3VuY2VtZW50XCI+VHJpcCBDb3N0IEVzdGltYXRlOiAkJHt0cmlwRXN0aW1hdGV9PHA+XG4gICAgYClcbiAgfSxcblxuICBjbGVhclRleHQoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3N0LWVzdGltYXRlLWFubm91bmNlbWVudFwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBkb21VcGRhdGVzOyIsImltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcblxuaW1wb3J0IGRvbVVwZGF0ZXMgZnJvbSAnLi9kb21VcGRhdGVzLmpzJztcblxuaW1wb3J0IFRyYXZlbGVyIGZyb20gJy4vVHJhdmVsZXIuanMnO1xuaW1wb3J0IFRyaXAgZnJvbSAnLi9UcmlwLmpzJztcblxuY29uc3QgbG9nSW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1sb2dpblwiKTtcbmNvbnN0IGxvZ091dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tbG9nLW91dCcpO1xuY29uc3QgY2FsY3VsYXRlQ29zdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY29zdC1lc3RpbWF0ZScpO1xuY29uc3Qgc3VibWl0UmVxdWVzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tc3VibWl0LXJlcXVlc3QnKTtcblxubGV0IHRyYXZlbGVyLCB0cmF2ZWxlcklkLCB0cmlwcywgZGVzdGluYXRpb25zO1xuXG5sZXQgdG9kYXkgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApLnJlcGxhY2VBbGwoXCItXCIsIFwiXCIpO1xuLy8gbGV0IHRvZGF5ID0gXCIyMDIwLzA3LzI1XCI7XG5sZXQgeWVhciA9ICcyMDIwJztcblxuY29uc3QgaW5zdGFudGlhdGVVc2VyID0gKHRyYXZlbGVycywgdXNlckxvZ2luKSA9PiB7XG4gIGNvbnN0IHRyYXZlbGVySW5mbyA9IHRyYXZlbGVycy5maW5kKHRyYXZlbGVyID0+IHtcbiAgICByZXR1cm4gdHJhdmVsZXIuaWQgPT09IHVzZXJMb2dpbjtcbiAgfSlcbiAgdHJhdmVsZXIgPSBuZXcgVHJhdmVsZXIoe2lkOiB0cmF2ZWxlcklkLCBuYW1lOiB0cmF2ZWxlckluZm8ubmFtZSwgdHJhdmVsZXJUeXBlOiB0cmF2ZWxlckluZm8udHJhdmVsZXJUeXBlfSk7XG59XG5cbmNvbnN0IGdldERhdGEgPSAoKSA9PiB7XG4gIGxldCB1c2VyUHJvbWlzZSA9IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyYXZlbGVycy8nKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbiAgbGV0IHRyaXBzUHJvbWlzZSA9IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzJylcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG4gIGxldCBkZXN0aW5hdGlvbnNQcm9taXNlID0gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvZGVzdGluYXRpb25zJylcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XG5cbiAgUHJvbWlzZS5hbGwoW3VzZXJQcm9taXNlLCB0cmlwc1Byb21pc2UsIGRlc3RpbmF0aW9uc1Byb21pc2VdKVxuICAgIC50aGVuKGRhdGFzZXQgPT4ge1xuICAgICAgaW5zdGFudGlhdGVVc2VyKGRhdGFzZXRbMF0udHJhdmVsZXJzLCB0cmF2ZWxlcklkKVxuICAgICAgdHJpcHMgPSBkYXRhc2V0WzFdLnRyaXBzO1xuICAgICAgZGVzdGluYXRpb25zID0gZGF0YXNldFsyXS5kZXN0aW5hdGlvbnM7XG4gICAgICBkb21VcGRhdGVzLmdyZWV0VXNlcih0cmF2ZWxlcik7XG4gICAgICBkb21VcGRhdGVzLnJldmVhbERhc2hib2FyZCgpO1xuICAgICAgZG9tVXBkYXRlcy5kaXNwbGF5VG90YWxBbm51YWxBbXQodHJhdmVsZXIsIHRyaXBzLCB5ZWFyLCBkZXN0aW5hdGlvbnMpO1xuICAgICAgZG9tVXBkYXRlcy5zaG93UGVuZGluZ1RyaXBzKHRyYXZlbGVyLCB0cmlwcywgZGVzdGluYXRpb25zKTtcbiAgICAgIGRvbVVwZGF0ZXMuc2hvd1VwY29taW5nVHJpcHModHJhdmVsZXIsIHRyaXBzLCB0b2RheSwgZGVzdGluYXRpb25zKTtcbiAgICAgIGRvbVVwZGF0ZXMuc2hvd1Bhc3RUcmlwcyh0cmF2ZWxlciwgdHJpcHMsIHRvZGF5LCBkZXN0aW5hdGlvbnMpO1xuICAgICAgZG9tVXBkYXRlcy5zaG93UHJlc2VudFRyaXAodHJhdmVsZXIsIHRyaXBzLCB0b2RheSwgZGVzdGluYXRpb25zKTtcbiAgICAgIGRvbVVwZGF0ZXMuZGlzcGxheUJvb2tUcmlwKGRlc3RpbmF0aW9ucyk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gZG9tVXBkYXRlcy5kaXNwbGF5TWVzc2FnZShcIk9vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLlwiKSk7XG59XG5cbmNvbnN0IG9wZW5EYXNoYm9hcmQgPSAoKSA9PiB7XG4gIGdldERhdGEoKTtcbn1cblxuY29uc3QgZ2V0VHJhdmVsZXJJZCA9ICgpID0+IHtcbiAgY29uc3QgdXNlckxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dC11c2VybmFtZVwiKS52YWx1ZTtcbiAgY29uc3QgdXNlclBhc3N3b3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dC1wYXNzd29yZFwiKS52YWx1ZTtcbiAgaWYgKCF1c2VyTG9naW4uaW5jbHVkZXMoXCJ0cmF2ZWxlclwiKSB8fCB1c2VyUGFzc3dvcmQgIT09IFwidHJhdmVsMjAyMFwiKSB7XG4gICAgZG9tVXBkYXRlcy5kaXNwbGF5TWVzc2FnZShcIldyb25nIHVzZXJuYW1lIGFuZC9vciBwYXNzd29yZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gIH0gZWxzZSB7XG4gICAgdHJhdmVsZXJJZCA9IE51bWJlcih1c2VyTG9naW4uc2xpY2UoOCkpO1xuICAgIHJldHVybiB0cmF2ZWxlcklkO1xuICB9XG59XG5cbmNvbnN0IGNoZWNrTG9naW5JbmZvID0gKCkgPT4ge1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dC11c2VybmFtZVwiKS52YWx1ZSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0LXBhc3N3b3JkXCIpLnZhbHVlKSB7XG4gICAgZ2V0VHJhdmVsZXJJZCgpO1xuICAgIG9wZW5EYXNoYm9hcmQoKTtcbiAgfSBlbHNlIHtcbiAgICBkb21VcGRhdGVzLmRpc3BsYXlNZXNzYWdlKFwiV3JvbmcgdXNlcm5hbWUgYW5kL29yIHBhc3N3b3JkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgfVxufVxuXG5jb25zdCBsb2dpblVzZXIgPSAoKSA9PiB7XG4gIGRvbVVwZGF0ZXMuaGlkZURhc2hib2FyZCgpO1xufVxuXG5jb25zdCBhZGRUcmlwID0gKHRyaXBEZXRhaWxzKSA9PiB7XG4gIHRyaXBEZXRhaWxzLnN0YXR1cyA9ICdwZW5kaW5nJztcbiAgdHJpcERldGFpbHMuaWQgPSBwYXJzZUludCh0cmlwcy5sZW5ndGgpICsgMTtcbiAgdHJpcERldGFpbHMuZGF0ZSA9IHRyaXBEZXRhaWxzLmRhdGUucmVwbGFjZUFsbCgnLScsIFwiL1wiKTtcbiAgdHJpcERldGFpbHMudXNlcklEID0gdHJhdmVsZXIuaWQ7XG4gIHRyaXBEZXRhaWxzLnN1Z2dlc3RlZEFjdGl2aXRpZXMgPSBbXTtcbiAgdHJpcERldGFpbHMgPSBuZXcgVHJpcCh0cmlwRGV0YWlscyk7XG4gIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzJywge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LCBcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0cmlwRGV0YWlscylcbiAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBjb25zb2xlLmxvZyhqc29uKSlcbiAgICAuY2F0Y2goZXJyID0+IGRvbVVwZGF0ZXMuZGlzcGxheU1lc3NhZ2UoXCJTb3JyeS4gIFlvdXIgdHJpcCByZXF1ZXN0IGRpZG4ndCBnbyB0aHJvdWdoLlwiKSlcbn1cblxuY29uc3QgbG9nT3V0VXNlciA9ICgpID0+IHtcbiAgcmVsb2FkID0gbG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbmNvbnN0IGdldFRyaXBEZXRhaWxzID0gKCkgPT4ge1xuICBjb25zdCB0cmlwRGV0YWlscyA9IHt9O1xuICB0cmlwRGV0YWlscy5kYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLWRhdGVcIikudmFsdWU7XG4gIHRyaXBEZXRhaWxzLmRlc3RpbmF0aW9uSUQgPSArZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXN0aW5hdGlvbi1tZW51XCIpLnZhbHVlO1xuICB0cmlwRGV0YWlscy5kdXJhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1kdXJhdGlvblwiKS52YWx1ZTtcbiAgdHJpcERldGFpbHMudHJhdmVsZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLXRyYXZlbGVyc1wiKS52YWx1ZTtcbiAgcmV0dXJuIHRyaXBEZXRhaWxzO1xufVxuXG5jb25zdCBjaGVja0lucHV0RmllbGRzID0gKCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLWRhdGVcIikudmFsdWUgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXN0aW5hdGlvbi1tZW51XCIpLnZhbHVlICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYm9vay1kdXJhdGlvblwiKS52YWx1ZSA+IDAgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLXRyYXZlbGVyc1wiKS52YWx1ZSA+IDApIHtcbiAgICBnZXRUcmlwQ29zdEVzdGltYXRlKCk7XG4gICAgZG9tVXBkYXRlcy5yZXZlYWxTdWJtaXNzaW9uQnV0dG9uKCk7XG4gIH1cbn1cblxuY29uc3QgZ2V0VHJpcENvc3RFc3RpbWF0ZSA9ICgpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgdHJpcERldGFpbHMgPSBnZXRUcmlwRGV0YWlscygpO1xuICBjb25zdCBmaW5kRGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbnMuZmluZChkZXN0aW5hdGlvbiA9PiBkZXN0aW5hdGlvbi5pZCA9PSB0cmlwRGV0YWlscy5kZXN0aW5hdGlvbklEKTtcbiAgY29uc3QgbG9kZ2luZ0VzdGltYXRlID0gZmluZERlc3RpbmF0aW9uLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ICogdHJpcERldGFpbHMuZHVyYXRpb247XG4gIGNvbnN0IGZsaWdodEVzdGltYXRlID0gZmluZERlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gKiB0cmlwRGV0YWlscy50cmF2ZWxlcnM7XG4gIGNvbnN0IGFnZW50RmVlID0gKGxvZGdpbmdFc3RpbWF0ZSArIGZsaWdodEVzdGltYXRlKSAqIDAuMTtcbiAgY29uc3QgdHJpcEVzdGltYXRlID0gbG9kZ2luZ0VzdGltYXRlICsgZmxpZ2h0RXN0aW1hdGUgKyBhZ2VudEZlZTtcbiAgZG9tVXBkYXRlcy5zaG93Q29zdEVzdGltYXRlKHRyaXBFc3RpbWF0ZSk7XG59XG5cbmNvbnN0IHN1Ym1pdEJvb2tpbmdSZXF1ZXN0ID0gKCkgPT4ge1xuICBjb25zdCB0cmlwRGV0YWlscyA9IGdldFRyaXBEZXRhaWxzKCk7XG4gIGRvbVVwZGF0ZXMuc3VibWl0UmVxdWVzdCgpO1xuICBhZGRUcmlwKHRyaXBEZXRhaWxzKTtcbiAgZG9tVXBkYXRlcy5jbGVhclRleHQoKTtcbiAgZG9tVXBkYXRlcy5jbGVhckZvcm0oKTtcbn1cblxud2luZG93Lm9ubG9hZCA9IGxvZ2luVXNlcigpO1xubG9nSW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0xvZ2luSW5mbyk7XG5sb2dPdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2dPdXRVc2VyLCB0cnVlKTtcbmNhbGN1bGF0ZUNvc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0lucHV0RmllbGRzKTtcbnN1Ym1pdFJlcXVlc3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRCb29raW5nUmVxdWVzdCk7XG4iXSwic291cmNlUm9vdCI6IiJ9