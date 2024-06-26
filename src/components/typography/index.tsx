import { type ColorPalette } from '@/src/libs';
import {
  Typography as MTypography,
  type TypographyProps as MTypographyProps,
} from '@mui/material';
import { type PropsWithChildren } from 'react';

export type TTypographyProps = {
  color?: ColorPalette;
} & Omit<MTypographyProps, 'color'>;

export function Typography({
  variant,
  color,
  sx,
  children,
}: PropsWithChildren<TTypographyProps>) {
  return (
    <MTypography
      variant={variant}
      sx={{
        color,
        ...sx,
      }}
    >
      {children}
    </MTypography>
  );
}
