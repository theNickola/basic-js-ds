const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootElem = null;
  }

  root() {//throw new NotImplementedError('Not implemented');
    return this.rootElem;
  }

  add(data) {//throw new NotImplementedError('Not implemented');
    function addWithin(node, value) {
      if(!node)
        return new Node(value);

      if(node.data === value)
        return node;
      
      if(value < node.data) 
        node.left = addWithin(node.left, value);
      else
        node.right = addWithin(node.right, value);
      
      return node;
    }

    this.rootElem = addWithin(this.rootElem, data);
  }

  has(data) {//throw new NotImplementedError('Not implemented');
    function searchWithin(node, value) {
      if(!node) 
        return false;

      if(node.data === value) 
        return true;

      return value < node.data ? searchWithin(node.left, value) : searchWithin(node.right, value);
    }

    return searchWithin(this.rootElem, data);
  }

  find(data) {//throw new NotImplementedError('Not implemented');
    function findWithin(node, value) {
      if (!node) 
        return null;

      if (node.data === value) 
        return node;

      if (node.data < value) {
        return findWithin(node.right, value);
      } 
      else {
        return findWithin(node.left, value);
      }
    }
    return findWithin(this.rootElem, data);
  }

  remove(data) {//throw new NotImplementedError('Not implemented');
    function removeNode(node, value) {
      if(!node) 
        return null;

      if(value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      } 
      else if(value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      } 
      else {
        if(!node.left && !node.right) 
          return null;

        if(!node.left) {
          node = node.right;
          return node;
        }

        if(!node.right) {
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while(minFromRight.left) {
          minFromRight = minFromRight.left;
        }

        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);

        return node;
      }
    }

    this.rootElem = removeNode(this.rootElem, data);
  }

  min() {//throw new NotImplementedError('Not implemented');
    if(!this.rootElem)
      return null;
    
    let node = this.rootElem;
    while(node.left)
      node = node.left;
    
    return node.data;
  }

  max() {//throw new NotImplementedError('Not implemented');
    if(!this.rootElem)
      return null;

    let node = this.rootElem;
    while(node.right)
      node = node.right;
    
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};