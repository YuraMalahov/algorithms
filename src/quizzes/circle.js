"use strict";

function circle(x, y, radius) {
    const CIRCUMFERENCE_1_8 = Math.PI/4;
    const STEP = 1/radius;
    const points = [];

    let angle = 0;
    let a = 0;
    let b = 0;

    while (angle < CIRCUMFERENCE_1_8) {
        a = Math.cos(angle) * radius;
        b = Math.sin(angle) * radius;
        angle += STEP;

        // II
        points.push([x + a, y + b]);
        // III
        points.push([x - a, y + b]);
        // IV
        points.push([x + a, y - b]);
        // I
        points.push([x - a, y - b]);
        // add reverse points
        // II
        points.push([x + b, y + a]);
        // III
        points.push([x - b, y + a]);
        // IV
        points.push([x + b, y - a]);
        // I
        points.push([x - b, y - a]);
    }

    return points;
}

const points = circle(0, 0, 100);

console.log(points);
