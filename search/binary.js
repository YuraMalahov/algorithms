"use strict";

function search(input, searched) {
    let start = 0,
        end = input.length - 1,
        mid = Math.floor(end / 2);

    if (searched < input[start] || searched > input[end]) {
        return -1;
    }

    while (start <= end) {
        let number = input[mid];

        if (searched === number) {
            return mid;
        } else if (searched < number) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = Math.floor((end + start) / 2);
    }

    return -1;
}

console.log(search([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 20));
