'use client';
import { useLanguage, useThemeMode } from '@/src/hooks';
import { Button } from '@mui/material';
import { useTranslations } from 'next-intl';
import { type PropsWithChildren } from 'react';

function SignupPage({ children }: PropsWithChildren) {
  const t = useTranslations();
  const { lang, changeLanguage } = useLanguage();
  const { themeMode, changeTheme } = useThemeMode();
  return (
    <div>
      SignupPage
      {t('title')}
      <Button
        variant="contained"
        sx={{
          bgcolor: (theme) => theme.palette.play,
        }}
        onClick={() => {
          void changeLanguage(lang === 'en' ? 'vi' : 'en');
        }}
      >
        click me
      </Button>
      <Button
        onClick={() => {
          void changeTheme(themeMode === 'dark' ? 'light' : 'dark');
        }}
      >
        changeTheme
      </Button>
      {children}
    </div>
  );
}

export default SignupPage;
