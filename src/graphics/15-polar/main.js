const amplitude = 150;
let angle = 0;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(0);

  translate(width/2, height/2);

  let x = amplitude * Math.sin(angle);
  let y = Math.abs(amplitude * Math.cos(angle));

  stroke(255);
  line(0, 0, x, y);
  fill(255);
  ellipse(x, y, 50, 50);

  angle += 0.05
}
