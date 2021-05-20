//ITERATION 5
let insertionSort = (arr) => {
  let length = arr.length;
  for (let i = 1; i < length; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = current;
  }
  return arr;
};

// let arr = [8,4,23,42,16,15];

// insertionSort(arr);

module.exports = insertionSort;










