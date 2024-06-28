import { Box } from '@mui/material';
import Link from 'next/link';
import { Suspense, type PropsWithChildren } from 'react';
import { Typography } from '../elements';

function Home({ children }: PropsWithChildren) {
  return (
    <Suspense>
      <Typography>hello</Typography>
      <Link href="/sign-up">Click me</Link>
      <Box component="main">{children}</Box>
    </Suspense>
  );
}

export default Home;
