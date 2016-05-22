"use strict";

class Bag {
    constructor() {
        this.items = [];
    }

    /**
     * @param {*} value
     */
    add(value) {
        this.items.push(value);
    }

    /**
     * @returns {Object}
     */
    [Symbol.iterator]() {
        let self = this,
            nextIndex = this.items.length - 1;

        return {
            next() {
                if (nextIndex >= 0) {
                    return {
                        value: self.items[nextIndex--],
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

module.exports = Bag;
