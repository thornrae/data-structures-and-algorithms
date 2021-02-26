'use strict';

const insertShiftArray = require('../array-shift.js');



describe('**** Array Shift ****', () => {

  it('Array Shift Passed', () => {
    let myArray = [1,2,3,4];
    let myValue = 'cat';
    let expected = [1,2,'cat',3,4];
    let pleaseWork = insertShiftArray(myArray, myValue);
    expect(pleaseWork).toEqual(expected);
  })
})


