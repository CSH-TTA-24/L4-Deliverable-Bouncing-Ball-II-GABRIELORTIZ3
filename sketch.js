let xPos = 250;
let yPos = 250;
let xSpeed
let ySpeed
let xDirection = 1;
let yDirection = 1;
function setup() {
  createCanvas(500, 500);
  background(0);
  xSpeed = random(-5, 5);
  ySpeed = random(-5, 5);






}
// Im stuck on this one For some reason it dose not work and dose not bounce off the walls
function draw() {
  background(0);
  fill(0, 255, 0);
  ellipse(xPos, yPos, 50, 50);
  xPos += xSpeed * xDirection;
  yPos += ySpeed * yDirection;

  if (xPos > 475 || xPos < 25) {
    xDirection *= -1;
		yDirection *= -1;
  }
}
