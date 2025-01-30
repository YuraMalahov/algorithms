let particles = [];

function createParticle() {
  return new Particle(createVector(width/2, 20));
}

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(255);

  console.log(particles.length);
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
