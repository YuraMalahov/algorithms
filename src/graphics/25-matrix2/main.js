let particles = [];

function createParticle() {
  return new Particle(createVector(random(width), random(-height/4, 0)));
}

function setup() {
  createCanvas(960, 620);
}

function draw() {
  background(0);

  particles.push(createParticle());
  particles.push(createParticle());

  // Loop through all particles backwards because we are removing them
  for (let i = particles.length - 1; i > -1; i--) {
    particles[i].update();
    particles[i].display();

    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }
}
