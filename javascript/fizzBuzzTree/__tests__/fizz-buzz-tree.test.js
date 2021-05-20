'use strict';

const {kAryTree, fizzBuzzTree} = require('../fizz-buzz-tree.js');
const Node = require('../karyNode.js');


describe('Reverse', () => {
  it('works', () => {

    let tree = new kAryTree();
    tree.root = new Node(4);

    tree.root.children.push(new Node(5));
    tree.root.children.push(new Node(15));
    tree.root.children.push(new Node(3));

    tree.root.children[0].children.push(new Node(3));
    tree.root.children[1].children.push(new Node(76));
    tree.root.children[2].children.push(new Node(21));

    let fizz = fizzBuzzTree(tree);

    expect(fizz.root.children[0].value).toBe('buzz');
    expect(fizz.root.children[1].value).toBe('fizzbuzz');        
    expect(fizz.root.children[2].value).toBe('fizz');
  })

  it('fail case', () => {
    let fizz = fizzBuzzTree('string');
    expect(fizz).toBe('bad');
  })
})