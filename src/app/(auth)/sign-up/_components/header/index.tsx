import { LogoImage } from '@/src/assets/images'
import { Image, Typography } from '@/src/elements'
import { Box, Stack } from '@mui/material'

const SignupHeader = () => {
  return (
    <Box>
      <Stack
        sx={{
          gap: 1,
          flexDirection: 'row',
          alignItems: 'center'
        }}
      >
        <Image
          sx={{
            width: 80
          }}
          alt='logo'
          src={LogoImage}
        />
        <Typography>Todoist</Typography>
      </Stack>
    </Box>
  )
}

export default SignupHeader
