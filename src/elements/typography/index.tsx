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
import { useMemo, type ElementType, type PropsWithChildren } from 'react';

export type ResponsiveVariant = ConvertObjectValue<
  TCustomBreakpoint,
  TTypographyVariantKeys,
  true
>;

type TCustomTypographyProps = {
  plainColor?: ColorPalette;
  cate?: TTypographyVariantKeys | ResponsiveVariant;
  ellipsisLine?: number;
};

export type TypographyProps<D extends ElementType> = MTypographyProps<
  D,
  {
    component?: D;
  } & TCustomTypographyProps
>;

export function Typography<D extends ElementType = 'div'>({
  plainColor,
  cate,
  sx,
  component,
  children,
  ellipsisLine,
  ...rest
}: PropsWithChildren<TypographyProps<D>>) {
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

  if (typeof cate === 'string') {
    currentVariant = cate;
  } else if (cate) {
    for (const key of breakpointsKey) {
      if (breakpoints[key] && cate[key]) {
        currentVariant = cate[key];
        break;
      }
    }
  }

  return (
    <MTypography
      suppressHydrationWarning
      variant={currentVariant ?? 'large_title'}
      component={component ?? 'div'}
      sx={{
        textWrap: 'pretty',
        whiteSpace: 'pre-line', //break line for \n
        //Custom
        color: plainColor,
        ...(ellipsisLine && {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: ellipsisLine,
          WebkitBoxOrient: 'vertical',
        }),
        ...sx,
      }}
      {...rest}
    >
      {children}
    </MTypography>
  );
}
