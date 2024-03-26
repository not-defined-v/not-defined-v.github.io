function drawStars(x, y) {
  push();
  translate(x, y);
  let size = random();
  noStroke();
  fill(255, 255, 255, 230 - 80 * sin(frameCount));
  ellipse(x, y, size + 4 + sin(frameCount / 3), size + sin(frameCount / 3));
  ellipse(x, y, size + sin(frameCount / 3), size + 6 + sin(frameCount / 3));
  pop();
}

function drawBigStars(x, y){
  push();
  translate(x, y);
  let size = random(0, 2);
  noStroke();
  fill(255, 255, 255, 230 - 80 * sin(frameCount));
  ellipse(x, y, size + 20 + 50*sin(frameCount / 3), size + 50*sin(frameCount / 3));
  ellipse(x, y, size + 50*sin(frameCount / 3), size + 30 + 50*sin(frameCount / 3));
  pop();
}

function determine_key() {
  return keyIsPressed 
}

document.onfullscreenchange = function() {
  // Fullscreen state changed
  if (document.fullscreen) {
    // Entered fullscreen
    console.log("Entered fullscreen");
    // Redraw or update your sketch here
  } else {
    // Exited fullscreen
    console.log("Exited fullscreen");
    // Redraw or update your sketch here
    redraw();
    updatePixels();
  }
};
