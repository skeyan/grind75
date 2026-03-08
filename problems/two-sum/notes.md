# Two Sum

**Difficulty:** Easy  
**Topics:** Array, Hash Table  
**LeetCode:** [1. Two Sum](https://leetcode.com/problems/two-sum/)

## Problem

Given an array of integers `nums` and an integer `target`, return *indices of the two numbers such that they add up to `target`*.

## Approach: Hash Map (One Pass)

- Iterate through array, for each num compute `complement = target - num`
- Use Map to store `{ num → index }` as we go
- If complement already in map → return `[map.get(complement), i]`
- Time: O(n), Space: O(n)

## Key Insights

- Brute force is O(n²) — two nested loops
- Trade space for time: hash map lets us do O(1) lookup

## Practice Notes

- _Add your own notes here: edge cases, gotchas, alternative approaches..._

### Recursive Approach

Each call answers exactly one thing: **which node comes first?**

Once it picks the smaller node, it sets that node's `next` to whatever the rest of the merge produces — delegating the remaining work to the next recursive call.

```javascript
var mergeTwoLists = function(list1, list2) {
    if (list1 === null) return list2;
    if (list2 === null) return list1;

    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};
```

For `[1,3] + [2,4]`:

```
merge(1→3, 2→4)          picks 1, needs to know what comes after 1
  merge(3, 2→4)          picks 2, needs to know what comes after 2
    merge(3, 4)          picks 3, needs to know what comes after 3
      merge(null, 4)     list1 exhausted → return 4
    3.next = 4  → returns 3→4
  2.next = 3→4 → returns 2→3→4
1.next = 2→3→4 → returns 1→2→3→4
```

The list gets built on the **way back up** from the base case — not on the way down.

| | Time | Space |
|---|---|---|
| Iterative | O(n + m) | **O(1)** |
| Recursive | O(n + m) | **O(n + m)** stack frames |

The recursive version can stack overflow on very long lists.