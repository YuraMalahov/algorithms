
function exch(array: number[], i: number, j: number): void {
    const tmp = array[i];

    array[i] = array[j];
    array[j] = tmp;
}

function sink(array: number[], current: number, len: number): void {
    while (current*2 <= len) {
        // left child
        let child = current*2;

        // if the right child exists and is greater than the left child
        if (child < len && array[child] < array[child+1]){
            child++;
        }

        // if the parent is greater than the child
        if (array[current] >= array[child]){
            break;
        }

        exch(array, current, child);
        current = child;
    }
}

export function sort(array: number[]): void {
    let len = array.length-1;

    // build heap
    // start from the middle and move left, as the right half consists of leaves
    for (let k = Math.floor(len/2); k >= 0; k--) {
        sink(array, k, len);
    }

    while (len > 0) {
        // swap the root with the last element
        // the last element is now sorted
        exch(array, 0, len--);
        // sink the new root to its correct position
        sink(array, 0, len);
    }
}
