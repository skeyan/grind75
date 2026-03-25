/**
 * LeetCode 232 - Implement Queue using Stacks
 * https://leetcode.com/problems/implement-queue-using-stacks/
 *
 * FIFO queue using two stacks: inbox (stack) and outbox (reversedStack).
 */

export class MyQueue {
  constructor() {
    /** @type {number[]} */
    this.stack = [];
    /** @type {number[]} */
    this.reversedStack = [];
  }

  /**
   * @param {number} x
   * @return {void}
   */
  push(x) {
    this.stack.push(x); // `push`
  }

  /**
   * @return {number}
   */
  pop() {
    if (this.reversedStack.length) {
      // `!isEmpty`
      return this.reversedStack.pop(); // `pop`
    }

    while (this.stack.length) { // `!isEmpty`
      const cur = this.stack.pop(); // `pop`
      this.reversedStack.push(cur); // `push`
    }
    return this.reversedStack.pop(); // `pop`
  }

  /**
   * @return {number}
   */
  peek() {
    if (this.reversedStack.length) { // `!isEmpty`
      return this.reversedStack[this.reversedStack.length - 1]; // `peek`
    }

    while (this.stack.length) { // `!isEmpty`
      const cur = this.stack.pop(); // `pop`
      this.reversedStack.push(cur); // `push`
    }

    return this.reversedStack[this.reversedStack.length - 1]; // `peek`
  }

  /**
   * @return {boolean}
   */
  empty() {
    return this.stack.length === 0 && this.reversedStack.length === 0; // `isEmpty`
  }
}
