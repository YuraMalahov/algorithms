"use strict";

function sumOf3(numbers) {
    let result = [];
    numbers.sort((a, b) => a > b);

    for (let i = 0, count = numbers.length; i < count; i++) {
        let target = 0 - numbers[i],
            start = i + 1,
            end = count - 1;

        while (start < end) {
            if (numbers[start] + numbers[end] === target) {
                let solution = [numbers[i], numbers[start], numbers[end]];

                result.push(solution);
                start++;
                end--;

                while (start < end && numbers[start] === numbers[start - 1]) {
                    start++;
                }
                while (start < end && numbers[end] === numbers[end - 1]) {
                    end++;
                }
            } else if (numbers[start] + numbers[end] < target) {
                start++;
            } else {
                end--;
            }
        }
        if (i < count - 1) {
            while (numbers[i] === numbers[i + 1]) {
                i++;
            }
        }
    }

    return result;
}

console.log(sumOf3([-1, 0, 1, 2, -1, -4]));
