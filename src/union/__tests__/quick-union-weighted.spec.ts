import { QuickUnionWeighted } from '../quick-union-weighted';

describe('QuickUnion', () => {
    describe('QuickUnionWeighted', () => {
        const quickUnionWeighted = new QuickUnionWeighted(10);

        test('no connections 0 - 1', () => {
            expect(quickUnionWeighted.connected(0, 1)).toEqual(false);
        });

        test('connect 0 - 1', () => {
            expect(quickUnionWeighted.union(0, 1)).toEqual(true);
            expect(quickUnionWeighted.connected(0, 1)).toEqual(true);
        });

        test('no connections 0 - 2', () => {
            expect(quickUnionWeighted.connected(0, 2)).toEqual(false);
        });

        test('connect 0 - 2', () => {
            expect(quickUnionWeighted.union(0, 2)).toEqual(true);
            expect(quickUnionWeighted.connected(0, 2)).toEqual(true);
            expect(quickUnionWeighted.connected(1, 2)).toEqual(true);
        });

        test('connect 8 - 9', () => {
            expect(quickUnionWeighted.union(8, 9)).toEqual(true);
            expect(quickUnionWeighted.connected(8, 9)).toEqual(true);
        });

        test('connect 0 - 9', () => {
            expect(quickUnionWeighted.union(0, 9)).toEqual(true);
            expect(quickUnionWeighted.connected(0, 8)).toEqual(true);
            expect(quickUnionWeighted.connected(0, 9)).toEqual(true);
        });
    });
});
