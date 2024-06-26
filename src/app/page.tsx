import { Box } from '@mui/material';
import { type PropsWithChildren } from 'react';

function Home({ children }: PropsWithChildren) {
  return <Box component="main">{children}</Box>;
}

export default Home;
