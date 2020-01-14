import { Bag } from '../bag';

describe('Bag', () => {
    describe('bag of numbers', () => {
        const bag = new Bag<number>();

        test('bag is empty', () => {
            expect(bag.length()).toEqual(0);
        });

        test('bag add data', () => {
            bag.add(0);
            bag.add(1);
            bag.add(2);

            expect(bag.length()).toEqual(3);
        });

        test('iterate bag', () => {
            const arr = [];

            for (const item of bag) {
                arr.push(item);
            }

            expect(arr).toEqual([2, 1, 0]);
        });
    });
});
