import type {} from '@redux-devtools/extension'; // required for devtools typing
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { TLang } from '../types';

type TLangState = {
  lang?: TLang;
  changeLanguage: (lang: TLang) => void;
};

export const useLanguageStore = create<TLangState>()(
  devtools(
    persist(
      (set) => ({
        lang: undefined,
        changeLanguage: (lang) => set((_state) => ({ lang })),
      }),
      {
        name: 'lang-storage',
      },
    ),
  ),
);
