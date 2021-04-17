'use strict';

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

module.exports = Node; 

//this.next is listed in the constructor but will only be used on LL/Stack/Q because tree nodes do not contain this property. 

