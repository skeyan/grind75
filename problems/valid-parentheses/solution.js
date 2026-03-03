/**
 * LeetCode 20 - Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 *
 * Determine if a string of brackets is valid using a stack and
 * a closing→opening bracket map.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
export function isValid(s) {
  const m = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    if (current in m) {
      const top = stack.pop();
      if (top !== m[current]) {
        return false;
      }
    } else {
      stack.push(current);
    }
  }

  return stack.length === 0;
}

