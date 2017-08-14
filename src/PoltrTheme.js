const BREAKPOINT_NAMES = {
  SMALL: 'small',
  MEDIUM_AND_ABOVE: 'mediumAndAbove',
  LARGE_AND_ABOVE: 'largeAndAbove',
};

const breakpoints = {
  [BREAKPOINT_NAMES.SMALL]: 327,
  [BREAKPOINT_NAMES.MEDIUM_AND_ABOVE]: 744,
  [BREAKPOINT_NAMES.LARGE_AND_ABOVE]: 1128,
};

const unit = 8;

export default {
  color: {
    darkBlue: '#405C84',
    lineGray: '#BAC5C8',
    lightGray: '#F4F5F6',
    hoverGray: '#F7F8FA',
    link: '#3A57DD',
    font: '#24292E',
    fadedFont: '#A0A0A0',
    white: '#FFFFFF',
    error: '#CC0000',
  },
  responsive: {
    [BREAKPOINT_NAMES.SMALL]: `@media (max-width: ${breakpoints[BREAKPOINT_NAMES.MEDIUM_AND_ABOVE]}px)`,
    [BREAKPOINT_NAMES.MEDIUM_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.MEDIUM_AND_ABOVE]}px)`,
    [BREAKPOINT_NAMES.LARGE_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.LARGE_AND_ABOVE]}px)`,
  },
  font: {
    primaryFontFamily: "'Roboto', sans-serif",
    defaultFontSize: 18,
    textMuted: {
      fontWeight: 200,
    },
    textBold: {
      fontWeight: 700,
    },
    textMicro: {
      fontSize: 12,
    },
    textSmall: {
      fontSize: 14,
    },
    textLarge: {
      fontSize: 22,
    },
  },
  unit,
};

export { unit };
