let origin;
let bob;
let restLength;

function setup() {
  createCanvas(640, 360);
  restLength = 200;
  origin = createVector(width/2, 0);
  bob = new Mover(1, width/2, 240);
}

function draw() {
  background(255);
  line(origin.x, origin.y, bob.position.x, bob.position.y);

  let spring = p5.Vector.sub(bob.position, origin);
  let currentLength = spring.mag();
  spring.normalize();
  let k = 0.01;
  let stretch = currentLength - restLength;
  spring.mult(-k * stretch);

  bob.applyForce(spring);
  bob.update();
  bob.display();
}
