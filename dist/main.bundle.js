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
___CSS_LOADER_EXPORT___.push([module.i, "* {\n  margin: 0;\n  padding: 0; }\n\nhtml, body {\n  background: #15435D;\n  width: 100%; }\n\nbody {\n  font-family: 'Open Sans', sans-serif; }\n\nmain {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  width: 100%; }\n\nnav {\n  align-items: center;\n  background-color: #e5ddd7;\n  display: flex;\n  justify-content: space-between;\n  height: 35vh; }\n\nform {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 1%; }\n\n.dashboard-wrapper {\n  display: grid;\n  grid-gap: 1% 3%;\n  grid-template-columns: repeat(1, 1fr);\n  margin: 4%;\n  background-color: #15435D; }\n\n.trip-list-wrapper {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  background-color: #e5ddd7;\n  color: #07161f;\n  padding: 3%; }\n\n.card-book-trip {\n  background-color: #e5ddd7;\n  display: flex;\n  flex-direction: column; }\n\n.card-trip {\n  padding: 2%;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n\n.destination-photo {\n  width: 40vh; }\n\n.pending-trips {\n  display: flex;\n  justify-content: center;\n  flex-direction: column; }\n\nh1 {\n  color: #0b222f;\n  font-size: 8vh;\n  margin: 5vh;\n  text-shadow: 1px 1px 0px black; }\n\nh2 {\n  color: #fdf5eb;\n  margin: 3vh; }\n\nh3 {\n  background-color: #2a2521;\n  color: #fdf5eb;\n  margin: 0;\n  padding: 3%;\n  display: flex;\n  justify-content: center; }\n  h3:active {\n    background-color: black; }\n\np {\n  font-weight: 300; }\n\n.amount-spent-amount {\n  font-weight: bold; }\n\n.cost-estimate-announcement {\n  display: flex;\n  justify-content: center;\n  font-size: 3vh;\n  font-weight: 600;\n  padding: 2%;\n  padding-top: 0; }\n\n.greeting {\n  color: #CFCFD7;\n  font-size: 4vh;\n  margin-bottom: 0%;\n  text-shadow: 1px 1px 0px black; }\n\n.total-amount-spent {\n  display: flex;\n  justify-content: center;\n  background-color: #CFCFD7;\n  border-radius: 6px;\n  padding: 2%; }\n\n.trip-status-announcement {\n  display: flex;\n  justify-content: center;\n  padding: 3%;\n  font-weight: 400;\n  font-size: 3vh; }\n\n.container-username, .container-password, .button-login {\n  margin: 2%;\n  width: 55%; }\n\n.button-login {\n  border-radius: 6px;\n  border: none;\n  height: 7vh;\n  margin: 2vh;\n  width: 43%;\n  padding: 2%;\n  width: 60%; }\n  .button-login:hover {\n    background-color: #0b222f;\n    color: #fdf5eb; }\n\n.input-login {\n  border-radius: 6px;\n  border: none;\n  height: 4vh;\n  padding: 1vh;\n  margin-top: 1%;\n  background-color: #fdf5eb;\n  padding: 2%;\n  width: 60%; }\n\n.login-display {\n  background-color: #CFCFD7;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n  width: 55%;\n  height: 25vh;\n  padding: 5%;\n  border-radius: 6px; }\n\n.button-cost-estimate, .button-submit-request {\n  border-radius: 6px;\n  border: none;\n  height: 7vh;\n  margin: 2vh;\n  width: 43%; }\n  .button-cost-estimate:hover, .button-submit-request:hover {\n    background-color: #0b222f;\n    color: #fdf5eb; }\n\n.button-nav {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 6px;\n  border-width: 0;\n  margin: 1vh;\n  width: 10%;\n  height: 10vh; }\n  .button-nav:hover {\n    background-color: #0b222f;\n    color: #fdf5eb; }\n\n.date-input, .destination-menu, .duration-input, .travelers-input {\n  border-radius: 6px;\n  border: none;\n  height: 4vh;\n  padding: 1vh;\n  margin-top: 1%;\n  background-color: #CFCFD7;\n  margin: 1vh; }\n\n.duration-input {\n  width: 20vh;\n  margin-bottom: 3%; }\n\n.travelers-input {\n  width: 8vh; }\n\n.hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n\n@media (max-width: 800px) {\n  .trip-list-wrapper {\n    grid-gap: 0.5% 4%;\n    grid-template-columns: repeat(1, 1fr); }\n  nav {\n    flex-direction: column;\n    height: 40vh; }\n  .destination-photo {\n    width: 50vh; }\n  .login-display {\n    width: 82%; }\n  .main-header {\n    height: 18vh; }\n  .search-input {\n    width: 50%; } }\n", "",{"version":3,"sources":["webpack://./src/css/base.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_extends.scss"],"names":[],"mappings":"AAGA;EACE,SAAS;EACT,UAAU,EAAA;;AAGZ;EACE,mBCT0B;EDU1B,WAAW,EAAA;;AAEb;EAEE,oCAAoC,EAAA;;AAGtC;EEXI,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EFWrB,YAAY;EACZ,WAAW,EAAA;;AAGb;EACE,mBAAmB;EACnB,yBCpBuD;EDqBvD,aAAa;EACb,8BAA8B;EAC9B,YAAY,EAAA;;AAGd;EEzBI,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EFyBrB,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,eAAe;EACf,qCAAqC;EACrC,UAAU;EACV,yBCzC0B,EAAA;;AD4C5B;EACE,aAAa;EACb,qCAAqC;EACrC,yBC1CuD;ED2CvD,cC/CqD;EDgDrD,WAAW,EAAA;;AAIb;EACE,yBCjDuD;EDkDvD,aAAa;EACb,sBAAsB,EAAA;;AAGxB;EACE,WAAW;EEtDT,aAAa;EACb,sBAAsB;EACtB,mBAAmB,EAAA;;AFwDvB;EACE,WAAW,EAAA;;AAGb;EEnEI,aAAa;EACb,uBAAuB;EFoEzB,sBAAsB,EAAA;;AAIxB;EACE,cCzE+C;ED0E/C,cAAc;EACd,WAAW;EACX,8BAA8B,EAAA;;AAGhC;EACE,cC1EwC;ED2ExC,WAAW,EAAA;;AAGb;EACE,yBChF6B;EDiF7B,cChFwC;EDiFxC,SAAS;EACT,WAAW;EEzFT,aAAa;EACb,uBAAuB,EAAA;EFoF3B;IAOI,uBAAuB,EAAA;;AAI3B;EACE,gBAAe,EAAA;;AAGjB;EACE,iBAAiB,EAAA;;AAGnB;EExGI,aAAa;EACb,uBAAuB;EFyGzB,cAAc;EACd,gBAAgB;EAChB,WAAW;EACX,cAAc,EAAA;;AAGhB;EACE,cC9GoB;ED+GpB,cAAc;EACd,iBAAiB;EACjB,8BAA8B,EAAA;;AAGhC;EEvHI,aAAa;EACb,uBAAuB;EFwHzB,yBCtHoB;EDuHpB,kBAAkB;EAClB,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;EACX,gBAAgB;EAChB,cAAc,EAAA;;AAIhB;EACE,UAAU;EACV,UAAU,EAAA;;AAOZ;EErII,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,WAAW;EACX,UAAU;EFoIZ,WAAW;EACX,UAAU,EAAA;EAJZ;IE7HI,yBDlB6C;ICmB7C,cDbsC,EAAA;;ADmJ1C;EElII,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,cAAc;EFgIhB,yBCrJwC;EDsJxC,WAAW;EACX,UAAU,EAAA;;AAGZ;EACE,yBC/JoB;ECElB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EF6JrB,6BAA6B;EAC7B,UAAU;EACV,YAAY;EACZ,WAAW;EACX,kBAAkB,EAAA;;AAKpB;EElKI,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,WAAW;EACX,UAAU,EAAA;EF8Jd;IE1JI,yBDlB6C;ICmB7C,cDbsC,EAAA;;AD6K1C;EEpLI,aAAa;EACb,uBAAuB;EFqLzB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;EACf,WAAW;EACX,UAAU;EACV,YAAY,EAAA;EAPd;IEjKI,yBDlB6C;ICmB7C,cDbsC,EAAA;;AD0L1C;EEzKI,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,cAAc;EFuKhB,yBChMoB;EDiMpB,WAAW,EAAA;;AAOb;EAEE,WAAW;EACX,iBAAiB,EAAA;;AAGnB;EAEE,UAAU,EAAA;;AAIZ;EACE,SAAS;EACT,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,UAAU;EACV,kBAAkB;EAClB,UAAU,EAAA;;AAKZ;EAzLA;IA2LI,iBAAiB;IACjB,qCAAqC,EAAA;EAjNzC;IAqNI,sBAAsB;IACtB,YAAY,EAAA;EA7KhB;IAiLI,WAAW,EAAA;EA/Ef;IAmFI,UAAU,EAAA;EAGZ;IACE,YAAY,EAAA;EAGd;IACE,UAAU,EAAA,EACX","sourcesContent":["@import './variables';\n@import './extends';\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  background: $primary-background;\n  width: 100%;\n}\nbody {\n  @extend html;\n  font-family: 'Open Sans', sans-serif;\n}\n\nmain {\n  @include align-center-flex();\n  height: 100%;\n  width: 100%;\n}\n\nnav {\n  align-items: center;\n  background-color: $secondary-muted-accent;\n  display: flex;\n  justify-content: space-between;\n  height: 35vh;\n}\n\nform {\n  @include align-center-flex;\n  padding: 1%;\n}\n\n.dashboard-wrapper {\n  display: grid;\n  grid-gap: 1% 3%;\n  grid-template-columns: repeat(1, 1fr);\n  margin: 4%;\n  background-color: $primary-background;\n}\n\n.trip-list-wrapper {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  background-color: $secondary-muted-accent;\n  color: $darker-primary-color;\n  padding: 3%;\n}\n//----------categories-----------//\n\n.card-book-trip {\n  background-color: $secondary-muted-accent;\n  display: flex;\n  flex-direction: column;\n}\n\n.card-trip {\n  padding: 2%;\n  @include align-center-flex;\n}\n\n.destination-photo {\n  width: 40vh;\n}\n\n.pending-trips {\n  @include justify-center-flex;\n  flex-direction: column;\n}\n\n//----------Text----------------//\nh1 {\n  color: $dark-text-color;\n  font-size: 8vh;\n  margin: 5vh;\n  text-shadow: 1px 1px 0px black;\n}\n\nh2 {\n  color: $dark-hover-text;\n  margin: 3vh;\n}\n\nh3 {\n  background-color: $dark-hover-background;\n  color: $dark-hover-text;\n  margin: 0;\n  padding: 3%;\n  @include justify-center-flex();\n  &:active {\n    background-color: black;\n  }\n}\n\np {\n  font-weight:300;\n}\n\n.amount-spent-amount {\n  font-weight: bold;\n}\n\n.cost-estimate-announcement {\n  @include justify-center-flex;\n  font-size: 3vh;\n  font-weight: 600;\n  padding: 2%;\n  padding-top: 0;\n}\n\n.greeting {\n  color: $muted-accent;\n  font-size: 4vh;\n  margin-bottom: 0%;\n  text-shadow: 1px 1px 0px black;\n}\n\n.total-amount-spent {\n  @include justify-center-flex;\n  background-color: $muted-accent;\n  border-radius: 6px;\n  padding: 2%;\n}\n\n.trip-status-announcement {\n  display: flex;\n  justify-content: center;\n  padding: 3%;\n  font-weight: 400;\n  font-size: 3vh;\n}\n//---------login display------//\n\n.container-username {\n  margin: 2%;\n  width: 55%;\n}\n\n.container-password {\n  @extend .container-username;  \n}\n\n.button-login {\n  @extend .container-username;\n  @include button-style;\n  padding: 2%;\n  width: 60%;\n  &:hover {\n    @include button-hover;\n  }\n}\n\n.input-login {\n  @include input-style;\n  background-color: $dark-hover-text;\n  padding: 2%;\n  width: 60%;\n}\n\n.login-display {\n  background-color: $muted-accent;\n  @include align-center-flex();\n  justify-content: space-around;\n  width: 55%;\n  height: 25vh;\n  padding: 5%;\n  border-radius: 6px;\n}\n\n//---------buttons and input fields-----------//\n\n.button-cost-estimate, .button-submit-request {\n  @include button-style;\n  &:hover {\n    @include button-hover;\n  }\n}\n\n.button-nav {\n  @include justify-center-flex();\n  align-items: center;\n  border-radius: 6px;\n  border-width: 0;\n  margin: 1vh;\n  width: 10%;\n  height: 10vh;\n  &:hover {\n    @include button-hover;\n  }\n}\n\n.date-input {\n  @include input-style;\n  background-color: $muted-accent;\n  margin: 1vh;\n}\n\n.destination-menu {\n  @extend .date-input;\n}\n\n.duration-input {\n  @extend .date-input;\n  width: 20vh;\n  margin-bottom: 3%;\n}\n\n.travelers-input {\n  @extend .date-input;\n  width: 8vh;\n}\n\n//---------hidden-----------//\n.hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n//-------media queries------//\n\n@media (max-width: 800px) {\n  .trip-list-wrapper {\n    grid-gap: 0.5% 4%;\n    grid-template-columns: repeat(1, 1fr);\n  }\n\n  nav {\n    flex-direction: column;\n    height: 40vh;\n  }\n\n  .destination-photo {\n    width: 50vh;\n  }\n  \n  .login-display {\n    width: 82%;\n  }\n\n  .main-header {\n    height: 18vh;\n  }\n\n  .search-input {\n    width: 50%;\n  }\n}","$primary-background: #15435D;\n$darker-primary-color: darken($primary-background, 15%);\n$dark-text-color: mix(black, $primary-background);\n$lighter-background: #A89688;\n$muted-accent: #CFCFD7;\n$secondary-muted-accent: mix(antiquewhite, $muted-accent);\n$lightest-accent: antiquewhite;\n$dark-hover-background: #2a2521;\n$dark-hover-text: mix(antiquewhite, white);","@mixin justify-center-flex() {\n    display: flex;\n    justify-content: center;\n}\n\n@mixin align-center-flex() {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n@mixin button-style() {\n    border-radius: 6px;\n    border: none;\n    height: 7vh;\n    margin: 2vh;\n    width: 43%;\n}\n\n@mixin button-hover() {\n    background-color: $dark-text-color;\n    color: $dark-hover-text;\n}\n\n@mixin input-style() {\n    border-radius: 6px;\n    border: none;\n    height: 4vh;\n    padding: 1vh;\n    margin-top: 1%;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/Destination.js":
/*!****************************!*\
  !*** ./src/Destination.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Destination {
  constructor(destinationData) {
      this.id = destinationData.id;
      this.destination = destinationData.destination;
      this.estimatedLodgingCostPerDay = destinationData.estimatedLodgingCostPerDay;
      this.estimatedFlightCostPerPerson = destinationData.estimatedFlightCostPerPerson;
      this.image = destinationData.image;
      this.alt = destinationData.alt;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Destination);

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
    this.pendingTrips = this.trips.filter(trip => trip.status ==='pending');
    return this.pendingTrips;
  }  

  filterUpcomingTrips(tripData, dateToday) {
    this.filterAllTrips(tripData);
    this.upcomingTrips = this.trips.filter(trip => trip.status === 'approved' && parseInt(trip.status === trip.date.replaceAll('/', "")) > parseInt(dateToday.replaceAll('/', "")));
    return this.upcomingTrips;
  }

  filterPastTrips(tripData, dateToday) {
    this.filterAllTrips(tripData);
    this.pastTrips = this.trips.filter(trip => parseInt(trip.date.replaceAll('/', "")) < parseInt(dateToday.replaceAll('/', "")));
    return this.pastTrips;
  }

  filterPresentTrips(tripData, dateToday) {
    this.filterAllTrips(tripData);
    let presentTrips = [];
    this.trips.forEach(trip => {
      const tripStartDates = parseInt(trip.date.replaceAll('/', ""));
      const tripEndDates = tripStartDates + trip.duration;
      let todaysDate = parseInt(dateToday.replaceAll('/', ""))
      if(tripStartDates < todaysDate && tripEndDates > todaysDate){
        presentTrips.push(trip)
      }
    })
    return presentTrips;
  }

  determineTotalAmtSpent(tripData, year, destinations) {
    let userTrips = this.filterAllTrips(tripData);
    let tripsInYear = userTrips.filter(trip => trip.date.includes(year) && trip.status === 'approved');
    let getCostStats = tripsInYear.map(trip => {
      let totalTripCost = {};
      destinations.forEach(destination => {
          if(trip.destinationID === destination.id) {
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
  updateTripStatus() {
      //for agent 
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Trip);

/***/ }),

/***/ "./src/TripRepository.js":
/*!*******************************!*\
  !*** ./src/TripRepository.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var _Trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Trip */ "./src/Trip.js");


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
                if(destination.id === trip.destinationID) {
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
            if(destination.id === trip.destinationID) {
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
                if(destination.id === trip.destinationID) {
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
                if(destination.id === trip.destinationID) {
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
/* harmony import */ var _TripRepository_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TripRepository.js */ "./src/TripRepository.js");
/* harmony import */ var _TripRepository_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_TripRepository_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Trip_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Trip.js */ "./src/Trip.js");
/* harmony import */ var _Destination_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Destination.js */ "./src/Destination.js");









const logInButton = document.querySelector(".button-login");
const logOutButton = document.querySelector('#button-log-out');
const calculateCostButton = document.querySelector('.button-cost-estimate');
const submitRequestButton = document.querySelector('.button-submit-request');

let traveler, travelerId, trips, destinations;

//DASHBOARD
// let today = new Date().toISOString().slice(0, 10);
let today = "2020/07/25";
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
          _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayTotalAnnualAmt(traveler, trips, year, destinations);
          _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].showPendingTrips(traveler, trips, destinations);
          _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].showUpcomingTrips(traveler, trips, today, destinations);
          _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].showPastTrips(traveler, trips, today, destinations);
          _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].showPresentTrip(traveler, trips, today, destinations);
          _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayBookTrip(destinations);
      })
      .catch(error => _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayMessage("Oops! Something went wrong. Please try again."))
}

