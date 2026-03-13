/**
 * LeetCode 125 - Valid Palindrome
 * https://leetcode.com/problems/valid-palindrome/
 *
 * Given a string s, return true if it is a palindrome after converting
 * to lowercase and removing all non-alphanumeric characters.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
export function isPalindrome(s) {
  const stripped = processString(s);
  let left = 0;
  let right = stripped.length - 1;

  while (left < right) {
    if (stripped[left] !== stripped[right]) {
      return false;
    }

    left += 1;
    right -= 1;
  }

  return true;
}

function processString(s) {
  s = s.toLowerCase();
  s = s.replace(/[^a-z0-9]/gi, "");
  return s;
}
