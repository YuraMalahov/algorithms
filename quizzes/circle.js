"use strict";

function circle(x, y, radius) {
    const TAU = Math.PI*2;
    const STEP = 1/radius;
    const points = [];

    let angle = 0;
    let a = 0;
    let b = 0;

    while (TAU > angle) {
        a = x + Math.cos(angle) * radius;
        b = y + Math.sin(angle) * radius;
        angle += STEP;
        points.push([a, b]);
    }

    return points;
}

const points = circle(0, 0, 100);

console.log(points);
