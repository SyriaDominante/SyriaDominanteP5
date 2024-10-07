let c1, c2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  c1 = color("orange");
  c2 = color("red");

  // gradiente
  for (let y = 0; y < height; y++) {
    let n = map(y, 0, height, 0, 1);
    let newc = lerpColor(c1, c2, n);
    stroke(newc);
    line(0, y, width, y);
  }

  // stelle sullo sfondo
  drawStars(300);  
}

function drawStars(numStars) {
  let passo = 3;

  for (let i = 0; i < numStars; i++) {
    // Posizione casuale per ogni stella
    let x_star = random(width);
    let y_star = random(height);
    
    // Dimensione stella
    let starSize = random(1, 3);  
    strokeWeight(starSize);

    // Colore alternato
    if (i % 2 == 0) {
      stroke("lightyellow");
    } else {
      stroke("white");
    }
    
    // disegnare il punto
    point(x_star, y_star);
  }

  // disegnare sole
  {fill("lightyellow");
  stroke("yellow");
  strokeWeight("5");
  circle (270, 450, 300);}

  // prato
  {fill("green");
  stroke("green");
  strokeWeight("2");
  rect (0, 500, 600);}

  // montagne
  {
    fill(139, 69, 19);  
    noStroke();
    triangle(0, 500, 100, 300, 200, 500);}

    {fill(81, 40, 12)
    triangle(150, 500, 300, 300, 450, 500);}
    
    {fill(139, 69, 19); 
      triangle(400, 500, 550, 250, 700, 500);} 

    {
      fill(81, 40, 12)
      triangle(900, 500, 1050, 250, 1200, 500);} 
    {

      {fill (139, 69, 19);
      triangle(1150, 500, 1300, 300, 1450, 500);}
  
  }





}

