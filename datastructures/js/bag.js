"use strict";

class Bag {
    constructor() {
        this.items = [];
    }

    add(value) {
        this.items.push(value);
    }

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
