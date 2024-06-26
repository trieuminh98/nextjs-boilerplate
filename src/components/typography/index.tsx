'use client';
import {
  type ColorPalette,
  type TCustomBreakpoint,
  type TCustomBreakpointKeys,
  type TTypographyVariantKeys,
} from '@/src/libs';
import { type ConvertObjectValue } from '@/src/utils';
import {
  Typography as MTypography,
  useMediaQuery,
  useTheme,
  type TypographyProps as MTypographyProps,
} from '@mui/material';
import { useMemo, type PropsWithChildren } from 'react';

export type TTypographyProps = {
  color?: ColorPalette;
  variant?: ResponsiveVariant;
} & Omit<MTypographyProps, 'color' | 'variant'>;

export type ResponsiveVariant = ConvertObjectValue<
  TCustomBreakpoint,
  TTypographyVariantKeys,
  true
>;

export function Typography({
  color,
  variant,
  sx,
  children,
}: PropsWithChildren<TTypographyProps>) {
  const theme = useTheme();
  const breakpointsKey = useMemo(() => theme.breakpoints.keys.toReversed(), []);

  // Define breakpoints
  const breakpoints = theme.breakpoints.keys.reduce<
    Record<TCustomBreakpointKeys, boolean>
  >(
    (acc, key) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      acc[key] = useMediaQuery(theme.breakpoints.up(key));
      return acc;
    },
    {} as Record<TCustomBreakpointKeys, boolean>,
  );

  // Determine the current variant based on breakpoints
  let currentVariant: MTypographyProps['variant'] | undefined;

  if (typeof variant === 'string') {
    currentVariant = variant;
  } else if (variant) {
    for (const key of breakpointsKey) {
      if (breakpoints[key] && variant[key]) {
        currentVariant = variant[key];
        break;
      }
    }
  }

  return (
    <MTypography
      variant={currentVariant}
      sx={{
        color,
        ...sx,
      }}
    >
      {children}
    </MTypography>
  );
}
