import { getRequestConfig } from 'next-intl/server';
import { getCookieLanguage } from '../actions';
import { type TLang } from '../types/common.type';

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const DEFAULT_LOCALE: TLang = await getCookieLanguage();

  const messages =
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    (await import(`../messages/${DEFAULT_LOCALE}.json`)).default as Record<
      string,
      string
    >;

  return {
    locale: DEFAULT_LOCALE,
    messages,
  };
});
