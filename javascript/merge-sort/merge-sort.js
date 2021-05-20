'use strict';

const mergeSort = array => {
  if(array.length < 2) return array;

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);
  console.log('split: ', left, right);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  console.log('left params: ', left, 'right params: ', right);
  const result = [];
  while(left.length && right.length) {

    if(left[0] <= right[0]) {
      console.log('@ 0: ', left, right);
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while(left.length) result.push(left.shift());
  while(right.length) result.push(right.shift());
  console.log('result: ', result);
  return result;
};

module.exports = mergeSort;
