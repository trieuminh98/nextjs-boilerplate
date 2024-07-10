import type {} from '@redux-devtools/extension' // required for devtools typing
import { createWithPersist } from '../libs/zustand'
import { type TLang } from '../types'

type TLangState = {
  lang?: TLang
  changeLanguage: (lang: TLang) => void
}

export const useLanguageStore = createWithPersist<TLangState>(
  (set) => ({
    lang: undefined,
    changeLanguage: (lang) => {
      set((_state) => ({ lang }))
    }
  }),
  {
    name: 'lang-storage'
  }
)
