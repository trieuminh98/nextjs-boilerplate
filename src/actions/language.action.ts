import { getCookie, setCookie } from '../services';
import { COOKIE_KEYS, TLang } from '../types';

export const setCookieLanguage = async (lang: TLang) => {
  await setCookie(COOKIE_KEYS.LANG, lang);
};

export const getCookieLanguage = async (): Promise<TLang> => {
  const val = await getCookie(COOKIE_KEYS.LANG);
  return (val?.value as TLang) || 'en';
};
