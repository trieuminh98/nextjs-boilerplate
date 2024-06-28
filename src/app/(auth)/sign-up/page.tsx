'use client';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/src/components';
import { Typography } from '@/src/elements';
import { useLanguage, useThemeMode } from '@/src/hooks';
import { zodResolver } from '@hookform/resolvers/zod';
import { Box, Button, OutlinedInput } from '@mui/material';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Suspense, type PropsWithChildren } from 'react';
import { useForm, type ValidationMode } from 'react-hook-form';
import * as z from 'zod';

type TestForm = {
  name: string;
};

const schema = z.object({
  name: z.string().min(1, { message: 'Required' }),
});

function SignupPage({ children }: PropsWithChildren) {
  const t = useTranslations();
  const { lang, changeLanguage } = useLanguage();
  const { themeMode, changeTheme } = useThemeMode();

  const formOptions = {
    defaultValues: {
      name: '',
    },
    resolver: zodResolver(schema),
    mode: 'onBlur' as keyof ValidationMode,
  };
  const form = useForm<TestForm>(formOptions);
  const { handleSubmit } = form;

  const onFinish = (_values: TestForm) => {
    // console.log(values);
  };

  return (
    <Suspense>
      <Typography component="a">Signup Page</Typography>
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
      <Form {...form}>
        <Box component="form" onSubmit={handleSubmit(onFinish)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  <Typography>보고 내용</Typography>
                </FormLabel>
                <FormControl>
                  <OutlinedInput
                    sx={{
                      minHeight: '128px !important',
                      height: 'auto !important',
                      width: '100%',
                      boxShadow: 'none',
                    }}
                    placeholder="멘토링진행내용에대해작성해주세요."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">submit</Button>
        </Box>
      </Form>
      {children}
    </Suspense>
  );
}

export default SignupPage;
