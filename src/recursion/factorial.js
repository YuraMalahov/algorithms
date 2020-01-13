"use strict";

function factorial(number) {
    if (number === 1) {
        return number;
    }

    return factorial(number - 1) * number;
}

console.log(factorial(5));
