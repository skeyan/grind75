import { describe, it } from "node:test";
import assert from "node:assert";
import { insert } from "./solution.js";

describe("Insert Interval", () => {
  it("inserts into empty intervals", () => {
    assert.deepStrictEqual(insert([], [2, 5]), [[2, 5]]);
  });

  it("inserts at beginning with no overlap", () => {
    assert.deepStrictEqual(insert([[3, 5], [6, 9]], [1, 2]), [[1, 2], [3, 5], [6, 9]]);
  });

  it("inserts at end with no overlap", () => {
    assert.deepStrictEqual(insert([[1, 3], [6, 9]], [10, 12]), [[1, 3], [6, 9], [10, 12]]);
  });

  it("merges single overlapping interval", () => {
    assert.deepStrictEqual(insert([[1, 3], [6, 9]], [2, 5]), [[1, 5], [6, 9]]);
  });

  it("merges multiple overlapping intervals", () => {
    assert.deepStrictEqual(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]), [[1, 2], [3, 10], [12, 16]]);
  });

  it("handles new interval engulfing existing", () => {
    assert.deepStrictEqual(insert([[1, 5]], [2, 3]), [[1, 5]]);
  });

  it("handles new interval engulfing multiple", () => {
    assert.deepStrictEqual(insert([[1, 3], [4, 6], [7, 9]], [2, 8]), [[1, 9]]);
  });

  it("handles LeetCode example 1", () => {
    assert.deepStrictEqual(insert([[1, 3], [6, 9]], [2, 5]), [[1, 5], [6, 9]]);
  });

  it("handles LeetCode example 2", () => {
    assert.deepStrictEqual(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]), [[1, 2], [3, 10], [12, 16]]);
  });
});
