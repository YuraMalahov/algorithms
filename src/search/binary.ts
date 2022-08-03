
export function search(input: number[], searched: number): number {
    let start = 0;
    let end = input.length - 1;

    if (searched < input[start] || searched > input[end]) {
        return -1;
    }

    while (start <= end) {
        const mid = Math.floor((end + start) / 2);
        const number = input[mid];

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
