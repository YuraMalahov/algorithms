
class ListNode2 {
  val: number;
  next: ListNode2 | null;
  constructor(val?: number, next?: ListNode2 | null) {
    this.val = (val===undefined ? 0 : val);
    this.next = (next===undefined ? null : next);
  }
}

function addTwoNumbers(l1: ListNode2 | null, l2: ListNode2 | null): ListNode2 | null {
  let first = l1;
  let second = l2;
  let result = new ListNode2();
  let next = result;
  let cary = 0;

  while (first || second || cary) {
      let sum = (first?.val ?? 0) + (second?.val ?? 0) + cary;

      if (sum > 9) {
          cary = 1;
          sum -= 10;
      } else {
          cary = 0;
      }

      next.val = sum;
      first = first?.next || null;
      second = second?.next || null;

      if (first || second || cary) {
          next.next = new ListNode2();
          next = next.next;
      }
  }

  return result;
};
