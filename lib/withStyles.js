'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unit = exports.ThemedStyleSheet = exports.ThemeProvider = exports.withStyles = exports.css = undefined;

var _ThemedStyleSheet = require('react-with-styles/lib/ThemedStyleSheet');

var _ThemedStyleSheet2 = _interopRequireDefault(_ThemedStyleSheet);

var _reactWithStylesInterfaceAphrodite = require('react-with-styles-interface-aphrodite');

var _reactWithStylesInterfaceAphrodite2 = _interopRequireDefault(_reactWithStylesInterfaceAphrodite);

var _reactWithStyles = require('react-with-styles');

var _PoltrTheme = require('./PoltrTheme');

var _PoltrTheme2 = _interopRequireDefault(_PoltrTheme);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_ThemedStyleSheet2.default.registerDefaultTheme(_PoltrTheme2.default);
_ThemedStyleSheet2.default.registerInterface(_reactWithStylesInterfaceAphrodite2.default);

exports.css = _reactWithStyles.css;
exports.withStyles = _reactWithStyles.withStyles;
exports.ThemeProvider = _reactWithStyles.ThemeProvider;
exports.ThemedStyleSheet = _ThemedStyleSheet2.default;
exports.unit = _PoltrTheme.unit;