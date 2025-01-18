class Ball {
  constructor(x, index, direction) {
    this.x = x;
    this.amplitude = 150;
    this.updateRate = 0.01 * direction;
    this.angleY = 0 + index * 0.1 * direction;
  }

  update() {
    this.angleX += this.updateRate;
    this.angleY += this.updateRate;
  }

  draw() {
    let y = this.amplitude * Math.sin(this.angleY);

    stroke(255);
    line(this.x, 0, this.x, y);
    fill(255);
    ellipse(this.x, y, 25, 25);
  }
}

const balls = [];
const count = 1;

function setup() {
  createCanvas(1040, 360);
  const shift = 20;
  const amount = parseInt(width/shift) + 1;
  for (let i = 0; i < amount; i++) {
    balls.push(new Ball(shift * i, i, 1));
    balls.push(new Ball(shift * i, i, -1));
  }
}

function draw() {
  background(0);

  translate(0, height/2);

  balls.forEach(ball => {
    ball.draw();
    ball.update();
  });
}
