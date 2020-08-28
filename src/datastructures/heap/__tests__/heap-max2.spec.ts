import { HeapMax } from '../heap-max2';

describe('HeapMax', () => {
    describe('heap max', () => {
        const heapMax = new HeapMax();

        test('equal', () => {
            heapMax.insert(4);

            expect(heapMax.delete()).toEqual(4);
            expect(heapMax.delete()).toEqual(null);
        });

        test('equal', () => {
            heapMax.insert(4);
            heapMax.insert(7);
            heapMax.insert(2);
            heapMax.insert(9);
            heapMax.insert(5);
            heapMax.insert(3);
            heapMax.insert(6);
            heapMax.insert(1);
            heapMax.insert(8);
            heapMax.insert(0);

            expect(heapMax.delete()).toEqual(9);
            expect(heapMax.delete()).toEqual(8);
            expect(heapMax.delete()).toEqual(7);
            expect(heapMax.delete()).toEqual(6);
            expect(heapMax.delete()).toEqual(5);
            expect(heapMax.delete()).toEqual(4);
            expect(heapMax.delete()).toEqual(3);
            expect(heapMax.delete()).toEqual(2);
            expect(heapMax.delete()).toEqual(1);
            expect(heapMax.delete()).toEqual(0);
            expect(heapMax.delete()).toEqual(null);
        });

        test('equal', () => {
            heapMax.insert(5);
            heapMax.insert(5);
            heapMax.insert(7);
            heapMax.insert(7);
            heapMax.insert(8);
            expect(heapMax.delete()).toEqual(8);
            heapMax.insert(2);
            heapMax.insert(3);
            heapMax.insert(5);
            heapMax.insert(7);
            heapMax.insert(9);
            expect(heapMax.delete()).toEqual(9);
            heapMax.insert(3);
            heapMax.insert(6);
            heapMax.insert(1);
            expect(heapMax.delete()).toEqual(7);
            heapMax.insert(0);
            heapMax.insert(7);
            expect(heapMax.delete()).toEqual(7);
            heapMax.insert(3);
            heapMax.insert(1);
            heapMax.insert(8);
            expect(heapMax.delete()).toEqual(8);
            expect(heapMax.delete()).toEqual(7);
            expect(heapMax.delete()).toEqual(7);
            expect(heapMax.delete()).toEqual(6);
            expect(heapMax.delete()).toEqual(5);
            expect(heapMax.delete()).toEqual(5);
            expect(heapMax.delete()).toEqual(5);
            expect(heapMax.delete()).toEqual(3);
            expect(heapMax.delete()).toEqual(3);
            expect(heapMax.delete()).toEqual(3);
            expect(heapMax.delete()).toEqual(2);
            expect(heapMax.delete()).toEqual(1);
            expect(heapMax.delete()).toEqual(1);
            expect(heapMax.delete()).toEqual(0);
            expect(heapMax.delete()).toEqual(null);
        });
    });
});
