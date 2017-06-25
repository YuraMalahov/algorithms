"use strict";

/**
 * time (6:45)
 *
 * @param time {string}
 * @returns {number}
 */
function clockAngle(time) {
    const timeArrayView = time.split(':');
    const [hours, minutes] = [parseInt(timeArrayView[0]), parseInt(timeArrayView[1])];
    const angle = 360 / 12 * hours - 360 / 60 * minutes;

    return angle * (angle >= 0 ? 1 : -1);
}

console.log(clockAngle("6:45"));
console.log(clockAngle("6:15"));
console.log(clockAngle("3:5"));
