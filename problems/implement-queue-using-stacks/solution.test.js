import { describe, it } from "node:test";
import assert from "node:assert";
import { MyQueue } from "./solution.js";

describe("Implement Queue using Stacks", () => {
  it("maintains FIFO order for push then pop", () => {
    const q = new MyQueue();
    q.push(1);
    q.push(2);
    assert.strictEqual(q.pop(), 1);
    assert.strictEqual(q.pop(), 2);
    assert.strictEqual(q.empty(), true);
  });

  it("peek returns front without removing", () => {
    const q = new MyQueue();
    q.push(1);
    q.push(2);
    assert.strictEqual(q.peek(), 1);
    assert.strictEqual(q.peek(), 1);
    assert.strictEqual(q.pop(), 1);
    assert.strictEqual(q.peek(), 2);
  });

  it("empty is true for a new queue", () => {
    assert.strictEqual(new MyQueue().empty(), true);
  });

  it("handles interleaved push and pop", () => {
    const q = new MyQueue();
    q.push(1);
    q.push(2);
    assert.strictEqual(q.peek(), 1);
    q.push(3);
    assert.strictEqual(q.pop(), 1);
    assert.strictEqual(q.pop(), 2);
    assert.strictEqual(q.pop(), 3);
    assert.strictEqual(q.empty(), true);
  });

  it("single element push pop", () => {
    const q = new MyQueue();
    q.push(42);
    assert.strictEqual(q.empty(), false);
    assert.strictEqual(q.pop(), 42);
    assert.strictEqual(q.empty(), true);
  });
});
