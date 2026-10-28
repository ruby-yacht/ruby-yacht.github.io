function setup() {
createCanvas(600, 600);
background(204);
}


function draw() {

  fill(7, 18, 58);
  beginShape();

  // Add vertices.
  vertex(600, 437);
  vertex(547,398);
  vertex(497,516);
  vertex(370,518);
  vertex(320,405);
  vertex(222,405);
  vertex(92,474);
  vertex(52,606);
  vertex(600,600);
  
  // Stop drawing the shape.
  endShape(CLOSE);
      fill(255, 204, 0);
  ellipse(450, 300, 250, 400);
}
