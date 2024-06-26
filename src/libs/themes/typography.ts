/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { type ConvertObjectValue, remCalc, roboto } from '@/src/utils';
import { type Palette, type PaletteMode } from '@mui/material';
import { type TypographyOptions } from '@mui/material/styles/createTypography';

export type TTypographyVariants = typeof typoVariants;
export type TTypographyVariantKeys = keyof typeof typoVariants;

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides
    extends ConvertObjectValue<TTypographyVariants, true> {}
}

type TTypographyStyle = {
  fontWeight: number;
  letterSpacing: string | number;
  fontSize: string | number;
  lineHeight: string | number;
};

const defaultTypoStyle: TTypographyStyle = {
  fontWeight: 400,
  letterSpacing: 0,
  fontSize: remCalc(14),
  lineHeight: remCalc(20),
};

export const generateTextStyles = (
  fz: number,
  lh: number,
  fw: number,
  ls?: number,
) =>
  ({
    ...defaultTypoStyle,
    fontSize: remCalc(fz),
    lineHeight: `${lh}%`,
    fontWeight: fw,
    letterSpacing: ls ? `${ls}%` : 'inherit',
  }) as TTypographyStyle;

const typoVariants = {
  large_title: generateTextStyles(40, 100, 700, 0),
  title_1_bold: generateTextStyles(10, 120, 700, 0),
  title_2_bold: generateTextStyles(20, 120, 700, 0),
  title_3_bold: generateTextStyles(30, 120, 700, 0),
  title_4_bold: generateTextStyles(40, 120, 700, 0),
  title_5_bold: generateTextStyles(120, 120, 700, 0),
};

export const getTypography = (
  mode: PaletteMode,
):
  | TypographyOptions
  | ((palette: Palette) => TypographyOptions)
  | undefined => ({
  fontFamily: roboto.style.fontFamily,
  allVariants: {
    ...defaultTypoStyle,
    color: mode === 'dark' ? '#ffffff' : '#000000',
  },
  ...typoVariants,
});
