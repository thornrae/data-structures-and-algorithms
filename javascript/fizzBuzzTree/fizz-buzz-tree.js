'use strict';

const Node = require('./karyNode.js');

class kAryTree {
  constructor () {
    this.root = null;
  }

  

  add(value) {
    const node = new Node(value);
    
    if(this.root === null) { this.root = node; return};

    let parent = null;
    let current = this.root;

    while(current != null){
      parent = current;
      if(current.value <= node.value) {
        current = current.right;
      } else {
        current = current.left;
      }
    }
    if(parent.value <= node.value){
      parent.right = node;
    } else {
      parent.left = node;
    }
    
  }

}

function fizzBuzzTree(tree) {

  // traverse() {
  let newTree = new kAryTree();

  let _walk = (node, newTreeRoot) => {
    console.log(node);

    if(newTreeRoot === null){
      newTreeRoot = new Node(node.value);
    }
    console.log(node.children);
    for(let i=0; i<node.children.length; i++) {
      //this is where we put the original trees values in to the new tree children this
      // if - oldtree[i]/3 else same shit for 5 then push new node with fizz or buzz value if fizzbuzz else do what we have now 
      newTreeRoot.children.push(new Node(node.children[i].value));
      console.log('nodechildren@i', node.children[i]);
      _walk(node.children[i], newTreeRoot.children[i]);
    }
    // node.children.forEach(child => {
    // })
    // if(node.left) { _walk(node.left); }
    // nodes.push(node.value);
    // if(node.right) { _walk(node.right); }
  };
  _walk(tree.root, newTree.root);

  return newTree;
  // }
  // return tree;

}

module.exports = {kAryTree, fizzBuzzTree};