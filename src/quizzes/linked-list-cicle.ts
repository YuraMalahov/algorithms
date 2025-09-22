class ListNode {
  val: number;
  next: ListNode | undefined;

  constructor(val: number, next?: ListNode | undefined) {
    this.val = val;
    this.next = next;
  }
}

function hasCycle(head: ListNode | undefined): boolean {
  const table = new Set();
  let current: ListNode | undefined = head;

  while (current) {
    if (table.has(current)) {
      return true;
    }

    table.add(current);
    current = current.next;
  }

  return false;
};

function hasCycle2(head: ListNode | undefined): boolean {
  let current = head?.next;
  let follower = head;
  let i = 1;

  while (current) {
    if (follower === current) {
      return true;
    }

    current = current.next;

    // move follower every second step
    if (i % 2 === 0) {
      follower = follower?.next;
    }

    i++;
  }

  return false;
};


const linkedList = new ListNode(3);
linkedList.next = new ListNode(2);
linkedList.next.next = new ListNode(0);
linkedList.next.next.next = new ListNode(-4);
linkedList.next.next.next.next = linkedList.next;

const linkedList2 = new ListNode(3);
linkedList2.next = new ListNode(2);
linkedList2.next.next = new ListNode(0);
linkedList2.next.next.next = new ListNode(-4);

console.log(hasCycle(linkedList)); // true
console.log(hasCycle(linkedList2)); // false

console.log(hasCycle2(linkedList)); // true
console.log(hasCycle2(linkedList2)); // false