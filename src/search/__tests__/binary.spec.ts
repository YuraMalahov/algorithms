import { search } from '../binary';

describe('Binary', () => {
    describe('Binary', () => {
        test('search 10', () => {
            const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

            expect(search(arr, 10)).toEqual(10);
        });

        test('search 5', () => {
            const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

            expect(search(arr, 5)).toEqual(5);
        });

        test('search 18', () => {
            const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

            expect(search(arr, 18)).toEqual(18);
        });

        test('search 30', () => {
            const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

            expect(search(arr, 30)).toEqual(-1);
        });

        test('search -5', () => {
            const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

            expect(search(arr, -5)).toEqual(-1);
        });
    });
});
