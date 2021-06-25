'use strict';

let insertShiftArray = (arr, insert) => {
  let length = arr.length;

  let newArray = [];

  let midpoint = Math.floor(length/2);
  // console.log('midpoint', midpoint)
  for(var i=0; i < arr.length; i++){
    // console.log('index:', i, 'midpoint:', midpoint)
    if(i < midpoint){
      newArray.push(arr[i]);
    } else if ( i === midpoint){
      newArray.push(insert);
      newArray.push(arr[i]);
    } else if ( i > midpoint){
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

module.exports = insertShiftArray;
