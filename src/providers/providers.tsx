import { type PropsWithChildren } from 'react';
import NextIntlProvider from './next-intl-provider';
import ThemeProvider from './theme-provider';

function Providers({ children }: Readonly<PropsWithChildren>) {
  return (
    <NextIntlProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </NextIntlProvider>
  );
}

export default Providers;
