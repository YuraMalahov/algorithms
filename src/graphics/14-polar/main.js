const amplitude = 150;
const period = 200;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(0);

  translate(width/2, height/2);

  let x = amplitude * Math.cos((frameCount/period) * 2 * Math.PI);
  let y = Math.abs(amplitude * Math.sin((frameCount/period) * 2 * Math.PI));

  stroke(255);
  line(0, 0, x, y);
  fill(255);
  ellipse(x, y, 50, 50);
}
