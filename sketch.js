const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

let barca;

function preload() {
  barca = loadImage("barca.jpg");
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(0);

  barca.loadPixels();

  let w = width / barca.width;
  let h = height / barca.height;

  for (let i = 0; i < barca.height; i++) {
    for (let j = 0; j < barca.width; j++) {
      let pixelIndex = (j + i * barca.width) * 4;

      const r = barca.pixels[pixelIndex + 0];
      const g = barca.pixels[pixelIndex + 1];
      const b = barca.pixels[pixelIndex + 2];
      const average = (min(r,g,b) + max(r,g,b)) / 2;

      const charIndex = Math.floor(map(average, 0, 255, density.length, 0));

      noStroke();
      fill(average);
      text(density.charAt(charIndex), j * w, i * h);
    }
  }
}
