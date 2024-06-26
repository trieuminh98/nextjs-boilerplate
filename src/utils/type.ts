export type DotNotation<T, Prefix extends string = ''> = {
  [K in keyof T]: T[K] extends Record<string, unknown>
    ?
        | `${Prefix}${Extract<K, string>}`
        | DotNotation<T[K], `${Prefix}${Extract<K, string>}.`>
    : `${Prefix}${Extract<K, string>}`;
}[keyof T];

export type ConvertObjectValue<
  T,
  V,
  Options extends boolean = false,
> = Options extends true ? { [K in keyof T]?: V } : { [K in keyof T]: V };
