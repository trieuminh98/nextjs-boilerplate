'use client';
import { useLanguage } from '@/src/hooks';
import { Button } from '@mui/material';
import { useTranslations } from 'next-intl';
import { type PropsWithChildren } from 'react';

function SignupPage({ children }: PropsWithChildren) {
  const t = useTranslations();
  const { lang, changeLanguage } = useLanguage();
  return (
    <div>
      SignupPage
      {t('title')}
      <Button
        onClick={() => {
          void changeLanguage(lang === 'en' ? 'vi' : 'en');
        }}
      >
        click me
      </Button>
      {children}
    </div>
  );
}

export default SignupPage;
