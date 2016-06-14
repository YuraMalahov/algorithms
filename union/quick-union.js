"use strict";

class QuickUnion {
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

        this.ids[this._root(first)] = this._root(second);

        return true;
    }

    /**
     * @param {int} first
     * @param {int} second
     * @returns {boolean}
     */
    connected(first, second) {
        return this._root(first) === this._root(second);
    }

    /**
     * @param {int} searched
     * @returns {int}
     * @private
     */
    _root(searched) {
        while (searched !== this.ids[searched]) {
            searched = this.ids[searched];
        }

        return searched;
    }
}

module.exports = QuickUnion;
