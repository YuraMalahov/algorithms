"use strict";

const node = require("./node");
const NodeIterator = require("./node-iterator");

class Stack extends NodeIterator {
    /**
     * @returns {void}
     */
    constructor() {
        super();
    }

    /**
     * @param {*} item
     * @returns {void}
     */
    push(item) {
        let oldFirst = this._first;

        this._first = node.createNode(item);
        this._first.next = oldFirst;
    }

    /**
     * @returns {null|Node}
     */
    pop() {
        let oldFirst = this._first;

        if (this.isEmpty()) {
            return oldFirst;
        }
        this._first = this._first.next;

        return oldFirst.value;
    }

    /**
     * @returns {boolean}
     */
    isEmpty() {
        return this._first === null;
    }
}

module.exports = Stack;
