"use strict";

class QuickUnionWeighted {
    /**
     * @param {int} size
     */
    constructor(size) {
        this.ids = [];
        this.size = [];

        for (let i = 0; i < size; i++) {
            this.ids[i] = i;
            this.size[i] = 1;
        }
    }

    /**
     * @param {int} first
     * @param {int} second
     * @returns {boolean}
     */
    union(first, second) {
        let firstRoot = this._root(first),
            secondRoot = this._root(second);

        if (firstRoot === secondRoot) {
            return false;
        }
        // attach smaller tree to bigger tree
        if (this.size[firstRoot] > this.size[secondRoot]) {
            this.ids[secondRoot] = firstRoot;
            this.size[firstRoot] += this.size[secondRoot];
        } else {
            this.ids[firstRoot] = secondRoot;
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
        while (searched !== this.ids[searched]) {
            // attach subtree to root element
            this.ids[searched] = this.ids[this.ids[searched]];
            searched = this.ids[searched];
        }

        return searched;
    }
}

module.exports = QuickUnionWeighted;
