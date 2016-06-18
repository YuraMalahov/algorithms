"use strict";

module.exports.createNode = function (item) {
    /**
     * @type {*}
     */
    let value = null;
    
    /**
     * @type {null|Node}
     */
    let next = null;
    
    class Node {
        constructor(item) {
            value = item;
            next = null;
        }

        /**
         * @param {*} item
         */
        set value(item) {
            value = item;
        }

        /**
         * @returns {*}
         */
        get value() {
            return value;
        }

        /**
         * @param {null|Node} node
         */
        set next(node) {
            next = node;
        }

        /**
         * @returns {null|Node}
         */
        get next() {
            return next;
        }
    }

    return new Node(item);
};
