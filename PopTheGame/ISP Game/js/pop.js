var radius2 = 0;
var canvas = document.getElementById('game');
var clicks = 0;
var win = false;

$("#game").click(function(e) {
    clicks++;
    if (clicks == 1) {
        grow();
    } else if (clicks == 2) {
        if (radius2 >= 110 && radius2 < 125) {
            win = true;
        }
    }

});


$(document).ready(function() {
    var canvas = document.getElementById('game');
    var ctx = canvas.getContext("2d");
    var centerX = canvas.width / 2;
    var centerY = canvas.height / 2;
    var radius = 125;

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#003300';
    ctx.stroke();

    var radius2 = 0;
    var centerX2 = canvas.width / 2;
    var centerY2 = canvas.height / 2;
    var ctx2 = canvas.getContext("2d");
    ctx2.beginPath();
    ctx2.arc(centerX2, centerY2, radius2, 0, 2 * Math.PI, false);
    ctx2.fillStyle = "#ed1c24";
    ctx2.fill();
    ctx2.lineWidth = 0;



    var ctx3 = canvas.getContext("2d");

    ctx3.font = "50px Jelly";
    ctx3.fillText("Level 1", 10, 50);
})


function grow() {
    if (clicks == 2) {
        if (radius2 >= 120 && radius2 <= 135) {
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
        radius2 = radius2 + 1;
        var centerX2 = canvas.width / 2;
        var centerY2 = canvas.height / 2;
        var ctx2 = canvas.getContext("2d");
        ctx2.beginPath();
        ctx2.arc(centerX2, centerY2, radius2, 0, 2 * Math.PI, false);
        ctx2.fillStyle = '#ed1c24';
        ctx2.fill();
        ctx2.lineWidth = 0;
        if (radius2 > 135) {
            var loseMessage = canvas.getContext("2d");
            loseMessage.font = "50px Jelly";
            loseMessage.fillStyle = 'black';
            loseMessage.fillText("You Lose!", 60, 265);
            return;
        }

    }
    setTimeout(grow, 20);
}
