var style

function setup() {
  createCanvas(300, 300);
  style = getComputedStyle(document.body)
}

function draw() {
  background(style.getPropertyValue("--background"))
  stroke(style.getPropertyValue("--accent"))
  strokeWeight(2)
  point(150,150)
}