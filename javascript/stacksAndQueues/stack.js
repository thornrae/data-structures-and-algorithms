'use strict';

let Node = require('../../javascript/linked-list/lib/node.js');


class Stack {
  constructor () {
    this.top = null;
    this.storage = [];
  }

  push(item) {
    //creates a new node
    let node = new Node(item);

    // if(this.storage.length == 0) {
    //   this.top = node;
    // }

    //add created node to storage
    this.storage.push(node);
    //assign created node to this.top
    this.top = node;
  }

  pop() {
    //pop last item from storage and store as let item
    let item = this.storage.pop();

    // this.top = !this.storage.length ? null : this.storage[this.storage.length - 1];

    //this is the if else statement of the above ternary used to reassign this.top
    //if statement signifies edge case in the case that we have an empty array AKA empty stack with no top. This would happen if the array has one item and you just popped it, leaving you with an empty array
    if(!this.storage.length) {
      this.top = null;
    } else {
      //if you're array storage is not empty, then determine at which index in the array is your new this.top by taking the length of the array and subtracting by 1. This.storage.length -1 evaluates to a NUMBER. So  this.storage[1] => should look familiar
      this.top = this.storage[this.storage.length -1] 
    }
  }

  peek() {
    if(this.storage.length >= 1){
      return this.top;
    } else {
      return 'shits empty';
    }
  }

  isEmpty() {
    if(this.storage.length >= 1){
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Stack;

// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);

// stack.pop();
// stack.pop();
// stack.pop();

// let peek = stack.peek();
// console.log('peek', peek);


// let empty = stack.isEmpty();
// console.log('empty', empty);
// console.log('stack', stack);