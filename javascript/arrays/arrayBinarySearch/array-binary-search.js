'use strict';

let binarySearch = (arr, val) => {
  var left = 0;
  var right = arr.length - 1;
  while (left <= right) {
    var midpoint = Math.floor((left + right) / 2);
    if (arr[midpoint] === val) {
      return parseInt(midpoint);
    } else if (val < arr[midpoint]) {
      right = midpoint - 1;
    } else {
      left = midpoint + 1;
    }
  }
  return '-1';
}

module.exports = binarySearch;