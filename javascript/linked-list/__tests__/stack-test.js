'use strict';

const Stack = require('../../stacksAndQueues/stack.js')
const Node = require('../lib/node.js');

describe('**** STACKS ****', () => {
  //PUSH
  it('should create a new node and push to top of stack', () => {
    let stack = new Stack();
    let string = 'test value';
    stack.push(string);
    let node = new Node(string);
    expect(stack.storage).toContainEqual(node);
  })

  //POP
  it('should remove the item at the top of the stack', () => {
    let stack = new Stack();
    stack.storage = ['skittles', 'starbusts'];
    let test = stack.pop()

    expect(stack.top)[stack.storage.length -1];
  })

  //PEEK
  it('should return the item at top of stack', () => {
    let stack = new Stack();
    let test = stack.peek();
    expect(test).toBeNull;

  })

  //ISEMPTY
  it('should return true if empty, false if not empty', () => {
    let stack = new Stack();
    let test = stack.isEmpty();
    expect(test).toReturnTruthy;
  })
})


