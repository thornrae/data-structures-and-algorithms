'use strict'

const binarySearch = require('../array-binary-search.js');



describe('**** Binary Search ****', () => {

  it('Binary Search Passed', () => {
    let myArray = [1,2,3,4,5,6,7,8,9];
    let myValue = 3;
    let expected = 2
    let pleaseWork = binarySearch(myArray, myValue);
    expect(pleaseWork).toEqual(expected);
  })
})
