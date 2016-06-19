"use strict";

const node = require("./node"),
    NodeIterator = require("./node-iterator");

class Queue extends NodeIterator {
    constructor() {
        super();
        this._last = null;
    }
    
    /**
     * @param {*} item
     */
    enqueue(item) {
        let oldLast = this._last;

        this._last = node.createNode(item);
        if (this.isEmpty()) {
            this._first = this._last;
        } else {
            oldLast.next = this._last;
        }
    }

    /**
     * @returns {null|Node}
     */
    dequeue() {
        let oldFirst = this._first;

        if (this.isEmpty()) {
            this._last = null;
            return this._first;
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

module.exports.createQueue = function () {
    return new Queue ();
};
