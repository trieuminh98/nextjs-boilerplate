'use client'
import { type TCustomBreakpoint, type TTypographyVariantKeys } from '@/src/libs'
import { type ConvertObjectValue } from '@/src/utils'
import { OutlinedInput, type OutlinedInputProps } from '@mui/material'

export type ResponsiveVariant = ConvertObjectValue<TCustomBreakpoint, TTypographyVariantKeys, true>

type TCustomInputProps = {}

type TInputProps = OutlinedInputProps & TCustomInputProps

export const Input = ({ ...rest }: TInputProps) => {
  return <OutlinedInput required id='outlined-required' {...rest} />
}

export const PrimaryInput = ({ sx, ...rest }: TInputProps) => {
  return (
    <Input
      sx={{
        fieldset: {
          borderColor: 'base.neutral'
        },
        [`&.Mui-focused`]: {
          '&.MuiInputBase-root.MuiOutlinedInput-root fieldset': {
            borderColor: 'base.primary'
          }
        },
        '&:hover': {
          '&.MuiInputBase-root.MuiOutlinedInput-root fieldset': {
            borderColor: 'base.primary'
          },
          '&.Mui-disabled': {
            '&.MuiInputBase-root.MuiOutlinedInput-root fieldset': {
              borderColor: 'base.neutral'
            }
          }
        },
        '& .Mui-disabled': {
          borderColor: 'base.neutral',
          bgcolor: 'base.base-100'
        },
        color: 'base.neutral',
        bgcolor: 'base.base-100',
        ...sx
      }}
      {...rest}
    />
  )
}

// export const SecondaryInput: React.FC<OutlinedInputProps> = (props) => {
//   const theme = useTheme()
//   return <Input variant='secondary' theme={theme} {...props} />
// }

// export const GhostInput: React.FC<OutlinedInputProps> = (props) => {
//   const theme = useTheme()
//   return <Input variant='accent' theme={theme} {...props} />
// }

// export const HyperlinkInput: React.FC<OutlinedInputProps> = (props) => {
//   const theme = useTheme()
//   return <Input variant='info' theme={theme} {...props} />
// }
