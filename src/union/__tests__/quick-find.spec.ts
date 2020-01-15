import { QuickFind } from '../quick-find';

describe('QuickFind', () => {
    describe('QuickFind', () => {
        const quickFind = new QuickFind(10);

        test('no connections 0 - 1', () => {
            expect(quickFind.connected(0, 1)).toEqual(false);
        });

        test('connect 0 - 1', () => {
            expect(quickFind.union(0, 1)).toEqual(true);
            expect(quickFind.connected(0, 1)).toEqual(true);
        });

        test('no connections 0 - 2', () => {
            expect(quickFind.connected(0, 2)).toEqual(false);
        });

        test('connect 0 - 2', () => {
            expect(quickFind.union(0, 2)).toEqual(true);
            expect(quickFind.connected(0, 2)).toEqual(true);
            expect(quickFind.connected(1, 2)).toEqual(true);
        });

        test('connect 8 - 9', () => {
            expect(quickFind.union(8, 9)).toEqual(true);
            expect(quickFind.connected(8, 9)).toEqual(true);
        });

        test('connect 0 - 9', () => {
            expect(quickFind.union(0, 9)).toEqual(true);
            expect(quickFind.connected(0, 8)).toEqual(true);
            expect(quickFind.connected(0, 9)).toEqual(true);
        });
    });
});
