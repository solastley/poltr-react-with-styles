'use strict';

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
    hoverGray: '#F7F8FA',
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