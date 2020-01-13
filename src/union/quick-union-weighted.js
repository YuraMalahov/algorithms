"use strict";

class QuickUnionWeighted {
    /**
     * @param {int} size
     */
    constructor(size) {
        this._ids = [];
        this.size = [];

        for (let i = 0; i < size; i++) {
            this._ids[i] = i;
            this.size[i] = 1;
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
        // attach smaller tree to bigger tree
        if (this.size[firstRoot] > this.size[secondRoot]) {
            this._ids[secondRoot] = firstRoot;
            this.size[firstRoot] += this.size[secondRoot];
        } else {
            this._ids[firstRoot] = secondRoot;
            this.size[secondRoot] += this.size[firstRoot];
        }

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
            // attach subtree to root element
            this._ids[searched] = this._ids[this._ids[searched]];
            searched = this._ids[searched];
        }

        return searched;
    }
}

module.exports = QuickUnionWeighted;
