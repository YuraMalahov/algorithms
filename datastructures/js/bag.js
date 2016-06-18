"use strict";

const node = require('./node');

module.exports.createBag = function () {
    /**
     * @type {null|Node}
     */
    let first = null;
    
    class Bag {
        /**
         * @param {*} value
         */
        add(value) {
            let oldFirst = first;

            first = node.createNode(value);
            first.next = oldFirst;
        }
    
        /**
         * @returns {Object}
         */
        [Symbol.iterator]() {
            let current = first;
    
            return {
                next() {
                    if (current) {
                        let value = current.value;
                        
                        current = current.next;
                        
                        return {
                            value: value,
                            done: false
                        };
                    }
    
                    return {
                        done: true
                    };
                }
            }
        }
    }
    
    return new Bag();
}; 
