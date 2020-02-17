
export class QuickSort3Way {
    public static sort(array: number[]): void {
        const len = array.length;

        this.sortProcess(array, 0, len-1);
    }

    public static sortProcess(array: number[], lowest: number, highest: number): void {
        if (highest <= lowest) {
            return;
        }

        const compare = array[lowest];
        let lt = lowest;
        let gt = highest;
        let i = lowest;

        while (i <= gt) {
            if (array[i] < compare) {
                [array[lt], array[i]] = [array[i], array[lt]];
                i++;
                lt++;
            } else if (array[i] > compare) {
                [array[gt], array[i]] = [array[i], array[gt]];
                gt--;
            } else {
                i++;
            }
        }

        this.sortProcess(array, lowest, lt - 1);
        this.sortProcess(array, gt + 1, highest);
    }
}
