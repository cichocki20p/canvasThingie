const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight - 100

let midOS = [canvas.width / 2, canvas.height / 2]

const player = new Player(midOS[0], midOS[1], 20, "aqua", 10)
const rock = new GameObject(midOS[0] - 100, midOS[1] - 100, 40, "red")
const rock2 = new GameObject(midOS[0] + 100, midOS[1] + 200, 40, "red")
const rock3 = new GameObject(midOS[0] - 300, midOS[1] - 180, 40, "red")
const rock4 = new GameObject(midOS[0] - 100, midOS[1] + 300, 40, "red")
const rock5 = new GameObject(midOS[0] + 300, midOS[1] + 80, 40, "red")
const rock6 = new GameObject(midOS[0] - 90, midOS[1] + 250, 40, "red")

let x = distance2(player.x, player.y, rock.x, rock.y)


let moveLeft = false
let moveRight = false
let moveUp = false
let moveDown = false
window.onmousedown = () => hold = true
window.onmouseup = () => hold = false

window.onkeydown = (event) => {
    switch (String.fromCharCode(event.keyCode)) {
        case "A":
            moveLeft = true
            break
        case "W":
            moveUp = true
            break
        case "S":
            moveDown = true
            break
        case "D":
            moveRight = true
    }
}

window.onkeyup = (event) => {
    switch (String.fromCharCode(event.keyCode)) {
        case "A":
            moveLeft = false
            break
        case "W":
            moveUp = false
            break
        case "S":
            moveDown = false
            break
        case "D":
            moveRight = false
    }
}

function clearScreen() {
    c.clearRect(0, 0, canvas.width, canvas.height)
}

function borderContact(obj) {
    if ((obj.x + obj.size) > canvas.width ||
        (obj.x - obj.size) < 0 ||
        (obj.y + obj.size) > canvas.height ||
        (obj.y - obj.size) < 0) {
        return true
    } return false
}

function gameLoop() {

    // x = distance2(player.x, player.y, rock.x, rock.y)
    // if (collide(player.size, rock.size, x)) {
    //     player.color = "yellow"
    // } else {
    //     player.color = "aqua"
    // }
    let collision = (
        isColliding(player, rock, 0, 0) || 
        isColliding(player, rock2, 0, 0) || 
        isColliding(player, rock3, 0, 0) ||
        isColliding(player, rock4, 0, 0) ||
        isColliding(player, rock5, 0, 0) ||
        isColliding(player, rock6, 0, 0)
    )

    if (collision) {
        player.color = "yellow"
    } else {
        player.color = "aqua"
    }

    if (moveLeft) {
        clearScreen()
        player.moveLeft()
        if (borderContact(player)) {
            player.moveRight()
        }
    }

    if (moveRight) {
        clearScreen()
        player.moveRight()
        if (borderContact(player)) {
            player.moveLeft()
        }
    }

    if (moveUp) {
        clearScreen()
        player.moveUp()
        if (borderContact(player)) {
            player.moveDown()
        }
    }

    if (moveDown) {
        clearScreen()
        player.moveDown()
        if (borderContact(player)) {
            player.moveUp()
        }
    }

    rock.draw()
    rock2.draw()
    rock3.draw()
    rock4.draw()
    rock5.draw()
    rock6.draw()
    player.draw()

    requestAnimationFrame(gameLoop)
}

window.onload = () => {
    requestAnimationFrame(gameLoop)
}