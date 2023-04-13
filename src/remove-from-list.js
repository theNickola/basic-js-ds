const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList( l, k ) {
  let pair = [];
  pair.push(l.value);
  let current = l.next;
  while(current) {
    pair.push(current.value);
    current = current.next;
  }
  pair = pair.filter((e) => e !== k);
  let result = new ListNode(pair[pair.length-1]);
  for(let i = pair.length - 2; i>=0; i--) {
    let newPair = new ListNode(pair[i]);
    newPair.next = result;
    result = newPair;
  }
  return result;
}

module.exports = {
  removeKFromList
};
