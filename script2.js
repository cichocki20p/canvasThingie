const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = innerWidth
canvas.height = innerHeight - 100

let midOS = [canvas.width / 2, canvas.height / 2]

const player = new Player(midOS[0], midOS[1], 20, "aqua", 10)
// player.draw()
const rock = new GameObject(midOS[0] - 100, midOS[1] - 100, 40, "red")
// rock.draw()

let x = distance(player.x, player.y, rock.x, rock.y)

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

function gameLoop() {

    x = distance(player.x, player.y, rock.x, rock.y)
    if (collide(player.size, rock.size, x)) {
        player.color = "yellow"
    } else {
        player.color = "aqua"
    }

    if (moveLeft) {
        clearScreen()
        player.moveLeft()
    }

    if (moveRight) {
        clearScreen()
        player.moveRight()
    }

    if (moveUp) {
        clearScreen()
        player.moveUp()
    }

    if (moveDown) {
        clearScreen()
        player.moveDown()
    }

    rock.draw()
    player.draw()

    requestAnimationFrame(gameLoop)
}

window.onload = () => {
    requestAnimationFrame(gameLoop)
}