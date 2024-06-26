import { type DotNotation } from '@/src/utils';
import { type PaletteMode } from '@mui/material';
import { amber, deepOrange } from '@mui/material/colors';

const light = {
  text: {
    primary: '#000000',
    secondary: amber['100'],
  },
};

const dark = {
  text: {
    primary: '#ffffff',
    secondary: deepOrange['100'],
  },
};

export type ColorPalette = DotNotation<typeof dark>;

export const getPalette = (mode: PaletteMode) => ({
  mode,
  ...(mode === 'light' ? light : dark),
});
