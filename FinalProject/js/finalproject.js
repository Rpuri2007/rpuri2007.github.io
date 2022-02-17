let myCanvas = document.getElementById("my-canvas")
let ctx = myCanvas.getContext("2d")
let keydownOutput = document.getElementById("keydown-output")
let keyupOutput = document.getElementById("keyup-output")

let playerXPosition = 25;
let playerYPosition = 475;
let playerXMovement = 0;
let playerYMovement = 0;
let playerSpeed = 1;
let obstacleWidth = 5
let obstacleHeight = 100
const MAZE_X = 300
const MAZE_Y = 300
const BALL_RADIUS = 10;

function drawPlayer() {
    ctx.beginPath();
    ctx.arc(playerXPosition, playerYPosition, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
}

function drawMaze() {
    ctx.fillRect(MAZE_X, MAZE_Y, obstacleWidth, obstacleHeight)
}

function keyPressed(event) {
    let key = event.keyCode;
    keydownOutput.innerHTML = "key down code: " + key;
    if (key === 37) {
        playerXPosition = -1
    } else if (key === 39) {
        playerXPosition = 1;
    } else if (key === 38) {
        playerYPosition = -1
    } else
        playerYPosition = 1

}

function keyReleased(event) {
    let key = event.keyCode;
    keyupOutput.innerHTML = "key up code: " + key;
    if (key === 37) {
        playerXMovement = 0;
    } else if (key === 39) {
        playerXMovement = 0;
    } else if (key === 38) {
        playerYMovement = 0;
    } else {
        playerYMovement = 0;
    }
}

function movePlayer() {
    playerXPosition += playerSpeed * playerXMovement;
    playerYPosition += playerSpeed * playerYMovement;
}

function refreshUI() {
    drawPlayer();
    drawMaze();
    keyPressed();
    keyReleased();
    movePlayer();
}

setInterval(refreshUI, 10)