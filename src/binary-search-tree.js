const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  root() {//throw new NotImplementedError('Not implemented');
    return this.root;
  }

  add(data) {//throw new NotImplementedError('Not implemented');
    function addWithin(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.value === value) {
        return node;
      }
      
      if (value < node.value) {
        node.left = addWithin(node.left, value);
      } 
      else {
        node.right = addWithin(node.right, value);
      }
      
      return node;
    }

    this.root = addWithin(this.root, data);
  }

  has(data) {//throw new NotImplementedError('Not implemented');
    function searchWithin(node, value) {
      if (!node) 
        return false;

      if (node.data === value) 
        return true;

      return value < node.data ?
        searchWithin(node.left, value):
        searchWithin(node.right, value);
    }

    return searchWithin(this.root, data);
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {//throw new NotImplementedError('Not implemented');
    function removeNode(node, value) {
      if (!node) 
        return null;

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      } 
      else if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      } 
      else {
        if (!node.left && !node.right) 
          return null;

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.value = minFromRight.value;
        node.right = removeNode(node.right, minFromRight.value);

        return node;
      }
    }

    this.root = removeNode(this.root, data);
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};