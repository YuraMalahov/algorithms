"use strict";

function minCoins(amount, coins) {
    const cache = new Int32Array(amount);
    for (let i = 1; i < amount; i++) {
        cache[i] = -1;
    }

    return change(amount, coins, cache);
}

function change(amount, coins, cache) {
    if (amount <= 0 || coins.length === 0) {
        return 0;
    }

    let min = amount;
    let res = 0;
    for (let i = 0, len = coins.length; i < len; i++) {
        if (amount < coins[i]) {
            continue;
        }
        
        if (cache[amount - coins[i]] >= 0) {
            res = cache[amount - coins[i]];
        } else {
            res = change(amount - coins[i], coins, cache);
            cache[amount - coins[i]] = res;
        }

        if (res + 1 < min) {
            min = res + 1;
        }
    }

    return min;
}


// console.log(minCoins(1, [1]));
console.log(minCoins(3, [1, 2]));
// console.log(minCoins(5, [1, 2]));
// console.log(minCoins(6, [1, 3, 4]));
// console.log(minCoins(10, [1, 3, 4]));
console.log(minCoins(32, [1, 2, 5, 10, 25]));
