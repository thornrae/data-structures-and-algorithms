'use strict';

const Node = require('./karyNode.js');

class kAryTree {
  constructor () {
    this.root = null;
  }

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

}