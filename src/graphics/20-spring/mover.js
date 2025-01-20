class Mover {
  #position;
  #velocity;
  #acceleration;
  #mass;

  constructor(m, x, y) {
    this.#mass = m;
    this.#position = createVector(x, y);
    this.#velocity = createVector(0, 0);
    this.#acceleration = createVector(0, 0);
  }

  applyForce(force) {
    const f = p5.Vector.div(force, this.#mass);
    this.#acceleration.add(f);
  }

  update() {
    this.#velocity.add(this.#acceleration);
    this.#position.add(this.#velocity);
    this.#acceleration.mult(0);
  }

  display() {
    stroke(0);
    fill(175,200);
    ellipse(this.#position.x, this.#position.y, 35, 35);
  }

  checkEdges() {
    if (this.#position.x > width) {
      this.#position.x = width;
      this.#velocity.x *= -1;
    } else if (this.#position.x < 0) {
      this.#position.x = 0;
      this.#velocity.x *= -1;
    }

    if (this.#position.y > height) {
      this.#position.y = height;
      this.#velocity.y *= -1;
    } else if (this.#position.y < 0) {
      this.#position.y = 0;
      this.#velocity.y *= -1;
    }
  }

  get position() {
    return this.#position;
  }

  get mass() {
    return this.#mass;
  }

  get velocity() {
    return this.#velocity;
  }

  get acceleration() {
    return this.#acceleration;
  }
}
