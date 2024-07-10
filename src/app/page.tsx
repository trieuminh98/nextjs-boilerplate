import { Box, Stack } from '@mui/material'
import { Suspense, type PropsWithChildren } from 'react'

const Home = ({ children }: PropsWithChildren) => {
  return (
    <Suspense>
      <Stack direction='row'>
        <Box component='nav'>first DrawerBar</Box>
        <Box component='nav'>second DrawerBar</Box>
        <Stack>
          <Box component='header'>header</Box>
          <Box component='main'>main{children}</Box>
        </Stack>
      </Stack>
    </Suspense>
  )
}

export default Home
