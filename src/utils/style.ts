export const remCalc = (input: number | string, base = 16): string => {
  if (typeof input === 'number') {
    return `${input / base}rem`;
  }

  if (typeof input === 'string') {
    return input
      .split(' ')
      .map((value) => {
        if (value.endsWith('px')) {
          const pxValue = parseFloat(value);
          return `${pxValue / base}rem`;
        }
        if (value.endsWith('rem') || value.endsWith('em')) {
          return value;
        }
        if (value === '0' || value === '0px' || value === '0rem') {
          return '0';
        }
        return value; // for any other units or invalid values, return as is
      })
      .join(' ');
  }

  throw new Error('Input must be a number or a string');
};
