
export class QuickSelect {
    public static select(index: number, array: number[]): number {
        let lowest = 0;
        let highest = array.length - 1;
        let j: number;

        while (highest > lowest) {
            j = this.partition(array, lowest, highest);

            if (j < index) {
                lowest = j + 1;
            } else if (j > index) {
                highest = j - 1;
            } else {
                return array[index];
            }
        }

        return array[index];
    }

    public static partition(array: number[], lowest: number, highest: number): number {
        let i = lowest; 
        let j = highest + 1;
        const center = array[lowest];

        while (true) {
            while (array[++i] < center && i !== highest) {}
            while (array[--j] > center && j !== lowest) {}

            if (i >= j) {
                break;
            }

            [array[i], array[j]] = [array[j], array[i]];
        }

        [array[lowest], array[j]] = [array[j], array[lowest]];

        return j;
    }
}
