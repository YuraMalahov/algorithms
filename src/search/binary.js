"use strict";

function search(input, searched) {
    let start = 0;
    let end = input.length - 1;

    if (searched < input[start] || searched > input[end]) {
        return -1;
    }

    while (start <= end) {
        let mid = Math.floor((end + start) / 2);
        let number = input[mid];

        if (searched < number) {
            end = mid - 1;
        } else if (searched > number) {
            start = mid + 1;
        } else {
            return mid;
        }
    }

    return -1;
}

console.log(search([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 10));
console.log(search([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5));
console.log(search([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 18));
console.log(search([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20));
console.log(search([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 0));
console.log(search([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 99));
