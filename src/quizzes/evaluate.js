function fvaluate(equation) {
    console.log(equation);
    var ops = [];
    var vals = [];
    var input = equation.split('');
    var s;
    while ((s = input.shift()) !== undefined) {
        if (s === '(') {
        }
        else if (s === '+') {
            ops.push(s);
        }
        else if (s === '-') {
            ops.push(s);
        }
        else if (s === '*') {
            ops.push(s);
        }
        else if (s === '/') {
            ops.push(s);
        }
        else if (s === 'sqrt') {
            ops.push(s);
        }
        else if (s === ')') {
            var op = ops.pop();
            var v = vals.pop();
            if (op === '+') {
                v = vals.pop() + v;
            }
            else if (op === '-') {
                v = vals.pop() - v;
            }
            else if (op === '*') {
                v = vals.pop() * v;
            }
            else if (op === '/') {
                v = vals.pop() / v;
            }
            else if (op === 'sqrt') {
                v = Math.sqrt(v);
            }
            vals.push(v);
        }
        else {
            vals.push(parseFloat(s));
        }
    }
    console.log('result:', vals.pop());
}
fvaluate('(1+((2+3)*(4*5)))');
