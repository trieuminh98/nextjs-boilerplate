import { type PaletteMode } from '@mui/material'
import type {} from '@redux-devtools/extension' // required for devtools typing
import { getCookieTheme } from '../actions'
import { createWithPersist } from '../libs/zustand'

type TThemeState = {
  theme: PaletteMode
  changeTheme: (theme: PaletteMode) => void
}

export const useThemeStore = createWithPersist<TThemeState>(
  (set) => ({
    theme: 'dark',
    changeTheme: (theme) => {
      set((_state) => ({ theme }))
    },
    fetch: async () => {
      const cookieTheme = (await getCookieTheme()) ?? 'dark'
      set({ theme: cookieTheme })
    }
  }),
  {
    name: 'theme-storage'
  }
)
