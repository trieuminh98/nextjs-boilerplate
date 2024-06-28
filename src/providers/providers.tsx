import { type PropsWithChildren } from 'react';
import NextIntlProvider from './next-intl-provider';
import ProgressbarProvider from './progress-bar-provider';
import ThemeProvider from './theme-provider';

function Providers({ children }: Readonly<PropsWithChildren>) {
  // const test = await fetch('https://cat-fact.herokuapp.com/facts');

  return (
    <NextIntlProvider>
      <ThemeProvider>
        <ProgressbarProvider>{children}</ProgressbarProvider>
      </ThemeProvider>
    </NextIntlProvider>
  );
}

export default Providers;
