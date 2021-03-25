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
  it('should ')

})
