
export class InserttionSort {
    public static sort(array: number[]): void {
        const len = array.length;

        for (let i = 1; i < len; i++) {
            for (let j = i; j > 0; j--) {
                if (array[j] < array[j-1]) {
                    [array[j], array[j-1]] = [array[j-1], array[j]];
                } else {
                    break;
                }
            }
        }
    }
}
