import { type PropsWithChildren } from 'react'
import NextIntlProvider from './next-intl-provider'
import ProgressbarProvider from './progress-bar-provider'
import ThemeProvider from './theme-provider'

const Providers = ({ children }: Readonly<PropsWithChildren>) => {
  // const test = await fetch('https://cat-fact.herokuapp.com/facts');

  return (
    <ThemeProvider>
      <NextIntlProvider>
        <ProgressbarProvider>{children}</ProgressbarProvider>
      </NextIntlProvider>
    </ThemeProvider>
  )
}

export default Providers
