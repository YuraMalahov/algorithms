"use strict";

class QuickFind {
    constructor(size) {
        this.ids = [];
        for (let i = 0; i < size; i++) {
            this.ids[i] = i;
        }
    }

    union(first, second) {
        let firstValue = this.ids[first],
            secondValue = this.ids[second];

        for (let i = 0, len = this.ids.length; i < len; i++) {
            if (this.ids[i] === firstValue) {
                this.ids[i] = secondValue;
            }
        }
    }

    connected(first, second) {
        return this.ids[first] === this.ids[second];
    }
}

module.exports = QuickFind;
