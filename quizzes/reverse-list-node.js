"use strict";

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var newHead = head;
    var next = head.next;
    var tmp;

    head.next = null;

    while (next) {
        newHead = next;
        tmp = newHead.next;
        newHead.next = head;

        next = tmp;
        head = newHead;
    }

    return newHead;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function show(head) {
    var next = head;

    while (next) {
        console.log(next.val);
        next = next.next;
    }
}


var a = new ListNode(0);
a.next = new ListNode(1);
a.next.next = new ListNode(2);
a.next.next.next = new ListNode(3);
a.next.next.next.next = new ListNode(4);
a.next.next.next.next.next = new ListNode(5);

show(a);
console.log('---');
a = reverseList(a);
show(a);
