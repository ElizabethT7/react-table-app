export function codeGenerator(start: number = 0) {
  return () => ++start;
}
export const generateCode = (function (start = 0) {
  return () => ++start;
}());

export function numberFormat(value: number, locale = 'ru-RU', options = {}) {
  return new Intl.NumberFormat(locale, options).format(value);
}
