"use strict";

class QuickUnion {
    /**
     * @param {int} size
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
        let firstRoot = this._root(first);
        let secondRoot = this._root(second);

        if (firstRoot === secondRoot) {
            return false;
        }

        this._ids[firstRoot] = secondRoot;

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
        while (searched !== this._ids[searched]) {
            searched = this._ids[searched];
        }

        return searched;
    }
}

module.exports = QuickUnion;
