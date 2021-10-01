/* eslint-disable simple-import-sort/imports */
import { fileNameWithHyphens } from './file-with-hyphens.js';
import { fileNameWithPeriods } from './file.with.periods.js';
import { compare } from './sort-utils.js';
import { getSource } from './transform.js';

const fileNames = [fileNameWithHyphens, fileNameWithPeriods];

console.log(fileNames.sort(compare));
// Output: [ './file-with-hyphens.js', './file.with.periods.js' ]

const transformed = [getSource(fileNameWithHyphens), getSource(fileNameWithPeriods)];

console.log(transformed.sort(compare));
// Output: [ '_-file_with_periods_js', '_-file/with/hyphens_js' ]
