import { describe, it } from "node:test";
import assert from "node:assert";
import { maxSubArray } from "./solution.js";

describe("Maximum Subarray", () => {
  it("returns max sum for classic mixed array", () => {
    assert.strictEqual(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
  });

  it("handles single positive element", () => {
    assert.strictEqual(maxSubArray([1]), 1);
  });

  it("handles single negative element", () => {
    assert.strictEqual(maxSubArray([-1]), -1);
  });

  it("returns least negative when all elements are negative", () => {
    assert.strictEqual(maxSubArray([-2, -1]), -1);
  });

  it("handles all positive", () => {
    assert.strictEqual(maxSubArray([1, 2, 3]), 6);
  });

  it("handles two elements with larger second", () => {
    assert.strictEqual(maxSubArray([-1, 5]), 5);
  });
});
