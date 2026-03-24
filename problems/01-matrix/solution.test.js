import { describe, it } from "node:test";
import assert from "node:assert";
import { updateMatrix } from "./solution.js";

function deepEqual(actual, expected) {
  assert.deepStrictEqual(actual, expected);
}

describe("01 Matrix", () => {
  it("computes distances for LeetCode example", () => {
    const mat = [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1],
    ];
    deepEqual(updateMatrix(mat), [
      [0, 0, 0],
      [0, 1, 0],
      [1, 2, 1],
    ]);
  });

  it("all zeros stays zero", () => {
    deepEqual(
      updateMatrix([
        [0, 0],
        [0, 0],
      ]),
      [
        [0, 0],
        [0, 0],
      ],
    );
  });

  it("does not mutate input matrix", () => {
    const mat = [
      [0, 1],
      [1, 1],
    ];
    const copy = mat.map((row) => [...row]);
    updateMatrix(mat);
    deepEqual(mat, copy);
  });

  it("single cell zero", () => {
    deepEqual(updateMatrix([[0]]), [[0]]);
  });

  it("single row", () => {
    deepEqual(updateMatrix([[0, 1, 1, 0]]), [[0, 1, 1, 0]]);
  });
});
