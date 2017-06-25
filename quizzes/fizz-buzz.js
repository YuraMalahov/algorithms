"use strict";

/**
 *
 * @param number {number}
 */
function fizzBuzz(number) {
    for (let i = 0; i <= number; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("FizzBuzz");
        }
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        else {
            console.log(i);
        }
    }
}

fizzBuzz(15);
