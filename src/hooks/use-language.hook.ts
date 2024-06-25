'use client';
import { useCallback, useEffect } from 'react';
import { getCookieLanguage, setCookieLanguage } from '../actions';
import { useLanguageStore } from '../stores';
import { type TLang } from '../types';

export const useLanguage = () => {
  const { lang, changeLanguage: changeStoreLanguage } = useLanguageStore(
    (state) => state,
  );

  const changeLanguage = useCallback(async (newLang: TLang) => {
    changeStoreLanguage(newLang);
    await setCookieLanguage(newLang);
  }, []);

  useEffect(() => {
    const init = async () => {
      if (!lang) {
        const cookieLang = await getCookieLanguage();
        void changeLanguage(cookieLang);
      }
    };
    void init();
  }, []);

  return { changeLanguage, lang };
};
