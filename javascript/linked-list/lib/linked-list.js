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
    }
  }

  includes(value) {
    let current = this.head;
    while(current){
      if(current.value === value){
        return true;
      } 
      current = current.next
    }
    return false;
  }

  toString(){
    let current = this.head;
    
    while(current){
      if(current.value){
        let currentValue = current.value;
        let string1 = `${currentValue} ->`
        // console.log('string1....', string1);
      }
      current = current.next;
      return string1;


      // if(!current.value){
      //   let listEnd = current.value;
      //   let string2 = `${listEnd}`
      //   console.log('string2....', string2);
      // }
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