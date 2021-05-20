'use strict';

const mergeSort = require('../merge-sort.js');

describe('*** MERGE SORT ***', () => {
  it('Merge Sort Test Passed', () =>{
    let array = [8,4,23,42,16,15];
    let expected = [4,8,15,16,23,42];
    let runit = mergeSort(array);

    expect(runit).toEqual(expected);
  });
});

