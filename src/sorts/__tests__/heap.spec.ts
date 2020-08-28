import { sort } from '../heap';

describe('Heap sort', () => {
    describe('Heap sort', () => {
        test('sort unsorted array', () => {
            const array = [5, 9, 2, 7, 1, 3, 6, 8, 0, 4];

            sort(array);

            expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        test('sort sorted array', () => {
            const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

            sort(array);

            expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        test('sort reverse sorted array', () => {
            const array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

            sort(array);

            expect(array).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        test('sort empty array', () => {
            const array: number[] = [];

            sort(array);

            expect(array).toEqual([]);
        });

        test('sort one element array', () => {
            const array = [0];

            sort(array);

            expect(array).toEqual([0]);
        });

        test('sort array with duplicates', () => {
            const array = [
                5, 3, 8, 2, 5, 9, 0, 9, 3, 7, 9, 2, 0, 7, 5, 1, 6, 1, 8, 2, 3, 7, 6, 8, 0, 6, 4, 4, 1, 4
            ];

            sort(array);

            expect(array).toEqual(
                [
                    0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7,
                    8, 8, 8, 9, 9, 9
                ]
            );
        });
    });
});
