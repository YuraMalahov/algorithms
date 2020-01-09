"use strict";

const node = require("../node"),
    NodeIterator = require("../node-iterator");

class Bag extends NodeIterator {
    constructor() {
        super();
        this._size = 0;
    }

    /**
     * @param {*} value
     */
    add(value) {
        let oldFirst = this._first;
        this._first = node.createNode(value);
        this._first.next = oldFirst;
        this._size++;
    }

    /**
     * @returns {number}
     */
    size() {
        return this._size;
    }
}

module.exports.createBag = function () {
    return new Bag();
};
