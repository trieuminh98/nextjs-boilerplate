import type en from './messages/en.json';
import { type ColorPalette } from './src/libs';

type Messages = typeof en;

declare global {
  // Use type safe message keys with `next-intl`
  type IntlMessages = Messages;
}

declare module 'csstype' {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface StandardLonghandProperties {
    // Allow namespaced CSS Custom Properties
    borderColor?: Property.BorderColor | ColorPalette | undefined;
    bgcolor?: Property.BackgroundColor | ColorPalette | undefined;
    color?: Property.Color | ColorPalette | undefined;
  }
}
