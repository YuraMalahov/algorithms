import { InserttionSort } from '../insertion';

describe('InserttionSort', () => {
    describe('InserttionSort', () => {
        test('sort unsorted array', () => {
            const array = [5, 9, 2, 7, 1, 3, 6, 8, 0, 4];

            InserttionSort.sort(array);

            expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        test('sort sorted array', () => {
            const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

            InserttionSort.sort(array);

            expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        test('sort reverse sorted array', () => {
            const array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

            InserttionSort.sort(array);

            expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        test('sort empty array', () => {
            const array: number[] = [];

            InserttionSort.sort(array);

            expect(array).toEqual([]);
        });

        test('sort one element array', () => {
            const array = [0];

            InserttionSort.sort(array);

            expect(array).toEqual([0]);
        });
    });
});
