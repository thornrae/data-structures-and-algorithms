'use strict';

const Tree = require('../tree.js');
const Node = require('../treenode.js');

describe('Tree', () => {
  const tree = new BinarySearchTree(); 

  beforeAll( () => {
    const nine = new Node(9);
    const four = new Node(4);
    const three = new Node(3);
    const six = new Node(6);
    const twelve = new Node(12);
    const eleven = new Node(22);

    tree.root = nine;
    nine.left = four;
    nine.right = twelve;

  })
})