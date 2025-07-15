function setup() {
  createCanvas(400, 400);
  background(148, 251, 255); // Couleur de fond
noStroke();

  // Visage
  fill(255, 255, 0);
  ellipse(202, 208, 300, 300);

  // Yeux
  fill(0);
  ellipse(157, 151, 40, 40);
  ellipse(304, 142, 40, 40);
  // Pupilles
  fill(255);
  ellipse(157,151,15,15);
  ellipse(304,142,15,15);

  // Bouche
  fill(255, 0, 0);
  ellipse(257, 240, 120, 136);

  // Bandeau
  strokeWeight(33);
  stroke(250,0,242)
  line(83, 116, 271, 74);
}

