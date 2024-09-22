var style

let j = 0

function setup() {
  createCanvas(300, 300);
  style = getComputedStyle(document.body)
  background(get_color("--background"))
}

function draw() {
  noFill()
  stroke(get_color("--accent"))
  // if(stat)
  // {
  //   stat.draw()
  // }
}

function get_color(color_name) {return style.getPropertyValue(color_name)}