const openDashboard = () => {
    getData();
    _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].revealDashboard();
}

const getTravelerId = () => {
    const userLogin = document.querySelector("#input-username").value;
    const userPassword = document.querySelector("#input-password").value;
    if(!userLogin.includes("traveler") || userPassword !== "travel2020") {
        _domUpdates_js__WEBPACK_IMPORTED_MODULE_1__["default"].displayMessage("Wrong username and/or password. Please try again.");
    } else {
        travelerId = Number(userLogin.slice(8));
        return travelerId;
    }
}

const checkLoginInfo = () => {
    if(document.querySelector("#input-username").value && document.querySelector("#input-password").value) {
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
    tripDetails = new _Trip_js__WEBPACK_IMPORTED_MODULE_4__["default"](tripDetails);
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
    if(document.querySelector("#book-date").value && document.querySelector(".destination-menu").value && document.querySelector("#book-duration").value > 0 && document.querySelector("#book-travelers").value > 0) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc3RpbmF0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9UcmF2ZWxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvVHJpcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz8xMTA3Iiwid2VicGFjazovLy8uL3NyYy9kb21VcGRhdGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJC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SSxzREFBVTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnREFBSTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esa0JBQWtCLHNEQUFVO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBVTtBQUNsQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFVO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBLElBQUksc0RBQVU7QUFDZDtBQUNBLElBQUksc0RBQVU7QUFDZCxJQUFJLHNEQUFVO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7IH1cXG5cXG5odG1sLCBib2R5IHtcXG4gIGJhY2tncm91bmQ6ICMxNTQzNUQ7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOyB9XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbm5hdiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZGRkNztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDM1dmg7IH1cXG5cXG5mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDElOyB9XFxuXFxuLmRhc2hib2FyZC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMSUgMyU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgbWFyZ2luOiA0JTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTQzNUQ7IH1cXG5cXG4udHJpcC1saXN0LXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVkZGQ3O1xcbiAgY29sb3I6ICMwNzE2MWY7XFxuICBwYWRkaW5nOiAzJTsgfVxcblxcbi5jYXJkLWJvb2stdHJpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVkZGQ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4uY2FyZC10cmlwIHtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLmRlc3RpbmF0aW9uLXBob3RvIHtcXG4gIHdpZHRoOiA0MHZoOyB9XFxuXFxuLnBlbmRpbmctdHJpcHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbmgxIHtcXG4gIGNvbG9yOiAjMGIyMjJmO1xcbiAgZm9udC1zaXplOiA4dmg7XFxuICBtYXJnaW46IDV2aDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCBibGFjazsgfVxcblxcbmgyIHtcXG4gIGNvbG9yOiAjZmRmNWViO1xcbiAgbWFyZ2luOiAzdmg7IH1cXG5cXG5oMyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmEyNTIxO1xcbiAgY29sb3I6ICNmZGY1ZWI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgaDM6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IH1cXG5cXG5wIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG5cXG4uYW1vdW50LXNwZW50LWFtb3VudCB7XFxuICBmb250LXdlaWdodDogYm9sZDsgfVxcblxcbi5jb3N0LWVzdGltYXRlLWFubm91bmNlbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDN2aDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiAyJTtcXG4gIHBhZGRpbmctdG9wOiAwOyB9XFxuXFxuLmdyZWV0aW5nIHtcXG4gIGNvbG9yOiAjQ0ZDRkQ3O1xcbiAgZm9udC1zaXplOiA0dmg7XFxuICBtYXJnaW4tYm90dG9tOiAwJTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCBibGFjazsgfVxcblxcbi50b3RhbC1hbW91bnQtc3BlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGQ0ZENztcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBhZGRpbmc6IDIlOyB9XFxuXFxuLnRyaXAtc3RhdHVzLWFubm91bmNlbWVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzJTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXNpemU6IDN2aDsgfVxcblxcbi5jb250YWluZXItdXNlcm5hbWUsIC5jb250YWluZXItcGFzc3dvcmQsIC5idXR0b24tbG9naW4ge1xcbiAgbWFyZ2luOiAyJTtcXG4gIHdpZHRoOiA1NSU7IH1cXG5cXG4uYnV0dG9uLWxvZ2luIHtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogN3ZoO1xcbiAgbWFyZ2luOiAydmg7XFxuICB3aWR0aDogNDMlO1xcbiAgcGFkZGluZzogMiU7XFxuICB3aWR0aDogNjAlOyB9XFxuICAuYnV0dG9uLWxvZ2luOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBiMjIyZjtcXG4gICAgY29sb3I6ICNmZGY1ZWI7IH1cXG5cXG4uaW5wdXQtbG9naW4ge1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiA0dmg7XFxuICBwYWRkaW5nOiAxdmg7XFxuICBtYXJnaW4tdG9wOiAxJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGY1ZWI7XFxuICBwYWRkaW5nOiAyJTtcXG4gIHdpZHRoOiA2MCU7IH1cXG5cXG4ubG9naW4tZGlzcGxheSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZDRkQ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogNTUlO1xcbiAgaGVpZ2h0OiAyNXZoO1xcbiAgcGFkZGluZzogNSU7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7IH1cXG5cXG4uYnV0dG9uLWNvc3QtZXN0aW1hdGUsIC5idXR0b24tc3VibWl0LXJlcXVlc3Qge1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiA3dmg7XFxuICBtYXJnaW46IDJ2aDtcXG4gIHdpZHRoOiA0MyU7IH1cXG4gIC5idXR0b24tY29zdC1lc3RpbWF0ZTpob3ZlciwgLmJ1dHRvbi1zdWJtaXQtcmVxdWVzdDpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYjIyMmY7XFxuICAgIGNvbG9yOiAjZmRmNWViOyB9XFxuXFxuLmJ1dHRvbi1uYXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlci13aWR0aDogMDtcXG4gIG1hcmdpbjogMXZoO1xcbiAgd2lkdGg6IDEwJTtcXG4gIGhlaWdodDogMTB2aDsgfVxcbiAgLmJ1dHRvbi1uYXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIyMjJmO1xcbiAgICBjb2xvcjogI2ZkZjVlYjsgfVxcblxcbi5kYXRlLWlucHV0LCAuZGVzdGluYXRpb24tbWVudSwgLmR1cmF0aW9uLWlucHV0LCAudHJhdmVsZXJzLWlucHV0IHtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogNHZoO1xcbiAgcGFkZGluZzogMXZoO1xcbiAgbWFyZ2luLXRvcDogMSU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZDRkQ3O1xcbiAgbWFyZ2luOiAxdmg7IH1cXG5cXG4uZHVyYXRpb24taW5wdXQge1xcbiAgd2lkdGg6IDIwdmg7XFxuICBtYXJnaW4tYm90dG9tOiAzJTsgfVxcblxcbi50cmF2ZWxlcnMtaW5wdXQge1xcbiAgd2lkdGg6IDh2aDsgfVxcblxcbi5oaWRkZW4ge1xcbiAgYm9yZGVyOiAwO1xcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcXG4gIGhlaWdodDogMXB4O1xcbiAgbWFyZ2luOiAtMXB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMXB4OyB9XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAudHJpcC1saXN0LXdyYXBwZXIge1xcbiAgICBncmlkLWdhcDogMC41JSA0JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTsgfVxcbiAgbmF2IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA0MHZoOyB9XFxuICAuZGVzdGluYXRpb24tcGhvdG8ge1xcbiAgICB3aWR0aDogNTB2aDsgfVxcbiAgLmxvZ2luLWRpc3BsYXkge1xcbiAgICB3aWR0aDogODIlOyB9XFxuICAubWFpbi1oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDE4dmg7IH1cXG4gIC5zZWFyY2gtaW5wdXQge1xcbiAgICB3aWR0aDogNTAlOyB9IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fdmFyaWFibGVzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2V4dGVuZHMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtFQUNFLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1o7RUFDRSxtQkNUMEI7RURVMUIsV0FBVyxFQUFBOztBQUViO0VBRUUsb0NBQW9DLEVBQUE7O0FBR3RDO0VFWEksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUZXckIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLG1CQUFtQjtFQUNuQix5QkNwQnVEO0VEcUJ2RCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVksRUFBQTs7QUFHZDtFRXpCSSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFRnlCckIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixxQ0FBcUM7RUFDckMsVUFBVTtFQUNWLHlCQ3pDMEIsRUFBQTs7QUQ0QzVCO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyx5QkMxQ3VEO0VEMkN2RCxjQy9DcUQ7RURnRHJELFdBQVcsRUFBQTs7QUFJYjtFQUNFLHlCQ2pEdUQ7RURrRHZELGFBQWE7RUFDYixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxXQUFXO0VFdERULGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CLEVBQUE7O0FGd0R2QjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFRW5FSSxhQUFhO0VBQ2IsdUJBQXVCO0VGb0V6QixzQkFBc0IsRUFBQTs7QUFJeEI7RUFDRSxjQ3pFK0M7RUQwRS9DLGNBQWM7RUFDZCxXQUFXO0VBQ1gsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0UsY0MxRXdDO0VEMkV4QyxXQUFXLEVBQUE7O0FBR2I7RUFDRSx5QkNoRjZCO0VEaUY3QixjQ2hGd0M7RURpRnhDLFNBQVM7RUFDVCxXQUFXO0VFekZULGFBQWE7RUFDYix1QkFBdUIsRUFBQTtFRm9GM0I7SUFPSSx1QkFBdUIsRUFBQTs7QUFJM0I7RUFDRSxnQkFBZSxFQUFBOztBQUdqQjtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFRXhHSSxhQUFhO0VBQ2IsdUJBQXVCO0VGeUd6QixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0M5R29CO0VEK0dwQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLDhCQUE4QixFQUFBOztBQUdoQztFRXZISSxhQUFhO0VBQ2IsdUJBQXVCO0VGd0h6Qix5QkN0SG9CO0VEdUhwQixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBOztBQUdiO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTs7QUFJaEI7RUFDRSxVQUFVO0VBQ1YsVUFBVSxFQUFBOztBQU9aO0VFcklJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVO0VGb0laLFdBQVc7RUFDWCxVQUFVLEVBQUE7RUFKWjtJRTdISSx5QkRsQjZDO0lDbUI3QyxjRGJzQyxFQUFBOztBRG1KMUM7RUVsSUksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7RUZnSWhCLHlCQ3JKd0M7RURzSnhDLFdBQVc7RUFDWCxVQUFVLEVBQUE7O0FBR1o7RUFDRSx5QkMvSm9CO0VDRWxCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VGNkpyQiw2QkFBNkI7RUFDN0IsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBS3BCO0VFbEtJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFdBQVc7RUFDWCxVQUFVLEVBQUE7RUY4SmQ7SUUxSkkseUJEbEI2QztJQ21CN0MsY0Ric0MsRUFBQTs7QUQ2SzFDO0VFcExJLGFBQWE7RUFDYix1QkFBdUI7RUZxTHpCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWSxFQUFBO0VBUGQ7SUVqS0kseUJEbEI2QztJQ21CN0MsY0Ric0MsRUFBQTs7QUQwTDFDO0VFektJLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VGdUtoQix5QkNoTW9CO0VEaU1wQixXQUFXLEVBQUE7O0FBT2I7RUFFRSxXQUFXO0VBQ1gsaUJBQWlCLEVBQUE7O0FBR25CO0VBRUUsVUFBVSxFQUFBOztBQUlaO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFLWjtFQXpMQTtJQTJMSSxpQkFBaUI7SUFDakIscUNBQXFDLEVBQUE7RUFqTnpDO0lBcU5JLHNCQUFzQjtJQUN0QixZQUFZLEVBQUE7RUE3S2hCO0lBaUxJLFdBQVcsRUFBQTtFQS9FZjtJQW1GSSxVQUFVLEVBQUE7RUFHWjtJQUNFLFlBQVksRUFBQTtFQUdkO0lBQ0UsVUFBVSxFQUFBLEVBQ1hcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAnLi92YXJpYWJsZXMnO1xcbkBpbXBvcnQgJy4vZXh0ZW5kcyc7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJhY2tncm91bmQ6ICRwcmltYXJ5LWJhY2tncm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuYm9keSB7XFxuICBAZXh0ZW5kIGh0bWw7XFxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbm1haW4ge1xcbiAgQGluY2x1ZGUgYWxpZ24tY2VudGVyLWZsZXgoKTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5uYXYge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktbXV0ZWQtYWNjZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMzV2aDtcXG59XFxuXFxuZm9ybSB7XFxuICBAaW5jbHVkZSBhbGlnbi1jZW50ZXItZmxleDtcXG4gIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4uZGFzaGJvYXJkLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAxJSAzJTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxuICBtYXJnaW46IDQlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktYmFja2dyb3VuZDtcXG59XFxuXFxuLnRyaXAtbGlzdC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHNlY29uZGFyeS1tdXRlZC1hY2NlbnQ7XFxuICBjb2xvcjogJGRhcmtlci1wcmltYXJ5LWNvbG9yO1xcbiAgcGFkZGluZzogMyU7XFxufVxcbi8vLS0tLS0tLS0tLWNhdGVnb3JpZXMtLS0tLS0tLS0tLS8vXFxuXFxuLmNhcmQtYm9vay10cmlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktbXV0ZWQtYWNjZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5jYXJkLXRyaXAge1xcbiAgcGFkZGluZzogMiU7XFxuICBAaW5jbHVkZSBhbGlnbi1jZW50ZXItZmxleDtcXG59XFxuXFxuLmRlc3RpbmF0aW9uLXBob3RvIHtcXG4gIHdpZHRoOiA0MHZoO1xcbn1cXG5cXG4ucGVuZGluZy10cmlwcyB7XFxuICBAaW5jbHVkZSBqdXN0aWZ5LWNlbnRlci1mbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLy8tLS0tLS0tLS0tVGV4dC0tLS0tLS0tLS0tLS0tLS0vL1xcbmgxIHtcXG4gIGNvbG9yOiAkZGFyay10ZXh0LWNvbG9yO1xcbiAgZm9udC1zaXplOiA4dmg7XFxuICBtYXJnaW46IDV2aDtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCBibGFjaztcXG59XFxuXFxuaDIge1xcbiAgY29sb3I6ICRkYXJrLWhvdmVyLXRleHQ7XFxuICBtYXJnaW46IDN2aDtcXG59XFxuXFxuaDMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstaG92ZXItYmFja2dyb3VuZDtcXG4gIGNvbG9yOiAkZGFyay1ob3Zlci10ZXh0O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMyU7XFxuICBAaW5jbHVkZSBqdXN0aWZ5LWNlbnRlci1mbGV4KCk7XFxuICAmOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgfVxcbn1cXG5cXG5wIHtcXG4gIGZvbnQtd2VpZ2h0OjMwMDtcXG59XFxuXFxuLmFtb3VudC1zcGVudC1hbW91bnQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5jb3N0LWVzdGltYXRlLWFubm91bmNlbWVudCB7XFxuICBAaW5jbHVkZSBqdXN0aWZ5LWNlbnRlci1mbGV4O1xcbiAgZm9udC1zaXplOiAzdmg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgcGFkZGluZzogMiU7XFxuICBwYWRkaW5nLXRvcDogMDtcXG59XFxuXFxuLmdyZWV0aW5nIHtcXG4gIGNvbG9yOiAkbXV0ZWQtYWNjZW50O1xcbiAgZm9udC1zaXplOiA0dmg7XFxuICBtYXJnaW4tYm90dG9tOiAwJTtcXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDBweCBibGFjaztcXG59XFxuXFxuLnRvdGFsLWFtb3VudC1zcGVudCB7XFxuICBAaW5jbHVkZSBqdXN0aWZ5LWNlbnRlci1mbGV4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJG11dGVkLWFjY2VudDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBhZGRpbmc6IDIlO1xcbn1cXG5cXG4udHJpcC1zdGF0dXMtYW5ub3VuY2VtZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDMlO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc2l6ZTogM3ZoO1xcbn1cXG4vLy0tLS0tLS0tLWxvZ2luIGRpc3BsYXktLS0tLS0vL1xcblxcbi5jb250YWluZXItdXNlcm5hbWUge1xcbiAgbWFyZ2luOiAyJTtcXG4gIHdpZHRoOiA1NSU7XFxufVxcblxcbi5jb250YWluZXItcGFzc3dvcmQge1xcbiAgQGV4dGVuZCAuY29udGFpbmVyLXVzZXJuYW1lOyAgXFxufVxcblxcbi5idXR0b24tbG9naW4ge1xcbiAgQGV4dGVuZCAuY29udGFpbmVyLXVzZXJuYW1lO1xcbiAgQGluY2x1ZGUgYnV0dG9uLXN0eWxlO1xcbiAgcGFkZGluZzogMiU7XFxuICB3aWR0aDogNjAlO1xcbiAgJjpob3ZlciB7XFxuICAgIEBpbmNsdWRlIGJ1dHRvbi1ob3ZlcjtcXG4gIH1cXG59XFxuXFxuLmlucHV0LWxvZ2luIHtcXG4gIEBpbmNsdWRlIGlucHV0LXN0eWxlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstaG92ZXItdGV4dDtcXG4gIHBhZGRpbmc6IDIlO1xcbiAgd2lkdGg6IDYwJTtcXG59XFxuXFxuLmxvZ2luLWRpc3BsYXkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJG11dGVkLWFjY2VudDtcXG4gIEBpbmNsdWRlIGFsaWduLWNlbnRlci1mbGV4KCk7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHdpZHRoOiA1NSU7XFxuICBoZWlnaHQ6IDI1dmg7XFxuICBwYWRkaW5nOiA1JTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLy8tLS0tLS0tLS1idXR0b25zIGFuZCBpbnB1dCBmaWVsZHMtLS0tLS0tLS0tLS8vXFxuXFxuLmJ1dHRvbi1jb3N0LWVzdGltYXRlLCAuYnV0dG9uLXN1Ym1pdC1yZXF1ZXN0IHtcXG4gIEBpbmNsdWRlIGJ1dHRvbi1zdHlsZTtcXG4gICY6aG92ZXIge1xcbiAgICBAaW5jbHVkZSBidXR0b24taG92ZXI7XFxuICB9XFxufVxcblxcbi5idXR0b24tbmF2IHtcXG4gIEBpbmNsdWRlIGp1c3RpZnktY2VudGVyLWZsZXgoKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBib3JkZXItd2lkdGg6IDA7XFxuICBtYXJnaW46IDF2aDtcXG4gIHdpZHRoOiAxMCU7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICAmOmhvdmVyIHtcXG4gICAgQGluY2x1ZGUgYnV0dG9uLWhvdmVyO1xcbiAgfVxcbn1cXG5cXG4uZGF0ZS1pbnB1dCB7XFxuICBAaW5jbHVkZSBpbnB1dC1zdHlsZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRtdXRlZC1hY2NlbnQ7XFxuICBtYXJnaW46IDF2aDtcXG59XFxuXFxuLmRlc3RpbmF0aW9uLW1lbnUge1xcbiAgQGV4dGVuZCAuZGF0ZS1pbnB1dDtcXG59XFxuXFxuLmR1cmF0aW9uLWlucHV0IHtcXG4gIEBleHRlbmQgLmRhdGUtaW5wdXQ7XFxuICB3aWR0aDogMjB2aDtcXG4gIG1hcmdpbi1ib3R0b206IDMlO1xcbn1cXG5cXG4udHJhdmVsZXJzLWlucHV0IHtcXG4gIEBleHRlbmQgLmRhdGUtaW5wdXQ7XFxuICB3aWR0aDogOHZoO1xcbn1cXG5cXG4vLy0tLS0tLS0tLWhpZGRlbi0tLS0tLS0tLS0tLy9cXG4uaGlkZGVuIHtcXG4gIGJvcmRlcjogMDtcXG4gIGNsaXA6IHJlY3QoMCAwIDAgMCk7XFxuICBoZWlnaHQ6IDFweDtcXG4gIG1hcmdpbjogLTFweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwYWRkaW5nOiAwO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDFweDtcXG59XFxuXFxuLy8tLS0tLS0tbWVkaWEgcXVlcmllcy0tLS0tLS8vXFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDgwMHB4KSB7XFxuICAudHJpcC1saXN0LXdyYXBwZXIge1xcbiAgICBncmlkLWdhcDogMC41JSA0JTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gIH1cXG5cXG4gIG5hdiB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogNDB2aDtcXG4gIH1cXG5cXG4gIC5kZXN0aW5hdGlvbi1waG90byB7XFxuICAgIHdpZHRoOiA1MHZoO1xcbiAgfVxcbiAgXFxuICAubG9naW4tZGlzcGxheSB7XFxuICAgIHdpZHRoOiA4MiU7XFxuICB9XFxuXFxuICAubWFpbi1oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDE4dmg7XFxuICB9XFxuXFxuICAuc2VhcmNoLWlucHV0IHtcXG4gICAgd2lkdGg6IDUwJTtcXG4gIH1cXG59XCIsXCIkcHJpbWFyeS1iYWNrZ3JvdW5kOiAjMTU0MzVEO1xcbiRkYXJrZXItcHJpbWFyeS1jb2xvcjogZGFya2VuKCRwcmltYXJ5LWJhY2tncm91bmQsIDE1JSk7XFxuJGRhcmstdGV4dC1jb2xvcjogbWl4KGJsYWNrLCAkcHJpbWFyeS1iYWNrZ3JvdW5kKTtcXG4kbGlnaHRlci1iYWNrZ3JvdW5kOiAjQTg5Njg4O1xcbiRtdXRlZC1hY2NlbnQ6ICNDRkNGRDc7XFxuJHNlY29uZGFyeS1tdXRlZC1hY2NlbnQ6IG1peChhbnRpcXVld2hpdGUsICRtdXRlZC1hY2NlbnQpO1xcbiRsaWdodGVzdC1hY2NlbnQ6IGFudGlxdWV3aGl0ZTtcXG4kZGFyay1ob3Zlci1iYWNrZ3JvdW5kOiAjMmEyNTIxO1xcbiRkYXJrLWhvdmVyLXRleHQ6IG1peChhbnRpcXVld2hpdGUsIHdoaXRlKTtcIixcIkBtaXhpbiBqdXN0aWZ5LWNlbnRlci1mbGV4KCkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuQG1peGluIGFsaWduLWNlbnRlci1mbGV4KCkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5AbWl4aW4gYnV0dG9uLXN0eWxlKCkge1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiA3dmg7XFxuICAgIG1hcmdpbjogMnZoO1xcbiAgICB3aWR0aDogNDMlO1xcbn1cXG5cXG5AbWl4aW4gYnV0dG9uLWhvdmVyKCkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay10ZXh0LWNvbG9yO1xcbiAgICBjb2xvcjogJGRhcmstaG92ZXItdGV4dDtcXG59XFxuXFxuQG1peGluIGlucHV0LXN0eWxlKCkge1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiA0dmg7XFxuICAgIHBhZGRpbmc6IDF2aDtcXG4gICAgbWFyZ2luLXRvcDogMSU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjbGFzcyBEZXN0aW5hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGRlc3RpbmF0aW9uRGF0YSkge1xuICAgICAgdGhpcy5pZCA9IGRlc3RpbmF0aW9uRGF0YS5pZDtcbiAgICAgIHRoaXMuZGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbkRhdGEuZGVzdGluYXRpb247XG4gICAgICB0aGlzLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5ID0gZGVzdGluYXRpb25EYXRhLmVzdGltYXRlZExvZGdpbmdDb3N0UGVyRGF5O1xuICAgICAgdGhpcy5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uID0gZGVzdGluYXRpb25EYXRhLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb247XG4gICAgICB0aGlzLmltYWdlID0gZGVzdGluYXRpb25EYXRhLmltYWdlO1xuICAgICAgdGhpcy5hbHQgPSBkZXN0aW5hdGlvbkRhdGEuYWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERlc3RpbmF0aW9uOyIsImNsYXNzIFRyYXZlbGVyIHtcbiAgY29uc3RydWN0b3IodHJhdmVsZXJEYXRhKSB7XG4gICAgdGhpcy5pZCA9IHRyYXZlbGVyRGF0YS5pZDtcbiAgICB0aGlzLm5hbWUgPSB0cmF2ZWxlckRhdGEubmFtZTtcbiAgICB0aGlzLnRyYXZlbGVyVHlwZSA9IHRyYXZlbGVyRGF0YS50cmF2ZWxlclR5cGU7XG4gICAgdGhpcy51c2VybmFtZSA9IFwidHJhdmVsZXJcIiArIHRoaXMuaWQ7XG4gICAgdGhpcy5wYXNzd29yZCA9IFwidHJhdmVsMjAyMFwiO1xuICAgIHRoaXMudHJpcHMgPSBbXTtcbiAgICB0aGlzLnBlbmRpbmdUcmlwcyA9IFtdO1xuICAgIHRoaXMudXBjb21pbmdUcmlwcyA9IFtdO1xuICAgIHRoaXMucGFzdFRyaXBzID0gW107XG4gICAgdGhpcy5wcmVzZW50VHJpcHMgPSBbXTtcbn1cbiAgZmlsdGVyQWxsVHJpcHModHJpcERhdGEpIHtcbiAgICB0aGlzLnRyaXBzID0gdHJpcERhdGEuZmlsdGVyKHRyaXAgPT4gdHJpcC51c2VySUQgPT09IHRoaXMuaWQpO1xuICAgIHJldHVybiB0aGlzLnRyaXBzO1xuICB9XG5cbiAgZmlsdGVyUGVuZGluZ1RyaXBzKHRyaXBEYXRhKSB7XG4gICAgdGhpcy5maWx0ZXJBbGxUcmlwcyh0cmlwRGF0YSk7XG4gICAgdGhpcy5wZW5kaW5nVHJpcHMgPSB0aGlzLnRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAuc3RhdHVzID09PSdwZW5kaW5nJyk7XG4gICAgcmV0dXJuIHRoaXMucGVuZGluZ1RyaXBzO1xuICB9ICBcblxuICBmaWx0ZXJVcGNvbWluZ1RyaXBzKHRyaXBEYXRhLCBkYXRlVG9kYXkpIHtcbiAgICB0aGlzLmZpbHRlckFsbFRyaXBzKHRyaXBEYXRhKTtcbiAgICB0aGlzLnVwY29taW5nVHJpcHMgPSB0aGlzLnRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAuc3RhdHVzID09PSAnYXBwcm92ZWQnICYmIHBhcnNlSW50KHRyaXAuc3RhdHVzID09PSB0cmlwLmRhdGUucmVwbGFjZUFsbCgnLycsIFwiXCIpKSA+IHBhcnNlSW50KGRhdGVUb2RheS5yZXBsYWNlQWxsKCcvJywgXCJcIikpKTtcbiAgICByZXR1cm4gdGhpcy51cGNvbWluZ1RyaXBzO1xuICB9XG5cbiAgZmlsdGVyUGFzdFRyaXBzKHRyaXBEYXRhLCBkYXRlVG9kYXkpIHtcbiAgICB0aGlzLmZpbHRlckFsbFRyaXBzKHRyaXBEYXRhKTtcbiAgICB0aGlzLnBhc3RUcmlwcyA9IHRoaXMudHJpcHMuZmlsdGVyKHRyaXAgPT4gcGFyc2VJbnQodHJpcC5kYXRlLnJlcGxhY2VBbGwoJy8nLCBcIlwiKSkgPCBwYXJzZUludChkYXRlVG9kYXkucmVwbGFjZUFsbCgnLycsIFwiXCIpKSk7XG4gICAgcmV0dXJuIHRoaXMucGFzdFRyaXBzO1xuICB9XG5cbiAgZmlsdGVyUHJlc2VudFRyaXBzKHRyaXBEYXRhLCBkYXRlVG9kYXkpIHtcbiAgICB0aGlzLmZpbHRlckFsbFRyaXBzKHRyaXBEYXRhKTtcbiAgICBsZXQgcHJlc2VudFRyaXBzID0gW107XG4gICAgdGhpcy50cmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgY29uc3QgdHJpcFN0YXJ0RGF0ZXMgPSBwYXJzZUludCh0cmlwLmRhdGUucmVwbGFjZUFsbCgnLycsIFwiXCIpKTtcbiAgICAgIGNvbnN0IHRyaXBFbmREYXRlcyA9IHRyaXBTdGFydERhdGVzICsgdHJpcC5kdXJhdGlvbjtcbiAgICAgIGxldCB0b2RheXNEYXRlID0gcGFyc2VJbnQoZGF0ZVRvZGF5LnJlcGxhY2VBbGwoJy8nLCBcIlwiKSlcbiAgICAgIGlmKHRyaXBTdGFydERhdGVzIDwgdG9kYXlzRGF0ZSAmJiB0cmlwRW5kRGF0ZXMgPiB0b2RheXNEYXRlKXtcbiAgICAgICAgcHJlc2VudFRyaXBzLnB1c2godHJpcClcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwcmVzZW50VHJpcHM7XG4gIH1cblxuICBkZXRlcm1pbmVUb3RhbEFtdFNwZW50KHRyaXBEYXRhLCB5ZWFyLCBkZXN0aW5hdGlvbnMpIHtcbiAgICBsZXQgdXNlclRyaXBzID0gdGhpcy5maWx0ZXJBbGxUcmlwcyh0cmlwRGF0YSk7XG4gICAgbGV0IHRyaXBzSW5ZZWFyID0gdXNlclRyaXBzLmZpbHRlcih0cmlwID0+IHRyaXAuZGF0ZS5pbmNsdWRlcyh5ZWFyKSAmJiB0cmlwLnN0YXR1cyA9PT0gJ2FwcHJvdmVkJyk7XG4gICAgbGV0IGdldENvc3RTdGF0cyA9IHRyaXBzSW5ZZWFyLm1hcCh0cmlwID0+IHtcbiAgICAgIGxldCB0b3RhbFRyaXBDb3N0ID0ge307XG4gICAgICBkZXN0aW5hdGlvbnMuZm9yRWFjaChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICAgICAgaWYodHJpcC5kZXN0aW5hdGlvbklEID09PSBkZXN0aW5hdGlvbi5pZCkge1xuICAgICAgICAgICAgdG90YWxUcmlwQ29zdC50b3RhbExvZGdpbmcgPSBkZXN0aW5hdGlvbi5lc3RpbWF0ZWRMb2RnaW5nQ29zdFBlckRheSAqIHRyaXAuZHVyYXRpb247XG4gICAgICAgICAgICB0b3RhbFRyaXBDb3N0LnRvdGFsRmxpZ2h0Q29zdCA9IGRlc3RpbmF0aW9uLmVzdGltYXRlZEZsaWdodENvc3RQZXJQZXJzb24gKiB0cmlwLnRyYXZlbGVycztcbiAgICAgICAgICAgIHRvdGFsVHJpcENvc3QuYWdlbnRGZWUgPSAodG90YWxUcmlwQ29zdC50b3RhbExvZGdpbmcgKyB0b3RhbFRyaXBDb3N0LnRvdGFsRmxpZ2h0Q29zdCkgKiAwLjE7XG4gICAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIHJldHVybiB0b3RhbFRyaXBDb3N0O1xuICAgIH0pO1xuICAgIGxldCB0b3RhbENvc3RQZXJHaXZlblllYXIgPSBnZXRDb3N0U3RhdHMucmVkdWNlKChjb3N0U3VtLCBjb3N0U3RhdCkgPT4ge1xuICAgICAgY29zdFN1bSArPSBjb3N0U3RhdC50b3RhbExvZGdpbmcgKyBjb3N0U3RhdC50b3RhbEZsaWdodENvc3QgKyBjb3N0U3RhdC5hZ2VudEZlZTtcbiAgICAgIHJldHVybiBjb3N0U3VtO1xuICAgIH0sIDApO1xuICAgIHJldHVybiB0b3RhbENvc3RQZXJHaXZlblllYXI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVHJhdmVsZXI7IiwiY2xhc3MgVHJpcCB7XG4gIGNvbnN0cnVjdG9yKHRyaXBEYXRhKSB7XG4gICAgICB0aGlzLmlkID0gdHJpcERhdGEuaWQ7XG4gICAgICB0aGlzLnVzZXJJRCA9IHRyaXBEYXRhLnVzZXJJRDtcbiAgICAgIHRoaXMuZGVzdGluYXRpb25JRCA9IHRyaXBEYXRhLmRlc3RpbmF0aW9uSUQ7XG4gICAgICB0aGlzLnRyYXZlbGVycyA9IHRyaXBEYXRhLnRyYXZlbGVycztcbiAgICAgIHRoaXMuZGF0ZSA9IHRyaXBEYXRhLmRhdGU7XG4gICAgICB0aGlzLmR1cmF0aW9uID0gdHJpcERhdGEuZHVyYXRpb247XG4gICAgICB0aGlzLnN0YXR1cyA9IHRyaXBEYXRhLnN0YXR1cztcbiAgICAgIHRoaXMuc3VnZ2VzdGVkQWN0aXZpdGllcyA9IHRyaXBEYXRhLnN1Z2dlc3RlZEFjdGl2aXRpZXM7XG4gIH1cbiAgdXBkYXRlVHJpcFN0YXR1cygpIHtcbiAgICAgIC8vZm9yIGFnZW50IFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyaXA7IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmFzZS5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiaW1wb3J0IFRyaXAgZnJvbSBcIi4vVHJpcFwiO1xuXG5sZXQgZG9tVXBkYXRlcyA9IHtcblxuICAgIGhpZGVEYXNoYm9hcmQoKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFzaGJvYXJkLXdyYXBwZXJcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tbmF2XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfSxcblxuICAgIHJldmVhbERhc2hib2FyZCgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2dpbi1kaXNwbGF5XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGFzaGJvYXJkLXdyYXBwZXJcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tbmF2XCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfSxcblxuICAgIGRpc3BsYXlNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheU1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3ItbWVzc2FnZScpO1xuICAgICAgICBkaXNwbGF5TWVzc2FnZS5pbm5lckhUTUwgPSBgPHAgY2xhc3M9XCJtZXNzYWdlXCI+JHttZXNzYWdlfTwvcD5gXG4gICAgfSwgXG5cbiAgICBncmVldFVzZXIodHJhdmVsZXIpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHRyYXZlbGVyLm5hbWUuc3BsaXQoJyAnKVswXVxuICAgICAgICBjb25zdCB1c2VyR3JlZXRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdyZWV0aW5nXCIpO1xuICAgICAgICB1c2VyR3JlZXRpbmcuaW5uZXJUZXh0ID0gYFdlbGNvbWUsICR7bmFtZX1gXG4gICAgfSxcblxuICAgIGRpc3BsYXlCb29rVHJpcChkZXN0aW5hdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb25NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXN0aW5hdGlvbi1tZW51XCIpO1xuICAgICAgICBkZXN0aW5hdGlvbnMuZm9yRWFjaChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICAgICAgICBjb25zdCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBsaXN0RWxlbWVudC5pbm5lckhUTUwgPSBgJHtkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn1gO1xuICAgICAgICAgICAgbGlzdEVsZW1lbnQudmFsdWUgPSBgJHtkZXN0aW5hdGlvbi5pZH1gO1xuICAgICAgICAgICAgZGVzdGluYXRpb25NZW51LmFwcGVuZENoaWxkKGxpc3RFbGVtZW50KTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIFxuICAgIHNob3dVcGNvbWluZ1RyaXBzKHRyYXZlbGVyLCB0cmlwRGF0YSwgZGF0ZVRvZGF5LCBkZXN0aW5hdGlvbnMpIHtcbiAgICAgICAgbGV0IHVwY29taW5nVHJpcHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtdXBjb21pbmctdHJpcHMnKTtcbiAgICAgICAgbGV0IHVwY29taW5nVHJpcHNMaXN0ID0gdHJhdmVsZXIuZmlsdGVyVXBjb21pbmdUcmlwcyh0cmlwRGF0YSwgZGF0ZVRvZGF5KTtcbiAgICAgICAgdXBjb21pbmdUcmlwc0xpc3QuZm9yRWFjaCh0cmlwID0+IHtcbiAgICAgICAgICAgIGRlc3RpbmF0aW9ucy5mb3JFYWNoKGRlc3RpbmF0aW9uID0+IHtcbiAgICAgICAgICAgICAgICBpZihkZXN0aW5hdGlvbi5pZCA9PT0gdHJpcC5kZXN0aW5hdGlvbklEKSB7XG4gICAgICAgICAgICAgICAgICB1cGNvbWluZ1RyaXBzU2VjdGlvbi5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBgXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRyaXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRpc3BsYXktZGF0ZSB1cGNvbWluZy1kYXRlXCI+RGF0ZTogJHt0cmlwLmRhdGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGlzcGxheS1kZXN0aW5hdGlvbiB1cGNvbWluZy1kZXN0aW5hdGlvblwiPkRlc3RpbmF0aW9uOiAke2Rlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7ZGVzdGluYXRpb24uaW1hZ2V9XCIgY2xhc3M9XCJkZXN0aW5hdGlvbi1waG90b1wiIGFsdD1cInBob3RvIG9mICR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGlzcGxheS1kdXJhdGlvbiB1cGNvbWluZy1kdXJhdGlvblwiPkR1cmF0aW9uOiAke3RyaXAuZHVyYXRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGlzcGxheS1udW1iZXItdHJhdmVsZXJzIHVwY29taW5nLXRyYXZlbGVyc1wiPiMgb2YgVHJhdmVsZXJzOiAke3RyaXAudHJhdmVsZXJzfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIGApXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgc2hvd1BlbmRpbmdUcmlwcyh0cmF2ZWxlciwgdHJpcERhdGEsIGRlc3RpbmF0aW9ucykge1xuICAgICAgICBsZXQgcGVuZGluZ1RyaXBzU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXBlbmRpbmctdHJpcHMnKTtcbiAgICAgICAgbGV0IHBlbmRpbmdUcmlwc0xpc3QgPSB0cmF2ZWxlci5maWx0ZXJQZW5kaW5nVHJpcHModHJpcERhdGEpO1xuICAgICAgICBwZW5kaW5nVHJpcHNMaXN0LmZvckVhY2godHJpcCA9PiB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbnMuZm9yRWFjaChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICAgICAgICBpZihkZXN0aW5hdGlvbi5pZCA9PT0gdHJpcC5kZXN0aW5hdGlvbklEKSB7XG4gICAgICAgICAgICBwZW5kaW5nVHJpcHNTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRyaXBcIj5cbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkaXNwbGF5LWRhdGUgcGVuZGluZy1kYXRlXCI+RGF0ZTogJHt0cmlwLmRhdGV9PC9wPlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImRpc3BsYXktZGVzdGluYXRpb24gcGVuZGluZy1kZXN0aW5hdGlvblwiPkRlc3RpbmF0aW9uOiAke2Rlc3RpbmF0aW9uLmRlc3RpbmF0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPGltZyBzcmMgPVwiJHtkZXN0aW5hdGlvbi5pbWFnZX1cIiBjbGFzcz1cImRlc3RpbmF0aW9uLXBob3RvXCIgYWx0PVwicGhvdG8gb2YgJHtkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn0+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGlzcGxheS1kdXJhdGlvbiBwZW5kaW5nLWR1cmF0aW9uXCI+RHVyYXRpb246ICR7dHJpcC5kdXJhdGlvbn08L3A+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGlzcGxheS1udW1iZXItdHJhdmVsZXJzIHBlbmRpbmctdHJhdmVsZXJzXCI+IyBvZiBUcmF2ZWxlcnM6ICR7dHJpcC50cmF2ZWxlcnN9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBzaG93UGFzdFRyaXBzKHRyYXZlbGVyLCB0cmlwRGF0YSwgZGF0ZVRvZGF5LCBkZXN0aW5hdGlvbnMpIHtcbiAgICAgICAgbGV0IHBhc3RUcmlwc1NlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1wYXN0LXRyaXAnKTtcbiAgICAgICAgbGV0IHBhc3RUcmlwcyA9IHRyYXZlbGVyLmZpbHRlclBhc3RUcmlwcyh0cmlwRGF0YSwgZGF0ZVRvZGF5KTtcbiAgICAgICAgcGFzdFRyaXBzLmZvckVhY2godHJpcCA9PiB7XG4gICAgICAgICAgICBkZXN0aW5hdGlvbnMuZm9yRWFjaChkZXN0aW5hdGlvbiA9PiB7XG4gICAgICAgICAgICAgICAgaWYoZGVzdGluYXRpb24uaWQgPT09IHRyaXAuZGVzdGluYXRpb25JRCkge1xuICAgICAgICAgICAgICAgIHBhc3RUcmlwc1NlY3Rpb24uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRyaXBcIj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGlzcGxheS1kYXRlIHBlbmRpbmctZGF0ZVwiPkRhdGU6ICR7dHJpcC5kYXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGlzcGxheS1kZXN0aW5hdGlvbiBwZW5kaW5nLWRlc3RpbmF0aW9uXCI+RGVzdGluYXRpb246ICR7ZGVzdGluYXRpb24uZGVzdGluYXRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmMgPVwiJHtkZXN0aW5hdGlvbi5pbWFnZX1cIiBjbGFzcz1cImRlc3RpbmF0aW9uLXBob3RvXCIgYWx0PVwicGhvdG8gb2YgJHtkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn0+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRpc3BsYXktZHVyYXRpb24gcGVuZGluZy1kdXJhdGlvblwiPkR1cmF0aW9uOiAke3RyaXAuZHVyYXRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkaXNwbGF5LW51bWJlci10cmF2ZWxlcnMgcGVuZGluZy10cmF2ZWxlcnNcIj4jIG9mIFRyYXZlbGVyczogJHt0cmlwLnRyYXZlbGVyc308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgYClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIHNob3dQcmVzZW50VHJpcCh0cmF2ZWxlciwgdHJpcERhdGEsIGRhdGVUb2RheSwgZGVzdGluYXRpb25zKSB7XG4gICAgICAgIGxldCBwcmVzZW50VHJpcHNTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtcHJlc2VudC10cmlwJyk7XG4gICAgICAgIGxldCBwcmVzZW50VHJpcHMgPSB0cmF2ZWxlci5maWx0ZXJQcmVzZW50VHJpcHModHJpcERhdGEsIGRhdGVUb2RheSk7XG4gICAgICAgIHByZXNlbnRUcmlwcy5mb3JFYWNoKHRyaXAgPT4ge1xuICAgICAgICAgICAgZGVzdGluYXRpb25zLmZvckVhY2goZGVzdGluYXRpb24gPT4ge1xuICAgICAgICAgICAgICAgIGlmKGRlc3RpbmF0aW9uLmlkID09PSB0cmlwLmRlc3RpbmF0aW9uSUQpIHtcbiAgICAgICAgICAgICAgICBwcmVzZW50VHJpcHNTZWN0aW9uLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIGBcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRpc3BsYXktZGF0ZSBwZW5kaW5nLWRhdGVcIj5EYXRlOiAke3RyaXAuZGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkaXNwbGF5LWRlc3RpbmF0aW9uIHBlbmRpbmctZGVzdGluYXRpb25cIj5EZXN0aW5hdGlvbjogJHtkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPGltZyBzcmMgPVwiJHtkZXN0aW5hdGlvbi5pbWFnZX1cIiBjbGFzcz1cImRlc3RpbmF0aW9uLXBob3RvXCIgYWx0PVwicGhvdG8gb2YgJHtkZXN0aW5hdGlvbi5kZXN0aW5hdGlvbn0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkaXNwbGF5LWR1cmF0aW9uIHBlbmRpbmctZHVyYXRpb25cIj5EdXJhdGlvbjogJHt0cmlwLmR1cmF0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRpc3BsYXktbnVtYmVyLXRyYXZlbGVycyBwZW5kaW5nLXRyYXZlbGVyc1wiPiMgb2YgVHJhdmVsZXJzOiAke3RyaXAudHJhdmVsZXJzfTwvcD5cbiAgICAgICAgICAgICAgICBgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfSxcblxuICAgIGRpc3BsYXlUb3RhbEFubnVhbEFtdCh0cmF2ZWxlciwgdHJpcERhdGEsIHllYXIsIGRlc3RpbmF0aW9ucykge1xuICAgICAgICBsZXQgdG90YWxBbXRTcGVudCA9IHRyYXZlbGVyLmRldGVybWluZVRvdGFsQW10U3BlbnQodHJpcERhdGEsIHllYXIsIGRlc3RpbmF0aW9ucyk7XG4gICAgICAgIGxldCB0b3RhbFNwZW50RGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b3RhbC1hbW91bnQtc3BlbnQnKTtcbiAgICAgICAgdG90YWxTcGVudERpc3BsYXkuaW5uZXJIVE1MICs9IGA8cCBjbGFzcz1cImFtb3VudC1zcGVudC1hbW91bnRcIj4kJHt0b3RhbEFtdFNwZW50fTwvcD5gO1xuICAgIH0sIFxuXG4gICAgcmV2ZWFsU3VibWlzc2lvbkJ1dHRvbigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tc3VibWl0LXJlcXVlc3RcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9LFxuXG4gICAgY2xlYXJGb3JtKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRhdGUtaW5wdXRcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc3RpbmF0aW9uLW1lbnVcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmR1cmF0aW9uLWlucHV0XCIpLnZhbHVlID0gXCJcIjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50cmF2ZWxlcnMtaW5wdXRcIikudmFsdWUgPSBcIlwiO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1zdWJtaXQtcmVxdWVzdFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH0sIFxuXG4gICAgc3VibWl0UmVxdWVzdCgpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmQtYm9vay10cmlwXCIpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuICAgICAgICA8cCBjbGFzcz1cInRyaXAtc3RhdHVzLWFubm91bmNlbWVudFwiPllvdXIgdHJpcCBoYXMgYmVlbiBzdWJtaXR0ZWQgYW5kIGlzIG5vdyBwZW5kaW5nLjwvcD5gKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1zdWJtaXQtcmVxdWVzdFwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICB0aGlzLmNsZWFyRm9ybSgpO1xuICAgIH0sIFxuXG4gICAgc2hvd0Nvc3RFc3RpbWF0ZSh0cmlwRXN0aW1hdGUpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmQtYm9vay10cmlwXCIpLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuICAgICAgICA8cCBjbGFzcz1cImNvc3QtZXN0aW1hdGUtYW5ub3VuY2VtZW50XCI+VHJpcCBDb3N0IEVzdGltYXRlOiAkJHt0cmlwRXN0aW1hdGV9PHA+XG4gICAgICAgIGApXG4gICAgfSxcblxuICAgIGNsZWFyVGV4dCgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3N0LWVzdGltYXRlLWFubm91bmNlbWVudFwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlczsiLCJpbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5cbmltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4vZG9tVXBkYXRlcy5qcyc7XG5cbmltcG9ydCBUcmF2ZWxlciBmcm9tICcuL1RyYXZlbGVyLmpzJztcbmltcG9ydCBUcmlwUmVwb3NpdG9yeSBmcm9tICcuL1RyaXBSZXBvc2l0b3J5LmpzJ1xuaW1wb3J0IFRyaXAgZnJvbSAnLi9UcmlwLmpzJztcbmltcG9ydCBEZXN0aW5hdGlvbiBmcm9tICcuL0Rlc3RpbmF0aW9uLmpzJztcblxuY29uc3QgbG9nSW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1dHRvbi1sb2dpblwiKTtcbmNvbnN0IGxvZ091dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b24tbG9nLW91dCcpO1xuY29uc3QgY2FsY3VsYXRlQ29zdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY29zdC1lc3RpbWF0ZScpO1xuY29uc3Qgc3VibWl0UmVxdWVzdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tc3VibWl0LXJlcXVlc3QnKTtcblxubGV0IHRyYXZlbGVyLCB0cmF2ZWxlcklkLCB0cmlwcywgZGVzdGluYXRpb25zO1xuXG4vL0RBU0hCT0FSRFxuLy8gbGV0IHRvZGF5ID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKTtcbmxldCB0b2RheSA9IFwiMjAyMC8wNy8yNVwiO1xubGV0IHllYXIgPSAnMjAyMCc7XG5cbmNvbnN0IGluc3RhbnRpYXRlVXNlciA9ICh0cmF2ZWxlcnMsIHVzZXJMb2dpbikgPT4ge1xuICAgIGNvbnN0IHRyYXZlbGVySW5mbyA9IHRyYXZlbGVycy5maW5kKHRyYXZlbGVyID0+IHtcbiAgICAgICAgcmV0dXJuIHRyYXZlbGVyLmlkID09PSB1c2VyTG9naW47XG4gICAgfSlcbiAgICB0cmF2ZWxlciA9IG5ldyBUcmF2ZWxlcih7aWQ6IHRyYXZlbGVySWQsIG5hbWU6IHRyYXZlbGVySW5mby5uYW1lLCB0cmF2ZWxlclR5cGU6IHRyYXZlbGVySW5mby50cmF2ZWxlclR5cGV9KTtcbn1cblxuY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcbiAgICBsZXQgdXNlclByb21pc2UgPSBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS90cmF2ZWxlcnMvJylcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbiAgICBsZXQgdHJpcHNQcm9taXNlID0gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdHJpcHMnKVxuICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xuICAgIGxldCBkZXN0aW5hdGlvbnNQcm9taXNlID0gZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvZGVzdGluYXRpb25zJylcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcbiAgXG4gICAgUHJvbWlzZS5hbGwoW3VzZXJQcm9taXNlLCB0cmlwc1Byb21pc2UsIGRlc3RpbmF0aW9uc1Byb21pc2VdKVxuICAgICAgLnRoZW4oZGF0YXNldCA9PiB7XG4gICAgICAgICAgaW5zdGFudGlhdGVVc2VyKGRhdGFzZXRbMF0udHJhdmVsZXJzLCB0cmF2ZWxlcklkKVxuICAgICAgICAgIHRyaXBzID0gZGF0YXNldFsxXS50cmlwcztcbiAgICAgICAgICBkZXN0aW5hdGlvbnMgPSBkYXRhc2V0WzJdLmRlc3RpbmF0aW9ucztcbiAgICAgICAgICBkb21VcGRhdGVzLmdyZWV0VXNlcih0cmF2ZWxlcik7XG4gICAgICAgICAgZG9tVXBkYXRlcy5kaXNwbGF5VG90YWxBbm51YWxBbXQodHJhdmVsZXIsIHRyaXBzLCB5ZWFyLCBkZXN0aW5hdGlvbnMpO1xuICAgICAgICAgIGRvbVVwZGF0ZXMuc2hvd1BlbmRpbmdUcmlwcyh0cmF2ZWxlciwgdHJpcHMsIGRlc3RpbmF0aW9ucyk7XG4gICAgICAgICAgZG9tVXBkYXRlcy5zaG93VXBjb21pbmdUcmlwcyh0cmF2ZWxlciwgdHJpcHMsIHRvZGF5LCBkZXN0aW5hdGlvbnMpO1xuICAgICAgICAgIGRvbVVwZGF0ZXMuc2hvd1Bhc3RUcmlwcyh0cmF2ZWxlciwgdHJpcHMsIHRvZGF5LCBkZXN0aW5hdGlvbnMpO1xuICAgICAgICAgIGRvbVVwZGF0ZXMuc2hvd1ByZXNlbnRUcmlwKHRyYXZlbGVyLCB0cmlwcywgdG9kYXksIGRlc3RpbmF0aW9ucyk7XG4gICAgICAgICAgZG9tVXBkYXRlcy5kaXNwbGF5Qm9va1RyaXAoZGVzdGluYXRpb25zKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gZG9tVXBkYXRlcy5kaXNwbGF5TWVzc2FnZShcIk9vcHMhIFNvbWV0aGluZyB3ZW50IHdyb25nLiBQbGVhc2UgdHJ5IGFnYWluLlwiKSlcbn1cblxuY29uc3Qgb3BlbkRhc2hib2FyZCA9ICgpID0+IHtcbiAgICBnZXREYXRhKCk7XG4gICAgZG9tVXBkYXRlcy5yZXZlYWxEYXNoYm9hcmQoKTtcbn1cblxuY29uc3QgZ2V0VHJhdmVsZXJJZCA9ICgpID0+IHtcbiAgICBjb25zdCB1c2VyTG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2lucHV0LXVzZXJuYW1lXCIpLnZhbHVlO1xuICAgIGNvbnN0IHVzZXJQYXNzd29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXQtcGFzc3dvcmRcIikudmFsdWU7XG4gICAgaWYoIXVzZXJMb2dpbi5pbmNsdWRlcyhcInRyYXZlbGVyXCIpIHx8IHVzZXJQYXNzd29yZCAhPT0gXCJ0cmF2ZWwyMDIwXCIpIHtcbiAgICAgICAgZG9tVXBkYXRlcy5kaXNwbGF5TWVzc2FnZShcIldyb25nIHVzZXJuYW1lIGFuZC9vciBwYXNzd29yZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdHJhdmVsZXJJZCA9IE51bWJlcih1c2VyTG9naW4uc2xpY2UoOCkpO1xuICAgICAgICByZXR1cm4gdHJhdmVsZXJJZDtcbiAgICB9XG59XG5cbmNvbnN0IGNoZWNrTG9naW5JbmZvID0gKCkgPT4ge1xuICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaW5wdXQtdXNlcm5hbWVcIikudmFsdWUgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNpbnB1dC1wYXNzd29yZFwiKS52YWx1ZSkge1xuICAgICAgICBnZXRUcmF2ZWxlcklkKCk7XG4gICAgICAgIG9wZW5EYXNoYm9hcmQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkb21VcGRhdGVzLmRpc3BsYXlNZXNzYWdlKFwiV3JvbmcgdXNlcm5hbWUgYW5kL29yIHBhc3N3b3JkLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcbiAgICB9XG59XG5cbmNvbnN0IGxvZ2luVXNlciA9ICgpID0+IHtcbiAgICBkb21VcGRhdGVzLmhpZGVEYXNoYm9hcmQoKTtcbn1cblxuY29uc3QgYWRkVHJpcCA9ICh0cmlwRGV0YWlscykgPT4ge1xuICAgIHRyaXBEZXRhaWxzLnN0YXR1cyA9ICdwZW5kaW5nJztcbiAgICB0cmlwRGV0YWlscy5pZCA9IHBhcnNlSW50KHRyaXBzLmxlbmd0aCkgKyAxO1xuICAgIHRyaXBEZXRhaWxzLmRhdGUgPSB0cmlwRGV0YWlscy5kYXRlLnJlcGxhY2VBbGwoJy0nLCBcIi9cIik7XG4gICAgdHJpcERldGFpbHMudXNlcklEID0gdHJhdmVsZXIuaWQ7XG4gICAgdHJpcERldGFpbHMuc3VnZ2VzdGVkQWN0aXZpdGllcyA9IFtdO1xuICAgIHRyaXBEZXRhaWxzID0gbmV3IFRyaXAodHJpcERldGFpbHMpO1xuICAgIGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3RyaXBzJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LCBcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodHJpcERldGFpbHMpXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oanNvbiA9PiBjb25zb2xlLmxvZyhqc29uKSlcbiAgICAuY2F0Y2goZXJyID0+IGRvbVVwZGF0ZXMuZGlzcGxheU1lc3NhZ2UoXCJTb3JyeS4gIFlvdXIgdHJpcCByZXF1ZXN0IGRpZG4ndCBnbyB0aHJvdWdoLlwiKSlcbn1cblxuY29uc3QgbG9nT3V0VXNlciA9ICgpID0+IHtcbiAgICByZWxvYWQgPSBsb2NhdGlvbi5yZWxvYWQoKTtcbn1cblxuY29uc3QgZ2V0VHJpcERldGFpbHMgPSAoKSA9PiB7XG4gICAgY29uc3QgdHJpcERldGFpbHMgPSB7fTtcbiAgICB0cmlwRGV0YWlscy5kYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLWRhdGVcIikudmFsdWU7XG4gICAgdHJpcERldGFpbHMuZGVzdGluYXRpb25JRCA9ICtkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc3RpbmF0aW9uLW1lbnVcIikudmFsdWU7XG4gICAgdHJpcERldGFpbHMuZHVyYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stZHVyYXRpb25cIikudmFsdWU7XG4gICAgdHJpcERldGFpbHMudHJhdmVsZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLXRyYXZlbGVyc1wiKS52YWx1ZTtcbiAgICByZXR1cm4gdHJpcERldGFpbHM7XG59XG5cbmNvbnN0IGNoZWNrSW5wdXRGaWVsZHMgPSAoKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stZGF0ZVwiKS52YWx1ZSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc3RpbmF0aW9uLW1lbnVcIikudmFsdWUgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNib29rLWR1cmF0aW9uXCIpLnZhbHVlID4gMCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jvb2stdHJhdmVsZXJzXCIpLnZhbHVlID4gMCkge1xuICAgICAgICBnZXRUcmlwQ29zdEVzdGltYXRlKCk7XG4gICAgICAgIGRvbVVwZGF0ZXMucmV2ZWFsU3VibWlzc2lvbkJ1dHRvbigpO1xuICAgIH1cbn1cblxuY29uc3QgZ2V0VHJpcENvc3RFc3RpbWF0ZSA9ICgpID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHRyaXBEZXRhaWxzID0gZ2V0VHJpcERldGFpbHMoKTtcbiAgICBjb25zdCBmaW5kRGVzdGluYXRpb24gPSBkZXN0aW5hdGlvbnMuZmluZChkZXN0aW5hdGlvbiA9PiBkZXN0aW5hdGlvbi5pZCA9PSB0cmlwRGV0YWlscy5kZXN0aW5hdGlvbklEKTtcbiAgICBjb25zdCBsb2RnaW5nRXN0aW1hdGUgPSBmaW5kRGVzdGluYXRpb24uZXN0aW1hdGVkTG9kZ2luZ0Nvc3RQZXJEYXkgKiB0cmlwRGV0YWlscy5kdXJhdGlvbjtcbiAgICBjb25zdCBmbGlnaHRFc3RpbWF0ZSA9IGZpbmREZXN0aW5hdGlvbi5lc3RpbWF0ZWRGbGlnaHRDb3N0UGVyUGVyc29uICogdHJpcERldGFpbHMudHJhdmVsZXJzO1xuICAgIGNvbnN0IGFnZW50RmVlID0gKGxvZGdpbmdFc3RpbWF0ZSArIGZsaWdodEVzdGltYXRlKSAqIDAuMTtcbiAgICBjb25zdCB0cmlwRXN0aW1hdGUgPSBsb2RnaW5nRXN0aW1hdGUgKyBmbGlnaHRFc3RpbWF0ZSArIGFnZW50RmVlO1xuICAgIGRvbVVwZGF0ZXMuc2hvd0Nvc3RFc3RpbWF0ZSh0cmlwRXN0aW1hdGUpO1xufVxuXG5jb25zdCBzdWJtaXRCb29raW5nUmVxdWVzdCA9ICgpID0+IHtcbiAgICBjb25zdCB0cmlwRGV0YWlscyA9IGdldFRyaXBEZXRhaWxzKCk7XG4gICAgZG9tVXBkYXRlcy5zdWJtaXRSZXF1ZXN0KCk7XG4gICAgYWRkVHJpcCh0cmlwRGV0YWlscyk7XG4gICAgZG9tVXBkYXRlcy5jbGVhclRleHQoKTtcbiAgICBkb21VcGRhdGVzLmNsZWFyRm9ybSgpO1xufVxuXG53aW5kb3cub25sb2FkID0gbG9naW5Vc2VyKCk7XG5sb2dJbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrTG9naW5JbmZvKTtcbmxvZ091dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvZ091dFVzZXIsIHRydWUpO1xuY2FsY3VsYXRlQ29zdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrSW5wdXRGaWVsZHMpO1xuc3VibWl0UmVxdWVzdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdEJvb2tpbmdSZXF1ZXN0KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=