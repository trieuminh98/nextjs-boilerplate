/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { type DotNotation } from '@/src/utils';
import { type PaletteMode } from '@mui/material';
import { amber, deepOrange } from '@mui/material/colors';

declare module '@mui/material/styles/createPalette' {
  interface PaletteOptions {
    play?: string;
  }

  interface Palette {
    play: string;
  }

  interface Theme {
    play: string;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    play: string;
  }
}

const light = {
  play: amber['100'],
  base_gray: {
    '100': amber[400],
  },
};

const dark = {
  play: deepOrange['100'],
  base_gray: {
    '100': deepOrange[400],
  },
};

export type ColorPalette = DotNotation<typeof dark>;

export const getPalette = (mode: PaletteMode) => ({
  mode,
  ...(mode === 'light' ? light : dark),
});
