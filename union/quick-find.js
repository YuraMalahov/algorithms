"use strict";

class QuickFind {
    /**
     * @param {int} size
     */
    constructor(size) {
        this.ids = [];
        for (let i = 0; i < size; i++) {
            this.ids[i] = i;
        }
    }

    /**
     * @param {int} first
     * @param {int} second
     * @returns {boolean}
     */
    union(first, second) {
        if (this.connected(first, second)) {
            return false;
        }
        
        let firstValue = this.ids[first],
            secondValue = this.ids[second];

        for (let i = 0, len = this.ids.length; i < len; i++) {
            if (this.ids[i] === firstValue) {
                this.ids[i] = secondValue;
            }
        }
        
        return true;
    }

    /**
     * @param {int} first
     * @param {int} second
     * @returns {boolean}
     */
    connected(first, second) {
        return this.ids[first] === this.ids[second];
    }
}

module.exports = QuickFind;
