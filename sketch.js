let num = 6;

function setup() {
    createCanvas(windowWidth,windowHeight) // mini version
 
  noStroke();
}

function draw() {
  frameRate(1);
  background(255);
  drawCircle(width / 2, width/2, 10);
}


function drawCircle(x, radius, level) {
  const tt = (126 * level) / 4.0;
  fill(tt);
  fill(random(255),random(255),random(255));

  ellipse(x, radius*2.825, radius * 2, radius * 2);
  if (level > 1) {
    level = level - 1;
    drawCircle(x - radius / 2, radius / 2, level);
    drawCircle(x + radius / 2, radius / 2, level);
  }
}


// // if enter is pressed, download a jpg file
// function keyPressed() {
//   if (keyCode == 13) {
// 	saveCanvas('Abstract_Tile_Arrangement', 'jpg');
//   } else {
//   }
// }

// function saveBatch(num) {
//   if (frameCount <= num) {
//     saveCanvas('Abstract_Tile_Arrangement'+frameCount, 'jpg');
//   }
//   else  {
//      noLoop();
//   }
 
// }