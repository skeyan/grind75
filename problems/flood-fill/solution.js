/**
 * LeetCode 733 - Flood Fill
 * https://leetcode.com/problems/flood-fill/
 *
 * Given image, start (sr, sc), and color, flood-fill the connected region
 * of the same color as the start pixel; return the modified image.
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @returns {number[][]}
 */
export function floodFill(image, sr, sc, color) {
  const queue = [[sr, sc]];
  const originalColor = image[sr][sc];

  const isValid = (i, j) => {
    if (i < 0 || i >= image.length) return false;
    if (j < 0 || j >= image[0].length) return false;
    if (image[i][j] !== originalColor) return false;
    return true;
  };

  if (originalColor === color) return image;

  while (queue.length) {
    const [x, y] = queue.shift();
    image[x][y] = color;
    if (isValid(x + 1, y)) queue.push([x + 1, y]);
    if (isValid(x - 1, y)) queue.push([x - 1, y]);
    if (isValid(x, y + 1)) queue.push([x, y + 1]);
    if (isValid(x, y - 1)) queue.push([x, y - 1]);
  }

  return image;
}
