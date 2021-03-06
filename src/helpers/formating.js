import { pipe } from 'src/helpers/functional';

export const numberToMonetary = n => {
  const brackets = isNegative => s =>
    isNegative ? '(' + s.substring(1) + ')' : s;
  const format = new Intl.NumberFormat('ru-RU', {
    style: 'decimal',
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format;
  return pipe(
    format, //
    brackets(n < 0)
  )(n);
};
