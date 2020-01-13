"use strict";

function rotateImage(image) {
    const N = image.length;
    const len = Math.ceil(N/2);

    for (let i = 0; i < len-1; i++) {
        for (let j = 0; j < len; j++) {
            let x = j;
            let y = i;
            let current = image[y][x];

            // top -> right
            [image[x][N-1-y], current] = [current, image[x][N-1-y]];
            [x, y] = [N-1-y, x];

            // right -> bottom
            [image[x][N-1-y], current] = [current, image[x][N-1-y]];
            [x, y] = [N-1-y, x];

            // bottom -> left
            [image[x][N-1-y], current] = [current, image[x][N-1-y]];
            [x, y] = [N-1-y, x];

            // left -> top
            [image[x][N-1-y], current] = [current, image[x][N-1-y]];
        }
    }
}

const image = [
    [11, 12, 13, 14, 15, 16, 17, 18, 19],
    [21, 22, 23, 24, 25, 26, 27, 28, 29],
    [31, 32, 33, 34, 35, 36, 37, 38, 39],
    [41, 42, 43, 44, 45, 46, 47, 48, 49],
    [51, 52, 53, 54, 55, 56, 57, 58, 59],
    [61, 62, 63, 64, 65, 66, 67, 68, 69],
    [71, 72, 73, 74, 75, 76, 77, 78, 79],
    [81, 82, 83, 84, 85, 86, 87, 88, 89],
    [91, 92, 93, 94, 95, 96, 97, 98, 99]
];

rotateImage(image);
image.forEach(e => console.log(e));
