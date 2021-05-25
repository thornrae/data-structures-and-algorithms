'use strict';

function quickSort (arr, left, right) {

  let position = partition(arr, left, right);
  quickSort(arr, left, position -1);
  quickSort(arr, position+1, right);
}

function partition(arr, left, right) {
  let pivot = arr[right];
  let i = left - 1;

  for(j=left; j < right; j++) {
    if(arr[j] <= pivot) {
      i++;
      swap(arr, arr[j], arr[i]);
    }
  }
  swap(arr, right, i + 1);
  return i + 1;
}

function swap(arr, i, low) {
  let temp = arr[i];
  arr[i] = arr[low];
  arr[low] = temp;
}

module.exports = quickSort;
