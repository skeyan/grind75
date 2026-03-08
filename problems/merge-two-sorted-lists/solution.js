/**
 * LeetCode 21 - Merge Two Sorted Lists
 * https://leetcode.com/problems/merge-two-sorted-lists/
 *
 * Merge two sorted linked lists into one sorted list
 * built from splicing the nodes of the original two lists.
 */

export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
export function mergeTwoLists(list1, list2) {
  const mergedListHead = new ListNode();
  let traversePtr = mergedListHead;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      traversePtr.next = list1;
      traversePtr = traversePtr.next;
      list1 = list1.next;
    } else {
      traversePtr.next = list2;
      traversePtr = traversePtr.next;
      list2 = list2.next;
    }
  }

  if (list1) {
    traversePtr.next = list1;
  } else if (list2) {
    traversePtr.next = list2;
  }

  return mergedListHead.next;
}
