import { CssBaseline } from '@mui/material';
import { type PropsWithChildren } from 'react';

function ThemeProvider({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <CssBaseline />
      {children}
    </>
  );
}

export default ThemeProvider;
