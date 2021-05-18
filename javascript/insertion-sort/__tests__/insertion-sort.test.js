'use strict';

const insertionSort = require('../insertion-sort.js');

describe('**** INSERTION SORT ****', () => {
  it('Insertion Sort Test Passed', () => {
    let array = [8,4,23,42,16,15];
    let expected = [4,8,15,16,23,42];
    let runit = insertionSort(array);

    expect(runit).toEqual(expected);

  });
});

