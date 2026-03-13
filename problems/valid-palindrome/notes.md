# Valid Palindrome

**Difficulty:** Easy  
**Topics:** Two Pointers, String  
**LeetCode:** [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

## Problem

Given a string `s`, return `true` if it is a **palindrome** after converting all uppercase letters to lowercase and removing all non-alphanumeric characters. Otherwise, return `false`.

## Approach: Pre-process + Two Pointers

- Strip the string down to only lowercase alphanumeric characters, then use two pointers from each end moving inward
- If every pair matches, it's a palindrome; one mismatch is enough to return `false`
- **Time Complexity:** \(O(n)\) — one pass to clean, one pass to compare  
- **Space Complexity:** \(O(n)\) — the cleaned string is a new allocation

### Regex Reference

| Pattern | Meaning |
|---|---|
| `/[^a-z0-9]/gi` | Matches any character that is **not** alphanumeric. The `^` inside `[...]` negates the set — so this selects everything *except* lowercase letters and digits. The `g` flag replaces all occurrences; `i` makes it case-insensitive. Used here with `.replace()` to strip non-alphanumeric characters, e.g., `myString.replace(/[^a-z0-9]/gi, "")`. |
| `/[a-z0-9]/i` | Matches a single **alphanumeric** character (no `^` negation). Useful in the no-preprocessing variant below to test individual characters with `.match()` or `.test()`, e.g., `!/[a-z0-9]/i.test(myString)`. |

## Alternative: Two Pointers Without Pre-processing

Instead of building a cleaned copy of the string, skip non-alphanumeric characters in-place during the pointer walk. This avoids the \(O(n)\) extra space:

```javascript
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && !/[a-z0-9]/i.test(s[left]))  left++;
    while (left < right && !/[a-z0-9]/i.test(s[right])) right--;

    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
```

- **Time Complexity:** \(O(n)\) — each character visited at most once  
- **Space Complexity:** \(O(1)\) — no extra string created

## Key Insights

- The pre-processing version is simpler to read and write; the in-place version trades readability for \(O(1)\) space
- `[^a-z0-9]` (with the caret) matches non-alphanumeric; `[a-z0-9]` (without) matches alphanumeric — the `^` inside a character class is what flips the meaning
- Both approaches are \(O(n)\) time, so the choice comes down to whether the extra space matters

## Practice Notes

- _Add your own notes here: edge cases, gotchas, alternative approaches..._
