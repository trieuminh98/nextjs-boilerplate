import { type PaletteMode } from '@mui/material';
import type {} from '@redux-devtools/extension'; // required for devtools typing
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { getCookieTheme } from '../actions';
import { LS_KEYS } from '../types';
import { getLS } from '../utils';

type TThemeState = {
  theme: PaletteMode;
  changeTheme: (theme: PaletteMode) => void;
};

export const useThemeStore = create<TThemeState>()(
  devtools(
    persist(
      (set) => ({
        theme: getLS(LS_KEYS.THEME) ?? 'dark',
        changeTheme: (theme) => {
          set((_state) => ({ theme }));
        },
        fetch: async () => {
          const cookieTheme = (await getCookieTheme()) ?? 'dark';
          set({ theme: cookieTheme });
        },
      }),
      {
        name: 'theme-storage',
      },
    ),
  ),
);
