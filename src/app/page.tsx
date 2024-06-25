import { Box, Button } from '@mui/material';
import { type PropsWithChildren } from 'react';

function Home({ children }: PropsWithChildren) {
  return (
    <Box component="main">
      <Button
        sx={{
          bgcolor: 'base_gray.100',
        }}
      >
        hello
      </Button>
      {children}
    </Box>
  );
}

export default Home;
