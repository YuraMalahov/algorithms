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

        test('no connections 1 - 2', () => {
            expect(quickUnionWeighted.connected(1, 2)).toEqual(false);
        });

        test('connect 0 - 2', () => {
            expect(quickUnionWeighted.union(0, 2)).toEqual(true);
            expect(quickUnionWeighted.connected(0, 2)).toEqual(true);
            expect(quickUnionWeighted.connected(1, 2)).toEqual(true);
        });

        test('connect 6 - 5', () => {
            expect(quickUnionWeighted.union(6, 5)).toEqual(true);
            expect(quickUnionWeighted.connected(6, 5)).toEqual(true);
        });

        test('connect 6 - 7', () => {
            expect(quickUnionWeighted.union(6, 7)).toEqual(true);
            expect(quickUnionWeighted.connected(6, 7)).toEqual(true);
            expect(quickUnionWeighted.connected(5, 7)).toEqual(true);
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

        test('throws error 0 - 11', () => {
            expect(() => {
                quickUnionWeighted.connected(0, 11)
            }).toThrow();
        });

        test('throws error 11 - 0', () => {
            expect(() => {
                quickUnionWeighted.connected(11, 0)
            }).toThrow();
        });

        test('throws error 11 - 11', () => {
            expect(() => {
                quickUnionWeighted.connected(11, 11)
            }).toThrow();
        });
    });
});
