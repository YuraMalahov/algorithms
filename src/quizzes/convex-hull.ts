
export class Point {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    polar(origin: Point): number {
        return Math.atan2(this.getY() - origin.getY(), this.getX() - origin.getX());
    }
}

export class ConvexHull {
    public compute(points: Point[]): Point[] {
        if (points.length < 3) {
            return [];
        }

        points.sort((a, b) => a.getY() - b.getY());
        const origin = points[0];
        points.sort((a, b) => a.polar(origin) - b.polar(origin));
        const stack = [points[0], points[1]];

        for (let i = 2; i < points.length; i++) {
            const newPoint = points[i];
            let currentPoint = stack.pop() as Point;

            while (stack.length > 1 && !this.isLeftTurn(stack[stack.length - 2], currentPoint, newPoint)) {
                currentPoint = stack.pop() as Point;
            }

            stack.push(currentPoint);
            stack.push(newPoint);
        }

        return stack;
    }

    private isLeftTurn(a: Point, b: Point, c: Point): boolean {
        const area = (b.getX() - a.getX()) * (c.getY() - a.getY()) - (b.getY() - a.getY()) * (c.getX() - a.getX());

        if (area < 0) {
            return false; // clockwise
        }
        if (area > 0) {
            return true; // counter-clockwise
        }

        return false; // collinear
    }
}
