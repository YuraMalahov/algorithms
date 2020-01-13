"use strict";

class D2Array {
    constructor(type, y, x) {
        this._y = y;
        this._x = x;
        
        this._array = new type(y * x);
    }
    
    getItem(y, x) {
        return this._array[y * this._x + x];
    }
    
    setItem(y, x, number) {
        this._array[y * this._x + x] = number;
    }
}

const ma = new D2Array(Int8Array, 2, 3);

ma.setItem(0, 0, 0);
ma.setItem(0, 1, 1);
ma.setItem(0, 2, 2);
ma.setItem(0, 3, 3);
ma.setItem(0, 4, 4);
ma.setItem(0, 5, 5);
console.log(ma._array);

ma.setItem(1, 0, 10);
ma.setItem(1, 1, 11);
ma.setItem(1, 2, 12);
console.log(ma._array);

console.log(ma.getItem(1, 0));
console.log(ma.getItem(0, 3));