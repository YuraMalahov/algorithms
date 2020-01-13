"use strict";

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

function nthLastNode(node, n) {
    let current = node;
    let follower = node;
    
    for (let i = 0; i < n; i++) {
        if (current === null) {
            return null;
        }
        
        current = current.next;
    }
    
    while (current) {
        current = current.next;
        follower = follower.next;
    }
    
    return follower;
}

let a = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5, null)))));

console.log(nthLastNode(a, 2));
console.log(nthLastNode(a, 1));
