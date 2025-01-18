

const balls = [];
const ballsNoise = [];
const ballSize = 4;
const shift = 1;
let t = 0;

class Ball {
  constructor(x) {
    this.x = x;
    this.amplitude = 150;
  }

  draw(n) {
    let y = this.amplitude * Math.sin(n);

    stroke('red');
    fill('red');
    ellipse(this.x, y, ballSize, ballSize);
  }
}

function getNoise() {
  t = t + 0.01;
  // Returns random numbers that can be smoothed by Perlin noise.
  let x = noise(t);
  // Re-maps a number from one range to another.
  return map(x, 0, 1, 0, height/2);
}

function setup() {
  createCanvas(1040, 360);
  frameRate(50); 

  const amount = parseInt(width/shift) + 1;
  for (let i = 0; i < amount; i++) {
    const n = getNoise();
    ballsNoise.push(n);
    balls.push(new Ball(shift * i));
  }
}

function draw() {
  background(0);

  translate(0, height/2);
  const n = getNoise();
  ballsNoise.shift();
  ballsNoise.push(n);


  balls.forEach((ball, index) => {
    ball.draw(ballsNoise[index] * 0.1);
  });
}
