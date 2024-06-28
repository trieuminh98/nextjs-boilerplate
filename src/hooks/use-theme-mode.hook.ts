'use client';
import { type PaletteMode } from '@mui/material';
import { useCallback } from 'react';
import { setCookieTheme } from '../actions';
import { useThemeStore } from '../stores';
import { LS_KEYS } from '../types';
import { setLS } from '../utils';

export const useThemeMode = () => {
  const { theme, changeTheme: changeStoreTheme } = useThemeStore(
    (state) => state,
  );

  const changeTheme = useCallback(async (newTheme: PaletteMode) => {
    changeStoreTheme(newTheme);
    await setCookieTheme(newTheme);
    //Additional setup for preventing flickering dark/light mode
    //TO DO: Remove when have any library update relating
    setLS(LS_KEYS.THEME, newTheme);
  }, []);

  return { changeTheme, themeMode: theme };
};
