/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
  const table = new Set();
  let current = head;

  while (current) {
    if (table.has(current)) {
      return true;
    }

    table.add(current);
    current = current.next;
  }

  return false;
};

function hasCycle2(head: ListNode | null): boolean {
  let current = head?.next;
  let tail = head;
  let i = 1;

  while (current) {
    if (tail === current) {
      return true;
    }

    current = current.next;

    if (i % 2 === 0) {
      tail = tail?.next;
    }

    i++;
  }

  return false;
};
