'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  append(value) {
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    }else if (this.head) {
      let current = this.head;
      
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }

  insert(value){
    let node = new Node(value);

    if(!this.head) {
      this.head = node;
    } else if(this.head) {
      let oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
      // let oldHead = this.head;
      // this.head.value = node.value;
      // this.head.next = node.next;

  }
}
}

module.exports = LinkedList;



// insert(value){
//   let node = new Node(value);

//   if(!this.head) {
//     this.head = node;
//   } else if(this.head) {
//     let headNext = this.head.next;
//     if(headNext) {
//       let oldnext = headNext;
//       headNext = node;
//       node.next = oldnext;
//     } else {
//       headNext = node;
//     }
//   }
// }