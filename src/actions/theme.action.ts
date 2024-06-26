import { type PaletteMode } from '@mui/material';
import { getCookie, setCookie } from '../services';
import { COOKIE_KEYS } from '../types';

export const setCookieTheme = async (theme: PaletteMode) => {
  await setCookie(COOKIE_KEYS.THEME, theme);
};

export const getCookieTheme = async () => {
  const val = await getCookie(COOKIE_KEYS.THEME);
  return val?.value ? (val.value as PaletteMode) : undefined;
};
