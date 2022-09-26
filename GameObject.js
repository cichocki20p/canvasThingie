class GameObject {
    constructor(x, y, size, color) {
        this.x = x
        this.y = y
        this.size = size
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        c.fillStyle = this.color
        c.fill()
    }
}

class Player extends GameObject {
    constructor(x, y, size, color, speed) {
        super()
        this.x = x
        this.y = y
        this.size = size
        this.color = color
        this.speed = speed
    }

    moveLeft() {
        let newX = this.x - this.speed
        this.x = newX
    }

    moveRight() {
        let newX = this.x + this.speed
        this.x = newX
    }

    moveUp() {
        let newY = this.y - this.speed
        this.y = newY
    }

    moveDown() {
        let newY = this.y + this.speed
        this.y = newY
    }
}