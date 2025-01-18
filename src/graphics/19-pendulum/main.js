let origin;
let bob;
let len;
let bobSize = 32;
let angle = Math.PI/2;
let aVel = 0;
let aAcc = 0;

function setup() {
  createCanvas(640, 360);

  len = 180;
  origin = createVector(width/2, 0);
  bob = createVector(width/2, len);
}

function draw() {
  background(255);

  bob.x = origin.x + sin(angle) * len;
  bob.y = origin.y + cos(angle) * len;

  line(origin.x, origin.y, bob.x, bob.y);
  ellipse(bob.x, bob.y, bobSize, bobSize);

  aAcc = -0.01 * sin(angle);

  angle += aVel;
  aVel += aAcc;

  aVel *= 0.99;
}
