"use strict";

function fibonacci(number) {
    if (number <= 2) {
        return 1;
    }

    return fibonacci(number-1) + fibonacci(number-2);
}

console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
