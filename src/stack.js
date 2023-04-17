const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  values;
  constructor() {
    this.values = [];
  }

  push(element) {
    //throw new NotImplementedError('Not implemented');
    this.values.push(element);
  }

  pop() {
    //throw new NotImplementedError('Not implemented');
    return this.values.pop();
  }

  peek() {
    //throw new NotImplementedError('Not implemented');
    return this.values[this.values.length - 1];
  }
}

module.exports = {
  Stack
};
