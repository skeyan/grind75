/**
 * LeetCode 542 - 01 Matrix
 * https://leetcode.com/problems/01-matrix/
 *
 * For each cell, return the distance to the nearest 0 (Manhattan / 4-dir).
 */

/**
 * @param {number[][]} mat
 * @returns {number[][]}
 */
export function updateMatrix(mat) {
  const rows = mat.length;
  const cols = mat[0].length;
  const distanceMap = Array.from({ length: rows }, () =>
    new Array(cols).fill(-1),
  );

  const queue = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 0) {
        queue.push([i, j]);
        distanceMap[i][j] = 0;
      }
    }
  }

  while (queue.length) {
    const [x, y] = queue.shift();

    if (x + 1 < rows && distanceMap[x + 1][y] === -1) {
      distanceMap[x + 1][y] = distanceMap[x][y] + 1;
      queue.push([x + 1, y]);
    }
    if (x - 1 >= 0 && distanceMap[x - 1][y] === -1) {
      distanceMap[x - 1][y] = distanceMap[x][y] + 1;
      queue.push([x - 1, y]);
    }
    if (y + 1 < cols && distanceMap[x][y + 1] === -1) {
      distanceMap[x][y + 1] = distanceMap[x][y] + 1;
      queue.push([x, y + 1]);
    }
    if (y - 1 >= 0 && distanceMap[x][y - 1] === -1) {
      distanceMap[x][y - 1] = distanceMap[x][y] + 1;
      queue.push([x, y - 1]);
    }
  }

  return distanceMap;
}
