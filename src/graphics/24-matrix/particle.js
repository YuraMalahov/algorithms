class Particle {
  #location;
  #velocity;
  #acceleration;
  #lifespan;
  #letters;
  #trail;
  #fontSize;

  constructor(location) {
    this.#acceleration = createVector(0, 0.01);
    this.#velocity = createVector(0, 0.9);
    this.#location = createVector(location.x, location.y);
    this.#lifespan = 650;
    this.#letters = [];
    this.#trail = 15;
    this.#fontSize = random(8, 24);

    for (let i = 0; i < this.#trail; i++) {
      this.#letters.push(String.fromCharCode(random(33, 126)));
    }
  }

  update() {
    this.#velocity.add(this.#acceleration);
    this.#location.add(this.#velocity);
    this.#lifespan -= 2;
  }

  display() {
    if (this.#trail > 0 && frameCount % 16 === 0) {
      this.#trail--;
      const letter = String.fromCharCode(random(33, 126));
      this.#letters.push(letter);
      this.#letters.shift();
    }

    for (let i = this.#letters.length - 1; i > -1; i--) {
      let alpha = map(this.#lifespan - (i+1) * 40, 0, this.#lifespan, 0, 1);
      alpha = alpha < 0 ? 0 : alpha;
      fill(`rgba(0%, ${random(60, 80)}%, 0%, ${alpha})`);
      textSize(this.#fontSize);
      text(this.#letters[i], this.#location.x, this.#location.y - i * 20);
    }
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
