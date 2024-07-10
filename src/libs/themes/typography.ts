/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { type ConvertObjectValue, pretendard, remCalc } from '@/src/utils'
import { type Palette, type PaletteMode } from '@mui/material'
import { type TypographyOptions } from '@mui/material/styles/createTypography'

export type TTypographyVariants = typeof typoVariants
export type TTypographyVariantKeys = keyof typeof typoVariants

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides extends ConvertObjectValue<TTypographyVariants, true> {}
}

type TTypographyStyle = {
  fontWeight: number
  letterSpacing: string | number
  fontSize: string | number
  lineHeight: string | number
}

const defaultTypoStyle: TTypographyStyle = {
  fontWeight: 400,
  letterSpacing: 0,
  fontSize: remCalc(14),
  lineHeight: remCalc(20)
}

export const generateTextStyles = (fz: number, lh: number, fw: number, ls?: number) =>
  ({
    ...defaultTypoStyle,
    fontSize: remCalc(fz),
    lineHeight: `${lh}%`,
    fontWeight: fw,
    letterSpacing: ls ? `${ls}%` : 'inherit'
  }) as TTypographyStyle

const typoVariants = {
  heading: generateTextStyles(36, 110, 700, 0), // 36px font size, 110% line height, 700 font weight
  title_bold: generateTextStyles(32, 120, 700, 0), // 32px font size, 120% line height, 700 font weight
  title_regular: generateTextStyles(32, 120, 400, 0), // 32px font size, 120% line height, 400 font weight
  subheading: generateTextStyles(28, 130, 600, 0), // 28px font size, 130% line height, 600 font weight
  subtitle: generateTextStyles(24, 140, 500, 0.5), // 24px font size, 140% line height, 500 font weight, 0.5% letter spacing
  body_large: generateTextStyles(18, 150, 400, 0), // 18px font size, 150% line height, 400 font weight
  body_regular: generateTextStyles(16, 150, 400, 0), // 16px font size, 150% line height, 400 font weight
  button: generateTextStyles(14, 140, 600, 1), // 14px font size, 140% line height, 600 font weight, 1% letter spacing
  caption: generateTextStyles(12, 160, 300, 0), // 12px font size, 160% line height, 300 font weight
  overline: generateTextStyles(10, 160, 400, 2) // 10px font size, 160% line height, 400 font weight, 2% letter spacing
}

export const getTypography = (
  mode: PaletteMode
): TypographyOptions | ((palette: Palette) => TypographyOptions) | undefined => ({
  fontFamily: pretendard.style.fontFamily,
  allVariants: {
    ...defaultTypoStyle,
    color: mode === 'dark' ? '#ffffff' : '#000000'
  },
  ...typoVariants
})
