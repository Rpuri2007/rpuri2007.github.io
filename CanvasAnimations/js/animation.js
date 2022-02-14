let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");

let xPosition = 0;
let yPosition = 0;
let xDirection = 2;
let playerX = 250;
let playerY = 250;
let playerXDir = 0;
let playerYDir = 0;
let playerSpeed = 2;
let ballX = 100;
let ballY = 200;
let ballXDir = 2;
let ballYDir = 2;
const BALL_RADIUS = 15;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;


function moveHorizontal() {
    ctx.clearRect(0, 0, 500, 500)
    ctx.fillRect(xPosition, 0, 20, 20);
    xPosition += 1;
    if (xPosition >= 500) {
        xPosition = 0;
    }
}

function moveVertical() {
    ctx.clearRect(0, 0, 500, 500)
    ctx.fillRect(0, yPosition, 20, 20);
    yPosition += 1;
    if (yPosition >= 500) {
        yPosition = 0;
    }
}

let keydownOutput = document.getElementById("keydown-output")
let keyupOutput = document.getElementById("keyup-output")

function keyPressed(event) {
    let key = event.keyCode;
    keydownOutput.innerHTML = "key down code: " + key;


    if (key === 37) {
        playerXDir = -1
    } else if (key === 39) {
        playerXDir = 1;
    } else if (key === 38) {
        playerYDir = -1
    } else
        playerYDir = 1

}

function keyReleased(event) {
    let key = event.keyCode;
    keyupOutput.innerHTML = "key up code: " + key;
    if (key === 37) {
        playerXDir = 0;
    } else if (key === 39) {
        playerXDir = 0;
    } else if (key === 38) {
        playerYDir = 0;
    } else {
        playerYDir = 0;
    }
}

function drawPlayer() {
    ctx.fillRect(playerX, playerY, 100, 20);
}

function movePlayer() {
    playerX += playerSpeed * playerXDir;
    playerY += playerSpeed * playerYDir;

    if (playerX < 0) {
        playerX = 0;
    } else if (playerX > 400) {
        playerX = 400;
    } else if (playerY < 0) {
        playerY = 0;
    } else if (playerY > 480) {
        playerY = 480;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fill();
}


function moveBall() {
    ballY += ballYDir;
    ballX += ballXDir;
}

function checkBallCollision() {
    if (ballY > 500 - BALL_RADIUS || (ballY < 0 + BALL_RADIUS)) {
        ballYDir = -ballYDir;
    } else if ((ballX > 500 - BALL_RADIUS) || (ballX < 0 + BALL_RADIUS)) {
        ballXDir = -ballXDir;
    }
    if (ballX + BALL_RADIUS >= playerX && ballX - BALL_RADIUS <= playerX + PADDLE_WIDTH && ballY + BALL_RADIUS >= playerY && ballY - BALL_RADIUS <= playerY + PADDLE_HEIGHT) {
        ballYDir = -ballYDir;
    }

}



function refreshUI() {
    ctx.clearRect(0, 0, 500, 500)
    movePlayer();
    drawPlayer();
    moveBall();
    drawBall();
    checkBallCollision();
}

function bounceHorizontal() {
    ctx.clearRect(0, 0, 500, 500)
    ctx.fillRect(xPosition, 0, 20, 20);
    xPosition = xPosition + xDirection;
    if (xPosition >= 500 || xPosition <= 0) {
        xDirection = -xDirection;
    }
}

setInterval(refreshUI, 10);