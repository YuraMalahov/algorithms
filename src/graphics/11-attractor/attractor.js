class Attractor {
  #mass;    // Mass, tied to size
  #radius;  // Radius of the attractor
  #position;   // position
  #dragging = false; // Is the object being dragged?
  #rollover = false; // Is the mouse over the ellipse?
  #drag;  // holds the offset for when object is clicked on

  constructor() {
    this.#position = createVector(width/2, height/2);
    this.#mass = 10;
    this.#radius = this.#mass * 3;
    this.#drag = createVector(0.0, 0.0);
  }

  attract(m) {
    let force = p5.Vector.sub(this.#position, m.position); // Calculate direction of force
    let d = force.mag();                                   // Distance between objects
    d = constrain(d, 5.0, 25.0);                           // Limiting the distance to eliminate "extreme" results for very close or very far objects
    force.normalize();                                     // Normalize vector (distance doesn't matter here, we just want this vector for direction)
    let strength = (g * this.#mass * m.mass) / (d * d);    // Calculate gravitional force magnitude
    force.mult(strength);                                  // Get force vector --> magnitude * direction

    return force;
  }

  display() {
    ellipseMode(CENTER);
    stroke(0);

    if (this.#dragging) {
      fill (50);
    } else if (this.#rollover) {
      fill(100);
    } else {
      fill(0);
    }

    ellipse(this.#position.x, this.#position.y, this.#radius*2, this.#radius*2);
  }

  clicked(mx, my) {
    const d = dist(mx, my, this.#position.x, this.#position.y);
    if (d < this.#radius) {
      this.#dragging = true;
      this.#drag.x = this.#position.x-mx;
      this.#drag.y = this.#position.y-my;
    }
  }

  rollover(mx, my) {
    const d = dist(mx, my, this.#position.x, this.#position.y);
    if (d < this.#radius) {
      this.#rollover = true;
    } 
    else {
      this.#rollover = false;
    }
  }

  stopDragging() {
    this.#dragging = false;
  }

  drag() {
    if (this.#dragging) {
      this.#position.x = mouseX + this.#drag.x;
      this.#position.y = mouseY + this.#drag.y;
    }
  }
}
