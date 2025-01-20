let particle;

function setup() {
  createCanvas(640, 360);

  particle = new Particle(createVector(width/2, 20));
}

function draw() {
  background(255);

  particle.update();
  particle.display();

  if (particle.isDead()) {
    particle = new Particle(createVector(width/2, 20));
  }
}
