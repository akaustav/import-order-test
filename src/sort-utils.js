export function utf16Comparator(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

export const collator = new Intl.Collator('en', {
  sensitivity: 'base',
  numeric: true,
});

export function compare(a, b) {
  return collator.compare(a, b) || utf16Comparator(a, b);
}
