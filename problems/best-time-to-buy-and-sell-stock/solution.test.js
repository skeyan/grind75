import { describe, it } from "node:test";
import assert from "node:assert";
import { maxProfit } from "./solution.js";

describe("Best Time to Buy and Sell Stock", () => {
  it("returns max profit for standard case", () => {
    assert.strictEqual(maxProfit([7, 1, 5, 3, 6, 4]), 5);
  });

  it("returns 0 when prices only decrease", () => {
    assert.strictEqual(maxProfit([7, 6, 4, 3, 1]), 0);
  });

  it("handles two-element profit", () => {
    assert.strictEqual(maxProfit([1, 2]), 1);
  });

  it("handles single-element array", () => {
    assert.strictEqual(maxProfit([5]), 0);
  });

  it("handles buy on first day, sell on last day", () => {
    assert.strictEqual(maxProfit([1, 3, 5, 7, 9]), 8);
  });
});
