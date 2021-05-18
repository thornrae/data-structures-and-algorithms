'use strict';

const Node = require('./treenode.js');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let nodes = [];

    let _walk = (node) => {
      nodes.push(node.value);
      if(node.left) {_walk(node.left); }
      if(node.right) {_walk(node.right); }
    }

    _walk(this.root);

    return nodes;
  }
  //recursive^
  //_walk() is a helper function 
  //walk thru every node in the tree and make small evaluation
  //look at node, go left then right
  //if left, walk to left node 
  //if right, walk to right node 
  //

  inOrder() {
    let nodes = [];
    let _walk = (node) => {
      if(node.left) { _walk(node.left); }
      nodes.push(node.value);
      if(node.right) { _walk(node.right); }
    }
    _walk(this.root);

    return nodes;
  }

  //push is in a different place than preOrder
  //so the difference is the order in which you visit the  node
  //in PREORDER go all the way to the left before adding pushes.
  //inOrder traversal should always be sorted in ascending order

  inOrderWithoutHelper(node, nodes=[]) {
    if(node.left) {this.inOrderWithoutHelper(node.left, nodes); }
    nodes.push(node.value);
    if(node.right) {this.inOrderWithoutHelper(node.right, nodes); }
    return nodes;
  }

  postOrder() {
    let nodes = [];
    let _walk = (node) => {
      if(node.left) {_walk(node.left); }
      if(node.right) {_walk(node.right); }
      nodes.push(node.value);
    }

    _walk(this.root)

    return nodes;
  }

  breadthFirst() {
    let nodes = [];
    let queue = [];

    queue.push(this.root);

    while(queue.length) {
      let currentNode = queue.shift();
      nodes.push(currentNode.value);

      //keep traversing by queuing up the left and right
      if(currentNode.left) { queue.push(currentNode.left);}
      if(currentNode.right) { queue.push(currentNode.right); }
    }
    return nodes;
  }
}


class BinarySearchTree extends BinaryTree {
  add(value) {
    node = new Node(value);
    
    if(this.root == null) { return node};

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

  contain(value) {
    let current = this.value; {
      while(current) {
        if( value === current.value){
          return true
        }
        if (value > current.value) {
          current = current.right;
        } else {
          current = current.left
        }
        return false;
      }
    }

  }
}
module.exports = BinaryTree;