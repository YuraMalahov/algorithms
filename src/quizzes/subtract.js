"use strict";

function subtract(x, y) {
    let borrow;
    // Iterate till there is no carry
    while (y != 0) {
        // borrow contains common set bits of y and unset
        // bits of x
        borrow = (~x) & y;

        // Subtraction of bits of x and y where at least
        // one of the bits is not set
        x = x ^ y;

        // Borrow is shifted by one so that subtracting it from
        // x gives the required sum
        y = borrow << 1;
    }
    
    return x;
}

console.log(subtract(5, 2));
console.log(subtract(15, 6));