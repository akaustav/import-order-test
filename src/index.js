/* eslint-disable simple-import-sort/imports */
import { fileNameWithHyphens } from './file-with-hyphens.js';
import { fileNameWithPeriods } from './file.with.periods.js';
import { collator, compare, utf16Comparator } from './sort-utils.js';
import { getSource } from './transform.js';

function testFileNames() {
  const fileNames = [fileNameWithHyphens, fileNameWithPeriods];

  console.log(fileNames.sort(compare));
  // Output: [ './file-with-hyphens.js', './file.with.periods.js' ]

  const transformed = [
    getSource(fileNameWithHyphens),
    getSource(fileNameWithPeriods),
  ];

  console.log(transformed.sort(compare));
  // Output: [ '_-file_with_periods_js', '_-file/with/hyphens_js' ]
}

function sortSpecialCharacters() {
  const specials = [
    '!', '"', '#', '$', '%', '&',
    "'", '(', ')', '*', '+', ',',
    '-', '.', '/', ':', ';', '<',
    '=', '>', '?', '@', '[', '\\',
    ']', '^', '_', '`', '{', '|',
    '}', '~'
  ];
  // const specials = [ ',', '-', '.', '/', '_' ];

  const utf16Sort = [...specials].sort(utf16Comparator);
  const intlSort = [...specials].sort(collator.compare);

  console.log('original', specials);

  console.log('utf16Sort', utf16Sort);
  // Output:

  // utf16Sort [
  //   '!', '"', '#', '$', '%', '&',
  //   "'", '(', ')', '*', '+', ',',
  //   '-', '.', '/', ':', ';', '<',
  //   '=', '>', '?', '@', '[', '\\',
  //   ']', '^', '_', '`', '{', '|',
  //   '}', '~'
  // ]

  // utf16Sort [ ',', '-', '.', '/', '_' ]

  console.log('intlSort', intlSort);
  // Output:

  // intlSort [
  //   '_', '-',  ',', ';', ':', '!',
  //   '?', '.',  "'", '"', '(', ')',
  //   '[', ']',  '{', '}', '@', '*',
  //   '/', '\\', '&', '#', '%', '`',
  //   '^', '+',  '<', '=', '>', '|',
  //   '~', '$'
  // ]

  // intlSort [ '_', '-', ',', '.', '/' ]

  // Summary:
  // utf-16: , - . / _
  // intl:   _ - , . /
  // hack?   . / , _ -
}

// Enable one method to test
// testFileNames();
sortSpecialCharacters();
