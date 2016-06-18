"use strict";

class Node {
    constructor(value) {
        this._value = value;
        this._next = null;
    }
    
    set value(value) {
        this._value = value;
    }
    
    get value() {
        return this._value;
    }
    
    set next(next) {
        this._next = next;
    }
    
    get next() {
        return this._next;
    }
}

module.exports = Node;
