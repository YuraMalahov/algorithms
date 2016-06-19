"use strict";

const node = require("./node");

module.exports.createQueue = function () {
    /**
     * @type {null|Node}
     */
    let first = null;
    /**
     * @type {null|Node}
     */
    let last = null;

    class Queue {
        /**
         * @param {*} item
         */
        enqueue(item) {
            let oldLast = last;

            last = node.createNode(item);
            if (this.isEmpty()) {
                first = last;
            } else {
                oldLast.next = last;
            }
        };

        /**
         * @returns {null|Node}
         */
        dequeue() {
            let oldFirst = first;

            if (this.isEmpty()) {
                last = null;
                return first;
            }

            first = first.next;
            return oldFirst.value;
        };

        /**
         * @returns {boolean}
         */
        isEmpty() {
            return first === null;
        };
    }

    return new Queue ();
};
