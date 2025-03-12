
function fib(n: number): number {
    if (n < 0) {
        throw new Error('Negative number');
    }

    if (n < 2) {
        return 1;
    }

    return fib(n - 1) + fib(n - 2);
}

function fib2(n: number): number {
    const fibMap = new Map();
    const fibInpruved = (n: number): number => {
        if (n < 0) {
            throw new Error('Negative number');
        }

        if (fibMap.has(n - 1) && fibMap.has(n - 2)) {
            const result = fibMap.get(n - 1) + fibMap.get(n - 2);
            fibMap.set(n, result);
            return result;
        }

        if (n < 2) {
            fibMap.set(n, 1);
            return 1;
        }

        return fibInpruved(n - 1) + fibInpruved(n - 2);
    }

    return fibInpruved(n);
}

const hrtime = process.hrtime();

const res = fib(44);

const timeDiff = process.hrtime(hrtime);

console.log(timeDiff, res);

