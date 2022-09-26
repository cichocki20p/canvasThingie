function distance(x1, y1, x2, y2) {
    let a = Math.max(x1, x2) - Math.min(x1, x2)
    let b = Math.max(y1, y2) - Math.min(y1, y2)
    return Math.sqrt((a * a) + (b * b))
}

function collide(rad1, rad2, distance) {
    if ((rad1 + rad2) > distance) return true
    return false
}