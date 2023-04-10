function fvaluate(equation: string) {
  console.log(equation);

  const ops = [];
  const vals = [];
  const input = equation.split('');

  let s;

  while ((s = input.shift()) !== undefined) { 
    if (s === '(') {

    } else if (s === '+') {
      ops.push(s);
    } else if (s === '-') {
      ops.push(s);
    } else if (s === '*') {
      ops.push(s);
    } else if (s === '/') {
      ops.push(s);
    } else if (s === 'sqrt') {
      ops.push(s);
    } else if (s === ')') {
      let op = ops.pop();
      let v = vals.pop();

      if (op === '+') {
        v = vals.pop() + v;
      } else if (op === '-') {
        v = vals.pop() - v;
      } else if (op === '*') {
        v = vals.pop() * v;
      } else if (op === '/') {
        v = vals.pop() / v;
      } else if (op === 'sqrt') {
        v = Math.sqrt(v);
      }

      vals.push(v);
    } else {
      vals.push(parseFloat(s));
    }
  }

  console.log('result:', vals.pop());
}

fvaluate('(1+((2+3)*(4*5)))');
