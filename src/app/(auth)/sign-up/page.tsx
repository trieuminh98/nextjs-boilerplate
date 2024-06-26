'use client';
import { Typography } from '@/src/components';
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
      <Typography>Signup Page</Typography>
      <Typography
        color="text.primary"
        variant={{
          xs: 'title_1_bold',
          sm: 'title_2_bold',
          lg: 'title_3_bold',
          xl: 'title_4_bold',
          desktop: 'title_5_bold',
        }}
      >
        Signup Page
      </Typography>
      {t('title')}
      <Button
        variant="contained"
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
