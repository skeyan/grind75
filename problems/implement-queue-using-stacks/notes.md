# Implement Queue using Stacks

**Difficulty:** Easy  
**Topics:** Stack, Design, Queue  
**LeetCode:** [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)

## Problem

Implement a first-in-first-out (FIFO) queue using only two stacks. The queue should support `push`, `pop`, `peek`, and `empty`.

Returned values from `pop` and `peek` are defined to be valid only when the queue is non-empty for that operation.

## Approach: Two stacks (input / output)

- Treat one array as the **inbox** (`stack`): new elements are always pushed here, matching normal queue `push` behavior at the “back.”
- Treat the other as the **outbox** (`reversedStack`): it holds elements in order so that the front of the queue is at the end of this array (stack top).
- On `pop` or `peek`, if the outbox is empty, **drain** the inbox into the outbox (pop from inbox, push onto outbox). That reverses order once so the oldest inbox element becomes the outbox top. Then pop or read the outbox top.
- `empty` is true only when both stacks are length zero.

Amortized cost is good: each element moves from inbox to outbox at most once.

### Key details / gotchas

- If you only used one stack, `pop` / `peek` at the “front” would not be O(1) amortized without the second stack (See Practice Notes for the thought process)
- Do not move data unnecessarily: only transfer from inbox to outbox when the outbox is empty and you need the front.

- **Time Complexity:** O(1) amortized per `push`, `pop`, and `peek` - each element is pushed to the inbox once and transferred to the outbox at most once.
- **Space Complexity:** O(n) - Both stacks together store at most all enqueued elements (n is the number of items in the queue).

## Practice Notes

- In JS it is natural to start from a simple `[]` (“one stack” mentally). **Push** stays easy: use `Array.prototype.push` on the inbox.
    - **Pop** is the hard part with only stack operations: you cannot take from the “bottom” of one array in O(1) without a second stack to reverse the order when needed.
    - **Peek** is also hard like `pop` for finding the front; reuse the same “transfer if outbox empty” step, then just read the top of the outbox without popping.
    - **Empty** is easy: both stacks must be empty (`length === 0`).
    - From this thinking when just using a `[]`, we can begin to see the approach where two stacks `[]` become very valuable to us to get our desired time complexity.
