const ballRadius = 12;

class Ball {
  #location;
  #velocity;
  #aceleration;
  #mass;

  constructor(mass) {
    this.#mass = mass;
    this.#location = createVector(random(width), this.ballRadius());
    this.#velocity = createVector(0, 0);
    this.#aceleration = createVector(0, 0);
  }

  applyForce(force) {
    const f = p5.Vector.div(force, this.#mass);
    this.#aceleration.add(f);
  }

  update() {
    this.#velocity.add(this.#aceleration);
    this.#location.add(this.#velocity);
    this.#aceleration.mult(0);
  }

  border() {
    const ballRadius = this.ballRadius();

    if (this.#location.x > (width - ballRadius) || this.#location.x < ballRadius) {
      this.#location.x = (width - ballRadius);
      this.#velocity.x = this.#velocity.x * -1;
    }
    if (this.#location.y > (height - ballRadius) || this.#location.y < ballRadius) {
      this.#location.y = (height - ballRadius);
      this.#velocity.y = this.#velocity.y * -1;
    }
  }

  size() {
    return this.#mass * 10;
  }

  ballRadius() {
    return this.size()/2;
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(127);
    ellipse(this.#location.x, this.#location.y, this.size(), this.size());
  }

  get velocity() {
    return this.#velocity;
  }

  get location() {
    return this.#location;
  }

  get mass() {
    return this.#mass;
  }
}

class Liquid {
  constructor(x, y, width, height, coeficient) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.coeficient = coeficient;
  }

  display() {
    noStroke();
    fill(175);
    rect(this.x, this.y, this.width, this.height);
  }

  isInLiquid(item) {
    return this.y <= item.location.y && item.location.y <= (this.y + this.height);
  }

  getDragForce(item) {
    const drag = item.velocity.copy();
    drag.normalize();
    const speed = item.velocity.mag();
    drag.mult(-1 * this.coeficient * speed * speed);

    return drag;
  }
}


let balls = [];
let liquid;

function setup() {
  createCanvas(600, 600);

  for (let i = 0; i < 10; i++) {
    balls.push(new Ball(random(1, 10)));
  }

  liquid = new Liquid(0, height / 2, width, height / 2, 0.15);
}

function draw() {
  background(255);

  liquid.display();

  balls.forEach(ball => {
    const gravity = createVector(0, 0.2);
    gravity.mult(ball.mass);
    ball.applyForce(gravity);
  
    if (liquid.isInLiquid(ball)) {
      const drag = liquid.getDragForce(ball);
      ball.applyForce(drag);
    }

    ball.update();
    ball.border();
    ball.display();
  });
}
