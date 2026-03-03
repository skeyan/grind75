import { describe, it } from "node:test";
import assert from "node:assert";
import { twoSum } from "./solution.js";

describe("Two Sum", () => {
  it("returns correct indices for valid pair", () => {
    assert.deepStrictEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  });

  it("handles array with two elements", () => {
    assert.deepStrictEqual(twoSum([3, 3], 6), [0, 1]);
  });

  it("handles negative numbers", () => {
    assert.deepStrictEqual(twoSum([-1, -2, -3, -4], -6), [1, 3]);
  });

  it("returns empty array when no solution exists", () => {
    assert.deepStrictEqual(twoSum([1, 2, 3], 10), []);
  });
});
