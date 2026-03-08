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

- **Time Complexity:** \(O(n + m)\) — each node is visited exactly once  
- **Space Complexity:** \(O(1)\) — no extra data structures; we re-link existing nodes

## Key Insights

- The **dummy head** pattern is essential for linked list problems — it eliminates `if (head === null)` checks and simplifies the code
- After the main loop, at most one list still has remaining nodes; a single `if/else` handles both cases
- This is the same merge step used inside **merge sort**, making it a foundational building block
- A recursive approach also works (`O(n + m)` time but `O(n + m)` stack space), so the iterative version is preferred for constant space

## Practice Notes

- _Add your own notes here: edge cases, gotchas, alternative approaches..._
