'use strict';

let LinkedList = require('../linked-list/lib/linked-list.js');

class HashMap {

  constructor(size) {
    this.size = size;
    this.map = new Array(size).fill();
  }

  //Returns a number that equates to bucket idex
  hash(key) {
    let sumOfKeyLetters = key.split('').reduce( (acc, val) => {
      let cc = val.charCodeAt(0);
      let num = acc + cc;
      return num;
    },0);

    let hash = sumOfKeyLetters * 599 % this.size;

    return hash;
  }

  //Adds key/value pair to HT
  set(key, value) {
    let hash = this.hash(key);

    if( !this.map[hash] ) {
      this.map[hash] = new LinkedList();
    }

    let entry = { [key]: value };

    this.map[hash].append(entry);
  }

  //Return the value for the key from the HT
  get(key) {
    //hash the key
    let hash = this.hash(key);
    //get the value of this.map[hash] store in varialbe do contains w linkedlist and this value
    console.log(hash);
    //traverse the linked list and find the actual one (bc collisions)
  //   //return what we find
  }

  //Return a bool is its in HT
  // has(key){
  //hash the key
  //get the value of this.map[hash]
  //traverse the linked list and find the action one (collisions)
  //return true or false
  // }
}

let people = new HashMap(16);
people.set('Anne', 'Student');
people.set('Taylor', 'Student');
people.set('Michael', 'Student');
people.set('Mark the avenger', 'Student');
people.set('TJ', 'Student');
people.set('Jenner', 'Student');
people.set('Nassir', 'Student');
people.set('Dawit', 'Student');
people.set('Rosie', 'Dog');

module.exports = HashMap;
