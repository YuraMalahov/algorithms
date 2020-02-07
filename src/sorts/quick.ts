
export class QuickSort {
    public static sort(array: number[]): void {
        const len = array.length;

        this.sortProcess(array, 0, len-1);
    }

    public static sortProcess(array: number[], lowest: number, highest: number): void {
        if (highest <= lowest) {
            return;
        }

        const j = this.partition(array, lowest, highest);

        this.sortProcess(array, lowest, j-1);
        this.sortProcess(array, j+1, highest);
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
