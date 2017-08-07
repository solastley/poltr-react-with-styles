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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _breakpoints, _responsive;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BREAKPOINT_NAMES = {
  SMALL: 'small',
  MEDIUM_AND_ABOVE: 'mediumAndAbove',
  LARGE_AND_ABOVE: 'largeAndAbove'
};

var breakpoints = (_breakpoints = {}, _defineProperty(_breakpoints, BREAKPOINT_NAMES.SMALL, 327), _defineProperty(_breakpoints, BREAKPOINT_NAMES.MEDIUM_AND_ABOVE, 744), _defineProperty(_breakpoints, BREAKPOINT_NAMES.LARGE_AND_ABOVE, 1128), _breakpoints);

var unit = 8;

exports.default = {
  color: {
    darkBlue: '#405C84',
    lineGray: '#BAC5C8',
    lightGray: '#F4F5F6',
    link: '#3A57DD',
    font: '#24292E',
    fadedFont: '#A0A0A0',
    white: '#FFFFFF'
  },
  responsive: (_responsive = {}, _defineProperty(_responsive, BREAKPOINT_NAMES.SMALL, '@media (max-width: ' + breakpoints[BREAKPOINT_NAMES.MEDIUM_AND_ABOVE] + 'px)'), _defineProperty(_responsive, BREAKPOINT_NAMES.MEDIUM_AND_ABOVE, '@media (min-width: ' + breakpoints[BREAKPOINT_NAMES.MEDIUM_AND_ABOVE] + 'px)'), _defineProperty(_responsive, BREAKPOINT_NAMES.LARGE_AND_ABOVE, '@media (min-width: ' + breakpoints[BREAKPOINT_NAMES.LARGE_AND_ABOVE] + 'px)'), _responsive),
  font: {
    primaryFontFamily: "'Roboto', sans-serif",
    defaultFontSize: 18,
    textMuted: {
      fontWeight: 200
    },
    textBold: {
      fontWeight: 700
    },
    textMicro: {
      fontSize: 12
    },
    textSmall: {
      fontSize: 14
    },
    textLarge: {
      fontSize: 22
    }
  },
  unit: unit
};
exports.unit = unit;

/***/ })

/******/ });