/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/consistent-type-definitions */
import { remCalc, roboto } from '@/src/utils';
import { type Palette, type PaletteMode } from '@mui/material';
import { type TypographyOptions } from '@mui/material/styles/createTypography';

type ConvertToOverrides<T> = {
  [K in keyof T]: true;
};

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides
    extends ConvertToOverrides<typeof typoVariants> {}
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
  title_1_bold: generateTextStyles(36, 120, 700, 0),
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
