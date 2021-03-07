'use strict';

const LinkedList = require('./lib/linked-list.js');

let linkedList = new LinkedList();
// console.log('linkedList instance...', linkedList);



linkedList.append('first');
linkedList.append('2')

linkedList.insert('500');
linkedList.insert('a mili');

// let check = linkedList.includes('78')
// console.log(check);

linkedList.toString();

console.log('linkedlist....', linkedList);
