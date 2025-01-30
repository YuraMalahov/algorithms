class Particle {
  #location;
  #velocity;
  #acceleration;
  #lifespan;
  #letters;
  #trail;
  #fontSize;
  #colorWeight;

  constructor(location) {
    this.#acceleration = createVector(0, 0.008);
    this.#velocity = createVector(0, 0.9);
    this.#location = createVector(location.x, location.y);
    this.#lifespan = 550;

    this.#letters = [];
    this.#trail = 8;
    this.#fontSize = parseInt(random(2, 20));
    // this.#fontSize = parseInt(Math.abs(randomGaussian(12, 4)));
    this.#colorWeight = 100 * (this.#fontSize / 20);

    for (let i = 0; i < this.#trail; i++) {
      this.#letters.push(this.generateLetter());
    }
  }

  generateLetter() {
    const nums = String.fromCharCode(random(48, 58));
    const en = String.fromCharCode(random(65, 91));
    const jp = String.fromCharCode(random(12353, 12543));

    const letters = [nums, en, jp];
    return letters[parseInt(random(0, 3))];
  }

  update() {
    this.#velocity.add(this.#acceleration);
    this.#location.add(this.#velocity);
    this.#lifespan -= 2;
  }

  display() {
    if (frameCount % parseInt(random(20, 60)) === 0) {
      const index = parseInt(random(0, this.#trail));
      this.#letters[index] = this.generateLetter();
    }

    for (let i = 0; i < this.#letters.length; i++) {
      const alpha = 1 - i * 0.11;
      fill(`rgba(0%, ${this.#colorWeight}%, 0%, ${alpha})`);
      textSize(this.#fontSize);
      text(this.#letters[i], this.#location.x, this.#location.y - i * this.#fontSize);
    }
  }

  isDead() {
    return this.#lifespan <= -200;
  }

  get x() {
    return this.#location.x
  }

  get y() {
    return this.#location.y
  }
}
