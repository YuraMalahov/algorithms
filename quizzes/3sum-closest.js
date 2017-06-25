"use strict";

function sumOf3(numbers, target) {
    let min = Number.MAX_SAFE_INTEGER,
        record;

    numbers.sort((a, b) => a > b);

    for (let i = 0, count = numbers.length; i < count; i++) {
        let start = i + 1,
            end = count - 1;

        while (start < end) {
            let sum = numbers[i] + numbers[start] + numbers[end];
            if (sum === target) {
                min = 0;
                record = sum;
                break;
            } else if (sum < target) {
                if (target - sum < min) {
                    min = target - sum;
                    record = sum;
                }
                start++;
            } else {
                if (sum - target < min) {
                    min = sum - target;
                    record = sum;
                }
                end--;
            }
        }
        if (record === target) {
            break;
        }
        while (i < count -1 && numbers[i] === numbers[i + 1]) {
            i++;
        }
    }

    return record;
}

console.log(sumOf3([-1, 2, 1, -4], 1));

// The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).