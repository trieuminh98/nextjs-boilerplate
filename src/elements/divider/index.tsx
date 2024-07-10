import { type ColorPalette } from '@/src/libs'
import { remCalc } from '@/src/utils'
import MDivider, { type DividerProps as MDividerProps } from '@mui/material/Divider'

type TCustomDividerProps = {
  color?: ColorPalette
  width?: number
}

type TDividerProps = TCustomDividerProps & MDividerProps

const Divider = ({ color, orientation = 'horizontal', width, sx, ...props }: TDividerProps) => {
  const isHorizontal = orientation === 'horizontal'
  const borderWidth = remCalc(width ?? 1)
  return (
    <MDivider
      sx={{
        borderColor: color ?? 'base.neutral',
        ...(!isHorizontal && {
          height: '100%',
          borderLeftWidth: borderWidth,
          borderLeftStyle: 'solid',
          borderLeftColor: color ?? 'divider'
        }),
        ...(isHorizontal && {
          width: '100%',
          borderTopWidth: borderWidth,
          borderTopStyle: 'solid',
          borderTopColor: color ?? 'divider'
        }),
        ...sx
      }}
      {...{ orientation }}
      {...props}
    />
  )
}

export default Divider
