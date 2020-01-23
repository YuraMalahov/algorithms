
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
}

export class ConvexHull {
    public compute(points: Point[]): Point[] {
        if (points.length < 3) {
            return [];
        }

        const origin = this.removeOrigin(points);
        const sortedPoints = this.sortByOrigin(origin, points);
        const pointsStack = [origin, sortedPoints[0]];

        for (let i = 1; i < sortedPoints.length; i++) {
            let prevPoint = pointsStack.pop() as Point;
            const currentPoint = sortedPoints[i];

            while (!this.isLeftTurn(currentPoint, prevPoint, pointsStack)) {
                prevPoint = pointsStack.pop() as Point;
            }

            pointsStack.push(prevPoint);
            pointsStack.push(currentPoint);
        }

        return pointsStack;
    }

    private computeAngle(originPoint: Point, computedPoint: Point): number {
        const dx = computedPoint.getX() - originPoint.getX();
        const dy = computedPoint.getY() - originPoint.getY();

        if (dy === 0 && dx == 0) {
            throw new Error('Same point');
        }

        if (dy === 0 && dx > 0) {
            return 0;
        }

        if (dy > 0 && dx === 0) {
            return 90;
        }

        if (dy === 0 && dx < 0) {
            return 180;
        }

        if (dy < 0 && dx === 0) {
            return 270;
        }

        const angle = Math.atan(dy/dx) * 180/Math.PI;;

        if (dx < 0 && dy >= 0) {
            return 180 + angle;
        }

        if (dx < 0 && dy < 0) {
            return 180 + angle;
        }

        if (dx > 0 && dy < 0) {
            return 360 + angle;
        }

        return angle;
    }

    private sortByOrigin(origin: Point, points: Point[]): Point[] {
        return points.sort((a ,b) => {
            return this.computeAngle(origin, a) - this.computeAngle(origin, b);
        });
    }

    private removeOrigin(points: Point[]): Point {
        let min = 0;

        for (let i = 1; i < points.length; i++) {
            if (points[i].getY() < points[min].getY()) {
                min = i;
            }
        }

        const origin = points[min];
        points.splice(min, 1);

        return origin;
    }

    private isLeftTurn(currentPoint: Point, prevPoint: Point, pointsStack: Point[]): boolean {
        if (pointsStack.length === 0) {
            return true;
        }

        const basePoint = pointsStack.pop() as Point;

        pointsStack.push(basePoint);

        return this.computeAngle(basePoint, currentPoint) > this.computeAngle(basePoint, prevPoint);
    }
}
