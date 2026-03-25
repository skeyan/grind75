# Merge Two Sorted Lists

**Difficulty:** Easy  
**Topics:** Linked List, Recursion  
**LeetCode:** [21. Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

## Problem

Given the heads of two sorted linked lists `list1` and `list2`, merge them into one **sorted** list made by splicing together the nodes of the two lists. Return the head of the merged list.

## Approach: Dummy Head with Iterative Merge

- Create a **dummy head node** to simplify edge cases — avoids special-casing which list's first node becomes the new head
- Maintain a `traversePtr` that always points to the tail of the merged list built so far
- Walk both lists simultaneously:
  - Compare the current nodes of `list1` and `list2`
  - Append the smaller node to `traversePtr.next` and advance that list's pointer
- When one list is exhausted, attach the remainder of the other list directly (it's already sorted)
- Return `mergedListHead.next` to skip the dummy node

- **Time Complexity:** O(n + m) - Each node from either list is appended once (n and m are list lengths).
- **Space Complexity:** O(1) - Only pointer rewiring; no auxiliary containers.

## Key Insights

- The **dummy head** pattern is essential for linked list problems — it eliminates `if (head === null)` checks and simplifies the code
- After the main loop, at most one list still has remaining nodes; a single `if/else` handles both cases
- This is the same merge step used inside **merge sort**, making it a foundational building block
- A recursive approach also works (same time but O(n + m) call-stack space), so the iterative version is preferred for constant extra space

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