"use strict";

class NameTable {
    /**
     * @param key
     * @param val
     */
    put(key, val) {

    }

    /**
     * @param key
     * @return value
     */
    get(key) {

    }

    /**
     * @param key
     */
    delete(key) {
        this.put(key, null);
    }

    /**
     * @param key
     * @return {boolean}
     */
    contains(key) {
        return this.get(key) !== null;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return this.size() !== 0;
    }

    /**
     * @return {number}
     */
    size() {}

    [Symbol.iterator] = function () {
        return {
            next() {

            }
        };
    }
}