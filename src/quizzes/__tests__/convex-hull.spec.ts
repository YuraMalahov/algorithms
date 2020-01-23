import { Point, ConvexHull } from '../convex-hull';

describe('ConvexHull', () => {
    describe('ConvexHull', () => {
        const convexHull = new ConvexHull();

        test('sort unsorted array', () => {
            const pointsData = [
                [5, 0], [0, 5], [4, 4], [3, 6], [1, 2], [3, 3], [2, 4], [4, 2], [5, 2], [5, 4], [5, 5], [4, 0], [2, 0],
                [2, 2], [3, 1], [1, 4], [3, 5]
            ];

            const points = pointsData.map(([x, y]) => new Point(x, y));
            const result = convexHull.compute(points).map(point => [point.getX(), point.getY()]);

            expect(result).toStrictEqual([[5, 0], [5, 5], [3, 6], [0, 5], [1, 2], [2, 0]]);
        });
    });
});
