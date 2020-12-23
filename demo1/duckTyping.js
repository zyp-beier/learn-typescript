function addPoints(p1, p2) {
    var x = p1.x + p2.x;
    var y = p1.y + p2.y;
    return { x: x, y: y };
}
var newPoint = addPoints({ x: 1, y: 3 }, { x: 2, y: 5 });
console.log(newPoint);
