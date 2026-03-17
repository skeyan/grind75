import { describe, it } from "node:test";
import assert from "node:assert";
import { search } from "./solution.js";

describe("Binary Search", () => {
  it("returns index when target is in the middle", () => {
    assert.strictEqual(search([-1, 0, 3, 5, 9, 12], 9), 4);
  });

  it("returns -1 when target is not in array", () => {
    assert.strictEqual(search([-1, 0, 3, 5, 9, 12], 2), -1);
  });

  it("returns index when target is at start", () => {
    assert.strictEqual(search([2, 5, 8], 2), 0);
  });

  it("returns index when target is at end", () => {
    assert.strictEqual(search([2, 5, 8], 8), 2);
  });

  it("handles single-element array when target exists", () => {
    assert.strictEqual(search([7], 7), 0);
  });

  it("handles single-element array when target does not exist", () => {
    assert.strictEqual(search([7], 3), -1);
  });

  it("returns -1 for empty array", () => {
    assert.strictEqual(search([], 1), -1);
  });

  it("handles two-element array", () => {
    assert.strictEqual(search([1, 2], 1), 0);
    assert.strictEqual(search([1, 2], 2), 1);
    assert.strictEqual(search([1, 2], 3), -1);
  });
});
