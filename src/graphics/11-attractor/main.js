let movers = new Array(3).fill(null);

let attractor;

const GRAVITY = 1;

function setup() {
  createCanvas(640, 360);
  attractor = new Attractor();

  for (let i = 0; i < movers.length; i++) {
    movers[i] = new Mover(random(4, 12), random(width), random(height));
    movers[i].applyForce(createVector(5, 0.0));
  }
}

function draw() {
  background(255);

  attractor.display();
  attractor.drag();
  attractor.rollover(mouseX, mouseY);

  for (let i = 0; i < movers.length; i++) {
    let force = attractor.attract(movers[i]);
    movers[i].applyForce(force);
    movers[i].update();
    movers[i].display();
  }
}

function mousePressed() {
  attractor.clicked(mouseX, mouseY);
}

function mouseReleased() {
  attractor.stopDragging();
}
