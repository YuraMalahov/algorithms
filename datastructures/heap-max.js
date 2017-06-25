"use strict";

class HeapMax {
    constructor() {
        this._items = [null];
        this._count = 0;
    }

    /**
     * @param item
     */
    insert(item) {
        this._items[++this._count] = item;
        this.swim(this._count);
    }

    /**
     * @param {number} current
     */
    swim(current) {
        let parent = Math.floor(current/2);
        while (current > 1 && this._items[current] > this._items[parent]) {
            this.exchange(parent, current);

            current = Math.floor(current/2);
            parent = Math.floor(current/2);
        }
    }

    /**
     * @param {number} current
     */
    sink(current) {
        let child;
        while (current * 2 <= this._count) {
            child = current * 2;
            if (this._items[child] < this._items[child+1]) {
                child++;
            }
            if (this._items[current] > this._items[child]) {
                break;
            }

            this.exchange(child, current);
            current = child;
        }
    }

    /**
     * @returns {*|null}
     */
    deleteMax() {
        if (this.isEmpty()) {
            return null;
        }

        let max = this._items[1];
        this.exchange(1, this._count--);
        this.sink(1);
        this._items.pop();

        return max;
    }

    /**
     * @returns {boolean}
     */
    isEmpty() {
        return 0 === this._count;
    }

    /**
     * @param {number} first
     * @param {number} second
     */
    exchange(first, second) {
        [this._items[first], this._items[second]] = [this._items[second], this._items[first]];
    }
}

module.exports.createHeap = function () {
  return new HeapMax();
};