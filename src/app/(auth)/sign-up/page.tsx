'use client';
import { Typography } from '@/src/elements';
import { useLanguage, useThemeMode } from '@/src/hooks';
import { Button } from '@mui/material';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Suspense, type PropsWithChildren } from 'react';

function SignupPage({ children }: PropsWithChildren) {
  const t = useTranslations();
  const { lang, changeLanguage } = useLanguage();
  const { themeMode, changeTheme } = useThemeMode();
  return (
    <Suspense>
      <Typography component="a" href="/">
        Signup Page
      </Typography>
      <Typography
        plainColor="text.primary"
        cate={{
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
      <Button href="/" LinkComponent={Link}>
        Back
      </Button>
      {children}
    </Suspense>
  );
}

export default SignupPage;
