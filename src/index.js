/* eslint-disable simple-import-sort/imports */
import { fileNameWithHyphens } from './file-with-hyphens.js';
import { fileNameWithPeriods } from './file.with.periods.js';
import { compare } from './sort-utils.js';

const fileNames = [fileNameWithHyphens, fileNameWithPeriods];

console.log(fileNames.sort(compare));
// Output: [ './file-with-hyphens.js', './file.with.periods.js' ]
