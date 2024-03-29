import ThemedStyleSheet from 'react-with-styles/lib/ThemedStyleSheet';
import aphroditeInterface from 'react-with-styles-interface-aphrodite';
import { css, withStyles, ThemeProvider } from 'react-with-styles';

import PoltrTheme, { unit } from './PoltrTheme';

ThemedStyleSheet.registerDefaultTheme(PoltrTheme);
ThemedStyleSheet.registerInterface(aphroditeInterface);

export { css, withStyles, ThemeProvider, ThemedStyleSheet, unit };
