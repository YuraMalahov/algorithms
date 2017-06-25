"use strict";

function validateMatrix(matrix, height, width) {
    const colZeroes = [];
    const rowZeroes = [];
    
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (matrix[i][j] !== 0) {
                continue;
            }
            
            colZeroes[i] = true;
            rowZeroes[j] = true;
        }
    }

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (colZeroes[i] === true || rowZeroes[j] === true) {
                matrix[i][j] = 0;
            }
        }
    }
}

let x = [
  [1, 0, 3, 4 , 5],
  [1, 2, 3, 4 , 5],  
  [1, 2, 3, 0 , 5]  
];

validateMatrix(x, 3, 5);

console.log(x);
