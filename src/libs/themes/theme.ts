import { type PaletteMode, type ThemeOptions } from '@mui/material';
import { getBreakpoints } from './breakpoint';
import { getPalette } from './palette';
import { getTypography } from './typography';

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: getPalette(mode),
  typography: getTypography(mode),
  breakpoints: getBreakpoints(mode),
});
