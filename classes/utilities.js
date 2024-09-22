function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    let vertices = [];
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertices.push([sx, sy])
        vertex(sx, sy);
    }
    endShape(CLOSE);
    return vertices
}