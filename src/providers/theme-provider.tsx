'use client'
import { createTheme, CssBaseline, ThemeProvider as MThemeProvider } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { useMemo, type PropsWithChildren } from 'react'
import { useThemeMode } from '../hooks'
import { getDesignTokens } from '../libs'

const ThemeProvider = ({ children }: Readonly<PropsWithChildren>) => {
  const { themeMode: storeThemeMode } = useThemeMode()

  const themeMode = useMemo(() => createTheme({ ...getDesignTokens(storeThemeMode) }), [storeThemeMode])

  return (
    <AppRouterCacheProvider>
      <MThemeProvider theme={themeMode}>
        <CssBaseline />
        {children}
      </MThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default ThemeProvider
