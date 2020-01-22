function computeAngle(originPoint, computedPoint) {
    const dx = computedPoint[0] - originPoint[0];
    const dy = computedPoint[1] - originPoint[1];

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

function main(points) {
    if (points.length < 3) {
        return [];
    }

    const origin = removeOrigin(points);
    const sortedPoints = sortByOrigin(origin, points);
    const stack = [origin, sortedPoints[0]];

    let prevAngle = -Infinity;

    for (let i = 1; i < sortedPoints.length; i++) {
        let point = stack.pop();
        let currentAngle = computeAngle(point, sortedPoints[i]);

        while (currentAngle < prevAngle) {
            point = stack.pop();
            prevAngle = currentAngle;
            currentAngle = computeAngle(point, sortedPoints[i]);
        }

        stack.push(point);
        stack.push(sortedPoints[i]);
        prevAngle = currentAngle;
    }

    return stack;
}


const points = [[5, 0], [5, 5], [0, 5], [4, 4], [3, 6], [1, 2], [3, 3], [2, 4], [4, 2]];

console.log(main(points));
