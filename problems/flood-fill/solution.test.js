import { describe, it } from "node:test";
import assert from "node:assert";
import { floodFill } from "./solution.js";

function deepEqual(actual, expected) {
  assert.deepStrictEqual(actual, expected);
}

describe("Flood Fill", () => {
  it("fills connected region from start pixel", () => {
    const image = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ];
    deepEqual(floodFill(image, 1, 1, 2), [
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ]);
  });

  it("returns same image when new color equals original color", () => {
    const image = [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ];
    const expected = image.map((row) => [...row]);
    deepEqual(floodFill(image, 1, 1, 1), expected);
  });

  it("single pixel image changes to new color", () => {
    const image = [[0]];
    deepEqual(floodFill(image, 0, 0, 2), [[2]]);
  });

  it("single pixel with same color returns unchanged", () => {
    const image = [[5]];
    deepEqual(floodFill(image, 0, 0, 5), [[5]]);
  });

  it("fills entire grid when all same color", () => {
    const image = [
      [1, 1],
      [1, 1],
    ];
    deepEqual(floodFill(image, 0, 0, 3), [
      [3, 3],
      [3, 3],
    ]);
  });

  it("fills only start pixel when no neighbors match", () => {
    const image = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    deepEqual(floodFill(image, 1, 1, 0), [
      [1, 2, 3],
      [4, 0, 6],
      [7, 8, 9],
    ]);
  });
});
