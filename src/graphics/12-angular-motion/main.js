let a = 0.0;
let aVelocity = 0.01;
let aAcceleration = 0.001;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(255);

  a += aVelocity;
  aVelocity += aAcceleration;

  rectMode(CENTER);
  stroke(0);
  fill(127);
  translate(width/2, height/2);
  rotate(a);
  rect(0, 0, 64, 36);
}
