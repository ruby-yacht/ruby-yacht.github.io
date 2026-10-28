function setup() {
  createCanvas(600, 600);
  background(210);
}


function draw() {
  fill(255, 200, 138);
  ellipse(340, 340, 400, 420);
  fill(10);
  beginShape();
  vertex(550, 310);
  vertex(350, 300);
  vertex(270, 330);
  vertex(150, 470);
  vertex(125, 600);
  vertex(120, 200);
  vertex(140, 125);
  vertex(350, 100);
  vertex(450, 130);
  vertex(520, 180);
  endShape();
}
