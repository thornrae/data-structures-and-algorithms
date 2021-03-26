'use strict';

const Queue = require('../../stacksAndQueues/queue.js');
const Node = require('../lib/node.js');

describe('**** QUEUES ****', () => {
  //enqueue
  it('should create new node and push to queue storage', () => {
    let queue = new Queue();
    let string = 'test value'

    queue.enqueue(string);

   let node = new Node(string);

    expect(queue.storage).toContainEqual(node);
  })

  //dequeue
  it('should remove the last item in the queue', () => {
    let queue = new Queue();
    queue.storage = ['cat', 'dog'];
    let test = queue.dequeue()
    // console.log(returnItem)
    expect(test).toContain('cat');
  })

  //peek
  it('should return this.front', () => {
    let queue = new Queue();

    let test = queue.peek();

    expect(test).toBeNull();
  })

  //isempty
  it('should return true if empty, false if not empty', () => {
    let queue = new Queue();

    let test = queue.isEmpty();

    expect(test).toReturnTruthy;

  })

})
