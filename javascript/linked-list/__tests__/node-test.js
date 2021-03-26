'use strict';

const Node = require('../lib/node.js');

describe('**** NODE CLASS ****', () => {
  it('can create a new node', () => {
    let val = 'test';
    let node = new Node(val);
  
    expect(node.value).toEqual(val);
    expect(node.next).toBeNull();
  })
})