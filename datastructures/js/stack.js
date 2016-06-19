"use strict";

const node = require("./node"),
    NodeIterator = require("./node-iterator");

class Stack extends NodeIterator {
    constructor() {
        super();
    }

    /**
     * @param {*} item
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

module.exports.createStack = function () {
    return new Stack ();
};
