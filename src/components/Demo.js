const Sketch = p => {
  let y = 100

  p.setup = function() {
    p.createCanvas(480, 320)
    p.stroke(255) // Set line drawing color to white
    p.frameRate(30)
  }

  p.draw = function() {
    p.background(0) // Set the background to black
    y = y - 1
    if (y < 0) {
      y = p.height
    }
    p.line(0, y, p.width, y)
  }
}

export default Sketch
