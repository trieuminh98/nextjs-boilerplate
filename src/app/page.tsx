import { Box } from '@mui/material';
import { Suspense, type PropsWithChildren } from 'react';

function Home({ children }: PropsWithChildren) {
  return (
    <Suspense>
      <Box component="main">{children}</Box>
    </Suspense>
  );
}

export default Home;
