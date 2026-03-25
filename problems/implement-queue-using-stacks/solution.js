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
    this.stack.push(x);
  }

  /**
   * @return {number}
   */
  pop() {
    if (this.reversedStack.length) {
      return this.reversedStack.pop();
    }

    while (this.stack.length) {
      const cur = this.stack.pop();
      this.reversedStack.push(cur);
    }
    return this.reversedStack.pop();
  }

  /**
   * @return {number}
   */
  peek() {
    if (this.reversedStack.length) {
      return this.reversedStack[this.reversedStack.length - 1];
    }

    while (this.stack.length) {
      const cur = this.stack.pop();
      this.reversedStack.push(cur);
    }

    return this.reversedStack[this.reversedStack.length - 1];
  }

  /**
   * @return {boolean}
   */
  empty() {
    return this.stack.length === 0 && this.reversedStack.length === 0;
  }
}
