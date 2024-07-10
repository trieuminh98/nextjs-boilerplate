import { type ColorPalette } from './src/libs'
import type en from './src/messages/en.json'

type Messages = typeof en

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface IntlMessages extends Messages {}
}

declare module 'csstype' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface StandardLonghandProperties {
    // Allow namespaced CSS Custom Properties
    borderColor?: Property.BorderColor | ColorPalette | undefined
    bgcolor?: Property.BackgroundColor | ColorPalette | undefined
    color?: Property.Color | ColorPalette | undefined
  }
}
