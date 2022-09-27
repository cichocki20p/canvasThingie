function distance(x1, y1, x2, y2) {
    let a = Math.max(x1, x2) - Math.min(x1, x2)
    let b = Math.max(y1, y2) - Math.min(y1, y2)
    return Math.sqrt((a * a) + (b * b))
}

function distance2(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)) 
}

function collide(rad1, rad2, distance) {
    if ((rad1 + rad2) > distance) return true
    return false
}

function isColliding(obj1, obj2, x, y) {
    if (collide(obj1.size, obj2.size, distance(obj1.x + x, obj1.y + y, obj2.x, obj2.y))) return true
    return false
}