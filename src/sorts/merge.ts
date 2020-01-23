
export class MergeSort {
    public static sort(array: number[]): void {
        const len = array.length;

        this.process(array, 0, len-1);
    }

    private static process(array: number[], start: number, end: number): void {
        if (start >= end) {
            return;
        }

        const mid = Math.floor((end + start) / 2);

        this.process(array, start, mid);
        this.process(array, mid+1, end);
        this.merge(array, start, mid, end);
    }

    private static merge(array: number[], start: number, mid: number, end: number): void {
        const aux = [];

        for (let i = start; i <= end; i++) {
            aux[i] = array[i];
        }

        let firstCursor = start;
        let secondCursor = mid+1;

        for (let i = start; i <= end; i++) {
            if (firstCursor > mid) {
                array[i] = aux[secondCursor++];
            } else if (secondCursor > end) {
                array[i] = aux[firstCursor++];
            } else if (aux[secondCursor] < aux[firstCursor]) {
                array[i] = aux[secondCursor++];
            } else {
                array[i] = aux[firstCursor++];
            }
        }
    }
}
