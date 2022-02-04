let myCanvas = document.getElementById("my-canvas");
let ctx = myCanvas.getContext("2d");

let xPosition = 0;
let yPosition = 0;
let xDirection = 2;


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

function bounceHorizontal() {
    ctx.clearRect(0, 0, 500, 500)
    ctx.fillRect(xPosition, 0, 20, 20);
    xPosition = xPosition + xDirection;
    if (xPosition >= 500 || xPosition <= 0) {
        xDirection = -xDirection;
    }
}

setInterval(bounceHorizontal, 10);