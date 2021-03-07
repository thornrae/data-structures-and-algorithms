'use strict';

const LinkedList = require('../lib/linked-list.js');
// Require our linked list implementation

describe('**** LINKED LIST ****', () => {
  it('should create an empty list on instantiation', () => {
    let list = new LinkedList();
    expect(list.head).toEqual(null);
  });

  it('should add items to list', () => {
    let list = new LinkedList();
    let test1 = 'first';
    let test2 = 'second';

    list.append(test1);
    expect(list.head.value).toEqual('first');

    list.append(test2);
    expect(list.head.next).toBeNull;
  })

  it('should return a boolean', () => {
    let list = new LinkedList();
    let test = 'test';

    list.includes(test);

    expect(list.head.value).toBeTruthy;
  })
});
