import { Stack } from '@mui/material'
import { type PropsWithChildren } from 'react'

export const SignupPage = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      sx={{
        gap: { md: 6, xs: 3 },
        px: '20%'
      }}
    >
      {children}
    </Stack>
  )
}

export const Form = ({ children }: PropsWithChildren) => {
  return (
    <Stack
      sx={{
        flexDirection: 'row',
        gap: 4
      }}
    >
      {children}
    </Stack>
  )
}
