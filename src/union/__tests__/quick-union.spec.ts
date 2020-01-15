import { QuickUnion } from '../quick-union';

describe('QuickUnion', () => {
    describe('QuickUnion', () => {
        const quickUnion = new QuickUnion(10);

        test('no connections 0 - 1', () => {
            expect(quickUnion.connected(0, 1)).toEqual(false);
        });

        test('connect 0 - 1', () => {
            expect(quickUnion.union(0, 1)).toEqual(true);
            expect(quickUnion.connected(0, 1)).toEqual(true);
        });

        test('no connections 0 - 2', () => {
            expect(quickUnion.connected(0, 2)).toEqual(false);
        });

        test('connect 0 - 2', () => {
            expect(quickUnion.union(0, 2)).toEqual(true);
            expect(quickUnion.connected(0, 2)).toEqual(true);
            expect(quickUnion.connected(1, 2)).toEqual(true);
        });

        test('connect 8 - 9', () => {
            expect(quickUnion.union(8, 9)).toEqual(true);
            expect(quickUnion.connected(8, 9)).toEqual(true);
        });

        test('connect 0 - 9', () => {
            expect(quickUnion.union(0, 9)).toEqual(true);
            expect(quickUnion.connected(0, 8)).toEqual(true);
            expect(quickUnion.connected(0, 9)).toEqual(true);
        });
    });
});
