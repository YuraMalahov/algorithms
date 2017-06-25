"use strict";

/**
 * @abstractClass NodeIterator
 */
class NodeIterator {
    /**
     * @return {void}
     */
    constructor() {
        this._first = null;
    }
    
    /**
     * @returns {Object}
     */
    [Symbol.iterator]() {
        let current = this._first;
    
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

module.exports = NodeIterator;
