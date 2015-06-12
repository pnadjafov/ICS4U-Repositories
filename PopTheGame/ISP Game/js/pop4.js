var canvas = document.getElementById('game');
var clicks = 0;
var win = false;
var sideLength = 10;
var xCoor = canvas.width / 2.0 - sideLength / 2.0;
var yCoor = canvas.height / 2.0 - sideLength / 2.0;
/*var lineOneX = 275;
var lineOneY = 350;
var lineTwoX = 25;
var lineTwoY = 350;
var lineThreeX = canvas.width / 2;
var lineThreeY = 150;

/*var x1 = (lineOneX / 4) +94.5;
var y1 = lineOneY - 62;
var x2 = (lineTwoX / 4) +130.5
var y2 = lineTwoY - 62;
var x3 = lineThreeX;
var y3 = lineThreeY + 114.5;       
*/

var lineOneX = canvas.width / 10;
var lineOneY = canvas.height/1.5;
var lineTwoX = canvas.width - (canvas.width / 10);
var lineTwoY = canvas.height/1.5;
var lineThreeX = canvas.width / 2;
var lineThreeY = canvas.height / 3.5;

var x1 = (canvas.width / 2.5) -22 ;
var y1 = lineOneY - 63;
var x2 = (canvas.width - canvas.width / 2.5) +22;
var y2 = lineTwoY - 63;
var x3 = lineThreeX;
var y3 = (canvas.height / 2.1) - 25.5;


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
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.beginPath();
        ctx.moveTo(lineOneX, lineOneY);
        ctx.lineTo(lineTwoX, lineTwoY);
        ctx.lineTo(lineThreeX, lineThreeY);
        ctx.closePath();
        ctx.lineWidth = 5;
        ctx.strokeStyle = 'black';
        ctx.stroke();

        var ctx2 = canvas.getContext('2d');

        ctx2.beginPath();
        ctx2.moveTo(x1, y1);
        ctx2.lineTo(x2, y2);
        ctx2.lineTo(x3, y3);
        ctx2.closePath();
        ctx2.fillStyle = 'orange';

        ctx2.fill();
        ctx2.strokeStyle = 'orange';
        ctx2.stroke();


    }

    var ctx3 = canvas.getContext("2d");
    ctx3.font = "50px Jelly";
    ctx3.fillStyle = 'black';
    ctx3.fillText("Level 3", 10, 50);
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
        x1--;
        y1++;
        x2++;
        y2++;
        y3--;

        var ctx4 = canvas.getContext('2d');

        ctx4.beginPath();
        ctx4.moveTo(x1, y1);
        ctx4.lineTo(x2, y2);
        ctx4.lineTo(x3, y3);
        ctx4.closePath();
        ctx4.fillStyle = 'orange';

        ctx4.fill();
        ctx4.strokeStyle = 'orange';
        ctx4.stroke();



    }
    setTimeout(grow, 10);
}
