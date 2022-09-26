const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight - 100

function drawLine(x1, y1, x2, y2) {
    c.beginPath();
    c.moveTo(x1, y1)
    c.lineTo(x2, y2)
    c.stroke()
}

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
}

class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity = velocity
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
    }
}

class SquareObject {
    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }

    draw() {
        drawLine(this.x, this.y, this.x + this.width, this.y)
        drawLine(this.x + this.width, this.y, this.x + this.width, this.y + this.height)
        drawLine(this.x + this.width, this.y + this.height, this.x, this.y + this.height)
        drawLine(this.x, this.y + this.height, this.x, this.y)
    }
}

function hitBox(event, obiekcik) {
    if (event.clientX >= obiekcik.x &&
        event.clientX <= (obiekcik.x + obiekcik.width) &&
        event.clientY >= obiekcik.y &&
        event.clientY <= (obiekcik.y + obiekcik.height)) {
        return true
    }
    return false
}

const x = canvas.width / 2
const y = canvas.height / 2

const player = new Player(x, y, 20, 'blue')

player.draw()

drawLine(0, y, canvas.width, y)
drawLine(x, 0, x, canvas.height)

let objWidth = (canvas.width / 2) / 3
let objHeight = (canvas.height / 2) / 3

// clickable objects
const ob1 = new SquareObject(x, y, objWidth, objHeight)
const ob2 = new SquareObject(x + objWidth, y, objWidth, objHeight)
const ob3 = new SquareObject(x + objWidth * 2, y, objWidth, objHeight)
const ob4 = new SquareObject(x, y + objHeight, objWidth, objHeight)
const ob5 = new SquareObject(x + objWidth, y + objHeight, objWidth, objHeight)
const ob6 = new SquareObject(x + objWidth * 2, y + objHeight, objWidth, objHeight)
ob1.draw()
ob2.draw()
ob3.draw()
ob4.draw()
ob5.draw()
ob6.draw()

// is something clicked
window.addEventListener('click', (event) => {
    const projectile = new Projectile(event.clientX, event.clientY, 5, 'red', null)

    if (hitBox(event, ob1)) {
        projectile.draw()
        console.log("kliknięty składnik 1")
    }

    if (hitBox(event, ob2)) {
        projectile.draw()
        console.log("kliknięty składnik 2")
    }

    if (hitBox(event, ob3)) {
        projectile.draw()
        console.log("kliknięty składnik 3")
    }

    if (hitBox(event, ob4)) {
        projectile.draw()
        console.log("kliknięty składnik 4")
    }

    if (hitBox(event, ob5)) {
        projectile.draw()
        console.log("kliknięty składnik 5")
    }

    if (hitBox(event, ob6)) {
        projectile.draw()
        console.log("kliknięty składnik 6")
    }

})
