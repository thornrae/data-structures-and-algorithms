'use strict';

let Node = require('../../javascript/linked-list/lib/node.js');

class Queue {
  constructor () {
    this.front = null;
    this.rear = null;
    this.storage = [];
  }

  enqueue(item) {
    let node = new Node(item);

    this.storage.push(node);

    //the value of 1 is in reference to line 15. in the case that the array was empty prior to line 15, then line 15 would be the first and only node which is why you would assign that node to both this.front and this.rear
    if(this.storage.length == 1) {
      this.front = node;
      this.rear = node;
    } else {
      //the the array storage length is greater than 1, assign the node you are currently handling to this.rear only.
      this.rear = node;
    }
  }
  
  dequeue() {
    //shift takes off the value at index 0 aka first value within the array
    //invoke this shift function on the storage array and store in let item.
    let item = this.storage.shift();

    //if length of the array is 0 aka empty, then this.front and this.rear are to be set to null
    if(this.storage.length == 0) {
      this.front = null;
      this.rear = null;
    } else {
      //otherwise, assign this.front to this.storage[0] which is a new value since the original first value/index[0] was shifted off
      this.front = this.storage[0];
      //and, assign this.rear to 
      this.rear = this.storage[this.storage.length - 1];
    }
    return item;
  }

  peek(){

    if(this.storage.length == 0) {
      return null
    } else {
      return this.front;
    }
  }

  isEmpty() {
    if(this.storage.length == 0){
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Queue;


let queue = new Queue();

queue.enqueue(50);
queue.enqueue(40);
queue.enqueue(30);

// let dqed = queue.dequeue();
// console.log('dq', dqed);
// queue.dequeue();
// queue.dequeue();

// let peek = queue.peek();
// console.log('peek', peek);

// let empty = queue.isEmpty();
// console.log('empty..', empty);

console.log('queue', queue);
