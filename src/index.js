import { fileNameWithHyphens } from './abc-def.js';
import { fileNameWithPeriods } from './abc.def.js';
import { compare } from './sort-utils.js';

const fileNames = [fileNameWithHyphens, fileNameWithPeriods];

console.log(fileNames.sort(compare));
