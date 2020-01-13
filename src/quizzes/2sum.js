"use strict";

function sumOf2(numbers, target) {
    let result = [];

    numbers.some(function (number, index) {
        let searchedIndex = numbers.indexOf(target - number, index + 1);

        if (searchedIndex !== -1) {
            result = [index, searchedIndex];
            return true;
        }
    });

    return result;
}

console.log(sumOf2([3, 5, 7, 2], 9));