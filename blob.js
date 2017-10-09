function Blob(x, y, radius) {
    this.pos = createVector(x, y);
    this.r = radius;

    this.show = function () {
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);
    }
}