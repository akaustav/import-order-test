const collator = new Intl.Collator('en', {
  sensitivity: 'base',
  numeric: true,
});

export function compare(a, b) {
  return collator.compare(a, b) || (a < b ? -1 : a > b ? 1 : 0);
}
