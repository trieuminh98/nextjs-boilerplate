import { type DotNotation } from '@/src/utils'
import { type PaletteMode } from '@mui/material'

const light = {
  base: {
    bg: '#ffffff',
    primary: '#00b2c2',
    secondary: '#fb9d00',
    accent: '#00c500',
    neutral: '#0c1314',
    'base-100': '#fffdfa',
    info: '#00a7ff',
    success: '#00ffc4',
    warning: '#c58700',
    error: '#ec515d'
  }
}

const dark = {
  base: {
    bg: '#000000',
    primary: '#0013ff',
    secondary: '#893300',
    accent: '#ff5f00',
    neutral: '#0d0809',
    'base-100': '#2a293a',
    info: '#007fff',
    success: '#00ffd6',
    warning: '#b88800',
    error: '#ff2a63'
  }
}

export type ColorPalette = DotNotation<typeof dark>

export const getPalette = (mode: PaletteMode) => ({
  mode,
  ...(mode === 'light' ? light : dark)
})
