import { type ConvertObjectValue } from '@/src/utils';
import { type PaletteMode } from '@mui/material';

export type TCustomBreakpoint = typeof customBreakpoint;
export type TCustomBreakpointKeys = keyof typeof customBreakpoint;

/* eslint-disable @typescript-eslint/consistent-type-definitions */
declare module '@mui/material/styles' {
  interface BreakpointOverrides
    extends ConvertObjectValue<TCustomBreakpoint, true> {}
}

const customBreakpoint = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
  desktop: 1920,
};

export const getBreakpoints = (_mode: PaletteMode) => ({
  values: customBreakpoint,
});
