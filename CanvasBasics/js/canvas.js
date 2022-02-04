for (let counter = 1; counter <= 10; counter++) {
    console.log(counter)
}

for (let counter = 10; counter >= 1; counter--) {
    console.log(counter)
}

for (let counter = 1; counter <= 10; counter = counter + 2) {
    console.log(counter)
}

let myCanvas = document.getElementById("my-canvas")
let ctx = myCanvas.getContext("2d");

ctx.fillStyle = "RebeccaPurple";
ctx.fillRect(0, 0, 200, 100)

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(200, 100)
ctx.stroke();

ctx.beginPath();
ctx.moveTo(0, 100);
ctx.lineTo(200, 0)
ctx.stroke();

for (let radius = 25; radius >= 5; radius -= 5) {
    ctx.beginPath();
    ctx.arc(100, 50, radius, 0, 2 * Math.PI);
    ctx, strokeStyle = "Red"
    ctx.stroke();
}