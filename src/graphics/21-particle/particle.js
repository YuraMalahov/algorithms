class Particle {
  #location;
  #velocity;
  #acceleration;
  #lifespan;

  constructor(location) {
    this.#acceleration = createVector(0, 0.05);
    this.#velocity = createVector(random(-1, 1), random(-1, 1));
    this.#location = createVector(location.x, location.y);
    this.#lifespan = 255;
  }

  update() {
    this.#velocity.add(this.#acceleration);
    this.#location.add(this.#velocity);
    this.#lifespan -= 2;
  }

  display() {
    stroke(0, this.#lifespan);
    strokeWeight(2);
    fill(127, this.#lifespan);
    ellipse(this.#location.x, this.#location.y, 12, 12);
  }

  isDead() {
    return this.#lifespan <= 0;
  }

  get x() {
    return this.#location.x
  }

  get y() {
    return this.#location.y
  }
}
