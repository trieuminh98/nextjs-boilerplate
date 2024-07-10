'use client'
import { Box } from '@mui/material'
import { type SxProps, useTheme } from '@mui/material/styles'
import NImage, { type ImageProps as NImageProps, type StaticImageData } from 'next/image'

type ImageProps = {
  src: string | StaticImageData
  darkSrc?: string | StaticImageData
  sx: SxProps
} & Omit<NImageProps, 'src' | 'style'>

const Image = ({ src, darkSrc, alt, sizes, sx, ...rest }: ImageProps) => {
  const theme = useTheme()
  const isDarkMode = theme.palette.mode === 'dark'

  const selectedSrc = isDarkMode && darkSrc ? darkSrc : src
  return (
    <Box
      component={NImage}
      src={selectedSrc}
      alt={alt || 'image'}
      sizes={sizes ?? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
      sx={{ width: '100%', height: 'auto', ...sx }}
      {...rest}
    />
  )
}

export default Image
