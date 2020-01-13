"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    setNext(next) {
        this.next = next;
    }
    getNext() {
        return this.next;
    }
}
class Stack {
    constructor() {
        this.first = null;
    }
    push(value) {
        const node = new Node(value);
        if (this.first !== null) {
            node.setNext(this.first);
        }
        this.first = node;
    }
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        const oldFirst = this.first;
        this.first = this.first.getNext();
        return oldFirst.getValue();
    }
    isEmpty() {
        return this.first === null;
    }
}
exports.Stack = Stack;
//# sourceMappingURL=stack.js.map