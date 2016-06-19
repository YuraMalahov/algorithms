"use strict";

const node = require("./node");

module.exports.createStack = function () {
    /**
     * @type {null|Node}
     */
    let first = null;

    class Stack {
        /**
         * @param {*} item
         */
        push(item) {
            let oldFirst = first;

            first = node.createNode(item);
            first.next = oldFirst;
        };

        /**
         * @returns {null|Node}
         */
        pop() {
            let oldFirst = first;

            if (this.isEmpty()) {
                return oldFirst;
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
    
    return new Stack ();
};
