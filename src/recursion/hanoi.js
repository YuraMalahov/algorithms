const from1 = [3,2,1];
const to1 = [];
const buffer1 = [];

function move(from, to) {
  to.push(from.pop());
}

function hanoi(n, from, buffer, to) {
  if (n === 0) {
    return;
  }

  hanoi(n-1, from, to, buffer);
  move(from, to);
  hanoi(n-1, buffer, from, to);
}

hanoi(3, from1, buffer1, to1);

console.log(from1, buffer1, to1);
