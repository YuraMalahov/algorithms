function computeAngle(originPoint, computedPoint) {
    const dx = computedPoint[0] - originPoint[0];
    const dy = computedPoint[1] - originPoint[1];

    if (dy === 0 && dx == 0) {
        return null;
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

    if (dx > 0 && dy > 0) {
        return angle;
    }

    if (dx < 0 && dy >= 0) {
        return 180 + angle;
    }

    if (dx < 0 && dy < 0) {
        return 180 + angle;
    }

    if (dx > 0 && dy < 0) {
        return 360 + angle;
    }
}

function sortByOrigin(origin, points) {
    return points.sort((a ,b) => {
        return computeAngle(origin, a) - computeAngle(origin, b);
    });
}

function removeOrigin(points) {
    let min = 0;

    for (let i = 1; i < points.length; i++) {
        if (points[i][1] < points[min][1]) {
            min = i;
        }
    }

    const origin = points[min];
    points.splice(min, 1);

    return origin;
}

function isLeftTurn(currentPoint, prevPoint, pointsStack) {
    if (pointsStack.length === 0) {
        return true;
    }

    const basePoint = pointsStack.pop();

    pointsStack.push(basePoint);

    return computeAngle(basePoint, currentPoint) > computeAngle(basePoint, prevPoint);
}

function main(points) {
    if (points.length < 3) {
        return [];
    }

    const origin = removeOrigin(points);
    const sortedPoints = sortByOrigin(origin, points);
    const pointsStack = [origin, sortedPoints[0]];

    for (let i = 1; i < sortedPoints.length; i++) {
        let prevPoint = pointsStack.pop();
        const currentPoint = sortedPoints[i];

        while (!isLeftTurn(currentPoint, prevPoint, pointsStack)) {
            prevPoint = pointsStack.pop();
        }

        pointsStack.push(prevPoint);
        pointsStack.push(currentPoint);
    }

    return pointsStack;
}


const points = [
    [5, 0], [0, 5], [4, 4], [3, 6], [1, 2], [3, 3], [2, 4], [4, 2], [5, 2], [5, 4], [5, 5], [4, 0], [2, 0], [2, 2],
    [3, 1], [1, 4], [3, 5]
];

console.log(main(points));
