import { QuickSelect } from '../quick-select';

describe('QuickSelect', () => {
    describe('QuickSelect', () => {
        test('sort unsorted array', () => {
            const array = [5, 9, 2, 7, 1, 3, 6, 8, 0, 4];

            const result = QuickSelect.select(7, array);

            expect(result).toEqual(7);
        });

        test('sort sorted array', () => {
            const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

            const result = QuickSelect.select(1, array);

            expect(result).toEqual(1);
        });

        test('sort reverse sorted array', () => {
            const array = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

            const result = QuickSelect.select(1, array);

            expect(result).toEqual(1);
        });

        test('sort empty array', () => {
            const array: number[] = [];

            const result = QuickSelect.select(0, array);

            expect(result).toEqual(undefined);
        });

        test('sort one element array', () => {
            const array = [0];

            const result = QuickSelect.select(0, array);

            expect(result).toEqual(0);
        });
    });
});
