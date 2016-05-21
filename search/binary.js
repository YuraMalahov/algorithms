"use strict";

function search(input, n) {
    let start = 0,
        end = input.length,
        mid = Math.floor(end / 2);

    while (start !== end && start < end) {
        let num = input[mid];

        if (n === num) {
            return true;
        } else if (n < num) {
            end = mid;
            mid = Math.floor((mid + start) / 2);
        } else if (n > num) {
            start = mid;
            mid = Math.floor((mid + end) / 2);
        }
    }

    return false;
}

console.log(search([0,1,2,3,4,5,6,7,8,9], 9));
