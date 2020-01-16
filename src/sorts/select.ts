
export class SelectionSort {
    public static sort(array: number[]): void {
        const len = array.length;

        for (let i = 0; i < len; i++) {
            let min = i;
            let j = i + 1;

            while (j < len) {
                if (array[j] < array[min]) {
                    min = j;
                }

                j++;
            }

            [array[min], array[i]] = [array[i], array[min]];
        }
    }
}
