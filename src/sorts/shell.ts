
export class ShellSort {
    public static sort(array: number[]): void {
        const len = array.length;
        const border = Math.floor(len / 3);
        let step = 1;

        while (step < border) {
            step = step * 3 + 1;
        }

        while (step >= 1) {
            for (let i = step; i < len; i++) {
                for (let j = i; j >= step; j -= step) {
                    if (array[j] < array[j - step]) {
                        [array[j], array[j - step]] = [array[j - step], array[j]];
                    } else {
                        break;
                    }
                }
            }

            step = Math.trunc(step / 3);
        }
    }
}
