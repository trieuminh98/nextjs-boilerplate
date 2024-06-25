import { getCookie, setCookie } from '../services';
import { COOKIE_KEYS, type TLang } from '../types';

export const setCookieLanguage = async (lang: TLang) => {
  await setCookie(COOKIE_KEYS.LANG, lang);
};

export const getCookieLanguage = async () => {
  const val = await getCookie(COOKIE_KEYS.LANG);
  return (val?.value ?? 'en') as TLang;
};
