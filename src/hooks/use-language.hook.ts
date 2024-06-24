'use client';
import { useCallback, useEffect } from 'react';
import { getCookieLanguage, setCookieLanguage } from '../actions';
import { useLanguageStore } from '../stores';
import { TLang } from '../types';

export const useLanguage = () => {
  const { lang, changeLanguage: changeStoreLanguage } = useLanguageStore(
    (state) => state,
  );

  const changeLanguage = useCallback(async (lang: TLang) => {
    changeStoreLanguage(lang);
    await setCookieLanguage(lang);
  }, []);

  useEffect(() => {
    const init = async () => {
      if (!lang) {
        const lang = await getCookieLanguage();
        changeLanguage(lang);
      }
    };
    init();
  }, []);

  return { changeLanguage, lang };
};
