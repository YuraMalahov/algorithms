"use strict";

class QuickFind {
    /**
     * @param {int} size
     * @return {void}
     */
    constructor(size) {
        this._ids = [];
        for (let i = 0; i < size; i++) {
            this._ids[i] = i;
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
        
        let firstValue = this._ids[first];
        let secondValue = this._ids[second];

        for (let i = 0, len = this._ids.length; i < len; i++) {
            if (this._ids[i] === firstValue) {
                this._ids[i] = secondValue;
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
        return this._ids[first] === this._ids[second];
    }
}

module.exports = QuickFind;
