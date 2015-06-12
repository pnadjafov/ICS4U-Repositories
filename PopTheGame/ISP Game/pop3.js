var canvas = document.getElementById('game');
var clicks = 0;
var win = false;
var sideLength = 10;
var xCoor = canvas.width / 2.0 - sideLength / 2.0;
var yCoor = canvas.height / 2.0 - sideLength / 2.0;

$("#game").click(function(e) {
    clicks++;
    if (clicks == 1) {
        grow();
    } else if (clicks == 2) {
        if (sideLength >= 110 && sideLength < 125) {
            win = true;
        }
    }

});

$(document).ready(function() {
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext("2d");
    var bigSquareWidth = bigSquareHeight = 225;
    ctx.fillStyle = "#A2322E";
    ctx.beginPath();
    ctx.moveTo(100, 110);
    ctx.lineTo(200, 10);
    ctx.lineTo(300, 110);
    ctx.closePath();
    ctx.fill();
    var ctx2 = canvas.getContext("2d");
    ctx2.beginPath();
    ctx2.rect(xCoor, yCoor, sideLength, sideLength);
    ctx2.fillStyle = '#FA6B05';
    ctx2.fill();
    
    var ctx3 = canvas.getContext("2d");
    ctx3.font = "50px Jelly";
    ctx3.fillText("Level 2", 10, 50);
})


function grow() {
    if (clicks == 2) {
        if (sideLength >= 225 && sideLength <= 235) {
            var winMessage = canvas.getContext("2d");
            winMessage.font = "50px Jelly";
            winMessage.fillStyle = 'black';
            winMessage.fillText("You Win!", 60, 265);
            return;
        } else {
            var loseMessage = canvas.getContext("2d");
            loseMessage.font = "50px Jelly";
            loseMessage.fillStyle = 'black';
            loseMessage.fillText("You Lose!", 60, 265);
            return;
        }
        clicks = 0;
        win = false;
        return;
    } else {
        sideLength++;
        var ctx2 = canvas.getContext("2d");
        ctx2.beginPath();
        ctx2.fillStyle = '#FA6B05';
        ctx2.rect(canvas.width / 2.0 - sideLength / 2.0, canvas.height / 2.0 - sideLength / 2.0, sideLength, sideLength);
        ctx2.fill();
        if (sideLength > 235) {
            var loseMessage = canvas.getContext("2d");
            loseMessage.font = "50px Jelly";
            loseMessage.fillStyle = 'black';
            loseMessage.fillText("You Lose!", 60, 265);
            return;
        }

    }
    setTimeout(grow, 10);
}
