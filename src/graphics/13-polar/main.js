let r = 150;
let a = Math.PI/4;
let aVel = 0.0;
let aAcc = 0.001;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(0);

  translate(width/2, height/2);

  let x = Math.cos(a) * r;
  let y = Math.sin(a) * r;
  stroke(255);
  line(0, 0, x, y);
  fill(255);
  ellipse(x, y, 50, 50);

  a += aVel;
  aVel += aAcc;
  aVel = constrain(aVel, 0, 1);
}
