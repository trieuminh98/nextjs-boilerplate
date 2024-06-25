import { roboto } from '@/src/utils';
import { type PaletteMode } from '@mui/material';

export const getTypography = (_mode: PaletteMode) => ({
  fontFamily: roboto.style.fontFamily,
});
