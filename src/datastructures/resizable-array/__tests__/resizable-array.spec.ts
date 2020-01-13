import { ResizableArray } from '../resizable-array';

describe('ResizableArray', () => {
    describe('array of numbers', () => {
        const array = new ResizableArray<number>(4);

        test('array is empty', () => {
            expect(array.size()).toEqual(4);
        });

        test('array push data', () => {
            array.push(0);
            array.push(1);
            array.push(2);
            array.push(3);

            expect(array.size()).toEqual(4);
            expect(array.get(0)).toEqual(0);
            expect(array.get(1)).toEqual(1);
            expect(array.get(2)).toEqual(2);
            expect(array.get(3)).toEqual(3);
        });

        test('array increase size', async () => {
            array.push(4);
            array.push(5);
            array.push(6);

            expect(array.size()).toEqual(8);
        });

        test('array decrease size', async () => {
            expect(array.pop()).toEqual(6);
            expect(array.pop()).toEqual(5);
            expect(array.pop()).toEqual(4);
            expect(array.pop()).toEqual(3);
            expect(array.pop()).toEqual(2);

            expect(array.size()).toEqual(4);
        });
    });
});
