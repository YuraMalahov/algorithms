
function exch(array: number[], i: number, j: number): void {
    const tmp = array[i];

    array[i] = array[j];
    array[j] = tmp;
}

function sink(array: number[], k: number, len: number): void {
    while (k*2 <= len) {
        let j = k*2;

        if (j < len && array[j] < array[j+1]){
            j++;
        }

        if (array[k] >= array[j]){
            break;
        }

        exch(array, k, j);
        k = j;
    }
}

export function sort(array: number[]): void {
    let len = array.length-1;

    for (let k = Math.floor(len/2); k >= 0; k--) {
        sink(array, k, len);
    }

    while (len > 0) {
        exch(array, 0, len--);
        sink(array, 0, len);
    }
}
