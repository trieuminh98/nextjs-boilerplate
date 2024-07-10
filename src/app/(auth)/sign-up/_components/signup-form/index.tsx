'use client'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/src/components'
import { Divider, PrimaryInput, Typography } from '@/src/elements'
import { useThemeMode } from '@/src/hooks'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, Stack } from '@mui/material'
import { useTranslations } from 'next-intl'
import { useForm, type ValidationMode } from 'react-hook-form'
import * as z from 'zod'

type TestForm = {
  name: string
}

const schema = z.object({
  name: z.string().min(1, { message: 'Required' })
})

const SignupForm = () => {
  const { changeTheme, themeMode } = useThemeMode()
  const t = useTranslations()
  const formOptions = {
    defaultValues: {
      name: ''
    },
    resolver: zodResolver(schema),
    mode: 'onBlur' as keyof ValidationMode
  }
  const form = useForm<TestForm>(formOptions)
  const { handleSubmit } = form

  const onFinish = (_values: TestForm) => {
    // console.log(values);
  }
  return (
    <Stack
      sx={{
        gap: 3
      }}
    >
      <Button onClick={() => changeTheme(themeMode === 'dark' ? 'light' : 'dark')}>Change theme</Button>
      <Typography cate='heading'>{t('signup_title')}</Typography>
      <Divider />
      <Form {...form}>
        <Box component='form' onSubmit={handleSubmit(onFinish)}>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <PrimaryInput disabled placeholder='Enter your email.' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit'>submit</Button>
        </Box>
      </Form>
    </Stack>
  )
}

export default SignupForm
