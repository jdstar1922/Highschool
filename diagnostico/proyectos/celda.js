class Celda {
  constructor(i, j, w) {
    this.i = i;
    this.j = j;
    this.x = i * w;
    this.y = j * w;
    this.w = w;
    this.r = 255;
    this.g = 255;
    this.b = 255;
    this.p = 0;
  }
  show() {
    stroke(0);
    noFill();
    rect(this.x, this.y, this.w, this.w);
    fill(this.r, this.g, this.b);
    ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.9);
  }
  contains(x, y) {
    return (
      x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w
    );
  }
  fillCell(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
}
