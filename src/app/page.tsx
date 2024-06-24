'use client';
import { useTranslations } from 'next-intl';
import { useLanguage } from '../hooks';

export default function Home() {
  const t = useTranslations();
  const { lang, changeLanguage } = useLanguage();
  return (
    <main>
      {t('title')}
      <button
        type="button"
        onClick={() =>
          lang === 'en' ? changeLanguage('vi') : changeLanguage('en')
        }
      >
        click me
      </button>
    </main>
  );
}
