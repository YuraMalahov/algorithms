class Ball {
  constructor() {
    this.amplitude = 150;
    this.updateRate = Math.random() * 0.01;
    this.angleX = Math.random() * 100;
    this.angleY = Math.random() * 100;
  }

  update() {
    this.angleX += this.updateRate;
    this.angleY += this.updateRate;
  }

  draw() {
    let x = this.amplitude * Math.cos(this.angleX);
    let y = this.amplitude * Math.sin(this.angleY);

    stroke(255);
    line(0, 0, x, y);
    fill(255);
    ellipse(x, y, 25, 25);
  }
}

const balls = [];
const count = 10;

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < count; i++) {
    balls.push(new Ball());
  }
}

function draw() {
  background(0);

  translate(width/2, height/2);

  balls.forEach(ball => {
    ball.draw();
    ball.update();
  });
}
